(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"p+py":function(d,o,e){"use strict";e.r(o),e.d(o,"AddonModGlossaryLazyModule",(function(){return x}));var n=e("tyNb"),t=e("L3Fv"),a=e("LP+a"),s=e("ghUQ"),l=e("uQoB"),c=e("fXoL"),r=e("TEn/"),u=e("4JiN"),i=e("hMzs"),y=e("nt/U"),M=e("sYmb");let p=(()=>{class AddonModGlossaryIndexPage extends s.a{}return AddonModGlossaryIndexPage.ɵfac=function AddonModGlossaryIndexPage_Factory(d){return I(d||AddonModGlossaryIndexPage)},AddonModGlossaryIndexPage.ɵcmp=c.sc({type:AddonModGlossaryIndexPage,selectors:[["page-addon-mod-glossary-index"]],viewQuery:function AddonModGlossaryIndexPage_Query(d,o){var e;(1&d&&c.ud(l.a,!0),2&d)&&(c.dd(e=c.Nc())&&(o.activityComponent=e.first))},features:[c.ic],decls:11,vars:8,consts:[["collapsible",""],["slot","start"],[3,"text"],["contextLevel","module",3,"text","contextInstanceId","courseId"],["slot","end"],[3,"module","courseId","dataRetrieved"]],template:function AddonModGlossaryIndexPage_Template(d,o){1&d&&(c.Ec(0,"ion-header",0),c.Ec(1,"ion-toolbar"),c.Ec(2,"ion-buttons",1),c.zc(3,"ion-back-button",2),c.Pc(4,"translate"),c.Dc(),c.Ec(5,"ion-title"),c.Ec(6,"h1"),c.zc(7,"core-format-text",3),c.Dc(),c.Dc(),c.zc(8,"ion-buttons",4),c.Dc(),c.Dc(),c.Ec(9,"ion-content"),c.Ec(10,"addon-mod-glossary-index",5),c.Mc("dataRetrieved",(function AddonModGlossaryIndexPage_Template_addon_mod_glossary_index_dataRetrieved_10_listener(d){return o.updateData(d)})),c.Dc(),c.Dc()),2&d&&(c.lc(3),c.Vc("text",c.Qc(4,6,"core.back")),c.lc(4),c.Vc("text",o.title)("contextInstanceId",null==o.module?null:o.module.id)("courseId",o.courseId),c.lc(3),c.Vc("module",o.module)("courseId",o.courseId))},directives:[r.C,u.b,r.Ab,r.m,r.h,r.i,r.yb,i.a,y.a,r.v,l.a],pipes:[M.d],encapsulation:2}),AddonModGlossaryIndexPage})();const I=c.Gc(p);var m=e("vY5A"),h=e("Y+03");const A=[{path:":courseId/:cmId",component:p},{path:":courseId/:cmId/entry/:entrySlug",loadChildren:()=>e.e(5).then(e.bind(null,"BzWt")).then((d=>d.AddonModGlossaryEntryLazyModule))}],G=[{path:":courseId/:cmId",component:p,children:[{path:"entry/:entrySlug",loadChildren:()=>e.e(5).then(e.bind(null,"BzWt")).then((d=>d.AddonModGlossaryEntryLazyModule))}]}],b=[{path:":courseId/:cmId/entry/new",loadChildren:()=>e.e(7).then(e.bind(null,"ZQH4")).then((d=>d.AddonModGlossaryEditLazyModule))},{path:":courseId/:cmId/entry/:entrySlug/edit",loadChildren:()=>e.e(7).then(e.bind(null,"ZQH4")).then((d=>d.AddonModGlossaryEditLazyModule))},...Object(m.c)(A,(()=>h.a.isMobile)),...Object(m.c)(G,(()=>h.a.isTablet))];let x=(()=>{class AddonModGlossaryLazyModule{}return AddonModGlossaryLazyModule.ɵmod=c.wc({type:AddonModGlossaryLazyModule}),AddonModGlossaryLazyModule.ɵinj=c.vc({factory:function AddonModGlossaryLazyModule_Factory(d){return new(d||AddonModGlossaryLazyModule)},imports:[[n.m.forChild(b),t.a,a.a]]}),AddonModGlossaryLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&c.kd(x,{declarations:[p],imports:[n.m,t.a,a.a]}))}}]);