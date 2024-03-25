import mongoose from "mongoose";

const flowchartCompletionSchema = new mongoose.Schema({
    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    },
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    options: {
        type: Boolean,
        required: true,
    },
    questionHeader : {
        type : String,
        required : true
    },
    questionOptions: {
        type: [String],
        required: function validate(){
            return this.options;
        }
    },
    questionTitle : {
        type : String,
    },
    steps: {
        type: [[String]],
        required : true
    },
    
});


const  flowchartCompletionQuestion = mongoose.model('flowchartCompletionQuestion', flowchartCompletionSchema);

export default flowchartCompletionQuestion;
