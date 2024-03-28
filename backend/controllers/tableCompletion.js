import log from '../lib/logger.js';
import tableCompletionQuestion from "../models/tableCompletion.js";
import util from '../utils/createAnswer.js'


const createQuestion = async (req, res) => {

    const {tableCompletion} = req.body;

    log.info('Creating Table Completion Question.',tableCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (tableCompletion.answer !== undefined) filledAnsID = util.createAns(tableCompletion.answer);
        else blankAnsID = util.createBlankAns(tableCompletion.options !== undefined);

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

        const savedQuestion = await q.save();

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

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Table Completion Questions.')

        const questions = await tableCompletionQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Table Completion Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone Table Completion Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
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

const editQuestion = async (req, res) => {

    log.info('fetching Table Completion Question using id.')

    const tableCompletionID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await tableCompletionQuestion.findById(tableCompletionID).exec();

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

        const savedQuestion = Question.save();

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

    const tableCompletionID = req.params.id;

    try {
        
        const deletedQuestion = await tableCompletionQuestion.findByIdAndDelete(tableCompletionID).exec();

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
            obj: deletedQuestion,
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


const tableCompletionController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion}

export default tableCompletionController;