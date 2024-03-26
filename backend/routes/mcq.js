import express from 'express';

const mcqRouter = express.Router();

mcqRouter.get('/', (req, res) => {
  // Logic for mcq
});

mcqRouter.get('/:productId', (req, res) => {
  // Logic for mcq with productId
});

export default mcqRouter;
