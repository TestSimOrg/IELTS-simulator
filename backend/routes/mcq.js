import express from 'express';
import mcqController from '../controllers/mcq.js';
import {checkAuth} from '../middleware/checkAuth.js';

const mcqRouter = express.Router();

mcqRouter.post('/', checkAuth, mcqController.createQuestion);

mcqRouter.get('/all', mcqController.getAllQuestions);

mcqRouter.get('/', mcqController.getAllStandaloneQuestions);

mcqRouter.get('/:id', mcqController.getQuestionById);

mcqRouter.get('/ans/:id', mcqController.getAns);

mcqRouter.patch('/ans/:id', checkAuth, mcqController.updateAns);

mcqRouter.patch('/:id', checkAuth, mcqController.editQuestion);

mcqRouter.delete('/:id', checkAuth, mcqController.delQuestion);

export default mcqRouter;
