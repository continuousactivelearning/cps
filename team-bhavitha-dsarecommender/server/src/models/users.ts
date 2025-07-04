import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
  progress: { type: [String], default: [] },
  mastery: { type: Object, default: {} },
  recommendations: { type: [String], default: [] },
});

const User = mongoose.model("User", UserSchema);
export default User;
