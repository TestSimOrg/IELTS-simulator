import express from 'express';
import rShortAnswerController from '../controllers/rShortAnswer';

const rShortAnswerRouter = express.Router();

rShortAnswerRouter.post('/', rShortAnswerController.createQuestion);

rShortAnswerRouter.get('/', rShortAnswerController.getAllStandaloneQuestions);

rShortAnswerRouter.patch('/:id', rShortAnswerController.editQuestion);

rShortAnswerRouter.delete('/:id', rShortAnswerController.delQuestion);

export default rShortAnswerRouter;
