import logger from '../lib/logger.js';
import formCompletionQuestion from '../models/formCompletion.js';
import {createBlankAns, createAns} from '../utils/createBlankAns.js'

const createQuestion = async (req, res) => {
    const {formCompletion} = req.body;

    logger.debug('Creating Form Completion Question.',formCompletion);

    try {

        const blankAnsID = createBlankAns(formCompletion.options);
        
        const filledAnsID = createAns(formCompletion.answer)
        
        const q = new formCompletionQuestion({
            startQuestionNum: formCompletion.startQuestionNum,
            endQuestionNum: formCompletion.endQuestionNum,
            standAlone: formCompletion.standAlone,
            numOfWords: formCompletion.numOfWords,
            numOfNum: formCompletion.numOfNum,
            questionHeader: formCompletion.questionHeader,
            questionTitle: formCompletion.questionTitle,
            questionStatements: formCompletion.questionStatements,
            answer: formCompletion.standAlone ? filledAnsID : blankAnsID,
        });
        
        const savedQuestion = await q.save();
        
        logger.debug('Created Form Completion Question.',savedQuestion);
        
        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {
        
        logger.error('Error while creating a Form Completion Question.',err);
        
        res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        })
    }    

}

const getAllStandaloneQuestions = async (req, res) => {
   
    
    try {
        
        log.info('fetching all stand alone Form Completion Question.')

        const questions = await formCompletionQuestion.find({ standAlone: true });

        
        if(questions.length === 0){

            log.error("Couldn't find any stand alone form completion questions");

            return res.status(404).json({
                message: "No stand alone questions found",
                ok: false,
                status: 404
            });
        
        }

        return res.status(200).json({
            message: "Fetched all stand alone question successsfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone Form Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }
    
}

const editQuestion = async (req, res) => {
    
    log.info('fetching Form Completion Question using id.')

    const fCompletionID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = formCompletionQuestion.findById(fCompletionID);

        if(!Question){

            log.error("Couldn't find any question using id.");

            res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })
        }

        Object.keys(updates).forEach((key) =>{
            Question[key] = updates[key];
        })

        const savedQuestion = Question.save();

        log.info('Form Copmletion Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Form Completion Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Flowchart Completion Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }
}

const delQuestion = async (req, res) => {

}

const formCompletionController ={createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default formCompletionController;