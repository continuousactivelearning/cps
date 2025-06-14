import { Schema, model } from 'mongoose';
import { IConcept } from '../types';

const conceptSchema = new Schema<IConcept>({
    title: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true },
    contentBlocks: [{
        type: { type: String, required: true },
        data: { type: String, required: true }
    }],
    prerequisites: [{ type: Schema.Types.ObjectId, ref: 'Concept' }]
}, { timestamps: true });

export default model<IConcept>('Concept', conceptSchema);