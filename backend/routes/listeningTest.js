import express from 'express';

const listeningTestRouter = express.Router();

listeningTestRouter.get('/', (req, res) => {
  // Handle listening test logic here
});

listeningTestRouter.get('/:testId', (req, res) => {
  // Handle specific listening test logic here
});

export default listeningTestRouter;
