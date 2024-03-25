import mongoose from "mongoose";

const tableCompletionSchema = new mongoose.Schema({
    
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
    noOfRows : {
        type : Number,
        required: true
    },
    noOfCols : {
        type : Number,
        required: true
    },
    rows: {
        type: [[String]],
        required: true
    },
    
});

tableCompletionSchema.pre('validate', function(next) {
    const arr = this.rows;
    const rowCheck = this.noOfRows === this.rows.length ? true : false;
    const colCheck = true;
    for(let arr1 of arr){
        if(this.noOfCols !== arr1.length){
            colCheck = false;
        }
    }

    if (!rowCheck) {
        const err = new Error('Table row and outer array length mismatch');
        next(err);
    } else if(!colCheck){
        const err = new Error('Table col and inner array length mismatch');
        next(err);
    }else {
        next();
    }
})
const tableCompletion = mongoose.model('tableCompletion', tableCompletionSchema);

export default tableCompletion;