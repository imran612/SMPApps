/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

jQuery.sap.declare('sap.viz.ui5.api.env.Format');

/**
 * @class Provides methods set global formatter for VizFrame. 
 *
 * As <code>Format</code> is a static class, a <code>jQuery.sap.require("sap.viz.ui5.api.env.Format");</code> statement
 * must be explicitly executed before the class can be used. Example:
 * <pre>
 *   jQuery.sap.require("sap.viz.ui5.api.env.Format");
 * </pre>
 *
 * @static
 * @public
 * @since 1.24.0
 */
sap.viz.ui5.api.env.Format = {};

/**
 * Customize the global numeric formatter. If you set a formatter, it will
 * replace the existing formatter.
 * 
 * 
 * Example:
 * <pre>
 * var customerFormatter = {
 *     format : function(value, pattern) {
 *         // add your codes here to convert number value to formatted string
 *         // according to the pattern string
 *         return formattedString;
 *     }
 * };
 * sap.viz.ui5.api.env.Format.numericFormatter(customerFormatter);
 * </pre>
 * 
 * @param {function}
 *            formatter
 * @returns {sap.viz.ui5.api.env.Format}
 * @public
 * @function sap.viz.ui5.api.env.Format.numericFormatter
 */
sap.viz.ui5.api.env.Format.numericFormatter = function(formatter) {
	return sap.viz.api.env.Format.numericFormatter.apply(null, arguments);
};

