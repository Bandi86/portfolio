import express from 'express';
import { usersList } from '../controllers/users/usersList.js';
import { getUserProfile } from '../controllers/users/getUserProfile.js';
import { registerUser } from '../controllers/users/registerUser.js';
import { logoutUser } from '../controllers/users/logoutUser.js';
import { updateUserProfile } from '../controllers/users/updateUserProfile.js';
import { loginUser } from '../controllers/users/loginUser.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express();
router.get('/', usersList);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
