// require mongoose and desctructure Schema 
const mongoose = require('mongoose');
const { Schema } = mongoose; 

// create a constant card cardModel, which will be object
const artistSchema = new mongoose.Schema ({
  // term -> options numbers or strings, object add type key and required key ... REQUIRED
  name: {
    type: String,
    required: true
  }, 
  // definition -> options numbers or strings ... REQUIRED
  bio: {
    type: String,
    required: true
  },
  // deck -> options numbers or strings ... REQUIRED
  image: {
    type: String,
    required: true
  }
});

// export the model that we make
module.exports = mongoose.model('Artist', artistSchema);