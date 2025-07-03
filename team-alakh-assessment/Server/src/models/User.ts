import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  googleId: { type: String, unique: true, sparse: true },
  password: { 
    type: String, 
    required: function(this: any) { 
      return !this.googleId; // Only required for non-Google users
    } 
  },
  passedArray: { type: [String], default: [] },
  achievements: { type: [String], default: [] },
  profile: {
    name: { type: String, default: '' },
    picture: { type: String, default: '' },
  },
  searchHistory: { type: [String], default: [] },
  flagged: { type: Boolean, default: false },
  deactivated: { type: Boolean, default: false },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
});

export default mongoose.model('User', userSchema);