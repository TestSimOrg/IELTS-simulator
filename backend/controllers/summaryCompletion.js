import log from '../lib/logger.js';
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'
import summaryCompletionQuestion from '../models/summaryCompletion.js'

const createQuestion = async (req, res) => {

    const {summaryCompletion} = req.body;

    log.info('Creating Summary Completion Question.',summaryCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (summaryCompletion.answer !== undefined) filledAnsID = await createAns(summaryCompletion.answer);
        else blankAnsID = await createBlankAnsArr();

        const q = new summaryCompletionQuestion({

            startQuestionNum: summaryCompletion.startQuestionNum,
            endQuestionNum: summaryCompletion.endQuestionNum,
            standAlone: summaryCompletion.standAlone,
            numOfWords: summaryCompletion.numOfWords,
            numOfNum: summaryCompletion.numOfNum,
            qType: summaryCompletion.qType,
            questionHeader: summaryCompletion.questionHeader,
            questionTitle: summaryCompletion.questionTitle,
            summary: summaryCompletion.summary,
            questionOptions: summaryCompletion.questionOptions,
            answer: summaryCompletion.standAlone ? filledAnsID : blankAnsID,

        });

        const savedQuestion = (await q.save()).toJSON();

        log.info('Created Summary Completion Question.', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error while creating a Summary Completion Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        })

    }
    
}

const getAllQuestions = async (req, res) => {
    
    try {
        
        log.info('fetching all Summary Completion Question.')

        const questions = await summaryCompletionQuestion.find();
        
        if(questions.length === 0){

            log.error("Couldn't find any Summary Completion Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all Summary Completion Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding Summary Completion Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Summary Completion Questions.')

        const questions = await summaryCompletionQuestion.find({ standAlone: true }).select("-answer");

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Summary Completion Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Summary Completion Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })

    } catch (err) {

        log.error('Error while finding stand alone Summary Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getQuestionById = async (req, res) => {
    
    log.info('fetching Summary Completion Question using id.')

    const qID = req.params.id;

    try {
        
        const Question = await summaryCompletionQuestion.findById(qID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Summary Completion Question found.', q);

        return res.status(200).json({
            message: "Summary Completion Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Summary Completion Question by id.',err);
            
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

        log.info('Getting answer to Summary Completion Question with id:', qID);
        
        const ans = await summaryCompletionQuestion.findById(qID).populate({
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
            message: "Summary Completion Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to Summary Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {
    
    log.info('fetching Summary Completion Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await summaryCompletionQuestion.findById(qID);

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

        log.info('Summary Completion Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Summary Completion Question Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Summary Completion Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Summary Completion Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await summaryCompletionQuestion.findById(qID).exec();

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
            
        }

        Object.keys(updates).forEach((key) =>{
            Question[key] = updates[key];
        })

        const savedQuestion = await Question.save();

        log.info('Reading Summary Completion updated.', savedQuestion);

        return res.status(200).json({
            message: "Reading Summary Completion Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Summary Completion Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const delQuestion = async (req, res) => {
    
    log.info('Deleting Summary Completion Question using id.');

    const qID = req.params.id;

    try {

        const deletedQuestion = await summaryCompletionQuestion.findByIdAndDelete(qID).exec();

        if (!deletedQuestion) {

            log.error("Couldn't find any question using id for deletion.");

            return res.status(404).json({
                message: "Couldn't find the question using id for deletion.",
                ok: false,
                status: 404
            });

        }

        log.info('Summary Completion Question deleted.', deletedQuestion);

        return res.status(200).json({
            message: "Summary Completion Question deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting Summary Completion Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });
        
    }

};


const summaryCompletionController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default summaryCompletionController;