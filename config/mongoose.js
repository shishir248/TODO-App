//Require mongoose
const mongoose = require("mongoose");
//Establishing a connection with db
mongoose.connect("mongodb://localhost/todo");
//Connect with db
const db = mongoose.connection;

//To check if db is up
db.on("error", console.error.bind(console, "Error connecting with database"));
db.once("open", function () {
    console.log("Connected to database");
});