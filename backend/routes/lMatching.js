import express from 'express';
import lMatchingController from '../controllers/lMatching.js';

const lMatchingRouter = express.Router();

lMatchingRouter.post('/',lMatchingController.createQuestion)

lMatchingRouter.get('/all', lMatchingController.getAllQuestions);

lMatchingRouter.get('/', lMatchingController.getAllStandaloneQuestions);

lMatchingRouter.get('/:id', lMatchingController.getQuestionById)

lMatchingRouter.get('/ans/:id', lMatchingController.getAns)

lMatchingRouter.patch('/ans/:id', lMatchingController.updateAns);

lMatchingRouter.patch('/:id', lMatchingController.editQuestion);

lMatchingRouter.delete('/:id', lMatchingController.delQuestion)

export default lMatchingRouter;
