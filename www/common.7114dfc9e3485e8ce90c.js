(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"74mu":function(e,t,n){"use strict";n.d(t,"a",(function(){return createColorClasses})),n.d(t,"b",(function(){return getClassMap})),n.d(t,"c",(function(){return hostContext})),n.d(t,"d",(function(){return openURL}));const hostContext=(e,t)=>null!==t.closest(e),createColorClasses=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,getClassMap=e=>{const t={};return(e=>{if(void 0!==e)return(Array.isArray(e)?e:e.split(" ")).filter((e=>null!=e)).map((e=>e.trim())).filter((e=>""!==e));return[]})(e).forEach((e=>t[e]=!0)),t},i=/^[a-z][a-z0-9+\-.]*:/,openURL=async(e,t,n,a)=>{if(null!=e&&"#"!==e[0]&&!i.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,n,a)}return!1}},WwyG:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("L3Fv"),a=n("iCrd"),o=n("PM4H"),r=n("fXoL");let s=(()=>{class CoreUserParticipantsPageModule{}return CoreUserParticipantsPageModule.ɵmod=r.wc({type:CoreUserParticipantsPageModule}),CoreUserParticipantsPageModule.ɵinj=r.vc({factory:function CoreUserParticipantsPageModule_Factory(e){return new(e||CoreUserParticipantsPageModule)},imports:[[i.a,o.a]]}),CoreUserParticipantsPageModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.kd(s,{declarations:[a.a],imports:[i.a,o.a]}))},YyYz:function(e,t,n){"use strict";n.d(t,"a",(function(){return CoreMainMenuDeepLinkManager}));var i=n("mrSG"),a=n("vnm2"),o=n("ULAo"),r=n("GBcW"),s=n("pHTc");class CoreMainMenuDeepLinkManager{constructor(){const e=s.a.getRouteParam("urlToOpen"),t=s.a.getRouteParam("redirectPath");(e||t)&&(this.pendingRedirect={redirectPath:t,redirectOptions:s.a.getRouteParam("redirectOptions"),urlToOpen:e})}hasDeepLinkToTreat(){var e,t;return!!(null===(e=this.pendingRedirect)||void 0===e?void 0:e.urlToOpen)||!!(null===(t=this.pendingRedirect)||void 0===t?void 0:t.redirectPath)}treatLink(){this.pendingRedirect&&(this.pendingRedirect.redirectPath?this.treatPath(this.pendingRedirect.redirectPath,this.pendingRedirect.redirectOptions):this.pendingRedirect.urlToOpen&&this.treatUrlToOpen(this.pendingRedirect.urlToOpen),delete this.pendingRedirect)}treatPath(e,t={}){const n=t.params,i=e.match(/^course\/(\d+)\/?$/);i?(null==n?void 0:n.course)?o.a.openCourse(n.course,t):r.a.getAndOpenCourse(Number(i[1]),n):s.a.navigateToSitePath(e,Object.assign(Object.assign({},t),{preferCurrentTab:!1}))}treatUrlToOpen(e){var t;return Object(i.a)(this,void 0,void 0,(function*(){const n=yield a.a.getFirstValidActionFor(e);(null===(t=null==n?void 0:n.sites)||void 0===t?void 0:t[0])&&n.action(n.sites[0])}))}}},Zcj0:function(e,t,n){"use strict";n.d(t,"a",(function(){return createButtonActiveGesture}));var i=n("wEJo"),a=n("qULd"),o=n("KF81");const createButtonActiveGesture=(e,t)=>{let n,r;const activateButtonAtPoint=(e,i,a)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(e,i);if(!o||!t(o))return clearActiveButton(),void 0;o!==n&&(clearActiveButton(),setActiveButton(o,a))},setActiveButton=(e,t)=>{n=e,r||(r=n);const a=n;Object(i.f)((()=>a.classList.add("ion-activated"))),t()},clearActiveButton=(e=!1)=>{if(!n)return;const t=n;Object(i.f)((()=>t.classList.remove("ion-activated"))),e&&r!==n&&n.click(),n=void 0};return Object(o.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>activateButtonAtPoint(e.currentX,e.currentY,a.a),onMove:e=>activateButtonAtPoint(e.currentX,e.currentY,a.b),onEnd:()=>{clearActiveButton(!0),Object(a.e)(),r=void 0}})}},dQ3M:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("L3Fv"),a=n("C1x5"),o=n("EOS8"),r=n("ho2i"),s=n("rxSe"),c=n("fXoL");let l=(()=>{class CoreMainMenuComponentsModule{}return CoreMainMenuComponentsModule.ɵmod=c.wc({type:CoreMainMenuComponentsModule}),CoreMainMenuComponentsModule.ɵinj=c.vc({factory:function CoreMainMenuComponentsModule_Factory(e){return new(e||CoreMainMenuComponentsModule)},imports:[[i.a,r.a]]}),CoreMainMenuComponentsModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&c.kd(l,{declarations:[a.a,o.a,s.a],imports:[i.a,r.a],exports:[a.a,o.a,s.a]}))},h3R7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const i=e*t/n-e+"ms",a=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(a)+"px",left:9*Math.cos(a)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const i=t/n,a=e*i-e+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":a}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},iCrd:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var i=n("mrSG"),a=n("nvXB"),o=n("3LXp"),r=n("pHTc"),s=n("EoRH"),c=n("46ml"),l=n("4pns"),d=n("bFG1"),u=n("xtzZ"),g=n("baaQ"),_=n("D7J2"),b=n("j3ag"),p=n("fXoL"),h=n("nt/U"),m=n("TEn/"),f=n("9zps"),P=n("PgjG"),C=n("ofXK"),M=n("xpMl"),O=n("r8G5"),v=n("FeAf"),y=n("hMzs"),T=n("sYmb"),w=n("lAaw");function CoreUserParticipantsPage_core_empty_box_7_Template(e,t){1&e&&(p.zc(0,"core-empty-box",8),p.Pc(1,"translate")),2&e&&p.Vc("message",p.Qc(1,1,"core.user.noparticipants"))}function CoreUserParticipantsPage_core_empty_box_8_Template(e,t){1&e&&(p.zc(0,"core-empty-box",9),p.Pc(1,"translate")),2&e&&p.Vc("message",p.Qc(1,1,"core.noresults"))}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_ng_container_4_Template(e,t){if(1&e&&(p.Cc(0),p.pd(1),p.Pc(2,"coreTimeAgo"),p.Bc()),2&e){const e=p.Oc(3).$implicit;p.lc(1),p.rd("",p.Qc(2,1,e.lastcourseaccess)," ")}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_ng_container_5_Template(e,t){1&e&&(p.Cc(0),p.pd(1),p.Pc(2,"translate"),p.Bc()),2&e&&(p.lc(1),p.qd(p.Qc(2,1,"core.never")))}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_Template(e,t){if(1&e&&(p.Ec(0,"p"),p.Ec(1,"strong"),p.pd(2),p.Pc(3,"translate"),p.Dc(),p.nd(4,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_ng_container_4_Template,3,3,"ng-container",6),p.nd(5,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_ng_container_5_Template,3,3,"ng-container",6),p.Dc()),2&e){const e=p.Oc(2).$implicit;p.lc(2),p.rd("",p.Qc(3,3,"core.user.lastcourseaccess"),": "),p.lc(2),p.Vc("ngIf",e.lastcourseaccess),p.lc(1),p.Vc("ngIf",!e.lastcourseaccess)}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_ng_container_4_Template(e,t){if(1&e&&(p.Cc(0),p.pd(1),p.Pc(2,"coreTimeAgo"),p.Bc()),2&e){const e=p.Oc(3).$implicit;p.lc(1),p.qd(p.Qc(2,1,e.lastaccess))}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_ng_container_5_Template(e,t){1&e&&(p.Cc(0),p.pd(1),p.Pc(2,"translate"),p.Bc()),2&e&&(p.lc(1),p.qd(p.Qc(2,1,"core.never")))}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_Template(e,t){if(1&e&&(p.Ec(0,"p"),p.Ec(1,"strong"),p.pd(2),p.Pc(3,"translate"),p.Dc(),p.nd(4,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_ng_container_4_Template,3,3,"ng-container",6),p.nd(5,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_ng_container_5_Template,3,3,"ng-container",6),p.Dc()),2&e){const e=p.Oc(2).$implicit;p.lc(2),p.rd("",p.Qc(3,3,"core.lastaccess"),": "),p.lc(2),p.Vc("ngIf",e.lastaccess),p.lc(1),p.Vc("ngIf",!e.lastaccess)}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_Template(e,t){if(1&e&&(p.Cc(0),p.Ec(1,"p",13),p.pd(2),p.Dc(),p.nd(3,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_3_Template,6,5,"p",6),p.nd(4,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_p_4_Template,6,5,"p",6),p.Bc()),2&e){const e=p.Oc().$implicit;p.lc(2),p.qd(e.fullname),p.lc(1),p.Vc("ngIf",void 0!==e.lastcourseaccess),p.lc(1),p.Vc("ngIf",void 0===e.lastcourseaccess&&void 0!==e.lastaccess)}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_4_Template(e,t){if(1&e&&(p.Cc(0),p.Ec(1,"p",13),p.zc(2,"core-format-text",14),p.Dc(),p.Bc()),2&e){const e=p.Oc().$implicit,t=p.Oc(2);p.lc(2),p.Vc("text",e.fullname)("highlight",t.searchQuery)("filter",!1)}}function CoreUserParticipantsPage_ion_list_9_ion_item_1_Template(e,t){if(1&e){const e=p.Fc();p.Ec(0,"ion-item",11),p.Mc("click",(function CoreUserParticipantsPage_ion_list_9_ion_item_1_Template_ion_item_click_0_listener(){p.fd(e);const n=t.$implicit;return p.Oc(2).participants.select(n)})),p.zc(1,"core-user-avatar",12),p.Ec(2,"ion-label"),p.nd(3,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_3_Template,5,3,"ng-container",6),p.nd(4,CoreUserParticipantsPage_ion_list_9_ion_item_1_ng_container_4_Template,3,3,"ng-container",6),p.Dc(),p.Dc()}if(2&e){const e=t.$implicit,n=p.Oc(2);p.mc("aria-current",n.participants.getItemAriaCurrent(e))("aria-label",e.fullname),p.lc(1),p.Vc("user",e)("linkProfile",!1)("checkOnline",!0),p.lc(2),p.Vc("ngIf",!n.searchQuery),p.lc(1),p.Vc("ngIf",n.searchQuery)}}function CoreUserParticipantsPage_ion_list_9_Template(e,t){if(1&e&&(p.Ec(0,"ion-list"),p.nd(1,CoreUserParticipantsPage_ion_list_9_ion_item_1_Template,5,7,"ion-item",10),p.Dc()),2&e){const e=p.Oc();p.lc(1),p.Vc("ngForOf",e.participants.items)}}let I=(()=>{class CoreUserParticipantsPage{constructor(){this.searchQuery=null,this.searchInProgress=!1,this.searchEnabled=!1,this.fetchMoreParticipantsFailed=!1;try{this.courseId=r.a.getRequiredRouteNumberParam("courseId"),this.participants=new CoreUserParticipantsManager(g.a.getOrCreateSource(u.a,[this.courseId]),CoreUserParticipantsPage)}catch(e){return o.a.showErrorModal(e),r.a.back(),void 0}}ngOnInit(){return Object(i.a)(this,void 0,void 0,(function*(){this.searchEnabled=yield l.a.canSearchParticipantsInSite()}))}ngAfterViewInit(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.fetchInitialParticipants(),yield this.participants.start(this.splitView)}))}ionViewDidEnter(){return Object(i.a)(this,void 0,void 0,(function*(){yield this.participants.start()}))}ngOnDestroy(){this.participants.destroy()}clearSearch(){return Object(i.a)(this,void 0,void 0,(function*(){if(null===this.searchQuery)return;const e=g.a.getOrCreateSource(u.a,[this.courseId]);this.searchQuery=null,this.searchInProgress=!1,this.participants.setSource(e),yield this.fetchInitialParticipants()}))}search(e){return Object(i.a)(this,void 0,void 0,(function*(){a.a.closeKeyboard();const t=g.a.getOrCreateSource(u.a,[this.courseId,e]);this.searchInProgress=!0,this.searchQuery=e,this.participants.setSource(t),yield this.fetchInitialParticipants(),this.searchInProgress=!1}))}refreshParticipants(e){return Object(i.a)(this,void 0,void 0,(function*(){yield d.a.ignoreErrors(l.a.invalidateParticipantsList(this.courseId)),yield d.a.ignoreErrors(this.fetchParticipants(!0)),null==e||e.complete()}))}fetchMoreParticipants(e){return Object(i.a)(this,void 0,void 0,(function*(){try{yield this.fetchParticipants(!1)}catch(e){o.a.showErrorModalDefault(e,"Error loading more participants"),this.fetchMoreParticipantsFailed=!0}e()}))}fetchInitialParticipants(){return Object(i.a)(this,void 0,void 0,(function*(){try{yield this.fetchParticipants(!0)}catch(e){o.a.showErrorModalDefault(e,"Error loading participants"),this.participants.reset()}}))}fetchParticipants(e){return Object(i.a)(this,void 0,void 0,(function*(){e?yield this.participants.reload():yield this.participants.load(),this.fetchMoreParticipantsFailed=!1}))}}return CoreUserParticipantsPage.ɵfac=function CoreUserParticipantsPage_Factory(e){return new(e||CoreUserParticipantsPage)},CoreUserParticipantsPage.ɵcmp=p.sc({type:CoreUserParticipantsPage,selectors:[["page-core-user-participants"]],viewQuery:function CoreUserParticipantsPage_Query(e,t){var n;(1&e&&p.ud(c.a,!0),2&e)&&(p.dd(n=p.Nc())&&(t.splitView=n.first))},decls:11,vars:13,consts:[["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],["autocorrect","off","searchArea","CoreUserParticipants",3,"disabled","spellcheck","lengthCheck","onSubmit","onClear"],[3,"hideUntil"],["icon","far-user",3,"message",4,"ngIf"],["icon","fas-magnifying-glass",3,"message",4,"ngIf"],[4,"ngIf"],[3,"enabled","error","action"],["icon","far-user",3,"message"],["icon","fas-magnifying-glass",3,"message"],["class","ion-text-wrap","button","","detail","true",3,"click",4,"ngFor","ngForOf"],["button","","detail","true",1,"ion-text-wrap",3,"click"],["slot","start",3,"user","linkProfile","checkOnline"],[1,"item-heading"],[3,"text","highlight","filter"]],template:function CoreUserParticipantsPage_Template(e,t){1&e&&(p.Ec(0,"ion-content"),p.Ec(1,"core-split-view"),p.Ec(2,"ion-refresher",0),p.Mc("ionRefresh",(function CoreUserParticipantsPage_Template_ion_refresher_ionRefresh_2_listener(e){return t.refreshParticipants(e.target)})),p.zc(3,"ion-refresher-content",1),p.Pc(4,"translate"),p.Dc(),p.Ec(5,"core-search-box",2),p.Mc("onSubmit",(function CoreUserParticipantsPage_Template_core_search_box_onSubmit_5_listener(e){return t.search(e)}))("onClear",(function CoreUserParticipantsPage_Template_core_search_box_onClear_5_listener(){return t.clearSearch()})),p.Dc(),p.Ec(6,"core-loading",3),p.nd(7,CoreUserParticipantsPage_core_empty_box_7_Template,2,3,"core-empty-box",4),p.nd(8,CoreUserParticipantsPage_core_empty_box_8_Template,2,3,"core-empty-box",5),p.nd(9,CoreUserParticipantsPage_ion_list_9_Template,2,1,"ion-list",6),p.Ec(10,"core-infinite-loading",7),p.Mc("action",(function CoreUserParticipantsPage_Template_core_infinite_loading_action_10_listener(e){return t.fetchMoreParticipants(e)})),p.Dc(),p.Dc(),p.Dc(),p.Dc()),2&e&&(p.lc(2),p.Vc("disabled",!t.participants.loaded||t.searchInProgress),p.lc(1),p.Wc("pullingText",p.Qc(4,11,"core.pulltorefresh")),p.lc(2),p.Vc("disabled",t.searchInProgress)("spellcheck",!1)("lengthCheck",1),p.lc(1),p.Vc("hideUntil",t.participants.loaded),p.lc(1),p.Vc("ngIf",t.participants.empty&&!t.searchInProgress&&!t.searchQuery),p.lc(1),p.Vc("ngIf",t.participants.empty&&!t.searchInProgress&&t.searchQuery),p.lc(1),p.Vc("ngIf",!t.participants.empty),p.lc(1),p.Vc("enabled",t.participants.loaded&&!t.participants.completed)("error",t.fetchMoreParticipantsFailed))},directives:[h.a,m.v,c.a,m.bb,m.cb,f.a,P.a,C.t,M.a,O.a,m.P,C.s,m.I,v.a,m.O,y.a],pipes:[T.d,w.a],encapsulation:2}),CoreUserParticipantsPage})();class CoreUserParticipantsManager extends s.a{logActivity(){return Object(i.a)(this,void 0,void 0,(function*(){yield d.a.ignoreErrors(l.a.logParticipantsView(this.getSource().COURSE_ID)),_.a.logEvent({type:_.b.VIEW_ITEM_LIST,ws:"core_user_view_user_list",name:b.J.instant("core.user.participants"),data:{courseid:this.getSource().COURSE_ID,category:"user"},url:`/user/index.php?id=${this.getSource().COURSE_ID}`})}))}}},nFEd:function(e,t,n){"use strict";n.d(t,"a",(function(){return AddonModForumDiscussionsSwipeManager}));var i=n("eoiU");class AddonModForumDiscussionsSwipeManager extends i.a{skipItemInSwipe(e){return this.getSource().isNewDiscussionForm(e)}}},q3im:function(e,t,n){"use strict";n.r(t),n.d(t,"CoreGradesCourseLazyModule",(function(){return c}));var i=n("tyNb"),a=n("wxbA"),o=n("OzlW"),r=n("fXoL");const s=[{path:"",component:a.a}];let c=(()=>{class CoreGradesCourseLazyModule{}return CoreGradesCourseLazyModule.ɵmod=r.wc({type:CoreGradesCourseLazyModule}),CoreGradesCourseLazyModule.ɵinj=r.vc({factory:function CoreGradesCourseLazyModule_Factory(e){return new(e||CoreGradesCourseLazyModule)},imports:[[i.m.forChild(s),o.a]]}),CoreGradesCourseLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.kd(c,{imports:[i.m,o.a]}))},qULd:function(e,t,n){"use strict";n.d(t,"a",(function(){return hapticSelectionStart})),n.d(t,"b",(function(){return hapticSelectionChanged})),n.d(t,"c",(function(){return hapticSelection})),n.d(t,"d",(function(){return hapticImpact})),n.d(t,"e",(function(){return hapticSelectionEnd}));const i={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},hapticSelection=()=>{i.selection()},hapticSelectionStart=()=>{i.selectionStart()},hapticSelectionChanged=()=>{i.selectionChanged()},hapticSelectionEnd=()=>{i.selectionEnd()},hapticImpact=e=>{i.impact(e)}},spDm:function(e,t,n){"use strict";n.d(t,"a",(function(){return attachComponent})),n.d(t,"b",(function(){return detachComponent}));var i=n("W6o/");const attachComponent=async(e,t,n,a,o)=>{if(e)return e.attachViewToDom(t,n,o,a);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return a&&a.forEach((e=>r.classList.add(e))),o&&Object.assign(r,o),t.appendChild(r),await new Promise((e=>Object(i.c)(r,e))),r},detachComponent=(e,t)=>{if(t){if(e){return e.removeViewFromDom(t.parentElement,t)}t.remove()}return Promise.resolve()}},tVmb:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var i=n("mrSG"),a=n("fjkH"),o=n("vPQ6"),r=n("35jd"),s=n("j3ag"),c=n("bFG1"),l=n("4G9N"),d=n("pHTc"),u=n("pLZG"),g=n("tyNb"),_=n("R0Ic"),b=n("9+EE"),p=n("6s78"),h=n("3j9v"),m=n("r2Z7"),f=n("fXoL"),P=n("TEn/"),C=n("ofXK"),M=n("C1x5"),O=n("3CSS"),v=n("sYmb");const y=["mainTabs"];function CoreMainMenuPage_ion_spinner_3_Template(e,t){1&e&&(f.zc(0,"ion-spinner"),f.Pc(1,"translate")),2&e&&f.mc("aria-label",f.Qc(1,1,"core.loading"))}function CoreMainMenuPage_core_user_menu_button_4_Template(e,t){1&e&&f.zc(0,"core-user-menu-button",9),2&e&&f.Vc("alwaysShow",!0)}function CoreMainMenuPage_ion_tab_button_5_ion_badge_5_Template(e,t){if(1&e&&(f.Ec(0,"ion-badge",16),f.pd(1),f.Dc()),2&e){const e=f.Oc().$implicit;f.lc(1),f.qd(e.badge)}}const _c1=function(e){return{$a:e}};function CoreMainMenuPage_ion_tab_button_5_span_9_Template(e,t){if(1&e&&(f.Ec(0,"span",14),f.pd(1),f.Pc(2,"translate"),f.Dc()),2&e){const e=f.Oc().$implicit;f.lc(1),f.rd(" ",f.Rc(2,1,e.badgeA11yText,f.ad(4,_c1,e.badge))," ")}}function CoreMainMenuPage_ion_tab_button_5_Template(e,t){if(1&e){const e=f.Fc();f.Ec(0,"ion-tab-button",10),f.Mc("keydown",(function CoreMainMenuPage_ion_tab_button_5_Template_ion_tab_button_keydown_0_listener(n){f.fd(e);const i=t.$implicit;return f.Oc().tabAction.keyDown(i.page,n)}))("keyup",(function CoreMainMenuPage_ion_tab_button_5_Template_ion_tab_button_keyup_0_listener(n){f.fd(e);const i=t.$implicit;return f.Oc().tabAction.keyUp(i.page,n)})),f.zc(1,"ion-icon",11),f.Ec(2,"ion-label",12),f.pd(3),f.Pc(4,"translate"),f.Dc(),f.nd(5,CoreMainMenuPage_ion_tab_button_5_ion_badge_5_Template,2,1,"ion-badge",13),f.Ec(6,"span",14),f.pd(7),f.Pc(8,"translate"),f.Dc(),f.nd(9,CoreMainMenuPage_ion_tab_button_5_span_9_Template,3,6,"span",15),f.Dc()}if(2&e){const e=t.$implicit,n=f.Oc();f.nc(e.class),f.Vc("hidden",!n.loaded&&e.hide)("tab",e.page)("disabled",e.hide)("selected",e.page===n.selectedTab)("tabindex",n.selectedTab==e.page?0:-1),f.mc("aria-controls",e.id),f.lc(1),f.Vc("name",e.icon),f.lc(2),f.qd(f.Qc(4,14,e.title)),f.lc(2),f.Vc("ngIf",e.badge),f.lc(2),f.qd(f.Qc(8,16,e.title)),f.lc(2),f.Vc("ngIf",e.badge&&e.badgeA11yText)}}let T=(()=>{class CoreMainMenuPage{constructor(){this.tabs=[],this.loaded=!1,this.showTabs=!1,this.tabsPlacement="bottom",this.morePageName=o.b.MORE_PAGE_NAME,this.isMainScreen=!1,this.moreBadge=!1,this.visibility="hidden",this.selectHistory=[],this.backButtonFunction=e=>this.backButtonClicked(e),this.tabAction=new CoreMainMenuRoleTab(this),this.logger=h.a.getInstance("CoreMainMenuPage"),this.navSubscription=s.E.events.pipe(Object(u.a)((e=>e instanceof g.c))).subscribe((()=>{var e;this.isMainScreen=!(null===(e=this.mainTabs)||void 0===e?void 0:e.outlet.canGoBack()),this.updateVisibility()}))}ngOnInit(){var e;return Object(i.a)(this,void 0,void 0,(function*(){this.showTabs=!0,this.urlToOpen=d.a.getRouteParam("urlToOpen"),this.redirectPath=d.a.getRouteParam("redirectPath"),this.redirectOptions=d.a.getRouteParam("redirectOptions"),this.isMainScreen=!(null===(e=this.mainTabs)||void 0===e?void 0:e.outlet.canGoBack()),this.updateVisibility(),this.subscription=r.a.getHandlersObservable().subscribe((e=>{const t=this.allHandlers;this.allHandlers=e,this.updateHandlers(t)})),this.badgeUpdateObserver=a.b.on(o.b.MAIN_MENU_HANDLER_BADGE_UPDATED,(e=>{e.siteId==b.b.getCurrentSiteId()&&this.updateMoreBadge()})),this.resizeListener=p.a.onWindowResize((()=>{this.updateHandlers()})),document.addEventListener("ionBackButton",this.backButtonFunction),m.a.isIOS()&&(this.keyboardObserver=a.b.on(a.b.KEYBOARD_CHANGE,(e=>{0===e&&(this.updateHandlers(),setTimeout((()=>{this.updateHandlers()}),250))}))),a.b.trigger(a.b.MAIN_HOME_LOADED)}))}updateHandlers(e){return Object(i.a)(this,void 0,void 0,(function*(){if(!this.allHandlers)return;this.tabsPlacement=o.a.getTabPlacement(),this.updateVisibility();const t=this.allHandlers.filter((e=>!e.onlyInMore)).slice(0,o.a.getNumItems()),n=[];for(let e=0;e<t.length;e++){const i=t[e],a=this.tabs.find((e=>e.page==i.page));a&&(a.hide=!1),i.hide=!1,i.id=i.id||"core-mainmenu-"+c.a.getUniqueId("CoreMainMenuPage"),n.push(a||i)}this.tabs=n,this.tabs.sort(((e,t)=>(t.priority||0)-(e.priority||0))),this.updateMoreBadge();let i=[];if(e){const t=this.allHandlers;i=e.map((e=>e.page)).filter((e=>!t.some((t=>t.page===e))))}const a=d.a.getCurrentMainMenuTab();if(this.loaded=r.a.areHandlersLoaded(),this.loaded&&(!a||i.includes(a))){yield c.a.nextTick();const e=this.tabs[0]?this.tabs[0].page:this.morePageName,t=this.tabs[0]?this.tabs[0].pageParams:{};this.logger.debug(`Select first tab: ${e}.`,this.tabs),d.a.navigateToSitePath(e,{preferCurrentTab:!1,params:Object.assign({urlToOpen:this.urlToOpen,redirectPath:this.redirectPath,redirectOptions:this.redirectOptions},t)})}}))}updateMoreBadge(){if(!this.allHandlers)return;const e=this.allHandlers.filter((e=>!e.onlyInMore)).slice(0,o.a.getNumItems());this.moreBadge=this.allHandlers.some((t=>-1==e.indexOf(t)&&!!t.badge))}ngOnDestroy(){var e,t,n,i,a;null===(e=this.subscription)||void 0===e?void 0:e.unsubscribe(),null===(t=this.navSubscription)||void 0===t||t.unsubscribe(),document.removeEventListener("ionBackButton",this.backButtonFunction),null===(n=this.keyboardObserver)||void 0===n||n.off(),null===(i=this.badgeUpdateObserver)||void 0===i||i.off(),null===(a=this.resizeListener)||void 0===a||a.off()}tabChanged(e){var t;this.selectedTab=e.tab,this.firstSelectedTab=null!==(t=this.firstSelectedTab)&&void 0!==t?t:e.tab,this.selectHistory.push(e.tab)}updateVisibility(){const e="side"==this.tabsPlacement?"":this.isMainScreen?"visible":"hidden";e!==this.visibility&&(this.visibility=e,this.notifyVisibilityUpdated())}backButtonClicked(e){e.detail.register(-10,(e=>Object(i.a)(this,void 0,void 0,(function*(){var t,n;if(yield this.currentRouteIsMainMenuRoot()){if(this.selectHistory.length>1){const e=this.selectHistory[this.selectHistory.length-2];return this.selectHistory=this.selectHistory.filter((t=>this.selectedTab!=t&&e!=t)),null===(t=this.mainTabs)||void 0===t||t.select(e),void 0}if(this.firstSelectedTab&&this.selectedTab!=this.firstSelectedTab)return this.selectHistory=[],null===(n=this.mainTabs)||void 0===n||n.select(this.firstSelectedTab),void 0;e()}}))))}currentRouteIsMainMenuRoot(){return Object(i.a)(this,void 0,void 0,(function*(){return!!d.a.getCurrentRoute({routeData:{mainMenuTabRoot:d.a.getCurrentMainMenuTab()}})}))}notifyVisibilityUpdated(){return Object(i.a)(this,void 0,void 0,(function*(){yield c.a.nextTick(),yield c.a.wait(500),yield c.a.nextTick(),a.b.trigger(o.b.MAIN_MENU_VISIBILITY_UPDATED)}))}}return CoreMainMenuPage.ɵfac=function CoreMainMenuPage_Factory(e){return new(e||CoreMainMenuPage)},CoreMainMenuPage.ɵcmp=f.sc({type:CoreMainMenuPage,selectors:[["page-core-mainmenu"]],viewQuery:function CoreMainMenuPage_Query(e,t){var n;(1&e&&f.ud(y,!0),2&e)&&(f.dd(n=f.Nc())&&(t.mainTabs=n.first))},decls:13,vars:16,consts:[[3,"hidden","ionTabsDidChange"],["mainTabs",""],["slot","bottom",1,"mainmenu-tabs"],[4,"ngIf"],[3,"alwaysShow",4,"ngIf"],["layout","label-hide",3,"hidden","tab","disabled","class","selected","tabindex","keydown","keyup",4,"ngFor","ngForOf"],[1,"core-network-message",3,"hidden"],[1,"core-online-message"],[1,"core-offline-message"],[3,"alwaysShow"],["layout","label-hide",3,"hidden","tab","disabled","selected","tabindex","keydown","keyup"],["aria-hidden","true",1,"core-tab-icon",3,"name"],["aria-hidden","true"],["class","core-tab-badge","aria-hidden","true",4,"ngIf"],[1,"sr-only"],["class","sr-only",4,"ngIf"],["aria-hidden","true",1,"core-tab-badge"]],template:function CoreMainMenuPage_Template(e,t){1&e&&(f.Ec(0,"ion-tabs",0,1),f.Mc("ionTabsDidChange",(function CoreMainMenuPage_Template_ion_tabs_ionTabsDidChange_0_listener(e){return t.tabChanged(e)})),f.Ec(2,"ion-tab-bar",2),f.nd(3,CoreMainMenuPage_ion_spinner_3_Template,2,3,"ion-spinner",3),f.nd(4,CoreMainMenuPage_core_user_menu_button_4_Template,1,1,"core-user-menu-button",4),f.nd(5,CoreMainMenuPage_ion_tab_button_5_Template,10,18,"ion-tab-button",5),f.Dc(),f.Dc(),f.Ec(6,"div",6),f.Ec(7,"div",7),f.pd(8),f.Pc(9,"translate"),f.Dc(),f.Ec(10,"div",8),f.pd(11),f.Pc(12,"translate"),f.Dc(),f.Dc()),2&e&&(f.nc("placement-"+t.tabsPlacement),f.qc("tabshidden",!t.isMainScreen&&"bottom"==t.tabsPlacement),f.Vc("hidden",!t.showTabs),f.lc(2),f.Vc("@menuVisibilityAnimation",t.visibility),f.lc(1),f.Vc("ngIf",!t.loaded),f.lc(1),f.Vc("ngIf",t.loaded&&"side"==t.tabsPlacement),f.lc(1),f.Vc("ngForOf",t.tabs),f.lc(1),f.Vc("hidden",!t.showTabs),f.lc(2),f.rd(" ",f.Qc(9,12,"core.youreonline")," "),f.lc(3),f.rd(" ",f.Qc(12,14,"core.youreoffline")," "))},directives:[P.ub,P.sb,C.t,C.s,P.qb,M.a,P.tb,P.D,O.a,P.O,P.k],pipes:[v.d],styles:["[_nghost-%COMP%]{--network-margin-bottom:0px;--network-message-background:transparent;--network-message-offline:none;--network-message-online:none;--network-message-height:16px}[_nghost-%COMP%]   ion-tabs[_ngcontent-%COMP%]{--menutabbar-size:var(--bottom-tabs-size)}[_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]{--menutabbar-size:var(--side-tabs-size)}.core-offline[_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-offline   [_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-online[_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%], .core-online   [_nghost-%COMP%]   .core-network-message[_ngcontent-%COMP%]{visibility:visible;height:var(--network-message-height);line-height:var(--network-message-height);padding-bottom:calc(var(--ion-safe-area-bottom, 0px) + var(--network-message-height))}.core-online[_nghost-%COMP%], .core-online   [_nghost-%COMP%]{--network-margin-bottom:8px;--network-message-background:var(--success);--network-message-online:block}.core-offline[_nghost-%COMP%], .core-offline   [_nghost-%COMP%]{--network-margin-bottom:8px;--network-message-background:var(--danger);--network-message-offline:block}ion-tab-bar[_ngcontent-%COMP%]{height:var(--menutabbar-size)}ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button.tab-selected[_ngcontent-%COMP%]{background:var(--background-selected)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-icon[_ngcontent-%COMP%]{text-overflow:unset;overflow:visible;text-align:center;font-size:24px}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{font-size:12px;font-weight:700;border-radius:10px;padding-left:6px;padding-right:6px;line-height:14px;--background:var(--core-bottom-tabs-badge-color);--color:var(--core-bottom-tabs-badge-text-color)}ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{color:var(--core-bottom-tabs-badge-color);padding:3px 6px 2px;left:calc(50% + 6px);top:8px;min-width:12px;font-size:8px;font-weight:400;box-sizing:border-box;position:absolute;z-index:1}[dir=rtl][_nghost-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{left:unset;right:unset;right:calc(50% + 6px)}ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-icon[_ngcontent-%COMP%]{margin-bottom:var(--network-margin-bottom);transition:margin .5s ease-in-out,transform .3s ease-in-out}ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-bottom[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{top:8px}ion-tabs.placement-bottom.tabshidden[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{pointer-events:none}ion-tabs.placement-bottom.tabshidden[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{height:auto}ion-tabs.placement-side[_ngcontent-%COMP%]{flex-direction:row}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{order:-1;width:var(--menutabbar-size);height:calc(100% - var(--ion-safe-area-top) - var(--ion-safe-area-bottom));flex-direction:column;border-right:var(--border);border-top:0;justify-content:flex-start;padding-left:var(--ion-safe-area-left);padding-right:0;padding-top:var(--ion-safe-area-top);padding-bottom:var(--ion-safe-area-bottom)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]{border-right:unset;-webkit-border-end:var(--border);border-inline-end:var(--border);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:0;padding-inline-end:0}}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{left:auto;right:1px}[dir=rtl][_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], [dir=rtl][_ngcontent-%COMP%]   ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%]{left:unset;right:unset;left:1px;right:auto}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]{width:100%;min-height:var(--menutabbar-size);flex:0}ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   core-user-menu-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-badge.core-tab-badge[_ngcontent-%COMP%], ion-tabs.placement-side[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon.core-tab-badge[_ngcontent-%COMP%]{top:calc(50% - 20px)}.core-network-message[_ngcontent-%COMP%]{background:var(--network-message-background);pointer-events:none;position:absolute;bottom:0;left:0;right:0;padding-left:10px;padding-right:10px;text-align:center;color:#fff;visibility:hidden;height:0;transition:all .5s ease-in-out;opacity:.8;z-index:12;font-size:12px}.core-network-message[_ngcontent-%COMP%]   .core-online-message[_ngcontent-%COMP%]{display:var(--network-message-online)}.core-network-message[_ngcontent-%COMP%]   .core-offline-message[_ngcontent-%COMP%]{display:var(--network-message-offline)}"],data:{animation:[Object(_.k)("menuVisibilityAnimation",[Object(_.h)("hidden",Object(_.i)({height:0,visibility:"hidden",transform:"translateY(100%)"})),Object(_.h)("visible",Object(_.i)({visibility:"visible"})),Object(_.j)("visible => hidden",[Object(_.i)({transform:"translateY(0)"}),Object(_.e)("500ms ease-in-out",Object(_.i)({transform:"translateY(100%)"}))]),Object(_.j)("hidden => visible",[Object(_.i)({transform:"translateY(100%)",visibility:"visible",height:"*"}),Object(_.e)("500ms ease-in-out",Object(_.i)({transform:"translateY(0)"}))])])]}}),CoreMainMenuPage})();class CoreMainMenuRoleTab extends l.a{getSelectableTabs(){const e=this.componentInstance.tabs.filter((e=>!e.hide)).map((e=>({id:e.id||e.page,findIndex:e.page})));return e.push({id:this.componentInstance.morePageName,findIndex:this.componentInstance.morePageName}),e}isHorizontal(){return"bottom"==this.componentInstance.tabsPlacement}selectTab(e){var t;null===(t=this.componentInstance.mainTabs)||void 0===t?void 0:t.select(e)}}},xtzZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return CoreUserParticipantsSource}));var i=n("mrSG"),a=n("CvRw"),o=n("4pns");class CoreUserParticipantsSource extends a.a{constructor(e,t=null){super(),this.COURSE_ID=e,this.SEARCH_QUERY=t}static getSourceId(e,t=null){return`participants-${e}-${t=null!=t?t:"__empty__"}`}getItemPath(e){return e.id.toString()}getItemQueryParams(){return{search:this.SEARCH_QUERY}}loadPageItems(e){return Object(i.a)(this,void 0,void 0,(function*(){if(this.SEARCH_QUERY){const{participants:t,canLoadMore:n}=yield o.a.searchParticipants(this.COURSE_ID,this.SEARCH_QUERY,!0,e,o.b.PARTICIPANTS_LIST_LIMIT);return{items:t,hasMoreItems:n}}const{participants:t,canLoadMore:n}=yield o.a.getParticipants(this.COURSE_ID,e*o.b.PARTICIPANTS_LIST_LIMIT,o.b.PARTICIPANTS_LIST_LIMIT);return{items:t,hasMoreItems:n}}))}getPageLength(){return o.b.PARTICIPANTS_LIST_LIMIT}}}}]);