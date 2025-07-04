import mongoose, { Document, Schema } from 'mongoose';

export interface IAchievement extends Document {
  name: string;
  description: string;
  imageUrl: string; // ✅ NEW FIELD
  isActive: boolean;
  condition: {
    field: string;
    operator: string;
    value: number;
  };
  pointsAwarded: number;
}

const AchievementSchema = new Schema<IAchievement>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }, // ✅ Add this line
  isActive: { type: Boolean, default: true },
  condition: {
    field: { type: String, required: true },
    operator: { type: String, required: true },
    value: { type: Number, required: true }
  },
  pointsAwarded: { type: Number, required: true }
});

export const Achievement = mongoose.model<IAchievement>('Achievement', AchievementSchema);
