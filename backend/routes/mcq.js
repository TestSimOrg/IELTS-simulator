import express from 'express';
import mcqController from '../controllers/mcq.js';

const mcqRouter = express.Router();

mcqRouter.post('/', mcqController.createQuestion);

mcqRouter.get('/all', mcqController.getAllQuestions);

mcqRouter.get('/', mcqController.getAllStandaloneQuestions);

mcqRouter.get('/:id', mcqController.getQuestionById);

mcqRouter.get('/ans/:id', mcqController.getAns);

mcqRouter.patch('/ans/:id', mcqController.updateAns);

mcqRouter.patch('/:id', mcqController.editQuestion);

mcqRouter.delete('/:id', mcqController.delQuestion);

export default mcqRouter;
