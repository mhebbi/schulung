sap.ui.define([
		"de/integrata/training/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("de.integrata.training.controller.App", {

			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf de.integrata.training.controller.App
			 */
			onInit: function() {
			 },
		
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf de.integrata.training.controller.App
			 */
			//	onBeforeRendering: function() {
			//
			//	},
		
			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that SAPUI5 controls get after being rendered.
			 * @memberOf de.integrata.training.controller.App
			 */
			//	onAfterRendering: function() {
			//
			//	},
		
			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf de.integrata.training.controller.App
			 */
			//	onExit: function() {
			//
			//	}
				onButtonPressed: function() {
					alert("Bitte nicht drücken");
					},


			onSliderChange: function(oEvent) {
				alert("Du hast den " +
					oEvent.getSource().getId() +
					" auf " +
					oEvent.getSource().getValue() +
					" verschoben");
			}
		});

	}
);


