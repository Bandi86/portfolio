import asyncHandler from 'express-async-handler';
import User from '../../models/User.js';
import generateToken from '../../utils/generateToken.js';

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
 

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
