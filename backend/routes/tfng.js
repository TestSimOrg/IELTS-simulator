import express from 'express';

const tfngRouter = express.Router();

tfngRouter.get('/', (req, res) => {
  // Handle GET request for tfng
});

tfngRouter.get('/:exerciseId', (req, res) => {
  // Handle GET request for specific tfng exercise by ID
});

export default tfngRouter;
