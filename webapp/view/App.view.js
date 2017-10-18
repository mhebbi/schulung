sap.ui.jsview("view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.App
	*/ 
	getControllerName : function() {
		return "controller.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.App
	*/ 
	createContent : function(oController) {
		var oSlider1 = new sap.m.Slider( "Slider1", {
						    change: function() {
							alert( "Der Slider steht auf:" + oSlider1.getValue()); }
							});
			 							
	    var oSlider2 = new sap.m.Slider( "Slider2", {
												change: oController.onSliderChanged
												}
												);	
			 
			 var oText1 = new sap.m.Text({ text: "Dieses ist falsch"
										}
										);
			
			 var oButton = new sap.m.Button( {
			                                   tooltip: "Dies ist kein Knopf sondern ein Button",
											   text: "Knopf",
											   press: oController.onButtonPressed
											   }
											   );
		
		
 		return new sap.m.Page({
			title: "Title",
			content: [ 
				oSlider1, 
				oSlider2,
				oText1,
				oButton
			]
		});
	}

});