import getMainTopic from '../services/getMainTopic';
import getAllPrerequisites from '../services/getPrerequisite';
import { Request, Response } from 'express';

const analyzeController = async (req: Request, res: Response) => {
  try {
    const { typeofinput } = req.body;
    let inputData = '';
    let mainTopic: "" | string[] | undefined = [];

    if (typeofinput === 'pdf') {
      if (!req.file) {
        return res.status(400).json({ error: 'File not uploaded' });
      }
      inputData = req.file.path;
      mainTopic = await getMainTopic(inputData, typeofinput);
    }
    
    else if (typeofinput === 'youtube' || typeofinput === 'image') {
      if (!req.body.topics) {
        return res.status(400).json({ error: 'Topics not provided' });
      }

      try {
        mainTopic = JSON.parse(req.body.topics);
      } catch (e) {
        return res.status(400).json({ error: 'Invalid topics format' });
      }
    }

    else {
      return res.status(400).json({ error: 'Invalid input type' });
    }

    let mainTopicsArray: string[];

    if (typeof mainTopic === 'string') {
      mainTopicsArray = [mainTopic];
    } else if (Array.isArray(mainTopic)) {
      mainTopicsArray = mainTopic;
    } else {
      return res.status(400).json({ error: 'Invalid main topic returned' });
    }

    const prerequisites = await getAllPrerequisites(mainTopicsArray);

    return res.json({ mainTopic, prerequisites });
  } catch (error) {
    console.error('Error analyzing input:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default analyzeController;
