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
    options: {
        type: Boolean,
        required: true,
    },
    numOfWords : {
        type : Number,
        required : function validate(){
            return !(this.options);
        },
        default: 1,
    },
    numOfNum : {
        type : Number,
        required : function validate(){
            return !(this.options);
        },
        default: 0,
    },
    questionHeader : {
        type : String,
        required : true
    },
    questionTitle : {
        type : String,
    },
    questionOptions: {
        type: [String],
        required: function validate(){
            return this.options;
        }
    },
    steps: {
        type: [[String]],
        required : true
    },
    
});


const  flowchartCompletionQuestion = mongoose.model('flowchartCompletionQuestion', flowchartCompletionSchema);

export default flowchartCompletionQuestion;
