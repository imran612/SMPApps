/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.uxap (1.26.6)
 */
jQuery.sap.declare("sap.uxap.library");
jQuery.sap.require("sap.ui.core.Core");
/**
 * SAP UxAP
 *
 * @namespace
 * @name sap.uxap
 * @public
 */


// library dependencies
jQuery.sap.require("sap.ui.core.library");

// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
	name : "sap.uxap",
	dependencies : ["sap.ui.core"],
	types: [
		"sap.uxap.BlockBaseColumnLayout",
		"sap.uxap.ObjectPageConfigurationMode",
		"sap.uxap.ObjectPageHeaderDesign",
		"sap.uxap.ObjectPageHeaderPictureShape",
		"sap.uxap.ObjectPageSubSectionLayout",
		"sap.uxap.ObjectPageSubSectionMode"
	],
	interfaces: [],
	controls: [
		"sap.uxap.AnchorBar",
		"sap.uxap.BlockBase",
		"sap.uxap.HierarchicalSelect",
		"sap.uxap.ObjectPageHeader",
		"sap.uxap.ObjectPageHeaderActionButton",
		"sap.uxap.ObjectPageLayout",
		"sap.uxap.ObjectPageSection",
		"sap.uxap.ObjectPageSectionBase",
		"sap.uxap.ObjectPageSubSection"
	],
	elements: [
		"sap.uxap.ModelMapping",
		"sap.uxap.ObjectPageHeaderLayoutData"
	],
	version: "1.26.6"
});

/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.uxap.BlockBaseColumnLayout
jQuery.sap.declare('sap.uxap.BlockBaseColumnLayout');
jQuery.sap.require('sap.ui.base.DataType');

/**
 * @class Used by the BlockBase control to define how many columns should it be assigned by the objectPageSubSection.
 *     The allowed values can be auto (subsection assigned a number of columns based on the parent objectPageLayout subsectionLayout property), 1, 2 or 3
 *     (This may not be a valid value for some subSectionLayout, for example asking for 3 columns in a 2 column layout would raise warnings).
 *
 * @author SAP SE
 * @static
 * @public
 * @ui5-metamodel This simple type also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.BlockBaseColumnLayout = sap.ui.base.DataType.createType('sap.uxap.BlockBaseColumnLayout', {
    isValid : function(vValue) {
      return /^(auto|[1-3]{1})$/.test(vValue);
    }

  },
  sap.ui.base.DataType.getType('string')
);

/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.uxap.ObjectPageConfigurationMode.
jQuery.sap.declare("sap.uxap.ObjectPageConfigurationMode");
/**
 * @class Used by the sap.uxap.component.Component how to initialize the ObjectPageLayout sections and subsections.
 *
 * @version 1.26.6
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageConfigurationMode = {

	/**
	 * 
	 * @public
	 */
	JsonURL : "JsonURL",

	/**
	 * 
	 * @public
	 */
	JsonModel : "JsonModel"

};
/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.uxap.ObjectPageHeaderDesign.
jQuery.sap.declare("sap.uxap.ObjectPageHeaderDesign");
/**
 * @class Used by the ObjectPageHeader control to define which design to use.
 *
 * @version 1.26.6
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageHeaderDesign = {

	/**
	 * Light theme for the ObjectPageHeader.
	 * @public
	 */
	Light : "Light",

	/**
	 * Dark theme for the ObjectPageHeader.
	 * @public
	 */
	Dark : "Dark"

};
/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.uxap.ObjectPageHeaderPictureShape.
jQuery.sap.declare("sap.uxap.ObjectPageHeaderPictureShape");
/**
 * @class Used by the ObjectPageHeader control to define which shape to use for the image.
 *
 * @version 1.26.6
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageHeaderPictureShape = {

	/**
	 * Circle shape for the images in the ObjectPageHeader.
	 * @public
	 */
	Circle : "Circle",

	/**
	 * Square shape for the images in the ObjectPageHeader.
	 * @public
	 */
	Square : "Square"

};
/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.uxap.ObjectPageSubSectionLayout.
jQuery.sap.declare("sap.uxap.ObjectPageSubSectionLayout");
/**
 * @class Used by the ObjectPagSubSection control to define which layout to apply.
 *
 * @version 1.26.6
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSubSectionLayout = {

	/**
	 * TitleOnTop: title and actions on top of the block area.
	 * @public
	 */
	TitleOnTop : "TitleOnTop",

	/**
	 * TitleOnLeft: title and actions on the left, inside the block area.
	 * @public
	 */
	TitleOnLeft : "TitleOnLeft"

};
/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.uxap.ObjectPageSubSectionMode.
jQuery.sap.declare("sap.uxap.ObjectPageSubSectionMode");
/**
 * @class Used by the ObjectPageLayout control to define which layout to use (either Collapsed or Expanded).
 *
 * @version 1.26.6
 * @static
 * @public
 * @ui5-metamodel This enumeration also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSubSectionMode = {

	/**
	 * Collapsed mode of display of the ObjectPageLayout.
	 * @public
	 */
	Collapsed : "Collapsed",

	/**
	 * Expanded mode of displaying the ObjectPageLayout.
	 * @public
	 */
	Expanded : "Expanded"

};
