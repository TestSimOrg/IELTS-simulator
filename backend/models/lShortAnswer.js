import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

const lShortAnswerQuestionSchema = new mongoose.Schema({
    
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    },
    standAlone: {
        type: Boolean,
        required: true,
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
    questionStatements : {
        type : [String],
        required : true,
    },
    questionBlanks : {
        type : [[String]],
        required : true,
    },
    answer: {
        type: Schema.ObjectId,
        ref: 'answer'
    }

});


const lShortAnswerQuestion = mongoose.model('lShortAnswerQuestion', lShortAnswerQuestionSchema);

export  default  lShortAnswerQuestion;