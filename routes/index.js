//Require express
const express = require("express");
//Setting up the router
const router = express.Router();

//Getting home controller
const homeController = require("../controllers/home_controller");
//Getting app controller
const appContoller = require("../controllers/app");
//Getting create event controller
const createEvent = require('../controllers/create_event');
//Getting action controller to delete all events
const deleteAll = require('../controllers/delete-all');
//Getting action controller to delete a particular event
const deleteEvent = require('../controllers/delete-event');

//Performing action for route=/
router.get("/", homeController.home);
//To get app data
router.get("/app", appContoller.getApp);
//To post form data(Add)
router.post("/create-event", createEvent.create_event);
//Action for route delete-event
router.get("/delete-event", deleteEvent.delete_event);
//Action for route delete-event
router.get("/delete-all-event", deleteAll.delete_all);

module.exports = router;