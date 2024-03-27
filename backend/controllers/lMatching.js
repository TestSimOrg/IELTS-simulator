import log from '../lib/logger.js';
import lMatchingQuestion from '../models/lMatching.js'
import util from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {
    const {listeningMatching} = req.body;

    log.debug('Creating Listening Matching Question.',listeningMatching);

    try {

        let blankAnsID, filledAnsID;

        if (listeningMatching.answer !== undefined) filledAnsID = util.createAns(listeningMatching.answer);
        else blankAnsID = util.createBlankAns(listeningMatching.options !== undefined);

        const q = new lMatchingQuestion({
            startQuestionNum: listeningMatching.startQuestionNum,
            endQuestionNum: listeningMatching.endQuestionNum,
            standAlone: listeningMatching.standAlone,
            numOfWords: listeningMatching.numOfWords,
            numOfNum: listeningMatching.numOfNum,
            questionHeader: listeningMatching.questionHeader,
            questionOptionRepeatable: listeningMatching.questionOptionRepeatable,
            questionStatement: listeningMatching.questionStatement,
            questionTitle: listeningMatching.questionTitle || '',
            questionOptions: listeningMatching.questionOptions,
            numTitle: listeningMatching.numTitle || '',
            numStatements: listeningMatching.numStatements,
            answer: listeningMatching.standAlone ? filledAnsID : blankAnsID,
        });
        
        const savedQuestion = await q.save();
        
        log.debug('Created Listening Matching Completion Question.',savedQuestion);
        
        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {
        
        log.error('Error while creating a Listen Matching Completion Question.',err);
        
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    } 
}

const getAllStandaloneQuestions = async (req, res) => {
    
    try {
        
        log.info('fetching all stand alone Listening Matching Questions.')

        const questions = await lMatchingQuestion.find({ standAlone: true });

        
        if(questions.length === 0){

            log.error("Couldn't find any stand alone listening matching questions");

            return res.status(404).json({
                message: "No stand alone questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Listening Matching Questions.')

        return res.status(200).json({
            message: "Fetched all stand alone question successsfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone listening matching questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }
    
}

const editQuestion = async (req, res) => {

    log.info('fetching Listen Matching Question using id.')

    const lMatchingID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await lMatchingQuestion.findById(lMatchingID);

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

        const savedQuestion = await Question.save();

        log.info('Listening Matching Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Listening Matching Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Listening Matching Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const delQuestion = async (req, res) => {

}

const lMatchingController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion}

export default lMatchingController;