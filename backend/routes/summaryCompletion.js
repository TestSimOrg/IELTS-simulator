import express from 'express';
import summaryCompletionController from '../controllers/summaryCompletion.js';

const summaryCompletionRouter = express.Router();

summaryCompletionRouter.post('/', summaryCompletionController.createQuestion);

summaryCompletionRouter.get('/all', summaryCompletionController.getAllQuestions);

summaryCompletionRouter.get('/', summaryCompletionController.getAllStandaloneQuestions);

summaryCompletionRouter.get('/:id', summaryCompletionController.getQuestionById);

summaryCompletionRouter.get('/ans/:id', summaryCompletionController.getAns);

summaryCompletionRouter.patch('/ans/:id', summaryCompletionController.updateAns);

summaryCompletionRouter.patch('/:id', summaryCompletionController.editQuestion);

summaryCompletionRouter.delete('/:id', summaryCompletionController.delQuestion);

export default summaryCompletionRouter;
