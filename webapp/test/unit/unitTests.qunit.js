/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demodevops/DevOpsDemo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
