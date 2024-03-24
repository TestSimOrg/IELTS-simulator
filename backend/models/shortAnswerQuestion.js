import mongoose from "mongoose";


const shortAnswerQuestionSchema = new mongoose.Schema({
    
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    questionStatement : {
        type : [String],
        required : true,
    },
    questionBlanks : {
        type : [String],
        required : true,
    }
    ,
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    }

});

const shortAnswerQuestion = mongoose.model('shortAnswerQuestion', shortAnswerQuestionSchema);

export  default  shortAnswerQuestion;