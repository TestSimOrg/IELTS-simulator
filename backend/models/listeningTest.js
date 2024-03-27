import mongoose, { Schema } from "mongoose";
import diagramFlowchartCompletionQuestion from './diagramFlowchartCompletion'
import formCompletionQuestion from './formCompletion'
import labellingQuestion from './Labelling'
import lMatchingQuestion from './lMatching'
import mcq from './mcq'
import noteCompletionQuestion from './noteCompletion'
import sentenceCompletionQuestion from './sentenceCompletion'
import lShortAnswerQuestion from './lShortAnswer'
import summaryCompletionQuestion from './summaryCompletion'
import tableCompletion from './tableCompletion'

const listeningPartSchema = new mongoose.Schema({
    num: {
        type: Number,
        enum: [1,2,3,4],
        required: true,
    },
    diagramFlowchartCompletionQuestion: {type: diagramFlowchartCompletionQuestion},
    formCompletionQuestion:{type: formCompletionQuestion},
    labellingQuestion: {type: labellingQuestion},
    lMatchingQuestion: {type: lMatchingQuestion},
    mcq: {type: mcq },
    noteCompletionQuestion: {type: noteCompletionQuestion},
    sentenceCompletionQuestion: {type: sentenceCompletionQuestion},
    lShortAnswerQuestion : {type: lShortAnswerQuestion},
    summaryCompletionQuestion: {type: summaryCompletionQuestion},
    tableCompletion: {type: tableCompletion},

})


listeningPartSchema.pre('validate',function(next){
    if(this.diagramFlowchartCompletionQuestion && this.formCompletionQuestion && this.labellingQuestion && this.lMatchingQuestion && this.mcq && this.noteCompletionQuestion && this.sentenceCompletionQuestion && this.lShortAnswerQuestion && this.summaryCompletionQuestion && this.tableCompletion){
        const err = new Error(`Part ${this.num} should atleast have 1 type of question spanning from 1 to 10.`);
        next(err);
    }else{
        next();
    }
})

const listeningTestSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: true
    },
    parts:{
        type: [listeningPartSchema],
        required: true
    }

});

listeningTestSchema.pre('validate', function(next){
    if(this.parts.length !== 4){
        const err = new Error('The test should include 4 parts. Not less or more than that.');
        next(err);
    }else{
        next();
    }
})

const listeningPart = new mongoose.model('listenigPart', listeningPartSchema);
const listeningTest = new mongoose.model('listeningTest', listeningTestSchema);

export default {listeningPart,listeningTest};