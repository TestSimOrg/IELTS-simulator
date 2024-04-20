import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

const tableCompletionSchema = new mongoose.Schema({
    
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
    numOfRows : {
        type : Number,
        required: true
    },
    numOfCols : {
        type : Number,
        required: true
    },
    rows: {
        type: [[String]],
        required: true
    },
    answer: {
        type: [Schema.ObjectId],
        ref: 'answer'
    }
    
});

tableCompletionSchema.pre('validate', function(next) {
    const arr = this.rows;
    const rowCheck = this.numOfRows === this.rows.length ? true : false;
    const colCheck = true;
    for(let arr1 of arr){
        if(this.numOfCols !== arr1.length){
            colCheck = false;
        }
    }

    if (!rowCheck) {
        const err = new Error('Table row and outer array length mismatch');
        next(err);
    } else if(!colCheck){
        const err = new Error('Table col and inner array length mismatch');
        next(err);
    }else {
        next();
    }
})
const tableCompletionQuestion = mongoose.model('tableCompletionQuestion', tableCompletionSchema);

export default tableCompletionQuestion;