const path = require("path");
const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
require('dotenv').config();
let cors = require('cors')


const app = express();
const PORT = 3000;

app.use(cors())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

mongoose.connection.on('connected', function () {
    process.env.NODE_ENV === 'production' ? 
    console.log(`Mongoose default connection open to ${process.env.MONGO_URI}`) 
    : console.log(`Mongoose default connection open to ${process.env.PORT}`);
  }); 
  // If the connection throws an error
  mongoose.connection.on('error',function (err) {
    console.log(`Mongoose default connection error: ${err}`);
  }); 
  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected'); 
  });



app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.resolve(__dirname, 'src'))); // Static directory (makes public directory)

// checking to see if we're in production mode to run the server publically
if (process.env.NODE_ENV === "production") { 
    app.use(express.static("./build"));
}

const routes = require('./routes')
app.use('/api', routes)

// allowing the path to the build folder to be accessible in server.js
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname + '/src/build/index.html'));
});

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, ()=> {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
})
