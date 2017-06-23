angular
	.module("app.js", ["ui.router", "ngResource"])
		.factory("appSongFactory", ["$resource", function() ])
			.controller("appIndexController", ["", ])
				.controller("appSongController", ["", ])
					.controller("appNewController", ["", ])