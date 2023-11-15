import asyncHandler from 'express-async-handler';
import Tag from '../../models/Tag.js';

export const createTags = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const existingTag = await Tag.findOne({ name });

  if (existingTag) {
    res.status(400);
    throw new Error('Tag already exists');
  }

  const tag = await Tag.create({ name });

  if (tag) {
    res.status(201).json({
      _id: tag._id,
      name: tag.name,
      created_at: tag.created_at,
    });
  } else {
    res.status(400);
    throw new Error('Invalid tag data');
  }
});