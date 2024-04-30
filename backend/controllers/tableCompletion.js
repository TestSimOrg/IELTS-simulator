import log from '../lib/logger.js';
import tableCompletionQuestion from "../models/tableCompletion.js";
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'


const createQuestion = async (req, res) => {

    const {tableCompletion} = req.body;

    log.info('Creating Table Completion Question.',tableCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (tableCompletion.answer !== undefined) filledAnsID = await createAns(tableCompletion.answer);
        else blankAnsID = await createBlankAnsArr();

        const q = new tableCompletionQuestion({

            startQuestionNum: tableCompletion.startQuestionNum,
            endQuestionNum: tableCompletion.endQuestionNum,
            standAlone: tableCompletion.standAlone,
            numOfWords: tableCompletion.numOfWords,
            numOfNum: tableCompletion.numOfNum,
            numOfRows: tableCompletion.numOfRows,
            numOfCols: tableCompletion.numOfCols,
            rows: tableCompletion.rows,
            answer: tableCompletion.standAlone ? filledAnsID : blankAnsID,

        });

        const savedQuestion = (await q.save()).toJSON();

        log.info('Created Table Completion Question.', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error while creating a Table Completion Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        })

    }
    
}

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all Table Completion Question.')

        const questions = await tableCompletionQuestion.find();
        
        if(questions.length === 0){

            log.error("Couldn't find any Table Completion Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all Table Completion Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding Table Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }
}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Table Completion Questions.')

        const questions = await tableCompletionQuestion.find({ standAlone: true }).select("-answer");

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Table Completion Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Table Completion Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successfully.",
            obj: questions,
            ok: true,
            status: 200
        })

    } catch (err) {

        log.error('Error while finding stand alone Table Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getQuestionById = async (req, res) => {
    
    log.info('fetching Table Completion Question using id.')

    const qID = req.params.id;

    try {
        
        const Question = await tableCompletionQuestion.findById(qID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Table Completion Question found.', q);

        return res.status(200).json({
            message: "Table Completion Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Table Completion Question by id.',err);
            
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

        log.info('Getting answer to Table Completion Question with id:', qID);
        
        const ans = await tableCompletionQuestion.findById(qID).populate({
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
            message: "Table Completion Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to Table Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {
    
    log.info('fetching Table Completion Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await tableCompletionQuestion.findById(qID);

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

        log.info('Table Completion Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Table Completion Question Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Table Completion Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }
}

const editQuestion = async (req, res) => {

    log.info('fetching Table Completion Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await tableCompletionQuestion.findById(qID).exec();

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

        const savedQuestion = (await Question.save()).toJSON();

        log.info('Reading Table Completion updated.', savedQuestion);

        return res.status(200).json({
            message: "Reading Table Completion Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Table Completion Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const delQuestion = async (req, res) => {

    log.info('Deleting Table Completion Question using id.');

    const qID = req.params.id;

    try {
        
        const deletedQuestion = await tableCompletionQuestion.findByIdAndDelete(qID).exec();

        if(!deletedQuestion){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
            
        }

        log.info('Table Completion Question deleted successfully.', deletedQuestion);

        return res.status(200).json({
            message: "Table Completion Question deleted successfully.",
            obj: deletedQuestion.toJSON(),
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while deleting Table Completion Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}


const tableCompletionController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion}

export default tableCompletionController;