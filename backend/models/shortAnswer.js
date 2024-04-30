import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

const shortAnswerQuestionSchema = new mongoose.Schema({
    
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
    numStatements : {
        type : [String],
        required : true,
    },
    numBlanks : {
        type : [[String]],
        default: [[""]]
    },
    answer: {
        type: [Schema.ObjectId],
        ref: 'answer'
    }

});


const shortAnswerQuestion = mongoose.model('shortAnswerQuestion', shortAnswerQuestionSchema);

export default shortAnswerQuestion;