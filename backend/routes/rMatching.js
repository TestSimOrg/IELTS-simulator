import express from 'express';
import rMatchingController from '../controllers/rMatching.js';
import {checkAuth} from '../middleware/checkAuth.js';

const rMatchingRouter = express.Router();

rMatchingRouter.post('/', checkAuth, rMatchingController.createQuestion);

rMatchingRouter.get('/all', rMatchingController.getAllQuestions);

rMatchingRouter.get('/', rMatchingController.getAllStandaloneQuestion);

rMatchingRouter.get('/:id', rMatchingController.getQuestionById);

rMatchingRouter.get('/ans/:id', rMatchingController.getAns);

rMatchingRouter.patch('/ans/:id', checkAuth, rMatchingController.updateAns);

rMatchingRouter.patch('/:id', checkAuth, rMatchingController.editQuestion);

rMatchingRouter.delete('/:id', checkAuth, rMatchingController.delQuestion)

export default rMatchingRouter;
