/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.charts.ChartRenderer");sap.ca.ui.charts.ChartRenderer={render:function(r,c){if(!c.getDataset()){return}r.write("<div");r.writeControlData(c);r.addClass('sapCaUiChart');if(!c.getShowHoverBackground()){r.addClass('sapCaUiChartNoHover')}r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeClasses();r.writeStyles();r.write('>');r.renderControl(c.getAggregation('internalContent'));r.write('</div>')}};
