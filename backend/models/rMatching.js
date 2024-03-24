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
    if (this.qTypeList === true && this.qTypeMatchingInfo === true) {
        const err = new Error('Question can be either qTypeList (List of option in question) or qTypeMatchingInfo (No list only question statements that match info in statement to  passage)');
        next(err);
    } else if(this.qTypeList === true){
        this.qTypeMatchingInfo = true;
        next();
    }else if(this.qTypeMatchingInfo === true{
        this.qTypeList = true;
        next();
    }
});


  const rMatchingQuestion =  mongoose.model('MatchingQuestion', rMatchingQuestionSchema);

  export default rMatchingQuestion;