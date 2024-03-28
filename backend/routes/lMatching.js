import express from 'express';
import lMatchingController from '../controllers/lMatching.js';

const lMatchingRouter = express.Router();

lMatchingRouter.post('/',lMatchingController.createQuestion)

lMatchingRouter.get('/all', lMatchingController.getAllQuestions);

lMatchingRouter.get('/', lMatchingController.getAllStandaloneQuestions);

lMatchingRouter.get('/:id', lMatchingController.getQuestionById)

lMatchingRouter.get('/:id/ans', lMatchingController.getAns)

lMatchingRouter.patch('/:id/ans', lMatchingController.updateAns);

lMatchingRouter.patch('/:id', lMatchingController.editQuestion);

lMatchingRouter.delete('/:id', lMatchingController.delQuestion)

export default lMatchingRouter;
