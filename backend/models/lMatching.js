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
  
  const lMatchingQuestion =  mongoose.model('lMatchingQuestion', lMatchingQuestionSchema);

  export default lMatchingQuestion;