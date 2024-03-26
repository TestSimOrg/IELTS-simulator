import express from 'express';

const rMatchingRouter = express.Router();

rMatchingRouter.get('/', (req, res) => {
  // Handle GET request for rMatching
});

rMatchingRouter.get('/:exerciseId', (req, res) => {
  // Handle GET request for specific rMatching exercise by ID
});

export default rMatchingRouter;
