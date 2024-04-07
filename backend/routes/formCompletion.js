import express from 'express';
import formCompletionController from '../controllers/formCompletion.js';
import {checkAuth} from '../middleware/checkAuth.js';

const formCompletionRouter = express.Router();

formCompletionRouter.post('/', checkAuth, formCompletionController.createQuestion);

formCompletionRouter.get('/all', formCompletionController.getAllQuestions)

formCompletionRouter.get('/', formCompletionController.getAllStandaloneQuestions);

formCompletionRouter.get('/:id', formCompletionController.getQuestionById)

formCompletionRouter.get('/ans/:id', formCompletionController.getAns)

formCompletionRouter.patch('/ans/:id', checkAuth, formCompletionController.updateAns)

formCompletionRouter.patch('/:id', checkAuth, formCompletionController.editQuestion);

formCompletionRouter.delete('/:id', checkAuth, formCompletionController.delQuestion);

export default formCompletionRouter;
