// require mongoose and desctructure Schema 
const mongoose = require('mongoose');
const { Schema } = mongoose; 

// create a constant card cardModel, which will be object
const itemSchema = new mongoose.Schema ({
  // term -> options numbers or strings, object add type key and required key ... REQUIRED
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    require: true
  },
  // definition -> options numbers or strings ... REQUIRED
  price: {
    type: String,
    required: true
  },
  // deck -> options numbers or strings ... REQUIRED
  image: {
    type: String,
    require: true
  },
  kind: {
    type: String,
    require: true
  },
  featured: {
    type: Boolean, 
    require: false
  }
});

// export the model that we make
module.exports = mongoose.model('Item', itemSchema);