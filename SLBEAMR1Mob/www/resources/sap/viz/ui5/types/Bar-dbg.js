/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.viz.ui5.types.Bar.
jQuery.sap.declare("sap.viz.ui5.types.Bar");
jQuery.sap.require("sap.viz.library");
jQuery.sap.require("sap.viz.ui5.core.BaseStructuredType");


/**
 * Constructor for a new ui5/types/Bar.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getOrientation orientation} : sap.viz.ui5.types.Bar_orientation (default: sap.viz.ui5.types.Bar_orientation.vertical)</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4'])</li>
 * <li>{@link #getPrimaryValuesColorPalette primaryValuesColorPalette} : string[] (default: ['#8FBADD','#B8D4E9','#7AAED6','#A3C7E3','#3D88C4','#66A1D0','#297CBE','#5295CA','#005BA3','#146FB7','#005395','#0063B1'])</li>
 * <li>{@link #getSecondaryValuesColorPalette secondaryValuesColorPalette} : string[] (default: ['#F6A09B','#F9C3C0','#F58E88','#F8B1AD','#F05B52','#F37D76','#EE4A40','#F16C64','#D92419','#ED382D','#C52117','#EB271B'])</li>
 * <li>{@link #getDrawingEffect drawingEffect} : sap.viz.ui5.types.Bar_drawingEffect (default: sap.viz.ui5.types.Bar_drawingEffect.normal)</li>
 * <li>{@link #getIsRoundCorner isRoundCorner} : boolean (default: false)</li>
 * <li>{@link #getImageFill imageFill} : boolean (default: false)</li>
 * <li>{@link #getImagePalette imagePalette} : string[] (default: ['http://www.sap.com/global/ui/images/global/sap-logo.png'])</li>
 * <li>{@link #getFormatRules formatRules} : object[]</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getToolTip toolTip} : sap.viz.ui5.types.Bar_tooltip</li>
 * <li>{@link #getAnimation animation} : sap.viz.ui5.types.Bar_animation</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.viz.ui5.core.BaseStructuredType#constructor sap.viz.ui5.core.BaseStructuredType}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Module ui5/types/Bar
 * @extends sap.viz.ui5.core.BaseStructuredType
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @since 1.7.2
 * @experimental Since version 1.7.2. 
 * Charting API is not finished yet and might change completely
 * @name sap.viz.ui5.types.Bar
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.viz.ui5.core.BaseStructuredType.extend("sap.viz.ui5.types.Bar", { metadata : {

	library : "sap.viz",
	properties : {
		"orientation" : {type : "sap.viz.ui5.types.Bar_orientation", group : "", defaultValue : sap.viz.ui5.types.Bar_orientation.vertical, deprecated: true},
		"colorPalette" : {type : "string[]", group : "", defaultValue : ['#748CB2','#9CC677','#EACF5E','#F9AD79','#D16A7C','#8873A2','#3A95B3','#B6D949','#FDD36C','#F47958','#A65084','#0063B1','#0DA841','#FCB71D','#F05620','#B22D6E','#3C368E','#8FB2CF','#95D4AB','#EAE98F','#F9BE92','#EC9A99','#BC98BD','#1EB7B2','#73C03C','#F48323','#EB271B','#D9B5CA','#AED1DA','#DFECB2','#FCDAB0','#F5BCB4']},
		"primaryValuesColorPalette" : {type : "string[]", group : "", defaultValue : ['#8FBADD','#B8D4E9','#7AAED6','#A3C7E3','#3D88C4','#66A1D0','#297CBE','#5295CA','#005BA3','#146FB7','#005395','#0063B1']},
		"secondaryValuesColorPalette" : {type : "string[]", group : "", defaultValue : ['#F6A09B','#F9C3C0','#F58E88','#F8B1AD','#F05B52','#F37D76','#EE4A40','#F16C64','#D92419','#ED382D','#C52117','#EB271B']},
		"drawingEffect" : {type : "sap.viz.ui5.types.Bar_drawingEffect", group : "", defaultValue : sap.viz.ui5.types.Bar_drawingEffect.normal},
		"isRoundCorner" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"imageFill" : {type : "boolean", group : "", defaultValue : false, deprecated: true},
		"imagePalette" : {type : "string[]", group : "", defaultValue : ['http://www.sap.com/global/ui/images/global/sap-logo.png'], deprecated: true},
		"formatRules" : {type : "object[]", group : "", defaultValue : null}
	},
	aggregations : {
		"toolTip" : {type : "sap.viz.ui5.types.Bar_tooltip", multiple : false, deprecated: true}, 
		"animation" : {type : "sap.viz.ui5.types.Bar_animation", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.viz.ui5.types.Bar with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.viz.ui5.types.Bar.extend
 * @function
 */


/**
 * Getter for property <code>orientation</code>.
 * Set the orientation of the plot area.
 *
 * Default value is <code>vertical</code>
 *
 * @return {sap.viz.ui5.types.Bar_orientation} the value of property <code>orientation</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#getOrientation
 * @function
 */

/**
 * Setter for property <code>orientation</code>.
 *
 * Default value is <code>vertical</code> 
 *
 * @param {sap.viz.ui5.types.Bar_orientation} oOrientation  new value for property <code>orientation</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#setOrientation
 * @function
 */


/**
 * Getter for property <code>colorPalette</code>.
 * Set the color palette for the chart. This is not supported for dual axis charts that have measureNamesDimension bound to the legend.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code>
 *
 * @return {string[]} the value of property <code>colorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getColorPalette
 * @function
 */

/**
 * Setter for property <code>colorPalette</code>.
 *
 * Default value is <code>#748CB2,#9CC677,#EACF5E,#F9AD79,#D16A7C,#8873A2,#3A95B3,#B6D949,#FDD36C,#F47958,#A65084,#0063B1,#0DA841,#FCB71D,#F05620,#B22D6E,#3C368E,#8FB2CF,#95D4AB,#EAE98F,#F9BE92,#EC9A99,#BC98BD,#1EB7B2,#73C03C,#F48323,#EB271B,#D9B5CA,#AED1DA,#DFECB2,#FCDAB0,#F5BCB4</code> 
 *
 * @param {string[]} aColorPalette  new value for property <code>colorPalette</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setColorPalette
 * @function
 */


/**
 * Getter for property <code>primaryValuesColorPalette</code>.
 * Set the color palette for axis 1 in dual charts.
 *
 * Default value is <code>#8FBADD,#B8D4E9,#7AAED6,#A3C7E3,#3D88C4,#66A1D0,#297CBE,#5295CA,#005BA3,#146FB7,#005395,#0063B1</code>
 *
 * @return {string[]} the value of property <code>primaryValuesColorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getPrimaryValuesColorPalette
 * @function
 */

/**
 * Setter for property <code>primaryValuesColorPalette</code>.
 *
 * Default value is <code>#8FBADD,#B8D4E9,#7AAED6,#A3C7E3,#3D88C4,#66A1D0,#297CBE,#5295CA,#005BA3,#146FB7,#005395,#0063B1</code> 
 *
 * @param {string[]} aPrimaryValuesColorPalette  new value for property <code>primaryValuesColorPalette</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setPrimaryValuesColorPalette
 * @function
 */


/**
 * Getter for property <code>secondaryValuesColorPalette</code>.
 * Set the color palette for axis 2 in dual chart.
 *
 * Default value is <code>#F6A09B,#F9C3C0,#F58E88,#F8B1AD,#F05B52,#F37D76,#EE4A40,#F16C64,#D92419,#ED382D,#C52117,#EB271B</code>
 *
 * @return {string[]} the value of property <code>secondaryValuesColorPalette</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getSecondaryValuesColorPalette
 * @function
 */

/**
 * Setter for property <code>secondaryValuesColorPalette</code>.
 *
 * Default value is <code>#F6A09B,#F9C3C0,#F58E88,#F8B1AD,#F05B52,#F37D76,#EE4A40,#F16C64,#D92419,#ED382D,#C52117,#EB271B</code> 
 *
 * @param {string[]} aSecondaryValuesColorPalette  new value for property <code>secondaryValuesColorPalette</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setSecondaryValuesColorPalette
 * @function
 */


/**
 * Getter for property <code>drawingEffect</code>.
 * Set the drawing effect for the plot area. If this value is set to 'glossy', the plot area is glossy. If this value is set to 'normal', the plot area is matte.
 *
 * Default value is <code>normal</code>
 *
 * @return {sap.viz.ui5.types.Bar_drawingEffect} the value of property <code>drawingEffect</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getDrawingEffect
 * @function
 */

/**
 * Setter for property <code>drawingEffect</code>.
 *
 * Default value is <code>normal</code> 
 *
 * @param {sap.viz.ui5.types.Bar_drawingEffect} oDrawingEffect  new value for property <code>drawingEffect</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setDrawingEffect
 * @function
 */


/**
 * Getter for property <code>isRoundCorner</code>.
 * Set whether bars have rounded corners
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isRoundCorner</code>
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#getIsRoundCorner
 * @function
 */

/**
 * Setter for property <code>isRoundCorner</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsRoundCorner  new value for property <code>isRoundCorner</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.19. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#setIsRoundCorner
 * @function
 */


/**
 * Getter for property <code>imageFill</code>.
 * Set where the image fill is enabled.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>imageFill</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#getImageFill
 * @function
 */

/**
 * Setter for property <code>imageFill</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bImageFill  new value for property <code>imageFill</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#setImageFill
 * @function
 */


/**
 * Getter for property <code>imagePalette</code>.
 * Set the images that fill the bars.
 *
 * Default value is <code>http://www.sap.com/global/ui/images/global/sap-logo.png</code>
 *
 * @return {string[]} the value of property <code>imagePalette</code>
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#getImagePalette
 * @function
 */

/**
 * Setter for property <code>imagePalette</code>.
 *
 * Default value is <code>http://www.sap.com/global/ui/images/global/sap-logo.png</code> 
 *
 * @param {string[]} aImagePalette  new value for property <code>imagePalette</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#setImagePalette
 * @function
 */


/**
 * Getter for property <code>formatRules</code>.
 * Sample value for formatRules: [{condition: [{Key1:Value1, Key2:Value2}], color:"#00ff00"}, {condition: [{Key3:Value3}], color:"#00ffff"}]. Each rule has two properties: the "condition" and the "color". Value1, Value2 and Value3 are values. <br /> The value of a dimension may be <br /> 1, Single value (string), like "China" . <br /> 2. Array (enumeration), like ["UK","USA"] . <br /> The value of a measure may be <br /> 1, Single value (number), like 20 . <br /> 2. Arry (enumeration), like [121,122] . <br /> 3. Object (range), like {min:100, max 200} . Min and max are inclusive. If users want to inlcude 200, but not 100 in the range, they may use {min:100.00001, max:200}. If users want values larger than 100, they may write {min:100}. <br /> The color is applied if one or more conditions in the condition array is met. If multiple rules could apply on the same data point, it is the last rule that takes effect.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object[]} the value of property <code>formatRules</code>
 * @public
 * @name sap.viz.ui5.types.Bar#getFormatRules
 * @function
 */

/**
 * Setter for property <code>formatRules</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object[]} aFormatRules  new value for property <code>formatRules</code>
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setFormatRules
 * @function
 */


/**
 * Getter for aggregation <code>toolTip</code>.<br/>
 * Settings for tooltip related properties
 * 
 * @return {sap.viz.ui5.types.Bar_tooltip}
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#getToolTip
 * @function
 */


/**
 * Setter for the aggregated <code>toolTip</code>.
 * @param {sap.viz.ui5.types.Bar_tooltip} oToolTip
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#setToolTip
 * @function
 */
	

/**
 * Destroys the toolTip in the aggregation 
 * named <code>toolTip</code>.
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.12. 
 * This Property has been deprecated. This interface will be removed from the SAPUI5 delivery in one of the next releases.
 * @name sap.viz.ui5.types.Bar#destroyToolTip
 * @function
 */


/**
 * Getter for aggregation <code>animation</code>.<br/>
 * Settings for animations in the plot area
 * 
 * @return {sap.viz.ui5.types.Bar_animation}
 * @public
 * @name sap.viz.ui5.types.Bar#getAnimation
 * @function
 */


/**
 * Setter for the aggregated <code>animation</code>.
 * @param {sap.viz.ui5.types.Bar_animation} oAnimation
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#setAnimation
 * @function
 */
	

/**
 * Destroys the animation in the aggregation 
 * named <code>animation</code>.
 * @return {sap.viz.ui5.types.Bar} <code>this</code> to allow method chaining
 * @public
 * @name sap.viz.ui5.types.Bar#destroyAnimation
 * @function
 */


// Start of sap/viz/ui5/types/Bar.js
sap.viz.ui5.types.Bar.prototype.getToolTip = function() {
  return this._getOrCreate("toolTip");
}
sap.viz.ui5.types.Bar.prototype.getAnimation = function() {
  return this._getOrCreate("animation");
}
