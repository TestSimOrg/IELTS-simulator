import mongoose from "mongoose";

const sentenceCompletionSchema = new mongoose.Schema({
    questionSentences: {
        type: [String],
        required: true
    }
});


export default sentenceCompletionQuestion = mongoose.model('sentenceCompletionQuestion', sentenceCompletionSchema);