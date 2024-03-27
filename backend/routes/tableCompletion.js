import express from 'express';
import tableCompletionController from '../controllers/tableCompletion';

const tableCompletionRouter = express.Router();

tableCompletionRouter.post('/', tableCompletionController.createQuestion);

tableCompletionRouter.get('/', tableCompletionController.getAllStandaloneQuestions);

tableCompletionRouter.patch('/:id', tableCompletionController.editQuestion);

tableCompletionRouter.delete('/:id', tableCompletionController.delQuestion);

export default tableCompletionRouter;
