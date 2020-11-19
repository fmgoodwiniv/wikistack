// import?
const express = require("express");
const Router = express.Router();
const addPage = require("../views/addPage.js");
const layout = require("../views/layout");


Router.use('/', function (req, res) {
    console.log("Listening......")
	res.send(addPage());
});

Router.use('/add', function (req, res) {
    console.log("adding");
    res.send();
})

// eslint-disable-next-line no-undef
module.exports = Router;