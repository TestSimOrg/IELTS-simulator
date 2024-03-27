import log from '../lib/logger.js';
import lShortAnswerQuestion from '../models/lShortAnswer.js'
import util from '../utils/createAnswer.js'

const createQuestion = async (req, res) => {
    const {listeningShortAns} = req.body;

    log.info('Creating Listening Short Ans Question.',listeningShortAns);

    try {

        let blankAnsID, filledAnsID;

        if (listeningShortAns.answer !== undefined) filledAnsID = util.createAns(listeningShortAns.answer);
        else blankAnsID = util.createBlankAns(listeningShortAns.options !== undefined);

        const q = new lShortAnswerQuestion({
            startQuestionNum: listeningShortAns.startQuestionNum,
            endQuestionNum: listeningShortAns.endQuestionNum,
            standAlone: listeningShortAns.standAlone,
            numOfWords: listeningShortAns.numOfWords,
            numOfNum: listeningShortAns.numOfNum,
            questionHeader: listeningShortAns.questionHeader,
            questionStatements: listeningShortAns.questionStatements,
            questionBlanks: listeningShortAns.questionBlanks,
            answer: listeningShortAns.standAlone ? filledAnsID : blankAnsID,
        });
        
        const savedQuestion = await q.save();
        
        log.info('Created Listening Short Ans Question.',savedQuestion);
        
        res.status(201).json({
            message: "Question creation successful",
            obj: savedQuestion,
            ok: true,
            status: 201
        });

    } catch (err) {
        
        log.error('Error while creating a Form Completion Question with mcq.',err);
        
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

        const questions = await lShortAnswerQuestion.find({ standAlone: true });

        
        if(questions.length === 0){

            log.error("Couldn't find any stand alone listening short ans questions");

            return res.status(404).json({
                message: "No stand alone questions found",
                ok: false,
                status: 404
            });
        
        }

        log.info('sendng all stand alone Listening Short Ans Questions.')

        return res.status(200).json({
            message: "Fetched all stand alone question successsfully",
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

const editQuestion = async (req, res) => {

    log.info('fetching Listen Short Ans Question using id.')

    const lShortAnsID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await lShortAnswerQuestion.findById(lShortAnsID).exec();

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

        const lShortAnsID = req.params.id;

        const deletedQuestion = await lShortAnswerQuestion.findByIdAndDelete(lShortAnsID).exec();

        if (!deletedQuestion) {

            log.error("Couldn't find any question using id.");

            return res.status(404).json({
                message: "Couldn't find the question using id.",
                ok: false,
                status: 404
            });
        }

        log.info('Listening Short Ans Question deleted.', deletedQuestion);

        return res.status(200).json({
            message: "Listening Short Ans Question deleted.",
            obj: deletedQuestion,
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


const lShortAnswerController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default lShortAnswerController;