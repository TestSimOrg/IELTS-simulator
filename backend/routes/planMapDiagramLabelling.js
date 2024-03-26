import express from 'express';

const planMapLabellingRouter = express.Router();

planMapLabellingRouter.get('/', (req, res) => {
  // Logic for planMapLabelling
});

planMapLabellingRouter.get('/:productId', (req, res) => {
  // Logic for planMapLabelling with productId
});

export default planMapLabellingRouter;
