import asyncHandler from 'express-async-handler';
import User from '../../models/User.js';

//Register user

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error('User Already Exists');
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
