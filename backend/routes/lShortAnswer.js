import express from 'express';
import lShortAnswerController from '../controllers/lShortAnswer.js';

const lShortAnswerRouter = express.Router();

lShortAnswerRouter.post('/', lShortAnswerController.createQuestion);

lShortAnswerRouter.get('/', lShortAnswerController.getAllStandaloneQuestions );

lShortAnswerRouter.patch('/:id', lShortAnswerController.editQuestion);

lShortAnswerRouter.delete('/:id', lShortAnswerController.delQuestion);

export default lShortAnswerRouter;
