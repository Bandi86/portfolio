import asyncHandler from 'express-async-handler';

import Tag from '../../models/Tag.js';

export const blogTags = asyncHandler(async (req, res) => {
  const tags = await Tag.find();
  res.status(200).json(tags);
});
