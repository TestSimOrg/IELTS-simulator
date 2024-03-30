import log from '../lib/logger.js';
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'
import noteCompletionQuestion from '../models/noteCompletion.js'

const createQuestion = async (req, res) => {

    const {noteCompletion} = req.body;

    log.info('Creating Note Completion Question.',noteCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (noteCompletion.answer !== undefined) filledAnsID = await createAns(noteCompletion.answer);
        else blankAnsID = await createBlankAnsArr();

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

        const savedQuestion = (await q.save()).toJSON();

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

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all Note Completion Question.')

        const questions = await noteCompletionQuestion.find();
        
        if(questions.length === 0){

            log.error("Couldn't find any Note Completion Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all Note Completion Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding Note Completion Questions.',err);
            
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

        const questions = await noteCompletionQuestion.find({ standAlone: true }).select("-answer");

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Note Completion Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Note Completion Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone Note Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getQuestionById = async (req, res) => {
    
    log.info('fetching Note Completion Question using id.')

    const noteCompletionID = req.params.id;

    try {
        
        const Question = await noteCompletionQuestion.findById(noteCompletionID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Note Completion Question found.', q);

        return res.status(200).json({
            message: "Note Completion Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Note Completion Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const getAns = async (req, res) => {
    
    const qID = req.params.id;
    
    try {

        log.info('Getting answer to Note Completion Question with id:', qID);
        
        const ans = await noteCompletionQuestion.findById(qID).populate({
            path: "answer",
        }).select("answer");

        if(!ans){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }

        return res.status(200).json({
            message: "Note Completion Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to Note Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {
    
    log.info('fetching Note Completion Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await noteCompletionQuestion.findById(qID);

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }

        const ansArrID =  await createAns(updates["answer"])

        Question["answer"] = ansArrID;

        const savedQuestion = (await Question.save()).toJSON();

        log.info('Note Completion Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Note Completion Question Answers updated.",
            obj: savedQuestion.answer,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Note Completion Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Note Completion Question using id.')

    const noTeCompletionID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await noteCompletionQuestion.findById(noTeCompletionID).exec();

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

        const savedQuestion = await Question.save();

        log.info('Note Completion Question updated.', savedQuestion);

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

    log.info('Deleting Note Completion Question using id.');

    const noTeCompletionID = req.params.id;

    try {
        
        const deletedQuestion = await noteCompletionQuestion.findByIdAndDelete(noTeCompletionID).exec();

        if(!deletedQuestion){

            log.error("Couldn't find any question using id for deletion.");

            return res.status(404).json({
                message: "Couldn't find the question using id for deletion.",
                ok: false,
                status: 404
            });
            
        }

        log.info('Note Completion Question deleted.', deletedQuestion);

        return res.status(200).json({
            message: "Note Completion Question deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });


    } catch (err) {

        log.error('Error while deleting Note Completion Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}


const noteCompletionController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default noteCompletionController;