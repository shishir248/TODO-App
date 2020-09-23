//Getting schema
const event = require('../models/schema');

//Defining action for delete-all controller
module.exports.delete_all = function (req, resp) {
    //Delete all documents in a collection
    setTimeout(function () {
        event.collection.deleteMany();
        //Redirecting
        resp.redirect('/app');
    }, 1100);

}