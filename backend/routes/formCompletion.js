import express from 'express';
import formCompletionController from '../controllers/formCompletion.js';

const formCompletionRouter = express.Router();

formCompletionRouter.post('/', formCompletionController.createQuestion);

formCompletionRouter.get('/all', formCompletionController.getAllQuestions)

formCompletionRouter.get('/', formCompletionController.getAllStandaloneQuestions);

formCompletionRouter.get('/:id', formCompletionController.getQuestionById)

formCompletionRouter.get('/ans/:id', formCompletionController.getAns)

formCompletionRouter.patch('/ans/:id', formCompletionController.updateAns)

formCompletionRouter.patch('/:id', formCompletionController.editQuestion);

formCompletionRouter.delete('/:id', formCompletionController.delQuestion);

export default formCompletionRouter;
