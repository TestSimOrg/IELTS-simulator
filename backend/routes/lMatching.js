import express from 'express';
import lMatchingController from '../controllers/lMatching.js';
import {checkAuth} from '../middleware/checkAuth.js';

const lMatchingRouter = express.Router();

lMatchingRouter.post('/', checkAuth, lMatchingController.createQuestion)

lMatchingRouter.get('/all', lMatchingController.getAllQuestions);

lMatchingRouter.get('/', lMatchingController.getAllStandaloneQuestions);

lMatchingRouter.get('/:id', lMatchingController.getQuestionById)

lMatchingRouter.get('/ans/:id', lMatchingController.getAns)

lMatchingRouter.patch('/ans/:id', checkAuth, lMatchingController.updateAns);

lMatchingRouter.patch('/:id', checkAuth, lMatchingController.editQuestion);

lMatchingRouter.delete('/:id', checkAuth, lMatchingController.delQuestion)

export default lMatchingRouter;
