cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.sap.mp.cordova.plugins.apppreferences/www/apppreferences.js",
        "id": "com.sap.mp.cordova.plugins.apppreferences.AppPreferences",
        "clobbers": [
            "sap.AppPreferences"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.toolbar/www/toolbar.js",
        "id": "com.sap.mp.cordova.plugins.toolbar.toolbar",
        "clobbers": [
            "window.sap.Toolbar"
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
        "file": "plugins/com.sap.mp.cordova.plugins.i18n/www/i18n.js",
        "id": "com.sap.mp.cordova.plugins.i18n.i18n"
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.appupdate/www/appupdate.js",
        "id": "com.sap.mp.cordova.plugins.appupdate.AppUpdate",
        "clobbers": [
            "sap.AppUpdate"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.logger/www/logger.js",
        "id": "com.sap.mp.cordova.plugins.logger.Logging",
        "clobbers": [
            "sap.Logger"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.encryptedstorage/www/encryptedstorage.js",
        "id": "com.sap.mp.cordova.plugins.encryptedstorage.Encrypted",
        "clobbers": [
            "sap.EncryptedStorage"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.settings/www/settings.js",
        "id": "com.sap.mp.cordova.plugins.settings.Settings",
        "clobbers": [
            "sap.Settings"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.settings/www/appsettings.js",
        "id": "com.sap.mp.cordova.plugins.settings.AppSettings",
        "merges": [
            "sap.Settings"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.push/www/push.js",
        "id": "com.sap.mp.cordova.plugins.push.Push",
        "clobbers": [
            "sap.Push"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.barcodescanner/www/barcodescanner.js",
        "id": "com.sap.mp.cordova.plugins.barcodescanner.BarcodeScanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
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
        "file": "plugins/com.sap.mp.cordova.plugins.e2etrace/www/e2etrace.js",
        "id": "com.sap.mp.cordova.plugins.e2etrace.E2ETrace",
        "clobbers": [
            "sap.E2ETrace"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
        "id": "org.apache.cordova.file.DirectoryEntry",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
        "id": "org.apache.cordova.file.DirectoryReader",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Entry.js",
        "id": "org.apache.cordova.file.Entry",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/File.js",
        "id": "org.apache.cordova.file.File",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
        "id": "org.apache.cordova.file.FileEntry",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileError.js",
        "id": "org.apache.cordova.file.FileError",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileReader.js",
        "id": "org.apache.cordova.file.FileReader",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
        "id": "org.apache.cordova.file.FileSystem",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
        "id": "org.apache.cordova.file.FileUploadOptions",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
        "id": "org.apache.cordova.file.FileUploadResult",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
        "id": "org.apache.cordova.file.FileWriter",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Flags.js",
        "id": "org.apache.cordova.file.Flags",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
        "id": "org.apache.cordova.file.LocalFileSystem",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Metadata.js",
        "id": "org.apache.cordova.file.Metadata",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
        "id": "org.apache.cordova.file.ProgressEvent",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems.js",
        "id": "org.apache.cordova.file.fileSystems"
    },
    {
        "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
        "id": "org.apache.cordova.file.requestFileSystem",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
        "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ios/FileSystem.js",
        "id": "org.apache.cordova.file.iosFileSystem",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems-roots.js",
        "id": "org.apache.cordova.file.fileSystems-roots",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystemPaths.js",
        "id": "org.apache.cordova.file.fileSystemPaths",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.battery-status/www/battery.js",
        "id": "org.apache.cordova.battery-status.battery",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/ios/CameraPopoverHandle.js",
        "id": "org.apache.cordova.camera.CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media/www/MediaError.js",
        "id": "org.apache.cordova.media.MediaError",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media/www/Media.js",
        "id": "org.apache.cordova.media.Media",
        "clobbers": [
            "window.Media"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureAudioOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureAudioOptions",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureImageOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureImageOptions",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureVideoOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureVideoOptions",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureError.js",
        "id": "org.apache.cordova.media-capture.CaptureError",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/MediaFileData.js",
        "id": "org.apache.cordova.media-capture.MediaFileData",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/MediaFile.js",
        "id": "org.apache.cordova.media-capture.MediaFile",
        "clobbers": [
            "MediaFile"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/capture.js",
        "id": "org.apache.cordova.media-capture.capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransferError.js",
        "id": "org.apache.cordova.file-transfer.FileTransferError",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file-transfer/www/FileTransfer.js",
        "id": "org.apache.cordova.file-transfer.FileTransfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/contacts.js",
        "id": "org.apache.cordova.contacts.contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/Contact.js",
        "id": "org.apache.cordova.contacts.Contact",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactAddress.js",
        "id": "org.apache.cordova.contacts.ContactAddress",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactError.js",
        "id": "org.apache.cordova.contacts.ContactError",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactField.js",
        "id": "org.apache.cordova.contacts.ContactField",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactFindOptions.js",
        "id": "org.apache.cordova.contacts.ContactFindOptions",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactName.js",
        "id": "org.apache.cordova.contacts.ContactName",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactOrganization.js",
        "id": "org.apache.cordova.contacts.ContactOrganization",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ContactFieldType.js",
        "id": "org.apache.cordova.contacts.ContactFieldType",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ios/contacts.js",
        "id": "org.apache.cordova.contacts.contacts-ios",
        "merges": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.contacts/www/ios/Contact.js",
        "id": "org.apache.cordova.contacts.Contact-iOS",
        "merges": [
            "Contact"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "id": "org.apache.cordova.globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
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
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.authproxy/www/authproxy.js",
        "id": "com.sap.mp.cordova.plugins.authproxy.AuthProxy",
        "clobbers": [
            "sap.AuthProxy"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/com.sap.mp.cordova.plugins.xhook/www/xhooks.js",
        "id": "com.sap.mp.cordova.plugins.xhook.Xhook",
        "clobbers": [
            "sap.Xhook"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.sap.mp.cordova.plugins.corelibs": "3.5.5",
    "com.sap.mp.cordova.plugins.apppreferences": "3.5.5",
    "com.sap.mp.cordova.plugins.toolbar": "3.5.5",
    "com.sap.mp.cordova.plugins.logon": "3.5.5",
    "com.sap.mp.cordova.plugins.i18n": "3.5.5",
    "com.sap.mp.cordova.plugins.appupdate": "3.5.5",
    "com.sap.mp.cordova.plugins.logger": "3.5.5",
    "com.sap.mp.cordova.plugins.encryptedstorage": "3.5.5",
    "com.sap.mp.cordova.plugins.settings": "3.5.5",
    "com.sap.mp.cordova.plugins.push": "3.5.5",
    "com.sap.mp.cordova.plugins.barcodescanner": "3.5.5",
    "com.sap.mp.cordova.plugins.odata": "3.5.5",
    "com.sap.mp.cordova.plugins.e2etrace": "3.5.5",
    "org.apache.cordova.file": "1.3.2",
    "org.apache.cordova.network-information": "0.2.14",
    "org.apache.cordova.battery-status": "0.2.12",
    "org.apache.cordova.device-motion": "0.2.11",
    "org.apache.cordova.device-orientation": "0.3.10",
    "org.apache.cordova.geolocation": "0.3.11",
    "org.apache.cordova.camera": "0.3.4",
    "org.apache.cordova.media": "0.2.15",
    "org.apache.cordova.media-capture": "0.3.5",
    "org.apache.cordova.file-transfer": "0.4.8",
    "org.apache.cordova.vibration": "0.3.12",
    "org.apache.cordova.contacts": "0.2.15",
    "org.apache.cordova.globalization": "0.3.3",
    "org.apache.cordova.splashscreen": "0.3.5",
    "org.apache.cordova.console": "0.2.12",
    "org.apache.cordova.device": "0.2.13",
    "org.apache.cordova.inappbrowser": "0.3.4-patched",
    "com.sap.mp.cordova.plugins.authproxy": "3.5.5",
    "org.apache.cordova.dialogs": "0.2.11",
    "com.sap.mp.cordova.plugins.xhook": "3.5.5"
}
// BOTTOM OF METADATA
});