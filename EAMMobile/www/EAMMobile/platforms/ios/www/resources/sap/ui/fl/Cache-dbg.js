/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */
/*global Promise */

sap.ui.define([  ], function() {

	/**
	 * Helper object to access a change from the backend.
	 * Access helper object for each change (and variant) which was fetched from the backend
	 *
	 * @namespace
	 * @alias sap.ui.fl.Cache
	 * @experimental Since 1.25.0
	 * @author SAP SE
	 * @version ${version}
	 */
	var Cache = function() {
		
	};
	
	Cache._isOn = true;
	
	//  { compoentName : { attached : [], resolve : function() {} }
	Cache._entries = {
			
	};
	
	/**
	 * Indicates if the cache is active or not (for testing)
	 * 
	 * @returns {boolean}
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Cache.isActive
	 */
	Cache.isActive = function() {
		return Cache._isOn;
	};
	
	/**
	 * Sets the active state
	 * 
	 * @param {boolean} bActive - cache active or not
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Cache.setActive
	 */
	Cache.setActive = function(bActive) {
		Cache._isOn = bActive;
	};

	/**
	 * This method retrieves the changes for a given
	 * component. It answers all subsequent calls with the same promise, which
	 * will resolve with the same result. In the success case, it will keep the
	 * promise to resolve all calls in future event loop execution paths with 
	 * the same result. In case of an error, it will delete the initial promise
	 * to give calls from future execution paths the chance to re-request the 
	 * changes from the backend.
	 *
	 * If the cache is not active, the method just delegates the call to the
	 * loadChanges method of the given LrepConnector.
	 * 
	 * @param {sap.ui.fl.LrepConnector} oLrepConnector - LrepConnector instance to retrieve the changes with
	 * @param {string} sComponentName - the component name to retrieve the changes for
	 * @returns {Promise} resolves with the change file for the given component, either from cache or backend
	 *
	 * @public
	 * @function
	 * @name sap.ui.fl.Cache.getChangesFillingCache
	 */
	Cache.getChangesFillingCache = function(oLrepConnector, sComponentName) {
		if (!this.isActive()) {
			return oLrepConnector.loadChanges(sComponentName);
		}

		var oCacheEntry = Cache._entries[sComponentName];

		if (!oCacheEntry) {
			oCacheEntry = Cache._entries[sComponentName] = {};
		}

		if (oCacheEntry.promise) {
			return oCacheEntry.promise;
		}

		var currentLoadChanges = oLrepConnector.loadChanges(sComponentName).then(function(mChanges) {
			if (oCacheEntry.file) {
				jQuery.sap.log.error('sap.ui.fl.Cache: Cached changes for component ' + sComponentName + ' overwritten.');
			}
			oCacheEntry.file = mChanges;
			return oCacheEntry.file;
		}, function(err) {
			delete oCacheEntry.promise;
			throw err;
		});

		oCacheEntry.promise = currentLoadChanges;

		return currentLoadChanges;
	};

	/**
	 * @private
	 *
	 * @param {string} sComponentName
	 * @returns {array}
	 */
	Cache._getChangeArray = function(sComponentName) {
		var oEntry = Cache._entries[sComponentName];
		if(oEntry) {
			if(oEntry.file) {
				return oEntry.file.changes.changes;
			}
		}
	};
	
	/**
	 * Add a change for the given component to the cached changes.
	 *
	 * @param {string} sComponentName
	 * @param {object} oChange
	 * @public
	 * @function
	 * @name sap.ui.fl.Cache.addChange
	 */
	Cache.addChange = function(sComponentName, oChange) {
		var aChanges = Cache._getChangeArray(sComponentName);

		if (!aChanges){
			return;
		}

		aChanges.push(oChange);
	};

	/**
	 * Updates a change for the given component in the cached changes.
	 *
	 * @param {string} sComponentName
	 * @param {object} oChange
	 * @public
	 * @function
	 * @name sap.ui.fl.Cache.updateChange
	 */
	Cache.updateChange = function(sComponentName, oChange) {
		var aChanges = Cache._getChangeArray(sComponentName);

		if (!aChanges){
			return;
		}

		for (var i = 0; i < aChanges.length; i++) {
			if(aChanges[i].fileName === oChange.fileName) {
				aChanges.splice(i, 1, oChange);
				break;
			}
		}
	};

	/**
	 * Delete a change for the given component from the cached changes.
	 *
	 * @param {string} sComponentName
	 * @param {object} oChange
	 * @public
	 * @function
	 * @name sap.ui.fl.Cache.deleteChange
	 */
	Cache.deleteChange = function(sComponentName, oChange) {
		var aChanges = Cache._getChangeArray(sComponentName);

		if (!aChanges){
			return;
		}

		for (var i = 0; i < aChanges.length; i++) {
			if(aChanges[i].fileName === oChange.fileName) {
				aChanges.splice(i, 1);
				break;
			}
		}
	};

	return Cache;
}, /* bExport= */true);
