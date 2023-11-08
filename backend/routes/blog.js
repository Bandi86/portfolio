import express from 'express';
import { blogList } from '../controllers/blog/blogList.js';
import { blogDetail } from '../controllers/blog/blogDetail.js';
import { blogCreate } from '../controllers/blog/blogCreate.js';
import { blogUpdate } from '../controllers/blog/blogUpdate.js';
import { blogDelete } from '../controllers/blog/blogDelete.js';
import { adminProtected } from '../middleware/adminMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express();

router.get('/', adminProtected, protect, blogList);
router.get('/:id', adminProtected, protect, blogDetail);
router.post('/', adminProtected, protect, blogCreate);
router.patch('/:id', adminProtected, protect, blogUpdate);
router.delete('/:id', adminProtected, protect, blogDelete);

export default router;
