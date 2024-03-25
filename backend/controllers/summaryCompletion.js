import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import summaryCompletionQuestion from '../models/summaryCompletion.js'

const createQuestion = async (req, res) => {
    const {summaryCompletion} = req.body;

    logger.debug('Creating Summary Completion Question.',summaryCompletion);


    try {
        const q = new summaryCompletionQuestion({

            startQuestionNum: summaryCompletion.startQuestionNum,
            endQuestionNum: summaryCompletion.endQuestionNum,
            numOfWords: summaryCompletion.numOfWords,
            numOfNum: summaryCompletion.numOfNum,
            qType: summaryCompletion.qType,
            questionHeader: summaryCompletion.questionHeader,
            questionTitle: summaryCompletion.questionTitle,
            summary: summaryCompletion.summary,
            questionOptions: summaryCompletion.questionOptions || [],

        });

        const savedQuestion = await q.save();

        logger.debug('Created Summary Completion Question.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error while creating a Summary Completion Question.',err);
            
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