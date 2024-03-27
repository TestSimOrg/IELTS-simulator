import mongoose, { Schema } from "mongoose";


const rShortAnswerQuestionSchema = new mongoose.Schema({
    
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
    answer: {
        type: Schema.ObjectId,
        ref: 'answer'
    }

});

rShortAnswerQuestionSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }else{
        next();
    }
})

const rShortAnswerQuestion = mongoose.model('rShortAnswerQuestion', rShortAnswerQuestionSchema);

export  default  rShortAnswerQuestion;