/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
sap.ui.controller("sap.ca.ui.message.MessageBox",{_MSGBOX_ID:"DLG_MSGBOX",_MSGBOX_DETAILS_ID:"TXA_DETAILS",onCloseDialog:function(){sap.ca.ui.dialog.factory.closeDialog(this._MSGBOX_ID)},onShowDetails:function(e){var l=e.getSource();if(l){l.setVisible(false)}var d=this.getView().byId(this._MSGBOX_DETAILS_ID);if(d){d.setVisible(true)}this.getView().byId(this._MSGBOX_ID).rerender()}});
