import express from 'express';

const lMatchingRouter = express.Router();

lMatchingRouter.get('/', (req, res) => {
  // Logic for lMatching
});

lMatchingRouter.get('/:productId', (req, res) => {
  // Logic for lMatching with productId
});

export default lMatchingRouter;
