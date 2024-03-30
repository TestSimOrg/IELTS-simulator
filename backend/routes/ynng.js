import express from 'express';
import ynngController from '../controllers/ynng.js';

const ynngRouter = express.Router();

ynngRouter.post('/', ynngController.createQuestion)

ynngRouter.get('/all', ynngController.getAllQuestions);

ynngRouter.get('/', ynngController.getAllStandaloneQuestions);

ynngRouter.get('/:id', ynngController.getQuestionById);

ynngRouter.get('/ans/:id', ynngController.getAns);

ynngRouter.patch('/ans/:id', ynngController.updateAns);

ynngRouter.patch('/:id', ynngController.editQuestion);

ynngRouter.delete('/:id', ynngController.delQuestion);

export default ynngRouter;
