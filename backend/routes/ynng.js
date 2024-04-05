import express from 'express';
import ynngController from '../controllers/ynng.js';
import {checkAuth} from '../middleware/checkAuth.js'

const ynngRouter = express.Router();

ynngRouter.post('/', checkAuth, ynngController.createQuestion)

ynngRouter.get('/all', ynngController.getAllQuestions);

ynngRouter.get('/', ynngController.getAllStandaloneQuestions);

ynngRouter.get('/:id', ynngController.getQuestionById);

ynngRouter.get('/ans/:id', ynngController.getAns);

ynngRouter.patch('/ans/:id', checkAuth, ynngController.updateAns);

ynngRouter.patch('/:id', checkAuth, ynngController.editQuestion);

ynngRouter.delete('/:id', checkAuth, ynngController.delQuestion);

export default ynngRouter;
