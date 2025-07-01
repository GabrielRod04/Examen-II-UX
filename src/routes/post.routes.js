import express from 'express';
import { createPost, listPosts, editPost } from '../controllers/post.controller.js';


const router = express.Router();
router.post('/createPost', createPost);
router.get('/listPost', listPosts);
router.put('/editPost/:id', editPost);


export default router;


