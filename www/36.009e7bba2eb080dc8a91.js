(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{TTDm:function(e,n,o){"use strict";o.r(n),o.d(n,"AddonMessagesConversationInfoComponent",(function(){return I})),o.d(n,"AddonMessagesConversationInfoComponentModule",(function(){return b}));var t=o("L3Fv"),s=o("mrSG"),a=o("KMk0"),i=o("3LXp"),c=o("j3ag"),r=o("fXoL"),d=o("tyNb"),l=o("TEn/"),m=o("ACYt"),f=o("3CSS"),p=o("nt/U"),u=o("PgjG"),v=o("ofXK"),_=o("xpMl"),g=o("NcPy"),M=o("hMzs"),C=o("FeAf"),h=o("sYmb");function AddonMessagesConversationInfoComponent_ion_item_15_core_format_text_7_Template(e,n){if(1&e&&r.zc(0,"core-format-text",12),2&e){const e=r.Oc(2);r.Vc("text",e.conversation.subname)("contextInstanceId",0)}}const _c0=function(e){return{$a:e}};function AddonMessagesConversationInfoComponent_ion_item_15_Template(e,n){if(1&e&&(r.Ec(0,"ion-item",9),r.Ec(1,"ion-label"),r.Ec(2,"div",10),r.zc(3,"img",11),r.Dc(),r.Ec(4,"h2"),r.zc(5,"core-format-text",12),r.Dc(),r.Ec(6,"p"),r.nd(7,AddonMessagesConversationInfoComponent_ion_item_15_core_format_text_7_Template,1,2,"core-format-text",13),r.Dc(),r.Ec(8,"p"),r.pd(9),r.Pc(10,"translate"),r.Dc(),r.Dc(),r.Dc()),2&e){const e=r.Oc();r.lc(3),r.Vc("src",e.conversation.imageurl,r.id)("alt",e.conversation.name),r.lc(2),r.Vc("text",e.conversation.name)("contextInstanceId",0),r.lc(2),r.Vc("ngIf",e.conversation.subname),r.lc(2),r.qd(r.Rc(10,6,"addon.messages.numparticipants",r.ad(9,_c0,e.conversation.membercount)))}}function AddonMessagesConversationInfoComponent_ion_item_16_ion_icon_5_Template(e,n){1&e&&(r.zc(0,"ion-icon",18),r.Pc(1,"translate")),2&e&&r.mc("aria-label",r.Qc(1,1,"addon.messages.contactblocked"))}function AddonMessagesConversationInfoComponent_ion_item_16_Template(e,n){if(1&e){const e=r.Fc();r.Ec(0,"ion-item",14),r.Mc("click",(function AddonMessagesConversationInfoComponent_ion_item_16_Template_ion_item_click_0_listener(){r.fd(e);const o=n.$implicit;return r.Oc().closeModal(o.id)})),r.zc(1,"core-user-avatar",15),r.Ec(2,"ion-label"),r.Ec(3,"p",16),r.pd(4),r.nd(5,AddonMessagesConversationInfoComponent_ion_item_16_ion_icon_5_Template,2,3,"ion-icon",17),r.Dc(),r.Dc(),r.Dc()}if(2&e){const e=n.$implicit;r.lc(1),r.Vc("user",e)("linkProfile",!1)("checkOnline",e.showonlinestatus),r.lc(3),r.rd(" ",e.fullname," "),r.lc(1),r.Vc("ngIf",e.isblocked)}}let I=(()=>{class AddonMessagesConversationInfoComponent{constructor(e){this.route=e,this.conversationId=0,this.loaded=!1,this.members=[],this.canLoadMore=!1,this.loadMoreError=!1}ngOnInit(){this.fetchData().finally((()=>{this.loaded=!0}))}fetchData(){return Object(s.a)(this,void 0,void 0,(function*(){try{const e=yield a.a.getConversation(this.conversationId,!1,!0,0,0);this.conversation=e,yield this.fetchMembers()}catch(e){i.a.showErrorModalDefault(e,"Error getting members.")}}))}fetchMembers(e){return Object(s.a)(this,void 0,void 0,(function*(){this.loadMoreError=!1;const n=e?this.members.length:0,o=yield a.a.getConversationMembers(this.conversationId,n);this.members=e?this.members.concat(o.members):o.members,this.canLoadMore=o.canLoadMore}))}loadMoreMembers(e){return Object(s.a)(this,void 0,void 0,(function*(){try{yield this.fetchMembers(!0)}catch(e){i.a.showErrorModalDefault(e,"Error getting members."),this.loadMoreError=!0}finally{e&&e()}}))}refreshData(e){return Object(s.a)(this,void 0,void 0,(function*(){const n=[];n.push(a.a.invalidateConversation(this.conversationId)),n.push(a.a.invalidateConversationMembers(this.conversationId)),yield Promise.all(n),yield this.fetchData().finally((()=>{null==e?void 0:e.complete()}))}))}closeModal(e){c.x.dismiss(e)}}return AddonMessagesConversationInfoComponent.ɵfac=function AddonMessagesConversationInfoComponent_Factory(e){return new(e||AddonMessagesConversationInfoComponent)(r.yc(d.a))},AddonMessagesConversationInfoComponent.ɵcmp=r.sc({type:AddonMessagesConversationInfoComponent,selectors:[["page-addon-messages-conversation-info"]],inputs:{conversationId:"conversationId"},decls:18,vars:15,consts:[["slot","end"],["fill","clear",3,"click"],["name","fas-xmark","slot","icon-only","aria-hidden","true"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],["class","ion-text-center",4,"ngIf"],["class","ion-text-wrap addon-messages-conversation-item","detail","true","button","",3,"click",4,"ngFor","ngForOf"],[3,"enabled","error","action"],[1,"ion-text-center"],[1,"large-avatar"],["core-external-content","","onError","this.src='assets/img/group-avatar.svg'",1,"avatar",3,"src","alt"],["contextLevel","system",3,"text","contextInstanceId"],["contextLevel","system",3,"text","contextInstanceId",4,"ngIf"],["detail","true","button","",1,"ion-text-wrap","addon-messages-conversation-item",3,"click"],["slot","start",3,"user","linkProfile","checkOnline"],[1,"item-heading"],["name","fas-user-slash",4,"ngIf"],["name","fas-user-slash"]],template:function AddonMessagesConversationInfoComponent_Template(e,n){1&e&&(r.Ec(0,"ion-header"),r.Ec(1,"ion-toolbar"),r.Ec(2,"ion-title"),r.Ec(3,"h1"),r.pd(4),r.Pc(5,"translate"),r.Dc(),r.Dc(),r.Ec(6,"ion-buttons",0),r.Ec(7,"ion-button",1),r.Mc("click",(function AddonMessagesConversationInfoComponent_Template_ion_button_click_7_listener(){return n.closeModal()})),r.Pc(8,"translate"),r.zc(9,"ion-icon",2),r.Dc(),r.Dc(),r.Dc(),r.Dc(),r.Ec(10,"ion-content"),r.Ec(11,"ion-refresher",3),r.Mc("ionRefresh",(function AddonMessagesConversationInfoComponent_Template_ion_refresher_ionRefresh_11_listener(e){return n.refreshData(e.target)})),r.zc(12,"ion-refresher-content",4),r.Pc(13,"translate"),r.Dc(),r.Ec(14,"core-loading",5),r.nd(15,AddonMessagesConversationInfoComponent_ion_item_15_Template,11,11,"ion-item",6),r.nd(16,AddonMessagesConversationInfoComponent_ion_item_16_Template,6,5,"ion-item",7),r.Ec(17,"core-infinite-loading",8),r.Mc("action",(function AddonMessagesConversationInfoComponent_Template_core_infinite_loading_action_17_listener(e){return n.loadMoreMembers(e)})),r.Dc(),r.Dc(),r.Dc()),2&e&&(r.lc(4),r.qd(r.Qc(5,9,"addon.messages.groupinfo")),r.lc(3),r.mc("aria-label",r.Qc(8,11,"core.close")),r.lc(4),r.Vc("disabled",!n.loaded),r.lc(1),r.Wc("pullingText",r.Qc(13,13,"core.pulltorefresh")),r.lc(2),r.Vc("hideUntil",n.loaded),r.lc(1),r.Vc("ngIf",n.conversation),r.lc(1),r.Vc("ngForOf",n.members),r.lc(1),r.Vc("enabled",n.canLoadMore)("error",n.loadMoreError))},directives:[l.C,l.Ab,l.yb,l.m,m.a,l.l,l.D,f.a,p.a,l.v,l.bb,l.cb,u.a,v.t,v.s,_.a,l.I,l.O,g.a,M.a,C.a],pipes:[h.d],encapsulation:2}),AddonMessagesConversationInfoComponent})(),b=(()=>{class AddonMessagesConversationInfoComponentModule{}return AddonMessagesConversationInfoComponentModule.ɵmod=r.wc({type:AddonMessagesConversationInfoComponentModule}),AddonMessagesConversationInfoComponentModule.ɵinj=r.vc({factory:function AddonMessagesConversationInfoComponentModule_Factory(e){return new(e||AddonMessagesConversationInfoComponentModule)},imports:[[t.a]]}),AddonMessagesConversationInfoComponentModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&r.kd(b,{declarations:[I],imports:[t.a]}))}}]);