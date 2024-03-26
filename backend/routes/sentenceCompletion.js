import express from 'express';

const sentenceCompletionRouter = express.Router();

sentenceCompletionRouter.get('/', (req, res) => {
  // Handle GET request for sentence completion
});

sentenceCompletionRouter.get('/:exerciseId', (req, res) => {
  // Handle GET request for specific sentence completion exercise by ID
});

export default sentenceCompletionRouter;
