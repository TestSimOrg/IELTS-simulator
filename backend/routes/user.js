import express from 'express';
import userController from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/', userController.createUser);

export default userRouter;