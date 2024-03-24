import mongoose from "mongoose";

const formCompletionSchema = new mongoose.Schema({
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    questionTitle: {
        type: String,
        required: true
    },
    questionStatements: {
        type: [String],
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


export default formCompletionQuestion = mongoose.model('formCompletionQuestion', formCompletionSchema);