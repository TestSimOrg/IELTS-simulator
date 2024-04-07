import express from 'express';
import multer from 'multer';
import {checkAuth} from '../middleware/checkAuth.js';
import { checkFileType } from '../utils/convertImg.js'
import planMapDiagramLabellingController from '../controllers/planMapDiagramLabelling.js';

const storage = multer.diskStorage({
    destination: function (req, file,cb){
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // set file size limit to 1 MB
    fileFilter: function (req, file, cb){
      checkFileType(file, cb);
    }
  });


const planMapLabellingRouter = express.Router();

planMapLabellingRouter.post('/', checkAuth, upload.single('image'), planMapDiagramLabellingController.createQuestion);

planMapLabellingRouter.get('/all', planMapDiagramLabellingController.getAllQuestions);

planMapLabellingRouter.get('/', planMapDiagramLabellingController.getAllStandaloneQuestions);

planMapLabellingRouter.get('/img/:id', planMapDiagramLabellingController.getImageById)

planMapLabellingRouter.get('/:id', planMapDiagramLabellingController.getQuestionById);

planMapLabellingRouter.get('/ans/:id', planMapDiagramLabellingController.getAns);

planMapLabellingRouter.patch('/ans/:id', checkAuth, planMapDiagramLabellingController.updateAns)

planMapLabellingRouter.patch('/:id', checkAuth, planMapDiagramLabellingController.editQuestion);

planMapLabellingRouter.delete('/:id', checkAuth, planMapDiagramLabellingController.delQuestion)

export default planMapLabellingRouter;
