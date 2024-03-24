import mongoose from "mongoose";

const matchingQuestionSchema = new mongoose.Schema({
    questionLetters: {
        type: [String],
        required: true,
    },
    questionStatements: {
        type: [String],
        required: true,
    },
    answerStatements: {
        type: [String],
        required: true,
    }
  });

export default matchingQuestion =  mongoose.model('MatchingQuestion', matchingQuestionSchema);