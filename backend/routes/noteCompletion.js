import express from 'express';
import noteCompletionController from '../controllers/noteCompletion.js';
import {checkAuth} from '../middleware/checkAuth.js';

const noteCompletionRouter = express.Router();

noteCompletionRouter.post('/', checkAuth, noteCompletionController.createQuestion);

noteCompletionRouter.get('/all', noteCompletionController.getAllQuestions)

noteCompletionRouter.get('/', noteCompletionController.getAllStandaloneQuestions);

noteCompletionRouter.get('/:id', noteCompletionController.getQuestionById)

noteCompletionRouter.get('/ans/:id', noteCompletionController.getAns)

noteCompletionRouter.patch('/ans/:id', checkAuth, noteCompletionController.updateAns)

noteCompletionRouter.patch('/:id', checkAuth, noteCompletionController.editQuestion);

noteCompletionRouter.delete('/:id', checkAuth, noteCompletionController.delQuestion);

export default noteCompletionRouter;
