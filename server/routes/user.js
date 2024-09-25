import {Router} from 'express';
import userController from '../controllers/user.js';

const router = Router()

// User Registration Route
router.post('/signup', userController.signup);

// User Login Route
router.post('/login', userController.login);


export default router;
