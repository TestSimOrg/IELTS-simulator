import logger from '../lib/logger.js';
import yesNoNGQuestion from '../models/ynng.js';

const createQuestion = async (req, res) => {

    const {yesNoNG} = req.body;

    logger.debug('Creating YES, NO or NOT GIVEN Question', yesNoNG);

    try {
        const q = new yesNoNGQuestion({

            startQuestionNum: yesNoNG.startQuestionNum,
            endQuestionNum: yesNoNG.endQuestionNum,
            questionHeader: yesNoNG.questionHeader,
            numStatements: yesNoNG.numStatements,

        })

        const savedQuestion = await q.save();

        logger.debug('Created YES, NO or NOT GIVEN Question', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error in Creating YES, NO or NOT GIVEN Question', err);

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