import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import rMatchingQuestion from '../models/rMatching.js';

const createQuestion = async (req, res) => {
    const {rMatching} = req.body;

    logger.debug('Creating Reading Matching Question.',rMatching);


    try {
        const q = new rMatchingQuestion({

            startQuestionNum: rMatching.startQuestionNum,
            endQuestionNum: rMatching.endQuestionNum,
            numOfWords: rMatching.numOfWords,
            qTypeList: rMatching.qTypeList,
            qTypeMatchingInfo: rMatching.qTypeMatchingInfo,
            questionHeader: rMatching.questionHeader,
            questionOptionRepeatable: rMatching.questionOptionRepeatable,
            questionTitle: rMatching.questionTitle || '',
            questionStatements: rMatching.questionStatements || [],
            numStatements: rMatching.numStatements,

        });

        const savedQuestion = await q.save();

        logger.debug('Created Reading Matching Question.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error while creating Reading Matching Question.',err);
            
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