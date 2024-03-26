import mongoose from "mongoose";

const sentenceCompletionSchema = new mongoose.Schema({

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
        required: true
    },
    questionTitle : {
        type: String,
    },
    numStatements: {
        type: [String],
        required: true
    },
    answer: {
        type: Schema.ObjectId,
        ref: 'answer'
    }
    
});

sentenceCompletionSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }else{
        next();
    }
})


const sentenceCompletionQuestion = mongoose.model('sentenceCompletionQuestion', sentenceCompletionSchema);

export default sentenceCompletionQuestion;