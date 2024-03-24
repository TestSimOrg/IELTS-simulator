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

const formCompletionQuestion = mongoose.model('formCompletionQuestion', formCompletionSchema);

export default formCompletionQuestion;