sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("jeff_front.ui5_front.controller.View1", {
		onInit: function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel({
				serviceUrl: "/xsodata/odata.xsodata/",
				defaultUpdateMethod: "sap.ui.model.odata.UpdateMethod.Put"
					// synchronizationMode : "None"
					// "useBatch" : false
			});
			this.getView().setModel(oModel, "myModel");
			
			var oTable = this.getView().byId("sTable");
			oTable.setModel(this.getView().getModel("myModel"));
		}
	});
});