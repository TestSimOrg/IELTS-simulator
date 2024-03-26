import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import rShortAnswerQuestion from '../models/rShortAnswer.js'

const createQuestion = async (req, res) => {
    const {rShortAnswer} = req.body;

    logger.debug('Creating Reading Short Answer Question.',rShortAnswer);


    try {
        const q = new rShortAnswerQuestion({

            startQuestionNum: rShortAnswer.startQuestionNum,
            endQuestionNum: rShortAnswer.endQuestionNum,
            numOfWords: rShortAnswer.numOfWords,
            numOfNum: rShortAnswer.numOfNum,
            questionHeader: rShortAnswer.questionHeader,
            numStatements: rShortAnswer.numStatements,

        });

        const savedQuestion = await q.save();

        logger.debug('Created Reading Short Answer Question.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error while creating Reading Short Answer Question.',err);
            
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