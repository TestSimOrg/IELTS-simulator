import express from 'express';
import rMatchingController from '../controllers/rMatching.js';

const rMatchingRouter = express.Router();

rMatchingRouter.post('/', rMatchingController.createQuestion);

rMatchingRouter.get('/', rMatchingController.getAllStankdaloneQuestion);

rMatchingRouter.patch('/:id', rMatchingController.editQuestion);

rMatchingRouter.delete('/:id', rMatchingController.delQuestion)

export default rMatchingRouter;
