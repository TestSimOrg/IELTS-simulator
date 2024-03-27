import express from 'express';
import rMatchingController from '../controllers/rMatching.js';
import rMatchingTypeValidation from '../middleware/rMatchingTypeValidation.js'

const rMatchingRouter = express.Router();

rMatchingRouter.post('/', rMatchingTypeValidation, rMatchingController.createQuestion);

rMatchingRouter.get('/', rMatchingController.getAllStankdaloneQuestion);

rMatchingRouter.patch('/:id', rMatchingController.editQuestion);

rMatchingRouter.delete('/:id', rMatchingController.delQuestion)

export default rMatchingRouter;
