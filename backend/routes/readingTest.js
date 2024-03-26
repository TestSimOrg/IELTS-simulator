import express from 'express';

const readingTestRouter = express.Router();

readingTestRouter.get('/', (req, res) => {
  // Handle GET request for reading test
});

readingTestRouter.get('/:testId', (req, res) => {
  // Handle GET request for specific reading test by ID
});

export default readingTestRouter;
