import express from 'express';
import rMatchingController from '../controllers/rMatching.js';

const rMatchingRouter = express.Router();

rMatchingRouter.post('/', rMatchingController.createQuestion);

rMatchingRouter.get('/all', rMatchingController.getAllQuestions);

rMatchingRouter.get('/', rMatchingController.getAllStandaloneQuestion);

rMatchingRouter.get('/:id', rMatchingController.getQuestionById);

rMatchingRouter.get('/ans/:id', rMatchingController.getAns);

rMatchingRouter.patch('/ans/:id', rMatchingController.updateAns);

rMatchingRouter.patch('/:id', rMatchingController.editQuestion);

rMatchingRouter.delete('/:id', rMatchingController.delQuestion)

export default rMatchingRouter;
