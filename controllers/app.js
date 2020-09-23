//To get the collection of database
const event = require('../models/schema');
//Defining action for home controller
module.exports.getApp = function (req, resp) {
    event.find({}, function (err, events) {
        if (err) {
            console.log('Error in finding contacs');
            return;
        }
        //For home animation to finish add a timer
        setTimeout(function () {
            resp.render("app", {
                title: "TODO App",
                events_list: events
            })
        }, 500);
    });
};