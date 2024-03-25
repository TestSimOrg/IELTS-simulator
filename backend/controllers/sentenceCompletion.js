import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import sentenceCompletionQuestion from '../models/sentenceCompletion.js'

const createQuestion = async (req, res) => {

}

const getQuestion = async (req, res) => {
    const {sentenceCompletion} = req.body;

    logger.debug('Creating Sentence Completion Question.',sentenceCompletion);


    try {
        const q = new sentenceCompletionQuestion({

            startQuestionNum: sentenceCompletion.startQuestionNum,
            endQuestionNum: sentenceCompletion.endQuestionNum,
            numOfWords: sentenceCompletion.numOfWords,
            numOfNum: sentenceCompletion.numOfNum,
            questionHeader: sentenceCompletion.questionHeader,
            questionTitle: sentenceCompletion.questionTitle || '',
            numStatements: sentenceCompletion.numStatements,

        });

        const savedQuestion = await q.save();

        logger.debug('Created Sentence Completion Question.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error while creating Sentence Completion Question.',err);
            
        res.status(500).json({
            message: 'Server error'
        })

    }
}

const editQuestion = async (req, res) => {

}

const delQuestion = async (req, res) => {

}

export {createQuestion, getQuestion, editQuestion, delQuestion};