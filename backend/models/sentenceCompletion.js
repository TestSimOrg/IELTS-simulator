import mongoose from "mongoose";

const sentenceCompletionSchema = new mongoose.Schema({

    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    },
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    questionHeader : {
        type : String,
        required: true
    },
    numStatements: {
        type: [String],
        required: true
    },
    
});




const sentenceCompletionQuestion = mongoose.model('sentenceCompletionQuestion', sentenceCompletionSchema);

export default sentenceCompletionQuestion;