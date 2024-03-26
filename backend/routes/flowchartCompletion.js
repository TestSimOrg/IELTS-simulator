import express from 'express';
import fcCompletionController from '../controllers/flowchartCompletion';

const flowchartCompletionRouter = express.Router();

// create , update (edit), getAll,
flowchartCompletionRouter.post('/', fcCompletionController.createQuestion);

flowchartCompletionRouter.get('/', fcCompletionController.getAllStandaloneQuestions);

flowchartCompletionRouter.patch('/:id', fcCompletionController.editQuestion);

flowchartCompletionRouter.delete('/:id', fcCompletionController.delQuestion);

export default flowchartCompletionRouter;
