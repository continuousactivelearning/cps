import { Request, Response } from 'express';
import { Topic } from '../models/Topic';

interface AuthRequest extends Request {
  user?: any;
}

export const getAllTopics = async (req: Request, res: Response) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch topics' });
  }
};

export const getTopicById = async (req: Request, res: Response) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    res.json(topic);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch topic' });
  }
};

export const createTopic = async (req: AuthRequest, res: Response) => {
  try {
    const topic = new Topic(req.body);
    await topic.save();
    res.status(201).json(topic);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create topic' });
  }
};

export const updateTopic = async (req: Request, res: Response) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'name',
    'description',
    'difficulty',
    'status',
    'progress',
    'problemsSolved',
    'totalProblems',
    'estimatedTime',
    'category',
    'tutorials',
  ];

  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).json({ error: 'Invalid updates' });
  }

  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    updates.forEach(update => ((topic as any)[update] = req.body[update]));
    await topic.save();

    res.json(topic);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update topic' });
  }
};

export const deleteTopic = async (req: Request, res: Response) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    res.json(topic);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete topic' });
  }
};

export const updateTutorialProgress = async (req: Request, res: Response) => {
  try {
    const { topicId, tutorialId, completed } = req.body;

    const topic = await Topic.findById(topicId);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }

    const tutorial = topic.tutorials.find(t => t.id === tutorialId);
    if (!tutorial) {
      return res.status(404).json({ error: 'Tutorial not found' });
    }

    tutorial.completed = completed;

    // Update overall topic progress
    const completedTutorials = topic.tutorials.filter(t => t.completed).length;
    topic.progress = Math.round((completedTutorials / topic.tutorials.length) * 100);

    await topic.save();
    res.json(topic);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update tutorial progress' });
  }
};