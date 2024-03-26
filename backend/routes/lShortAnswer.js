import express from 'express';

const lShortAnswerRouter = express.Router();

lShortAnswerRouter.get('/', (req, res) => {
  // Logic for lShortAnswer
});

lShortAnswerRouter.get('/:productId', (req, res) => {
  // Logic for lShortAnswer with productId
});

export default lShortAnswerRouter;
