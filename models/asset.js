const mongoose = require('mongoose');
const { Schema } = mongoose; 

const assetSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  }, 
  credits: {
    type: Number,
    required: true
  },
  content_link: {
    type: String,
    required: true
  },
  preview: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Asset', assetSchema);