import mongoose from "mongoose";

const lrmcqSchema = new mongoose.Schema({
    questionHeader :{
        type : String,
        required: true
    },
    questionStatement : {
        type : [String],
        required: true,
    },
    questionOptions : {
        type : [[String]],
        required: true,
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

/**/

const lrmcq = mongoose.model('lrmcq', lrmcqSchema);
export default lrmcq;