/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.model.type.Time");jQuery.sap.require("sap.ca.ui.model.type.Date");sap.ca.ui.model.type.Date.extend("sap.ca.ui.model.type.Time",{constructor:function(){sap.ca.ui.model.type.Date.apply(this,arguments);this.sName="Time"}});
sap.ca.ui.model.type.Time.prototype._handleLocalizationChange=function(){this.oOutputFormat=sap.ca.ui.model.format.DateFormat.getTimeInstance(this.oFormatOptions);if(this.oFormatOptions.source){this.oInputFormat=sap.ca.ui.model.format.DateFormat.getTimeInstance(this.oFormatOptions.source)}};
