import log from '../lib/logger.js';
import yesNoNGQuestion from '../models/ynng.js';
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {

    const {yesNoNG} = req.body;

    log.info('Creating YES, NO or NOT GIVEN Question', yesNoNG);

    try {

        let blankAnsID, filledAnsID;

        if (yesNoNG.answer !== undefined) filledAnsID = await createAns(yesNoNG.answer);
        else blankAnsID = await createBlankAnsArr();

        const q = new yesNoNGQuestion({

            startQuestionNum: yesNoNG.startQuestionNum,
            endQuestionNum: yesNoNG.endQuestionNum,
            standAlone: yesNoNG.standAlone,
            questionHeader: yesNoNG.questionHeader,
            numStatements: yesNoNG.numStatements,
            answer: yesNoNG.standAlone ? filledAnsID : blankAnsID,

        })

        const savedQuestion = await q.save();

        log.info('Created YES, NO or NOT GIVEN Question', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error in Creating YES, NO or NOT GIVEN Question', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        });

    }
    
}

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all YES, NO or NOT GIVEN Question.')

        const questions = await yesNoNGQuestion.find().select("-answers");
        
        if(questions.length === 0){

            log.error("Couldn't find any YES, NO or NOT GIVEN Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all YES, NO or NOT GIVEN Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding YES, NO or NOT GIVEN Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone YES, NO or NOT GIVEN Questions.')

        const questions = await yesNoNGQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone True, False or Not Given Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone YES, NO or NOT GIVEN Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
            obj: questions,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while finding stand alone YES, NO or NOT GIVEN Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getQuestionById = async (req, res) => {
    
    log.info('fetching YES, NO or NOT GIVEN Question using id.')

    const rMatchingID = req.params.id;

    try {
        
        const Question = await yesNoNGQuestion.findById(rMatchingID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Reading YES, NO or NOT GIVEN Question found.', q);

        return res.status(200).json({
            message: "YES, NO or NOT GIVEN Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching YES, NO or NOT GIVEN Question by id.',err);
            
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

        log.info('Getting answer to YES, NO or NOT GIVEN Question with id:', qID);
        
        const ans = await yesNoNGQuestion.findById(qID).populate({
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
            message: "YES, NO or NOT GIVEN Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to YES, NO or NOT GIVEN Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {
    
    log.info('fetching YES, NO or NOT GIVEN Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await yesNoNGQuestion.findById(qID);

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

        const savedQuestion = await Question.save();
        const populatedQuestion = await savedQuestion.populate("answer");
        const questionJSON = populatedQuestion.toJSON();


        log.info('YES, NO or NOT GIVEN Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "YES, NO or NOT GIVEN Question Answers updated.",
            obj: questionJSON.answer,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating YES, NO or NOT GIVEN Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching YES, NO or NOT GIVEN Question using id.')

    const tfngID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await yesNoNGQuestion.findById(tfngID).exec();

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

        log.info('Reading YES, NO or NOT GIVEN updated.', savedQuestion);

        return res.status(200).json({
            message: "Reading YES, NO or NOT GIVEN Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating YES, NO or NOT GIVEN Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const delQuestion = async (req, res) => {

    log.info('Deleting YES, NO or NOT GIVEN Question using id.');

    const ynngID = req.params.id;

    try {
        
        const deletedQuestion = await yesNoNGQuestion.findByIdAndDelete(ynngID);

        if(!deletedQuestion){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })
            
        }

        log.info('YES, NO or NOT GIVEN Question deleted.', deletedQuestion);

        return res.status(200).json({
            message: "YES, NO or NOT GIVEN Question deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        })

    } catch (err) {

        log.error('Error while deleting YES, NO or NOT GIVEN Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}


const ynngController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion}

export default ynngController;