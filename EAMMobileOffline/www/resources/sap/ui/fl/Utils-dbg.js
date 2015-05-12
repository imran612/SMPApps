/*!
 * ${copyright}
 */
/*global Promise */

sap.ui.define([ "jquery.sap.global", "sap/ui/core/Component" ], function(jQuery, Component) {
	"use strict";

	/**
	 * Provides utility functions for the flexibility library
	 *
	 * @namespace
	 * @alias sap.ui.fl.Utils
	 * @author SAP SE
	 * @version ${version}
	 * @experimental Since 1.25.0
	 */
	var Utils = {
		/**
		 * Tries to retrieve the xsrf token from the controls OData Model. Returns empty string if retrieval failed.
		 *
		 * @param {sap.ui.core.Control} oControl -  SAPUI5 control
		 * @returns {String} XSRF Token
		 *
		 * @public
		 * @function
		 * @name sap.ui.fl.Utils.getXSRFTokenFromControl
		 */
		getXSRFTokenFromControl: function(oControl) {
			var oModel;
			if (!oControl) {
				return "";
			}

			//Get Model
			if (oControl && typeof oControl.getModel === 'function') {
				oModel = oControl.getModel();
				return Utils._getXSRFTokenFromModel(oModel);
			}
			return "";
		},

		/**
		 * Returns XSRF Token from the Odata Model. Returns empty string if retrieval failed
		 *
		 * @param {sap.ui.model.odata.ODataModel} oModel -  OData Model
		 * @returns {String} XSRF Token
		 *
		 * @private
		 */
		_getXSRFTokenFromModel: function(oModel) {
			var mHeaders;
			if (!oModel) {
				return "";
			}
			if (typeof oModel.getHeaders === 'function') {
				mHeaders = oModel.getHeaders();
				if (mHeaders) {
					return mHeaders['x-csrf-token'];
				}
			}
			return "";
		},

		/**
		 * Returns the class name of the component the given control belongs to.
		 *
		 * @param {sap.ui.core.Control} oControl -  SAPUI5 control
		 * @returns {String} The component class name, ending with ".Component"
		 *
		 * @see sap.ui.base.Component.getOwnerIdFor
		 *
		 * @public
		 * @function
		 * @name sap.ui.fl.Utils.getComponentClassName
		 */
		getComponentClassName: function(oControl) {
			if (!oControl) {
				return "";
			}
			var sComponentId = Utils._getComponentIdForControl(oControl);
			if (!sComponentId) {
				return "";
			}
			return sap.ui.component(sComponentId).getMetadata().getName();
		},

		/**
		 * Returns ComponentId of the control. If the control has no component, it walks up the control tree in order to find a control having one
		 *
		 * @param {sap.ui.core.Control} oControl -  SAPUI5 control
		 * @returns {String} The component id
		 * @see sap.ui.base.Component.getOwnerIdFor
		 *
		 * @private
		 */
		_getComponentIdForControl: function(oControl) {
			var sComponentId = "", i = 0;
			do {
				i++;
				sComponentId = Utils._getOwnerIdForControl(oControl);
				if (sComponentId) {
					return sComponentId;
				}
				if (oControl && typeof oControl.getParent === 'function') { //Walk up control tree
					oControl = oControl.getParent();
				} else {
					return "";
				}
			} while (oControl && i<100);
			return "";
		},

		/**
		 * Returns OwnerId of the control
		 *
		 * @param {sap.ui.core.Control} oControl -  SAPUI5 control
		 * @returns {String} The owner id
		 * @see sap.ui.base.Component.getOwnerIdFor
		 *
		 * @private
		 */
		_getOwnerIdForControl: function(oControl) {
			return Component.getOwnerIdFor(oControl);
		},

		/**
		 * Returns the current layer as defined by the url parameter.
		 * If the end user flag is set, it always returns "USER".
		 *
		 * @param bIsEndUser - the end user flag
		 * @returns {string} the current layer
		 *
		 * @public
		 * @function
		 * @name sap.ui.fl.Utils.getCurrentLayer
		 */
		getCurrentLayer: function(bIsEndUser) {
			var oUriParams, layer;
			if (bIsEndUser) {
				return "USER";
			}

			oUriParams = this._getUriParameters();
			layer = oUriParams.mParams['sap-ui-layer'];
			if (layer && layer.length > 0) {
				return layer[0];
			}
			return "CUSTOMER";

		},

		/**
		 * Checks if a shared newly created variant requires an ABAP package
		 *
		 * @returns {boolean} - Indicates whether a new variant needs an ABAP package
		 *
		 * @public
		 * @function
		 * @name sap.ui.fl.Utils.doesSharedVariantRequirePackage
		 */
		doesSharedVariantRequirePackage: function() {
			var sCurrentLayer;
			sCurrentLayer = Utils.getCurrentLayer(false);
			if ((sCurrentLayer === 'VENDOR') || (sCurrentLayer === 'PARTNER')) {
				return true;
			}
			if (sCurrentLayer === 'USER') {
				return false;
			}
			if (sCurrentLayer === 'CUSTOMER') {
				return false; //Variants in CUSTOMER layer might either be transported or stored as local objects ($TMP) as they are client dependent content. A variant which will be transported must not be assigned to a package.
			}

			return false;
		},

		/**
		 * Returns the tenant number for the communication with the ABAP backend.
		 *
		 * @public
		 * @function
		 * @name sap.ui.fl.Utils.getClient
		 */
		getClient: function() {
			var oUriParams, client;
			oUriParams = this._getUriParameters();
			client = oUriParams.mParams['sap-client'];
			if (client && client.length > 0) {
				return client[0];
			}
			return undefined;
		},
		_getUriParameters: function() {
			return jQuery.sap.getUriParameters();
		},

		/**
		 * Converts the browser language into a 2-character ISO 639-1 language.
		 * If the browser language is in format RFC4646, the first part will be used:
		 * For example en-us will be converted to EN.
		 *
		 * If the browser language already is in ISO 639-1, it will be returned after an upper case conversion:
		 * For example de will be converted to DE.
		 *
		 * @param {String} sBrowserLanguage - Language in RFC4646
		 * @returns {String} Language in ISO 639-1. Empty string if conversion was not successful
		 *
		 * @public
		 * @function
		 * @name sap.ui.fl.Utils.convertBrowserLanguageToISO639_1
		 */
		convertBrowserLanguageToISO639_1: function(sBrowserLanguage) {
			if (!sBrowserLanguage || typeof sBrowserLanguage !== 'string') {
				return "";
			}

			var nIndex = sBrowserLanguage.indexOf('-');
			if ((nIndex < 0) && (sBrowserLanguage.length <= 2)) {
				return sBrowserLanguage.toUpperCase();
			}
			if (nIndex > 0 && nIndex <= 2) {
				return sBrowserLanguage.substring(0, nIndex).toUpperCase();
			}

			return "";
		},

		/**
		 * Returns the current language in ISO 639-1 format.
		 *
		 * @returns {String} Language in ISO 639-1. Empty string if language cannot be determined
		 *
		 * @public
		 * @function
		 * @name sap.ui.fl.Utils.getCurrentLanguage
		 */
		getCurrentLanguage: function() {
			var sLanguage = sap.ui.getCore().getConfiguration().getLanguage();
			return Utils.convertBrowserLanguageToISO639_1(sLanguage);
		}
	};
	return Utils;
}, true);
