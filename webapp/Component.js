sap.ui.define([
	"sap/ui/core/UIComponent"
], function(UIComponent) {
	"use strict";

	return UIComponent.extend("de.integrata.training.Component", {

		metadata: {
			name: "Meine App",
			version: "0.5",
			dependencies: {
				libs: ["sap.m"]
			},
			rootView: {
				viewName: "de.integrata.training.view.App",
				type: "XML"
			}
		},
		init: function() {

			var oData = {
				value1: 50,
				value2: 75
			};
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.setModel(oModel, "dataModel");
			// sap.ui.getCore().setModel(oModel, "dataModel");
			
			UIComponent.prototype.init.apply(this, arguments);

			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl: "i18n/i18n.properties"
			});
			this.setModel(i18nModel, "i18n");

		}
	});

});