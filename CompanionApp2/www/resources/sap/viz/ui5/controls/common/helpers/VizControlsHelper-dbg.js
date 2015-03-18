/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */

jQuery.sap.declare('sap.viz.ui5.controls.common.helpers.VizControlsHelper');

sap.viz.ui5.controls.common.helpers.VizControlsHelper = {};

sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFeedInstances = function(feeds) {
    if (feeds) {
        return sap.viz.ui5.controls.common.feeds.FeedItem.toInstances(feeds);
    } else {
        return [];
    }
};

sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFakedDataInstance = function(vizType, vizData, feeds) {
    var getFeedInstances = sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFeedInstances;
    var getDataInstance = sap.viz.ui5.controls.common.helpers.VizControlsHelper.getDataInstance;

    var dataInstance = getDataInstance(vizData);
    if (dataInstance) {
        var fs = new sap.viz.controls.services.FakeDataService(vizType, JSON.parse(JSON.stringify(dataInstance.data())), getFeedInstances(feeds));

        dataInstance = new sap.viz.api.data.CrosstableDataset();
        dataInstance.data(fs.getVizDataset());
        return dataInstance;
    } else {
        return null;
    }
};

sap.viz.ui5.controls.common.helpers.VizControlsHelper.getDataInstance = function(vizData) {
    if (vizData) {
        return vizData.getVIZDataset();
    } else {
        return null;
    }
};

/**
 * Update feeds in sequences of aaIndexs of manifest
 */
sap.viz.ui5.controls.common.helpers.VizControlsHelper.updateFeedsByAAIndex = function(vizType, feeds) {
    if (!feeds || feeds.length === 0 || feeds.length === 1) {
        return feeds;
    }
    var viz = sap.viz.api.manifest.Viz.get(vizType)[0];
    if (viz && viz.allFeeds()) {
        var vizFeedDefs = viz.allFeeds();
        var vizFeedDefsMap = {};
        for (var i = 0; i < vizFeedDefs.length; i++) {
            vizFeedDefsMap[vizFeedDefs[i].id] = vizFeedDefs[i];
        }
        feeds.sort(function(f1, f2) {
            var feedDef1 = vizFeedDefsMap[f1.getUid()];
            var feedDef2 = vizFeedDefsMap[f2.getUid()];
            var priority1 = feedDef1.aaIndex ? feedDef1.aaIndex : feedDef1.aaIndex + 1000;
            var priority2 = feedDef2.aaIndex ? feedDef2.aaIndex : feedDef2.aaIndex + 1000;
            return priority1 - priority2;
        });
    }
};

sap.viz.ui5.controls.common.helpers.VizControlsHelper.getSwitchBarGroups = function() {
    var LangManager = sap.viz.controls.common.managers.LangManager;

    var switchBarGroups = [{
        "name" : LangManager.get("VIZ_SWITCHBAR_COLUMN_CHARTS"),
        "types" : [{
            "id" : "viz/column"
        }, {
            "id" : "viz/stacked_column"
        }, {
            "id" : "viz/dual_column"
        }]
    }, {
        "name" : LangManager.get("VIZ_SWITCHBAR_LINE_CHARTS"),
        "types" : [{
            "id" : "viz/line"
        }, {
            "id" : "viz/area"
        }, {
            "id" : "viz/combination"
        }, {
            "id" : "viz/dual_line"
        }, {
            "id" : "viz/dual_combination"
        }]
    }, {
        "name" : LangManager.get("VIZ_SWITCHBAR_PIE_CHARTS"),
        "types" : [{
            "id" : "viz/pie"
        }, {
            "id" : "viz/donut"
        }]
    }, {
        "name" : LangManager.get("VIZ_SWITCHBAR_SCATTER_CHARTS"),
        "types" : [{
            "id" : "viz/scatter"
        }, {
            "id" : "viz/bubble"
        }]
    }, {
        "name" : LangManager.get("VIZ_SWITCHBAR_MAP_CHARTS"),
        "types" : [{
            "id" : "viz/heatmap"
        }, {
            "id" : "viz/treemap"
        }]
    }];

    return switchBarGroups;
};
