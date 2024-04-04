import log from '../lib/logger.js';
import user from '../models/user.js';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {

    log.info('Creating user: ', req.body);

    const { username, password, email } = req.body;

    try {

        const userDoc = new user({
            userName: username,
            email: email,
            password: password,
        })
        
        const token = createToken(userDoc._id);

        const resJson = (await userDoc.save()).toJSON()

        log.info('Created user:', resJson);
    
        // Sending a response back to the client
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

        res.status(200).json({ 
            message: 'User registered successfully',
            obj: resJson, 
        });
        
        // test cookies
        // res.cookie('newUser', false, { 
        //     path: '/',
        //     httpOnly: false, // Allow access from frontend JavaScript
        //     sameSite: 'none', // For cross-site cookies
        //     secure: false // If your frontend is served over HTTPS
        //   });
        // res.json({
        //     ok: true
        // });
          
        
    } catch (err) {
        
        log.error('Error while registering user.', err);

        res.status(500).json({
            message: "Internal server error",
            ok: false,
            status: 500
        })
    }
}

const maxAge = 3 * 24 * 60 * 60; // 3 days
const createToken = (id) => {
    const token = jwt.sign({ id },'256-secret', {
        expiresIn: maxAge
    });

    log.info(token)

    return token;
}

const userQuestions = async (req, res) => {

}

const userController = { createUser, userQuestions };

export default userController;