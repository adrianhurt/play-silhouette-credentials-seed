require.config
	paths:
		jquery: "../lib/jquery/jquery"
		bootstrap: "../lib/bootstrap/js/bootstrap"
	
	shim:
		jquery:
			exports: "$"
		bootstrap:
			deps: ["jquery"]


require ["app"]