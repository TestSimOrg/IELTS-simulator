import express from 'express';
import userController from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/signin', userController.createUser); // Register

userRouter.post('/login', userController.userLogin); //Login

export default userRouter;