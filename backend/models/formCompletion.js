import mongoose from "mongoose";

const formCompletionSchema = new mongoose.Schema({
    passage: {
        type: String,
        required: true
    }
});


export default formCompletionQuestion = mongoose.model('formCompletionQuestion', formCompletionSchema);