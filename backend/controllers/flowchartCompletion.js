import log from '../lib/logger.js';
import flowchartCompletionQuestion from '../models/flowchartCompletion.js';
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'


const createQuestion = async (req, res) => {

    const {fcCompletion} = req.body;

    log.debug('Creating Flowchart Completion Question.',fcCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (fcCompletion.answer !== undefined) filledAnsID = await createAns(fcCompletion.answer);
        else blankAnsID = await createBlankAnsArr(true);
        

        const q = new flowchartCompletionQuestion({
            startQuestionNum: fcCompletion.startQuestionNum,
            endQuestionNum: fcCompletion.endQuestionNum,
            standAlone: fcCompletion.standAlone,
            options: fcCompletion.options,
            numOfWords: fcCompletion.numOfWords,
            numOfNum: fcCompletion.numOfNum,
            questionHeader: fcCompletion.questionHeader,
            questionTitle: fcCompletion.questionTitle,
            questionOptions: fcCompletion.questionOptions,
            steps: fcCompletion.steps,
            answer: fcCompletion.standAlone ? filledAnsID : blankAnsID, 
        });
            
        const savedQuestion = (await q.save()).toJSON();
            
        log.debug('Created Flowchart Completion Question.',savedQuestion);
            
        return res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {
            
        log.error('Error while creating a Flowchart Completion Question.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }    

}

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all Flowchart Completion Question.')

        const questions = await flowchartCompletionQuestion.find();
        
        if(questions.length === 0){

            log.error("Couldn't find any Flowchart Completion Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all Flowchart Completion Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding Flowchart Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    
    try {
        
        log.info('fetching all stand alone Flow Chart Completion Question.')

        const questions = await flowchartCompletionQuestion.find({ standAlone: true }).select("-answer");

        if(questions.length === 0){

            log.error("Couldn't find any stand alone flowchart questions");

            return res.status(404).json({
                message: "No stand alone questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Flow Chart Completion Question.')

        return res.status(200).json({
            message: "Fetched all stand alone question successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone Flowchart Completion Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }


}

const getQuestionById = async (req, res) => {
  
    log.info('fetching Flowchart Completion Question using id.')

    const qID = req.params.id;

    try {
        
        const Question = await flowchartCompletionQuestion.findById(qID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Flowchart Completion Question found.', q);

        return res.status(200).json({
            message: "Flowchart Completion Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Flowchart Completion Question by id.',err);
            
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

        log.info('Getting answer to Flowchart Completion Question with id:', qID);
        
        const ans = await flowchartCompletionQuestion.findById(qID).populate({
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
            message: "Flowchart Completion Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to Flowchart Completion Questions.',err);
            
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
        
        const Question = await flowchartCompletionQuestion.findById(qID);

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

        log.info('Flowchart Completion Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Flowchart Completion Question Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Flowchart Completion Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Flow Chart Completion Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await flowchartCompletionQuestion.findById(qID).exec();

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

        const savedQuestion = (await Question.save()).toJSON();

        log.info('Flowchart Completion Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Flowchart Completion Question updated.",
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

    log.info('Deleting Flowchart Completion Question using id.');

    const qID = req.params.id;

    try {

        const deletedQuestion = await flowchartCompletionQuestion.findByIdAndDelete(qID).exec();

        if (!deletedQuestion) {

            log.error("Couldn't find any question using id for deletion.");

            return res.status(404).json({
                message: "Couldn't find the question using id for deletion.",
                ok: false,
                status: 404
            });
        }

        log.info('Flowchart Completion Question deleted.');

        return res.status(200).json({
            message: "Flowchart Completion Question deleted.",
            obj: deletedQuestion.toJSON(),
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting Flowchart Completion Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

};


const fcCompletionController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default fcCompletionController;