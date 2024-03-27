import log from '../lib/logger.js';
import mcq from '../models/mcq.js';
import createAns from '../utils/createAnswer.js'
import createBlankAns from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {
    const {MCQ} = req.body;

    log.info('Creating mcq.',mcq);

    try {

        const blankAnsID = createBlankAns(listeningShortAns.options);
    
        const filledAnsID = createAns(listeningShortAns.answer)

        const q = new mcq({

            startQuestionNum: MCQ.startQuestionNum,
            endQuestionNum: MCQ.endQuestionNum,
            standAlone: MCQ.standAlone,
            numOfWords: MCQ.numOfWords,
            qType: MCQ.qType,
            questionHeader: MCQ.questionHeader,
            numStatements: MCQ.numStatements,
            questionOptions: MCQ.questionOptions,
            answer: MCQ.standAlone ? filledAnsID : blankAnsID,

        });

        const savedQuestion = await q.save();

        log.info('Created mcq.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        log.error('Error while creating a Form Completion Question with mcq.',err);
            
        res.status(500).json({
            message: 'Server error'
        })

    }


}

const getQuestion = async (req, res) => {

    try {
        
        log.info('fetching all stand alone mcqs.')

        const questions = await mcq.find({ standAlone: true });

        
        if(questions.length === 0){

            log.error("Couldn't find any stand alone mcqs.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone mcqs.');

        return res.status(200).json({
            message: "Fetched all stand alone question successsfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone mcqs.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching mcq using id.')

    const lShortAnsID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = mcq.findById(lShortAnsID);

        if(!Question){

            log.error("Couldn't find any question using id.");

            res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        Object.keys(updates).forEach((key) =>{
            Question[key] = updates[key];
        })

        const savedQuestion = Question.save();

        log.info('mcq updated.', savedQuestion);

        return res.status(200).json({
            message: "mcq updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating mcq by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const delQuestion = async (req, res) => {

}

const mcqController = {createQuestion, getQuestion, editQuestion, delQuestion};

export default mcqController;