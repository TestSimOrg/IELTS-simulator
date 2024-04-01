import express from 'express';
import user from '../models/user.js';

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {

    console.log(req.body)
    const { username, password, email } = req.body;

    const userDoc = new user({
        userName: username,
        email: email,
        password: password,
    })

    const resJson = (await userDoc.save()).toJSON()
    console.log('Stored data:', resJson);

    // Sending a response back to the client
    return res.status(200).json({ 
        message: 'User registered successfully',
        obj: resJson, 
    });
});

export default userRouter;