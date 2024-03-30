import planMapDiagramLabellingQuestion from '../models/planMapDiagramLabelling.js';
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'
import log from '../lib/logger.js';
import { convertImg } from '../utils/convertImg.js'
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const path_name = path.join(path.dirname(__dirname) + '/uploads/new.jpg');


const createQuestion = async (req, res) => {

    const fileData = req.file.originalname.split('.');

    const fileName = fileData[0];
    const fileExt = fileData[1]

    const imgBase64 = await convertImg(fileName, fileExt);

    const pmdLabelling = JSON.parse(req.body.pmdLabelling);
    
    log.info(typeof pmdLabelling);

    try {

        let blankAnsID, filledAnsID;

        if (pmdLabelling.answer !== undefined) filledAnsID = await createAns(pmdLabelling.answer);
        else blankAnsID = await createBlankAnsArr();

        const q = new planMapDiagramLabellingQuestion({

            startQuestionNum: pmdLabelling.startQuestionNum,
            endQuestionNum: pmdLabelling.endQuestionNum,
            standAlone: pmdLabelling.standAlone,
            options: pmdLabelling.options,
            numOfWords: pmdLabelling.numOfWords,
            questionHeader: pmdLabelling.questionHeader,
            questionTitle: pmdLabelling.questionTitle,
            image: imgBase64,
            questionOptions: pmdLabelling.questionOptions,
            numStatements: pmdLabelling.numStatements,
            answer: pmdLabelling.standAlone ? filledAnsID : blankAnsID,

        });

        const { image, ...savedQuestion } = (await q.save()).toJSON();

        log.info('Created Plan and Diagram Labelling Question: ', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {

        log.error('Error while creating Plan and Diagram Labelling Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all Plan Map Diagram Completion Question.')

        const questions = await planMapDiagramLabellingQuestion.find().select("-image");
        
        if(questions.length === 0){

            log.error("Couldn't find any Plan Map Diagram Completion Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all Plan Map Diagram Completion Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding Plan Map Diagram Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Plan Map Diagram Labelling Questions.')

        const questions = await planMapDiagramLabellingQuestion.find({ standAlone: true }).select("-answer -image");

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Plan Map Diagram Labelling Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }


        log.info(`sending all stand alone Plan Map Diagram Labelling Questions: ${questions}`);

        return res.status(200).json({
            message: "Fetched all stand alone questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone Plan Map Diagram Labelling Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getImageById = async (req, res) => {
    
    log.info('fetching Plan Map Diagram Completion Question using id.')

    const pmdCompletionID = req.params.id;

    try {
        
        const Question = await planMapDiagramLabellingQuestion.findById(pmdCompletionID).select("image");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        let q = Question.toJSON();

        const base64Image = q.image;

        const imageBuffer = Buffer.from(base64Image, 'base64');

        fs.writeFileSync('./uploads/new.jpg', imageBuffer);
        log.info('Plan Map Diagram Completion Question found.');
        res.status(200).sendFile(path_name);
        setTimeout(async () => {await fs.promises.unlink(path_name)}, 100);

    } catch (err) {

        log.error('Error while fetching Image by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const getQuestionById = async (req, res) => {
    
    log.info('fetching Plan Map Diagram Completion Question using id.')

    const pmdCompletionID = req.params.id;

    try {
        
        const Question = await planMapDiagramLabellingQuestion.findById(pmdCompletionID).select("-answer -image");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        let q = Question.toJSON();

        log.info('Plan Map Diagram Completion Question found.', q);

        return res.status(200).json({
            message: "Plan Map Diagram Completion Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Plan Map Diagram Completion Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const getAns = async (req, res) => {
    
    const qID = req.params.id;
    
    try {

        log.info(qID);
        
        const ans = await planMapDiagramLabellingQuestion.findById(qID).populate({
            path: "answer",
        }).select("answer");

        if(!ans){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }

        return res.status(200).json({
            message: "Plan Map Diagram Completion Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to Plan Map Diagram Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {
    
    log.info('fetching Plan Map Diagram Completion Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await planMapDiagramLabellingQuestion.findById(qID).select("-image");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }

        const ansArrID =  await createAns(updates["answer"])

        Question["answer"] = ansArrID;

        const savedQuestion = (await Question.save()).toJSON();

        log.info('Plan Map Diagram Completion Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Plan Map Diagram Completion Question Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Plan Map Diagram Completion Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Plan Map Diagram Labelling Question using id.')

    const pmdLabellingID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await planMapDiagramLabellingQuestion.findById(pmdLabellingID).select("-image -answer").exec();

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })
            
        }

        Object.keys(updates).forEach((key) =>{
            Question[key] = updates[key];
        })

        const savedQuestion = (await Question.save()).toJSON();

        log.info('Plan Map Diagram Labelling Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Plan Map Diagram Labelling Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Plan Map Diagram Labelling Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const delQuestion = async (req, res) => {

    log.info('Deleting Plan Map Diagram Labelling Question by ID.');

    const pmdLabellingID = req.params.id;

    try {

        const deletedQuestion = await planMapDiagramLabellingQuestion.findByIdAndDelete(pmdLabellingID).select("-answer -image").exec();

        if (!deletedQuestion) {

            log.error("Couldn't find any question using ID.");

            return res.status(404).json({
                message: "Couldn't find the question using ID.",
                ok: false,
                status: 404
            });
        }

        log.info('Plan Map Diagram Labelling Question deleted.', deletedQuestion.toJSON());

        return res.status(200).json({
            message: "Plan Map Diagram Labelling Question deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting Plan Map Diagram Labelling Question by ID.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

};


const planMapDiagramLabellingController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getImageById, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default planMapDiagramLabellingController;