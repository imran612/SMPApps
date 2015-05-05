/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.require("sap.ui.core.mvc.Controller");
jQuery.sap.require("sap.ca.scfld.md.app.FullScreenHeaderFooterHelper");
jQuery.sap.require("sap.ca.scfld.md.app.CommonHeaderFooterHelper");

jQuery.sap.require("sap.ca.scfld.md.app.Application");

/**
 * @class
 * @name sap.ca.scfld.md.controller.BaseFullscreenController
 * @extends sap.ui.core.mvc.Controller
 * @public
 */
sap.ui.core.mvc.Controller.extend("sap.ca.scfld.md.controller.BaseFullscreenController", {

	constructor : function() {
		this.oApplicationImplementation = sap.ca.scfld.md.app.Application.getImpl();
		// Make sure that our init-coding is executed even if the App overrides onInit() and does not call
		// onInit() of the super class.
		var fMyOnInit = jQuery.proxy(function() {

			// get routing object for navigation
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			this.oApplicationFacade = this.oApplicationImplementation.oConfiguration.oApplicationFacade;

			this.oConnectionManager = this.oApplicationImplementation.getConnectionManager();

			this.oApplicationImplementation.setModels(this);

            this.oApplicationImplementation.defineFullscreenHeaderFooter(this);

			// --------------------------
			var fMyOnBeforeShow = jQuery.proxy(function(evt) {

			}, this);

			// register for onBeforeShow
			if (typeof this.onBeforeShow === "function") {
				var fAppOnBeforeShow = jQuery.proxy(this.onBeforeShow, this);
				this.onBeforeShow = function(evt) {
					fAppOnBeforeShow(evt);
					fMyOnBeforeShow(evt);
				};
			} else {
				this.getView().addEventDelegate({
					onBeforeShow : jQuery.proxy(function(evt) {
						fMyOnBeforeShow();
					}, this)
				});
			};
			// -------------------------------------
		}, this);

		var fAppOnInit = jQuery.proxy(this.onInit, this);
		this.onInit = function() {
			fMyOnInit();
			fAppOnInit();
		};
	},

	onInit : function() {
		// do not add any coding here. Just needed in case the App calls onInit() of the super class
	},
	
	/*
	 * override this method if you have not used the standard way to include the page in the view
	 */
	getPage : function(){
		return sap.ca.scfld.md.app.CommonHeaderFooterHelper.getPageFromController(this);
	}, 

	/*********************************************************************************************************************
	* Obsolete: Use {@link #setHeaderFooterOptions} in order to explicitly set the header and footer when they need to be changed.
	*/
	getHeaderFooterOptions : function() {
		return null;
	},
	
	/**
	* sets the Fullscreen page header and footer.
	* @param {object} oOptions you can set the Fullscreen header and footer parts with the following attributes:
	* 
	* <p><b>Fullscreen Header part:</b></p>
	* <ul>
	* <li>{string} <b>sI18NFullscreenTitle</b> the i18n-key in the i18n-properties file of the App for the title.</li>
	* <li>{string} <b>sFullscreenTitle</b> alternatively, set the title text directly. 
	* If both are not provided, the i18n-key FULLSCREEN_TITLE as default will be taken.</li>
	* <li>{function} <b>onBack</b> "back" button press function, the history.back behavior is used as default if you don't provide your own back behavior. 
	* If you want to suppress the Back-button in the Fullscreen page, you can set the onBack attribute with value null.</li>
	* <li>{function} <b>onFacetFilter</b> callback function, if you need a FacetFilter button on the header.</li>
	* <li>{object} <b>oHeaderBtnSettings</b> is the definition object for the header button. Only one header button can be defined and it will be displayed on the right (left in RTL mode) hand side of the header bar. The following settings can be made for the header button:</li>
	*	<ul>
	*		<li>{string} <b>sIcon</b> -- an <i>optional</i> icon that is added to the button</li>
	*		<li>{function} <b>onBtnPressed</b> the handler function for the buttons's press event</li>
	*		<li>{string} <b>sText</b> -- an <i>optional</i> static text that is displayed on the button</li>
	*		<li>{object} <b>oTextBinding</b> -- <i>optional</i> if <i>sText</i> is not given the oTextBinding object can be used to bind the button's text to a entity in the model using element binding. The following settings need to be made:</li>
	*		<ul>
	*			<li>{string} <b>elementPath</b> Path to the element of the model that is used as the binding context</li>
	*			<li>{string} <b>property</b> Name of the property containing the text to be displayed</li>
	*			<li>{object} <b>parameters</b> <i>optional</i> map of additional parameters for the binding (e.g."select" - for a full description of possible values check the binding documentation)</li>
	*		</ul>
	*		<li>{string} <b>i18nTxt</b> <i>optional</i> if sText and oTextBinding are not given i18nTxt can be used to fill the button's text from the i18n files. additionally a different text can be defined for phones (see i18nPhoneTxt)</li>
	*		<li>{string} <b>i18nPhoneTxt</b> <i>optional</i> if sText and oTextBinding are not given i18nPhoneTxt can be used to fill the button's text from the i18n files if the used device is a phone</li>
	*	</ul>
	* </ul>
	* <p><b>Fullscreen Footer part:</b> -- there are several pre-defined buttons which you can use on the Footer bar if you provide the necessary attributes; 
	* there are also custom-defined buttons possible. In general, every button can have the following settings:</p>
	* <ul>
	*     <li><b>sId</b> -- an <i>optional</i> property to set an Id for the specific button. 
	*     This Id is meant to be used in the call of the setBtnEnables method.</li>
	*     <li><b>bDisabled</b> -- an <i>optional</i> property to set the button initially enabled/disabled.</li>
	*     <li><b>sI18nBtnTxt</b> -- If the button doesn't have the fix predefined text, you can provide the key of the i18n text which is used as the text of the button.</li>
	*     <li><b>onBtnPressed</b> -- callback function of the specific button.</li>
	* </ul>
	*
	* Here are the buttons/attributes allowed on the Fullscreen Footer bar:
	* <ul>
	* <li>{array} <b>aAdditionalSettingButtons</b> list of buttons which can be added to the TechnicalSettings-menu (e.g. About, Login Details and Logout). 
	* Every button should have the above listed meta information.</li>
	* <li>{object} <b>oFilterOptions</b> if you want to get the predefined filter button, besides above listed default button attributes, you can choose one of the following options:
	*     <ul>
	*        <li>{function} <b>onFilterPressed</b> provide the callback function if you only want to get notified if the filter button is pressed.</li>
	*        <li>In case of your filter criterion/item can be represented by simple text with key, you can provide the following settings:
	*              <ul>
	*                  <li><b>aFilterItems</b> -- an array includes the possible filter items with the following attributes:</li>
	*                      <ul><li><b>text</b> -- the text to be shown to the user;</li>
	*                      <li><b>key</b> -- the unique filter key value.</li></ul>
	*                  <li><b>sSelectedItemKey</b> -- the key value of the default/current selected filter item.</li>
	*                  <li><b>onFilterSelected</b> -- the callback function for the application, if a filter item is selected; 
	*                  the filter key will be provided.</li>
	*              </ul>
	*         </li>
	*     </ul>
	* </li>
	* <li>{object} <b>oGroupOptions</b> if you want to get the predefined group button, besides above listed default button attributes, you can choose one of the following options:
	*     <ul>
	*         <li>{function} <b>onGroupPressed</b> provide the callback function if you only want to get notified if the group button is pressed.</li>
	*         <li>In case of your group criterion/item can be represented by simple text with key, 
	*         you can provide the following settings:
	*              <ul>
	*                  <li><b>aGroupItems</b> -- an array includes the possible group items with the following attributes:</li>
	*                      <ul><li><b>text</b> -- the text to be shown to the user;</li>
	*                      <li><b>key</b> -- the unique group key value.</li></ul>
	*                  <li><b>sSelectedItemKey</b> -- the key value of the default/current selected group item.</li>
	*                  <li><b>onGroupSelected</b> -- the callback function for the application, if a group item is selected; 
	*                  the filter key will be provided.</li>
	*               </ul>
	*          </li>
	*     </ul>
	* </li>
	* <li>{object} <b>oSortOptions</b> if you want to get the predefined sort button, besides above listed default button attributes, you can choose one of the following options:
	*    <ul>
	*         <li>{function} <b>onSortPressed</b> provide the callback function if you only want to get notified if the sort button is pressed.</li>
	*         <li>In case of your sort criterion/item can be represented by simple text with key, 
	*         you can provide the following settings:
	*             <ul>
	*                 <li><b>aSortItems</b> -- an array includes the possible sort items with the following attributes:</li>
	*                     <ul><li><b>text</b> -- the text to be shown to the user;</li>
	*                         <li><b>key</b> -- the unique sort key value.</li></ul>
	*                 <li><b>sSelectedItemKey</b> -- the key value of the default/current selected sort item.</li>
	*                 <li><b>onSortSelected</b> -- the callback function for the application, if a sort item is selected; 
	*                 the filter key will be provided.</li>
	*             </ul>
	*         </li>
	*    </ul>
	* </li>
	* <li>{object} <b>oEditBtn</b> the button for default/recommended action of the view - 
	* usually this would be the edit but also other usages are possible.</li>
	* <li>{object} <b>oPositiveAction</b> can be used as the positive button e.g. for Approve action in an approval scenario.</li>
	* <li>{object} <b>oNegativeAction</b> can be used as the negative button e.g. for Reject action in an approval scenario.</li>
	* <li>{array} <b>buttonList</b> list of buttons which can be defined additionally.</li>
	* <li>{object} <b>oAddBookmarkSettings</b> describe the settings for the Add-Bookmark-button, which should have the same parameters 
	* provided for "sap.ushell.services.Bookmark" with 
	* the exception that attribute url can be left out, as it is set by the scaffolding. The bookmark button will 
	* be displayed even if there are no settings provided, but can be suppressed via property <b>bSuppressBookmarkButton</b> explicitly.</li>
	* <li>{boolean} <b>bSuppressBookmarkButton</b> can suppress the Bookmark button from the 'Share' menu.</li>
	* <li>{object} <b>oEmailSettings</b> provide settings for the Email functionality:
	*    <ul>
	*        <li><b>sSubject</b> -- Email subject part;</li>
	*        <li><b>sRecepient</b> -- Email address of the recipient:</li>
	*        <li><b>fGetMailBody</b> -- function to provide Email body text.</li>
	*    </ul>
	* </li>
	* <li>{object} <b>oJamOptions</b> in order to configure the "Share in SAP Jam" button and the "Discuss in SAP Jam" button:
	*    <ul>
	*        <li>{object} <b>oShareSettings</b> -- settings for the "Share in SAP Jam" button, for further allowed settings please check "sap.collaboration.components.fiori.sharing.Component.setSettings" method;</li>
	*        <li>{object} <b>oDiscussSettings</b> -- settings for the "Discuss in SAP Jam" button, for further allowed settings please check "sap.collaboration.components.fiori.feed.Component.setSettings" method.</li>
	*    </ul>
	* </li>
	* <li>{array} <b>additionalShareButtonList</b> contains information about additional buttons in the share menu.</li>
	* </ul>
	* @public
	* @name sap.ca.scfld.md.controller.BaseFullscreenController#setHeaderFooterOptions
	* @function
	*/
	setHeaderFooterOptions : function(oOptions){
		if (!this._oFullScreenHeaderFooterHelper){
			this._oFullScreenHeaderFooterHelper = new sap.ca.scfld.md.app.FullScreenHeaderFooterHelper(this.oApplicationImplementation);
		}
		this._oFullScreenHeaderFooterHelper.setHeaderFooter(this, oOptions);
	},

	/**
	* enables/disables the header/footer button based on the given id
	* @param {string} sId id of the button to be updated
	* @param {boolean} bEnabled set the button enabled/disabled
	* @public
	* @name sap.ca.scfld.md.controller.BaseFullscreenController#setBtnEnabled
	* @function
	*/
	setBtnEnabled : function(sId, bEnabled) {
		if (this._oControlStore.oButtonListHelper){
			this._oControlStore.oButtonListHelper.setBtnEnabled(sId, bEnabled);
		}
	},
	
	/**
	* updates the header/footer button text based on the given id
	* @param {string} sId id of the button to be updated
	* @param {string} sText the new text for the button to be updated
	* @public
	* @name sap.ca.scfld.md.controller.BaseFullscreenController#setBtnText
	* @function
	*/
	setBtnText : function(sId, sText){
		if (this._oControlStore.oButtonListHelper){
			this._oControlStore.oButtonListHelper.setBtnText(sId, sText);
		}
	},
	
	/**
	 * Refreshes the model
	 */
	_refresh : function(channelId, eventId, data) {

		if (data && data.context) {

			// set context of selected master object
			this.getView().setBindingContext(data.context);

			// scroll to top of page
			// this.getView().byId("page").scrollTo(0);
		}
	},

	_navBack : function() {
		window.history.back();
	},

  isMainScreen : function(){
  	return true;
  },

  /**
	* returns a Reference of the header button on the top right (left in RTL mode) or null if no header button is defined
	* @returns {object} Reference of the header button or null if no header button is defined
	* @public
	* @name sap.ca.scfld.md.controller.BaseDetailController#getHeaderBtn
	* @function
	*/
	getHeaderBtn : function(){
		if (this._oControlStore.oHeaderBtn){
			return this._oControlStore.oHeaderBtn;
		}else{
			return null; 
		}
	}
});
