import mongoose from "mongoose";
import image from './image'
const diagramFlowchartCompletionSchema = new mongoose.Schema({
    image: image,
    numOfBlanks:{
        type: Number,
        required: true,
    }
});

const  diagramFlowchartCompletionQuestion = mongoose.model('diagramFlowchartCompletionQuestion', diagramFlowchartCompletionSchema);

export default diagramFlowchartCompletionQuestion;
