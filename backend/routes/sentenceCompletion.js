import express from 'express';
import sentenceCompletionController from '../controllers/sentenceCompletion.js';

const sentenceCompletionRouter = express.Router();

sentenceCompletionRouter.post('/', sentenceCompletionController.createQuestion);

sentenceCompletionRouter.get('/all', sentenceCompletionController.getAllQuestions);

sentenceCompletionRouter.get('/', sentenceCompletionController.getAllStandaloneQuestions);

sentenceCompletionRouter.get('/:id', sentenceCompletionController.getQuestionById);

sentenceCompletionRouter.get('/ans/:id', sentenceCompletionController.getAns);

sentenceCompletionRouter.patch('/ans/:id', sentenceCompletionController.updateAns);

sentenceCompletionRouter.patch('/:id', sentenceCompletionController.editQuestion);

sentenceCompletionRouter.delete('/:id',sentenceCompletionController.delQuestion);

export default sentenceCompletionRouter;
