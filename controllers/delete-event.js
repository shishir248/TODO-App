//Getting schema
const event = require('../models/schema');

//Defining action for deleting one event
module.exports.delete_event = function (req, resp) {

    //Getting id for deletion
    let id = req.query.id;
    //Delete by id

    setTimeout(function () {
        event.findByIdAndDelete(id, function (err) {
            if (err) {
                console.log('Couldnt be deleted');
                return;
            }
        });
        //Redirecting
        resp.redirect('/app');
    }, 500);
}