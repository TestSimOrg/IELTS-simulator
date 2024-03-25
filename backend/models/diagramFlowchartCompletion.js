import mongoose from "mongoose";

const diagramFlowchartCompletionSchema = new mongoose.Schema({
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
    qType : {
        type : Number,
        enum: [1, 2], //type 1 for diagram and type 2 for flowChart
        required: true,
    },
    questionHeader : {
        type : String,
        required : true
    },
    questionTitle : {
        type : String,
        required : true
    },
    image: {
        type: Buffer, 
        contentType: String,
        required : true
    },
    questionStatements : {
        type : [String],
        required : true,
    },
    questionOptions : {
        type : [String],
        required : true,
    }
    
});

diagramFlowchartCompletionSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }else{
        next();
    }
})

const  diagramFlowchartCompletionQuestion = mongoose.model('diagramFlowchartCompletionQuestion', diagramFlowchartCompletionSchema);

export default diagramFlowchartCompletionQuestion;
