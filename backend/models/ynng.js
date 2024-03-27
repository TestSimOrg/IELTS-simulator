import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';
const yesNoNGSchema = new mongoose.Schema({
    startQuestionNum : {
        type : Number,
        required: true,
    },
    endQuestionNum : {
        type : Number,
        required: true,
    },
    standAlone: {
        type: Boolean,
        required: true,
    },
    numofWords: {
        type: Number,
        default: 1,
        max: 1,
    },
    questionHeader :{
        type : String,
        required: true
    },
    numStatements : {
        type : [String],
        required: true,
    },
    answer: {
        type: Schema.ObjectId,
        ref: 'answer'
    }

});

yesNoNGSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements.length === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }else{
        next();
    }
})

const yesNoNGQuestion = mongoose.model('yesNoNGQuestion', yesNoNGSchema);

export default yesNoNGQuestion;