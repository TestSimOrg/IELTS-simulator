import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionStatement : {
        type: String,
        required: true,
    },
    numOfBlanks : {
        type : Number,
        required: true,
    }
});

const shortAnswerQuestionSchema = new mongoose.Schema({
    questionStatement : {
        type : [questionSchema],
        required : true,
    }
});


const question = mongoose.model('question', questionSchema);
const shortAnswerQuestion = mongoose.model('shortAnswerQuestion', shortAnswerQuestionSchema);

export  default {question, shortAnswerQuestion};