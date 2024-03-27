import express from 'express';
import summaryCompletionController from '../controllers/summaryCompletion';

const summaryCompletionRouter = express.Router();

summaryCompletionRouter.post('/', summaryCompletionController.createQuestion);

summaryCompletionRouter.get('/', summaryCompletionController.getAllStandaloneQuestions);

summaryCompletionRouter.patch('/:id', summaryCompletionController.editQuestion);

summaryCompletionRouter.delete('/:id', summaryCompletionController.delQuestion);

export default summaryCompletionRouter;
