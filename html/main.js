//main.js: Main entry point for the linux, express, and node stack.

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"express"
], function(
	express
) {
	console.log("main.js initialized successfully!");
});
