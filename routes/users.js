// import?
const express = require("express");
const Router = express.Router();

Router.use('/', function (req, res) {
	res.send();
});

module.exports = {Router};