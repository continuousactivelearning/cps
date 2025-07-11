// Author:@B V Sai Pranav
import { Request, Response } from 'express';
import { UserTopic } from '../models/UserTopic';
import { Topic } from '../models/Topic';
import mongoose from 'mongoose';

interface AuthRequest extends Request {
  user?: {
    email: string;
  };
}

export const selectTopics = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user || !req.user.email) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { topicNames } = req.body;
    console.log('Received topicNames:', topicNames);

    if (!Array.isArray(topicNames)) {
      return res.status(400).json({ error: 'topicNames must be an array' });
    }

    // Normalize topic names for case-insensitive and trimmed matching
    const normalizedNames = topicNames.map((n: string) => n.trim().toLowerCase());
    const topics = await Topic.find({
      $expr: {
        $in: [
          { $toLower: { $trim: { input: "$name" } } },
          normalizedNames
        ]
      }
    });
    console.log('Topics found in DB:', topics.map(t => t.name));
    if (topics.length !== topicNames.length) {
      return res.status(400).json({ error: 'One or more topics not found', received: topicNames, found: topics.map(t => t.name) });
    }

    // Create user-topic relationships using topicName and userEmail
    const userTopics = await Promise.all(
      topicNames.map(async (topicName) => {
        try {
          const userTopic = new UserTopic({
            userEmail: req.user!.email,
            topicName,
            status: 'selected',
          });
          return await userTopic.save();
        } catch (error: any) {
          if (error.code === 11000) {
            return null;
          }
          throw error;
        }
      })
    );

    const savedUserTopics = userTopics.filter((ut) => ut !== null);

    res.status(201).json({
      message: 'Topics selected successfully',
      selectedTopics: savedUserTopics,
    });
  } catch (error) {
    console.error('Error selecting topics:', error);
    res.status(500).json({ error: 'Failed to select topics' });
  }
};

export const getUserTopics = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user || !req.user.email) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const userTopics = await UserTopic.find({ userEmail: req.user.email })
      .sort({ createdAt: -1 });

    res.json(userTopics);
  } catch (error) {
    console.error('Error fetching user topics:', error);
    res.status(500).json({ error: 'Failed to fetch user topics' });
  }
};

export const updateTopicProgress = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user || !req.user.email) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { topicName } = req.params;
    const { progress, status } = req.body;

    const userTopic = await UserTopic.findOne({
      userEmail: req.user.email,
      topicName,
    });

    if (!userTopic) {
      return res.status(404).json({ error: 'Topic not found for this user' });
    }

    if (progress !== undefined) {
      userTopic.progress = Math.min(Math.max(progress, 0), 100);
    }

    if (status) {
      userTopic.status = status;
    }

    userTopic.lastAccessed = new Date();
    await userTopic.save();

    res.json(userTopic);
  } catch (error) {
    console.error('Error updating topic progress:', error);
    res.status(500).json({ error: 'Failed to update topic progress' });
  }
};

export const startTopic = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user || !req.user.email) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { topicName } = req.body;

    if (!topicName) {
      return res.status(400).json({ error: 'topicName is required' });
    }

    // Check if topic exists
    const topic = await Topic.findOne({
      $expr: {
        $eq: [
          { $toLower: { $trim: { input: "$name" } } },
          topicName.trim().toLowerCase()
        ]
      }
    });

    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    // Check if user already has this topic
    const existingUserTopic = await UserTopic.findOne({
      userEmail: req.user.email,
      topicName: topic.name,
    });

    if (existingUserTopic) {
      // Update existing topic to in-progress if it's not already
      if (existingUserTopic.status !== 'in-progress') {
        existingUserTopic.status = 'in-progress';
        existingUserTopic.progress = 0;
        existingUserTopic.lastAccessed = new Date();
        await existingUserTopic.save();
      }
      return res.json(existingUserTopic);
    }

    // Create new user-topic relationship
    const userTopic = new UserTopic({
      userEmail: req.user.email,
      topicName: topic.name,
      status: 'in-progress',
      progress: 0,
      lastAccessed: new Date(),
    });

    await userTopic.save();

    res.status(201).json({
      message: 'Topic started successfully',
      userTopic,
    });
  } catch (error) {
    console.error('Error starting topic:', error);
    res.status(500).json({ error: 'Failed to start topic' });
  }
};
