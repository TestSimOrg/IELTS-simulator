import util from '../utils/createAnswer.js'
import log from '../lib/logger.js';
import rMatchingQuestion from '../models/rMatching.js';

const createQuestion = async (req, res) => {
    
    const {rMatching} = req.body;

    log.info('Creating Reading Matching Question.');
    log.info(rMatching)

    try {

        let blankAnsID, filledAnsID;

        if (rMatching.answer !== undefined) filledAnsID = util.createAns(rMatching.answer);
        else blankAnsID = util.createBlankAns(rMatching.options !== undefined);

        const q = new rMatchingQuestion({

            startQuestionNum: rMatching.startQuestionNum,
            endQuestionNum: rMatching.endQuestionNum,
            standAlone: rMatching.standAlone,
            numOfWords: rMatching.numOfWords,
            qTypeList: rMatching.qTypeList,
            qTypeMatchingInfo: rMatching.qTypeMatchingInfo,
            questionHeader: rMatching.questionHeader,
            questionOptionRepeatable: rMatching.questionOptionRepeatable,
            questionTitle: rMatching.questionTitle,
            questionStatements: rMatching.questionStatements,
            numStatements: rMatching.numStatements,
            answer: rMatching.standAlone ? filledAnsID : blankAnsID,
        });

        const savedQuestion = (await q.save()).toJSON();

        log.info('Created Reading Matching Question.', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error while creating Reading Matching Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        })

    }
}

const getAllStankdaloneQuestion = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Reading Matching Questions.')

        const questions = await rMatchingQuestion.find({ standAlone: true });

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Reading Matching Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone Reading Matching Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successsfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone Reading Matching Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Reading Matching Question using id.')

    const rMatchingID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await rMatchingQuestion.findById(rMatchingID).exec();

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

        log.info('Reading Matching Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Reading Matching Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Reading Matching Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const delQuestion = async (req, res) => {

    log.info('Deleting Reading Matching Question using id.');

    const rMatchingID = req.params.id;

    try {
        
        const deletedQuestion = await rMatchingQuestion.findByIdAndDelete(rMatchingID).exec();

        if(!deletedQuestion){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })
            
        }

        log.info('Reading Matching Question deleted.', deletedQuestion);

        return res.status(200).json({
            message: "Reading Matching Question deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        })

    } catch (err) {

        log.error('Error while deleting Reading Matching Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}


const rMatchingController = {createQuestion, getAllStankdaloneQuestion, editQuestion, delQuestion};

export default rMatchingController;