import asyncHandler from 'express-async-handler';
import User from '../../models/User.js';
import generateToken from '../../utils/generateToken.js';

//Register user

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error('User Already Exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
