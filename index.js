//Require express
const express = require("express");
//Define port
const port = 8000;
//Fire express
const app = express();
//Get the database
const db = require('./config/mongoose');


//Parser
app.use(express.urlencoded());

//Setting up routes
app.use("/", require("./routes"));



//Setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//Using assets
app.use(express.static("assets"));

//To check if the server is running
app.listen(port, function (err) {
    if (err) {
        console.log(`Error while running the server: ${err}`);
        return;
    }
    console.log(`Server is running succesfully on port: ${port}`);
});