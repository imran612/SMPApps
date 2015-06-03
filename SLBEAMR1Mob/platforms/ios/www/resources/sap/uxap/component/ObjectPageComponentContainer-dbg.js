jQuery.sap.require("sap.ui.core.ComponentContainer");
jQuery.sap.require("sap.uxap.ObjectPageConfigurationMode");
/**
 * The objectPageComponentContainer initialize and render an objectPageLayout
 */
sap.ui.core.ComponentContainer.extend("sap.uxap.component.ObjectPageComponentContainer", {
	metadata: {
		properties: {
			"jsonConfigurationURL": {type: "string", group: "Behavior"},
			"mode": {type: "sap.uxap.ObjectPageConfigurationMode", group: "Behavior"}
		}
	},

	/**
	 *  initialize the component container and set default configuration
	 */
	init: function () {
		//set default config
		this.setPropagateModel(true);
		this.setName("sap.uxap.component");
	},

	/**
	 * this ComponentContainer is working only with one component: the objectPageLayout
	 * unlike the standard ComponentContainer, this ones exposes properties to the outside world and pass them on to the underlying component
	 */
	onBeforeRendering: function () {

		this._oComponent = sap.ui.component("sap.uxap");
		if (!this._oComponent) {
			this._oComponent = sap.ui.component({
				name: this.getName(),
				url: this.getUrl(),
				componentData: {            //forward configuration to underlying component
					jsonConfigurationURL: this.getJsonConfigurationURL(),
					mode: this.getMode()
				}
			});

			this.setComponent(this._oComponent, true);
		}

		// call the parent onBeforeRendering
		if (sap.ui.core.ComponentContainer.prototype.onBeforeRendering) {
			sap.ui.core.ComponentContainer.prototype.onBeforeRendering.call(this);
		}
	},

	/**
	 * returns the instantiated objectPageLayout for further api manipulations or null if not not rendered already
	 */
	getObjectPageLayoutInstance: function () {
		var oObjectPageLayoutInstance = null;
		if (this._oComponent && this._oComponent._oView) {
			oObjectPageLayoutInstance = this._oComponent._oView.byId("ObjectPageLayout");
		}
		else {
			jQuery.sap.log.error("ObjectPageComponentContainer :: cannot find children ObjectPageLayout, has it been rendered already?");
		}

		return oObjectPageLayoutInstance;
	},

	/**
	 * use the standard renderer
	 */
	renderer: "sap.ui.core.ComponentContainerRenderer"
});