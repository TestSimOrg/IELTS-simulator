import express from 'express';
import {checkAuth} from '../middleware/checkAuth.js'
import tableCompletionController from '../controllers/tableCompletion.js';

const tableCompletionRouter = express.Router();

tableCompletionRouter.post('/', tableCompletionController.createQuestion);

tableCompletionRouter.get('/all', tableCompletionController.getAllQuestions);

tableCompletionRouter.get('/', tableCompletionController.getAllStandaloneQuestions);

tableCompletionRouter.get('/:id', tableCompletionController.getQuestionById);

tableCompletionRouter.get('/ans/:id', tableCompletionController.getAns);

tableCompletionRouter.patch('/ans/:id', tableCompletionController.updateAns);

tableCompletionRouter.patch('/:id', tableCompletionController.editQuestion);

tableCompletionRouter.delete('/:id', tableCompletionController.delQuestion);

export default tableCompletionRouter;
