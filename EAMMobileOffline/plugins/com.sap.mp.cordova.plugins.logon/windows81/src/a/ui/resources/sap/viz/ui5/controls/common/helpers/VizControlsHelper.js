/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP AG. All rights reserved
 */
jQuery.sap.declare('sap.viz.ui5.controls.common.helpers.VizControlsHelper');sap.viz.ui5.controls.common.helpers.VizControlsHelper={};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFeedInstances=function(f){if(f){return sap.viz.ui5.controls.common.feeds.FeedItem.toInstances(f)}else{return[]}};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFakedDataInstance=function(v,a,f){var g=sap.viz.ui5.controls.common.helpers.VizControlsHelper.getFeedInstances;var b=sap.viz.ui5.controls.common.helpers.VizControlsHelper.getDataInstance;var d=b(a);if(d){var c=new sap.viz.controls.services.FakeDataService(v,JSON.parse(JSON.stringify(d.data())),g(f));d=new sap.viz.api.data.CrosstableDataset();d.data(c.getVizDataset());return d}else{return null}};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.getDataInstance=function(v){if(v){return v.getVIZDataset()}else{return null}};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.updateFeedsByAAIndex=function(v,f){if(!f||f.length===0||f.length===1){return f}var a=sap.viz.api.manifest.Viz.get(v)[0];if(a&&a.allFeeds()){var b=a.allFeeds();var c={};for(var i=0;i<b.length;i++){c[b[i].id]=b[i]}f.sort(function(d,e){var g=c[d.getUid()];var h=c[e.getUid()];var p=g.aaIndex?g.aaIndex:g.aaIndex+1000;var j=h.aaIndex?h.aaIndex:h.aaIndex+1000;return p-j})}};
sap.viz.ui5.controls.common.helpers.VizControlsHelper.getSwitchBarGroups=function(){var L=sap.viz.controls.common.managers.LangManager;var s=[{"name":L.get("VIZ_SWITCHBAR_COLUMN_CHARTS"),"types":[{"id":"viz/column"},{"id":"viz/stacked_column"},{"id":"viz/dual_column"}]},{"name":L.get("VIZ_SWITCHBAR_LINE_CHARTS"),"types":[{"id":"viz/line"},{"id":"viz/area"},{"id":"viz/combination"},{"id":"viz/dual_line"},{"id":"viz/dual_combination"}]},{"name":L.get("VIZ_SWITCHBAR_PIE_CHARTS"),"types":[{"id":"viz/pie"},{"id":"viz/donut"}]},{"name":L.get("VIZ_SWITCHBAR_SCATTER_CHARTS"),"types":[{"id":"viz/scatter"},{"id":"viz/bubble"}]},{"name":L.get("VIZ_SWITCHBAR_MAP_CHARTS"),"types":[{"id":"viz/heatmap"},{"id":"viz/treemap"}]}];return s};
