import mongoose from "mongoose";

const noteCompletionSchema = new mongoose.Schema({
    passage: {
        type: String,
        required: true
    }
});


export default noteCompletionQuestion = mongoose.model('noteCompletionQuestion', noteCompletionSchema);