import mongoose from "mongoose";
import diagramFlowchartCompletionQuestion from './diagramFlowchartCompletion'
import formCompletionQuestion from './formCompletion'
import labellingQuestion from './Labelling'
import rMatchingQuestion from './rMatching'
import mcq from './mcq'
import noteCompletionQuestion from './noteCompletion'
import sentenceCompletionQuestion from './sentenceCompletion'
import rShortAnswerQuestion from './rShortAnswer'
import summaryCompletionQuestion from './summaryCompletion'
import tableCompletion from './tableCompletion'

const readingPartSchema = new mongoose.Schema({
    num: {
        type: Number,
        enum: [1,2,3,4],
        required: true,
    },
    diagramFlowchartCompletionQuestion: {type: diagramFlowchartCompletionQuestion},
    formCompletionQuestion:{type: formCompletionQuestion},
    labellingQuestion: {type: labellingQuestion},
    rMatchingQuestion: {type: rMatchingQuestion},
    mcq: {type: mcq },
    noteCompletionQuestion: {type: noteCompletionQuestion},
    sentenceCompletionQuestion: {type: sentenceCompletionQuestion},
    rShortAnswerQuestion : {type: rShortAnswerQuestion},
    summaryCompletionQuestion: {type: summaryCompletionQuestion},
    tableCompletion: {type: tableCompletion},

})


readingPartSchema.pre('validate',function(next){
    if(this.diagramFlowchartCompletionQuestion && this.formCompletionQuestion && this.labellingQuestion && this.lMatchingQuestion && this.mcq && this.noteCompletionQuestion && this.sentenceCompletionQuestion && this.lShortAnswerQuestion && this.summaryCompletionQuestion && this.tableCompletion){
        const err = new Error(`Part ${this.num} should atleast have 1 type of question spanning from 1 to 10.`);
        next(err);
    }else{
        next();
    }
})

const readingTestSchema = new mongoose.Schema({
    testName: {
        type: String,
        required: true
    },
    parts:{
        type: [readingPartSchema],
        required: true
    }

});

readingTestSchema.pre('validate', function(next){
    if(this.parts.length !== 4){
        const err = new Error('The test should include 4 parts. Not less or more than that.');
        next(err);
    }else{
        next();
    }
})

const readingPart = mongoose.model('readingPart',readingPartSchema)
const readingTest = mongoose.model('readingTest', readingTestSchema);

export default {readingPart, readingTest};