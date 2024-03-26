import express from 'express';

const rShortAnswerRouter = express.Router();

rShortAnswerRouter.get('/', (req, res) => {
  // Handle GET request for rShortAnswer
});

rShortAnswerRouter.get('/:exerciseId', (req, res) => {
  // Handle GET request for specific rShortAnswer exercise by ID
});

export default rShortAnswerRouter;
