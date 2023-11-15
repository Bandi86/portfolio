import mongoose from 'mongoose';

const tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Tag = mongoose.model('Tag', tagSchema);

export default Tag;
