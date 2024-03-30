import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

const rMatchingQuestionSchema = new mongoose.Schema({
    
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
        default: 1,
    },
    qTypeList : {
        type: Boolean,
        required: true,
    },
    qTypeMatchingInfo : {
        type: Boolean,
        required: true,
    },
    questionHeader: {
        type: String,
        required: true,
    },
    questionOptionRepeatable : {
        type: Boolean,
        required : true,
    },
    questionTitle: {
        type: String,
        required: function() {
            return this.qTypeList === true;
        },
        default: ' '
    },
    questionStatements: {
        type: [String],
        required: function() {
            return this.qTypeList === true;
        },
        default: [' ']
    },
    numStatements : {
        type: [String],
        required: true,
    },
    answer: {
        type: [Schema.ObjectId],
        ref: 'answer'
    }
  });

rMatchingQuestionSchema.pre('validate', function a(next) {
    
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements.length === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }

    if (this.qTypeList && this.qTypeMatchingInfo) {
        const err = new Error('Question can be either qTypeList (List of option in question) or qTypeMatchingInfo (No list only question statements that match info in statement to  passage)');
        next(err);
    } else if(this.qTypeList === true){
        this.qTypeMatchingInfo = false;
        next();
    }else if(this.qTypeMatchingInfo === true){
        this.qTypeList = false;
        next();
    }
    next();
});

const rMatchingQuestion =  mongoose.model('MatchingQuestion', rMatchingQuestionSchema);

export default rMatchingQuestion;