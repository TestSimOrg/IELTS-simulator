import mongoose from "mongoose";
import image from './image'
const diagramFlowchartCompletionSchema = new mongoose.Schema({
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    questionTitle : {
        type : String,
        required : true
    },
    image: image,
    questionStatements : {
        type : [String],
        required : true
    },
    numOfBlanks:{
        type: Number,
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

const  diagramFlowchartCompletionQuestion = mongoose.model('diagramFlowchartCompletionQuestion', diagramFlowchartCompletionSchema);

export default diagramFlowchartCompletionQuestion;
