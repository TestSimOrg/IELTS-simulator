import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import mcq from '../models/mcq.js'

const createQuestion = async (req, res) => {
    const {MCQ} = req.body;

    logger.debug('Creating mcq.',mcq);


    try {
        const q = new mcq({

            startQuestionNum: MCQ.startQuestionNum,
            endQuestionNum: MCQ.endQuestionNum,
            numOfWords: MCQ.numOfWords,
            qType: MCQ.qType,
            questionHeader: MCQ.questionHeader,
            numStatements: MCQ.numStatements,
            questionOptions: MCQ.questionOptions,

        });

        const savedQuestion = await q.save();

        logger.debug('Created mcq.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error while creating a Form Completion Question with mcq.',err);
            
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