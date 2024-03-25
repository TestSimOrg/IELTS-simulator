import logger from '../lib/logger.js';
import trueFalseNGQuestion from '../models/tfng.js';

const createQuestion = async (req, res) => {

    const {trueFalseNG} = req.body;

    logger.debug('Creating TRUE, FALSE or NOT GIVEN Question', yesNoNG);

    try {
        const q = new trueFalseNGQuestion({

            startQuestionNum: trueFalseNG.startQuestionNum,
            endQuestionNum: trueFalseNG.endQuestionNum,
            questionHeader: trueFalseNG.questionHeader,
            numStatements: trueFalseNG.numStatements,

        })

        const savedQuestion = await q.save();

        logger.debug('Created TRUE, FALSE or NOT GIVEN Question', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error in Creating TRUE, FALSE or NOT GIVEN Question', err);

        res.status(500).json({
            message: 'Server error'
        })
    }
}

const getQuestion = async (req, res) => {

}

const editQuestion = async (req, res) => {

}

const delQuestion = async (req, res) => {

}

export {createQuestion, getQuestion, editQuestion, delQuestion};