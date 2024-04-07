import express from 'express';
import rShortAnswerController from '../controllers/rShortAnswer.js';
import {checkAuth} from '../middleware/checkAuth.js';

const rShortAnswerRouter = express.Router();

rShortAnswerRouter.post('/', checkAuth, rShortAnswerController.createQuestion);

rShortAnswerRouter.get('/all' , rShortAnswerController.getAllQuestions);

rShortAnswerRouter.get('/', rShortAnswerController.getAllStandaloneQuestions);

rShortAnswerRouter.get('/:id', rShortAnswerController.getQuestionById);

rShortAnswerRouter.get('/ans/:id', rShortAnswerController.getAns);

rShortAnswerRouter.patch('/ans/:id', checkAuth, rShortAnswerController.updateAns);

rShortAnswerRouter.patch('/:id', checkAuth, rShortAnswerController.editQuestion);

rShortAnswerRouter.delete('/:id', checkAuth, rShortAnswerController.delQuestion);

export default rShortAnswerRouter;
