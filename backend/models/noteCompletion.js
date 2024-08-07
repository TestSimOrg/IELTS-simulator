import mongoose, { Schema } from "mongoose";

const noteCompletionSchema = new mongoose.Schema({

    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    },
    standAlone: {
        type: Boolean,
        required: true,
    },
    numOfWords : {
        type : Number,
        required : true
    },
    numOfNum : {
        type : Number,
        required : true
    },
    questionHeader: {
        type: String,
        required: true
    },
    questionTitle: {
        type: String,
        required: true
    },
    questionStatements: {
        type: [String],
        required: true
    },
    answer: {
        type: [Schema.ObjectId],
        ref: 'answer'
    }

});


const noteCompletionQuestion = mongoose.model('noteCompletionQuestion', noteCompletionSchema);

export default noteCompletionQuestion;