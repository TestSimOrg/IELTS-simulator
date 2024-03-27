import planMapDiagramLabellingQuestion from '../models/planMapDiagramLabelling.js';
import util from '../utils/createAnswer.js'
import log from '../lib/logger.js';

const createQuestion = async (req, res) => {

    const {pmdLabelling} = req.body;

    log.info('Creating Pland Diagram Labelling Question.', pmdLabelling);

    try {

        let blankAnsID, filledAnsID;

        if (pmdLabelling.answer !== undefined) filledAnsID = util.createAns(pmdLabelling.answer);
        else blankAnsID = util.createBlankAns(pmdLabelling.options !== undefined);

        const q = new planMapDiagramLabellingQuestion({

            startQuestionNum: noteCompletion.startQuestionNum,
            endQuestionNum: noteCompletion.endQuestionNum,
            standAlone: noteCompletion.standAlone,
            options: noteCompletion.options,
            numOfWords: noteCompletion.numOfWords,
            questionHeader: noteCompletion.questionHeader,
            questionTitle: noteCompletion.questionTitle,
            image: noteCompletion.image,
            questionOptions: noteCompletion.questionOptions,
            numStatements: noteCompletion.numStatements,
            answer: noteCompletion.standAlone ? filledAnsID : blankAnsID,

        });

        const savedQuestion = await q.save();

        log.info('Created Pland Diagram Labelling Question.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {

        log.error('Error while creating Pland Diagram Labelling Question.',err);
            
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

        const questions = await planMapDiagramLabellingQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Plan Map Diagram Labelling Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone Plan Map Diagram Labelling Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
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

const editQuestion = async (req, res) => {

    log.info('fetching Plan Map Diagram Labelling Question using id.')

    const pmdLabellingID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await planMapDiagramLabellingQuestion.findById(pmdLabellingID).exec();

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

        const savedQuestion = await Question.save();

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

}

const planMapDiagramLabellingController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default planMapDiagramLabellingController;