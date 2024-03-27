import mongoose, { Schema } from "mongoose";
import log from '../lib/logger.js';

const answerSchema = new mongoose.Schema({
    
    ansType : {
      type: String,
      enum: ['S', 'M','L','IEO','B1','B2'],
      required: true
    },
    qPair : {
      type : [String],
      required: function validate(){
          return this.ansType === 'IEO';
      }
    },
    ans: {
      type: Schema.Types.Mixed,
      required: true,
    }
})

answerSchema.pre('validate', function(next) {
  const ansType = this.ansType;
  const ans = this.ans;
  log.info(`ans : ${ans}`)
  // Validate ans based on ansType
  if (ansType === 'S' || ansType === 'L' || ansType === 'B1') {
    if (typeof ans !== 'string') {
      return next(new Error('Invalid data type for ans'));
    }
  } else if (ansType === 'M' || ansType === 'IEO' || ansType === 'B2') {
    if (!Array.isArray(ans) || !ans.every(item => typeof item === 'string')) {
      return next(new Error('Invalid data type for ans'));
    }
  }

  next();
});

const answer = mongoose.model('answer', answerSchema);
export default answer;