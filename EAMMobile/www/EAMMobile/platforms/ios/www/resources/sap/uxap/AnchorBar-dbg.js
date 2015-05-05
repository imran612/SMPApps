/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.AnchorBar.
jQuery.sap.declare("sap.uxap.AnchorBar");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.m.Toolbar");


/**
 * Constructor for a new AnchorBar.
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
 * <li>{@link #getShowPopover showPopover} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedButton selectedButton} : string | sap.m.Button</li></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Toolbar#constructor sap.m.Toolbar}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A AnchorBar is bar that displays content differently between desktop/tablet and phone.
 * @extends sap.m.Toolbar
 *
 * @author SAP SE
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.AnchorBar
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.m.Toolbar.extend("sap.uxap.AnchorBar", { metadata : {

	publicMethods : [
		// methods
		"scrollToSection", "getScrollDelegate"
	],
	library : "sap.uxap",
	properties : {
		"showPopover" : {type : "boolean", group : "", defaultValue : true}
	},
	associations : {
		"selectedButton" : {type : "sap.m.Button", multiple : false}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.AnchorBar with name <code>sClassName</code> 
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
 * @name sap.uxap.AnchorBar.extend
 * @function
 */


/**
 * Getter for property <code>showPopover</code>.
 * Show or not the popover when clicking on first level buttons
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showPopover</code>
 * @public
 * @name sap.uxap.AnchorBar#getShowPopover
 * @function
 */

/**
 * Setter for property <code>showPopover</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowPopover  new value for property <code>showPopover</code>
 * @return {sap.uxap.AnchorBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.AnchorBar#setShowPopover
 * @function
 */


/**
 * The button that represents the section being scrolled by the user.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedButton</code> association, or null
 * @public
 * @name sap.uxap.AnchorBar#getSelectedButton
 * @function
 */

/**
 * The button that represents the section being scrolled by the user.
 *
 * @param {string | sap.m.Button} vSelectedButton 
 *    Id of an element which becomes the new target of this <code>selectedButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.uxap.AnchorBar} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.AnchorBar#setSelectedButton
 * @function
 */


	
/**
 * Scrolls to the given section
 *
 * @name sap.uxap.AnchorBar#scrollToSection
 * @function
 * @param {string} sId
 *         The section id to scroll to
 * @param {int} iDuration
 *         Scroll duration (in ms). Default value is 0
 * @type sap.uxap.ObjectPageLayout
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Returns a sap.ui.core.delegate.ScrollEnablement object used to handle scrolling
 *
 * @name sap.uxap.AnchorBar#getScrollDelegate
 * @function
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap/uxap/AnchorBar.js
jQuery.sap.require("sap.uxap.HierarchicalSelect");
jQuery.sap.require("sap.ui.core.Item");
jQuery.sap.require("sap.ui.core.ResizeHandler");
jQuery.sap.require("sap.m.Popover");
jQuery.sap.require("sap.m.PlacementType");
jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");

sap.uxap.AnchorBar.prototype.init = function () {
	if (sap.m.Toolbar.prototype.init) {
		sap.m.Toolbar.prototype.init.call(this);
	}

	this.addStyleClass("sapUxAPAnchorBar");

	this._aPopovers = [];       //keep references on the popovers in order to clean them on exit
	this._oPressHandlers = {};  //keep references on the press handlers we set on first level items (in case of behavior change)
	this._oSectionInfo = {};    //keep scrolling info on sections
	this._oPhoneAction = null;
	this._oScroller = null;
	this._oArrowLeft = null;
	this._oArrowRight = null;

	//store reference on the phone control dom for perf
	this._$phone = [];

	//are we on a rtl scenario?
	//IE handles rtl in a transparent way (positions positives, scroll starts at the end)
	//while firefox, safari and chrome have a special management (scroll at the beginning and negative positioning)
	//therefore we will apply some specific actions only if are in rtl and not in IE.
	this._bRtlScenario = sap.ui.getCore().getConfiguration().getRTL() && !sap.ui.Device.browser.msie;

	//there are 3 different uses cases:
	//case 1: on a real phone we don't need the scrolling anchorBar, just the hierarchicalSelect
	//case 2: on a real ipad, we don't need the hierarchicalSelect select, just the anchorBar
	//case 3: on a desktop we need both as the size may change

	this._bPhoneScenario = sap.ui.Device.system.phone || sap.ui.Device.system.desktop;
	this._bTabletScenario = sap.ui.Device.system.tablet || sap.ui.Device.system.desktop;

	//case 2&3 require the scrolling anchorBar
	if (this._bTabletScenario) {
		//horizontal scrolling
		this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-scroll", {
			horizontal: true,
			vertical: false,
			nonTouchScrolling: true
		});

		this._oArrowLeft = sap.m.ImageHelper.getImageControl(this.getId() + "-arrowScrollLeft", this._oArrowLeft, this, {
			src: "sap-icon://navigation-left-arrow"
		}, ["sapMITBArrowScroll", "sapMITBArrowScrollLeft", "sapUxAPAnchorBarArrowScroll"]);     //same classes as the iconTabBar as requested by Ux

		this._oArrowRight = sap.m.ImageHelper.getImageControl(this.getId() + "-arrowScrollRight", this._oArrowRight, this, {
			src: "sap-icon://navigation-right-arrow"
		}, ["sapMITBArrowScroll", "sapMITBArrowScrollRight", "sapUxAPAnchorBarArrowScroll"]);   //same classes as the iconTabBar as requested by Ux

		this._iREMSize = parseInt(jQuery("body").css("font-size"), 10);
		this._iTolerance = this._iREMSize * 3;  // 3 rem

		//listen to resize
		this._sResizeListenerId = undefined; //defined in onAfterRendering
	}

	if (this._bPhoneScenario) {
		//select to display in phone scenario
		this._oPhoneAction = new sap.uxap.HierarchicalSelect({
			width: "100%",
			change: jQuery.proxy(this._onPhoneSelectChange, this)
		});
		this._oPhoneAction.setParent(this);
	}

	//composite controls
	this.setDesign("Transparent"); //styling is coming from css
};

/*******************************************************************************
 * UX design
 ******************************************************************************/
sap.uxap.AnchorBar.SCROLL_STEP = 250; // how many pixels to scroll with every overflow arrow click
sap.uxap.AnchorBar.SCROLL_DURATION = 500; // ms
sap.uxap.AnchorBar.DOM_CALC_DELAY = 200;  //ms.

sap.uxap.AnchorBar.prototype.setSelectedButton = function (oButton) {

	if (typeof oButton === "string") {
		oButton = sap.ui.getCore().byId(oButton);
	}

	if (oButton) {

		if (this._bTabletScenario) {
			//remove selection class from the currently selected item
			this.$().find(".sapUxAPAnchorBarButtonSelected").removeClass("sapUxAPAnchorBarButtonSelected");
			oButton.$().addClass("sapUxAPAnchorBarButtonSelected");
		}

		if (oButton.data("sectionId")) {
			if (this._bTabletScenario) {
				this.scrollToSection(oButton.data("sectionId"), sap.uxap.AnchorBar.SCROLL_DURATION);
			}

			if (this._bPhoneScenario) {
				this._oPhoneAction.setSelectedKey(oButton.getId());
			}
		}
	}

	return this.setAssociation("selectedButton", oButton, true /* don't rerender */);
};

/*******************************************************************************
 * Responsive behavior
 ******************************************************************************/

sap.uxap.AnchorBar.prototype.setShowPopover = function (bValue, bSuppressInvalidate) {

	var sSelectedButton, bNeedInvalidate = !jQuery.isEmptyObject(this._oPressHandlers);

	//changing the behavior after the firstRendering is removing all press handlers on first level items
	if (bNeedInvalidate) {
		var aContent = this.getContent() || [];
		sSelectedButton = this.getSelectedButton();

		jQuery.each(aContent, jQuery.proxy(function (iIndex, oButton) {
			if (this._oPressHandlers[oButton.getId()]) {
				oButton.detachPress(this._oPressHandlers[oButton.getId()]);
				this._oPressHandlers[oButton.getId()] = null;
			}
		}, this));
	}

	this.setProperty("showPopover", bValue, true /* always trigger re-rendering manually */);

	if (bNeedInvalidate) {
		this.rerender();

		if (sSelectedButton) {
			this.setSelectedButton(sSelectedButton);
		}
	}

	return this;
};

/**
 * create phone equivalents for each of the provided content controls
 */
sap.uxap.AnchorBar.prototype.onBeforeRendering = function () {
	if (sap.m.Toolbar.prototype.onBeforeRendering) {
		sap.m.Toolbar.prototype.onBeforeRendering.call(this);
	}

	var aContent = this.getContent() || [],
		oLastFirstLevelButton = null,
		oCurrentPopover = null,
		oPhoneItem,
		fnPressHandler = null;

	if (this._bPhoneScenario) {
		this._oPhoneAction.removeAllItems();
	}

	//create responsive equivalents of the provided controls
	jQuery.each(aContent, jQuery.proxy(function (iIndex, oButton) {
		var bIsSecondLevel = oButton.data("secondLevel") === true || oButton.data("secondLevel") === "true";

		//create the phone equivalent item if the button has some visible text (UX rule)
		if (this._bPhoneScenario) {
			if (oButton.getText().trim() != "" && (!bIsSecondLevel || oButton.data("phoneVisibility") === true)) {
				oPhoneItem = new sap.ui.core.Item({
					key: oButton.getId(),
					text: oButton.getText(),
					customData: [
						new sap.ui.core.CustomData({
							key: "secondLevel",
							value: oButton.data("secondLevel")
						})
					]
				});

				this._oPhoneAction.addItem(oPhoneItem);
			}
		}

		//desktop scenario logic: builds the scrolling anchorBar
		if (this._bTabletScenario) {
			//handles the tablet/desktop hierarchical behavior
			//a second level is injected into the latest first level
			//at this point we know that there are children to the last firstLevel therefore we can create the popover
			if (bIsSecondLevel) {

				if (oLastFirstLevelButton && oCurrentPopover) {

					//don't attach the parent press handler for each child
					if (!this._oPressHandlers[oLastFirstLevelButton.getId()]) {

						fnPressHandler = jQuery.proxy(function (oEvent) {
								var aPopoverButtons = this.oCurrentPopover.getContent() || [];

								//open the popover only if we are in Tablet/Desktop scenario = the button is visible in the anchorBar
								if (this.oLastFirstLevelButton.$().is(":visible")) {

									//specific use case management: if there are only 1 button in the popover, then we don't display it and navigate directly (= the subsection is "promoted" it to a section level)
									//this is a specific behavior asked by UX as of Sep 25, 2014
									if (aPopoverButtons.length == 1) {
										aPopoverButtons[0].firePress({});
									}
									else {
										this.oCurrentPopover.openBy(this.oLastFirstLevelButton);
									}
								}
							}, /* closure with oLastFirstLevelButton and oCurrentPopover as context */
							{
								oCurrentPopover: oCurrentPopover,
								oLastFirstLevelButton: oLastFirstLevelButton
							}
						);


						oLastFirstLevelButton.attachPress(fnPressHandler);
						this._oPressHandlers[oLastFirstLevelButton.getId()] = fnPressHandler;
					}

					oCurrentPopover.addContent(oButton);
				}
				else if (this.getShowPopover()) {
					jQuery.sap.log.error("sapUxApAnchorBar :: missing parent first level for item " + oButton.getText());
				}
				else {
					this.removeContent(oButton);
				}
			}
			else {
				oLastFirstLevelButton = oButton;

				//default behavior: the first level show a popover containing second levels
				if (this.getShowPopover()) {
					oCurrentPopover = new sap.m.Popover({
						placement: sap.m.PlacementType.Bottom,
						showHeader: false,
						verticalScrolling: true,
						horizontalScrolling: false,
						contentWidth: "auto"
					});

					//UX design as of Sep 30, 2014
					//remove the arrow and reposition the whole popover
					oCurrentPopover.openBy = jQuery.proxy(function (oControl) {
						var iPlacePos = jQuery.inArray(sap.m.PlacementType.Bottom, this._placements);

						this._arrowOffset = 0;
						this._offsets[iPlacePos] = "0 0";

						sap.m.Popover.prototype.openBy.apply(this, arguments);
					}, oCurrentPopover);

					oCurrentPopover.addStyleClass("sapUxAPAnchorBarPopover");
					this._aPopovers.push(oCurrentPopover);
				}
				//alternative behavior: the first level triggers direct navigation
				else {

					if (!this._oPressHandlers[oLastFirstLevelButton.getId()]) {

						fnPressHandler = jQuery.proxy(function (oEvent) {
							if (this.getParent() instanceof sap.uxap.ObjectPageLayout) {
								this.getParent().scrollToSection(oEvent.getSource().data("sectionId"));
							}
						}, this);

						oLastFirstLevelButton.attachPress(fnPressHandler);

						this._oPressHandlers[oLastFirstLevelButton.getId()] = fnPressHandler;
					}
				}
			}
		}

	}, this));
};


sap.uxap.AnchorBar.prototype.addContent = function (oButton, bInvalidate) {
	oButton.addStyleClass("sapUxAPAnchorBarButton");

	if (this._bTabletScenario && (oButton.data("secondLevel") === true || oButton.data("secondLevel") === "true")) {

		//attach handler on the scrolling mechanism
		oButton.attachPress(function (oEvent) {
			if (oEvent.getSource().getParent() instanceof sap.m.Popover) {
				oEvent.getSource().getParent().close();
			}

			if (this.getParent() instanceof sap.uxap.ObjectPageLayout) {
				this.getParent().scrollToSection(oEvent.getSource().data("sectionId"));
			}
		}, this);
	}

	return this.addAggregation("content", oButton, bInvalidate);
};

/**
 * called on phone display only when a user selects a section to navigate to
 * simulate the press on the corresponding button
 * @param oEvent
 * @private
 */
sap.uxap.AnchorBar.prototype._onPhoneSelectChange = function (oEvent) {
	var oSelectedItem = oEvent.getParameter("selectedItem"), oOriginalControl;

	oOriginalControl = sap.ui.getCore().byId(oSelectedItem.getKey());

	if (oOriginalControl) {

		//forward press event
		if (oOriginalControl.firePress) {
			oOriginalControl.firePress({});
		}

		//in any case, call the scrolling mechanism
		if (this.getParent() instanceof sap.uxap.ObjectPageLayout) {
			this.getParent().scrollToSection(oOriginalControl.data("sectionId"));
		}
	}
	else {
		jQuery.sap.log.error("AnchorBar :: cannot find corresponding button", oSelectedItem.getKey());
	}
};


/*******************************************************************************
 * Horizontal scrolling
 ******************************************************************************/

sap.uxap.AnchorBar.prototype._adjustSize = function () {

	var $dom = this.$(),
		bNeedScrollingBegin,
		bNeedScrollingEnd,
		iContainerWidth;

	//don't go any further if the phone control is displayed = we never need scrolling
	if (this._$phone.length > 0 && this._$phone.is(":visible")) {
		return;
	}

	//don't go any further if the positions of the items are not calculated yet
	if (this._iMaxPosition < 0) {
		return;
	}

	iContainerWidth = this.$().parent().width();

	//do we need to scroll left or right
	if (this._bRtlScenario) {
		bNeedScrollingEnd = this._oScroller.getScrollLeft() >= this._iTolerance;
		bNeedScrollingBegin = this._oScroller.getScrollLeft() + iContainerWidth < this._iMaxPosition;
	}
	else {
		bNeedScrollingEnd = this._oScroller.getScrollLeft() + iContainerWidth < this._iMaxPosition;
		bNeedScrollingBegin = this._oScroller.getScrollLeft() >= this._iTolerance;
	}

	jQuery.sap.log.debug("AnchorBar :: scrolled at " + this._oScroller.getScrollLeft(), "scrollBegin [" + (bNeedScrollingBegin ? "true" : "false") + "] scrollEnd [" + (bNeedScrollingEnd ? "true" : "false") + "]");

	$dom.toggleClass("sapUxAPAnchorBarScrollLeft", bNeedScrollingBegin);
	$dom.toggleClass("sapUxAPAnchorBarScrollRight", bNeedScrollingEnd);
};

/**
 * Handles touch end and events and trigger selection if bar was not dragged.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.uxap.AnchorBar.prototype.ontap = function (oEvent) {
	var sTargetId = oEvent.target.id,
		sId = this.getId(),
		iDirection = this._bRtlScenario ? -1 : 1;

	if (sTargetId == sId + "-arrowScrollLeft") {
		oEvent.preventDefault();
		this._oScroller.scrollTo(Math.max(this._oScroller.getScrollLeft() - sap.uxap.AnchorBar.SCROLL_STEP * iDirection, 0), 0, sap.uxap.AnchorBar.SCROLL_DURATION);
	}
	else if (sTargetId == sId + "-arrowScrollRight") {
		oEvent.preventDefault();
		this._oScroller.scrollTo(this._oScroller.getScrollLeft() + sap.uxap.AnchorBar.SCROLL_STEP * iDirection, 0, sap.uxap.AnchorBar.SCROLL_DURATION);
	}
	/*
	 else {
	 do nothing we didn't press or select a navigation arrow
	 }*/
};

/**
 * Scroll to a specific Section
 *
 * @param sId       id of the section to scroll to
 * @param duration  Scroll duration. Default value is 0
 *
 */
sap.uxap.AnchorBar.prototype.scrollToSection = function (sId, duration) {

	if (this._bTabletScenario) {
		var iDuration = duration || sap.uxap.AnchorBar.SCROLL_DURATION,
			iScrollTo;

		if ((this._$phone.length == 0 || !this._$phone.is(":visible")) && this._oSectionInfo[sId]) {

			//scroll to the positionRtl minus the tolerance (so the navigation arrow never hide the content)
			iScrollTo = this._oSectionInfo[sId].scrollLeft - this._iTolerance;

			jQuery.sap.log.debug("AnchorBar :: scrolling to section " + sId + " of " + iScrollTo);

			//avoid triggering twice the scrolling onto the same target section
			if (this._sCurrentScrollId != sId) {
				this._sCurrentScrollId = sId;

				if (this._iCurrentScrollTimeout) {
					jQuery.sap.clearDelayedCall(this._iCurrentScrollTimeout);
					jQuery.sap.byId(this.getId() + "-scroll").parent().stop(true, false);
				}

				this._iCurrentScrollTimeout = jQuery.sap.delayedCall(duration, this, function () {
					this._sCurrentScrollId = undefined;
					this._iCurrentScrollTimeout = undefined;
				});

				this._oScroller.scrollTo(iScrollTo, 0, iDuration);
			}
		}
		else {
			jQuery.sap.log.debug("AnchorBar :: no need to scroll to " + sId);
		}
	}
};

/**
 * Returns the sap.ui.core.ScrollEnablement delegate which is used with this control.
 */
sap.uxap.AnchorBar.prototype.getScrollDelegate = function () {
	return this._oScroller;
};

/*******************************************************************************
 * Keyboard navigation
 ******************************************************************************/

/**
 * called for figuring out responsive scenarios
 */

sap.uxap.AnchorBar.prototype.onAfterRendering = function () {
	if (sap.m.Toolbar.prototype.onAfterRendering) {
		sap.m.Toolbar.prototype.onAfterRendering.call(this);
	}

	if (this._bPhoneScenario) {
		//store reference on control doms for perf reasons
		this._$phone = this._oPhoneAction.$();
	}

	//save max for arrow show/hide management, the max position is the required scroll for the the item to be fully visible
	this._iMaxPosition = -1;

	//show/hide scrolling arrows
	this._sResizeListenerId = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(this._adjustSize, this));

	this.$().find(".sapUxAPAnchorBarScrollContainer").scroll(jQuery.proxy(function () {
		if (!this._iCurrentSizeCheckTimeout) {
			this._iCurrentSizeCheckTimeout = jQuery.sap.delayedCall(sap.uxap.AnchorBar.SCROLL_DURATION, this, function () {
				this._iCurrentSizeCheckTimeout = undefined;
				this._adjustSize();
			});
		}

	}, this));

	//initial state
	if (this._bTabletScenario) {

		jQuery.sap.delayedCall(sap.uxap.AnchorBar.DOM_CALC_DELAY, this, function () {

			var aContent = this.getContent() || [];

			//reset the max position
			this._iMaxPosition = 0;

			jQuery.each(aContent, jQuery.proxy(function (iIndex, oContent) {


				var iWidth = oContent.$().outerWidth(true);

				//store info on the various sections for horizontalScrolling
				//scrollLeft is the amount of scroll required for reaching that item in normal mode
				this._oSectionInfo[oContent.data("sectionId")] = {
					scrollLeft: this._iMaxPosition,
					width: iWidth
				};

				this._iMaxPosition += iWidth;

			}, this));


			//post processing based on how browsers implement rtl
			if (this._bRtlScenario) {

				//chrome, safari
				if (sap.ui.Device.browser.webkit) {

					//reverse all positions as the scroll 0 is at the far end (first item = maxPosition, last item = 0)
					jQuery.each(aContent, jQuery.proxy(function (iIndex, oContent) {
						var oSectionInfo = this._oSectionInfo[oContent.data("sectionId")];

						oSectionInfo.scrollLeft = this._iMaxPosition - oSectionInfo.scrollLeft - oSectionInfo.width;
					}, this));

					this._oScroller.scrollTo(this._iMaxPosition, 0, 0);
				}
				//firefox not working yet see internal incident 1570001701
			}

			this._adjustSize();
		});
	}

	//restore state from previous rendering
	if (this.getSelectedButton()) {
		this.setSelectedButton(this.getSelectedButton());
	}
};

/**
 * clean created controls and deregister handlers
 */
sap.uxap.AnchorBar.prototype.exit = function () {

	if (this._oPhoneAction) {
		this._oPhoneAction.destroy();
		this._oPhoneAction = null;
	}

	if (this._oArrowLeft) {
		this._oArrowLeft.destroy();
		this._oArrowLeft = null;
	}

	if (this._oArrowRight) {
		this._oArrowRight.destroy();
		this._oArrowRight = null;
	}

	if (this._aPopovers) {
		jQuery.each(this._aPopovers, function (iIndex, oActionSheet) {
			oActionSheet.destroy();
			oActionSheet = null;
		});
	}

	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}

	if (this._oScroller) {
		this._oScroller.destroy();
		this._oScroller = null;
	}
};

