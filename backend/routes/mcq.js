import express from 'express';
import mcqController from '../controllers/mcq.js';

const mcqRouter = express.Router();

mcqRouter.post('/', mcqController.createQuestion);

mcqRouter.get('/', mcqController.getAllStandaloneQuestions);

mcqRouter.patch('/:id', mcqController.editQuestion);

mcqRouter.delete('/:id', mcqController.delQuestion)

export default mcqRouter;
