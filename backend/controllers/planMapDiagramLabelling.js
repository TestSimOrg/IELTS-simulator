import planMapDiagramLabellingQuestion from '../models/planMapDiagramLabelling.js';
import logger from '../lib/logger.js';
import mongoose from 'mongoose';

const createQuestion = async (req, res) => {
    const {pmdLabellingQuestion} = req.body;

    logger.debug('Creating Plan/Map/Diagram Completion Question.',pmdLabellingQuestion);

    if(pmdLabellingQuestion.options){
        try {
            const q = new planMapDiagramLabellingQuestion({
                startQuestionNum: pmdLabellingQuestion.startQuestionNum,
                endQuestionNum: pmdLabellingQuestion.endQuestionNum,
                options: true,
                questionHeader: pmdLabellingQuestion.questionHeader,
                questionTitle: pmdLabellingQuestion.questionTitle,
                image: pmdLabellingQuestion.image,
                questionOptions: pmdLabellingQuestion.questionOptions,
                numStatements: pmdLabellingQuestion.numStatements,
            });
            const savedQuestion = await q.save();

            logger.debug('Created Plan/Map/Diagram Completion Question.',savedQuestion);

            res.status(201).json({
                message: "Question creation successful",
                obj: savedQuestion,
            });

        } catch (err) {
            logger.error('Error while creating a Plan/Map/Diagram Completion Question with mcq.',err);
            res.status(500).json({
                message: 'Server error'
            })
        }
    }else {
        try {
            const q = new planMapDiagramLabellingQuestion({
                startQuestionNum: pmdLabellingQuestion.startQuestionNum,
                endQuestionNum: pmdLabellingQuestion.endQuestionNum,
                options: false,
                numOfWords: pmdLabellingQuestion.numOfWords,
                questionHeader: pmdLabellingQuestion.questionHeader,
                questionTitle: pmdLabellingQuestion.questionTitle,
                image: pmdLabellingQuestion.image,
                numStatements: pmdLabellingQuestion.numStatements,
            });
            const savedQuestion = await q.save();

            logger.debug('Created Plan/Map/Diagram Completion Question.',savedQuestion);

            res.status(201).json({
                message: "Question creation successful",
                obj: savedQuestion,
            });

        } catch (err) {
            logger.error('Error while creating a Plan/Map/Diagram Completion Question with blanks.',err);
            res.status(500).json({
                message: 'Server error'
            })
        }
    }
    
}

const getQuestion = async (req, res) => {

}

const editQuestion = async (req, res) => {

}

const delQuestion = async (req, res) => {

}

export {createQuestion, getQuestion, editQuestion, delQuestion};
