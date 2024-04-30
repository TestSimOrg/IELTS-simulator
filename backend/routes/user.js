import express from 'express';
import userController from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/signup', userController.createUser); // Register

userRouter.post('/login', userController.userLogin); //Login

userRouter.get('/logout', userController.userLogout); // Logout

export default userRouter;