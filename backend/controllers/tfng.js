import log from '../lib/logger.js';
import trueFalseNGQuestion from '../models/tfng.js';
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {

    const {trueFalseNG} = req.body;

    log.info('Creating TRUE, FALSE or NOT GIVEN Question', trueFalseNG);

    try {

        let blankAnsID, filledAnsID;
        if (trueFalseNG.answer !== undefined) filledAnsID = await createAns(trueFalseNG.answer);
        else blankAnsID = await createBlankAnsArr();

        const q = new trueFalseNGQuestion({

            startQuestionNum: trueFalseNG.startQuestionNum,
            endQuestionNum: trueFalseNG.endQuestionNum,
            standAlone: trueFalseNG.standAlone,
            questionHeader: trueFalseNG.questionHeader,
            numStatements: trueFalseNG.numStatements,
            answer: trueFalseNG.standAlone ? filledAnsID : blankAnsID,

        })

        const savedQuestion = (await q.save()).toJSON();

        log.info('Created TRUE, FALSE or NOT GIVEN Question', savedQuestion);

        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201,
        });

    } catch (err) {

        log.error('Error in Creating TRUE, FALSE or NOT GIVEN Question', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        });

    }

}

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all TRUE, FALSE or NOT GIVEN Question.')

        const questions = await trueFalseNGQuestion.find().select("-answers");
        
        if(questions.length === 0){

            log.error("Couldn't find any TRUE, FALSE or NOT GIVEN Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all TRUE, FALSE or NOT GIVEN Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding TRUE, FALSE or NOT GIVEN Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone True, False or Not Given Questions.')

        const questions = await trueFalseNGQuestion.find({ standAlone: true }).select("-answer");

        if(questions.length === 0){

            log.error("Couldn't find any stand alone True, False or Not Given Questions.");

            return res.status(404).json({
                message: "No stand alone questions found.",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone True, False or Not Given Questions.');

        return res.status(200).json({
            message: "Fetched all stand alone questions successfully",
            obj: questions,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while finding stand alone True, False or Not Given Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getQuestionById = async (req, res) => {
    
    log.info('fetching TRUE, FALSE or NOT GIVEN Question using id.')

    const qID = req.params.id;

    try {
        
        const Question = await trueFalseNGQuestion.findById(qID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Reading TRUE, FALSE or NOT GIVEN Question found.', q);

        return res.status(200).json({
            message: "TRUE, FALSE or NOT GIVEN Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching TRUE, FALSE or NOT GIVEN Question by id.',err);
            
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

        log.info('Getting answer to TRUE, FALSE or NOT GIVEN Question with id:', qID);
        
        const ans = await trueFalseNGQuestion.findById(qID).populate({
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
            message: "TRUE, FALSE or NOT GIVEN Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to TRUE, FALSE or NOT GIVEN Questions.',err);
            
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
        
        const Question = await trueFalseNGQuestion.findById(qID);

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


        log.info('TRUE, FALSE or NOT GIVEN Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "TRUE, FALSE or NOT GIVEN Question Answers updated.",
            obj: questionJSON.answer,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating TRUE, FALSE or NOT GIVEN Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching True, False or Not Given Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await trueFalseNGQuestion.findById(qID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
            
        }

        Object.keys(updates).forEach((key) =>{
            log.info(`${Question[key]} ---> ${updates[key]}`)
            Question[key] = updates[key];
        })

        const savedQuestion = await Question.save();

        log.info(savedQuestion);

        return res.status(200).json({
            message: "Reading True, False or Not Given Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating True, False or Not Given Question by id.', err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const delQuestion = async (req, res) => {

    log.info('Deleting True, False or Not Given Question using id.');
    
    const qID = req.params.id;
    
    try {

        const deletedQuestion = await trueFalseNGQuestion.findByIdAndDelete(qID);
        
        if (!deletedQuestion) {

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }
        
        log.info(deletedQuestion);
        
        return res.status(200).json({
            message: "True, False or Not Given Question deleted successfully.",
            obj: deletedQuestion,
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting True, False or Not Given Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }
    
};


const tfngController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default tfngController;