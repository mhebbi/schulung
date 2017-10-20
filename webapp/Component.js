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
			},

			routing: {
				config: {
					routerClass: sap.m.routing.Router,
					viewType: "XML",
					viewPath: "de.integrata.training.view",
					controlId: "app",
					controlAggregation: "pages",
					transition: "slide",
					async: true
				},
				routes: [{
					pattern: "",
					name: "initial",
					target: [
						"list"
					]
				}, {
					pattern: "{customerId}",
					name: "customerDetails",
					target: [
						"details"
					]
				}],
				targets: {
					list: {
						viewName: "List",
						viewLevel: 1
					},
					details: {
						viewName: "Customer",
						viewLevel: 2
					}
				}
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

			// var oFlugkundenModel = new sap.ui.model.json.JSONModel("model/flugkunden.json");
			// this.setModel(oFlugkundenModel, "flugkundenModel");

			var oFlugkundenModel = new sap.ui.model.odata.v2.ODataModel(
				"/sap/opu/odata/sap/ZGW_FLUGKUNDE_003_SRV", {
					disableHeadRequestForToken: true,
					useBatch: false

				});
			// 	"http://train18.sap.integrata.net:8000/sap/opu/odata/sap/ZGW_FLUGKUNDE_003_SRV", {
			// 		user: "schul03",
			// 		password: "zun42der"
			// 	});
			this.setModel(oFlugkundenModel, "flugkundenModel");

			UIComponent.prototype.init.apply(this, arguments);

			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl: "i18n/i18n.properties"
			});
			this.setModel(i18nModel, "i18n");
			this.getRouter().initialize();
		}
	});

});