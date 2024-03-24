import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema({
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    },
    qType : {
        type: Number,
        enum: [1,2],
        required: true
    },
    questionHeader :{
        type : [String],
        required: true
    },
    numStatements : {
        type : [String],
        required: true,
    },
    questionStatements : {
        type : [[String]],
        required: true,
    },
    
});



const mcq = mongoose.model('mcq', mcqSchema);
export default mcq;