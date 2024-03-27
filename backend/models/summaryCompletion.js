import mongoose, { Schema } from "mongoose";

const summaryCompletionSchema = new mongoose.Schema({
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
    qType : {
        type: Number,
        enum: [1, 2],
        required: true
    },
    questionHeader : {
        type : String,
        required: true,
    },
    questionTitle : {
        type : String,
        required: true,
    },
    summary : {
        type : String,
        required: true,
    },
    questoinOptions: {
        type: [String],
        required: function validate(){
            return this.qType === 2 ? true : false;
        },
        default: [],
    },
    answer: {
        type: Schema.ObjectId,
        ref: 'answer'
    }
    

});


const summaryCompletionQuestion = mongoose.model('summaryCompletionQuestion', summaryCompletionSchema);

export default summaryCompletionQuestion;