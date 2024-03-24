import mongoose from "mongoose";
import diagramFlowchartCompletionQuestion from './diagramFlowchartCompletion'
import formCompletionQuestion from './formCompletion'
import labellingQuestion from './Labelling'
import matchingQuestion from './matching'
import mcq from './mcq'
import noteCompletionQuestion from './noteCompletion'
import sentenceCompletionQuestion from './sentenceCompletion'
import shortAnswerQuestion from './shortAnswer'
import summaryCompletionQuestion from './summaryCompletion'
import tableCompletion from './tableCompletion'

const testSchema = mongoose.Schema({
    testName: {
        type: String,
        required: true
    },
    diagramFlowchartCompletion : [diagramFlowchartCompletionQuestion],
    formCompletion : [formCompletionQuestion],
    labelling : [labellingQuestion],
    matching: [matchingQuestion],
    mcq : [mcq],
    noteCompletion : [noteCompletionQuestion],
    sentenceCompletion : [sentenceCompletionQuestion],
    shortAnswer: [shortAnswerQuestion],
    summaryCompletion : [summaryCompletionQuestion],
    tableCompletion : [tableCompletion]

});


const test = mongoose.model('test', testSchema);

export default test;