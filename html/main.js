//main.js: Main entry point for the linux, express, and node stack.

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"express",
	"Snip"
], function(
	express,
	Snip
) {
	console.log("main.js initialized successfully!");
	var app = express();

	var xSnip = new Snip({
		"Dir": __dirname + "/lib/",
		"Snippets": {
			"TestSuite": "testsuite.min.js"
		}
	});

	//Send the file requested.
	app.get("/cdn/:file", function( request, response ) {
		xSnip.snip( request.params.file ).then(function( Body ) {
			response.send( Body );
		});
	});

	app.listen( 80, function() {
		console.log("Listening on port 80...");
	});
});
