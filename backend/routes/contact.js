import express from 'express';
import { postContact } from '../controllers/contacts/postContact.js';


const router = express();

router.post('/', postContact)
 

export default router;
