import express from 'express';
import summaryCompletionController from '../controllers/summaryCompletion.js';
import {checkAuth} from '../middleware/checkAuth.js';

const summaryCompletionRouter = express.Router();

summaryCompletionRouter.post('/', checkAuth, summaryCompletionController.createQuestion);

summaryCompletionRouter.get('/all', summaryCompletionController.getAllQuestions);

summaryCompletionRouter.get('/', summaryCompletionController.getAllStandaloneQuestions);

summaryCompletionRouter.get('/:id', summaryCompletionController.getQuestionById);

summaryCompletionRouter.get('/ans/:id', summaryCompletionController.getAns);

summaryCompletionRouter.patch('/ans/:id', checkAuth, summaryCompletionController.updateAns);

summaryCompletionRouter.patch('/:id', checkAuth, summaryCompletionController.editQuestion);

summaryCompletionRouter.delete('/:id', checkAuth, summaryCompletionController.delQuestion);

export default summaryCompletionRouter;
