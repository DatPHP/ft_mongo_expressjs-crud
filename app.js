// import dependencies
const express = require('express'); 
const bodyParser = require('body-parser') ;
const logger = require('express') ;

//import logger from 'morgan';
const mainRoutes = require('./server/routes/main');

// Call in installed dependencies
// set up express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// set up port number
const port = 5035;


// set up mongoose
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/CourseManagement";
const db = mongoose.connection;

mongoose.connect(url, { useNewUrlParser: true });

db.once("open", (_) => {
  console.log("Database connected:", url);
});

db.on("error", (err) => {
  console.error("connection error:", err);
});
// set up home route



// set up route

app.use('/api/', mainRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Project with Nodejs Express and MongoDB',
    });
  });
  app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
  });


