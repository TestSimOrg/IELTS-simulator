import express from 'express';
import shortAnswerController from '../controllers/shortAnswer.js';
import {checkAuth} from '../middleware/checkAuth.js';

const shortAnswerRouter = express.Router();

shortAnswerRouter.post('/', checkAuth, shortAnswerController.createQuestion);

shortAnswerRouter.get('/all', shortAnswerController.getAllQuestions);

shortAnswerRouter.get('/', shortAnswerController.getAllStandaloneQuestions );

shortAnswerRouter.get('/:id', shortAnswerController.getQuestionById);

shortAnswerRouter.get('/ans/:id', shortAnswerController.getAns);

shortAnswerRouter.patch('/ans/:id', checkAuth, shortAnswerController.updateAns);

shortAnswerRouter.patch('/:id', checkAuth, shortAnswerController.editQuestion);

shortAnswerRouter.delete('/:id', checkAuth, shortAnswerController.delQuestion);

export default shortAnswerRouter;
