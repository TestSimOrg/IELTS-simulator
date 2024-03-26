import express from 'express';

const ynngRouter = express.Router();

ynngRouter.get('/', (req, res) => {
  // Handle GET request for ynng
});

ynngRouter.get('/:exerciseId', (req, res) => {
  // Handle GET request for specific ynng exercise by ID
});

export default ynngRouter;
