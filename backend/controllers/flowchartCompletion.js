import logger from '../lib/logger.js';
import mongoose from 'mongoose';
import flowchartCompletionQuestion from '../models/flowchartCompletion.js';

const createQuestion = async (req, res) => {

    const {fcCompletion} = req.body;

    logger.debug('Creating Flowchart Completion Question.',fcCompletion);

    if(fcCompletion.options){
        
        try {
                const q = new flowchartCompletionQuestion({
                    startQuestionNum: fcCompletion.startQuestionNum,
                    endQuestionNum: fcCompletion.endQuestionNum,
                    options: true,
                    questionHeader: fcCompletion.questionHeader,
                    questionTitle: fcCompletion.questionTitle || '',
                    questionOptions: fcCompletion.questionOptions,
                    steps: fcCompletion.steps,
                });
            
            const savedQuestion = await q.save();
            
            logger.debug('Created Flowchart Completion Question.',savedQuestion);
            
            res.status(201).json({
                message: "Question creation successful",
                obj: savedQuestion,
            });

        } catch (err) {
            
            logger.error('Error while creating a Flowchart Completion Question with mcq.',err);
            
            res.status(500).json({
                message: 'Server error'
            })

        }    

    }else {

        try {
            const q = new flowchartCompletionQuestion({
                startQuestionNum: fcCompletion.startQuestionNum,
                endQuestionNum: fcCompletion.endQuestionNum,
                options: false,
                numOfWords: fcCompletion.numOfWords,
                numOfNum: fcCompletion.numOfNum,
                questionHeader: fcCompletion.questionHeader,
                steps: fcCompletion.steps,
            });

            const savedQuestion = await q.save();

            logger.debug('Created Flowchart Completion Question.',savedQuestion);

            res.status(201).json({

            message: "Question creation successful",
            obj: savedQuestion,

        });

    } catch (err) {

        logger.error('Error while creating a Flowchart Completion Question with fill in the blanks.',err);
        
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