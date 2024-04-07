import jwt from 'jsonwebtoken';
import log from '../lib/logger.js';
import user from '../models/user.js'

const checkAuth =  (req, res, next) => {

  const token = req.cookies.jwt;

  try {

    if (token) {

      const decodedToken = jwt.verify(token, process.env.SECRET);
      log.info('Decoded JWT:',decodedToken);
      next();

    } else {

      log.error('JWT not passed with request that requires auth.', err);
      res.redirect('/user/login');

    }

  } catch (err) {

    log.error('Auth error:', err);
    res.redirect('/user/login');

  }

};

const checkUser = (req, res, next) => {
  
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let userData = await user.findById(decodedToken.id);
        log.info('User automatically logged in with email:', userData.email);
        res.locals.user = userData;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }

}
const auth = {checkAuth, checkUser}; 
export {checkAuth, checkUser};