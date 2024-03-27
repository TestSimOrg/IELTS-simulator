import log from '../lib/logger.js';
import rShortAnswerQuestion from '../models/rShortAnswer.js';
import createAns from '../utils/createAnswer.js'
import createBlankAns from '../utils/createAnswer.js'


const createQuestion = async (req, res) => {
    const {rShortAnswer} = req.body;

    log.info('Creating Reading Short Answer Question.',rShortAnswer);

    try {

        const blankAnsID = createBlankAns(rShortAnswer.options);
    
        const filledAnsID = createAns(rShortAnswer.answer)

        const q = new rShortAnswerQuestion({

            startQuestionNum: rShortAnswer.startQuestionNum,
            endQuestionNum: rShortAnswer.endQuestionNum,
            standAlone: rShortAnswer.standAlone,
            numOfWords: rShortAnswer.numOfWords,
            numOfNum: rShortAnswer.numOfNum,
            questionHeader: rShortAnswer.questionHeader,
            numStatements: rShortAnswer.numStatements,
            answer: rShortAnswer.standAlone ? filledAnsID : blankAnsID,
        });

        const savedQuestion = await q.save();

        log.info('Created Reading Short Answer Question.', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error while creating Reading Short Answer Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        })

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Reading Short Answer Questions.')

        const questions = await rShortAnswerQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Reading Short Answer Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone Reading Short Answer Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone Reading Short Answer Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Reading Short Answer Question using id.')

    const rShortAnsID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = rShortAnswerQuestion.findById(rShortAnsID);

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

        const savedQuestion = Question.save();

        log.info('Reading Short Answer updated.', savedQuestion);

        return res.status(200).json({
            message: "Reading Short Answer Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Reading Short Answer Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const delQuestion = async (req, res) => {

}

const rShortAnswerController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default rShortAnswerController;