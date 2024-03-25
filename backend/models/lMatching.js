import mongoose from "mongoose";

const lMatchingQuestionSchema = new mongoose.Schema({
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
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
    questionOptionRepeatable : {
        type: Boolean,
        required : true,
    },
    questionStatment: {
        type: String,
        required: true,
    },
    questionTitle: {
        type: String,
    },
    questionOptions: {
        type: [String],
        required: true,
    },
    numTitle: {
        type: String,
    },
    numStatements: {
        type: [String],
        required: true,
    },
  });

  lMatchingQuestionSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of numbered statements mismatch');
        next(err);
    }else{
        next();
    }
})
  
  const lMatchingQuestion =  mongoose.model('lMatchingQuestion', lMatchingQuestionSchema);

  export default lMatchingQuestion;