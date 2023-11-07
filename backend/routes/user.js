import express from 'express';
import { usersList } from '../controllers/users/usersList.js';
import { authUser } from '../controllers/users/authUser.js';
import { getUserProfile } from '../controllers/users/getUserProfile.js';
import { registerUser } from '../controllers/users/registerUser.js';
import { logoutUser } from '../controllers/users/logoutUser.js';
import { updateUserProfile } from '../controllers/users/updateUserProfile.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express();
router.get('/', usersList)
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
