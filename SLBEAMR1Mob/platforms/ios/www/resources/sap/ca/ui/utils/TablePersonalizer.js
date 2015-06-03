/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.declare("sap.ca.ui.utils.TablePersonalizer");jQuery.sap.require("sap.ushell.services.Personalization");jQuery.sap.require("sap.m.TablePersoController");
sap.ca.ui.utils.TablePersonalizer=function(m,s,p){try{var P=sap.ushell.Container.getService("Personalization").getPersonalizer(p);var t=new sap.m.TablePersoController({table:m,persoService:P});t.activate();s.attachPress(function(){t.openDialog()})}catch(e){jQuery.sap.log.error("TablePersonalizer : cannot load personalization service from ushell "+e.message)}};
