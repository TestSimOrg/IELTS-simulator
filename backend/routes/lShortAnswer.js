import express from 'express';
import lShortAnswerController from '../controllers/lShortAnswer.js';
import {checkAuth} from '../middleware/checkAuth.js';

const lShortAnswerRouter = express.Router();

lShortAnswerRouter.post('/', checkAuth, lShortAnswerController.createQuestion);

lShortAnswerRouter.get('/all', lShortAnswerController.getAllQuestions);

lShortAnswerRouter.get('/', lShortAnswerController.getAllStandaloneQuestions );

lShortAnswerRouter.get('/:id', lShortAnswerController.getQuestionById);

lShortAnswerRouter.get('/ans/:id', lShortAnswerController.getAns);

lShortAnswerRouter.patch('/ans/:id', checkAuth, lShortAnswerController.updateAns);

lShortAnswerRouter.patch('/:id', checkAuth, lShortAnswerController.editQuestion);

lShortAnswerRouter.delete('/:id', checkAuth, lShortAnswerController.delQuestion);

export default lShortAnswerRouter;
