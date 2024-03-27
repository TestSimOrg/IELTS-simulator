import express from 'express';
import lMatchingController from '../controllers/lMatching.js';

const lMatchingRouter = express.Router();

lMatchingRouter.post('/',lMatchingController.createQuestion)

lMatchingRouter.get('/', lMatchingController.getAllStandaloneQuestions);

lMatchingRouter.patch('/:id', lMatchingController.editQuestion);

lMatchingRouter.delete('/:id', lMatchingController.delQuestion)

export default lMatchingRouter;
