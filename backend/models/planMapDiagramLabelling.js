import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

const planMapDiagramLabellingSchema = new mongoose.Schema({

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
    options:{
        type: Boolean,
        required: true,
    },
    numOfWords:{
        type: Number,
        required: function validate(){
            return !this.options;
        },
        default: 1,
    },
    questionHeader : {
        type : String,
        required : true
    },
    questionTitle : {
        type : String,
        required: true,
    },
    image: {
        type: String,
        required : true
    },
    questionOptions: {
        type: [String],
        required: function validate(){
            return this.options;
        },
        default: [],
    },
    numStatements : {
        type: [String],
        required: true
    },
    answer: {
        type: [Schema.ObjectId],
        ref: 'answer'
    }
    
});


planMapDiagramLabellingSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements.length === numOfQuestion ? true : false;
    log.info(`Start question num: ${this.startQuestionNum} and end at ${this.endQuestionNum}`)
    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }else{
        next();
    }
})

const planMapDiagramLabellingQuestion = mongoose.model('planMapDiagramLabellingQuestion', planMapDiagramLabellingSchema);


export default planMapDiagramLabellingQuestion;