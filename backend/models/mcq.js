import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema({
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

export default mcq = mongoose.model('mcq', mcqSchema);