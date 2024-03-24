import mongoose from "mongoose";

const matchingQuestionSchema = new mongoose.Schema({
    questionStatment: {
        type: String,
        required: true,
    },
    questionOptions: {
        type: [String],
        required: true,
    },
    numStatements: {
        type: [String],
        required: true,
    },
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    }
  });
  
  const matchingQuestion =  mongoose.model('MatchingQuestion', matchingQuestionSchema);

  export default matchingQuestion;