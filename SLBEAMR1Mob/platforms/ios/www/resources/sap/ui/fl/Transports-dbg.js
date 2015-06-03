/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
/*global Promise */

sap.ui.define([ "sap/ui/fl/LrepConnector", "sap/ui/fl/Utils" ], function(LrepConnector, FlexUtils) {

	/**
	 * @constructor
	 * @class Entity that handles ABAP transport related information.
	 * @name sap.ui.fl.Transports
	 * @experimental Since 1.25.0
	 * @author SAP SE
	 * @version ${version}
	 */
	var Transports = function() {
	};

	/**
	 * Reads the transports of the current user from the backend.
	 * The "locked" attribute indicates that the provided file (package/name/type) is already locked on this transport.
	 *
	 * @param {object} mParameters map of parameters, see below
	 * @param {string} mParameters.package - abap package; only relevant for VENDOR layer
	 * @param {string} mParameters.name - name of the lrep document
	 * @param {string} mParameters.namespace - namespace of the lrep document
	 * @param {string} mParameters.type - file extension of the lrep document
	 * @returns {Promise} with parameter <code>oResult</code>
	 * 					which is an object that has the attributes "transports", "localonly" and "errorCode". 
	 * 					"localonly" tells the consumer if only local development is valid and no transport selection should take place.
	 * 					"transports" is an array of objects with attributes "transportId", "owner", "description", "locked"(true/false).
	 * 					"errorCode" can have the values "INVALID_PACKAGE" or "NO_TRANSPORTS" or is an empty string if there is no error.
	 * @public
	 * @function
	 * @name sap.ui.fl.Transports#getTransports
	 */
	Transports.prototype.getTransports = function(mParameters) {
		var sUri, sClient, oLrepConnector, oPromise;
		sUri = '/sap/bc/lrep/actions/gettransports/';
		if (mParameters['package']) {
			sUri += '&package=' + mParameters['package'];
		}
		if (mParameters.name) {
			sUri += '&name=' + mParameters.name;
		}
		if (mParameters.namespace) {
			sUri += '&namespace=' + mParameters.namespace;
		}
		if (mParameters.type) {
			sUri += '&type=' + mParameters.type;
		}
		sClient = FlexUtils.getClient();
		if (sClient) {
			sUri += '&sap-client=' + sClient;
		}
		//Replace first & with ?
		sUri = sUri.replace('&','?');

		oLrepConnector = new LrepConnector();
		oPromise = oLrepConnector.send(sUri);
		return oPromise.then(function(oResponse) {
			if (oResponse.response) {
				if (!oResponse.response.localonly) {
					oResponse.response.localonly = false;
				}
				if (!oResponse.response.errorCode) {
					oResponse.response.errorCode = "";
				}
				return Promise.resolve(oResponse.response);
			} else {
				return Promise.reject('response is empty');
			}
		});
	};

	return Transports;
}, /* bExport= */true);