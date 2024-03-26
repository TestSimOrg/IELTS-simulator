import express from 'express';

const noteCompletionRouter = express.Router();

noteCompletionRouter.get('/', (req, res) => {
  // Logic for noteCompletion
});

noteCompletionRouter.get('/:productId', (req, res) => {
  // Logic for noteCompletion with productId
});

export default noteCompletionRouter;
