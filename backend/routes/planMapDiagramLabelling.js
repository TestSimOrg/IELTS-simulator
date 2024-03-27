import express from 'express';
import planMapDiagramLabellingController from '../controllers/planMapDiagramLabelling.js';

const planMapLabellingRouter = express.Router();

planMapLabellingRouter.post('/', planMapDiagramLabellingController.createQuestion);

planMapLabellingRouter.get('/', planMapDiagramLabellingController.getAllStandaloneQuestions);

planMapLabellingRouter.patch('/:id', planMapDiagramLabellingController.editQuestion);

planMapLabellingRouter.delete('/:id', planMapDiagramLabellingController.delQuestion)

export default planMapLabellingRouter;
