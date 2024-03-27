import express from 'express';
import tfngController from '../controllers/tfng.js';

const tfngRouter = express.Router();

tfngRouter.post('/', tfngController.createQuestion);

tfngRouter.get('/', tfngController.getAllStandaloneQuestions);

tfngRouter.patch('/:id', tfngController.editQuestion);

tfngRouter.delete('/:id', tfngController.delQuestion);

export default tfngRouter;
