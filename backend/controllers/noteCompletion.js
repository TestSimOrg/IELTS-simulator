import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import noteCompletionQuestion from '../models/noteCompletion.js'

const createQuestion = async (req, res) => {
    const {noteCompletion} = req.body;

    logger.debug('Creating Note Completion Question.',noteCompletion);


    try {
        const q = new noteCompletionQuestion({

            startQuestionNum: noteCompletion.startQuestionNum,
            endQuestionNum: noteCompletion.endQuestionNum,
            numOfWords: noteCompletion.numOfWords,
            numOfNum: noteCompletion.numOfNum,
            questionHeader: noteCompletion.questionHeader,
            questionTitle: noteCompletion.questionTitle,
            questionStatements: noteCompletion.questionStatements,

        });

        const savedQuestion = await q.save();

        logger.debug('Created Note Completion Question.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error while creating Note Completion Question.',err);
            
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