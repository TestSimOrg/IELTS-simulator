import express from 'express';
import lShortAnswerController from '../controllers/lShortAnswer.js';

const lShortAnswerRouter = express.Router();

lShortAnswerRouter.post('/', lShortAnswerController.createQuestion);

lShortAnswerRouter.get('/all', lShortAnswerController.getAllQuestions);

lShortAnswerRouter.get('/', lShortAnswerController.getAllStandaloneQuestions );

lShortAnswerRouter.get('/:id', lShortAnswerController.getQuestionById);

lShortAnswerRouter.get('/ans/:id', lShortAnswerController.getAns);

lShortAnswerRouter.patch('/ans/:id', lShortAnswerController.updateAns);

lShortAnswerRouter.patch('/:id', lShortAnswerController.editQuestion);

lShortAnswerRouter.delete('/:id', lShortAnswerController.delQuestion);

export default lShortAnswerRouter;
