import mongoose, { Schema } from "mongoose";

const answerSchema = new mongoose.Schema({
    
    ansType : {
      type: String,
      enum: ['S', 'M','L','IEO','B'],
      required: true
    },
    qPair : {
      type : [String],
      required: function validate(){
          return this.ansType === IEO;
      }
    },
    ans: {
      type: Schema.Types.Mixed,
      required: true
    }
})

answerSchema.pre('validate', function(next) {
  const ansType = this.ansType;
  const ans = this.ans;

  // Validate ans based on ansType
  if (ansType === 'S' || ansType === 'L' || ansType === 'B') {
    if (typeof ans !== 'string') {
      return next(new Error('Invalid data type for ans'));
    }
  } else if (ansType === 'M' || ansType === 'IEO') {
    if (!Array.isArray(ans) || !ans.every(item => typeof item === 'string')) {
      return next(new Error('Invalid data type for ans'));
    }
  }

  next();
});

const answer = mongoose.model('answer', answerSchema);
export default answer;