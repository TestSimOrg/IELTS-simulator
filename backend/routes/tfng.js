import express from 'express';
import tfngController from '../controllers/tfng.js';
import {checkAuth} from '../middleware/checkAuth.js'

const tfngRouter = express.Router();

tfngRouter.post('/', checkAuth, tfngController.createQuestion);

tfngRouter.get('/all', tfngController.getAllQuestions);

tfngRouter.get('/', tfngController.getAllStandaloneQuestions);

tfngRouter.get('/:id', tfngController.getQuestionById);

tfngRouter.get('/ans/:id', tfngController.getAns);

tfngRouter.patch('/ans/:id', checkAuth, tfngController.updateAns)

tfngRouter.patch('/:id', checkAuth, tfngController.editQuestion);

tfngRouter.delete('/:id', checkAuth, tfngController.delQuestion);

export default tfngRouter;
