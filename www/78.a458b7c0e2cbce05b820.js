(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{qqAk:function(e,t,n){"use strict";n.r(t),n.d(t,"CoreettingsSiteLazyModule",(function(){return L}));var i=n("fXoL"),r=n("tyNb"),c=n("L3Fv"),o=n("vY5A"),s=n("Y+03"),a=n("mrSG"),l=n("fjkH"),d=n("9+EE"),g=n("pHTc"),_=n("46ml"),h=n("EoRH"),f=n("baaQ"),u=n("1gmh"),m=n("3LXp"),p=n("GGba"),P=n("j3ag"),C=n("BaYo"),S=n("BBqZ"),b=n("CvRw"),y=n("YEzr");class settings_handlers_source_CoreSettingsHandlersSource extends b.a{constructor(){super(...arguments),this.handlers=[]}loadPageItems(){return Object(a.a)(this,void 0,void 0,(function*(){return this.handlers=y.a.getHandlers(),{items:this.handlers.filter((e=>"page"in e))}}))}getItemPath(e){return e.page}getItemQueryParams(e){return e.params||{}}}var D=n("TEn/"),O=n("nt/U"),v=n("PgjG"),w=n("ofXK"),E=n("3zv0"),T=n("ACYt"),I=n("3CSS"),z=n("3Pt+"),M=n("sYmb");function CoreSitePreferencesPage_ion_item_17_ion_icon_2_Template(e,t){if(1&e&&i.zc(0,"ion-icon",16),2&e){const e=i.Oc().$implicit;i.Vc("name",e.icon)}}function CoreSitePreferencesPage_ion_item_17_ion_toggle_7_Template(e,t){if(1&e){const e=i.Fc();i.Ec(0,"ion-toggle",17),i.Mc("ngModelChange",(function CoreSitePreferencesPage_ion_item_17_ion_toggle_7_Template_ion_toggle_ngModelChange_0_listener(t){i.fd(e);return i.Oc().$implicit.toggleChecked=t}))("ionChange",(function CoreSitePreferencesPage_ion_item_17_ion_toggle_7_Template_ion_toggle_ionChange_0_listener(t){i.fd(e);return i.Oc().$implicit.toggle(t.detail.checked)})),i.Dc()}if(2&e){const e=i.Oc().$implicit;i.Vc("ngModel",e.toggleChecked)}}function CoreSitePreferencesPage_ion_item_17_Template(e,t){if(1&e){const e=i.Fc();i.Ec(0,"ion-item",13),i.Mc("click",(function CoreSitePreferencesPage_ion_item_17_Template_ion_item_click_0_listener(){i.fd(e);const n=t.$implicit,r=i.Oc();return!n.toggle&&r.handlers.select(n)})),i.Pc(1,"translate"),i.nd(2,CoreSitePreferencesPage_ion_item_17_ion_icon_2_Template,1,1,"ion-icon",14),i.Ec(3,"ion-label"),i.Ec(4,"p",8),i.pd(5),i.Pc(6,"translate"),i.Dc(),i.Dc(),i.nd(7,CoreSitePreferencesPage_ion_item_17_ion_toggle_7_Template,1,1,"ion-toggle",15),i.Dc()}if(2&e){const e=t.$implicit,n=i.Oc();i.Vc("ngClass",e.class)("button",!e.toggle)("detail",!e.toggle),i.mc("aria-label",i.Qc(1,8,e.title))("aria-current",n.handlers.getItemAriaCurrent(e)),i.lc(2),i.Vc("ngIf",e.icon),i.lc(3),i.qd(i.Qc(6,10,e.title)),i.lc(2),i.Vc("ngIf",e.toggle)}}function CoreSitePreferencesPage_ion_item_31_ng_container_3_Template(e,t){1&e&&(i.Cc(0),i.pd(1),i.Pc(2,"translate"),i.Bc()),2&e&&(i.lc(1),i.rd(" ",i.Qc(2,1,"core.settings.connectwifitosync"),""))}function CoreSitePreferencesPage_ion_item_31_ng_container_4_Template(e,t){1&e&&(i.Cc(0),i.pd(1),i.Pc(2,"translate"),i.Bc()),2&e&&(i.lc(1),i.qd(i.Qc(2,1,"core.settings.connecttosync")))}function CoreSitePreferencesPage_ion_item_31_Template(e,t){if(1&e&&(i.Ec(0,"ion-item",18),i.zc(1,"ion-icon",19),i.Ec(2,"ion-label"),i.nd(3,CoreSitePreferencesPage_ion_item_31_ng_container_3_Template,3,3,"ng-container",20),i.nd(4,CoreSitePreferencesPage_ion_item_31_ng_container_4_Template,3,3,"ng-container",20),i.Dc(),i.Dc()),2&e){const e=i.Oc();i.lc(3),i.Vc("ngIf",e.isOnline&&e.dataSaver&&e.limitedConnection),i.lc(1),i.Vc("ngIf",!e.isOnline)}}let k=(()=>{class CoreSitePreferencesPage{constructor(){this.dataSaver=!1,this.limitedConnection=!1,this.isOnline=!0,this.isDestroyed=!1,this.siteId=d.b.getCurrentSiteId();const e=f.a.getOrCreateSource(settings_handlers_source_CoreSettingsHandlersSource,[]);this.handlers=new h.a(e,CoreSitePreferencesPage),this.sitesObserver=l.b.on(l.b.SITE_UPDATED,(()=>{this.refreshData()}),this.siteId),this.isOnline=p.a.isOnline(),this.limitedConnection=this.isOnline&&p.a.isNetworkAccessLimited(),this.networkObserver=p.a.onChange().subscribe((()=>{P.A.run((()=>{this.isOnline=p.a.isOnline(),this.limitedConnection=this.isOnline&&p.a.isNetworkAccessLimited()}))}))}get handlerItems(){return this.handlers.getSource().handlers}ngAfterViewInit(){return Object(a.a)(this,void 0,void 0,(function*(){this.dataSaver=yield S.a.get(C.a.SETTINGS_SYNC_ONLY_ON_WIFI,!0);const e=g.a.getRouteParam("page");try{yield this.fetchData()}finally{const t=e?this.handlers.items.find((t=>t.page==e)):void 0;t?(this.handlers.watchSplitViewOutlet(this.splitView),yield this.handlers.select(t)):yield this.handlers.start(this.splitView)}}))}fetchData(){return Object(a.a)(this,void 0,void 0,(function*(){yield this.handlers.load()}))}synchronize(){return Object(a.a)(this,void 0,void 0,(function*(){try{yield u.a.synchronizeSite(!1,this.siteId)}catch(e){if(this.isDestroyed)return;m.a.showErrorModalDefault(e,"core.settings.sitesyncfailed",!0)}}))}isSynchronizing(){return!!u.a.getSiteSyncPromise(this.siteId)}refreshData(e){this.handlers.getSource().setDirty(!0),this.fetchData().finally((()=>{null==e?void 0:e.complete()}))}ngOnDestroy(){this.isDestroyed=!0,this.sitesObserver.off(),this.networkObserver.unsubscribe(),this.handlers.destroy()}}return CoreSitePreferencesPage.ɵfac=function CoreSitePreferencesPage_Factory(e){return new(e||CoreSitePreferencesPage)},CoreSitePreferencesPage.ɵcmp=i.sc({type:CoreSitePreferencesPage,selectors:[["page-core-site-preferences"]],viewQuery:function CoreSitePreferencesPage_Query(e,t){var n;(1&e&&i.ud(_.a,!0),2&e)&&(i.dd(n=i.Nc())&&(t.splitView=n.first))},decls:32,vars:24,consts:[["slot","start"],[3,"text"],["slot","end"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["class","core-settings-handler",3,"ngClass","button","detail","click",4,"ngFor","ngForOf"],[1,"ion-text-wrap"],[1,"item-heading"],["slot","end",3,"loading"],["fill","clear",3,"disabled","click"],["name","fas-rotate","slot","icon-only","aria-hidden","true"],["class","core-warning-item ion-text-wrap",4,"ngIf"],[1,"core-settings-handler",3,"ngClass","button","detail","click"],["slot","start","aria-hidden","true",3,"name",4,"ngIf"],[3,"ngModel","ngModelChange","ionChange",4,"ngIf"],["slot","start","aria-hidden","true",3,"name"],[3,"ngModel","ngModelChange","ionChange"],[1,"core-warning-item","ion-text-wrap"],["name","fas-triangle-exclamation","slot","start","aria-hidden","true"],[4,"ngIf"]],template:function CoreSitePreferencesPage_Template(e,t){1&e&&(i.Ec(0,"ion-header"),i.Ec(1,"ion-toolbar"),i.Ec(2,"ion-buttons",0),i.zc(3,"ion-back-button",1),i.Pc(4,"translate"),i.Dc(),i.Ec(5,"ion-title"),i.Ec(6,"h1"),i.pd(7),i.Pc(8,"translate"),i.Dc(),i.Dc(),i.zc(9,"ion-buttons",2),i.Dc(),i.Dc(),i.Ec(10,"ion-content"),i.Ec(11,"core-split-view"),i.Ec(12,"ion-refresher",3),i.Mc("ionRefresh",(function CoreSitePreferencesPage_Template_ion_refresher_ionRefresh_12_listener(e){return t.refreshData(e.target)})),i.zc(13,"ion-refresher-content",4),i.Pc(14,"translate"),i.Dc(),i.Ec(15,"core-loading",5),i.Ec(16,"ion-list"),i.nd(17,CoreSitePreferencesPage_ion_item_17_Template,8,12,"ion-item",6),i.Dc(),i.Ec(18,"ion-card"),i.Ec(19,"ion-item",7),i.Ec(20,"ion-label"),i.Ec(21,"p",8),i.pd(22),i.Pc(23,"translate"),i.Dc(),i.Ec(24,"p"),i.pd(25),i.Pc(26,"translate"),i.Dc(),i.Dc(),i.Ec(27,"core-button-with-spinner",9),i.Ec(28,"ion-button",10),i.Mc("click",(function CoreSitePreferencesPage_Template_ion_button_click_28_listener(){return t.synchronize()})),i.Pc(29,"translate"),i.zc(30,"ion-icon",11),i.Dc(),i.Dc(),i.Dc(),i.nd(31,CoreSitePreferencesPage_ion_item_31_Template,5,2,"ion-item",12),i.Dc(),i.Dc(),i.Dc(),i.Dc()),2&e&&(i.lc(3),i.Vc("text",i.Qc(4,12,"core.back")),i.lc(4),i.qd(i.Qc(8,14,"core.settings.preferences")),i.lc(5),i.Vc("disabled",!t.handlers.loaded),i.lc(1),i.Wc("pullingText",i.Qc(14,16,"core.pulltorefresh")),i.lc(2),i.Vc("hideUntil",t.handlers.loaded),i.lc(2),i.Vc("ngForOf",t.handlerItems),i.lc(5),i.qd(i.Qc(23,18,"core.settings.synchronizenow")),i.lc(3),i.rd(" ",i.Qc(26,20,"core.settings.synchronizenowhelp")," "),i.lc(2),i.Vc("loading",t.isSynchronizing()),i.lc(1),i.Vc("disabled",!t.isOnline||t.dataSaver&&t.limitedConnection),i.mc("aria-label",i.Qc(29,22,"core.settings.synchronizenow")),i.lc(3),i.Vc("ngIf",!t.isOnline||t.dataSaver&&t.limitedConnection))},directives:[D.C,D.Ab,D.m,D.h,D.i,D.yb,O.a,D.v,_.a,D.bb,D.cb,v.a,D.P,w.s,D.n,D.I,D.O,E.a,T.a,D.l,D.D,I.a,w.t,w.q,D.zb,D.d,z.r,z.u],pipes:[M.d],encapsulation:2}),CoreSitePreferencesPage})();var V=n("DDiw");function buildRoutes(e){const t=Object(V.b)(e),n=[{path:"",component:k},...t.siblings],i=[{path:"",component:k,children:t.siblings}];return[...Object(o.c)(n,(()=>s.a.isMobile)),...Object(o.c)(i,(()=>s.a.isTablet))]}let L=(()=>{class CoreettingsSiteLazyModule{}return CoreettingsSiteLazyModule.ɵmod=i.wc({type:CoreettingsSiteLazyModule}),CoreettingsSiteLazyModule.ɵinj=i.vc({factory:function CoreettingsSiteLazyModule_Factory(e){return new(e||CoreettingsSiteLazyModule)},providers:[{provide:r.g,multi:!0,useFactory:buildRoutes,deps:[i.x]}],imports:[[c.a],r.m]}),CoreettingsSiteLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&i.kd(L,{declarations:[k],imports:[c.a],exports:[r.m]}))}}]);