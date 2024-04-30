import log from '../lib/logger.js';
import shortAnswerQuestion from '../models/shortAnswer.js'
import { createAns, createBlankAnsArr} from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {
    const {listeningShortAns} = req.body;

    log.info('Creating Listening Short Ans Question.',listeningShortAns);

    try {

        let blankAnsID, filledAnsID;

        if (listeningShortAns.answer !== undefined) filledAnsID = await createAns(listeningShortAns.answer);
        else blankAnsID = await createBlankAnsArr();

        const q = new shortAnswerQuestion({
            startQuestionNum: listeningShortAns.startQuestionNum,
            endQuestionNum: listeningShortAns.endQuestionNum,
            standAlone: listeningShortAns.standAlone,
            numOfWords: listeningShortAns.numOfWords,
            numOfNum: listeningShortAns.numOfNum,
            questionHeader: listeningShortAns.questionHeader,
            numStatements: listeningShortAns.numStatements,
            numBlanks: listeningShortAns.numBlanks,
            answer: listeningShortAns.standAlone ? filledAnsID : blankAnsID,
        });
        
        const savedQuestion = (await q.save()).toJSON();
        
        log.info('Created Listening Short Ans Question.',savedQuestion);
        
        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {
        
        log.error('Error while creating a Listening Short Ans with mcq.',err);
        
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });
        
    } 

}

const getAllQuestions = async (req, res) => {

    try {
        
        log.info('fetching all Listening Short Ans Question.')

        const questions = await shortAnswerQuestion.find();
        
        if(questions.length === 0){

            log.error("Couldn't find any Listening Short Ans Questions.");

            return res.status(404).json({
                message: "No questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('Sending all Listening Short Ans Questions.')

        return res.status(200).json({
            message: "Fetched questions successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding Listening Short Ans Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const getAllStandaloneQuestions = async (req, res) => {

    try {
        
        log.info('fetching all stand alone Listening Short Ans Questions.')

        const questions = await shortAnswerQuestion.find({ standAlone: true }).select("-answer");
        
        if(questions.length === 0){

            log.error("Couldn't find any stand alone listening short ans questions");

            return res.status(404).json({
                message: "No stand alone questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('sending all stand alone Listening Short Ans Questions.')

        return res.status(200).json({
            message: "Fetched all stand alone question successfully",
            obj: questions,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while finding stand alone listening short ans questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }
    
}

const getQuestionById = async (req, res) => {
    
    log.info('fetching Listening Short Ans Question using id.')

    const qID = req.params.id;

    try {
        
        const Question = await shortAnswerQuestion.findById(qID).select("-answer");

        if(!Question){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            })

        }

        const q = Question.toJSON();

        log.info('Listening Short Ans Question found.', q);

        return res.status(200).json({
            message: "Listening Short Ans Question Found.",
            obj: q,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while fetching Listening Short Ans Question by id.',err);
            
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

        log.info('Getting answer to Listening Short Ans Question with id:', qID);
        
        const ans = await shortAnswerQuestion.findById(qID).populate({
            path: "answer",
        }).select("answer");
        log.info(ans)
        if(!ans){

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });

        }

        return res.status(200).json({
            message: "Listening Short Ans Question Answers.",
            obj: ans,
            ok: true,
            status: 200
        });

    } catch (err) {
        
        log.error('Error while finding ans to Listening Short Ans Questions.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

}

const updateAns = async (req, res) => {
    
    log.info('fetching Listening Short Ans Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await shortAnswerQuestion.findById(qID);

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

        log.info('Listening Short Ans Question Answers updated.', savedQuestion.answer);

        return res.status(200).json({
            message: "Listening Short Ans Question Answers updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Listening Short Ans Question Answers by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const editQuestion = async (req, res) => {

    log.info('fetching Listen Short Ans Question using id.')

    const qID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await shortAnswerQuestion.findById(qID).exec();

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

        log.info('Listening Short Ans Question updated.', savedQuestion);

        return res.status(200).json({
            message: "Listening Short Ans Question updated.",
            obj: savedQuestion,
            ok: true,
            status: 200
        })


    } catch (err) {

        log.error('Error while updating Listening Short Ans Question by id.',err);
            
        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        })

    }

}

const delQuestion = async (req, res) => {

    log.info('Deleting Listen Short Ans Question using id.');

    try {

        const qID = req.params.id;

        const deletedQuestion = await shortAnswerQuestion.findByIdAndDelete(qID).exec();

        if (!deletedQuestion) {

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
        }

        log.info('Listening Short Ans Question deleted.', deletedQuestion.toJSON());

        return res.status(200).json({
            message: "Listening Short Ans Question deleted.",
            obj: deletedQuestion.toJSON(),
            ok: true,
            status: 200
        });

    } catch (err) {

        log.error('Error while deleting Listening Short Ans Question by id.', err);

        return res.status(500).json({
            message: 'Server error',
            ok: false,
            status: 500
        });

    }

};


const shortAnswerController = {createQuestion, getAllQuestions, getAllStandaloneQuestions, getQuestionById, getAns, updateAns, editQuestion, delQuestion};

export default shortAnswerController;