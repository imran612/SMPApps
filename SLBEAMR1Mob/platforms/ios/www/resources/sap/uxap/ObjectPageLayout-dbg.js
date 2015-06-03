/*!
 * SAP.${maven.build.timestamp} UI development toolkit for HTML5 (SAPUI5) (c) Copyright
 * 		2009-2014 SAP SE. All rights reserved
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.uxap.ObjectPageLayout.
jQuery.sap.declare("sap.uxap.ObjectPageLayout");
jQuery.sap.require("sap.uxap.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ObjectPageLayout.
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
 * <li>{@link #getShowAnchorBar showAnchorBar} : boolean (default: true)</li>
 * <li>{@link #getShowAnchorBarPopover showAnchorBarPopover} : boolean (default: true)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '100%')</li>
 * <li>{@link #getEnableLazyLoading enableLazyLoading} : boolean (default: false)</li>
 * <li>{@link #getSubSectionLayout subSectionLayout} : sap.uxap.ObjectPageSubSectionLayout (default: sap.uxap.ObjectPageSubSectionLayout.TitleOnTop)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSections sections} <strong>(default aggregation)</strong> : sap.uxap.ObjectPageSection[]</li>
 * <li>{@link #getHeaderTitle headerTitle} : sap.uxap.ObjectPageHeader</li>
 * <li>{@link #getHeaderContent headerContent} : sap.ui.core.Control[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.uxap.ObjectPageLayout#event:toggleAnchorBar toggleAnchorBar} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * An ObjectPageLayout is a generic view to display blocks of information.
 * @extends sap.ui.core.Control
 *
 * @author SAP SE
 * @version 1.26.6
 *
 * @constructor
 * @public
 * @name sap.uxap.ObjectPageLayout
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 */
sap.ui.core.Control.extend("sap.uxap.ObjectPageLayout", { metadata : {

	publicMethods : [
		// methods
		"scrollToSection", "getScrollDelegate", "getScrollingSectionId"
	],
	library : "sap.uxap",
	properties : {
		"showAnchorBar" : {type : "boolean", group : "", defaultValue : true},
		"showAnchorBarPopover" : {type : "boolean", group : "", defaultValue : true},
		"height" : {type : "sap.ui.core.CSSSize", group : "", defaultValue : '100%'},
		"enableLazyLoading" : {type : "boolean", group : "", defaultValue : false},
		"subSectionLayout" : {type : "sap.uxap.ObjectPageSubSectionLayout", group : "", defaultValue : sap.uxap.ObjectPageSubSectionLayout.TitleOnTop}
	},
	defaultAggregation : "sections",
	aggregations : {
		"sections" : {type : "sap.uxap.ObjectPageSection", multiple : true, singularName : "section"}, 
		"headerTitle" : {type : "sap.uxap.ObjectPageHeader", multiple : false}, 
		"headerContent" : {type : "sap.ui.core.Control", multiple : true, singularName : "headerContent"}, 
		"_anchorBar" : {type : "sap.uxap.AnchorBar", multiple : false, visibility : "hidden"}
	},
	events : {
		"toggleAnchorBar" : {}
	}
}});


/**
 * Creates a new subclass of class sap.uxap.ObjectPageLayout with name <code>sClassName</code> 
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
 * @name sap.uxap.ObjectPageLayout.extend
 * @function
 */

sap.uxap.ObjectPageLayout.M_EVENTS = {'toggleAnchorBar':'toggleAnchorBar'};


/**
 * Getter for property <code>showAnchorBar</code>.
 * Show or not the anchor bar
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showAnchorBar</code>
 * @public
 * @name sap.uxap.ObjectPageLayout#getShowAnchorBar
 * @function
 */

/**
 * Setter for property <code>showAnchorBar</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowAnchorBar  new value for property <code>showAnchorBar</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#setShowAnchorBar
 * @function
 */


/**
 * Getter for property <code>showAnchorBarPopover</code>.
 * Show or not the anchor bar popover when clicking on section links
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>showAnchorBarPopover</code>
 * @public
 * @name sap.uxap.ObjectPageLayout#getShowAnchorBarPopover
 * @function
 */

/**
 * Setter for property <code>showAnchorBarPopover</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bShowAnchorBarPopover  new value for property <code>showAnchorBarPopover</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#setShowAnchorBarPopover
 * @function
 */


/**
 * Getter for property <code>height</code>.
 *
 * Default value is <code>100%</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * @name sap.uxap.ObjectPageLayout#getHeight
 * @function
 */

/**
 * Setter for property <code>height</code>.
 *
 * Default value is <code>100%</code> 
 *
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#setHeight
 * @function
 */


/**
 * Getter for property <code>enableLazyLoading</code>.
 * Enable the lazy loading based on the position in the current window
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>enableLazyLoading</code>
 * @public
 * @name sap.uxap.ObjectPageLayout#getEnableLazyLoading
 * @function
 */

/**
 * Setter for property <code>enableLazyLoading</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bEnableLazyLoading  new value for property <code>enableLazyLoading</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#setEnableLazyLoading
 * @function
 */


/**
 * Getter for property <code>subSectionLayout</code>.
 * Display the titles on the left or on top of the subSection contents.
 *
 * Default value is <code>TitleOnTop</code>
 *
 * @return {sap.uxap.ObjectPageSubSectionLayout} the value of property <code>subSectionLayout</code>
 * @public
 * @name sap.uxap.ObjectPageLayout#getSubSectionLayout
 * @function
 */

/**
 * Setter for property <code>subSectionLayout</code>.
 *
 * Default value is <code>TitleOnTop</code> 
 *
 * @param {sap.uxap.ObjectPageSubSectionLayout} oSubSectionLayout  new value for property <code>subSectionLayout</code>
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#setSubSectionLayout
 * @function
 */


/**
 * Getter for aggregation <code>sections</code>.<br/>
 * The various sections or subSections contained within the Object Page.
 * 
 * <strong>Note</strong>: this is the default aggregation for ObjectPageLayout.
 * @return {sap.uxap.ObjectPageSection[]}
 * @public
 * @name sap.uxap.ObjectPageLayout#getSections
 * @function
 */


/**
 * Inserts a section into the aggregation named <code>sections</code>.
 *
 * @param {sap.uxap.ObjectPageSection}
 *          oSection the section to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the section should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the section is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#insertSection
 * @function
 */

/**
 * Adds some section <code>oSection</code> 
 * to the aggregation named <code>sections</code>.
 *
 * @param {sap.uxap.ObjectPageSection}
 *            oSection the section to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#addSection
 * @function
 */

/**
 * Removes an section from the aggregation named <code>sections</code>.
 *
 * @param {int | string | sap.uxap.ObjectPageSection} vSection the section to remove or its index or id
 * @return {sap.uxap.ObjectPageSection} the removed section or null
 * @public
 * @name sap.uxap.ObjectPageLayout#removeSection
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>sections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.uxap.ObjectPageSection[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uxap.ObjectPageLayout#removeAllSections
 * @function
 */

/**
 * Checks for the provided <code>sap.uxap.ObjectPageSection</code> in the aggregation named <code>sections</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.uxap.ObjectPageSection}
 *            oSection the section whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.uxap.ObjectPageLayout#indexOfSection
 * @function
 */
	

/**
 * Destroys all the sections in the aggregation 
 * named <code>sections</code>.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#destroySections
 * @function
 */


/**
 * Getter for aggregation <code>headerTitle</code>.<br/>
 * Object Page header (ObjectHeader).
 * 
 * @return {sap.uxap.ObjectPageHeader}
 * @public
 * @name sap.uxap.ObjectPageLayout#getHeaderTitle
 * @function
 */


/**
 * Setter for the aggregated <code>headerTitle</code>.
 * @param {sap.uxap.ObjectPageHeader} oHeaderTitle
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#setHeaderTitle
 * @function
 */
	

/**
 * Destroys the headerTitle in the aggregation 
 * named <code>headerTitle</code>.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#destroyHeaderTitle
 * @function
 */


/**
 * Getter for aggregation <code>headerContent</code>.<br/>
 * Object Page header content (What's up / KPI List).
 * 
 * @return {sap.ui.core.Control[]}
 * @public
 * @name sap.uxap.ObjectPageLayout#getHeaderContent
 * @function
 */


/**
 * Inserts a headerContent into the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.core.Control}
 *          oHeaderContent the headerContent to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the headerContent should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the headerContent is inserted at 
 *             the last position        
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#insertHeaderContent
 * @function
 */

/**
 * Adds some headerContent <code>oHeaderContent</code> 
 * to the aggregation named <code>headerContent</code>.
 *
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent to add; if empty, nothing is inserted
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#addHeaderContent
 * @function
 */

/**
 * Removes an headerContent from the aggregation named <code>headerContent</code>.
 *
 * @param {int | string | sap.ui.core.Control} vHeaderContent the headerContent to remove or its index or id
 * @return {sap.ui.core.Control} the removed headerContent or null
 * @public
 * @name sap.uxap.ObjectPageLayout#removeHeaderContent
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>headerContent</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.core.Control[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.uxap.ObjectPageLayout#removeAllHeaderContent
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation named <code>headerContent</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.core.Control}
 *            oHeaderContent the headerContent whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.uxap.ObjectPageLayout#indexOfHeaderContent
 * @function
 */
	

/**
 * Destroys all the headerContent in the aggregation 
 * named <code>headerContent</code>.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#destroyHeaderContent
 * @function
 */


/**
 * Event is fired when the anchorBar is switch from moving to fixed.
 *
 * @name sap.uxap.ObjectPageLayout#toggleAnchorBar
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {boolean} oControlEvent.getParameters.fixed This flag indicates whether the anchorBar is switched to fixed or not (if false it is switched to moving).
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'toggleAnchorBar' event of this <code>sap.uxap.ObjectPageLayout</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.uxap.ObjectPageLayout</code>.<br/> itself. 
 *  
 * Event is fired when the anchorBar is switch from moving to fixed.
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code>.<br/> itself.
 *
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#attachToggleAnchorBar
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'toggleAnchorBar' event of this <code>sap.uxap.ObjectPageLayout</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @public
 * @name sap.uxap.ObjectPageLayout#detachToggleAnchorBar
 * @function
 */

/**
 * Fire event toggleAnchorBar to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'fixed' of type <code>boolean</code> This flag indicates whether the anchorBar is switched to fixed or not (if false it is switched to moving).</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.uxap.ObjectPageLayout} <code>this</code> to allow method chaining
 * @protected
 * @name sap.uxap.ObjectPageLayout#fireToggleAnchorBar
 * @function
 */


/**
 * Scrolls to the given section
 *
 * @name sap.uxap.ObjectPageLayout#scrollToSection
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
 * @name sap.uxap.ObjectPageLayout#getScrollDelegate
 * @function
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


/**
 * Returns the ui5 id of the section that is currently being scrolled.
 *
 * @name sap.uxap.ObjectPageLayout#getScrollingSectionId
 * @function
 * @type string
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 */


// Start of sap/uxap/ObjectPageLayout.js
jQuery.sap.require("sap.ui.core.CustomData");
jQuery.sap.require("sap.uxap.ObjectPageSubSection");
jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");
jQuery.sap.require("sap.uxap.AnchorBar");
jQuery.sap.require("sap.uxap.ObjectPageSubSectionLayout");

/*************************************************************************************
 * life cycle management
 ************************************************************************************/

sap.uxap.ObjectPageLayout.prototype.init = function () {

	this._oScroller = null; //will be set onBeforeRendering

	//lazy loading
	this._bFirstRendering = true;

	//anchorbar management
	this._oDefaultAnchorBar = new sap.uxap.AnchorBar({
		showPopover: this.getShowAnchorBarPopover()
	});
	this._bInternalAnchorBarVisible = true;

	this.setAggregation("_anchorBar", this._oDefaultAnchorBar);

	this._$opWrapper = [];                      //dom reference to the header for Dark mode background image scrolling scenario
	this._$anchorBar = [];                      //dom reference to the anchorBar
	this._$headerTitle = [];                    //dom reference to the header title
	this._$stickyAnchorBar = [];                //dom reference to the sticky anchorBar
	this._bStickyAnchorBar = false;             //status of the header
	this._bDomReady = false;                    //dom is fully ready to be inspected
	this._$headerContent = [];                  //dom reference to the headerContent

	//header animation && anchor bar management
	this._bMobileScenario = false;              //are we in a mobile scenario or the desktop one?
	this._oSectionInfo = {};                    //register some of the section info sSectionId:{offset,buttonClone} for updating the anchorbar accordingly
	this._aSectionBases = [];                   //hold reference to all sections and subsections alike (for perf reasons)
	this._sScrolledSectionId = "";              //section id that is currently scrolled
	this._iScrollToSectionDuration = 600;       //ms
	this._$spacer = [];                         //dom reference to the bottom padding spacing
	this.iHeaderContentHeight = 0;              // original height of the header content
	this.iHeaderTitleHeight = 0;                // original height of the header title
	this.iHeaderTitleHeightStickied = 0;        // height of the header title when stickied (can be different from the collapsed height because of isXXXAlwaysVisible options or text wrapping)
	this.iAnchorBarHeight = 0;                  // original height of the anchorBar
	this.iTotalHeaderSize = 0;                  // total size of headerTitle + headerContent

	this._iResizeId = sap.ui.core.ResizeHandler.register(this, jQuery.proxy(this._onUpdateScreenSize, this));

	//scroll values kept for lazy loaing purpose
	this._iPreviousScrollTop = 0;               //scroll top of the last scroll event
	this._iScrollProgress = 0;                  //progress done between the 2 lkast scroll events
	this._iPreviousScrollTimestamp = 0;         //Timestamp of the last scroll event

	this.setLazyLoadingParameters();
};

sap.uxap.ObjectPageLayout.HEADER_CALC_DELAY = 350;   //ms. The higher the safer and the uglier...
sap.uxap.ObjectPageLayout.DOM_CALC_DELAY = 200;      //ms.

sap.uxap.ObjectPageLayout.prototype.exit = function () {
	if (this._oScroller) {
		this._oScroller.destroy();
		this._oScroller = null;
	}

	if (this._oDefaultAnchorBar) {
		this._oDefaultAnchorBar.destroy();
		this._oDefaultAnchorBar = null;
	}

	if (this._iResizeId) {
		sap.ui.core.ResizeHandler.deregister(this._iResizeId);
	}
};

/*************************************************************************************
 * Ux rules
 ************************************************************************************/
/**
 * updates the objectPageLayout structure based on ux rules
 * This affects data!
 * @private
 * @param bInvalidate request the invalidation of the sectionBase that would turn into visible or hidden. This may not be necessary if you are already within a rendering process.
 */
sap.uxap.ObjectPageLayout.prototype._applyUxRules = function (bInvalidate) {
	var oObjectPageLayout, aSection, aSubSection, iVisibleSubSections, iVisibleSection, iVisibleBlocks, bVisibleAnchorBar, oFirstVisibleSection, oFirstVisibleSubSection;

	oObjectPageLayout = this;
	aSection = oObjectPageLayout.getSections() || [];
	iVisibleSection = 0;
	bVisibleAnchorBar = this.getShowAnchorBar();
	oFirstVisibleSection = null;

	this._cleanMemory();

	jQuery.each(aSection, function (iIndex, oSection) {

		//ignore hidden sections
		if (!oSection.getVisible()) {
			return true;
		}

		oObjectPageLayout._registerSectionBaseInfo(oSection);
		aSubSection = oSection.getSubSections() || [];
		iVisibleSubSections = 0;
		oFirstVisibleSubSection = null;

		jQuery.each(aSubSection, function (iIndex, oSubSection) {

			//ignore hidden subSection
			if (!oSubSection.getVisible()) {
				return true;
			}

			oObjectPageLayout._registerSectionBaseInfo(oSubSection);
			iVisibleBlocks = 0;

			jQuery.each(oSubSection.getBlocks() || [], function (iIndex, oBlock) {
				if (oBlock.getVisible && !oBlock.getVisible()) {
					return true;
				}

				iVisibleBlocks++;
				return true;
			});

			jQuery.each(oSubSection.getMoreBlocks() || [], function (iIndex, oMoreBlock) {
				if (oMoreBlock.getVisible && !oMoreBlock.getVisible()) {
					return true;
				}

				iVisibleBlocks++;
				return true;
			});

			//rule noVisibleBlock: If a subsection has no visible content the subsection will be hidden.
			if (iVisibleBlocks == 0) {
				oSubSection._setInternalVisible(false, bInvalidate);
				jQuery.sap.log.info("ObjectPageLayout :: noVisibleBlock UX rule matched", "subSection " + oSubSection.getTitle() + " forced to hidden");
			}
			else {
				oSubSection._setInternalVisible(true, bInvalidate);
				//if TitleOnTop.sectionGetSingleSubSectionTitle is matched, this will be hidden back
				oSubSection._setInternalTitleVisible(true, bInvalidate);
				iVisibleSubSections++;
				if (!oFirstVisibleSubSection) {
					oFirstVisibleSubSection = oSubSection;
				}
			}

			return true;
		});

		//rule noVisibleSubSection: If a section has no content (or only empty subsections) the section will be hidden.
		if (iVisibleSubSections == 0) {
			oSection._setInternalVisible(false, bInvalidate);
			jQuery.sap.log.info("ObjectPageLayout :: noVisibleSubSection UX rule matched", "section " + oSection.getTitle() + " forced to hidden");
		}
		else {
			oSection._setInternalVisible(true, bInvalidate);
			oSection._setInternalTitleVisible(true, bInvalidate);
			if (!oFirstVisibleSection) {
				oFirstVisibleSection = oSection;
			}

			//rule TitleOnTop.sectionGetSingleSubSectionTitle: If a section as only 1 subsection and the subsection title is not empty, the section takes the subsection title on titleOnTop layout only
			if (oObjectPageLayout.getSubSectionLayout() === sap.uxap.ObjectPageSubSectionLayout.TitleOnTop &&
				iVisibleSubSections == 1 && oFirstVisibleSubSection.getTitle().trim() !== "") {
				jQuery.sap.log.info("ObjectPageLayout :: TitleOnTop.sectionGetSingleSubSectionTitle UX rule matched", "section " + oSection.getTitle() + " is taking its single subsection title " + oFirstVisibleSubSection.getTitle());
				oSection._setInternalTitle(oFirstVisibleSubSection.getTitle(), bInvalidate);
				oFirstVisibleSubSection._setInternalTitleVisible(false, bInvalidate);
			}
			else {
				oSection._setInternalTitle("", bInvalidate);
			}

			iVisibleSection++;
		}

		return true;
	});

	//rule notEnoughVisibleSection: If there is only 1 section overall, the navigation control shall be hidden.
	if (iVisibleSection <= 1) {
		bVisibleAnchorBar = false;
		jQuery.sap.log.info("ObjectPageLayout :: notEnoughVisibleSection UX rule matched", "anchorBar forced to hidden");
	}
	//rule firstSectionTitleHidden: the first section title is never visible if there is an anchorBar
	else if (oFirstVisibleSection && bVisibleAnchorBar) {
		oFirstVisibleSection._setInternalTitleVisible(false, bInvalidate);
		jQuery.sap.log.info("ObjectPageLayout :: firstSectionTitleHidden UX rule matched", "section " + oFirstVisibleSection.getTitle() + " title forced to hidden");
	}
	oObjectPageLayout._setInternalAnchorBarVisible(bVisibleAnchorBar, bInvalidate);

	//the anchor bar needs to reflect the dom state
	if (bVisibleAnchorBar) {
		this._buildAnchorBar();
	}

};

/*************************************************************************************
 * lazy loading
 ************************************************************************************/

/**
 * Set the lazy loading tuning parameters.
 */
sap.uxap.ObjectPageLayout.prototype.setLazyLoadingParameters = function () {
	//delay before loading data for visible sub-sections
	//this delay avoid loading data for every subsections during scroll
	this.LAZY_LOADING_DELAY = 200;  //ms.

	//lazy loading fine tuning
	//An extra non visible subsection will be loaded if the the top of this subsection is at
	//no more than LAZY_LOADING_EXTRA_PAGE_SIZE * page height from the the bottom of the page.
	this.LAZY_LOADING_EXTRA_PAGE_SIZE = 0.5;

	//number of subsections which should be preloaded :
	//   - FirstRendering : for first loading
	//   - ScrollToSection : default value when scrolling to a subsection
	var $html = jQuery("html");
	if ($html.hasClass("sapUiMedia-Std-Phone") || sap.ui.Device.system.phone) {
		this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD = {"FirstRendering": 1, "ScrollToSection": 1};
	}
	else if (sap.ui.Device.system.tablet) {
		//on tablet scrolling may be slow.
		this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD = {"FirstRendering": 2, "ScrollToSection": 1};
	}
	else if ($html.hasClass("sapUiMedia-Std-Tablet")) {
		//Desktop with a "tablet" window size
		this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD = {"FirstRendering": 2, "ScrollToSection": 2};
	}
	else {
		this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD = {"FirstRendering": 3, "ScrollToSection": 3};
	}

	//Threshold beyond which we consider that user is scrolling fast and thus that lazy loading must be differed.
	//(percentage of the pageheight).
	this.LAZY_LOADING_FAST_SCROLLING_THRESHOLD = 5;

};

/**
 * Load in advance the subsections which will likely be visible once the operation (firstRendering or scrolltoSection)
 * will be complete.
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._preLoad = function (sId) {
	var iSubsectionsToPreLoad,
		bTargetSubsectionReached;

	//if no sId, target section is the first section (first rendering).
	if (sId) {
		iSubsectionsToPreLoad = this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD.ScrollToSection;
		bTargetSubsectionReached = false;
	}
	else {
		iSubsectionsToPreLoad = this.NUMBER_OF_SUBSECTIONS_TO_PRELOAD.FirstRendering;
		bTargetSubsectionReached = true;
	}

	jQuery.each(this._aSectionBases, jQuery.proxy(function (iIndex, oSection) {
		if (!bTargetSubsectionReached && sId) {
			bTargetSubsectionReached = oSection.getId() == sId;
		}
		if (bTargetSubsectionReached && oSection instanceof sap.uxap.ObjectPageSubSection) {
			if (oSection.getVisible() && oSection._getInternalVisible()) {
				oSection.connectToModels();
				iSubsectionsToPreLoad--;
			}
		}
		return iSubsectionsToPreLoad > 0;
	}, this));
};


/*************************************************************************************
 * anchor bar management
 ************************************************************************************/

sap.uxap.ObjectPageLayout.prototype.setShowAnchorBarPopover = function (bValue, bSuppressInvalidate) {
	this._oDefaultAnchorBar.setShowPopover(bValue);
	return this.setProperty("showAnchorBarPopover", bValue, true /* don't re-render the whole objectPageLayout */);
};

sap.uxap.ObjectPageLayout.prototype._getInternalAnchorBarVisible = function () {
	return this._bInternalAnchorBarVisible;
};

sap.uxap.ObjectPageLayout.prototype._setInternalAnchorBarVisible = function (bValue, bInvalidate) {
	if (bValue != this._bInternalAnchorBarVisible) {
		this._bInternalAnchorBarVisible = bValue;
		if (bInvalidate === true) {
			this.invalidate();
		}
	}
};

sap.uxap.ObjectPageLayout.prototype._adjustLayout = function (oEvent, bImmediate, bNeedLazyLoading) {

	//adjust the layout only if the object page is full ready
	if (this._bDomReady) {
		//postpone until we get requests
		if (this._iLayoutTimer) {
			jQuery.sap.log.debug("ObjectPageLayout :: _adjustLayout", "delayed by " + sap.uxap.ObjectPageLayout.DOM_CALC_DELAY + " ms because of dom modifications");
			jQuery.sap.clearDelayedCall(this._iLayoutTimer);
		}

		if (bImmediate) {
			this._updateDomPositions();
			this._iLayoutTimer = undefined;
		}
		else {
			//need to "remember" if one of the adjustLayout is requesting the lazyLoading
			this._bNeedLazyLoading = this._bNeedLazyLoading !== undefined || bNeedLazyLoading;

			this._iLayoutTimer = jQuery.sap.delayedCall(sap.uxap.ObjectPageLayout.DOM_CALC_DELAY, this, function () {
				jQuery.sap.log.debug("ObjectPageLayout :: _adjustLayout", "re-evaluating dom positions");
				this._updateDomPositions();

				//in case the layout has changed we need to re-evaluate the lazy loading
				if (this._bNeedLazyLoading) {
					this._lazyLoading();
				}

				this._bNeedLazyLoading = undefined;
				this._iLayoutTimer = undefined;
			});
		}
	}
};


/**
 * adjust the layout but also the ux rules
 * used for refreshing the overall structure of the objectPageLayout when it as been updated after the first rendering
 * @private
 */

sap.uxap.ObjectPageLayout.prototype._adjustLayoutAndUxRules = function () {
	//in case we have added a section or subSection which change the ux rules
	jQuery.sap.log.debug("ObjectPageLayout :: _adjustLayout", "refreshing ux rules");

	this._applyUxRules(true);
	this._adjustLayout(null, false, true /* requires a check on lazy loading */);
};

/**
 * update the anchor bar content accordingly to the section info and enable the lazy loading of the first visible sections
 */

sap.uxap.ObjectPageLayout.prototype.onBeforeRendering = function () {

	//are we re-rendering an existing objectPageLayout?
	//if so we need to reset the scroller as it gets confused
	if (this._oScroller) {
		this._oScroller.scrollTo(0, 0, 0);         //reset the actual scroll position
		this._oScroller.destroy();
	}

	//Internal Incident: 1482023778: workaround BB10 = use zynga instead of iScroll
	var bEnforceZynga = (sap.ui.Device.os.blackberry && sap.ui.Device.os.version >= 10.0 && sap.ui.Device.os.version < 11.0);

	this._oScroller = new sap.ui.core.delegate.ScrollEnablement(this, this.getId() + "-scroll", {
		horizontal: false,
		vertical: true,
		zynga: bEnforceZynga,
		preventDefault: true,
		nonTouchScrolling: "scrollbar",
		scrollbarClass: "sapUxAPObjectPageScroll"
	});

	//update aggregation content with the ux rules
	this._applyUxRules();

	// If we are on the first true rendering : first time we render the page with section and blocks
	if (!jQuery.isEmptyObject(this._oSectionInfo) && this._bFirstRendering) {
		if (!this.getEnableLazyLoading()) {
			// In case we are not lazy loaded make sure that we connect the blocks properly...
			jQuery.each(this.getSections() || [], jQuery.proxy(function (iIndex, oSection) {
				oSection.connectToModels();
			}, this));
		}
		else {
			// connect first visible subsections
			this._preLoad();
		}
		this._bFirstRendering = false;
	}

	this._bStickyAnchorBar = false; //reset default state in case of re-rendering
};

/**
 * build a sap.m.button equivalent to a section or sub section for insertion in the anchorBar
 * also registers the section info for further dom position updates
 * @param oSectionBase
 * @param bIsSection
 * @returns {null}
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._buildAnchorBarButton = function (oSectionBase, bIsSection) {

	var oButtonClone = null,
		oButton,
		oSectionBindingInfo,
		sModelName;

	if (oSectionBase.getVisible() && oSectionBase._getInternalVisible()) {
		oButton = oSectionBase.getCustomAnchorBarButton();

		//by default we get create a button with the section title as text
		if (!oButton) {
			oButtonClone = new sap.m.Button({
				ariaDescribedBy: oSectionBase
			});

			//has a ux rule been applied that we need to reflect here?
			if (oSectionBase._getInternalTitle() != "") {
				oButtonClone.setText(oSectionBase._getInternalTitle());
			}
			else {

				//is the section title bound to a model? in this case we need to apply the same binding
				oSectionBindingInfo = oSectionBase.getBindingInfo("title");
				if (oSectionBindingInfo && oSectionBindingInfo.parts && oSectionBindingInfo.parts.length > 0) {

					sModelName = oSectionBindingInfo.parts[0].model;

					//handle relative binding scenarios
					oButtonClone.setBindingContext(oSectionBase.getBindingContext(sModelName), sModelName);

					//copy binding information
					oButtonClone.bindProperty("text", {
						path: oSectionBindingInfo.parts[0].path,
						model: sModelName
					});
				}
				//otherwise just copy the plain text
				else {
					oButtonClone.setText(oSectionBase.getTitle());
				}
			}
		}
		else {
			oButtonClone = oButton.clone(); //keep original button parent control hierarchy
		}

		//update the section info
		this._oSectionInfo[oSectionBase.getId()].buttonId = oButtonClone.getId();

		//the anchorBar needs to know the sectionId for automatic horizontal scrolling
		oButtonClone.addCustomData(new sap.ui.core.CustomData({
			key: "sectionId", value: oSectionBase.getId()
		}));

		//the anchorBar needs to know whether the title is actually displayed or not (so the anchorBar is really reflecting the objactPage layout state)
		oButtonClone.addCustomData(new sap.ui.core.CustomData({
			key: "phoneVisibility",
			value: oSectionBase._getInternalTitleVisible()
		}));

		if (!bIsSection) {
			//the anchorBar needs to know that this is a second section because it will handle responsive scenarios
			oButtonClone.addCustomData(new sap.ui.core.CustomData({
				key: "secondLevel", value: true
			}));
		}
	}

	return oButtonClone;
};

/**
 * clean the oSectionInfo and aSectionBases internal properties
 * as the oSectionInfo contains references to created objects, we make sure to destroy them properly in order to avoid memory leaks
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._cleanMemory = function () {

	var oAnchorBar = this.getAggregation("_anchorBar");

	jQuery.each(this._oSectionInfo, function (sSectionId, oInfo) {
		var oButton = sap.ui.getCore().byId(oInfo.buttonId);

		if (oAnchorBar && oButton) {
			oAnchorBar.destroyContent(oButton);
		}

	});

	this._oSectionInfo = {};
	this._aSectionBases = [];
};

/**
 * build the anchorBar and all the anchorBar buttons
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._buildAnchorBar = function () {
	var aSections = this.getSections() || [],
		oAnchorBar = this.getAggregation("_anchorBar");

	//tablet & desktop mechanism
	if (oAnchorBar && this.getShowAnchorBar()) {

		oAnchorBar.removeAllContent();

		//first level
		jQuery.each(aSections, jQuery.proxy(function (iIndex, oSection) {

			if (!oSection.getVisible() || !oSection._getInternalVisible()) {
				return true;
			}

			var oButtonClone,
				aSubSections = oSection.getSubSections() || [];

			oButtonClone = this._buildAnchorBarButton(oSection, true);

			if (oButtonClone) {
				oAnchorBar.addContent(oButtonClone);

				//second Level
				jQuery.each(aSubSections, jQuery.proxy(function (iIndex, oSubSection) {

					if (!oSubSection.getVisible() || !oSubSection._getInternalVisible()) {
						return true;
					}

					var oButtonClone = this._buildAnchorBarButton(oSubSection, false);

					if (oButtonClone) {
						oAnchorBar.addContent(oButtonClone);
					}

					return true;

				}, this));
			}

			return true;
		}, this));
	}
};

/**
 * register the section within the internal property used for lazy loading and navigation
 * most of these properties are going to be updated later when the dom will be ready (positions) or when the anchorBar button will be created (buttonId)
 * @param oSectionBase the section to register
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._registerSectionBaseInfo = function (oSectionBase) {
	this._oSectionInfo[oSectionBase.getId()] = {
		$dom: [],
		positionTop: 0,
		positionTopMobile: 0,
		realTop: 0.0,
		buttonId: "",
		isSection: (oSectionBase instanceof sap.uxap.ObjectPageSection)
	};

	this._aSectionBases.push(oSectionBase);
};

/**
 * Scroll to a specific Section
 *
 * @param sId       id of the section to scroll to
 * @param duration  Scroll duration. Default value is 0
 *
 */
sap.uxap.ObjectPageLayout.prototype.scrollToSection = function (sId, duration) {

	//call _adjustLayout synchronously to make extra sure we have the right positionTops for all sectionBase before scrolling
	this._adjustLayout(null, true);

	var iDuration = duration || this._iScrollToSectionDuration,
		iScrollTo = this._bMobileScenario || !this.getShowAnchorBarPopover() ? this._oSectionInfo[sId].positionTopMobile : this._oSectionInfo[sId].positionTop;

	//avoid triggering twice the scrolling onto the same target section
	if (this._sCurrentScrollId != sId) {
		this._sCurrentScrollId = sId;

		if (this._iCurrentScrollTimeout) {
			clearTimeout(this._iCurrentScrollTimeout);
			this._$contentContainer.parent().stop(true, false);
		}

		this._iCurrentScrollTimeout = jQuery.sap.delayedCall(duration, this, function () {
			this._sCurrentScrollId = undefined;
			this._iCurrentScrollTimeout = undefined;
		});


		if (this.getEnableLazyLoading()) {
			//connect target subsection to avoid delay in data loading
			if (sap.ui.Device.system.desktop) {
				//on desktop we delay the call to have the preload done during the scrolling animation
				jQuery.sap.delayedCall(50, this, function () {
					this._preLoad(sId);
				});
			}
			else {
				//on device, do the preload first then scroll.
				//doing anything during the scrolling animation may
				//trouble animation and lazy loading on slow devices.
				this._preLoad(sId);
			}
		}

		this._scrollTo(iScrollTo, iDuration);
	}

};

sap.uxap.ObjectPageLayout.prototype.getScrollingSectionId = function () {
	return this._sScrolledSectionId;
};

/**
 * Scroll to the y position in dom
 * @param y the position in pixel
 * @param time the animation time
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._scrollTo = function (y, time) {
	if (this._oScroller) {
		jQuery.sap.log.debug("ObjectPageLayout :: scrolling to " + y);
		this._oScroller.scrollTo(0, y, time);
	}
	return this;
};

/**
 * update the section dom reference
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._updateDomPositions = function () {
	var iLastVisibleHeight,
		oLastVisibleSubSection,
		iSpacerHeight,
		sPreviousSubSectionId,
		sPreviousSectionId,
		iHeaderGap;

	this.iScreenHeight = this.$().height();

	iHeaderGap = this.iHeaderTitleHeightStickied - this.iHeaderTitleHeight;

	jQuery.each(this._aSectionBases, jQuery.proxy(function (iIndex, oSectionBase) {
		var oInfo = this._oSectionInfo[oSectionBase.getId()],
			$this = oSectionBase.$(),
			$mobileAnchor;

		if (oInfo /* sectionBase is visible */ && $this.length > 0) {

			oInfo.$dom = $this;

			//calculate the scrollTop value to get the section title at the bottom of the header
			//performance improvements possible here as .position() is costly
			oInfo.realTop = $this.position().top; //first get the dom position = scrollTop to get the section at the window top

			//the amount of scrolling required is the distance between their position().top and the bottom of the anchorBar
			oInfo.positionTop = Math.ceil(oInfo.realTop) - this.iAnchorBarHeight - iHeaderGap;

			//the amount of scrolling required for the mobile scenario
			//we want to navigate just below its title
			//as of UX specs Oct 7, 2014
			if (oInfo.isSection) {
				$mobileAnchor = oSectionBase.$("header");
			}
			else {
				$mobileAnchor = oSectionBase.$("headerTitle");
			}

			//calculate the mobile position
			if ($mobileAnchor.length > 0) {
				oInfo.positionTopMobile = Math.ceil($mobileAnchor.position().top) + $mobileAnchor.height() - this.iAnchorBarHeight - iHeaderGap;
			}
			else {
				//title wasn't found (=first section, hidden title, promoted subsection), scroll to the same position as desktop
				oInfo.positionTopMobile = oInfo.positionTop;
			}

			//for calculating the currently scrolled section of subsection (and for lazy loading) we also need to know the bottom of the section and subsections
			//we can't use oInfo.$dom.height() since the margin are not taken into account.
			//therefore the most reliable calculation is to consider as a bottom, the top of the next section/subsection
			//on mobile, each section and subsection is considered equally (a section is a very tiny subsection containing only a title)
			if (this._bMobileScenario) {
				if (sPreviousSectionId) {               //except for the very first section
					this._oSectionInfo[sPreviousSectionId].positionBottom = oInfo.positionTop;
				}
				sPreviousSectionId = oSectionBase.getId();
				oLastVisibleSubSection = oSectionBase;
			}
			//on desktop, we update section by section (each section is resetting the calculation)
			else {
				//on a desktop the previous section bottom is the top of the current section
				if (oInfo.isSection) {
					if (sPreviousSectionId) {           //except for the very first section
						this._oSectionInfo[sPreviousSectionId].positionBottom = oInfo.positionTop;
						this._oSectionInfo[sPreviousSubSectionId].positionBottom = oInfo.positionTop;
					}
					sPreviousSectionId = oSectionBase.getId();
					sPreviousSubSectionId = null;
				}
				//on desktop, the previous subsection bottom is the top of the current subsection
				else {
					if (sPreviousSubSectionId) {        //except for the very first subSection
						this._oSectionInfo[sPreviousSubSectionId].positionBottom = oInfo.positionTop;
					}
					sPreviousSubSectionId = oSectionBase.getId();
					oLastVisibleSubSection = oSectionBase;
				}
			}

		}
	}, this));

	//calculate the bottom spacer height and update the last section/subSection bottom (with our algorithm of having section tops based on the next section, we need to have a special handling for the very last subSection)
	if (oLastVisibleSubSection) {
		iLastVisibleHeight = this._$spacer.position().top - this._oSectionInfo[oLastVisibleSubSection.getId()].realTop;

		//on desktop we need to set the bottom of the last section as well
		if (this._bMobileScenario) {
			this._oSectionInfo[sPreviousSectionId].positionBottom = this._oSectionInfo[sPreviousSectionId].positionTop + iLastVisibleHeight;
		}
		//update the position bottom for the last subsection
		else {
			this._oSectionInfo[sPreviousSubSectionId].positionBottom = this._oSectionInfo[sPreviousSubSectionId].positionTop + iLastVisibleHeight;
			this._oSectionInfo[sPreviousSectionId].positionBottom = this._oSectionInfo[sPreviousSubSectionId].positionTop + iLastVisibleHeight;
		}

		//calculate the required additional space for the last section only
		if (iLastVisibleHeight < this.iScreenHeight) {

			//the amount of space required is what is needed to get the latest position you can scroll to up to the "top"
			//therefore we need to create enough space below the last subsection to get it displayed on top = the spacer
			//the "top" is just below the sticky header + anchorBar, therefore we just need enough space to get the last subsection below these elements

			//the latest position is below the last subsection title in case of a mobile scroll to the last subsection
			iSpacerHeight = this.iScreenHeight - iLastVisibleHeight - this.iHeaderTitleHeightStickied - this.iAnchorBarHeight;

			//take into account that we may need to scroll down to the positionMobile, thus we need to make sure we have enough space at the bottom
			if (this._bMobileScenario) {
				iSpacerHeight += (this._oSectionInfo[oLastVisibleSubSection.getId()].positionTopMobile - this._oSectionInfo[oLastVisibleSubSection.getId()].positionTop);
			}

			this._$spacer.height(iSpacerHeight + "px");
			jQuery.sap.log.debug("ObjectPageLayout :: bottom spacer is now " + iSpacerHeight + "px");
		}
	}

};

/**
 * init the internal section info {positionTop}
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._initAnchorBarScroll = function () {

	this._adjustLayout(null, true);

	//reset the scroll to top for anchorbar & scrolling management
	this._sScrolledSectionId = "";
	this._onScroll({target: {scrollTop: 0}});//make sure we got the very last scroll event even on slow devices
};

/**
 * Set a given section as the currently scrolled section and update the anchorBar relatively
 * @param sSectionId the section id
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._setAsCurrentSection = function (sSectionId) {

	var oAnchorBar, oSectionBase;

	if (this._sScrolledSectionId != sSectionId) {

		jQuery.sap.log.debug("ObjectPageLayout :: current section is " + sSectionId);
		this._sScrolledSectionId = sSectionId;

		oAnchorBar = this.getAggregation("_anchorBar");

		if (oAnchorBar && this._getInternalAnchorBarVisible()) {
			oSectionBase = sap.ui.getCore().byId(sSectionId);

			//the sectionBase title needs to be visible (or the user won't "feel" scrolling that sectionBase but its parent)
			//see Incident 1570016975 for more details
			if (oSectionBase && oSectionBase instanceof sap.uxap.ObjectPageSubSection && (oSectionBase.getTitle().trim() === "" || !oSectionBase._getInternalTitleVisible())) {
				sSectionId = oSectionBase.getParent().getId();

				jQuery.sap.log.debug("ObjectPageLayout :: current section is a subSection with an empty or hidden title, selecting parent " + sSectionId);
			}

			if ( this._oSectionInfo[sSectionId]) {
				oAnchorBar.setSelectedButton(this._oSectionInfo[sSectionId].buttonId);
			}
		}
	}
};

/**
 * called when the screen is resize by users. Updates the screen height
 * @param oEvent
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._onUpdateScreenSize = function (oEvent) {

	if (!this._bDomReady) {
		jQuery.sap.log.info("ObjectPageLayout :: cannot _onUpdateScreenSize before dom is ready");
		return;
	}

	this._bMobileScenario = jQuery("html").hasClass("sapUiMedia-Std-Phone") || sap.ui.Device.system.phone;

	this.setLazyLoadingParameters();

	jQuery.sap.delayedCall(sap.uxap.ObjectPageLayout.HEADER_CALC_DELAY, this, function () {

		this._adjustHeaderHeights();

		this._adjustLayout(null, true);

		this._oScroller.scrollTo(0, this._$opWrapper.scrollTop(), 0);
	});

};


/*************************************************************************************
 * header & scroll management
 ************************************************************************************/

sap.uxap.ObjectPageLayout.prototype.onAfterRendering = function () {

	//if our container has not set a height, we need to enforce it or nothing will get displayed
	//the reason is the objectPageLayout has 2 containers with position:absolute, height:100%
	if (this.getParent().getHeight && this.getParent().getHeight() == "") {
		this.$().parent().css("height", "100%");
	}

	this._$headerTitle = jQuery.sap.byId(this.getId() + "-headerTitle");
	this._$anchorBar = jQuery.sap.byId(this.getId() + "-anchorBar");
	this._$stickyAnchorBar = jQuery.sap.byId(this.getId() + "-stickyAnchorBar");
	this._$opWrapper = jQuery.sap.byId(this.getId() + "-opwrapper");
	this._$spacer = jQuery.sap.byId(this.getId() + "-spacer");
	this._$headerContent = jQuery.sap.byId(this.getId() + "-headerContent");
	this._bMobileScenario = jQuery("html").hasClass("sapUiMedia-Std-Phone") || sap.ui.Device.system.phone;

	this._$contentContainer = jQuery.sap.byId(this.getId() + "-scroll");
	this._$opWrapper.scroll(jQuery.proxy(this._onScroll, this));

	//set the correct width for the scrollBar to be visible
	var fRight = 0.0;

	if (sap.ui.Device.system.desktop) {
		fRight = jQuery.position.scrollbarWidth();
	}

	if (fRight > 0) {
		if (sap.ui.getCore().getConfiguration().getRTL()) {
			this._$headerTitle.css("left", fRight + "px");
		}
		else {
			this._$headerTitle.css("right", fRight + "px");
		}
	}

	//the dom is already ready (re-rendering case), thus we compute the header immediately
	//in order to avoid flickering (see Incident 1570011343)
	if (this._bDomReady) {
		this._adjustHeaderHeights();

		this._initAnchorBarScroll();
	}
	else {
		jQuery.sap.delayedCall(sap.uxap.ObjectPageLayout.HEADER_CALC_DELAY, this, function () {

			this._bDomReady = true;

			this._adjustHeaderHeights();

			this._initAnchorBarScroll();
		});
	}
};

/**
 * called when the user scrolls on the page
 * @param oEvent
 * @private
 */

sap.uxap.ObjectPageLayout.prototype._onScroll = function (oEvent) {

	var iScrollTop = Math.max(oEvent.target.scrollTop, 0), // top of the visible page
		iScrollPageBottom,
		iPageHeight,
		oHeader = this.getHeaderTitle(),
		iLimitScroll = this._$contentContainer.height() - this.iScreenHeight,
		bFastScrolling = false,
		bShouldStick = iScrollTop >= (this.iHeaderContentHeight - (this.iHeaderTitleHeightStickied - this.iHeaderTitleHeight)), // iHeaderContentHeight minus the gap between the two headerTitle
		iDelay,
		sClosestId,
		iMin,
		iProgressPercentage;

	//calculate the limit of visible sections to be lazy loaded
	iPageHeight = (
	this.iScreenHeight                                            /* the total screen height */
	- (bShouldStick ? this.iAnchorBarHeight : 0)              /* minus the part taken by the anchor bar (when sticky)*/
	- (bShouldStick ? this.iHeaderTitleHeightStickied : 0)    /* minus the part taken by the header title (mandatory) */
	);

	iScrollPageBottom = iScrollTop + iPageHeight;                             //the bottom limit

	//don't apply parallax effects if there are not enough space for it
	if (oHeader || this.getShowAnchorBar()) {
		this._toggleHeader(bShouldStick);
	}

	//if we happen to have been able to collapse it at some point (section height had increased)
	//and we no longer are (section height is reduced) and we are at the top of the page we expand it back anyway
	else if (iScrollTop == 0 && (oHeader || this.getShowAnchorBar())) {
		this._toggleHeader(false);
	}

	//find the currently scrolled section = where position - iScrollTop is closest to 0

	iMin = iLimitScroll;

	this._adjustHeaderTitleBackgroundPosition(iScrollTop);

	jQuery.sap.log.debug("ObjectPageLayout :: lazy loading : Scrolling at " + iScrollTop, "----------------------------------------");

	// find the closest section
	jQuery.each(this._oSectionInfo, jQuery.proxy(function (sId, oInfo) {
		// on desktop/tablet, find a section, not a subsection
		if (oInfo.isSection || this._bMobileScenario) {

			//we need to set the sClosest to the first section for handling the scrollTop = 0
			if (!sClosestId) {
				sClosestId = sId;
			}

			//find closest
			// 1D segment intersection
			if (oInfo.positionTop <= iScrollPageBottom && iScrollTop <= oInfo.positionBottom) {
				// find the closest section: the sections that intersect the visible page and that ends the closest to iScrollTop
				if (oInfo.positionBottom - iScrollTop < iMin) {
					sClosestId = sId;
					iMin = oInfo.positionBottom - iScrollTop;
				}
			}
		}

	}, this));

	if (sClosestId && sClosestId != this._sScrolledSectionId) {
		jQuery.sap.log.debug("ObjectPageLayout :: closest id " + sClosestId, "----------------------------------------");
		this._setAsCurrentSection(sClosestId);
	}

	//lazy load only the visible subSections
	if (this.getEnableLazyLoading()) {
		//calculate the progress done between this scroll event and the previous one
		//to see if we are scrolling fast (more than 5% of the page height)
		this._iScrollProgress = iScrollTop - this._iPreviousScrollTop;
		iProgressPercentage = Math.round(Math.abs(this._iScrollProgress) / iPageHeight * 100);
		if (iProgressPercentage >= this.LAZY_LOADING_FAST_SCROLLING_THRESHOLD) {
			bFastScrolling = true;
		}
		this._iPreviousScrollTop = iScrollTop;
		this._iPreviousScrollTimestamp = oEvent.timeStamp || 0;

		iDelay = (iScrollTop === 0 ) ? 0 : this.LAZY_LOADING_DELAY;
		//if we are scrolling fast, clear the previous delayed lazy loading call if any
		//as we don't want to load intermediate subsections which are visible only
		//during a brief moment during scroll.
		if (bFastScrolling && this._sLazyLoadingTimer) {
			jQuery.sap.log.debug("ObjectPageLayout :: lazyLoading", "delayed by " + iDelay + " ms because of fast scroll");
			jQuery.sap.clearDelayedCall(this._sLazyLoadingTimer);
			this._sLazyLoadingTimer = null;
		}

		//If there's no delayed lazy loading call, create a new one.
		if (!this._sLazyLoadingTimer) {
			this._sLazyLoadingTimer = jQuery.sap.delayedCall(iDelay, this, this._lazyLoading);
		}
	}
};


sap.uxap.ObjectPageLayout.prototype._lazyLoading = function () {
	var iScrollTop,
		iScrollPageBottom,
		iPageHeight,
		bShouldStick = this._iPreviousScrollTop >= (this.iHeaderContentHeight), // iHeaderContentHeight
		sExtraSubSectionId,
		iExtraSubSectionTop = -1,
		oSubSectionsToLoad = {},
		iTimeDifference,
		bOnGoingScroll,
		iShift;


	//calculate the limit of visible sections to be lazy loaded
	iPageHeight = (
	this.iScreenHeight                                            /* the total screen height */
	- (bShouldStick ? this.iAnchorBarHeight : 0)              /* minus the part taken by the anchor bar (when sticky)*/
	- (bShouldStick ? this.iHeaderTitleHeightStickied : 0)    /* minus the part taken by the header title (mandatory) */
	);
	iScrollTop = this._$opWrapper.scrollTop();

	//we consider that the scroll is still ongoing if:
	//   - a scroll event has been received for less than half of the LAZY_LOADING_DELAY (100 ms)
	//   - progress done between the last 2 scroll event is greater than 5 pixels.
	iTimeDifference = Date.now() - this._iPreviousScrollTimestamp;
	bOnGoingScroll = (iTimeDifference < (this.LAZY_LOADING_DELAY / 2) ) && (Math.abs(this._iScrollProgress) > 5);

	// if scroll is ongoing, we shift the pages top and height to:
	//     - avoid loading subsections which will likely no more be visible at the end of scroll
	//       (Next lazyLoading calls will anyway load them if they are still visible at the end of scroll)
	//     - load in advance subsections which will likely be visible at the end of scroll
	if (bOnGoingScroll) {
		if (this._iScrollProgress >= 0) {
			iShift = Math.round(Math.min(this._iScrollProgress * 20, iPageHeight / 2));
		}
		else {
			iShift = -1 * Math.round(Math.min(Math.abs(this._iScrollProgress) * 20, iPageHeight / 2));
		}
		iScrollTop += iShift;
		jQuery.sap.log.debug("ObjectPageLayout :: lazyLoading", "Visible page shifted from : " + iShift);
	}
	iScrollPageBottom = iScrollTop + iPageHeight;       //the bottom limit

	//don't load subsections which are hardly visible at the top of the page (less than 16 pixels visible)
	//to avoid having the following subsections moving downward as subsection size will likely increase during loading
	iScrollTop += 16;

	//check the visible subsections
	//only consider subsections not yet loaded
	jQuery.each(this._oSectionInfo, jQuery.proxy(function (sId, oInfo) {
		// on desktop/tablet, find a section, not a subsection
		if (!oInfo.isSection && !oInfo.loaded) {
			// 1D segment intersection between visible page and current sub section
			// C <= B and A <= D -> intersection
			//    A-----B
			//  C---D
			//       C----D
			//     C-D
			// C-----------D
			if (oInfo.positionTop <= iScrollPageBottom && iScrollTop < oInfo.positionBottom - 1) {
				oSubSectionsToLoad[sId] = sId;
			}
			// Lazy loading will add an extra subsection :
			//    the first (highest) subsection not yet visible (and not yet loaded)
			//    top of this subsection must be close from page bottom (less than 0.5 page : LAZY_LOADING_EXTRA_PAGE_SIZE)
			else if (oInfo.positionTop > iScrollPageBottom &&
				oInfo.positionTop < iScrollPageBottom + iPageHeight * this.LAZY_LOADING_EXTRA_PAGE_SIZE &&
				(iExtraSubSectionTop == -1 || oInfo.positionTop < iExtraSubSectionTop)) {
				iExtraSubSectionTop = oInfo.positionTop;
				sExtraSubSectionId = sId;
			}
		}

	}, this));

	//add the extra subsection if:
	//      - we have found one
	//      - we have no visible subsections to load
	if (iExtraSubSectionTop != -1 &&
		jQuery.isEmptyObject(oSubSectionsToLoad)) {
		jQuery.sap.log.debug("ObjectPageLayout :: lazyLoading", "extra section added : " + sExtraSubSectionId);
		oSubSectionsToLoad[sExtraSubSectionId] = sExtraSubSectionId;
	}

	//Load the subsections
	jQuery.each(oSubSectionsToLoad, jQuery.proxy(function (idx, sSectionId) {
		jQuery.sap.log.debug("ObjectPageLayout :: lazyLoading", "connecting " + sSectionId);
		sap.ui.getCore().byId(sSectionId).connectToModels();
		this._oSectionInfo[sSectionId].loaded = true;
	}, this));

	if (bOnGoingScroll) {
		//bOnGoingScroll is just a prediction, we can't be 100% sure as there's no end-of-scroll event
		//so we relaunch a new delayed lazy loading to ensure all visible
		//sections will actually be loaded (no shift) if scroll stops suddenly.
		this._sLazyLoadingTimer = jQuery.sap.delayedCall(this.LAZY_LOADING_DELAY, this, this._lazyLoading);
	}
	else {
		if (iExtraSubSectionTop) {
			//An extra subsection has been found
			//relaunch a delayed lazy loading call to check if there's another extra subsection to load
			//We use a long delay (5* LAZY_LOADING_DELAY) to wait for current loading completion.
			this._sLazyLoadingTimer = jQuery.sap.delayedCall(5 * this.LAZY_LOADING_DELAY, this, this._lazyLoading);
		}
		else {
			//reset the lazy loading timer
			this._sLazyLoadingTimer = null;
		}
	}
};


/**
 * toggles the header state
 * @param bStick boolean true for fixing the header, false for keeping it moving
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._toggleHeader = function (bStick) {
	//switch to stickied
	this._$headerTitle.toggleClass("sapUxAPObjectPageHeaderStickied", bStick);

	//switch from moving to stickied
	if (!this._bStickyAnchorBar && bStick) {
		this._$anchorBar.css("height", this.iAnchorBarHeight).children().appendTo(this._$stickyAnchorBar);
		this._bStickyAnchorBar = true;
		this._$headerContent.css("overflow", "hidden");
		this.fireToggleAnchorBar({fixed: true});

		//Internal Incident: 1472003895: FIT W7 MI: Dual color in the header
		//we need to adjust the header background now in case its size is different
		if (this.iHeaderTitleHeight != this.iHeaderTitleHeightStickied) {
			this._adjustHeaderBackgroundSize();
		}
	}

	//switch from stickied to moving
	else if (this._bStickyAnchorBar && !bStick) {
		this._$anchorBar.css("height", "auto").append(this._$stickyAnchorBar.children());
		this._bStickyAnchorBar = false;
		this._$headerContent.css("overflow", "inherit");
		this.fireToggleAnchorBar({fixed: false});
	}

};

/**
 * Returns the sap.ui.core.ScrollEnablement delegate which is used with this control.
 */
sap.uxap.ObjectPageLayout.prototype.getScrollDelegate = function () {
	return this._oScroller;
};


/************************************************************************************************************
 * Header specific methods
 ***********************************************************************************************************/

sap.uxap.ObjectPageLayout.prototype.setHeaderTitle = function (oHeaderTitle, bSuppressInvalidate) {

	oHeaderTitle.addEventDelegate({
		onAfterRendering: jQuery.proxy(this._adjustHeaderHeights, this)
	});

	return this.setAggregation("headerTitle", oHeaderTitle, bSuppressInvalidate);
};

sap.uxap.ObjectPageLayout.prototype._adjustHeaderBackgroundSize = function () {
	// Update the background image size and position
	var oHeaderTitle = this.getHeaderTitle();
	if (oHeaderTitle && oHeaderTitle.getHeaderDesign() == "Dark") {

		this.iTotalHeaderSize = this.iHeaderTitleHeight + this.iHeaderContentHeight;

		oHeaderTitle.$().css("background-size", "100% " + this.iTotalHeaderSize + "px");
		this._$headerContent.css("background-size", "100% " + this.iTotalHeaderSize + "px");

		this._adjustHeaderTitleBackgroundPosition(0, false);
	}
};

sap.uxap.ObjectPageLayout.prototype._adjustHeaderTitleBackgroundPosition = function (iScrollTop) {

	var oHeaderTitle = this.getHeaderTitle();
	if (oHeaderTitle && oHeaderTitle.getHeaderDesign() == "Dark") {
		if (this._bStickyAnchorBar) {
			oHeaderTitle.$().css("background-position", "0px " + ((this.iTotalHeaderSize - this.iHeaderTitleHeightStickied) * -1) + "px");
		}
		else {
			oHeaderTitle.$().css("background-position", "0px " + (this.iHeaderTitleHeight + this.iHeaderContentHeight - this.iTotalHeaderSize - iScrollTop) + "px");
		}
	}
};

sap.uxap.ObjectPageLayout.prototype._adjustHeaderHeights = function () {

	//checking the $headerTitle we prevent from checking the headerHeights multiple times during the first rendering
	//$headerTitle is set in the objectPageLayout.onAfterRendering, thus before the objectPageLayout is fully rendered once, we don't enter here multiple times (performance tweak)
	if (this._$headerTitle.length > 0) {
		var $headerTitleClone = this._$headerTitle.clone();

		//read the headerContentHeight ---------------------------
		this.iHeaderContentHeight = this._$headerContent.height();

		//figure out the anchorBarHeight  ------------------------
		this.iAnchorBarHeight = this._$anchorBar.height();

		//prepare: make sure it won't be visible ever and fix width to the original headerTitle which is 100%
		$headerTitleClone.css({left: "-10000px", top: "-10000px", width: this._$headerTitle.width() + "px"});

		//in sticky mode, we need to calculate the size of original header
		if (this._bStickyAnchorBar) {

			//read the headerTitleStickied ---------------------------
			this.iHeaderTitleHeightStickied = this._$headerTitle.height() - this.iAnchorBarHeight;

			//adjust the headerTitle  -------------------------------
			$headerTitleClone.removeClass("sapUxAPObjectPageHeaderStickied");
			$headerTitleClone.appendTo(sap.ui.getCore().getStaticAreaRef());

			this.iHeaderTitleHeight = $headerTitleClone.is(":visible") ? $headerTitleClone.height() - this.iAnchorBarHeight : 0;
		}
		//otherwise it's the sticky that we need to calculate
		else {

			//read the headerTitle -----------------------------------
			this.iHeaderTitleHeight = this._$headerTitle.is(":visible") ? this._$headerTitle.height() : 0;

			//adjust headerTitleStickied ----------------------------
			$headerTitleClone.addClass("sapUxAPObjectPageHeaderStickied");
			$headerTitleClone.appendTo(sap.ui.getCore().getStaticAreaRef());

			this.iHeaderTitleHeightStickied = $headerTitleClone.height();
		}

		//clean dom
		$headerTitleClone.remove();

		//adjust dom element directly depending on the adjusted height
		// Adjust wrapper top position
		this._$opWrapper.css("padding-top", this.iHeaderTitleHeight);
		this._adjustHeaderBackgroundSize();

		jQuery.sap.log.info("ObjectPageLayout :: adjustHeaderHeight", "headerTitleHeight: " + this.iHeaderTitleHeight + " - headerTitleStickiedHeight: " + this.iHeaderTitleHeightStickied + " - headerContentHeight: " + this.iHeaderContentHeight);
	}
	else {
		jQuery.sap.log.debug("ObjectPageLayout :: adjustHeaderHeight", "skipped as the objectPageLayout is being rendered");
	}
};

/**
 * The the layout data to apply to a header cluster
 * called from the renderer
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._getLayoutDataForControl = function (oControl) {
	var oLayoutData = oControl.getLayoutData();

	if (!oLayoutData) {
		return undefined;
	} else if (oLayoutData instanceof sap.uxap.ObjectPageHeaderLayoutData) {
		return oLayoutData;
	} else if (oLayoutData.getMetadata().getName() == "sap.ui.core.VariantLayoutData") {
		// multiple LayoutData available - search here
		var aLayoutData = oLayoutData.getMultipleLayoutData();
		for (var i = 0; i < aLayoutData.length; i++) {
			var oLayoutData2 = aLayoutData[i];
			if (oLayoutData2 instanceof sap.uxap.ObjectPageHeaderLayoutData) {
				return oLayoutData2;
			}
		}
	}

	return undefined;
};

/**
 * Retrieve the current header design that was defined in the headerTitle if available
 *
 * @private
 */
sap.uxap.ObjectPageLayout.prototype._getHeaderDesign = function () {
	var oHeader = this.getHeaderTitle();
	var sDesign = sap.uxap.ObjectPageHeaderDesign.Light;
	if (oHeader != null) {
		sDesign = oHeader.getHeaderDesign();
	}
	return sDesign;
};
