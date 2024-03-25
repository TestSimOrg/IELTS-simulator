import mongoose from "mongoose";

const yesNoNGSchema = mongoose.Schema({
    startQuestionNum : {
        type : Number,
        required: true,
    },
    endQuestionNum : {
        type : Number,
        required: true,
    },
    questionHeader :{
        type : String,
        required: true
    },
    numStatements : {
        type : [String],
        required: true,
    },

});

yesNoNGSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }else{
        next();
    }
})

const yesNoNG = mongoose.model('yesNoNG', yesNoNGSchema);

export default yesNoNG;