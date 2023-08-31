require('dotenv').config();                 // Allows us to use variables in .env file
const express = require("express");         // Using express
const cors = require("cors");               // Using cors
const mongoose = require('mongoose')        // Using mongoose
const session = require('express-session');
const app = express();                      // Creating app server initializing with express
const port = process.env.PORT || 5000;      // Port we are running the server
const uri = process.env.ATLAS_URI;          // The MongoDB key


mongoose.connect(uri, {});                  // Connecting to the MongoDB
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(cors());                            // Making app server use cors
app.use(express.json());                    // Making app server use express.json
app.use(session({
   
}))


const usersRouter = require('./routes/users');
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});