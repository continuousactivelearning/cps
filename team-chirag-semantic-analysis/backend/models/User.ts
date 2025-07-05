import mongoose from 'mongoose';

const SubtopicSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true }
  },
  { _id: false }
);

const TopicSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    subtopics: [SubtopicSchema]
  },
  { _id: false }
);

const KnownConceptsSchema = new mongoose.Schema(
  {
    topics: [TopicSchema],
    totalTopics: { type: Number, default: 0 },
    totalSubtopics: { type: Number, default: 0 }
  },
  { _id: false }
);

const UserInfoSchema = new mongoose.Schema(
  {
    programmingExperience: String,
    knownLanguages: [String],
    dsaExperience: String,
    preferredPace: String
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
  userInfo: UserInfoSchema,
  knownConcepts: KnownConceptsSchema,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema);
