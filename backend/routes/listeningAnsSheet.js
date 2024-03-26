import express from 'express';

const listeningAnsSheetRouter = express.Router();

listeningAnsSheetRouter.get('/', (req, res) => {
  // Handle listening answer sheet logic here
});

listeningAnsSheetRouter.get('/:sheetId', (req, res) => {
  // Handle specific listening answer sheet logic here
});

export default listeningAnsSheetRouter;
