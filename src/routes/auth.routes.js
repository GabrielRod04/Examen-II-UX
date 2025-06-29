import express from 'express';
import { createUser, logIn, logOut } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/createUser', createUser);
router.post('/logIn', logIn);
router.post('/logOut', logOut);

export default router;
