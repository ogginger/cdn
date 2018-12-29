//main.js: Main entry point for the linux, express, and node stack.

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"express",
	"file"
], function(
	express,
	file
) {
	console.log("main.js initialized successfully!");
	var app = express();

	//Send the file requested.
	app.get("/cdn/:file", function( request, response ) {
		file.get(request.params.file).then(function( File ) {
			response.send(File);
		});
	});

	app.listen( 80, function() {
		console.log("Listening on port 80...");
	});
});
