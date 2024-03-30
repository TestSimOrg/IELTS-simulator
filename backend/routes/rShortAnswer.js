import express from 'express';
import rShortAnswerController from '../controllers/rShortAnswer.js';

const rShortAnswerRouter = express.Router();

rShortAnswerRouter.post('/', rShortAnswerController.createQuestion);

rShortAnswerRouter.get('/all' , rShortAnswerController.getAllQuestions);

rShortAnswerRouter.get('/', rShortAnswerController.getAllStandaloneQuestions);

rShortAnswerRouter.get('/:id', rShortAnswerController.getQuestionById);

rShortAnswerRouter.get('/ans/:id', rShortAnswerController.getAns);

rShortAnswerRouter.patch('/ans/:id', rShortAnswerController.updateAns);

rShortAnswerRouter.patch('/:id', rShortAnswerController.editQuestion);

rShortAnswerRouter.delete('/:id', rShortAnswerController.delQuestion);

export default rShortAnswerRouter;
