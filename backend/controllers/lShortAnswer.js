import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import lShortAnswerQuestion from '../models/lShortAnswer.js'

const createQuestion = async (req, res) => {
    const {listeningShortAns} = req.body;

    logger.debug('Creating Listening Short Ans Question.',listeningShortAns);

        try {
                const q = new lShortAnswerQuestion({
                    startQuestionNum: listeningShortAns.startQuestionNum,
                    endQuestionNum: listeningShortAns.endQuestionNum,
                    numOfWords: listeningShortAns.numOfWords,
                    numOfNum: listeningShortAns.numOfNum,
                    questionHeader: listeningShortAns.questionHeader,
                    questionStatements: listeningShortAns.questionStatements,
                    questionBlanks: listeningShortAns.questionBlanks,
                });
            
            const savedQuestion = await q.save();
            
            logger.debug('Created Listening Short Ans Question.',savedQuestion);
            
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