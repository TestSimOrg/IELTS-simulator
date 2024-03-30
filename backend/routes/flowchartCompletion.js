import express from 'express';
import fcCompletionController from '../controllers/flowchartCompletion.js';

const flowchartCompletionRouter = express.Router();

flowchartCompletionRouter.post('/', fcCompletionController.createQuestion);

flowchartCompletionRouter.get('/all', fcCompletionController.getAllQuestions);

flowchartCompletionRouter.get('/', fcCompletionController.getAllStandaloneQuestions);

flowchartCompletionRouter.get('/:id', fcCompletionController.getQuestionById);

flowchartCompletionRouter.get('/ans/:id', fcCompletionController.getAns);

flowchartCompletionRouter.patch('/ans/:id', fcCompletionController.updateAns);

flowchartCompletionRouter.patch('/:id', fcCompletionController.editQuestion);

flowchartCompletionRouter.delete('/:id', fcCompletionController.delQuestion);

export default flowchartCompletionRouter;
