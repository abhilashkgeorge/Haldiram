(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{T00k:function(e,t,o){"use strict";o.r(t),o.d(t,"CoreReportBuilderLazyModule",(function(){return j}));var n=o("L3Fv"),r=o("tyNb"),i=o("fXoL"),c=o("kjnU"),a=o("TEn/"),l=o("ofXK"),p=o("hMzs"),d=o("3CSS"),s=o("sYmb");function CoreReportBuilderReportColumnComponent_p_3_Template(e,t){if(1&e&&(i.Ec(0,"p",4),i.pd(1),i.Dc()),2&e){const e=i.Oc();i.lc(1),i.rd(" ",e.header," ")}}function CoreReportBuilderReportColumnComponent_h2_4_core_format_text_1_Template(e,t){if(1&e&&i.zc(0,"core-format-text",7),2&e){const e=i.Oc(2);i.Vc("text",e.column)("contextLevel",e.source)("contextInstanceId",e.contextId)}}function CoreReportBuilderReportColumnComponent_h2_4_ng_template_2_Template(e,t){if(1&e&&i.pd(0),2&e){const e=i.Oc(2);i.qd(e.column)}}function CoreReportBuilderReportColumnComponent_h2_4_Template(e,t){if(1&e&&(i.Ec(0,"h2"),i.nd(1,CoreReportBuilderReportColumnComponent_h2_4_core_format_text_1_Template,1,3,"core-format-text",5),i.nd(2,CoreReportBuilderReportColumnComponent_h2_4_ng_template_2_Template,1,1,"ng-template",null,6,i.od),i.Dc()),2&e){const e=i.ed(3),t=i.Oc();i.lc(1),i.Vc("ngIf",t.isString(t.column))("ngIfElse",e)}}function CoreReportBuilderReportColumnComponent_ng_container_5_core_format_text_1_Template(e,t){if(1&e&&i.zc(0,"core-format-text",7),2&e){const e=i.Oc(2);i.Vc("text",e.column)("contextLevel",e.source)("contextInstanceId",e.contextId)}}function CoreReportBuilderReportColumnComponent_ng_container_5_ng_template_2_Template(e,t){if(1&e&&i.pd(0),2&e){const e=i.Oc(2);i.qd(e.column)}}function CoreReportBuilderReportColumnComponent_ng_container_5_Template(e,t){if(1&e&&(i.Cc(0),i.nd(1,CoreReportBuilderReportColumnComponent_ng_container_5_core_format_text_1_Template,1,3,"core-format-text",5),i.nd(2,CoreReportBuilderReportColumnComponent_ng_container_5_ng_template_2_Template,1,1,"ng-template",null,6,i.od),i.Bc()),2&e){const e=i.ed(3),t=i.Oc();i.lc(1),i.Vc("ngIf",t.isString(t.column))("ngIfElse",e)}}function CoreReportBuilderReportColumnComponent_ion_icon_6_Template(e,t){if(1&e&&i.zc(0,"ion-icon",8),2&e){const e=i.Oc();i.qc("expandable-status-icon-expanded",!e.isExpanded)}}let _=(()=>{class CoreReportBuilderReportColumnComponent{constructor(){this.isExpanded=!1,this.isExpandable=!1,this.showFirstTitle=!1,this.onToggleRow=new i.t,this.isString=e=>c.a.isString(e)}toggleRow(){this.onToggleRow.emit(this.rowIndex)}}return CoreReportBuilderReportColumnComponent.ɵfac=function CoreReportBuilderReportColumnComponent_Factory(e){return new(e||CoreReportBuilderReportColumnComponent)},CoreReportBuilderReportColumnComponent.ɵcmp=i.sc({type:CoreReportBuilderReportColumnComponent,selectors:[["core-report-builder-report-column"]],inputs:{isExpanded:"isExpanded",isExpandable:"isExpandable",showFirstTitle:"showFirstTitle",columnIndex:"columnIndex",rowIndex:"rowIndex",column:"column",contextId:"contextId",header:"header",source:"source"},outputs:{onToggleRow:"onToggleRow"},decls:7,vars:11,consts:[["lines","inset",1,"ion-text-wrap",3,"detail","button","click"],["class","item-heading",4,"ngIf"],[4,"ngIf"],["slot","end","aria-hidden","true","name","fas-chevron-up","class","expandable-status-icon","flip-rtl","",3,"expandable-status-icon-expanded",4,"ngIf"],[1,"item-heading"],[3,"text","contextLevel","contextInstanceId",4,"ngIf","ngIfElse"],["notText",""],[3,"text","contextLevel","contextInstanceId"],["slot","end","aria-hidden","true","name","fas-chevron-up","flip-rtl","",1,"expandable-status-icon"]],template:function CoreReportBuilderReportColumnComponent_Template(e,t){1&e&&(i.Ec(0,"ion-item",0),i.Mc("click",(function CoreReportBuilderReportColumnComponent_Template_ion_item_click_0_listener(){return t.toggleRow()})),i.Pc(1,"translate"),i.Ec(2,"ion-label"),i.nd(3,CoreReportBuilderReportColumnComponent_p_3_Template,2,1,"p",1),i.nd(4,CoreReportBuilderReportColumnComponent_h2_4_Template,4,2,"h2",2),i.nd(5,CoreReportBuilderReportColumnComponent_ng_container_5_Template,4,2,"ng-container",2),i.Dc(),i.nd(6,CoreReportBuilderReportColumnComponent_ion_icon_6_Template,1,2,"ion-icon",3),i.Dc()),2&e&&(i.Vc("detail",!1)("button",t.isExpandable),i.mc("aria-expanded",t.isExpanded)("aria-controls","core-report-builder-column-"+t.rowIndex)("aria-label",i.Qc(1,9,t.isExpanded?"core.hidecolumns":"core.showcolumns")),i.lc(3),i.Vc("ngIf",0!==t.columnIndex||0===t.columnIndex&&t.showFirstTitle),i.lc(1),i.Vc("ngIf",0===t.columnIndex),i.lc(1),i.Vc("ngIf",0!==t.columnIndex),i.lc(1),i.Vc("ngIf",t.isExpandable))},directives:[a.I,a.O,l.t,p.a,a.D,d.a],pipes:[s.d],styles:["[_nghost-%COMP%]{--rotate-expandable:rotate(180deg)}[_nghost-%COMP%]   .expandable-status-icon[_ngcontent-%COMP%]{font-size:var(--text-size);margin-left:0;margin-right:2px;transition:transform .2s ease-in-out}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   .expandable-status-icon[_ngcontent-%COMP%]{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}"]}),CoreReportBuilderReportColumnComponent})();var u=o("mrSG"),g=o("93ts"),m=o("D7J2"),C=o("pHTc"),f=o("Y+03"),R=o("9+EE"),h=o("3LXp"),b=o("bFG1"),x=o("j3ag"),B=o("8vmT"),w=o("2Vo4"),D=o("lJxs"),I=o("PgjG"),E=o("r8G5"),O=o("xpMl");function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_1_ion_card_1_core_report_builder_report_column_2_Template(e,t){if(1&e){const e=i.Fc();i.Ec(0,"core-report-builder-report-column",10),i.Mc("onToggleRow",(function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_1_ion_card_1_core_report_builder_report_column_2_Template_core_report_builder_report_column_onToggleRow_0_listener(){i.fd(e);const t=i.Oc().index;return i.Oc(4).toggleRow(t)})),i.Pc(1,"async"),i.Dc()}if(2&e){const e=t.$implicit,o=t.index,n=i.Oc(),r=n.index,c=n.$implicit,a=i.Oc(3).ngIf,l=i.Oc();i.Vc("columnIndex",o)("rowIndex",r)("isExpandable",0===o&&c.columns.length>a.cardVisibleColumns)("isExpanded",c.isExpanded)("showFirstTitle",a.cardviewShowFirstTitle)("source",i.Qc(1,9,l.source$))("contextId",a.report.details.contextid)("header",a.report.data.headers[o])("column",e)}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_1_ion_card_1_Template(e,t){if(1&e&&(i.Ec(0,"ion-card"),i.Ec(1,"ion-list",8),i.nd(2,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_1_ion_card_1_core_report_builder_report_column_2_Template,2,11,"core-report-builder-report-column",9),i.Pc(3,"slice"),i.Dc(),i.Dc()),2&e){const e=t.$implicit,o=i.Oc(3).ngIf;i.lc(2),i.Vc("ngForOf",i.Sc(3,1,e.columns,0,e.isExpanded?e.columns.length:o.cardVisibleColumns))}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_1_Template(e,t){if(1&e&&(i.Cc(0),i.nd(1,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_1_ion_card_1_Template,4,5,"ion-card",7),i.Bc()),2&e){const e=i.Oc(2).ngIf;i.lc(1),i.Vc("ngForOf",e.report.data.rows)}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_th_4_Template(e,t){if(1&e&&(i.Ec(0,"th"),i.pd(1),i.Dc()),2&e){const e=t.$implicit;i.lc(1),i.rd(" ",e," ")}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_tr_6_td_1_core_format_text_1_Template(e,t){if(1&e&&(i.zc(0,"core-format-text",13),i.Pc(1,"async")),2&e){const e=i.Oc().$implicit,t=i.Oc(4).ngIf,o=i.Oc();i.Vc("text",e)("contextLevel",i.Qc(1,3,o.source$))("contextInstanceId",t.report.details.contextid)}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_tr_6_td_1_ng_template_2_Template(e,t){if(1&e&&i.pd(0),2&e){const e=i.Oc().$implicit;i.rd(" ",e," ")}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_tr_6_td_1_Template(e,t){if(1&e&&(i.Ec(0,"td"),i.nd(1,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_tr_6_td_1_core_format_text_1_Template,2,5,"core-format-text",11),i.nd(2,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_tr_6_td_1_ng_template_2_Template,1,1,"ng-template",null,12,i.od),i.Dc()),2&e){const e=t.$implicit,o=i.ed(3),n=i.Oc(5);i.lc(1),i.Vc("ngIf",n.isString(e))("ngIfElse",o)}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_tr_6_Template(e,t){if(1&e&&(i.Ec(0,"tr"),i.nd(1,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_tr_6_td_1_Template,4,2,"td",7),i.Dc()),2&e){const e=t.$implicit;i.lc(1),i.Vc("ngForOf",e.columns)}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_Template(e,t){if(1&e&&(i.Cc(0),i.Ec(1,"table"),i.Ec(2,"thead"),i.Ec(3,"tr"),i.nd(4,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_th_4_Template,2,1,"th",7),i.Dc(),i.Dc(),i.Ec(5,"tbody"),i.nd(6,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_tr_6_Template,2,1,"tr",7),i.Dc(),i.Dc(),i.Bc()),2&e){const e=i.Oc(2).ngIf;i.lc(4),i.Vc("ngForOf",e.report.data.headers),i.lc(2),i.Vc("ngForOf",e.report.data.rows)}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_Template(e,t){if(1&e&&(i.Cc(0),i.nd(1,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_1_Template,2,1,"ng-container",0),i.nd(2,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_ng_container_2_Template,7,2,"ng-container",0),i.Bc()),2&e){const e=i.Oc(2);i.lc(1),i.Vc("ngIf",e.isCardLayout),i.lc(1),i.Vc("ngIf",!e.isCardLayout)}}function CoreReportBuilderReportDetailComponent_ng_container_0_ng_template_6_Template(e,t){1&e&&(i.Ec(0,"core-empty-box",14),i.Ec(1,"p"),i.pd(2),i.Pc(3,"translate"),i.Dc(),i.Dc()),2&e&&(i.lc(2),i.rd(" ",i.Qc(3,1,"core.course.nocontentavailable")," "))}function CoreReportBuilderReportDetailComponent_ng_container_0_core_infinite_loading_8_Template(e,t){if(1&e){const e=i.Fc();i.Ec(0,"core-infinite-loading",15),i.Mc("action",(function CoreReportBuilderReportDetailComponent_ng_container_0_core_infinite_loading_8_Template_core_infinite_loading_action_0_listener(t){i.fd(e);return i.Oc(2).fetchMoreInfo(t)})),i.Dc()}if(2&e){const e=i.Oc().ngIf;i.Vc("enabled",e.canLoadMoreRows)("error",e.errorLoadingRows)}}function CoreReportBuilderReportDetailComponent_ng_container_0_Template(e,t){if(1&e){const e=i.Fc();i.Cc(0),i.Ec(1,"core-loading",1),i.Ec(2,"ion-refresher",2),i.Mc("ionRefresh",(function CoreReportBuilderReportDetailComponent_ng_container_0_Template_ion_refresher_ionRefresh_2_listener(t){i.fd(e);return i.Oc().refreshReport(t.target)})),i.zc(3,"ion-refresher-content",3),i.Pc(4,"translate"),i.Dc(),i.nd(5,CoreReportBuilderReportDetailComponent_ng_container_0_ng_container_5_Template,3,2,"ng-container",4),i.nd(6,CoreReportBuilderReportDetailComponent_ng_container_0_ng_template_6_Template,4,3,"ng-template",null,5,i.od),i.nd(8,CoreReportBuilderReportDetailComponent_ng_container_0_core_infinite_loading_8_Template,1,2,"core-infinite-loading",6),i.Dc(),i.Bc()}if(2&e){const e=t.ngIf,o=i.ed(7),n=i.Oc();i.lc(1),i.Vc("hideUntil",e.loaded),i.lc(1),i.Vc("disabled",!e.loaded),i.lc(1),i.Wc("pullingText",i.Qc(4,6,"core.pulltorefresh")),i.lc(2),i.Vc("ngIf",(null==e.report||null==e.report.data||null==e.report.data.rows?null:e.report.data.rows.length)&&(null==e.report||null==e.report.data?null:e.report.data.headers)&&(null==e.report?null:e.report.details))("ngIfElse",o),i.lc(3),i.Vc("ngIf",!n.isBlock&&(null==e.report||null==e.report.data||null==e.report.data.rows?null:e.report.data.rows.length)&&(null==e.report||null==e.report.data?null:e.report.data.headers)&&(null==e.report?null:e.report.details))}}let y=(()=>{class CoreReportBuilderReportDetailComponent{constructor(){this.isBlock=!0,this.layout="adaptative",this.onReportLoaded=new i.t,this.state$=new w.a({report:null,loaded:!1,canLoadMoreRows:!0,errorLoadingRows:!1,cardviewShowFirstTitle:!1,cardVisibleColumns:1,page:0}),this.isString=e=>c.a.isString(e),this.source$=this.state$.pipe(Object(D.a)((e=>{var t;const o=null===(t=e.report)||void 0===t?void 0:t.details.source.split("\\"),n=null==o?void 0:o[(null==o?void 0:o.length)-1];return null!=n?n:"system"}))),this.logView=B.a.once((e=>Object(u.a)(this,void 0,void 0,(function*(){yield b.a.ignoreErrors(c.a.viewReport(this.reportId)),m.a.logEvent({type:m.b.VIEW_ITEM,ws:"core_reportbuilder_view_report",name:e.details.name,data:{id:this.reportId,category:"reportbuilder"},url:`/reportbuilder/view.php?id=${this.reportId}`})}))))}get isCardLayout(){return"card"===this.layout||f.a.isMobile&&"adaptative"===this.layout}ngOnInit(){return Object(u.a)(this,void 0,void 0,(function*(){yield this.getReport(),this.updateState({loaded:!0})}))}getReport(){var e;return Object(u.a)(this,void 0,void 0,(function*(){try{if(!this.reportId)return h.a.showErrorModal(new g.a("No report found")),C.a.back(),void 0;const{page:t}=this.state$.getValue(),o=yield c.a.loadReport(parseInt(this.reportId),t,null!==(e=this.perPage)&&void 0!==e?e:c.c);if(!o)return h.a.showErrorModal(new g.a("No report found")),C.a.back(),void 0;this.updateState({report:o,cardVisibleColumns:o.details.settingsdata.cardviewVisibleColumns,cardviewShowFirstTitle:o.details.settingsdata.cardviewShowFirstTitle}),this.logView(o),this.onReportLoaded.emit(o.details)}catch(e){const t={title:x.J.instant("core.error"),body:`\n                    <p>${x.J.instant("addon.mod_page.errorwhileloadingthepage")}</p>\n                    <p>${x.J.instant("core.course.useactivityonbrowser")}</p>\n                `,buttons:[{text:x.J.instant("core.cancel"),role:"cancel",handler:()=>Object(u.a)(this,void 0,void 0,(function*(){return yield C.a.back()}))},{text:x.J.instant("core.openinbrowser"),role:"confirm",handler:()=>Object(u.a)(this,void 0,void 0,(function*(){const e=`${R.b.getRequiredCurrentSite().getURL()}/reportbuilder/view.php?id=${this.reportId}`;yield b.a.openInBrowser(e,{showBrowserWarning:!1}),yield C.a.back()}))}]};yield h.a.showErrorModal(t)}}))}updateState(e){const t=this.state$.getValue();this.state$.next(Object.assign(Object.assign({},t),e))}refreshReport(e){return Object(u.a)(this,void 0,void 0,(function*(){yield b.a.ignoreErrors(c.a.invalidateReport()),this.updateState({page:0,canLoadMoreRows:!1}),yield b.a.ignoreErrors(this.getReport()),yield null==e?void 0:e.complete(),this.updateState({canLoadMoreRows:!0})}))}incrementPage(){const{page:e}=this.state$.getValue();this.updateState({page:e+1})}fetchMoreInfo(e){return Object(u.a)(this,void 0,void 0,(function*(){const{canLoadMoreRows:t,report:o}=this.state$.getValue();if(!t)return e(),void 0;try{this.incrementPage();const{page:t}=this.state$.getValue(),n=yield c.a.loadReport(parseInt(this.reportId),t,c.c);if(!o||!n||0===n.data.rows.length)return this.updateState({canLoadMoreRows:!1}),e(),void 0;this.updateState({report:Object.assign(Object.assign({},o),{data:Object.assign(Object.assign({},o.data),{rows:[...o.data.rows,...n.data.rows]})})})}catch(e){h.a.showErrorModalDefault(e,"Error loading more reports"),this.updateState({canLoadMoreRows:!1}),this.updateState({errorLoadingRows:!0})}e()}))}toggleRow(e){var t;const{report:o}=this.state$.getValue();(null===(t=null==o?void 0:o.data)||void 0===t?void 0:t.rows[e])&&(o.data.rows[e].isExpanded=!o.data.rows[e].isExpanded,this.updateState({report:o}))}}return CoreReportBuilderReportDetailComponent.ɵfac=function CoreReportBuilderReportDetailComponent_Factory(e){return new(e||CoreReportBuilderReportDetailComponent)},CoreReportBuilderReportDetailComponent.ɵcmp=i.sc({type:CoreReportBuilderReportDetailComponent,selectors:[["core-report-builder-report-detail"]],inputs:{reportId:"reportId",isBlock:"isBlock",perPage:"perPage",layout:"layout"},outputs:{onReportLoaded:"onReportLoaded"},decls:2,vars:3,consts:[[4,"ngIf"],[3,"hideUntil"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[4,"ngIf","ngIfElse"],["empty",""],[3,"enabled","error","action",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"],[3,"columnIndex","rowIndex","isExpandable","isExpanded","showFirstTitle","source","contextId","header","column","onToggleRow",4,"ngFor","ngForOf"],[3,"columnIndex","rowIndex","isExpandable","isExpanded","showFirstTitle","source","contextId","header","column","onToggleRow"],[3,"text","contextLevel","contextInstanceId",4,"ngIf","ngIfElse"],["notText",""],[3,"text","contextLevel","contextInstanceId"],["icon","fas-rectangle-list"],[3,"enabled","error","action"]],template:function CoreReportBuilderReportDetailComponent_Template(e,t){1&e&&(i.nd(0,CoreReportBuilderReportDetailComponent_ng_container_0_Template,9,8,"ng-container",0),i.Pc(1,"async")),2&e&&i.Vc("ngIf",i.Qc(1,1,t.state$))},directives:[l.t,I.a,a.bb,a.cb,l.s,a.n,a.P,_,p.a,E.a,O.a],pipes:[l.b,s.d,l.E],styles:["[_nghost-%COMP%]{--header-background:var(--white);--border-color:var(--stroke)}[_nghost-%COMP%]   .report-title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:98%;margin:1em auto;border-collapse:collapse;color:var(--ion-text-color);overflow-x:auto;display:block}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{display:table}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:var(--header-background)}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid var(--border-color)}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background:var(--light)}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:8px;padding-top:8px;padding-bottom:8px;text-align:start;min-width:200px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], [_nghost-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-right:unset;-webkit-padding-end:8px;padding-inline-end:8px}}[_nghost-%COMP%]   core-empty-box[_ngcontent-%COMP%]{color:var(--gray-500)}[_nghost-%COMP%]   core-empty-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-900)}"],changeDetection:0}),CoreReportBuilderReportDetailComponent})();var P=o("uYHD"),T=o("ACYt"),v=o("nt/U");function CoreReportBuilderReportSummaryComponent_ion_item_16_Template(e,t){if(1&e&&(i.Ec(0,"ion-item",14),i.Ec(1,"ion-label"),i.Ec(2,"p"),i.pd(3),i.Pc(4,"translate"),i.Dc(),i.zc(5,"core-format-text",8),i.Dc(),i.Dc()),2&e){const e=t.$implicit,o=i.Oc();i.Vc("detail",!1),i.lc(3),i.qd(i.Qc(4,4,e.title)),i.lc(2),i.Vc("text",e.text)("contextInstanceId",o.reportDetail.id)}}const _c0=function(e){return{$a:e}};let M=(()=>{class CoreReportBuilderReportSummaryComponent{ngOnInit(){const e=new P.a,t=R.b.getRequiredCurrentSite();this.reportUrl=`${t.getURL()}/reportbuilder/view.php?id=${this.reportDetail.id}`,this.reportDetailToDisplay=[{title:"core.reportbuilder.reportsource",text:this.reportDetail.sourcename},{title:"core.reportbuilder.timecreated",text:e.transform(1e3*this.reportDetail.timecreated)},{title:"addon.mod_data.timemodified",text:e.transform(1e3*this.reportDetail.timemodified)},{title:"core.reportbuilder.modifiedby",text:this.reportDetail.modifiedby.fullname}]}closeModal(){x.x.dismiss()}}return CoreReportBuilderReportSummaryComponent.ɵfac=function CoreReportBuilderReportSummaryComponent_Factory(e){return new(e||CoreReportBuilderReportSummaryComponent)},CoreReportBuilderReportSummaryComponent.ɵcmp=i.sc({type:CoreReportBuilderReportSummaryComponent,selectors:[["core-report-builder-report-summary"]],inputs:{reportDetail:"reportDetail"},decls:24,vars:16,consts:[[1,"no-title"],["slot","start"],[3,"text"],["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","fas-xmark","aria-hidden","true"],[1,"list-item-limited-width"],[1,"ion-text-wrap","course-name"],["contextLevel","report",3,"text","contextInstanceId"],["class","ion-text-wrap",3,"detail",4,"ngFor","ngForOf"],[1,"ion-no-border"],[1,"ion-text-wrap","filters-info"],["name","fas-circle-info","aria-hidden","true"],[3,"text","filter"],[1,"ion-text-wrap",3,"detail"]],template:function CoreReportBuilderReportSummaryComponent_Template(e,t){1&e&&(i.Ec(0,"ion-header",0),i.Ec(1,"ion-toolbar"),i.Ec(2,"ion-buttons",1),i.zc(3,"ion-back-button",2),i.Pc(4,"translate"),i.Dc(),i.zc(5,"ion-title"),i.Ec(6,"ion-buttons",3),i.Ec(7,"ion-button",4),i.Mc("click",(function CoreReportBuilderReportSummaryComponent_Template_ion_button_click_7_listener(){return t.closeModal()})),i.Pc(8,"translate"),i.zc(9,"ion-icon",5),i.Dc(),i.Dc(),i.Dc(),i.Dc(),i.Ec(10,"ion-content"),i.Ec(11,"div",6),i.Ec(12,"ion-item",7),i.Ec(13,"ion-label"),i.Ec(14,"h1"),i.zc(15,"core-format-text",8),i.Dc(),i.Dc(),i.Dc(),i.nd(16,CoreReportBuilderReportSummaryComponent_ion_item_16_Template,6,6,"ion-item",9),i.Dc(),i.Dc(),i.Ec(17,"ion-footer",10),i.Ec(18,"ion-item",11),i.Ec(19,"ion-label"),i.Ec(20,"p"),i.zc(21,"ion-icon",12),i.zc(22,"core-format-text",13),i.Pc(23,"translate"),i.Dc(),i.Dc(),i.Dc(),i.Dc()),2&e&&(i.lc(3),i.Vc("text",i.Qc(4,7,"core.back")),i.lc(4),i.mc("aria-label",i.Qc(8,9,"core.close")),i.lc(8),i.Vc("text",t.reportDetail.name)("contextInstanceId",t.reportDetail.id),i.lc(1),i.Vc("ngForOf",t.reportDetailToDisplay),i.lc(6),i.Vc("text",i.Rc(23,11,"core.reportbuilder.filtersapplied",i.ad(14,_c0,t.reportUrl)))("filter",!1))},directives:[a.C,a.Ab,a.m,a.h,a.i,a.yb,T.a,a.l,a.D,d.a,v.a,a.v,a.I,a.O,p.a,l.s,a.A],pipes:[s.d],styles:[".filters-info[_ngcontent-%COMP%]{padding-bottom:1rem}ion-footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:16px;color:#0f6cbf;margin-right:.3rem;vertical-align:middle}"],changeDetection:0}),CoreReportBuilderReportSummaryComponent})(),L=(()=>{class CoreReportBuilderComponentsModule{}return CoreReportBuilderComponentsModule.ɵmod=i.wc({type:CoreReportBuilderComponentsModule}),CoreReportBuilderComponentsModule.ɵinj=i.vc({factory:function CoreReportBuilderComponentsModule_Factory(e){return new(e||CoreReportBuilderComponentsModule)},imports:[[n.a]]}),CoreReportBuilderComponentsModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&i.kd(L,{declarations:[y,_,M],imports:[n.a],exports:[y,_,M]}));var V=o("EoRH"),k=o("baaQ"),S=o("CvRw");class reports_source_CoreReportBuilderReportsSource extends S.a{getItemPath(e){return e.id.toString()}loadPageItems(e){return Object(u.a)(this,void 0,void 0,(function*(){const t=yield c.a.getReports(e,this.getPageLength());return{items:t,hasMoreItems:t.length>0}}))}setItems(e,t){const o=e.slice(0);o.sort(((e,t)=>e.timemodified<t.timemodified?1:-1)),super.setItems(o,t)}getPageLength(){return c.b}}function CoreReportBuilderListPage_ion_content_9_ion_list_5_ion_item_1_Template(e,t){if(1&e){const e=i.Fc();i.Ec(0,"ion-item",10),i.Mc("click",(function CoreReportBuilderListPage_ion_content_9_ion_list_5_ion_item_1_Template_ion_item_click_0_listener(){i.fd(e);const o=t.$implicit;return i.Oc(3).reports.select(o)})),i.Ec(1,"ion-label"),i.Ec(2,"p",11),i.zc(3,"core-format-text",12),i.Dc(),i.Ec(4,"p"),i.pd(5),i.Dc(),i.Dc(),i.Dc()}if(2&e){const e=t.$implicit,o=i.Oc(3);i.Vc("detail",!0)("button",!0),i.mc("aria-current",o.reports.getItemAriaCurrent(e)),i.lc(3),i.Vc("clean",!0)("text",e.name)("filter",!1),i.lc(2),i.qd(e.sourcename)}}function CoreReportBuilderListPage_ion_content_9_ion_list_5_Template(e,t){if(1&e&&(i.Ec(0,"ion-list"),i.nd(1,CoreReportBuilderListPage_ion_content_9_ion_list_5_ion_item_1_Template,6,7,"ion-item",9),i.Dc()),2&e){const e=i.Oc(2);i.lc(1),i.Vc("ngForOf",e.reports.items)}}function CoreReportBuilderListPage_ion_content_9_ng_template_6_core_empty_box_0_Template(e,t){1&e&&(i.zc(0,"core-empty-box",14),i.Pc(1,"translate")),2&e&&i.Vc("message",i.Qc(1,1,"core.course.nocontentavailable"))}function CoreReportBuilderListPage_ion_content_9_ng_template_6_Template(e,t){if(1&e&&i.nd(0,CoreReportBuilderListPage_ion_content_9_ng_template_6_core_empty_box_0_Template,2,3,"core-empty-box",13),2&e){const e=i.Oc(2);i.Vc("ngIf",!(null!=e.reports.items&&e.reports.items.length))}}function CoreReportBuilderListPage_ion_content_9_core_infinite_loading_8_Template(e,t){if(1&e){const e=i.Fc();i.Ec(0,"core-infinite-loading",15),i.Mc("action",(function CoreReportBuilderListPage_ion_content_9_core_infinite_loading_8_Template_core_infinite_loading_action_0_listener(t){i.fd(e);return i.Oc(2).fetchMoreReports(t)})),i.Dc()}if(2&e){const e=i.Oc().ngIf,t=i.Oc();i.Vc("enabled",t.reports.loaded&&!t.reports.completed)("error",e.loadMoreError)}}function CoreReportBuilderListPage_ion_content_9_Template(e,t){if(1&e){const e=i.Fc();i.Ec(0,"ion-content"),i.Ec(1,"ion-refresher",3),i.Mc("ionRefresh",(function CoreReportBuilderListPage_ion_content_9_Template_ion_refresher_ionRefresh_1_listener(t){i.fd(e);return i.Oc().refreshReports(t.target)})),i.zc(2,"ion-refresher-content",4),i.Pc(3,"translate"),i.Dc(),i.Ec(4,"core-loading",5),i.nd(5,CoreReportBuilderListPage_ion_content_9_ion_list_5_Template,2,1,"ion-list",6),i.nd(6,CoreReportBuilderListPage_ion_content_9_ng_template_6_Template,1,1,"ng-template",null,7,i.od),i.nd(8,CoreReportBuilderListPage_ion_content_9_core_infinite_loading_8_Template,1,2,"core-infinite-loading",8),i.Dc(),i.Dc()}if(2&e){const e=t.ngIf,o=i.ed(7),n=i.Oc();i.lc(1),i.Vc("disabled",!e.loaded),i.lc(1),i.Wc("pullingText",i.Qc(3,6,"core.pulltorefresh")),i.lc(2),i.Vc("hideUntil",e.loaded),i.lc(1),i.Vc("ngIf",null==n.reports.items?null:n.reports.items.length)("ngIfElse",o),i.lc(3),i.Vc("ngIf",null==n.reports.items?null:n.reports.items.length)}}let F=(()=>{class CoreReportBuilderListPage{constructor(){this.state$=new w.a({page:1,perpage:c.b,loaded:!1,loadMoreError:!1}),this.logView=B.a.once((()=>this.performLogView()));try{const e=k.a.getOrCreateSource(reports_source_CoreReportBuilderReportsSource,[]);this.reports=new V.a(e,CoreReportBuilderListPage)}catch(e){h.a.showErrorModal(e),C.a.back()}}ngAfterViewInit(){return Object(u.a)(this,void 0,void 0,(function*(){try{yield this.fetchReports(!0),this.updateState({loaded:!0})}catch(e){h.a.showErrorModalDefault(e,"Error loading reports"),this.reports.reset()}}))}fetchReports(e){return Object(u.a)(this,void 0,void 0,(function*(){e?yield this.reports.reload():yield this.reports.load(),this.updateState({loadMoreError:!1}),this.logView()}))}updateState(e){const t=this.state$.getValue();this.state$.next(Object.assign(Object.assign({},t),e))}fetchMoreReports(e){return Object(u.a)(this,void 0,void 0,(function*(){try{yield this.fetchReports(!1)}catch(e){h.a.showErrorModalDefault(e,"Error loading more reports"),this.updateState({loadMoreError:!0})}e()}))}refreshReports(e){return Object(u.a)(this,void 0,void 0,(function*(){yield b.a.ignoreErrors(c.a.invalidateReportsList()),yield b.a.ignoreErrors(this.fetchReports(!0)),yield null==e?void 0:e.complete()}))}performLogView(){m.a.logEvent({type:m.b.VIEW_ITEM_LIST,ws:"core_reportbuilder_list_reports",name:x.J.instant("core.reportbuilder.reports"),data:{category:"reportbuilder"},url:"/reportbuilder/index.php"})}ngOnDestroy(){this.reports.destroy()}}return CoreReportBuilderListPage.ɵfac=function CoreReportBuilderListPage_Factory(e){return new(e||CoreReportBuilderListPage)},CoreReportBuilderListPage.ɵcmp=i.sc({type:CoreReportBuilderListPage,selectors:[["core-report-builder-list"]],decls:11,vars:9,consts:[["slot","start"],[3,"text"],[4,"ngIf"],["slot","fixed",3,"disabled","ionRefresh"],[3,"pullingText"],[3,"hideUntil"],[4,"ngIf","ngIfElse"],["empty",""],[3,"enabled","error","action",4,"ngIf"],["class","ion-text-wrap",3,"detail","button","click",4,"ngFor","ngForOf"],[1,"ion-text-wrap",3,"detail","button","click"],[1,"item-heading"],[3,"clean","text","filter"],["icon","fas-rectangle-list",3,"message",4,"ngIf"],["icon","fas-rectangle-list",3,"message"],[3,"enabled","error","action"]],template:function CoreReportBuilderListPage_Template(e,t){1&e&&(i.Ec(0,"ion-header"),i.Ec(1,"ion-toolbar"),i.Ec(2,"ion-buttons",0),i.zc(3,"ion-back-button",1),i.Pc(4,"translate"),i.Dc(),i.Ec(5,"ion-title"),i.Ec(6,"h1"),i.pd(7),i.Pc(8,"translate"),i.Dc(),i.Dc(),i.Dc(),i.Dc(),i.nd(9,CoreReportBuilderListPage_ion_content_9_Template,9,8,"ion-content",2),i.Pc(10,"async")),2&e&&(i.lc(3),i.Vc("text",i.Qc(4,3,"core.back")),i.lc(4),i.qd(i.Qc(8,5,"core.reportbuilder.reports")),i.lc(2),i.Vc("ngIf",i.Qc(10,7,t.state$)))},directives:[a.C,a.Ab,a.m,a.h,a.i,a.yb,l.t,v.a,a.v,a.bb,a.cb,I.a,a.P,l.s,a.I,a.O,p.a,E.a,O.a],pipes:[s.d,l.b],encapsulation:2,changeDetection:0}),CoreReportBuilderListPage})();function CoreReportBuilderReportPage_ion_title_9_Template(e,t){if(1&e&&(i.Ec(0,"ion-title"),i.Ec(1,"h1"),i.zc(2,"core-format-text",7),i.Dc(),i.Ec(3,"p",8),i.pd(4),i.Dc(),i.Dc()),2&e){const e=i.Oc();i.lc(2),i.Vc("clean",!0)("text",e.reportDetail.name)("filter",!1),i.lc(2),i.rd(" ",e.reportDetail.sourcename," ")}}let $=(()=>{class CoreReportBuilderReportPage{ngOnInit(){this.reportId=C.a.getRequiredRouteParam("id")}loadReportDetail(e){this.reportDetail=e}openInfo(){h.a.openSideModal({component:M,componentProps:{reportDetail:this.reportDetail}})}}return CoreReportBuilderReportPage.ɵfac=function CoreReportBuilderReportPage_Factory(e){return new(e||CoreReportBuilderReportPage)},CoreReportBuilderReportPage.ɵcmp=i.sc({type:CoreReportBuilderReportPage,selectors:[["core-report-builder-report"]],decls:12,vars:9,consts:[["slot","start"],[3,"text"],["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","fas-circle-info","aria-hidden","true"],[4,"ngIf"],[3,"isBlock","reportId","onReportLoaded"],[3,"clean","text","filter"],[1,"subheading"]],template:function CoreReportBuilderReportPage_Template(e,t){1&e&&(i.Ec(0,"ion-header"),i.Ec(1,"ion-toolbar"),i.Ec(2,"ion-buttons",0),i.zc(3,"ion-back-button",1),i.Pc(4,"translate"),i.Dc(),i.Ec(5,"ion-buttons",2),i.Ec(6,"ion-button",3),i.Mc("click",(function CoreReportBuilderReportPage_Template_ion_button_click_6_listener(){return t.openInfo()})),i.Pc(7,"translate"),i.zc(8,"ion-icon",4),i.Dc(),i.Dc(),i.nd(9,CoreReportBuilderReportPage_ion_title_9_Template,5,4,"ion-title",5),i.Dc(),i.Dc(),i.Ec(10,"ion-content"),i.Ec(11,"core-report-builder-report-detail",6),i.Mc("onReportLoaded",(function CoreReportBuilderReportPage_Template_core_report_builder_report_detail_onReportLoaded_11_listener(e){return t.loadReportDetail(e)})),i.Dc(),i.Dc()),2&e&&(i.lc(3),i.Vc("text",i.Qc(4,5,"core.back")),i.lc(3),i.mc("aria-label",i.Qc(7,7,"core.close")),i.lc(3),i.Vc("ngIf",t.reportDetail),i.lc(2),i.Vc("isBlock",!1)("reportId",t.reportId))},directives:[a.C,a.Ab,a.m,a.h,a.i,T.a,a.l,a.D,d.a,l.t,v.a,a.v,y,a.yb,p.a],pipes:[s.d],encapsulation:2}),CoreReportBuilderReportPage})();const z=[{path:"",component:F},{path:":id",component:$}];let j=(()=>{class CoreReportBuilderLazyModule{}return CoreReportBuilderLazyModule.ɵmod=i.wc({type:CoreReportBuilderLazyModule}),CoreReportBuilderLazyModule.ɵinj=i.vc({factory:function CoreReportBuilderLazyModule_Factory(e){return new(e||CoreReportBuilderLazyModule)},imports:[[n.a,L,r.m.forChild(z)]]}),CoreReportBuilderLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&i.kd(j,{declarations:[F,$],imports:[n.a,L,r.m]}))}}]);