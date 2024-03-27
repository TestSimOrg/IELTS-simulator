import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        name:
 *          type: string
 *          default: Jane Doe
 *        password:
 *          type: string
 *          default: stringPassword123
 *        passwordConfirmation:
 *          type: string
 *          default: stringPassword123
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        _id:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */
const flowchartCompletionSchema = new mongoose.Schema({
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
    options: {
        type: Boolean,
        required: true,
    },
    numOfWords : {
        type : Number,
        required : function validate(){
            return !(this.options);
        },
        default: 1,
        min: 1,
    },
    numOfNum : {
        type : Number,
        required : function validate(){
            return !(this.options);
        },
        default: 0,
        min: 0,
    },
    questionHeader : {
        type : String,
        required : true
    },
    questionTitle : {
        type : String,
        default: '',
    },
    questionOptions: {
        type: [String],
        required: function validate(){
            return this.options;
        },
        default: [],
    },
    steps: {
        type: [[String]],
        required : true
    },
    answer: {
        type: [Schema.ObjectId],
        ref: 'answer',
    }
    
});


const  flowchartCompletionQuestion = mongoose.model('flowchartCompletionQuestion', flowchartCompletionSchema);

export default flowchartCompletionQuestion;
