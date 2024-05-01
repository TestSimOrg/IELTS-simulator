import express from 'express';
import noteCompletionController from '../controllers/noteCompletion.js';

const noteCompletionRouter = express.Router();

noteCompletionRouter.post('/', noteCompletionController.createQuestion);

noteCompletionRouter.get('/all', noteCompletionController.getAllQuestions)

noteCompletionRouter.get('/', noteCompletionController.getAllStandaloneQuestions);

noteCompletionRouter.get('/:id', noteCompletionController.getQuestionById)

noteCompletionRouter.get('/ans/:id', noteCompletionController.getAns)

noteCompletionRouter.patch('/ans/:id', noteCompletionController.updateAns)

noteCompletionRouter.patch('/:id', noteCompletionController.editQuestion);

noteCompletionRouter.delete('/:id', noteCompletionController.delQuestion);

export default noteCompletionRouter;
