const mongoose = require('mongoose');

//Defining schema
const eventSchema = new mongoose.Schema({
    name: {
        type: String
    },
    desc: {
        type: String
    },
    category: {
        type: String
    },
    date: {
        type: String
    },
    deleteid: {
        type: Number
    }

});


//Giving collection name
const event = mongoose.model('event', eventSchema);
//Export DB
module.exports = event;