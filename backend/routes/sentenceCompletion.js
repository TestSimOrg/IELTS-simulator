import express from 'express';
import sentenceCompletionController from '../controllers/sentenceCompletion.js';
import {checkAuth} from '../middleware/checkAuth.js';

const sentenceCompletionRouter = express.Router();

sentenceCompletionRouter.post('/', checkAuth, sentenceCompletionController.createQuestion);

sentenceCompletionRouter.get('/all', sentenceCompletionController.getAllQuestions);

sentenceCompletionRouter.get('/', sentenceCompletionController.getAllStandaloneQuestions);

sentenceCompletionRouter.get('/:id', sentenceCompletionController.getQuestionById);

sentenceCompletionRouter.get('/ans/:id', sentenceCompletionController.getAns);

sentenceCompletionRouter.patch('/ans/:id', checkAuth, sentenceCompletionController.updateAns);

sentenceCompletionRouter.patch('/:id', checkAuth, sentenceCompletionController.editQuestion);

sentenceCompletionRouter.delete('/:id', checkAuth, sentenceCompletionController.delQuestion);

export default sentenceCompletionRouter;
