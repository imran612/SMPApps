/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.ObjectPageSubSection.
jQuery.sap.declare("sap.uxap.ObjectPageSubSection");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.uxap.ObjectPageSectionBase");


/**
 * Constructor for a new ObjectPageSubSection.
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
 * <li>{@link #getMode mode} : sap.uxap.ObjectPageSubSectionMode (default: sap.uxap.ObjectPageSubSectionMode.Collapsed)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBlocks blocks} <strong>(default aggregation)</strong> : sap.ui.core.Control[]</li>
 * <li>{@link #getMoreBlocks moreBlocks} : sap.ui.core.Control[]</li>
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
 * 
 * In addition, all settings applicable to the base type {@link sap.uxap.ObjectPageSectionBase#constructor sap.uxap.ObjectPageSectionBase}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A SubSection in the ObjectPage layout is a container for Objectpage Blocks
 * @extends sap.uxap.ObjectPageSectionBase
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.ObjectPageSubSection
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.uxap.ObjectPageSectionBase.extend("sap.uxap.ObjectPageSubSection", { metadata : {

	publicMethods : [
		// methods
		"refreshSeeMoreVisibility"
	],
	library : "sap.uxap",
	properties : {
		"mode" : {type : "sap.uxap.ObjectPageSubSectionMode", group : "Appearance", defaultValue : sap.uxap.ObjectPageSubSectionMode.Collapsed}
	},
	defaultAggregation : "blocks",
	aggregations : {
		"_grid" : {type : "sap.ui.core.Control", multiple : false, visibility : "hidden"}, 
		"blocks" : {type : "sap.ui.core.Control", multiple : true, singularName : "block"}, 
		"moreBlocks" : {type : "sap.ui.core.Control", multiple : true, singularName : "moreBlock"}, 
		"actions" : {type : "sap.ui.core.Control", multiple : true, singularName : "action"}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name <code>sClassName</code> 
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
 * @name sap.uxap.ObjectPageSubSection.extend
 * @function
 */


/**
 * Getter for property <code>mode</code>.
 * Mode of subsection (propagated to the children blocks and moreBlocks modes)
 * Blocks of moreBlocks aggregation are getting displayed only when SubSection mode is set to Expanded.
 *
 * Default value is <code>Collapsed</code>
 *
 * @return {sap.uxap.ObjectPageSubSectionMode} the value of property <code>mode</code>
 * @public
 * @name sap.uxap.ObjectPageSubSection#getMode
 * @function
 */

/**
 * Setter for property <code>mode</code>.
 *
 * Default value is <code>Collapsed</code> 
 *
 * @param {sap.uxap.ObjectPageSubSectionMode} oMode  new value for property <code>mode</code>
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#setMode
 * @function
 */


/**
 * Getter for aggregation <code>blocks</code>.<br/>
 * controls to display in the subsection
 * 
 * <strong>Note</strong>: this is the default aggregation for ObjectPageSubSection.
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.uxap.ObjectPageSubSection#getBlocks
 * @function
 */


/**
 * Inserts a block into the aggregation named <code>blocks</code>.
 *
 * @param {sap.ui.core.Control}
 *          oBlock the block to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the block should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the block is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the block is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#insertBlock
 * @function
 */

/**
 * Adds some block <code>oBlock</code> 
 * to the aggregation named <code>blocks</code>.
 *
 * @param {sap.ui.core.Control}
 *            oBlock the block to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#addBlock
 * @function
 */

/**
 * Removes an block from the aggregation named <code>blocks</code>.
 *
 * @param {int | string | sap.ui.core.Control} vBlock the block to remove or its index or id
 * @return {sap.ui.core.Control} the removed block or null
 * @public
 * @name sap.uxap.ObjectPageSubSection#removeBlock
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>blocks</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uxap.ObjectPageSubSection#removeAllBlocks
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>blocks</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oBlock the block whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.uxap.ObjectPageSubSection#indexOfBlock
 * @function
 */
	

/**
 * Destroys all the blocks in the aggregation 
 * named <code>blocks</code>.
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#destroyBlocks
 * @function
 */


/**
 * Getter for aggregation <code>moreBlocks</code>.<br/>
 * Additional controls to display when the show more / see all button is pressed
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.uxap.ObjectPageSubSection#getMoreBlocks
 * @function
 */


/**
 * Inserts a moreBlock into the aggregation named <code>moreBlocks</code>.
 *
 * @param {sap.ui.core.Control}
 *          oMoreBlock the moreBlock to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the moreBlock should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the moreBlock is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the moreBlock is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#insertMoreBlock
 * @function
 */

/**
 * Adds some moreBlock <code>oMoreBlock</code> 
 * to the aggregation named <code>moreBlocks</code>.
 *
 * @param {sap.ui.core.Control}
 *            oMoreBlock the moreBlock to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#addMoreBlock
 * @function
 */

/**
 * Removes an moreBlock from the aggregation named <code>moreBlocks</code>.
 *
 * @param {int | string | sap.ui.core.Control} vMoreBlock the moreBlock to remove or its index or id
 * @return {sap.ui.core.Control} the removed moreBlock or null
 * @public
 * @name sap.uxap.ObjectPageSubSection#removeMoreBlock
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>moreBlocks</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uxap.ObjectPageSubSection#removeAllMoreBlocks
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>moreBlocks</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oMoreBlock the moreBlock whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.uxap.ObjectPageSubSection#indexOfMoreBlock
 * @function
 */
	

/**
 * Destroys all the moreBlocks in the aggregation 
 * named <code>moreBlocks</code>.
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#destroyMoreBlocks
 * @function
 */


/**
 * Getter for aggregation <code>actions</code>.<br/>
 * Actions available for this subSection
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.uxap.ObjectPageSubSection#getActions
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
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#insertAction
 * @function
 */

/**
 * Adds some action <code>oAction</code> 
 * to the aggregation named <code>actions</code>.
 *
 * @param {sap.ui.core.Control}
 *            oAction the action to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#addAction
 * @function
 */

/**
 * Removes an action from the aggregation named <code>actions</code>.
 *
 * @param {int | string | sap.ui.core.Control} vAction the action to remove or its index or id
 * @return {sap.ui.core.Control} the removed action or null
 * @public
 * @name sap.uxap.ObjectPageSubSection#removeAction
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>actions</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uxap.ObjectPageSubSection#removeAllActions
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
 * @name sap.uxap.ObjectPageSubSection#indexOfAction
 * @function
 */
	

/**
 * Destroys all the actions in the aggregation 
 * named <code>actions</code>.
 * @return {sap.uxap.ObjectPageSubSection} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageSubSection#destroyActions
 * @function
 */


/**
 * Refresh the seeMore button visibility
 *
 * @name sap.uxap.ObjectPageSubSection#refreshSeeMoreVisibility
 * @function
 * @type 
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap/uxap/ObjectPageSubSection.js
jQuery.sap.require("sap.uxap.ObjectPageSubSectionLayout");
jQuery.sap.require("sap.ui.layout.Grid");
jQuery.sap.require("sap.uxap.ObjectPageSubSectionMode");
jQuery.sap.require("sap.ui.core.CustomData");

/**
 * @private
 */
sap.uxap.ObjectPageSubSection.prototype.init = function () {

	sap.uxap.ObjectPageSectionBase.prototype.init.call(this);

	//i18n: load once for every subsections
	if (!sap.uxap.i18nModel) {
		sap.uxap.i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: jQuery.sap.getModulePath("sap.uxap.i18n.i18n", ".properties")
		});
	}

	this.oResourceBundle = sap.uxap.i18nModel.getResourceBundle();

	//build private aggregations
	this._oGrid = new sap.ui.layout.Grid({
		id: this.getId() + "-innerGrid",
		defaultSpan: "L12 M12 S12",
		hSpacing: 1,
		vSpacing: 1,
		width: "100%"
	});

	this.setAggregation("_grid", this._oGrid);

	//build inner controls
	this._buildSeeMoreControl();

	this._iResizeId = undefined;    //resize handler if needed

	//proxy public aggregations
	this._bRenderedFirstTime = false;
	this._aAggregationProxy = {blocks: [], moreBlocks: []};

	//dom reference
	this._$spacer = [];

	//switch logic for the default mode
	this._switchSubSectionMode(this.getMode());
};

sap.uxap.ObjectPageSubSection.prototype.connectToModels = function () {
	var aBlocks = this.getBlocks() || [],
		aMoreBlocks = this.getMoreBlocks() || [];

	if (aBlocks.length > 0) {
		jQuery.each(aBlocks, jQuery.proxy(function (iBlockIndex, oBlock) {
			if (oBlock instanceof sap.uxap.BlockBase) {
				if (!oBlock.getMode()) {
					oBlock.setMode(this.getMode());
				}
				oBlock.connectToModels();
			}
		}, this));
	}

	if (aMoreBlocks.length > 0 && this.getMode() == sap.uxap.ObjectPageSubSectionMode.Expanded) {
		jQuery.each(aMoreBlocks, jQuery.proxy(function (iBlockIndex, oMoreBlock) {
			if (oMoreBlock instanceof sap.uxap.BlockBase) {
				if (!oMoreBlock.getMode()) {
					oMoreBlock.setMode(this.getMode());
				}
				oMoreBlock.connectToModels();
			}
		}, this));
	}
};

sap.uxap.ObjectPageSubSection.prototype.exit = function () {
	if (this._oSeeMoreButton) {
		this._oSeeMoreButton.destroy();
		this._oSeeMoreButton = null;
	}

	if (this._iResizeId) {
		sap.ui.core.ResizeHandler.deregister(this._iResizeId);
	}

	if (sap.uxap.ObjectPageSectionBase.prototype.exit) {
		sap.uxap.ObjectPageSectionBase.prototype.exit.call(this);
	}
};

sap.uxap.ObjectPageSubSection.prototype.onAfterRendering = function () {

	if (sap.uxap.ObjectPageSectionBase.prototype.onAfterRendering) {
		sap.uxap.ObjectPageSectionBase.prototype.onAfterRendering.call(this);
	}

	if (this._getObjectPageLayout()) {

		switch (this._getObjectPageLayout().getSubSectionLayout()) {
			case sap.uxap.ObjectPageSubSectionLayout.TitleOnLeft:
				this._afterRenderingTitleOnLeftLayout();
				break;
			default:
			/* nothing */
		}

		this._$spacer = jQuery.sap.byId(this._getObjectPageLayout().getId() + "-spacer");
	}
};

sap.uxap.ObjectPageSubSection.prototype.onBeforeRendering = function () {

	if (sap.uxap.ObjectPageSectionBase.prototype.onBeforeRendering) {
		sap.uxap.ObjectPageSectionBase.prototype.onBeforeRendering.call(this);
	}

	var aVisibleBlocks, sLayout;

	//proxy aggregations
	this._setAggregationProxy();

	this._oGrid.removeAllContent();

	//build layouts
	try {
		//propagate subSectionLayout from objectPageLayout subSections
		var iColumnLayout;

		if (this._getObjectPageLayout()) {
			sLayout = this._getObjectPageLayout().getSubSectionLayout();
		}

		//layout specific configuration
		switch (sLayout) {
			case sap.uxap.ObjectPageSubSectionLayout.TitleOnLeft:
				this._oGrid.setContainerQuery(false);
				iColumnLayout = 2;
				break;
			default:
				this._oGrid.setContainerQuery(true);
				iColumnLayout = 3;
		}


		//apply the layouting information
		aVisibleBlocks = this._calcBlockColumnLayout(this.getBlocks(), iColumnLayout);

		jQuery.each(aVisibleBlocks, jQuery.proxy(function (iIndex, oBlock) {

			//propagate section state to blocks
			this._setBlockMode(oBlock, this.getMode());

			this._oGrid.addContent(oBlock);

		}, this));

		//also add the more blocks defined for being visible in expanded mode only
		if (this.getMode() === sap.uxap.ObjectPageSubSectionMode.Expanded) {

			//apply the layouting information
			aVisibleBlocks = this._calcBlockColumnLayout(this.getMoreBlocks(), iColumnLayout);

			jQuery.each(aVisibleBlocks, jQuery.proxy(function (iIndex, oMoreBlock) {
				//propagate section state to blocks
				this._setBlockMode(oMoreBlock, sap.uxap.ObjectPageSubSectionMode.Expanded);
				this._oGrid.addContent(oMoreBlock);
			}, this));
		}
	}
	catch (sError) {
		jQuery.sap.log.error("ObjectPageSubSection :: error while building layout " + sLayout + ": " + sError);
	}

	this.refreshSeeMoreVisibility();
};

sap.uxap.ObjectPageSubSection.prototype.refreshSeeMoreVisibility = function () {
	var bBlockHasMore = jQuery.isArray(this.getMoreBlocks()) && this.getMoreBlocks().length > 0; //we have moreBlocks therefore we always display the seeMore

	if (!bBlockHasMore) {
		jQuery.each(this.getBlocks(), jQuery.proxy(function (iIndex, oBlock) {

			//check if the block ask for the global see more the rule is
			//by default we don't display the see more
			//if one control is visible and ask for it then we display it
			if (oBlock instanceof sap.uxap.BlockBase && oBlock.getVisible() && oBlock.getShowSubSectionMore()) {
				bBlockHasMore = true;
			}
			return !bBlockHasMore;
		}, this));
	}

	//if the subsection is already rendered, don't rerender it all for showing a more button
	if (this.$().length > 0) {
		this.$().toggleClass("sapUxAPObjectPageSubSectionWithSeeMore", bBlockHasMore);
	}

	this.toggleStyleClass("sapUxAPObjectPageSubSectionWithSeeMore", bBlockHasMore);

	if (this._oSeeMoreButton.$().length > 0) {
		this._oSeeMoreButton.$().toggleClass("sapUxAPSubSectionSeeMoreButtonVisible", bBlockHasMore);
	}
	this._oSeeMoreButton.toggleStyleClass("sapUxAPSubSectionSeeMoreButtonVisible", bBlockHasMore);

	return bBlockHasMore;
};

sap.uxap.ObjectPageSubSection.prototype.setMode = function (sMode) {
	if (this.getMode() !== sMode) {
		this._switchSubSectionMode(sMode);

		if (this._bRenderedFirstTime) {
			this.rerender();
		}
	}
	return this;
};

/*************************************************************************************
 * generic block layout calculation
 ************************************************************************************/

/**
 * calculate the layout data to use for subsection blocks
 * Aligned with PUX specifications as of Oct 14, 2014
 */
sap.uxap.ObjectPageSubSection.prototype._calcBlockColumnLayout = function (aBlocks, iColumnLayout) {

	var iRemainingL,
		iRemainingM,
		aVisibleBlocks = [];

	//step 1: get only visible blocks into consideration
	jQuery.each(aBlocks, jQuery.proxy(function (iIndex, oBlock) {

		//if this is the first rendering and a layout has been defined by the subsection developer,
		//we remove it and let the built-in mechanism decide on the layouting aspects
		if (!this._bRenderedFirstTime && oBlock.getLayoutData()) {
			oBlock.destroyLayoutData();
			jQuery.sap.log.warning("ObjectPageSubSection :: forbidden use of layoutData for block " + oBlock.getMetadata().getName(), "layout will be set by subSection");
		}

		if (!oBlock.getVisible || oBlock.getVisible()) {
			aVisibleBlocks.push(oBlock);
		}
	}, this));

	//step 2: set layout for each blocks based on their columnLayout configuration
	//As of Oct 14, 2014, the default behavior is:
	//on phone, blocks take always the full line
	//on tablet, desktop:
	//1 block on the line: takes 3/3 columns
	//2 blocks on the line: takes 1/3 columns then 2/3 columns
	//3 blocks on the line: takes 1/3 columns then 1/3 columns and last 1/3 columns

	//rules for translating auto: LL2 grammar
	//1 by default
	//fills the line if the next 2 blocks permit it
	iRemainingL = iColumnLayout;
	iRemainingM = 2;

	jQuery.each(aVisibleBlocks, jQuery.proxy(function (iIndex, oBlock) {

		var iSizeL, iSizeM;

		iSizeL = this._calculatedSize(oBlock, iRemainingL, aVisibleBlocks[iIndex + 1], aVisibleBlocks[iIndex + 2], iColumnLayout);

		if (iColumnLayout == 3) {
			iSizeM = this._calculatedSize(oBlock, iRemainingM, aVisibleBlocks[iIndex + 1], aVisibleBlocks[iIndex + 2], 2);
		}
		else {
			iSizeM = iSizeL;
		}

		//set block layout based on resolution and break to a new line if necessary
		oBlock.setLayoutData(new sap.ui.layout.GridData({
			spanS: 12,
			spanM: iSizeM * (12 / 2),                       //iColumnLayout is 2 already
			spanL: iSizeL * (12 / iColumnLayout),
			linebreakM: (iIndex > 0 && iRemainingM === 2), //iColumnLayout is 2 already
			linebreakL: (iIndex > 0 && iRemainingL === iColumnLayout)
		}));


		iRemainingL -= iSizeL;
		if (iRemainingL <= 0) {
			iRemainingL = iColumnLayout;
		}

		if (iColumnLayout !== 1) {
			iRemainingM -= iSizeM;
			if (iRemainingM <= 0) {
				iRemainingM = 2;
			}
		}

	}, this));

	return aVisibleBlocks;
};

sap.uxap.ObjectPageSubSection.prototype._calculatedSize = function (oBlock, iRemaining, oNext, oFollowing, iMax) {
	var iCalculatedSize, iCalc;

	if (!this._hasAutoLayout(oBlock)) {
		iCalculatedSize = Math.min(iMax, window.parseInt(oBlock.getColumnLayout(), 10));
	}
	else {
		iRemaining -= 1;
		iCalc = this._calcLayout(oNext);
		if (iCalc <= iRemaining) {
			iRemaining -= iCalc;

			iCalc = this._calcLayout(oFollowing);
			if (iCalc <= iRemaining) {
				iRemaining -= iCalc;
			}
		}

		iCalculatedSize = iRemaining + 1;
	}

	return iCalculatedSize;
};

sap.uxap.ObjectPageSubSection.prototype._calcLayout = function (oBlock) {
	var iLayoutCols = 1;

	if (!oBlock) {
		iLayoutCols = 0;
	}
	else if (oBlock instanceof sap.uxap.BlockBase && oBlock.getColumnLayout() != "auto") {
		iLayoutCols = window.parseInt(oBlock.getColumnLayout(), 10);
	}

	return iLayoutCols;
};

sap.uxap.ObjectPageSubSection.prototype._hasAutoLayout = function (oBlock) {
	return !(oBlock instanceof sap.uxap.BlockBase) || oBlock.getColumnLayout() == "auto";
};


/*************************************************************************************
 * TitleOnLeft layout
 ************************************************************************************/

/**
 * on after rendering actions for the titleOnLeft Layout
 * @private
 */
sap.uxap.ObjectPageSubSection.prototype._afterRenderingTitleOnLeftLayout = function () {
	this._$standardHeader = jQuery.sap.byId(this.getId() + "-header");
	this._$grid = this._oGrid.$();

	if (!this._iResizeId) {
		this._iResizeId = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(this._titleOnLeftSynchronizeLayouts, this));
	}

	this._titleOnLeftSynchronizeLayouts();
};

sap.uxap.ObjectPageSubSection.prototype._titleOnLeftSynchronizeLayouts = function () {
	jQuery.sap.delayedCall(50 /* dom painting */, this, function () {
		this._$standardHeader.toggleClass("titleOnLeftLayout", this._$grid.hasClass("sapUiRespGridMedia-Std-Desktop"));
	});
};


/*************************************************************************************
 *  blocks & moreBlocks aggregation proxy
 *  getter and setters works with _aAggregationProxy instead of the blocks aggregation
 ************************************************************************************/

sap.uxap.ObjectPageSubSection.prototype._setAggregationProxy = function () {
	if (this._bRenderedFirstTime) {
		return;
	}

	//empty real aggregations and feed internal ones at first rendering only
	jQuery.each(this._aAggregationProxy, jQuery.proxy(function (sAggregationName, aValue) {
		this._setAggregation(sAggregationName, this.removeAllAggregation(sAggregationName));
	}, this));

	this._bRenderedFirstTime = true;
};

sap.uxap.ObjectPageSubSection.prototype.hasProxy = function (sAggregationName) {
	return this._bRenderedFirstTime && this._aAggregationProxy.hasOwnProperty(sAggregationName);
};

sap.uxap.ObjectPageSubSection.prototype._getAggregation = function (sAggregationName) {
	return this._aAggregationProxy[sAggregationName];
};

sap.uxap.ObjectPageSubSection.prototype._setAggregation = function (sAggregationName, aValue) {
	this._aAggregationProxy[sAggregationName] = aValue;
	this._notifyObjectPageLayout();
	this.invalidate();
	return this._aAggregationProxy[sAggregationName];
};

sap.uxap.ObjectPageSubSection.prototype.addAggregation = function (sAggregationName, oObject) {
	if (this.hasProxy(sAggregationName)) {
		var aAggregation = this._getAggregation(sAggregationName);
		aAggregation.push(oObject);
		this._setAggregation(aAggregation);
		return this;
	}

	return sap.uxap.ObjectPageSectionBase.prototype.addAggregation.apply(this, arguments);
};

sap.uxap.ObjectPageSubSection.prototype.insertAggregation = function (sAggregationName, oObject, iIndex) {
	if (this.hasProxy(sAggregationName)) {
		jQuery.sap.log.warning("ObjectPageSubSection :: used of insertAggregation for " + sAggregationName + " is not supported, will use addAggregation instead");
		return this.addAggregation(sAggregationName, oObject);
	}

	return sap.uxap.ObjectPageSectionBase.prototype.insertAggregation.apply(this, arguments);
};

sap.uxap.ObjectPageSubSection.prototype.removeAllAggregation = function (sAggregationName) {
	if (this.hasProxy(sAggregationName)) {
		var aInternalAggregation = this._getAggregation(sAggregationName);
		var aItems = aInternalAggregation.slice(0, aInternalAggregation.length - 1);
		this._setAggregation(sAggregationName, []);
		return aItems;
	}

	return sap.uxap.ObjectPageSectionBase.prototype.removeAllAggregation.apply(this, arguments);
};

sap.uxap.ObjectPageSubSection.prototype.removeAggregation = function (sAggregationName, oObject) {

	if (this.hasProxy(sAggregationName)) {
		var bRemoved = false, aInternalAggregation = this._getAggregation(sAggregationName);

		jQuery.each(aInternalAggregation, jQuery.proxy(function (iIndex, oObjectCandidate) {
			if (oObjectCandidate.getId() === oObject.getId()) {
				aInternalAggregation.splice(iIndex, 1);
				this._setAggregation(aInternalAggregation);
				bRemoved = true;
			}
			return !bRemoved;
		}, this));

		return (bRemoved ? oObject : null);
	}

	return sap.uxap.ObjectPageSectionBase.prototype.removeAggregation.apply(this, arguments);
};

sap.uxap.ObjectPageSubSection.prototype.indexOfAggregation = function (sAggregationName, oObject) {

	if (this.hasProxy(sAggregationName)) {

		var iIndexFound = -1, aInternalAggregation = this._getAggregation(sAggregationName);

		jQuery.each(aInternalAggregation, jQuery.proxy(function (iIndex, oObjectCandidate) {
			if (oObjectCandidate.getId() === oObject.getId()) {
				iIndexFound = iIndex;
			}
			return (iIndexFound < 0);
		}, this));

		return iIndexFound;
	}

	return sap.uxap.ObjectPageSectionBase.prototype.indexOfAggregation.apply(this, arguments);
};

sap.uxap.ObjectPageSubSection.prototype.getAggregation = function (sAggregationName) {
	if (this.hasProxy(sAggregationName)) {
		return this._getAggregation(sAggregationName);
	}

	return sap.uxap.ObjectPageSectionBase.prototype.getAggregation.apply(this, arguments);
};

sap.uxap.ObjectPageSubSection.prototype.destroyAggregation = function (sAggregationName) {

	if (this.hasProxy(sAggregationName)) {

		var aInternalAggregation = this._getAggregation(sAggregationName);

		jQuery.each(aInternalAggregation, function (iIndex, oObject) {
			oObject.destroy();
		});

		this._setAggregation(sAggregationName, []);

		return this;
	}

	return sap.uxap.ObjectPageSectionBase.prototype.destroyAggregation.apply(this, arguments);
};

/*************************************************************************************
 *  Private section : should overridden with care
 ************************************************************************************/

/**
 * build the control that will used internally for the see more / see less
 * @private
 */
sap.uxap.ObjectPageSubSection.prototype._buildSeeMoreControl = function () {
	this._oSeeMoreButton = new sap.m.Button(this.getId() + "--seeMore", {
		type: sap.m.ButtonType.Transparent,
		iconFirst: false,
		press: jQuery.proxy(this._onSeeMorePress, this)
	}).addStyleClass("sapUxAPSubSectionSeeMoreButton");
};

/**
 * called when a user clicks on the see more or see all button
 * @param oEvent
 * @private
 */
sap.uxap.ObjectPageSubSection.prototype._onSeeMorePress = function (oEvent) {

	var sCurrentMode = this.getMode(),
		sTargetMode,
		aMoreBlocks = this.getMoreBlocks() || [];

	//we just switch the layoutMode for the underlying blocks
	if (sCurrentMode === sap.uxap.ObjectPageSubSectionMode.Expanded) {
		sTargetMode = sap.uxap.ObjectPageSubSectionMode.Collapsed;
	}
	else {/* we are in Collapsed */
		sTargetMode = sap.uxap.ObjectPageSubSectionMode.Expanded;

		if (aMoreBlocks.length > 0) {
			jQuery.each(aMoreBlocks, jQuery.proxy(function (iBlockIndex, oMoreBlock) {
				if (oMoreBlock instanceof sap.uxap.BlockBase) {
					if (!oMoreBlock.getMode()) {
						oMoreBlock.setMode(this.getMode());
					}
					oMoreBlock.connectToModels();
				}
			}, this));
		}
	}
	this._switchSubSectionMode(sTargetMode);

	//avoid to reapply the focus after rendering on tablet and desktop (finalizeRendering)
	if (!jQuery.device.is.phone) {
		oEvent.getSource().$().blur();
	}

	//in case of the last subsection of an objectpage we need to compensate its height change while rerendering)
	if (this._$spacer.length > 0) {
		this._$spacer.height(this._$spacer.height() + this.$().height());
	}

	//need to re-render the subsection in order to render all the blocks with the appropriate mode & layout
	//0000811842 2014
	this.rerender();

};

/**
 * switch the state for the subsection
 * @param sSwitchToMode
 * @private
 */
sap.uxap.ObjectPageSubSection.prototype._switchSubSectionMode = function (sSwitchToMode) {
	sSwitchToMode = this.validateProperty("mode", sSwitchToMode);

	if (sSwitchToMode === sap.uxap.ObjectPageSubSectionMode.Collapsed) {
		this.setProperty("mode", sap.uxap.ObjectPageSubSectionMode.Collapsed, true);
		this._oSeeMoreButton.setText(this.oResourceBundle.getText("SEE_MORE"));
	}
	else {
		this.setProperty("mode", sap.uxap.ObjectPageSubSectionMode.Expanded, true);
		this._oSeeMoreButton.setText(this.oResourceBundle.getText("SEE_LESS"));
	}
};

/**
 * set the mode on a control if there is such mode property
 * @param oBlock
 * @param sMode
 * @private
 */
sap.uxap.ObjectPageSubSection.prototype._setBlockMode = function (oBlock, sMode) {
	if (oBlock instanceof sap.uxap.BlockBase) {
		oBlock.setMode(sMode);
	}
	else {
		jQuery.sap.log.debug("ObjectPageSubSection :: cannot propagate mode " + sMode + " to " + oBlock.getMetadata().getName());
	}
};
