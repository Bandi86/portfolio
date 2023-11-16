import express from 'express';
import { blogList } from '../controllers/blog/blogList.js';
import { blogDetail } from '../controllers/blog/blogDetail.js';
import { blogCreate } from '../controllers/blog/blogCreate.js';
import { blogUpdate } from '../controllers/blog/blogUpdate.js';
import { blogDelete } from '../controllers/blog/blogDelete.js';
import { blogTags } from '../controllers/blog/blogTags.js';
import { createTags } from '../controllers/blog/createTags.js';
import { searchByTags } from '../controllers/blog/search_by_tag.js';
import { adminProtected } from '../middleware/adminMiddleware.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express();

router.get('/', blogList);
router.get('/tags/search', searchByTags);
router.get('/tags', blogTags);
router.get('/:id', blogDetail);
router.post('/tags', protect, adminProtected, createTags);
router.post('/', protect, adminProtected, blogCreate);
router.patch('/:id', protect, adminProtected, blogUpdate);
router.delete('/:id', protect, adminProtected, blogDelete);


export default router;
