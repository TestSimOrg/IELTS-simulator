import express from 'express';
import ynngController from '../controllers/ynng';

const ynngRouter = express.Router();

ynngRouter.post('/', ynngController.createQuestion)

ynngRouter.get('/', ynngController.getAllStandaloneQuestions);

ynngRouter.patch('/:id', ynngController.editQuestion);

ynngRouter.delete('/:id', ynngController.delQuestion);

export default ynngRouter;
