import express from 'express';
import shortAnswerController from '../controllers/shortAnswer.js';

const shortAnswerRouter = express.Router();

shortAnswerRouter.post('/', shortAnswerController.createQuestion);

shortAnswerRouter.get('/all', shortAnswerController.getAllQuestions);

shortAnswerRouter.get('/', shortAnswerController.getAllStandaloneQuestions );

shortAnswerRouter.get('/:id', shortAnswerController.getQuestionById);

shortAnswerRouter.get('/ans/:id', shortAnswerController.getAns);

shortAnswerRouter.patch('/ans/:id', shortAnswerController.updateAns);

shortAnswerRouter.patch('/:id', shortAnswerController.editQuestion);

shortAnswerRouter.delete('/:id', shortAnswerController.delQuestion);

export default shortAnswerRouter;
