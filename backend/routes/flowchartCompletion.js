import express from 'express';
import {checkAuth} from '../middleware/checkAuth.js'
import fcCompletionController from '../controllers/flowchartCompletion.js';

const flowchartCompletionRouter = express.Router();

flowchartCompletionRouter.post('/', checkAuth, fcCompletionController.createQuestion);

flowchartCompletionRouter.get('/all', fcCompletionController.getAllQuestions);

flowchartCompletionRouter.get('/', fcCompletionController.getAllStandaloneQuestions);

flowchartCompletionRouter.get('/:id', fcCompletionController.getQuestionById);

flowchartCompletionRouter.get('/ans/:id', fcCompletionController.getAns);

flowchartCompletionRouter.patch('/ans/:id', checkAuth, fcCompletionController.updateAns);

flowchartCompletionRouter.patch('/:id', checkAuth, fcCompletionController.editQuestion);

flowchartCompletionRouter.delete('/:id', checkAuth, fcCompletionController.delQuestion);

export default flowchartCompletionRouter;
