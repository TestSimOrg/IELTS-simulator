import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

const matchingQuestionSchema = new mongoose.Schema({
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
    questionHeader: {
        type: String,
        required: true,
    },
    questionStatement: {
        type: String,
        required: true,
    },
    questionTitle: {
        type: String,
        default: ''
    },
    questionOptions: {
        type: [String],
        required: true,
    },
    numTitle: {
        type: String,
        default: ''
    },
    numStatements: {
        type: [String],
        required: true,
    },
    answer: {
        type: [Schema.ObjectId],
        ref: 'answer'
    }
});

matchingQuestionSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements.length === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of numbered statements mismatch');
        next(err);
    }else{
        next();
    }
})
  
const matchingQuestion =  mongoose.model('matchingQuestion', matchingQuestionSchema);

export default matchingQuestion;