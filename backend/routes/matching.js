import express from 'express';
import matchingController from '../controllers/matching.js';

const matchingRouter = express.Router();

matchingRouter.post('/', matchingController.createQuestion)

matchingRouter.get('/all', matchingController.getAllQuestions);

matchingRouter.get('/', matchingController.getAllStandaloneQuestions);

matchingRouter.get('/:id', matchingController.getQuestionById)

matchingRouter.get('/ans/:id', matchingController.getAns)

matchingRouter.patch('/ans/:id', matchingController.updateAns);

matchingRouter.patch('/:id', matchingController.editQuestion);

matchingRouter.delete('/:id', matchingController.delQuestion)

export default matchingRouter;
