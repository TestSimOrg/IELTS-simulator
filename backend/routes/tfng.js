import express from 'express';
import tfngController from '../controllers/tfng.js';

const tfngRouter = express.Router();

tfngRouter.post('/', tfngController.createQuestion);

tfngRouter.get('/all', tfngController.getAllQuestions);

tfngRouter.get('/', tfngController.getAllStandaloneQuestions);

tfngRouter.get('/:id', tfngController.getQuestionById);

tfngRouter.get('/ans/:id', tfngController.getAns);

tfngRouter.patch('/ans/:id', tfngController.updateAns)

tfngRouter.patch('/:id', tfngController.editQuestion);

tfngRouter.delete('/:id', tfngController.delQuestion);

export default tfngRouter;
