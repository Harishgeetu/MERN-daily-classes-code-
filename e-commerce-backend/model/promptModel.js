const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema(  // ← assign to promptSchema
  { question:{type:String},
    promptData: { type: String } },
  { timestamps: true }
);

const promptModel = mongoose.model("prompt_data", promptSchema);
module.exports = promptModel;