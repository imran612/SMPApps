    module.exports = {

        length: function (success, fail, args) {
            //cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            //              "length", [storageName, storagePassword, isAutoCleanup]);
            var storageName = args[0];
            var storagePassword = "";
            //var isAutoCleanup = args[2];
            var db = new SAP.EncryptedStorage.StorageDbAsync(storageName, storagePassword);
            db.length().then(function (len) {
                success(len);
            },
            function (err) {
                _handleError(fail, err.message);
            });
        },


        key: function (success, fail, args) {
            //cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            //                "key", [storageName, storagePassword, index, isAutoCleanup]);

            var storageName = args[0];
            var storagePassword = ""; // ignore.
            var index = args[1];
            //var isAutoCleanup = args[3];


            var db = new SAP.EncryptedStorage.StorageDbAsync(storageName, storagePassword);
            db.key(index).then(
                function (result) {
                    _filterNullString(success, result);
                },
                function (err) {
                    _handleError(fail, err.message);
                });
        },

        getItem: function (success, fail, args) {
            //cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            //                "getItem", [storageName, storagePassword, key, isAutoCleanup]);
            var storageName = args[0];
            var storagePassword = ""; // ignore.
            var key = args[1];
            //var isAutoCleanup = args[3];


            var db = new SAP.EncryptedStorage.StorageDbAsync(storageName, storagePassword);
            db.getItem(key).then(
                function (result) {
                    _filterNullString(success, result);
                },
                function (err) {
                    _handleError(fail, err.message);
                });

        },

        setItem: function (success, fail, args) {
            //cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            //                  "setItem", [storageName, storagePassword, key, value, isAutoCleanup]);
            var storageName = args[0];
            var storagePassword = ""; // ignore.
            var key = args[1];
            var value = args[2];
            //var isAutoCleanup = args[4];

            var db = new SAP.EncryptedStorage.StorageDbAsync(storageName, storagePassword);
            db.setItem(key, value).then(
                function () {
                    success();
                },
                function (err) {
                    _handleError(fail, err.message);
                });

        },

        removeItem: function (success, fail, args) {
            //cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            //              "removeItem", [storageName, storagePassword, key, isAutoCleanup]);
            var storageName = args[0];
            var storagePassword = ""; // ignore.
            var key = args[1];
            //var isAutoCleanup = args[3];

            var db = new SAP.EncryptedStorage.StorageDbAsync(storageName, storagePassword);
            db.removeItem(key).then(
                function () {
                    success();
                },
                function (err) {
                    _handleError(fail, err.message);
                });

        },

        clear: function (success, fail, args) {
            //         cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            //                "clear", [storageName, storagePassword, isAutoCleanup]);
            var storageName = args[0];
            var storagePassword = ""; // ignore.
            //var isAutoCleanup = args[2];
            var db = new SAP.EncryptedStorage.StorageDbAsync(storageName, storagePassword);
            db.clear().then(
                function () {
                    success();
                },
                function (err) {
                    _handleError(fail, err.message);
                });

        },

        deleteStore: function (success, fail, args) {
            //    	cordova.exec(successCallback, errorCallback, "EncryptedStorage",
            //                  "deleteStore", [storageName, storagePassword, isAutoCleanup]);
            var storageName = args[0];
            var storagePassword = ""; // ignore.
            //var isAutoCleanup = args[2];

            var db = new SAP.EncryptedStorage.StorageDbAsync(storageName, storagePassword);
            db.deleteStore().then(
                function () {
                    success();
                },
                function (err) {
                    _handleError(fail, err.message);
                });

        }
    };


    function _handleError(errorCallback, errorMessage) {
        if (errorCallback != null) {
            var errorCode = 0;
            if (errorMessage != null && errorMessage !== undefined) {
                var ERROR_CODE_STR = "error code:";
                var chunks = errorMessage.split(ERROR_CODE_STR);
                if (chunks.length > 1) {
                    errorCode = parseInt(chunks[1]);
                }
            }
            errorCallback(errorCode > 1 ? errorCode : errorMessage);
        }
    }

    function _filterNullString(successCallback, result) {
        // look for null string key and convert it to null
        // since Windows Runtime Time Interface cannot support null string as parameter
        if (successCallback != null) {
            var nullPattern = SAP.EncryptedStorage.StorageDbAsync.nullStringPattern();
            var index = result.indexOf(nullPattern);
            successCallback((index >= 0) ? null : result);
        }
    }

    require("cordova/windows8/commandProxy").add("EncryptedStorage", module.exports);

