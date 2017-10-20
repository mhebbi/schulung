sap.ui.define([
		"de/integrata/training/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("de.integrata.training.controller.List", {
			onItemPress: function(oEvent){
				var oItem = oEvent.getSource();
				
				this.getRouter().navTo("customerDetails", {
					customerId : oItem.getBindingContext("flugkundenModel").getProperty("Customerid")
				}, true);
			}
		});
	}
);