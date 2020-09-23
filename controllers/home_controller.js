//Defining action for home controller
module.exports.home = function (req, resp) {
    resp.render("home", {
        title: "TODO App",
    });

};