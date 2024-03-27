import log from '../lib/logger.js';
import createAns from '../utils/createAnswer.js'
import createBlankAns from '../utils/createAnswer.js'
import noteCompletionQuestion from '../models/noteCompletion.js'

const createQuestion = async (req, res) => {
    const {noteCompletion} = req.body;

    log.info('Creating Note Completion Question.',noteCompletion);

    try {

        const blankAnsID = createBlankAns(listeningShortAns.options);
    
        const filledAnsID = createAns(listeningShortAns.answer)

        const q = new noteCompletionQuestion({

            startQuestionNum: noteCompletion.startQuestionNum,
            endQuestionNum: noteCompletion.endQuestionNum,
            standAlone: noteCompletion.standAlone,
            numOfWords: noteCompletion.numOfWords,
            numOfNum: noteCompletion.numOfNum,
            questionHeader: noteCompletion.questionHeader,
            questionTitle: noteCompletion.questionTitle,
            questionStatements: noteCompletion.questionStatements,
            answer: noteCompletion.standAlone ? filledAnsID : blankAnsID,

        });

        const savedQuestion = await q.save();

        log.info('Created Note Completion Question.', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
        });

    } catch (err) {

        log.error('Error while creating Note Completion Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Note Completion Questions.')

        const questions = await noteCompletionQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone note completion questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone Note Completion Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone mcqs.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Note Completion Question using id.')

    const noTeCompletionID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = noteCompletionQuestion.findById(noTeCompletionID);

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })
            
        }

        Object.keys(updates).forEach((key) =>{
            Question[key] = updates[key];
        })

        const savedQuestion = Question.save();

        log.info('Note Copmletion Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Note Completion Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Note Completion Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const delQuestion = async (req, res) => {

}

const noteCompletionController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default noteCompletionController;