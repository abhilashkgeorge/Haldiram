(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{t6Y4:function(e,o,t){"use strict";t.r(o),t.d(o,"CoreCoursesMyLazyModule",(function(){return L}));var s=t("tyNb"),a=t("L3Fv"),r=t("5p9q"),i=t("dQ3M"),n=t("mrSG"),c=t("fDR4"),l=t("FYaz"),d=t("mSZx"),u=t("6akD"),g=t("OYIH"),b=t("YyYz"),h=t("9+EE"),m=t("3LXp"),y=t("bFG1"),C=t("fjkH"),_=t("Xzvb"),v=t("8vmT"),p=t("D7J2"),f=t("j3ag"),k=t("fXoL"),M=t("TEn/"),P=t("hMzs"),w=t("C1x5"),O=t("nt/U"),D=t("PgjG"),B=t("ofXK"),I=t("ACYt"),E=t("3CSS"),x=t("aSim"),S=t("r8G5"),T=t("sYmb");function CoreCoursesMyPage_div_23_ion_button_1_Template(e,o){if(1&e){const e=k.Fc();k.Ec(0,"ion-button",20),k.Mc("click",(function CoreCoursesMyPage_div_23_ion_button_1_Template_ion_button_click_0_listener(){k.fd(e);return k.Oc(2).myOverviewBlock.prefetchCourses()})),k.Pc(1,"translate"),k.zc(2,"ion-icon",21),k.Dc()}if(2&e){const e=k.Oc(2);k.mc("aria-label",k.Qc(1,2,e.myOverviewBlock.prefetchCoursesData.statusTranslatable)),k.lc(2),k.Vc("name",e.myOverviewBlock.prefetchCoursesData.icon)}}function CoreCoursesMyPage_div_23_ion_badge_2_Template(e,o){if(1&e&&(k.Ec(0,"ion-badge",22),k.pd(1),k.Dc()),2&e){const e=k.Oc(2);k.mc("aria-valuemax",e.myOverviewBlock.prefetchCoursesData.total)("aria-valuenow",e.myOverviewBlock.prefetchCoursesData.count)("aria-valuetext",e.myOverviewBlock.prefetchCoursesData.badgeA11yText),k.lc(1),k.rd(" ",e.myOverviewBlock.prefetchCoursesData.badge," ")}}function CoreCoursesMyPage_div_23_ion_spinner_3_Template(e,o){1&e&&(k.zc(0,"ion-spinner"),k.Pc(1,"translate")),2&e&&k.mc("aria-label",k.Qc(1,1,"core.loading"))}function CoreCoursesMyPage_div_23_Template(e,o){if(1&e&&(k.Ec(0,"div",16),k.nd(1,CoreCoursesMyPage_div_23_ion_button_1_Template,3,4,"ion-button",17),k.nd(2,CoreCoursesMyPage_div_23_ion_badge_2_Template,2,4,"ion-badge",18),k.nd(3,CoreCoursesMyPage_div_23_ion_spinner_3_Template,2,3,"ion-spinner",19),k.Dc()),2&e){const e=k.Oc();k.lc(1),k.Vc("ngIf",!e.myOverviewBlock.prefetchCoursesData.loading),k.lc(1),k.Vc("ngIf",e.myOverviewBlock.prefetchCoursesData.badge),k.lc(1),k.Vc("ngIf",e.myOverviewBlock.prefetchCoursesData.loading)}}function CoreCoursesMyPage_core_block_25_Template(e,o){if(1&e&&k.zc(0,"core-block",23),2&e){const e=k.Oc();k.Vc("block",e.loadedBlock)("instanceId",e.userId)}}function CoreCoursesMyPage_core_block_side_blocks_button_26_Template(e,o){if(1&e&&k.zc(0,"core-block-side-blocks-button",24),2&e){const e=k.Oc();k.Vc("instanceId",e.userId)("myDashboardPage",e.myPageCourses)}}function CoreCoursesMyPage_core_empty_box_27_Template(e,o){1&e&&(k.zc(0,"core-empty-box",25),k.Pc(1,"translate")),2&e&&k.Vc("message",k.Qc(1,1,"core.course.nocontentavailable"))}let z=(()=>{class CoreCoursesMyPage{constructor(e){this.loadsManager=e,this.siteName="",this.downloadCoursesEnabled=!1,this.loaded=!1,this.myPageCourses=g.b.MY_PAGE_COURSES,this.hasSideBlocks=!1,this.onReadyPromise=new l.a,this.updateSiteObserver=C.b.on(C.b.SITE_UPDATED,(()=>Object(n.a)(this,void 0,void 0,(function*(){this.downloadCoursesEnabled=!_.a.isDownloadCoursesDisabledInSite(),yield this.loadSiteName()}))),h.b.getCurrentSiteId()),this.userId=h.b.getCurrentSiteUserId(),this.loadsManagerSubscription=this.loadsManager.onRefreshPage.subscribe((()=>{this.loaded=!1,this.loadContent()})),this.logView=v.a.once((()=>Object(n.a)(this,void 0,void 0,(function*(){yield y.a.ignoreErrors(_.a.logView("my")),p.a.logEvent({type:p.b.VIEW_ITEM,ws:"core_my_view_page",name:f.J.instant("core.courses.mycourses"),data:{category:"course",page:"my"},url:"/my/courses.php"})}))))}ngOnInit(){return Object(n.a)(this,void 0,void 0,(function*(){this.downloadCoursesEnabled=!_.a.isDownloadCoursesDisabledInSite();(new b.a).treatLink(),yield this.loadSiteName(),this.loadContent(!0)}))}loadContent(e=!1){var o,t,s;return Object(n.a)(this,void 0,void 0,(function*(){const a=this.loadsManager.startPageLoad(this,!!e),r=yield g.a.isAvailable(),i=yield _.a.isMyCoursesDisabled(),n=!!(null===(o=h.b.getCurrentSite())||void 0===o?void 0:o.isVersionGreaterEqualThan("4.0"));if(r&&!i)try{const e=yield a.watchRequest(g.a.getDashboardBlocksObservable({myPage:n?this.myPageCourses:void 0,readingStrategy:a.getReadingStrategy()}));this.loadedBlock=e.mainBlocks.concat(e.sideBlocks).find((e=>"myoverview"==e.name)),this.hasSideBlocks=n&&u.a.hasSupportedBlock(e.sideBlocks),yield y.a.nextTicks(2),this.myOverviewBlock=null===(s=null===(t=this.block)||void 0===t?void 0:t.dynamicComponent)||void 0===s?void 0:s.instance,this.loadedBlock||n||this.loadFallbackBlock()}catch(e){m.a.showErrorModal(e),this.loadFallbackBlock()}else r?this.loadedBlock=void 0:this.loadFallbackBlock();this.loaded=!0,this.onReadyPromise.resolve(),this.logView()}))}loadSiteName(){return Object(n.a)(this,void 0,void 0,(function*(){const e=h.b.getRequiredCurrentSite();this.siteName=(yield e.getSiteName())||""}))}loadFallbackBlock(){this.loadedBlock={name:"myoverview",visible:!0}}refresh(e){return Object(n.a)(this,void 0,void 0,(function*(){const o=[];o.push(g.a.invalidateDashboardBlocks(g.b.MY_PAGE_COURSES)),this.myOverviewBlock&&o.push(y.a.ignoreErrors(this.myOverviewBlock.invalidateContent())),Promise.all(o).finally((()=>{this.loadContent().finally((()=>{null==e?void 0:e.complete()}))}))}))}ngOnDestroy(){var e;null===(e=this.updateSiteObserver)||void 0===e?void 0:e.off(),this.loadsManagerSubscription.unsubscribe()}ready(){return Object(n.a)(this,void 0,void 0,(function*(){return yield this.onReadyPromise}))}}return CoreCoursesMyPage.ɵfac=function CoreCoursesMyPage_Factory(e){return new(e||CoreCoursesMyPage)(k.yc(c.a))},CoreCoursesMyPage.ɵcmp=k.sc({type:CoreCoursesMyPage,selectors:[["page-core-courses-my"]],viewQuery:function CoreCoursesMyPage_Query(e,o){var t;(1&e&&k.ud(d.a,!0),2&e)&&(k.dd(t=k.Nc())&&(o.block=t.first))},features:[k.kc([{provide:c.a,useClass:c.a}])],decls:28,vars:18,consts:[["slot","start"],[3,"text"],["src","assets/img/toolbar-icon.png","alt","Custom Image",1,"custom-logo"],["contextLevel","system",1,"core-header-sitename",3,"text","contextInstanceId"],["src","assets/img/top_logo.png",1,"core-header-logo",3,"alt"],["slot","end"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[1,"ion-text-wrap","divider"],["id","core-courses-my-title",1,"big"],["slot","end",1,"flex-row"],["class","core-button-spinner",4,"ngIf"],["contextLevel","user","labelledBy","core-courses-my-title",3,"block","instanceId",4,"ngIf"],["slot","fixed","contextLevel","user",3,"instanceId","myDashboardPage",4,"ngIf"],["icon","fas-cubes",3,"message",4,"ngIf"],[1,"core-button-spinner"],["fill","clear",3,"click",4,"ngIf"],["class","core-course-download-courses-progress","role","progressbar",4,"ngIf"],[4,"ngIf"],["fill","clear",3,"click"],["slot","icon-only","aria-hidden","true",3,"name"],["role","progressbar",1,"core-course-download-courses-progress"],["contextLevel","user","labelledBy","core-courses-my-title",3,"block","instanceId"],["slot","fixed","contextLevel","user",3,"instanceId","myDashboardPage"],["icon","fas-cubes",3,"message"]],template:function CoreCoursesMyPage_Template(e,o){1&e&&(k.Ec(0,"ion-header"),k.Ec(1,"ion-toolbar"),k.Ec(2,"ion-buttons",0),k.zc(3,"ion-back-button",1),k.Pc(4,"translate"),k.Dc(),k.Ec(5,"ion-title"),k.Ec(6,"h1"),k.zc(7,"img",2),k.zc(8,"core-format-text",3),k.zc(9,"img",4),k.Dc(),k.Dc(),k.Ec(10,"ion-buttons",5),k.zc(11,"core-user-menu-button"),k.Dc(),k.Dc(),k.Dc(),k.Ec(12,"ion-content"),k.Ec(13,"ion-refresher",6),k.Mc("ionRefresh",(function CoreCoursesMyPage_Template_ion_refresher_ionRefresh_13_listener(e){return o.refresh(e.target)})),k.zc(14,"ion-refresher-content",7),k.Pc(15,"translate"),k.Dc(),k.Ec(16,"core-loading",8),k.Ec(17,"ion-item",9),k.Ec(18,"ion-label"),k.Ec(19,"h2",10),k.pd(20),k.Pc(21,"translate"),k.Dc(),k.Dc(),k.Ec(22,"div",11),k.nd(23,CoreCoursesMyPage_div_23_Template,4,3,"div",12),k.Dc(),k.Dc(),k.Ec(24,"ion-list"),k.nd(25,CoreCoursesMyPage_core_block_25_Template,1,2,"core-block",13),k.Dc(),k.nd(26,CoreCoursesMyPage_core_block_side_blocks_button_26_Template,1,2,"core-block-side-blocks-button",14),k.nd(27,CoreCoursesMyPage_core_empty_box_27_Template,2,3,"core-empty-box",15),k.Dc(),k.Dc()),2&e&&(k.lc(3),k.Vc("text",k.Qc(4,12,"core.back")),k.lc(5),k.Vc("text",o.siteName+" LMS")("contextInstanceId",0),k.lc(1),k.Vc("alt",o.siteName),k.lc(4),k.Vc("disabled",!o.loaded),k.lc(1),k.Wc("pullingText",k.Qc(15,14,"core.pulltorefresh")),k.lc(2),k.Vc("hideUntil",o.loaded),k.lc(4),k.qd(k.Qc(21,16,"core.courses.mycourses")),k.lc(3),k.Vc("ngIf",o.downloadCoursesEnabled&&o.myOverviewBlock&&o.myOverviewBlock.filteredCourses.length>0),k.lc(2),k.Vc("ngIf",null==o.loadedBlock?null:o.loadedBlock.visible),k.lc(1),k.Vc("ngIf",o.hasSideBlocks),k.lc(1),k.Vc("ngIf",!o.loadedBlock))},directives:[M.C,M.Ab,M.m,M.h,M.i,M.yb,P.a,w.a,O.a,M.v,M.bb,M.cb,D.a,M.I,M.O,B.t,M.P,I.a,M.l,M.D,E.a,M.k,M.qb,d.a,x.a,S.a],pipes:[T.d],styles:["[_nghost-%COMP%]     ion-item-divider{display:none!important}[_nghost-%COMP%]     core-loading{--internal-loading-inline-min-height:calc(100vh - var(--core-header-toolbar-height))}ion-tabs.placement-bottom[_nghost-%COMP%]     core-loading, ion-tabs.placement-bottom   [_nghost-%COMP%]     core-loading{--internal-loading-inline-min-height:calc(100vh - var(--core-header-toolbar-height) - var(--bottom-tabs-size) - 2px)}core-block[_ngcontent-%COMP%]     ion-card.addon-block-myoverview{--border-width:0;--background:transparent;margin:0}.custom-logo[_ngcontent-%COMP%]{width:60px;height:auto;margin-right:10px}.core-header-logo[_ngcontent-%COMP%]{width:40px;height:auto}ion-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;align-items:center}ion-title[_ngcontent-%COMP%]{padding-left:5px}"]}),CoreCoursesMyPage})();const V=[{path:"",component:z}];let L=(()=>{class CoreCoursesMyLazyModule{}return CoreCoursesMyLazyModule.ɵmod=k.wc({type:CoreCoursesMyLazyModule}),CoreCoursesMyLazyModule.ɵinj=k.vc({factory:function CoreCoursesMyLazyModule_Factory(e){return new(e||CoreCoursesMyLazyModule)},imports:[[s.m.forChild(V),a.a,r.a,i.a],s.m]}),CoreCoursesMyLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&k.kd(L,{declarations:[z],imports:[s.m,a.a,r.a,i.a],exports:[s.m]}))}}]);