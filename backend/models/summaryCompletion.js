import mongoose from "mongoose";

const summaryCompletionSchema = new mongoose.Schema({

    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    questionTitle : {
        type : String,
        required: true,
    },
    summary : {
        type : String,
        required: true,
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


export default summaryCompletionQuestion = mongoose.model('summaryCompletionQuestion', summaryCompletionSchema);