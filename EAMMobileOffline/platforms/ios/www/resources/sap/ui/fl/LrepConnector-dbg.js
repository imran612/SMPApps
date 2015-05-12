/*!
 * ${copyright}
 */
/*global Promise */

sap.ui.define([ "jquery.sap.global", "sap/ui/thirdparty/URI", "sap/ui/fl/Utils" ], function(jQuery, URI, FlexUtils) {
	"use strict";

	/**
	 * @constructor
	 * @class Provides the connectivity to the ABAP based LRep REST-service
	 * @param {object} [mParameters] - map of parameters, see below
	 * @param {String} [mParameters.XsrfToken] - XSRF Token which can be reused for the backend connectivity. If no XSRF token is passed, a new one will be fetched from teh backend.
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @name sap.ui.fl.LrepConnector
	 * @experimental Since 1.25.0
	 */
	var Connector = function(mParameters) {
		this._initClientParam();
		this._initLanguageParam();
		if(mParameters) {
			this._sXsrfToken = mParameters.XsrfToken;
		}

	};

	Connector.prototype.DEFAULT_CONTENT_TYPE = "application/json";
	Connector.prototype._sClient = undefined;
	Connector.prototype._sLanguage = undefined;

	/**
	 * Extract client from current running instance
	 * @private
	 */
	Connector.prototype._initClientParam = function() {
		var client = FlexUtils.getClient();
		if (client) {
			this._sClient = client;
		}
	};

	/**
	 * Extract the sap-language url parameter from current url
	 * @private
	 */
	Connector.prototype._initLanguageParam = function() {
		var sLanguage = this._getUrlParameter('sap-language');
		if(sLanguage){
			this._sLanguage = sLanguage;
		}
	};

	/**
	 * Returns the a string containing all url parameters of the current window.location
	 *
	 * @returns {string}
	 * @private
	 */
	Connector.prototype._getAllUrlParameters  = function(){
		return window.location.search.substring(1);
	};


	/**
	 * Returns the value of the specified url parameter of the current url
	 *
	 * @param {String} sParameterName - Name of the url parameter
	 * @returns {string} url parameter
	 * @private
	 */
	Connector.prototype._getUrlParameter = function(sParameterName) {
		var aURLVariables, sUrlParams, i, aCurrentParameter;
		sUrlParams = this._getAllUrlParameters();
		aURLVariables = sUrlParams.split('&');
		for (i = 0; i < aURLVariables.length; i++) {
			aCurrentParameter = aURLVariables[i].split('=');
			if (aCurrentParameter[0] === sParameterName) {
				return aCurrentParameter[1];
			}
		}
	};



	/**
	 * Resolve the complete url of a request by taking the backendUrl and the relative url from the request
	 *
	 * @param {String} sRelativeUrl - relative url of the current request
	 * @returns {sap.ui.core.URI} returns the complete URI for this request
	 *
	 * @private
	 */
	Connector.prototype._resolveUrl = function(sRelativeUrl) {
		if (!jQuery.sap.startsWith(sRelativeUrl, "/")) {
			sRelativeUrl = "/" + sRelativeUrl;
		}
		var oUri = URI(sRelativeUrl).absoluteTo("");
		return oUri.toString();
	};

	/**
	 * Get the default header for a request
	 *
	 * @returns {Object} Returns an object containing all headers for each request
	 * @private
	 */
	Connector.prototype._getDefaultHeader = function() {
		var mHeaders = {
			headers: {
				"X-CSRF-Token": this._sXsrfToken || "fetch"
			}
		};
		return mHeaders;
	};

	/**
	 * Get the default options, required for the jQuery.ajax request
	 *
	 * @param {String} sMethod - HTTP-method (PUT, POST, GET (default)...) used for this request
	 * @param {String} sContentType - Set the content-type manually and overwrite the default (application/json)
	 * @param {Object} oData - Payload of the request
	 * @returns {Object} Returns an object containing the options and the default header for a jQuery.ajax request
	 *
	 * @private
	 *
	 */
	Connector.prototype._getDefaultOptions = function(sMethod, sContentType, oData) {
		var mOptions;
		if (!sContentType) {
			sContentType = this.DEFAULT_CONTENT_TYPE;
		}

		mOptions = jQuery.extend(true, this._getDefaultHeader(), {
			type: sMethod,
			async: true,
			contentType: sContentType,
			data: JSON.stringify(oData),
			dataType: 'json',
			processData: false,
			xhrFields: {
				withCredentials: true
			},
			headers: {
				"Content-Type": sContentType
			}
		});

		if (sMethod === 'DELETE') {
			delete mOptions.data;
			delete mOptions.contentType;
		}

		return mOptions;
	};

	/**
	 * Send a request to the backend
	 *
	 * @param {String} sUri
	 *   Relative url for this request
	 * @param {String} sMethod
	 *   HTTP-method to be used by this request (default GET)
	 * @param {Object} oData
	 *   Payload of the request
	 * @param {Object} mOptions
	 *   Additional options which should be used in the request
	 * @returns {Promise}
	 *   Returns a promise to the result of the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#send
	 * @public
	 */
	Connector.prototype.send = function(sUri, sMethod, oData, mOptions) {
		sMethod = sMethod || "GET";
		sMethod = sMethod.toUpperCase();
		mOptions = mOptions || {};
		sUri = this._resolveUrl(sUri);

		if (mOptions.success || mOptions.error) {
			var sErrorMessage = "Success and error handler are not allowed in mOptions";
			throw new Error(sErrorMessage);
		}

		mOptions = jQuery.extend(true, this._getDefaultOptions(sMethod, this.DEFAULT_CONTENT_TYPE, oData), mOptions);

		return this._sendAjaxRequest(sUri, mOptions);
	};

	/**
	 * @param {String} sUri - Complete request url
	 * @param {Object} mOptions - Options to be used by the request
	 * @returns {Promise} Returns a Promise with the status and response
	 *
	 * @private
	 */
	Connector.prototype._sendAjaxRequest = function(sUri, mOptions) {
		var that = this;
		var sFetchXsrfTokenUrl = "/sap/bc/lrep/actions/getcsrftoken/";
		var mFetchXsrfTokenOptions = {
			headers: {
				'X-CSRF-Token': 'fetch'
			},
			type: "HEAD"
		};

		if (this._sClient) {
			mFetchXsrfTokenOptions.headers['sap-client'] = this._sClient;
		}

		return new Promise(function(resolve, reject) {
			function handleValidRequest(oResponse, sStatus, oXhr) {

				var sNewCsrfToken = oXhr.getResponseHeader("X-CSRF-Token");
				that._sXsrfToken = sNewCsrfToken || that._sXsrfToken;

				var result = {
					status: sStatus,
					response: oResponse
				};

				resolve(result);
			}

			function fetchTokenAndHandleRequest(oResponse, sStatus, oXhr) {
				that._sXsrfToken = oXhr.getResponseHeader("X-CSRF-Token");
				mOptions.headers = mOptions.headers || {};
				mOptions.headers["X-CSRF-Token"] = that._sXsrfToken;

				//Resend request after fetching token
				jQuery.ajax(sUri, mOptions).done(handleValidRequest).fail(function(oXhr, sStatus, sErrorThrown) {
					reject({
						status: "error"
					});
				});
			}

			if (!that._sXsrfToken || that._sXsrfToken === "fetch") {
				//Fetch XSRF Token
				jQuery.ajax(sFetchXsrfTokenUrl, mFetchXsrfTokenOptions).done(fetchTokenAndHandleRequest).fail(function(oXhr, sStatus, sErrorThrown) {
					//Fetching XSRF Token failed
					reject({
						status: "error"
					});
				});
			} else {
				//Send normal request
				jQuery.ajax(sUri, mOptions).done(handleValidRequest).fail(function(oXhr, sStatus, sErrorThrown) {
					if (oXhr.status === 403) {
						//Token seems to be invalid, refetch and then resend
						jQuery.ajax(sFetchXsrfTokenUrl, mFetchXsrfTokenOptions).done(fetchTokenAndHandleRequest).fail(function(oXhr, sStatus, sErrorThrown) {
							//Fetching XSRF Token failed
							reject({
								status: "error"
							});
						});
					} else {
						var result = {
							status: sStatus
						};
						reject(result);
					}
				});
			}
		});
	};

	/**
	 * Loads the changes for the given component class name.
	 *
	 * @see sap.ui.core.Component
	 *
	 * @param {String} sComponentClassName - Component class name
	 * @returns {Promise} Returns a Promise with the changes and componentClassName
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#loadResource
	 * @public
	 */
	Connector.prototype.loadChanges = function(sComponentClassName) {
		//Example for sComponentClassName: "smartFilterBar.Component"

		try {
			var resourceName = jQuery.sap.getResourceName(sComponentClassName, "-changes.json");
		} catch (e) {
			return Promise.reject(e);
		}

		var params = {
			async: true,
			dataType: "json",
			failOnError: true,
			headers: {
				"X-UI5-Component": sComponentClassName
			}
		};

		if (this._sClient) {
			params.headers["sap-client"] = this._sClient;
		}

		return jQuery.sap.loadResource(resourceName, params).then(function(aChanges) {
			var result = {
				changes: aChanges,
				componentClassName: sComponentClassName
			};
			return result;
		});
	};

	/**
	 * @param {Array} aParams
	 *   Array of parameter objects in format {name:<name>, value:<value>}
	 * @returns {String}
	 *     Returns a String with all parameters concatenated
	 *
	 * @private
	 */
	Connector.prototype._buildParams = function(aParams) {
		if (!aParams) {
			aParams = [];
		}
		if (this._sClient) {
			//Add mandatory 'sap-client' parameter
			aParams.push({
				name: "sap-client",
				value: this._sClient
			});
		}

		if (this._sLanguage) {
			//Add mandatory 'sap-language' url parameter.
			//sap-language shall be used only if there is a sap-language parameter in the original url.
			//If sap-language is not added, the browser language might be used as backend login language instead of sap-language.
			aParams.push({
				name: "sap-language",
				value: this._sLanguage
			});
		}

		var result = "";
		var len = aParams.length;
		for ( var i = 0; i < len; i++) {
			if (i === 0) {
				result += "?";
			} else if (i > 0 && i < len) {
				result += "&";
			}
			result += aParams[i].name + "=" + aParams[i].value;
		}
		return result;
	};

	/**
	 * The URL prefix of the REST API for example /sap/bc/lrep/changes/.
	 * @param {Boolean} bIsVariant - is variant?
	 * @returns {String} url prefix
	 *
	 * @private
	 */
	Connector.prototype._getUrlPrefix = function(bIsVariant) {
		if (bIsVariant) {
			return "/sap/bc/lrep/variants/";
		}
		return "/sap/bc/lrep/changes/";
	};

	/**
	 * Creates a change or variant via REST call.
	 *
	 * @param {Object} oPayload
	 *    The content which is send to the server
	 * @param {String} sChangelist (optional)
	 *    The transport ID.
	 * @param {Boolean} isVariant - is variant?
	 * @returns {Object}
	 *     Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#create
	 * @public
	 *
	 */
	Connector.prototype.create = function(oPayload, sChangelist, bIsVariant) {
		var sRequestPath = this._getUrlPrefix(bIsVariant);

		var aParams = [];
		if (sChangelist) {
			aParams.push({
				name: "changelist",
				value: sChangelist
			});
		}

		sRequestPath += this._buildParams(aParams);

		return this.send(sRequestPath, "POST", oPayload, null);
	};

	/**
	 * Update a change or variant via REST call.
	 *
	 * @param {Object} oPayload
	 *    The content which is send to the server
	 * @param {String} sChangeName
	 *    Name of the change
	 * @param {String} sChangelist (optional)
	 *    The transport ID.
	 * @param {Boolean} bIsVariant - is variant?
	 * @returns {Object} Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#update
	 * @public
	 */
	Connector.prototype.update = function(oPayload, sChangeName, sChangelist, bIsVariant) {
		var sRequestPath = this._getUrlPrefix(bIsVariant);
		sRequestPath += sChangeName;

		var aParams = [];
		if (sChangelist) {
			aParams.push({
				name: "changelist",
				value: sChangelist
			});
		}

		sRequestPath += this._buildParams(aParams);

		return this.send(sRequestPath, "PUT", oPayload, null);
	};

	/**
	 * Delete a change or variant via REST call.
	 *
	 * @param {String} mParameters.sChangeName - name of the change
	 * @param {String} [mParameters.sLayer='USER'] - other possible layers: VENDOR,PARTNER,CUSTOMER
	 * @param {String} mParameters.sNamespace - the namespace of the change file
	 * @param {String} mParameters.sChangelist - The transport ID.
	 * @param {Boolean} bIsVariant - is it a variant?
	 * @returns {Object} Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#deleteChange
	 * @public
	 *
	 */
	Connector.prototype.deleteChange = function(mParameters, bIsVariant) {
		var sRequestPath = this._getUrlPrefix(bIsVariant);
		sRequestPath += mParameters.sChangeName;

		var aParams = [];
		if (mParameters.sLayer) {
			aParams.push({
				name: "layer",
				value: mParameters.sLayer
			});
		}
		if (mParameters.sNamespace) {
			aParams.push({
				name: "namespace",
				value: mParameters.sNamespace
			});
		}
		if (mParameters.sChangelist) {
			aParams.push({
				name: "changelist",
				value: mParameters.sChangelist
			});
		}

		sRequestPath += this._buildParams(aParams);

		return this.send(sRequestPath, "DELETE", {}, null);
	};

	/**
	 * Authenticated access to a resource in the Lrep
	 *
	 * @param {String} sNamespace
	 *    The abap package goes here. It is needed to identify the change. Default LREP namespace is "localchange".
	 * @param {String} sName
	 *    Name of the change
	 * @param {String} sType
	 *    File type extension
	 * @param {Boolean} bIsRuntime
	 *    The stored file content is handed over to the lrep provider that can dynamically adjust the content to the runtime context
	 *    (e.g. do text replacement to the users' logon language) before
	 * @returns {Object}
	 *     Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#getStaticResource
	 * @public
	 */
	Connector.prototype.getStaticResource = function(sNamespace, sName, sType, bIsRuntime) {
		var sApiPath = "/sap/bc/lrep/content/";
		var sRequestPath = sApiPath;
		sRequestPath += sNamespace + "/" + sName + "." + sType;

		var aParams = [];
		if (bIsRuntime === true) {
			aParams.push({
				name: "rt",
				value: "true"
			});
		}

		sRequestPath += this._buildParams(aParams);

		return this.send(sRequestPath, "GET", {}, null);
	};

	/**
	 * Retrieves the file attributes for a given resource in the LREP.
	 *
	 * @param {String} sNamespace
	 *    The abap package goes here. It is needed to identify the change. Default LREP namespace is "localchange".
	 * @param {String} sName
	 *    Name of the change
	 * @param {String} sType
	 *    File type extension
	 * @param {String} sLayer
	 *    File layer
	 * @returns {Object}
	 *     Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#getFileAttributes
	 * @public
	 */
	Connector.prototype.getFileAttributes = function(sNamespace, sName, sType, sLayer) {
		var sApiPath = "/sap/bc/lrep/content/";
		var sRequestPath = sApiPath;
		sRequestPath += sNamespace + "/" + sName + "." + sType;

		var aParams = [];
		aParams.push({
			name: "metadata",
			value: "true"
		});

		if (sLayer) {
			aParams.push({
				name: "layer",
				value: sLayer
			});
		}

		sRequestPath += this._buildParams(aParams);

		return this.send(sRequestPath, "GET", {}, null);
	};

	/**
	 * Upserts a given change or variant via REST call.
	 *
	 * @param {String} sNamespace
	 *    The abap package goes here. It is needed to identify the change. Default LREP namespace is "localchange".
	 * @param {String} sName
	 *    Name of the change
	 * @param {String} sType
	 *    File type extension
	 * @param {String} sLayer
	 *    File layer
	 * @param {String} sChangelist
	 *    The transport ID
	 * @returns {Object}
	 *     Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#upsert
	 * @public
	 */
	Connector.prototype.upsert = function(sNamespace, sName, sType, sLayer, sChangelist) {
		var that = this;
		return Promise.resolve(that._fileAction("PUT", sNamespace, sName, sType, sLayer, sChangelist));
	};

	/**
	 * Delete a file via REST call.
	 *
	 * @param {String} sNamespace
	 *    The abap package goes here. It is needed to identify the change. Default LREP namespace is "localchange".
	 * @param {String} sName
	 *    Name of the change
	 * @param {String} sType
	 *    File type extension
	 * @param {String} sLayer
	 *    File layer
	 * @param {String} sChangelist
	 *    The transport ID
	 * @returns {Object}
	 *     Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#deleteFile
	 * @public
	 */
	Connector.prototype.deleteFile = function(sNamespace, sName, sType, sLayer, sChangelist) {
		return this._fileAction("DELETE", sNamespace, sName, sType, sLayer, sChangelist);
	};

	Connector.prototype._fileAction = function(sMethod, sNamespace, sName, sType, sLayer, sChangelist) {
		var sApiPath = "/sap/bc/lrep/content/";
		var sRequestPath = sApiPath;
		sRequestPath += sNamespace + "/" + sName + "." + sType;

		var aParams = [];
		aParams.push({
			name: "layer",
			value: sLayer
		});

		if (sChangelist) {
			aParams.push({
				name: "changelist",
				value: sChangelist
			});
		}

		sRequestPath += this._buildParams(aParams);

		return this.send(sRequestPath, sMethod.toUpperCase(), {}, null);
	};

	/**
	 * @param {String} sOriginNamespace
	 *    The abap package goes here. It is needed to identify the change. Default LREP namespace is "localchange".
	 * @param {String} sName
	 *    Name of the change
	 * @param {String} sType
	 *    File type extension
	 * @param {String} sOriginLayer
	 *    File layer
	 * @param {String} sTargetLayer
	 *   File where the new Target-Layer
	 * @param {String} sChangelist The changelist where the file will be written to
	 * @returns {Object}
	 *     Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#publish
	 * @private Private for now, as is not in use.
	 */
	Connector.prototype.publish = function(sOriginNamespace, sName, sType, sOriginLayer, sTargetLayer, sTargetNamespace, sChangelist) {
		var sApiPath = "/sap/bc/lrep/actions/publish/";
		var sRequestPath = sApiPath;
		sRequestPath += sOriginNamespace + "/" + sName + "." + sType;

		var aParams = [];
		if (sOriginLayer) {
			aParams.push({
				name: "layer",
				value: sOriginLayer
			});
		}
		if (sTargetLayer) {
			aParams.push({
				name: "target-layer",
				value: sTargetLayer
			});
		}
		if (sTargetNamespace) {
			aParams.push({
				name: "target-namespace",
				value: sTargetNamespace
			});
		}
		if (sChangelist) {
			aParams.push({
				name: "changelist",
				value: sChangelist
			});
		}

		sRequestPath += this._buildParams(aParams);

		return this.send(sRequestPath, "POST", {}, null);
	};

	/**
	 * Retrieves the content for a given namespace and layer via REST call.
	 *
	 * @param {String} sNamespace - The file namespace goes here. It is needed to identify the change.
	 * @param {String} sLayer - File layer
	 * @returns {Object} Returns the result from the request
	 *
	 * @function
	 * @name sap.ui.fl.LrepConnector#listContent
	 * @public
	 */
	Connector.prototype.listContent = function(sNamespace, sLayer) {
		var sRequestPath = "/sap/bc/lrep/content/";
		sRequestPath += sNamespace;

		var aParams = [];
		if (sLayer) {
			aParams.push({
				name: "layer",
				value: sLayer
			});
		}

		sRequestPath += this._buildParams(aParams);

		return this.send(sRequestPath, "GET", {}, null);
	};

	return Connector;
}, true);
