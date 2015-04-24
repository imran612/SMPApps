cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.sap.mp.cordova.plugins.authproxy/www/authproxy.js",
        "id": "com.sap.mp.cordova.plugins.authproxy.AuthProxy",
        "clobbers": [
            "sap.AuthProxy"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logon/www/common/modules/MAFLogonCorePlugin.js",
        "id": "com.sap.mp.cordova.plugins.logon.LogonCore",
        "clobbers": [
            "sap.logon.Core"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logon/www/common/modules/i18n.js",
        "id": "com.sap.mp.cordova.plugins.logon.LogonI18n",
        "clobbers": [
            "sap.logon.i18n"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logon/www/common/modules/Utils.js",
        "id": "com.sap.mp.cordova.plugins.logon.LogonUtils",
        "clobbers": [
            "sap.logon.Utils"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logon/www/common/modules/StaticScreens.js",
        "id": "com.sap.mp.cordova.plugins.logon.LogonStaticScreens",
        "clobbers": [
            "sap.logon.StaticScreens"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logon/www/common/modules/DynamicScreens.js",
        "id": "com.sap.mp.cordova.plugins.logon.LogonDynamicScreens",
        "clobbers": [
            "sap.logon.DynamicScreens"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logon/www/common/modules/LogonController.js",
        "id": "com.sap.mp.cordova.plugins.logon.Logon",
        "clobbers": [
            "sap.Logon"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logon/www/common/modules/InAppBrowserUI.js",
        "id": "com.sap.mp.cordova.plugins.logon.LogonIabUi",
        "clobbers": [
            "sap.logon.IabUi"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logon/www/common/modules/LogonJsView.js",
        "id": "com.sap.mp.cordova.plugins.logon.LogonJsView",
        "clobbers": [
            "sap.logon.LogonJsView"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.odata/www/OData.js",
        "id": "com.sap.mp.cordova.plugins.odata.OData",
        "clobbers": [
            "window.sap.OData"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.odata/www/OfflineStore.js",
        "id": "com.sap.mp.cordova.plugins.odata.OfflineStore",
        "clobbers": [
            "window.sap.OfflineStore"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.sap.mp.cordova.plugins.corelibs": "3.7.1",
    "com.sap.mp.cordova.plugins.authproxy": "3.7.1",
    "com.sap.mp.cordova.plugins.logon": "3.7.1",
    "com.sap.mp.cordova.plugins.odata": "3.7.1",
    "org.apache.cordova.device": "0.3.0",
    "org.apache.cordova.inappbrowser": "0.6.0"
}
// BOTTOM OF METADATA
});