import log from '../lib/logger.js';
import lMatchingQuestion from '../models/lMatching.js'
import util from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {
    const {listeningMatching} = req.body;

    log.info('Creating Listening Matching Question.',listeningMatching);

    try {

        let blankAnsID, filledAnsID;

        if (listeningMatching.answer !== undefined) filledAnsID = await util.createAns(listeningMatching.answer);
        else blankAnsID = await util.createBlankAnsArr();

        const q = new lMatchingQuestion({
            startQuestionNum: listeningMatching.startQuestionNum,
            endQuestionNum: listeningMatching.endQuestionNum,
            standAlone: listeningMatching.standAlone,
            numOfWords: listeningMatching.numOfWords,
            numOfNum: listeningMatching.numOfNum,
            questionHeader: listeningMatching.questionHeader,
            questionOptionRepeatable: listeningMatching.questionOptionRepeatable,
            questionStatement: listeningMatching.questionStatement,
            questionTitle: listeningMatching.questionTitle,
            questionOptions: listeningMatching.questionOptions,
            numTitle: listeningMatching.numTitle,
            numStatements: listeningMatching.numStatements,
            answer: listeningMatching.standAlone ? filledAnsID : blankAnsID,
        });
        
        const savedQuestion = (await q.save()).toJSON();
        
        log.info('Created Listening Matching Completion Question.',savedQuestion);
        
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

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all Listening Matching Questions.')

        const questions = await lMatchingQuestion.find();

        if(questions.length === 0){

            log.error("Couldn't find any listening matching questions");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all Listening Matching Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding listening matching questions.',err);
            
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

        const questions = await lMatchingQuestion.find({ standAlone: true }).select("-answer");

        
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
            message: "Fetched all stand alone questions successfully",
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

const getQuestionById = async (req, res) => {

    log.info('fetching Listen Matching Question using id.')

    const lMatchingID = req.params.id;

    try {
        
        const Question = await lMatchingQuestion.findById(lMatchingID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Listening Matching Question found.', Question.toJSON());

        return res.status(200).json({
            message: "Listening Matching Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Listening Matching Question by id.',err);
            
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

        log.info('Getting answer to Listening Matching question with id:', qID);
        
        const ans = await lMatchingQuestion.findById(qID).populate({
            path: "answer",
        }).select("answer");

        if(!ans){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        return res.status(200).json({
            message: "Listening Matching Answers.",
            obj: ans,
            ok: true,
            status: 200
        })

    } catch (err) {
        
        log.error('Error while finding ans to listening matching questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {

    log.info('fetching Listen Matching Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await lMatchingQuestion.findById(qID);

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const ansArrID =  await util.createAns(updates["answer"])

        Question["answer"] = ansArrID;

        const savedQuestion = (await Question.save()).toJSON();

        log.info('Listening Matching Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Listening Matching Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Listening Matching Answers updated by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

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

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        Object.keys(updates).forEach((key) =>{
            log.debug(updates)
            Question[key] = updates[key];
        })

        const savedQuestion = (await Question.save()).toJSON();

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
    
    log.info('Deleting Listen Matching Question using id.');

    const lMatchingID = req.params.id;

    try {

        const deletedQuestion = await lMatchingQuestion.findByIdAndDelete(lMatchingID);

        if (!deletedQuestion) {
            log.error("Couldn't find any question using id.");
            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
        }

        log.info('Listening Matching Question deleted.', deletedQuestion);

        return res.status(200).json({
            message: "Listening Matching Question deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting Listening Matching Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

};


const lMatchingController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion}

export default lMatchingController;