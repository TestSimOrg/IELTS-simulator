import express from 'express';
import noteCompletionController from '../controllers/noteCompletion.js';

const noteCompletionRouter = express.Router();

noteCompletionRouter.post('/', noteCompletionController.createQuestion);

noteCompletionRouter.get('/', noteCompletionController.getAllStandaloneQuestions);

noteCompletionRouter.patch('/:id', noteCompletionController.editQuestion);

noteCompletionRouter.delete('/:id', noteCompletionController.delQuestion);

export default noteCompletionRouter;
