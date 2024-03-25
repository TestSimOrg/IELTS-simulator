import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import lMatchingQuestion from '../models/lMatching.js'

const createQuestion = async (req, res) => {
    const {listeningMatching} = req.body;

    logger.debug('Creating Listening Matching Question.',listeningMatching);

        try {
                const q = new lMatchingQuestion({
                    startQuestionNum: listeningMatching.startQuestionNum,
                    endQuestionNum: listeningMatching.endQuestionNum,
                    numOfWords: listeningMatching.numOfWords,
                    numOfNum: listeningMatching.numOfNum,
                    questionHeader: listeningMatching.questionHeader,
                    questionOptionRepeatable: listeningMatching.questionOptionRepeatable,
                    questionStatement: listeningMatching.questionStatement,
                    questionTitle: listeningMatching.questionTitle || '',
                    questionOptions: listeningMatching.questionOptions,
                    numTitle: listeningMatching.numTitle || '',
                    numStatements: listeningMatching.numStatements,
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