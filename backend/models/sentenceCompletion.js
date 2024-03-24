import mongoose from "mongoose";

const sentenceCompletionSchema = new mongoose.Schema({

    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    questionTitle : {
        type : String
    },
    questionSentences: {
        type: [String],
        required: true
    },
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    }
});


export default sentenceCompletionQuestion = mongoose.model('sentenceCompletionQuestion', sentenceCompletionSchema);