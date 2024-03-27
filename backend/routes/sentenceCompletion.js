import express from 'express';
import sentenceCompletionController from '../controllers/sentenceCompletion';

const sentenceCompletionRouter = express.Router();

sentenceCompletionRouter.post('/', sentenceCompletionController.createQuestion);

sentenceCompletionRouter.get('/', sentenceCompletionController.getAllStandaloneQuestions);

sentenceCompletionRouter.patch('/:id', sentenceCompletionController.editQuestion)

sentenceCompletionRouter.delete('/:id',sentenceCompletionController.delQuestion)

export default sentenceCompletionRouter;
