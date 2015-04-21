/*
 * Copyright (c) 2014 MobileIron. All rights reserved.
 *
 * YOUR USE AND DISTRIBUTION OF THIS SOFTWARE IS SUBJECT TO THE SOFTWARE DEVELOPMENT KIT (SDK) AGREEMENT BETWEEN
 * YOU AND MOBILE IRON, INC. (“MI”). USE OR DISTRIBUTION NOT IN STRICT ACCORDANCE WITH THE AGREEMENT IS PROHIBITED.
 */

/* Defines the AppConnect object.
 */

var AppConnectCordova = function () {
    
}

// An enum listing the states of policies. When an application receives notification that a policy has changed, it
// must call the corresponding acknowledgement function and provide one of these values.
AppConnectCordova.prototype.ACPolicyState = {
    UNSUPPORTED: 0, // The policy is not supported by this application
    APPLIED: 1,     // The policy was applied successfully
    ERROR: 2        // An error occurred applying the policy
}

// An enum listing all possible managed policies
AppConnectCordova.prototype.ACManagedPolicy = {
    UNKNOWN:  0,  // The AppConnect library has not yet determined whether the app is managed by MobileIron
    UNMANAGED: 1, // The application is not currently managed by MobileIron
    MANAGED: 2    // The application is currently managed by MobileIron
}

// An enum listing all possible authorization states
AppConnectCordova.prototype.ACAuthState = {
    UNAUTHORIZED: 0,
    AUTHORIZED: 1,
    RETIRED: 2
}

// An enum listing all possible pasteboard policies
AppConnectCordova.prototype.ACPasteboardPolicy = {
    UNAUTHORIZED:  0, // The application may not write data to the pasteboard.
    AUTHORIZED:  1    // The application may write data to the pasteboard.
}

// An enum listing all possible open in policies
AppConnectCordova.prototype.ACOpenInPolicy = {
    UNAUTHORIZED:  0, // The application may not use Open In.
    AUTHORIZED:  1,   // The application may use Open In.
    WHITELIST: 2      // The application may only use Open In to send documents to applications in the whitelist
}

// An enum listing all possible print policies
AppConnectCordova.prototype.ACPrintPolicy = {
    UNAUTHORIZED:  0, // The application may not use Print.
    AUTHORIZED:  1    // The application may use Print.
}

// Access AppConnect object properties. Used to get the ready state, various policy states and values.

// AppConnect version
AppConnectCordova.prototype.version = function () {
    return this._version;
}

// Is AppConnect ready
AppConnectCordova.prototype.isReady = function () {
    return this._isReady;
}

AppConnectCordova.prototype.managedPolicy = function () {
    if (!this._isReady) {
        throw new Error("Function managedPolicy() called before AppConnect is ready.");
    }

    return this._managedPolicy;
}

AppConnectCordova.prototype.authState = function () {
    if (!this._isReady) {
        throw new Error("Function authState() called before AppConnect is ready.");
    }
    
    return this._authState;
}

AppConnectCordova.prototype.authMessage = function () {
    if (!this._isReady) {
        throw new Error("Function authMessage() called before AppConnect is ready.");
    }
    
    return this._authMessage;
}

AppConnectCordova.prototype.pasteboardPolicy = function () {
    if (!this._isReady) {
        throw new Error("Function pasteboardPolicy() called before AppConnect is ready.");
    }
    
    return this._pasteboardPolicy;
}

AppConnectCordova.prototype.openInPolicy = function () {
    if (!this._isReady) {
        throw new Error("Function openInPolicy() called before AppConnect is ready.");
    }
    
    return this._openInPolicy;
}

AppConnectCordova.prototype.openInWhitelist = function () {
    if (!this._isReady) {
        throw new Error("Function openInWhitelist() called before AppConnect is ready.");
    }
    
    return this._openInWhitelist;
}

AppConnectCordova.prototype.printPolicy = function () {
    if (!this._isReady) {
        throw new Error("Function printPolicy() called before AppConnect is ready.");
    }
    
    return this._printPolicy;
}

AppConnectCordova.prototype.config = function () {
    if (!this._isReady) {
        throw new Error("Function config() called before AppConnect is ready.");
    }
    
    return this._config;
}

// Initialize AppConnect. Call this function on "deviceready"
AppConnectCordova.prototype.initialize = function (successCallback, failureCallback) {
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "initialize", ["AppConnectCordova"]);
}

// Retire the AppConnect app
AppConnectCordova.prototype.retire = function (successCallback, failureCallback) {
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "retire");
}

// Stop the AppConnect library
AppConnectCordova.prototype.stop = function (successCallback, failureCallback) {
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "stop");
}


// ------------- Functions for closed loop on AppConnect policies ---------------

// Call after applying the Auth State policy
AppConnectCordova.prototype.authStateApplied = function (policyState, message, successCallback, failureCallback) {
    if (policyState === undefined) {
        throw new Error("authStateApplied(): policyState must be specified.");
    }
    
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "authStateApplied", [policyState, message]);
}

// Call after applying the App Config policy
AppConnectCordova.prototype.configApplied = function (policyState, message, successCallback, failureCallback) {
    if (policyState === undefined) {
        throw new Error("configApplied(): policyState must be specified.");
    }
    
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "configApplied", [policyState, message]);
}

// Call after applying the Open-In policy
AppConnectCordova.prototype.openInPolicyApplied = function (policyState, message, successCallback, failureCallback) {
    if (policyState === undefined) {
        throw new Error("openInPolicyApplied(): policyState must be specified.");
    }

    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "openInPolicyApplied", [policyState, message]);
}

// Call after applying the Pasteboard policy
AppConnectCordova.prototype.pasteboardPolicyApplied = function (policyState, message, successCallback, failureCallback) {
    if (policyState === undefined) {
        throw new Error("pasteboardPolicyApplied(): policyState must be specified.");
    }
    
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "pasteboardPolicyApplied", [policyState, message]);
}

// Call after applying the Print policy
AppConnectCordova.prototype.printPolicyApplied = function (policyState, message, successCallback, failureCallback) {
    if (policyState === undefined) {
        throw new Error("printPolicyApplied(): policyState must be specified.");
    }
    
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "printPolicyApplied", [policyState, message]);
}

// Function to display a message in the MobileIron Client
AppConnectCordova.prototype.displayMessage = function (message, successCallback, failureCallback) {
    if (message === undefined) {
        throw new Error("displayMessage(): First argument (message) must be specified.");
    }
    
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "displayMessage", [message]);
}

// Enable/Disable local caching for tunneled requests
AppConnectCordova.prototype.allowLocalCachingForTunneledRequests = function (flag, successCallback, failureCallback) {
    if (flag === undefined) {
        throw new Error("allowLocalCachingForTunneledRequests(): First argument (flag) must be specified.");
    }
    
    this.callNative(this.handleUndefined(successCallback, this.defaultSuccessCallback),
                    this.handleUndefined(failureCallback, this.defaultFailureCallback),
                    "allowLocalCachingForTunneledRequests", flag);
}

// Helper routines

AppConnectCordova.prototype.defaultSuccessCallback = function (msg) {
    // console.log("SUCCESS in AppConnectCordova callback: " + msg)
}

AppConnectCordova.prototype.defaultFailureCallback = function (msg) {
    // console.log("ERROR in AppConnectCordova callback: " + msg)
}

AppConnectCordova.prototype.handleUndefined = function (callback, alternateCallback) {
    if (callback === undefined) {
        return alternateCallback;
    }
    else {
        return callback;
    }
}

AppConnectCordova.prototype.callNative = function (successCallback, failureCallback, name, args) {
    if (arguments.length <= 3) {
        args = []
    }
    ret = cordova.exec(successCallback, failureCallback, 'AppConnectCordovaPlugin', name, args);
    return ret;
}

module.exports = new AppConnectCordova();