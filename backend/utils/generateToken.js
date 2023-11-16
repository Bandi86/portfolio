import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    domain: 'localhost',
    path: '/',
    secure: true,
    maxAge: 30 * 60 * 24 * 60 * 1000,
  });
};

export default generateToken;