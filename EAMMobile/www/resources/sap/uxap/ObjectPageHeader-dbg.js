/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.ObjectPageHeader.
jQuery.sap.declare("sap.uxap.ObjectPageHeader");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ObjectPageHeader.
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
 * <li>{@link #getObjectImageURI objectImageURI} : string</li>
 * <li>{@link #getObjectImageAlt objectImageAlt} : string (default: '')</li>
 * <li>{@link #getObjectImageDensityAware objectImageDensityAware} : boolean (default: false)</li>
 * <li>{@link #getObjectTitle objectTitle} : string</li>
 * <li>{@link #getObjectSubtitle objectSubtitle} : string</li>
 * <li>{@link #getObjectImageShape objectImageShape} : sap.uxap.ObjectPageHeaderPictureShape (default: sap.uxap.ObjectPageHeaderPictureShape.Square)</li>
 * <li>{@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible} : boolean (default: false)</li>
 * <li>{@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible} : boolean (default: true)</li>
 * <li>{@link #getHeaderDesign headerDesign} : sap.uxap.ObjectPageHeaderDesign (default: sap.uxap.ObjectPageHeaderDesign.Light)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNavigationBar navigationBar} : sap.m.Bar</li>
 * <li>{@link #getActions actions} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * 
 * Header of an ObjectPage, based on a sap.ui.core.Control.
 * This control allows to specify the basic properties for an object (title / description / picture)
 * As well as define some actions and additional info that will be displayed in a float layout.
 * @extends sap.ui.core.Control
 *
 * @author SAP SE
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.ObjectPageHeader
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.uxap.ObjectPageHeader", { metadata : {

	library : "sap.uxap",
	properties : {
		"objectImageURI" : {type : "string", group : "", defaultValue : null},
		"objectImageAlt" : {type : "string", group : "", defaultValue : ''},
		"objectImageDensityAware" : {type : "boolean", group : "", defaultValue : false},
		"objectTitle" : {type : "string", group : "", defaultValue : null},
		"objectSubtitle" : {type : "string", group : "", defaultValue : null},
		"objectImageShape" : {type : "sap.uxap.ObjectPageHeaderPictureShape", group : "", defaultValue : sap.uxap.ObjectPageHeaderPictureShape.Square},
		"isObjectIconAlwaysVisible" : {type : "boolean", group : "", defaultValue : false},
		"isObjectTitleAlwaysVisible" : {type : "boolean", group : "", defaultValue : true},
		"isObjectSubtitleAlwaysVisible" : {type : "boolean", group : "", defaultValue : true},
		"isActionAreaAlwaysVisible" : {type : "boolean", group : "", defaultValue : true},
		"headerDesign" : {type : "sap.uxap.ObjectPageHeaderDesign", group : "", defaultValue : sap.uxap.ObjectPageHeaderDesign.Light}
	},
	aggregations : {
		"_overflowButton" : {type : "sap.m.Button", multiple : false, visibility : "hidden"}, 
		"_objectImage" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"navigationBar" : {type : "sap.m.Bar", multiple : false}, 
		"actions" : {type : "sap.ui.core.Control", multiple : true, singularName : "action"}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.ObjectPageHeader with name <code>sClassName</code> 
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
 * @name sap.uxap.ObjectPageHeader.extend
 * @function
 */


/**
 * Getter for property <code>objectImageURI</code>.
 * The path that can be used to retrieve a picture
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>objectImageURI</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getObjectImageURI
 * @function
 */

/**
 * Setter for property <code>objectImageURI</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sObjectImageURI  new value for property <code>objectImageURI</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setObjectImageURI
 * @function
 */


/**
 * Getter for property <code>objectImageAlt</code>.
 * The string to be used in the alt attribute for the objectImage.
 * See sap.m.Image for more detail on alt property.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>objectImageAlt</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getObjectImageAlt
 * @function
 */

/**
 * Setter for property <code>objectImageAlt</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sObjectImageAlt  new value for property <code>objectImageAlt</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setObjectImageAlt
 * @function
 */


/**
 * Getter for property <code>objectImageDensityAware</code>.
 * If this is set to true, the objectImage will send several requests trying to get the density perfect version of image if this version of image doesn't exist on the server.
 * By default, this is set to false so the objectImage will be loaded directly saving bandwidth.
 * 
 * If pixel perfectness (versus bandwidth) is the key for the application, set this value to true.
 * 
 * Default value is false.
 * See sap.m.Image for more detail on density awareness.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>objectImageDensityAware</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getObjectImageDensityAware
 * @function
 */

/**
 * Setter for property <code>objectImageDensityAware</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bObjectImageDensityAware  new value for property <code>objectImageDensityAware</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setObjectImageDensityAware
 * @function
 */


/**
 * Getter for property <code>objectTitle</code>.
 * The title of the object
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>objectTitle</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getObjectTitle
 * @function
 */

/**
 * Setter for property <code>objectTitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sObjectTitle  new value for property <code>objectTitle</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setObjectTitle
 * @function
 */


/**
 * Getter for property <code>objectSubtitle</code>.
 * The description of the object
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>objectSubtitle</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getObjectSubtitle
 * @function
 */

/**
 * Setter for property <code>objectSubtitle</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sObjectSubtitle  new value for property <code>objectSubtitle</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setObjectSubtitle
 * @function
 */


/**
 * Getter for property <code>objectImageShape</code>.
 * Information to know if the header picture should be displayed in a square or with a circle shaped mask.
 *
 * Default value is <code>Square</code>
 *
 * @return {sap.uxap.ObjectPageHeaderPictureShape} the value of property <code>objectImageShape</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getObjectImageShape
 * @function
 */

/**
 * Setter for property <code>objectImageShape</code>.
 *
 * Default value is <code>Square</code> 
 *
 * @param {sap.uxap.ObjectPageHeaderPictureShape} oObjectImageShape  new value for property <code>objectImageShape</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setObjectImageShape
 * @function
 */


/**
 * Getter for property <code>isObjectIconAlwaysVisible</code>.
 * Flag to set if the icon should always be visible or if it should be visible only when scrolling.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isObjectIconAlwaysVisible</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getIsObjectIconAlwaysVisible
 * @function
 */

/**
 * Setter for property <code>isObjectIconAlwaysVisible</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsObjectIconAlwaysVisible  new value for property <code>isObjectIconAlwaysVisible</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setIsObjectIconAlwaysVisible
 * @function
 */


/**
 * Getter for property <code>isObjectTitleAlwaysVisible</code>.
 * Flag to set if the title should always be visible or if it should be visible only when scrolling.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>isObjectTitleAlwaysVisible</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getIsObjectTitleAlwaysVisible
 * @function
 */

/**
 * Setter for property <code>isObjectTitleAlwaysVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIsObjectTitleAlwaysVisible  new value for property <code>isObjectTitleAlwaysVisible</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setIsObjectTitleAlwaysVisible
 * @function
 */


/**
 * Getter for property <code>isObjectSubtitleAlwaysVisible</code>.
 * Flag to set if the title should always be visible or if it should be visible only when scrolling.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>isObjectSubtitleAlwaysVisible</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getIsObjectSubtitleAlwaysVisible
 * @function
 */

/**
 * Setter for property <code>isObjectSubtitleAlwaysVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIsObjectSubtitleAlwaysVisible  new value for property <code>isObjectSubtitleAlwaysVisible</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setIsObjectSubtitleAlwaysVisible
 * @function
 */


/**
 * Getter for property <code>isActionAreaAlwaysVisible</code>.
 * Flag to set if the action buttons should always be visible or if it should be visible only when scrolling.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>isActionAreaAlwaysVisible</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getIsActionAreaAlwaysVisible
 * @function
 */

/**
 * Setter for property <code>isActionAreaAlwaysVisible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bIsActionAreaAlwaysVisible  new value for property <code>isActionAreaAlwaysVisible</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setIsActionAreaAlwaysVisible
 * @function
 */


/**
 * Getter for property <code>headerDesign</code>.
 * Represent the design either Light or Dark for the
 *
 * Default value is <code>Light</code>
 *
 * @return {sap.uxap.ObjectPageHeaderDesign} the value of property <code>headerDesign</code>
 * @public
 * @name sap.uxap.ObjectPageHeader#getHeaderDesign
 * @function
 */

/**
 * Setter for property <code>headerDesign</code>.
 *
 * Default value is <code>Light</code> 
 *
 * @param {sap.uxap.ObjectPageHeaderDesign} oHeaderDesign  new value for property <code>headerDesign</code>
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setHeaderDesign
 * @function
 */


/**
 * Getter for aggregation <code>navigationBar</code>.<br/>
 * 
 * A navigation bar you can embed in the header properly.
 * 
 * @return {sap.m.Bar}
 * @public
 * @name sap.uxap.ObjectPageHeader#getNavigationBar
 * @function
 */


/**
 * Setter for the aggregated <code>navigationBar</code>.
 * @param {sap.m.Bar} oNavigationBar
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#setNavigationBar
 * @function
 */
	

/**
 * Destroys the navigationBar in the aggregation 
 * named <code>navigationBar</code>.
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#destroyNavigationBar
 * @function
 */


/**
 * Getter for aggregation <code>actions</code>.<br/>
 * 
 * List of actions that will be displayed in the header.
 * You can use ObjectPageHeaderActionButton controls for having a different display between the header content and the action sheet.
 * You can add an use ObjectPageHeaderLayoutData that will be used to display a visual separator.
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.uxap.ObjectPageHeader#getActions
 * @function
 */


/**
 * Inserts a action into the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.core.Control}
 *          oAction the action to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the action should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the action is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#insertAction
 * @function
 */

/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.core.Control}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#addAction
 * @function
 */

/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.ui.core.Control} vAction the action to remove or its index or id
 * @return {sap.ui.core.Control} the removed action or null
 * @public
 * @name sap.uxap.ObjectPageHeader#removeAction
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uxap.ObjectPageHeader#removeAllActions
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>actions</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oAction the action whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.uxap.ObjectPageHeader#indexOfAction
 * @function
 */
	

/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.uxap.ObjectPageHeader} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageHeader#destroyActions
 * @function
 */


// Start of sap/uxap/ObjectPageHeader.js
sap.uxap.ObjectPageHeader.prototype.init = function () {

	// Overflow button
	var oOverflowActionSheet = new sap.m.ActionSheet({placement: "Bottom"});
	this._oOverflowButton = new sap.m.Button({
		icon: "sap-icon://overflow",
		type: sap.m.ButtonType.Transparent,
		press: function () {
			oOverflowActionSheet.openBy(this);
		}
	});
	this._oOverflowActionSheet = oOverflowActionSheet;
	this.setAggregation("_overflowButton", this._oOverflowButton);

	this._oActionSheetButtonMap = {};

	this._iResizeId = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(this._adaptLayout, this));
};

sap.uxap.ObjectPageHeader.prototype.setHeaderDesign = function (sHeaderDesign) {
	this.setProperty("headerDesign", sHeaderDesign);
	if (this.getParent()) {
		this.getParent().invalidate(); // Force rerendering of ObjectPageLayout if the design change
	}

};

sap.uxap.ObjectPageHeader.prototype.onBeforeRendering = function () {
	var sObjectImageURI = this.getObjectImageURI();
	if (sObjectImageURI.indexOf("sap-icon://") == 0) {
		this._oObjectImage = new sap.ui.core.Icon();
	}
	else {
		this._oObjectImage = new sap.m.Image();
		this._oObjectImage.setDensityAware(this.getObjectImageDensityAware());
		this._oObjectImage.setAlt(this.getObjectImageAlt());
	}
	this._oObjectImage.setSrc(sObjectImageURI);
	this._oObjectImage.addStyleClass("sapUxAPObjectPageHeaderObjectImage");
	this.setAggregation("_objectImage", this._oObjectImage, true);

	var aActions = this.getActions() || [];
	this._oOverflowActionSheet.removeAllButtons();
	this._oActionSheetButtonMap = {};

	//display overflow if there are more than 1 item or only 1 item and it is showing its text
	if (aActions.length > 1 || this._hasOneButtonShowText(aActions)) {
		//create responsive equivalents of the provided controls
		jQuery.each(aActions, jQuery.proxy(function (iIndex, oAction) {
			// Force the design of the button to transparent
			if (oAction instanceof sap.m.Button && oAction.getVisible()) {
				oAction.setProperty("type", sap.m.ButtonType.Transparent, false);

				var oActionSheetButton = this._createActionSheetButton(oAction);

				this._oActionSheetButtonMap[oAction.getId()] = oActionSheetButton; //store the originalId/reference for later use (adaptLayout)

				this._oOverflowActionSheet.addButton(oActionSheetButton);
			}
		}, this));
	}

};

/**
 * "clone" the button provided by the app developer in order to create an equivalent for the actionsheet (displayed in overflowing scenarios)
 * @param oButton           the button to copy
 * @returns {sap.m.Button}  the copied button
 * @private
 */
sap.uxap.ObjectPageHeader.prototype._createActionSheetButton = function (oButton) {

	//copy binding if present
	var oCopy = new sap.m.Button({
		press: jQuery.proxy(this._onSeeMoreContentSelect, this),
		customData: new sap.ui.core.CustomData({
			key: "originalId",
			value: oButton.getId()
		})
	});

	//carry property & binding on text
	var oTextBinding = oButton.getBindingInfo("text"),
		oIconBinding = oButton.getBindingInfo("icon"),
		sModelName;

	if (oTextBinding && oTextBinding.parts && oTextBinding.parts.length > 0) {
		sModelName = oTextBinding.parts[0].model;

		//copy binding information
		oCopy.bindProperty("text", {
			path: oTextBinding.parts[0].path,
			model: sModelName,
			formatter: oTextBinding.formatter
		});

		//handle relative binding scenarios
		oCopy.setBindingContext(oButton.getBindingContext(sModelName), sModelName);
		oCopy.setModel(oButton.getModel(sModelName), sModelName);
	}
	else {
		oCopy.setText(oButton.getText());
	}


	//carry property & binding on icon
	if (oIconBinding && oIconBinding.parts && oIconBinding.parts.length > 0) {
		sModelName = oIconBinding.parts[0].model;

		//copy binding information
		oCopy.bindProperty("icon", {
			path: oIconBinding.parts[0].path,
			model: sModelName,
			formatter: oIconBinding.formatter
		});

		//handle relative binding scenarios
		oCopy.setBindingContext(oButton.getBindingContext(sModelName), sModelName);
		oCopy.setModel(oButton.getModel(sModelName), sModelName);
	}
	else {
		oCopy.setIcon(oButton.getIcon());
	}


	return oCopy;
};

sap.uxap.ObjectPageHeader.prototype.onAfterRendering = function () {
	this._oOverflowButton.$().hide();
	jQuery.sap.delayedCall(50, this, this._adaptLayout); //need to wait for the browser dom painting
};

sap.uxap.ObjectPageHeader.prototype._onSeeMoreContentSelect = function (oEvent) {
	var oPressedButton = oEvent.getSource(), oOriginalControl;

	oOriginalControl = sap.ui.getCore().byId(oPressedButton.data("originalId"));

	//forward press event
	if (oOriginalControl.firePress) {
		//provide parameters in case the handlers wants to know where was the even fired from
		oOriginalControl.firePress({
			overflowButtonId: this._oOverflowButton.getId()
		});
	}
	this._oOverflowActionSheet.close();
};

sap.uxap.ObjectPageHeader.prototype._hasOneButtonShowText = function (aActions) {

	var bOneButtonShowingText = false;

	if (aActions.length == 1) {
		if (aActions[0] instanceof sap.uxap.ObjectPageHeaderActionButton) {
			bOneButtonShowingText = (!aActions[0].getHideText() && aActions[0].getText() != "" );
		}
		else if (aActions[0] instanceof sap.m.Button){
			bOneButtonShowingText = (aActions[0].getText() != "" );
		}
	}

	return bOneButtonShowingText;
};

/**
 * show or hide the see more button and hide some content if there are not enough space for it
 * @private
 */
sap.uxap.ObjectPageHeader.prototype._adaptLayout = function () {

	var timestamp = (new Date()).getTime();
	jQuery.sap.measure.start("UxAP :: ObjectPageHeader._adaptLayout_" + timestamp, "actions responsiveness");

	var aActions = this.getActions() || [];
	this._oOverflowButton.$().hide();

	//display  overflow if on a mobile scenario and there are more than 1 item or only 1 item displaying only its icon
	if (aActions.length > 1 || this._hasOneButtonShowText(aActions)) {
		var iOverflowButtonSize = this._oOverflowButton.$().width(),
			iAvailableSize = this.$("identifierLine").width() - this.$("identifierLineContainer").width() - this._oObjectImage.$().width(),
			iAvailableSizeWithSeeMore = iAvailableSize - 2 * iOverflowButtonSize,
			iContentSize = 0,
			bMobileScenario = jQuery("html").hasClass("sapUiMedia-Std-Phone") || sap.ui.Device.system.phone;

		jQuery.each(aActions, jQuery.proxy(function (iIndex, oAction) {

			iContentSize += oAction.$().width();

			//hide the overflowing content and show their equivalent in the popover
			oAction.$().show();

			//separators and non sap.m.Button or not visible buttons have no equivalent in the overflow
			if (this._oActionSheetButtonMap[oAction.getId()]) {

				this._oActionSheetButtonMap[oAction.getId()].setVisible(false);
				if (iContentSize >= iAvailableSizeWithSeeMore || bMobileScenario) {
					oAction.$().hide();
					this._oActionSheetButtonMap[oAction.getId()].setVisible(true);
				}

			}

			return true;
		}, this));

		if (iContentSize >= iAvailableSizeWithSeeMore || bMobileScenario) {
			this._oOverflowButton.$().show();
		}
	}


	jQuery.sap.measure.end("UxAP :: ObjectPageHeader._adaptLayout_" + timestamp, "actions responsiveness");
};
