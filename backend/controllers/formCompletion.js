import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import formCompletionQuestion from '../models/formCompletion.js';

const createQuestion = async (req, res) => {
    const {formCompletion} = req.body;

    logger.debug('Creating Form Completion Question.',formCompletion);

        try {
                const q = new formCompletionQuestion({
                    startQuestionNum: formCompletion.startQuestionNum,
                    endQuestionNum: formCompletion.endQuestionNum,
                    numOfWords: formCompletion.numOfWords,
                    numOfNum: formCompletion.numOfNum,
                    questionHeader: formCompletion.questionHeader,
                    questionTitle: formCompletion.questionTitle,
                    questionStatements: formCompletion.questionStatements,
                });
            
            const savedQuestion = await q.save();
            
            logger.debug('Created Form Completion Question.',savedQuestion);
            
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