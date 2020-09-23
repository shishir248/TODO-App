//Require model
const event = require('../models/schema');

//Creating function create_event or Defining action
module.exports.create_event = function (req, resp) {
    //Creating new Document
    event.create({
        name: req.body.name,
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date,
    }, function (err, newEvent) {
        if (err) {
            console.log('Error undefined');
            return;
        }
    });
    //Redirecting to the app
    resp.redirect('/app');
}