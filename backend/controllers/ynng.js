import log from '../lib/logger.js';
import yesNoNGQuestion from '../models/ynng.js';
import util from '../utils/createAnswer.js';

const createQuestion = async (req, res) => {

    const {yesNoNG} = req.body;

    log.info('Creating YES, NO or NOT GIVEN Question', yesNoNG);

    try {

        let blankAnsID, filledAnsID;

        if (yesNoNG.answer !== undefined) filledAnsID = util.createAns(yesNoNG.answer);
        else blankAnsID = util.createBlankAns(yesNoNG.options !== undefined);

        const q = new yesNoNGQuestion({

            startQuestionNum: yesNoNG.startQuestionNum,
            endQuestionNum: yesNoNG.endQuestionNum,
            standAlone: yesNoNG.standAlone,
            questionHeader: yesNoNG.questionHeader,
            numStatements: yesNoNG.numStatements,
            answer: yesNoNG.standAlone ? filledAnsID : blankAnsID,

        })

        const savedQuestion = await q.save();

        log.info('Created YES, NO or NOT GIVEN Question', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error in Creating YES, NO or NOT GIVEN Question', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        });

    }
    
}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone YES, NO or NOT GIVEN Questions.')

        const questions = await yesNoNGQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone True, False or Not Given Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone YES, NO or NOT GIVEN Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
            obj: questions,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while finding stand alone YES, NO or NOT GIVEN Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching YES, NO or NOT GIVEN Question using id.')

    const tfngID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await yesNoNGQuestion.findById(tfngID).exec();

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
            
        }

        Object.keys(updates).forEach((key) =>{
            Question[key] = updates[key];
        })

        const savedQuestion = await Question.save();

        log.info('Reading YES, NO or NOT GIVEN updated.', savedQuestion);

        return res.status(200).json({
            message: "Reading YES, NO or NOT GIVEN Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating YES, NO or NOT GIVEN Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const delQuestion = async (req, res) => {

    try {

        const tfngID = req.params.id;

        const questionToDelete = await yesNoNGQuestion.findById(tfngID).exec();

        if (!questionToDelete) {

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }

        await questionToDelete.remove();

        log.info('Question deleted successfully.');

        return res.status(200).json({
            message: "Question deleted successfully.",
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting the question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}


const ynngController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion}

export default ynngController;