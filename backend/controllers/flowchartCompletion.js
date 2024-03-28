import log from '../lib/logger.js';
import flowchartCompletionQuestion from '../models/flowchartCompletion.js';
import util from '../utils/createAnswer.js'


const createQuestion = async (req, res) => {

    const {fcCompletion} = req.body;

    log.debug('Creating Flowchart Completion Question.',fcCompletion);

    try {

        let blankAnsID, filledAnsID;

        if (fcCompletion.answer !== undefined) filledAnsID = util.createAns(fcCompletion.answer);
        else blankAnsID = util.createBlankAns(true);
        

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

const getAllStandaloneQuestions = async (req, res) => {

    
    try {
        
        log.info('fetching all stand alone Flow Chart Completion Question.')

        const questions = await flowchartCompletionQuestion.find({ standAlone: true });

        
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
            message: "Fetched all stand alone question successsfully",
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

const editQuestion = async (req, res) => {

    log.info('fetching Flow Chart Completion Question using id.')

    const fcCompletionID = req.params.id;
    const updates = req.body;

    try {
        
        const Question = await flowchartCompletionQuestion.findById(fcCompletionID).exec();

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

        log.info('Flowchart Copmletion Question updated.', savedQuestion);

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

    const fcCompletionID = req.params.id;

    try {

        const deletedQuestion = await flowchartCompletionQuestion.findByIdAndDelete(fcCompletionID).exec();

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


const fcCompletionController = {createQuestion, getAllStandaloneQuestions, editQuestion, delQuestion};

export default fcCompletionController;