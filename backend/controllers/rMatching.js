import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'
import log from '../lib/logger.js';
import rMatchingQuestion from '../models/rMatching.js';

const createQuestion = async (req, res) => {
    
    const {rMatching} = req.body;

    log.info('Creating Reading Matching Question.', rMatching);

    try {

        let blankAnsID, filledAnsID;

        if (rMatching.answer !== undefined) filledAnsID = await createAns(rMatching.answer);
        else blankAnsID = await createBlankAnsArr();

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

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all Reading Matching Question.')

        const questions = await rMatchingQuestion.find().select("-answers");
        
        if(questions.length === 0){

            log.error("Couldn't find any Reading Matching Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all Reading Matching Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding Reading Matching Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestion = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Reading Matching Questions.')

        const questions = await rMatchingQuestion.find({ standAlone: true }).select("-answer");

        if(questions.length === 0){

            log.error("Couldn't find any stand alone Reading Matching Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Reading Matching Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successfully",
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

const getQuestionById = async (req, res) => {
    
    log.info('fetching Reading Matching Question using id.')

    const rMatchingID = req.params.id;

    try {
        
        const Question = await rMatchingQuestion.findById(rMatchingID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Reading Matching Question found.', q);

        return res.status(200).json({
            message: "Reading Matching Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Reading Matching Question by id.',err);
            
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

        log.info('Getting answer to Reading Matching Question with id:', qID);
        
        const ans = await rMatchingQuestion.findById(qID).populate({
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
            message: "Reading Matching Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to Reading Matching Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {
    
    log.info('fetching Reading Matching Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await rMatchingQuestion.findById(qID);

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


        log.info('Reading Matching Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Reading Matching Question Answers updated.",
            obj: questionJSON.answer,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Reading Matching Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Reading Matching Question using id.')

    const rMatchingID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await rMatchingQuestion.findById(rMatchingID).select("-answer");

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

        const savedQuestion = (await Question.save()).toJSON();

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
        
        const deletedQuestion = await rMatchingQuestion.findByIdAndDelete(rMatchingID);

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


const rMatchingController = {createQuestion, getAllQuestions, getAllStandaloneQuestion, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default rMatchingController;