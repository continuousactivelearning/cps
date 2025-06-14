import { Request, Response } from 'express';
import Concept from '../models/conceptModel';

export const getAllConcepts = async (req: Request, res: Response) => {
    try {
        const concepts = await Concept.find({}).select('title description');
        res.status(200).json(concepts);
    } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

export const getConceptById = async (req: Request, res: Response) => {
    try {
        const concept = await Concept.findById(req.params.id).populate('prerequisites', 'title');
        if (concept) {
            res.status(200).json(concept);
        } else {
            res.status(404).json({ message: 'Concept not found' });
        }
    } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};