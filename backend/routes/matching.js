import express from 'express';
import matchingController from '../controllers/matching.js';
import {checkAuth} from '../middleware/checkAuth.js';

const matchingRouter = express.Router();

matchingRouter.post('/', checkAuth, matchingController.createQuestion)

matchingRouter.get('/all', matchingController.getAllQuestions);

matchingRouter.get('/', matchingController.getAllStandaloneQuestions);

matchingRouter.get('/:id', matchingController.getQuestionById)

matchingRouter.get('/ans/:id', matchingController.getAns)

matchingRouter.patch('/ans/:id', checkAuth, matchingController.updateAns);

matchingRouter.patch('/:id', checkAuth, matchingController.editQuestion);

matchingRouter.delete('/:id', checkAuth, matchingController.delQuestion)

export default matchingRouter;
