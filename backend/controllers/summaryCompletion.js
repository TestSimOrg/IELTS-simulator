import log from '../lib/logger.js';
import util from '../utils/createAnswer.js'
import summaryCompletionQuestion from '../models/summaryCompletion.js'

const createQuestion = async (req, res) => {

    const {summaryCompletion} = req.body;

    log.info('Creating Summary Completion Question.',summaryCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (summaryCompletion.answer !== undefined) filledAnsID = util.createAns(summaryCompletion.answer);
        else blankAnsID = util.createBlankAns(summaryCompletion.options !== undefined);

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

        const savedQuestion = await q.save();

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

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Summary Completion Questions.')

        const questions = await summaryCompletionQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Summary Completion Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone Summary Completion Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
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

const editQuestion = async (req, res) => {

    log.info('fetching Summary Completion Question using id.')

    const summaryCompletionID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await summaryCompletionQuestion.findById(summaryCompletionID).exec();

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

    const summaryCompletionID = req.params.id;

    try {

        const deletedQuestion = await summaryCompletionQuestion.findByIdAndDelete(summaryCompletionID).exec();

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


const summaryCompletionController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default summaryCompletionController;