import mongoose from "mongoose";

const tableCompletionSchema = new mongoose.Schema({
    
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    noOfRows : {
        type : Number,
        required: true
    },
    noOfCols : {
        type : Number,
        required: true
    },
    rows: {
        type: [[String]],
        required: true
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


export default tableCompletion = mongoose.model('tableCompletion', tableCompletionSchema);