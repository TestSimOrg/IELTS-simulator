import mongoose from "mongoose";

const tableCompletionSchema = new mongoose.Schema({
    passage: {
        type: String,
        required: true
    }
});


export default tableCompletion = mongoose.model('tableCompletion', tableCompletionSchema);