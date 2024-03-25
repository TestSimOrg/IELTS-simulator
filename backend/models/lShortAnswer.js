import mongoose from "mongoose";


const lShortAnswerQuestionSchema = new mongoose.Schema({
    
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
        required : true
    },
    questionStatement : {
        type : [String],
        required : true,
    },
    questionBlanks : {
        type : [[String]],
        required : true,
    },

});


const lShortAnswerQuestion = mongoose.model('lShortAnswerQuestion', lShortAnswerQuestionSchema);

export  default  lShortAnswerQuestion;