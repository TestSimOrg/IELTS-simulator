import log from '../lib/logger.js';
import mcq from '../models/mcq.js';
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js';

const createQuestion = async (req, res) => {
    
    const {MCQ} = req.body;

    log.info('Creating mcq.', MCQ);

    try {

        let blankAnsID, filledAnsID;

        if (MCQ.answer !== undefined) filledAnsID = await createAns(MCQ.answer);
        else blankAnsID = await createBlankAnsArr();

        const q = new mcq({

            startQuestionNum: MCQ.startQuestionNum,
            endQuestionNum: MCQ.endQuestionNum,
            standAlone: MCQ.standAlone,
            numOfWords: MCQ.numOfWords,
            qType: MCQ.qType,
            questionHeader: MCQ.questionHeader,
            numStatements: MCQ.numStatements,
            questionOptions: MCQ.questionOptions,
            answer: MCQ.standAlone ? filledAnsID : blankAnsID,

        });

        const savedQuestion = (await q.save()).toJSON();

        log.info('Created mcq.', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error while creating a mcq.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        })

    }


}

const getAllQuestions = async (req, res) => {
    
    try {
        
        log.info('fetching all MCQs.')

        const questions = await mcq.find();
        
        if(questions.length === 0){

            log.error("Couldn't find any MCQ.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all MCQs.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding MCQs.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone MCQs.')

        const questions = await mcq.find({ standAlone: true }).select("-answer");

        
        if(questions.length === 0){

            log.error("Couldn't find any stand alone MCQs.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all stand alone MCQs.');

        return res.status(200).json({
            message: "Fetched all stand alone question successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone MCQs.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getQuestionById = async (req, res) => {

    log.info('fetching MCQ using id.')

    const qID = req.params.id;

    try {
        
        const Question = await mcq.findById(qID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('MCQ found.', Question.toJSON());

        return res.status(200).json({
            message: "MCQ Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching MCQ by id.',err);
            
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

        log.info('Getting answer to MCQ with id:', qID);
        
        const ans = await mcq.findById(qID).populate({
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
            message: "MCQ Answers.",
            obj: ans,
            ok: true,
            status: 200
        })

    } catch (err) {
        
        log.error('Error while finding ans to MCQs.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }
    
}

const updateAns = async (req, res) => {

    log.info('fetching MCQ using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await mcq.findById(qID);

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

        log.info('MCQ Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "MCQ Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating MCQ Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching mcq using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await mcq.findById(qID).exec();

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

        log.info('mcq updated.', savedQuestion);

        return res.status(200).json({
            message: "mcq updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating mcq by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const delQuestion = async (req, res) => {

    log.info('Deleting mcq using id.');

    const qID = req.params.id;

    try {

        const deletedQuestion = await mcq.findByIdAndDelete(qID).exec();

        if (!deletedQuestion) {

            log.error("Couldn't find any question using id for deletion.");

            return res.status(404).json({
                message: "Couldn't find the question using id for deletion.",
                ok: false,
                status: 404
            });

        }

        log.info('mcq deleted.', deletedQuestion);
        
        return res.status(200).json({
            message: "mcq deleted.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });
        
    } catch (err) {

        log.error('Error while deleting mcq by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}


const mcqController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default mcqController;