import log from '../lib/logger.js';
import matchingQuestion from '../models/matching.js'
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {
    const {matching} = req.body;

    log.info('Creating Listening Matching Question.',matching);

    try {

        let blankAnsID, filledAnsID;

        if (matching.answer !== undefined) filledAnsID = await createAns(matching.answer);
        else blankAnsID = await createBlankAnsArr();

        const q = new matchingQuestion({
            startQuestionNum: matching.startQuestionNum,
            endQuestionNum: matching.endQuestionNum,
            standAlone: matching.standAlone,
            numOfWords: matching.numOfWords,
            numOfNum: matching.numOfNum,
            questionHeader: matching.questionHeader,
            questionStatement: matching.questionStatement ? matching.questionStatement : " ",
            questionTitle: matching.questionTitle,
            questionOptions: matching.questionOptions,
            numTitle: matching.numTitle,
            numStatements: matching.numStatements,
            answer: matching.standAlone ? filledAnsID : blankAnsID,
        });
        
        const savedQuestion = (await q.save()).toJSON();
        
        log.info('Created Matching Completion Question.',savedQuestion);
        
        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {
        
        log.error('Error while creating a Matching Completion Question.',err);
        
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

        const questions = await matchingQuestion.find();

        if(questions.length === 0){

            log.error("Couldn't find any matching questions");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all Matching Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding matching questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {
    
    try {
        
        log.info('fetching all stand alone Matching Questions.')

        const questions = await matchingQuestion.find({ standAlone: true }).select("-answer");

        
        if(questions.length === 0){

            log.error("Couldn't find any stand alone matching questions");

            return res.status(404).json({
                message: "No stand alone questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Matching Questions.')

        return res.status(200).json({
            message: "Fetched all stand alone questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone matching questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }
    
}

const getQuestionById = async (req, res) => {

    log.info('fetching Matching Question using id.')

    const matchingID = req.params.id;

    try {
        
        const Question = await matchingQuestion.findById(matchingID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Matching Question found.', Question.toJSON());

        return res.status(200).json({
            message: "Matching Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Matching Question by id.',err);
            
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

        log.info('Getting answer to Matching question with id:', qID);
        
        const ans = await matchingQuestion.findById(qID).populate({
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
            message: "Matching Answers.",
            obj: ans,
            ok: true,
            status: 200
        })

    } catch (err) {
        
        log.error('Error while finding ans to matching questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {

    log.info('fetching Matching Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await matchingQuestion.findById(qID);

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const ansArrID =  await createAns(updates["answer"])

        Question["answer"] = ansArrID;

        const savedQuestion = (await Question.save()).toJSON();

        log.info('Matching Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Matching Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Matching Answers updated by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Matching Question using id.')

    const matchingID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await matchingQuestion.findById(matchingID);

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

        log.info('Matching Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Matching Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Matching Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const delQuestion = async (req, res) => {
    
    log.info('Deleting Matching Question using id.');

    const matchingID = req.params.id;

    try {

        const deletedQuestion = await matchingQuestion.findByIdAndDelete(matchingID);

        if (!deletedQuestion) {
            log.error("Couldn't find any question using id.");
            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
        }

        log.info('Matching Question deleted.', deletedQuestion);

        return res.status(200).json({
            message: "Matching Question deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting Matching Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

};


const matchingController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion}

export default matchingController;