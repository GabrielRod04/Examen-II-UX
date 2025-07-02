import express from 'express';
import { createPost, listPosts, editPost, deletePost } from '../controllers/post.controller.js';
import { verifyFirebaseToken } from '../middlewares/firebaseAuth.middleware.js';

const router = express.Router();

router.post('/createPost', verifyFirebaseToken, createPost);

router.get('/listPost', listPosts);

router.put('/editPost/:id', verifyFirebaseToken, editPost);

router.delete('/deletePost/:id', verifyFirebaseToken, deletePost);

export default router;

