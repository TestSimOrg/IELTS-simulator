import mongoose from "mongoose";

const summaryCompletionSchema = new mongoose.Schema({
    questionTitle : {
        type : String,
        required: true,
    },
    summary : {
        type : String,
        required: true,
    }
});


export default summaryCompletionQuestion = mongoose.model('summaryCompletionQuestion', summaryCompletionSchema);