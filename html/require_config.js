//require_config.js: Requirejs configuration.

module.exports = {
        nodeRequire: require,
        baseUrl: ".",
        paths: {
		"rsvp": "lib/rsvp.min",
		"file": "lib/file.min",
		"promise": "lib/promise.min"
	},
        bundles: {},
	suppress: {
		nodeShim: true
	},
	shim: {
		"file": {
			deps: [
				"rsvp"
			],
			"exports": "file"
		},
		"promise": {
			deps: [
				"rsvp"
			],
			"exports": "promise"
		}
	}
};
