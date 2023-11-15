import asyncHandler from 'express-async-handler';

const adminProtected = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403);
    throw new Error('Not authorized, admin access required');
  }
});

export { adminProtected };
