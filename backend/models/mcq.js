import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema({
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
        default: 1,
        required : true,
    },
    qType : {
        type: Number,
        enum: [1,2],
        required: true
    },
    questionHeader :{
        type : [String],
        required: true
    },
    numStatements : {
        type : [String],
        required: true,
    },
    questionOptions : {
        type : [[String]],
        required: true,
    },
    
});


mcqSchema.pre('validate', function(next){
    const consistent = this.numStatements.length === this.questionOptions.length ? true : false;
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements === numOfQuestion ? true : false;
    
    if(!numConsistency && this.qType !== 2){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }else{
        next();
    }

    if(!consistent){
        const err = new Error('number of mcq questions and number of mcq option array mismatch');
        next(err);
    }else{
        next()
    }
})


const mcq = mongoose.model('mcq', mcqSchema);
export default mcq;