import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import tableCompletionQuestion from "../models/tableCompletion.js";

const createQuestion = async (req, res) => {
    const {tableCompletion} = req.body;

    logger.debug('Creating Table Completion Question.',tableCompletion);


    try {
        const q = new tableCompletionQuestion({

            startQuestionNum: tableCompletion.startQuestionNum,
            endQuestionNum: tableCompletion.endQuestionNum,
            numOfWords: tableCompletion.numOfWords,
            numOfNum: tableCompletion.numOfNum,
            numOfRows: tableCompletion.numOfRows,
            numOfCols: tableCompletion.numOfCols,
            rows: tableCompletion.rows,

        });

        const savedQuestion = await q.save();

        logger.debug('Created Table Completion Question.', savedQuestion);

        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        logger.error('Error while creating Table Completion Question.',err);
            
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