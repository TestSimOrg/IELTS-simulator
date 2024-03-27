import log from '../lib/logger.js';
import trueFalseNGQuestion from '../models/tfng.js';
import util from '../utils/createAnswer.js';

const createQuestion = async (req, res) => {

    const {trueFalseNG} = req.body;

    log.info('Creating TRUE, FALSE or NOT GIVEN Question', trueFalseNG);

    try {

        let blankAnsID, filledAnsID;
        if (trueFalseNG.answer !== undefined) filledAnsID = util.createAns(trueFalseNG.answer);
        else blankAnsID = util.createBlankAns(trueFalseNG.options !== undefined);

        const q = new trueFalseNGQuestion({

            startQuestionNum: trueFalseNG.startQuestionNum,
            endQuestionNum: trueFalseNG.endQuestionNum,
            standAlone: trueFalseNG.standAlone,
            questionHeader: trueFalseNG.questionHeader,
            numStatements: trueFalseNG.numStatements,
            answer: trueFalseNG.standAlone ? filledAnsID : blankAnsID,

        })

        const savedQuestion = await q.save();

        log.info('Created TRUE, FALSE or NOT GIVEN Question', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error in Creating TRUE, FALSE or NOT GIVEN Question', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone True, False or Not Given Questions.')

        const questions = await trueFalseNGQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone True, False or Not Given Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone True, False or Not Given Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
            obj: questions,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while finding stand alone True, False or Not Given Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching True, False or Not Given Question using id.')

    const tfngID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await trueFalseNGQuestion.findById(tfngID).exec();

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
            
        }

        Object.keys(updates).forEach((key) =>{
            log.info(`${Question[key]} ---> ${updates[key]}`)
            Question[key] = updates[key];
        })

        const savedQuestion = await Question.save();

        log.info(savedQuestion);

        return res.status(200).json({
            message: "Reading True, False or Not Given Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating True, False or Not Given Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const delQuestion = async (req, res) => {

    log.info('Deleting True, False or Not Given Question using id.');
    
    const tfngID = req.params.id;
    
    try {

        const deletedQuestion = await trueFalseNGQuestion.findByIdAndDelete(tfngID).exec();
        
        if (!deletedQuestion) {

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }
        
        log.info(deletedQuestion);
        
        return res.status(200).json({
            message: "True, False or Not Given Question deleted successfully.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting True, False or Not Given Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }
    
};


const tfngController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default tfngController;