import mongoose from "mongoose";

const rMatchingQuestionSchema = new mongoose.Schema({
    
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
    },
    qTypeList : {
        type: Boolean,
        required: true,
    },
    qTypeMatchingInfo : {
        type: Boolean,
        required: true,
    },
    questionHeader: {
        type: String,
        required: true,
    },
    questionOptionRepeatable : {
        type: Boolean,
        required : true,
    },
    questionTitle: {
        type: String,
        required: function() {
            return this.qTypeList === true;
        },
    },
    questionStatements: {
        type: [String],
        required: function() {
            return this.qTypeList === true;
        },
    },
    numStatements : {
        type: [String],
        required: true,
    },
  });
  
rMatchingQuestionSchema.pre('validate', function(next) {
    
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }
    
    if (this.qTypeList === true && this.qTypeMatchingInfo === true) {
        const err = new Error('Question can be either qTypeList (List of option in question) or qTypeMatchingInfo (No list only question statements that match info in statement to  passage)');
        next(err);
    } else if(this.qTypeList === true){
        this.qTypeMatchingInfo = true;
        next();
    }else if(this.qTypeMatchingInfo === true){
        this.qTypeList = true;
        next();
    }
    next();
});


  const rMatchingQuestion =  mongoose.model('MatchingQuestion', rMatchingQuestionSchema);

  export default rMatchingQuestion;