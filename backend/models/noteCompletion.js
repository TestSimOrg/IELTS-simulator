import mongoose from "mongoose";

const noteCompletionSchema = new mongoose.Schema({

    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    questionStatements: {
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


const noteCompletionQuestion = mongoose.model('noteCompletionQuestion', noteCompletionSchema);

export default noteCompletionQuestion;