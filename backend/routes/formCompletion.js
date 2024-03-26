import express from 'express';
import formCompletionController from '../controllers/formCompletion.js';

const formCompletionRouter = express.Router();

formCompletionRouter.post('/', formCompletionController.createQuestion);

formCompletionRouter.get('/', formCompletionController.getAllStandaloneQuestions);

formCompletionRouter.patch('/:id', formCompletionController.editQuestion);

formCompletionRouter.delete('/:id', formCompletionController.delQuestion);

export default formCompletionRouter;
