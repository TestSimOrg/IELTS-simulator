import log from '../lib/logger.js';
import util from '../utils/createAnswer.js'
import sentenceCompletionQuestion from '../models/sentenceCompletion.js'

const createQuestion = async (req, res) => {

    const {sentenceCompletion} = req.body;

    log.info('Creating Sentence Completion Question.',sentenceCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (sentenceCompletion.answer !== undefined) filledAnsID = util.createAns(sentenceCompletion.answer);
        else blankAnsID = util.createBlankAns(sentenceCompletion.options !== undefined);

        const q = new sentenceCompletionQuestion({

            startQuestionNum: sentenceCompletion.startQuestionNum,
            endQuestionNum: sentenceCompletion.endQuestionNum,
            standAlone: sentenceCompletion.standAlone,
            numOfWords: sentenceCompletion.numOfWords,
            numOfNum: sentenceCompletion.numOfNum,
            questionHeader: sentenceCompletion.questionHeader,
            questionTitle: sentenceCompletion.questionTitle || '',
            numStatements: sentenceCompletion.numStatements,
            answer: sentenceCompletion.standAlone ? filledAnsID : blankAnsID,

        });

        const savedQuestion = await q.save();

        log.info('Created Sentence Completion Question.', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error while creating Sentence Completion Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        })

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Sentence Completion Questions.')

        const questions = await sentenceCompletionQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Sentence Completion Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone Sentence Completion Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone Sentence Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Sentence Completion Question using id.')

    const sentenceCompletionID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await sentenceCompletionQuestion.findById(sentenceCompletionID).exec();

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

        log.info('Reading Sentence Completion updated.', savedQuestion);

        return res.status(200).json({
            message: "Reading Sentence Completion Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Sentence Completion Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const delQuestion = async (req, res) => {
    
    try {

        const sentenceCompletionID = req.params.id;
        
        const deletedQuestion = await sentenceCompletionQuestion.findByIdAndDelete(sentenceCompletionID).exec();
        
        if (!deletedQuestion) {

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }
        
        log.info('Sentence Completion Question deleted.', deletedQuestion);
        
        return res.status(200).json({
            message: "Sentence Completion Question deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });
        
    } catch (err) {

        log.error('Error while deleting Sentence Completion Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

};


const sentenceCompletionController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default sentenceCompletionController;