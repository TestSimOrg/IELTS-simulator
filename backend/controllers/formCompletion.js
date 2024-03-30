import log from '../lib/logger.js';
import formCompletionQuestion from '../models/formCompletion.js';
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {
    const {formCompletion} = req.body;

    log.info('Creating Form Completion Question.',formCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (formCompletion.answer !== undefined) filledAnsID = await createAns(formCompletion.answer);
        else blankAnsID = await createBlankAnsArr();
        
        const q = new formCompletionQuestion({
            startQuestionNum: formCompletion.startQuestionNum,
            endQuestionNum: formCompletion.endQuestionNum,
            standAlone: formCompletion.standAlone,
            numOfWords: formCompletion.numOfWords,
            numOfNum: formCompletion.numOfNum,
            questionHeader: formCompletion.questionHeader,
            questionTitle: formCompletion.questionTitle,
            questionStatements: formCompletion.questionStatements,
            answer: formCompletion.standAlone ? filledAnsID : blankAnsID,
        });
        
        const savedQuestion = (await q.save()).toJSON();
        
        log.debug('Created Form Completion Question.',savedQuestion);
        
        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {
        
        log.error('Error while creating a Form Completion Question.',err);
        
        res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500,
        })
    }    

}

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all Form Completion Question.')

        const questions = await formCompletionQuestion.find();
        
        if(questions.length === 0){

            log.error("Couldn't find any Form Completion Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all Form Completion Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding Form Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {
   
    
    try {
        
        log.info('fetching all stand alone Form Completion Question.')

        const questions = await formCompletionQuestion.find({ standAlone: true }).select("-answer");

        
        if(questions.length === 0){

            log.error("Couldn't find any stand alone form completion questions");

            return res.status(404).json({
                message: "No stand alone questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Form Completion Question.')

        return res.status(200).json({
            message: "Fetched all stand alone question successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone Form Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }
    
}

const getQuestionById = async (req, res) => {
    
    log.info('fetching Form Completion Question using id.')

    const formCompletionID = req.params.id;

    try {
        
        const Question = await formCompletionQuestion.findById(formCompletionID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Form Completion Question found.', q);

        return res.status(200).json({
            message: "Form Completion Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Form Completion Question by id.',err);
            
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

        log.info('Getting answer to Form Completion Question with id:', qID);
        
        const ans = await formCompletionQuestion.findById(qID).populate({
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
            message: "Form Completion Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to Form Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {
    
    log.info('fetching Flowchart Completion Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await formCompletionQuestion.findById(qID);

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

        log.info('Form Completion Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Form Completion Question Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Form Completion Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {
    
    log.info('fetching Form Completion Question using id.')

    const fCompletionID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await formCompletionQuestion.findById(fCompletionID).exec();

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

        log.info('Form Completion Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Form Completion Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Flowchart Completion Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }
}

const delQuestion = async (req, res) => {

    try {

        const fCompletionID = req.params.id;

        const deletedQuestion = await formCompletionQuestion.findByIdAndDelete(fCompletionID).exec();

        if (!deletedQuestion) {

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
            
        }

        log.info('Form Completion Question deleted.', deletedQuestion);

        return res.status(200).json({
            message: "Form Completion Question deleted.",
            obj: deletedQuestion.toJSON(),
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting Form Completion Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}


const formCompletionController ={createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default formCompletionController;