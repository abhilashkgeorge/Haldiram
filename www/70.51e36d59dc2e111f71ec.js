(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{AdFV:function(e,t,o){"use strict";o.r(t),o.d(t,"CoreLoginCredentialsLazyModule",(function(){return V}));var n=o("tyNb"),i=o("L3Fv"),r=o("ho2i"),s=o("mrSG"),c=o("3Pt+"),a=o("7o/Q"),l=o("D0XW");class DebounceTimeOperator{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new debounceTime_DebounceTimeSubscriber(e,this.dueTime,this.scheduler))}}class debounceTime_DebounceTimeSubscriber extends a.a{constructor(e,t,o){super(e),this.dueTime=t,this.scheduler=o,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(dispatchNext,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function dispatchNext(e){e.debouncedNext()}var g=o("nvXB"),d=o("GGba"),u=o("9+EE"),h=o("3LXp"),m=o("mv9v"),p=o("BaYo"),_=o("j3ag"),C=o("fjkH"),f=o("pHTc"),P=o("4reR"),b=o("51eS"),O=o("H8uD"),v=o("r2Z7"),M=o("fXoL"),w=o("TEn/"),L=o("nt/U"),S=o("PgjG"),k=o("ofXK"),x=o("ACYt"),E=o("uI1u"),y=o("lqoc"),T=o("sYmb");const D=["credentialsForm"];function CoreLoginCredentialsPage_img_13_Template(e,t){if(1&e&&M.zc(0,"img",17),2&e){const e=M.Oc();M.Vc("src",e.logoUrl,M.id)}}function CoreLoginCredentialsPage_img_14_Template(e,t){1&e&&M.zc(0,"img",18)}function CoreLoginCredentialsPage_core_login_exceeded_attempts_15_Template(e,t){if(1&e){const e=M.Fc();M.Ec(0,"core-login-exceeded-attempts",19),M.Pc(1,"translate"),M.Ec(2,"div",20),M.Mc("click",(function CoreLoginCredentialsPage_core_login_exceeded_attempts_15_Template_div_click_2_listener(t){M.fd(e);return M.Oc().exceededAttemptsClicked(t)})),M.Dc(),M.Dc()}if(2&e){const e=M.Oc();M.Vc("supportConfig",e.supportConfig)("supportSubject",M.Qc(1,3,"core.login.exceededloginattemptssupportsubject")),M.lc(2),M.Vc("innerHTML",e.exceededAttemptsHTML,M.gd)}}function CoreLoginCredentialsPage_ion_item_18_Template(e,t){1&e&&(M.Ec(0,"ion-item"),M.Ec(1,"ion-label",21),M.pd(2),M.Pc(3,"translate"),M.Dc(),M.zc(4,"ion-input",22),M.Pc(5,"translate"),M.Dc()),2&e&&(M.lc(2),M.qd(M.Qc(3,2,"core.login.username")),M.lc(2),M.Wc("placeholder",M.Qc(5,4,"core.login.username")))}function CoreLoginCredentialsPage_ion_item_19_Template(e,t){1&e&&(M.Ec(0,"ion-item",23),M.Ec(1,"ion-label",21),M.pd(2),M.Pc(3,"translate"),M.Dc(),M.Ec(4,"core-show-password",24),M.zc(5,"ion-input",25),M.Pc(6,"translate"),M.Dc(),M.Dc()),2&e&&(M.lc(2),M.qd(M.Qc(3,3,"core.login.password")),M.lc(3),M.Wc("placeholder",M.Qc(6,5,"core.login.password")),M.Vc("clearOnEdit",!1))}function CoreLoginCredentialsPage_ion_button_24_Template(e,t){if(1&e){const e=M.Fc();M.Ec(0,"ion-button",26),M.Mc("click",(function CoreLoginCredentialsPage_ion_button_24_Template_ion_button_click_0_listener(){M.fd(e);return M.Oc().forgottenPassword()})),M.pd(1),M.Pc(2,"translate"),M.Dc()}2&e&&(M.lc(1),M.rd(" ",M.Qc(2,1,"core.login.forgotten")," "))}function CoreLoginCredentialsPage_ion_list_25_ion_button_6_img_1_Template(e,t){if(1&e&&M.zc(0,"img",33),2&e){const e=M.Oc().$implicit;M.Vc("src",e.iconurl,M.id)}}function CoreLoginCredentialsPage_ion_list_25_ion_button_6_Template(e,t){if(1&e){const e=M.Fc();M.Ec(0,"ion-button",31),M.Mc("click",(function CoreLoginCredentialsPage_ion_list_25_ion_button_6_Template_ion_button_click_0_listener(){M.fd(e);const o=t.$implicit;return M.Oc(2).oauthClicked(o)})),M.nd(1,CoreLoginCredentialsPage_ion_list_25_ion_button_6_img_1_Template,1,1,"img",32),M.Ec(2,"ion-label"),M.pd(3),M.Dc(),M.Dc()}if(2&e){const e=t.$implicit;M.mc("aria-label",e.name),M.lc(1),M.Vc("ngIf",e.iconurl),M.lc(2),M.qd(e.name)}}function CoreLoginCredentialsPage_ion_list_25_Template(e,t){if(1&e&&(M.Ec(0,"ion-list",27),M.Ec(1,"ion-item",28),M.Ec(2,"ion-label"),M.Ec(3,"h2",29),M.pd(4),M.Pc(5,"translate"),M.Dc(),M.Dc(),M.Dc(),M.nd(6,CoreLoginCredentialsPage_ion_list_25_ion_button_6_Template,4,3,"ion-button",30),M.Dc()),2&e){const e=M.Oc();M.lc(4),M.qd(M.Qc(5,2,"core.login.potentialidps")),M.lc(2),M.Vc("ngForOf",e.identityProviders)}}let F=(()=>{class CoreLoginCredentialsPage{constructor(e){this.fb=e,this.siteChecked=!1,this.pageLoaded=!1,this.isBrowserSSO=!1,this.showForgottenPassword=!0,this.showScanQR=!1,this.loginAttempts=0,this.eventThrown=!1,this.viewLeft=!1}ngOnInit(){return Object(s.a)(this,void 0,void 0,(function*(){try{this.siteUrl=f.a.getRequiredRouteParam("siteUrl"),this.siteName=f.a.getRouteParam("siteName"),this.logoUrl=!p.a.CONFIG.forceLoginLogo&&f.a.getRouteParam("logoUrl")||void 0,this.siteConfig=f.a.getRouteParam("siteConfig"),this.urlToOpen=f.a.getRouteParam("urlToOpen"),this.supportConfig=this.siteConfig&&new O.a(this.siteConfig)}catch(e){return h.a.showErrorModal(e),f.a.back()}this.credForm=this.fb.group({username:[f.a.getRouteParam("username")||"",c.F.required],password:["",c.F.required]}),this.siteConfig&&this.treatSiteConfig();(yield m.a.isSingleFixedSite())||!this.siteConfig?this.checkSite(this.siteUrl,!0):(this.siteChecked=!0,this.pageLoaded=!0),v.a.isIOS()&&(this.valueChangeSubscription=this.credForm.valueChanges.pipe(function debounceTime(e,t=l.a){return o=>o.lift(new DebounceTimeOperator(e,t))}(1e3)).subscribe((e=>{var t,o;if(!this.formElement||!this.formElement.nativeElement)return;const n=this.formElement.nativeElement.querySelector('input[name="username"]'),i=this.formElement.nativeElement.querySelector('input[name="password"]'),r=null==n?void 0:n.value,s=null==i?void 0:i.value;void 0!==r&&r!==e.username&&(null===(t=this.credForm.get("username"))||void 0===t?void 0:t.setValue(r)),void 0!==s&&s!==e.password&&(null===(o=this.credForm.get("password"))||void 0===o||o.setValue(s))})))}))}showHelp(){b.a.showHelp(_.J.instant("core.login.credentialshelp"),_.J.instant("core.login.credentialssupportsubject"),this.supportConfig)}checkSite(e,t=!1){var o;return Object(s.a)(this,void 0,void 0,(function*(){this.pageLoaded=!1;const n=0===e.indexOf("http://")?"http://":void 0;try{const i=yield u.b.checkSite(e,n);if(this.siteChecked=!0,this.siteUrl=i.siteUrl,this.siteConfig=i.config,this.treatSiteConfig(),m.a.isSSOLoginNeeded(i.code)){if(this.isBrowserSSO=!0,this.showScanQR&&t)return;g.a.isSSOAuthenticationOngoing()||this.viewLeft||m.a.confirmAndOpenBrowserForSSOLogin(i.siteUrl,i.code,i.service,null===(o=i.config)||void 0===o?void 0:o.launchurl)}else this.isBrowserSSO=!1}catch(e){h.a.showErrorModal(e)}finally{this.pageLoaded=!0}}))}treatSiteConfig(){var e;return Object(s.a)(this,void 0,void 0,(function*(){if(this.siteConfig){this.siteName=this.siteConfig.sitename,this.logoUrl=m.a.getLogoUrl(this.siteConfig),this.authInstructions=this.siteConfig.authinstructions||_.J.instant("core.login.loginsteps"),this.showScanQR=yield m.a.displayQRInCredentialsScreen(this.siteConfig.tool_mobile_qrcodetype);const t=m.a.getDisabledFeatures(this.siteConfig);this.identityProviders=m.a.getValidIdentityProviders(this.siteConfig,t),this.canSignup="email"==this.siteConfig.registerauth&&!m.a.isEmailSignupDisabled(this.siteConfig,t),this.showForgottenPassword=!m.a.isForgottenPasswordDisabled(this.siteConfig,t),this.exceededAttemptsHTML=m.a.buildExceededAttemptsHTML(!!(null===(e=this.supportConfig)||void 0===e?void 0:e.canContactSupport()),this.showForgottenPassword),this.eventThrown||this.viewLeft||(this.eventThrown=!0,C.b.trigger(C.b.LOGIN_SITE_CHECKED,{config:this.siteConfig}))}else this.authInstructions=void 0,this.canSignup=!1,this.identityProviders=[]}))}login(e){return Object(s.a)(this,void 0,void 0,(function*(){e&&(e.preventDefault(),e.stopPropagation()),g.a.closeKeyboard();const t=this.siteUrl,o=this.credForm.value.username,n=this.credForm.value.password;if(!this.siteChecked||this.isBrowserSSO)return yield this.checkSite(t),!this.isBrowserSSO&&this.siteChecked?this.login():void 0;if(!o)return h.a.showErrorModal("core.login.usernamerequired",!0),void 0;if(!n)return h.a.showErrorModal("core.login.passwordrequired",!0),void 0;if(!d.a.isOnline())return h.a.showErrorModal("core.networkerrormsg",!0),void 0;const i=yield h.a.showModalLoading();try{const e=yield u.b.getUserToken(t,o,n),i=yield u.b.newSite(e.siteUrl,e.token,e.privateToken);this.credForm.controls.username.reset(),this.credForm.controls.password.reset(),this.siteId=i,yield f.a.navigateToSiteHome({params:{urlToOpen:this.urlToOpen}})}catch(e){m.a.treatUserTokenError(t,e,o,n),e.loggedout?f.a.navigate("/login/sites",{reset:!0}):"forcepasswordchangenotice"==e.errorcode?this.credForm.controls.password.reset():"invalidlogin"===e.errorcode&&this.loginAttempts++}finally{i.dismiss(),P.a.triggerFormSubmittedEvent(this.formElement,!0)}}))}exceededAttemptsClicked(e){e.preventDefault(),e.target instanceof HTMLAnchorElement&&this.forgottenPassword()}forgottenPassword(){m.a.forgottenPasswordClicked(this.siteUrl,this.credForm.value.username,this.siteConfig)}oauthClicked(e){var t;m.a.openBrowserForOAuthLogin(this.siteUrl,e,null===(t=this.siteConfig)||void 0===t?void 0:t.launchurl)||h.a.showErrorModal("Invalid data.")}showInstructionsAndScanQR(){return Object(s.a)(this,void 0,void 0,(function*(){try{yield m.a.showScanQRInstructions(),yield m.a.scanQR()}catch(e){}}))}openEmailSignup(){f.a.navigate("/login/emailsignup",{params:{siteUrl:this.siteUrl}})}openSettings(){f.a.navigate("/settings")}ngOnDestroy(){var e;this.viewLeft=!0,C.b.trigger(C.b.LOGIN_SITE_UNCHECKED,{config:this.siteConfig,loginSuccessful:!!this.siteId},this.siteId),null===(e=this.valueChangeSubscription)||void 0===e||e.unsubscribe()}}return CoreLoginCredentialsPage.ɵfac=function CoreLoginCredentialsPage_Factory(e){return new(e||CoreLoginCredentialsPage)(M.yc(c.f))},CoreLoginCredentialsPage.ɵcmp=M.sc({type:CoreLoginCredentialsPage,selectors:[["page-core-login-credentials"]],viewQuery:function CoreLoginCredentialsPage_Query(e,t){var o;(1&e&&M.ud(D,!0),2&e)&&(M.dd(o=M.Nc())&&(t.formElement=o.first))},decls:26,vars:19,consts:[["slot","start"],[3,"text"],[1,"ion-padding","limited-width"],[3,"hideUntil"],[1,"ion-text-wrap","ion-text-center","ion-margin-bottom"],[1,"core-login-site-logo"],["role","presentation","alt","","onError","this.src='assets/img/login_logo.png'",3,"src",4,"ngIf"],["src","assets/img/login_logo.png","role","presentation","alt","",4,"ngIf"],[3,"supportConfig","supportSubject",4,"ngIf"],[1,"core-login-form",3,"formGroup","ngSubmit"],["credentialsForm",""],[4,"ngIf"],["class","ion-margin-bottom",4,"ngIf"],["expand","block","type","submit",1,"ion-margin","core-login-login-button","ion-text-wrap",3,"disabled"],["type","submit",1,"core-submit-hidden-enter"],["expand","block","fill","clear","class","core-login-forgotten-password core-button-as-link ion-text-wrap",3,"click",4,"ngIf"],["class","ion-padding-top core-login-identity-providers",4,"ngIf"],["role","presentation","alt","","onError","this.src='assets/img/login_logo.png'",3,"src"],["src","assets/img/login_logo.png","role","presentation","alt",""],[3,"supportConfig","supportSubject"],[3,"innerHTML","click"],[1,"sr-only"],["type","text","name","username","formControlName","username","autocapitalize","none","autocorrect","off","autocomplete","username","enterkeyhint","next","required","true",3,"placeholder"],[1,"ion-margin-bottom"],["name","password"],["name","password","type","password","formControlName","password","autocomplete","current-password","enterkeyhint","go","required","true",3,"placeholder","clearOnEdit"],["expand","block","fill","clear",1,"core-login-forgotten-password","core-button-as-link","ion-text-wrap",3,"click"],[1,"ion-padding-top","core-login-identity-providers"],[1,"ion-text-wrap"],[1,"item-heading"],["fill","outline","class","ion-text-wrap ion-margin core-oauth-provider","expand","block",3,"click",4,"ngFor","ngForOf"],["fill","outline","expand","block",1,"ion-text-wrap","ion-margin","core-oauth-provider",3,"click"],["alt","","width","32","height","32","slot","start","aria-hidden","true",3,"src",4,"ngIf"],["alt","","width","32","height","32","slot","start","aria-hidden","true",3,"src"]],template:function CoreLoginCredentialsPage_Template(e,t){1&e&&(M.Ec(0,"ion-header"),M.Ec(1,"ion-toolbar"),M.Ec(2,"ion-buttons",0),M.zc(3,"ion-back-button",1),M.Pc(4,"translate"),M.Dc(),M.Ec(5,"ion-title"),M.Ec(6,"h1"),M.pd(7),M.Pc(8,"translate"),M.Dc(),M.Dc(),M.Dc(),M.Dc(),M.Ec(9,"ion-content",2),M.Ec(10,"core-loading",3),M.Ec(11,"div",4),M.Ec(12,"div",5),M.nd(13,CoreLoginCredentialsPage_img_13_Template,1,1,"img",6),M.nd(14,CoreLoginCredentialsPage_img_14_Template,1,0,"img",7),M.Dc(),M.Dc(),M.nd(15,CoreLoginCredentialsPage_core_login_exceeded_attempts_15_Template,3,5,"core-login-exceeded-attempts",8),M.Ec(16,"form",9,10),M.Mc("ngSubmit",(function CoreLoginCredentialsPage_Template_form_ngSubmit_16_listener(e){return t.login(e)})),M.nd(18,CoreLoginCredentialsPage_ion_item_18_Template,6,6,"ion-item",11),M.nd(19,CoreLoginCredentialsPage_ion_item_19_Template,7,7,"ion-item",12),M.Ec(20,"ion-button",13),M.pd(21),M.Pc(22,"translate"),M.Dc(),M.zc(23,"input",14),M.Dc(),M.nd(24,CoreLoginCredentialsPage_ion_button_24_Template,3,3,"ion-button",15),M.nd(25,CoreLoginCredentialsPage_ion_list_25_Template,7,4,"ion-list",16),M.Dc(),M.Dc()),2&e&&(M.lc(3),M.Vc("text",M.Qc(4,13,"core.back")),M.lc(4),M.qd(M.Qc(8,15,"core.login.login")),M.lc(3),M.Vc("hideUntil",t.pageLoaded),M.lc(3),M.Vc("ngIf",t.logoUrl),M.lc(1),M.Vc("ngIf",!t.logoUrl),M.lc(1),M.Vc("ngIf",t.exceededAttemptsHTML&&t.supportConfig&&t.loginAttempts>=3),M.lc(1),M.Vc("formGroup",t.credForm),M.lc(2),M.Vc("ngIf",t.siteChecked&&!t.isBrowserSSO),M.lc(1),M.Vc("ngIf",t.siteChecked&&!t.isBrowserSSO),M.lc(1),M.Vc("disabled",t.siteChecked&&!t.isBrowserSSO&&!t.credForm.valid),M.lc(1),M.rd(" ",M.Qc(22,17,"core.login.loginbutton")," "),M.lc(3),M.Vc("ngIf",t.showForgottenPassword),M.lc(1),M.Vc("ngIf",t.identityProviders&&t.identityProviders.length))},directives:[w.C,w.Ab,w.m,w.h,w.i,w.yb,L.a,w.v,S.a,k.t,c.H,c.s,c.k,x.a,w.l,E.a,w.I,w.O,w.H,w.Pb,c.r,c.i,c.C,y.a,w.P,k.s],pipes:[T.d],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.ios[_ngcontent-%COMP%]{--inner-border-width:0 0 1px 0}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   core-user-avatar.large-avatar[_ngcontent-%COMP%]{--core-avatar-size:var(--core-large-avatar-size)}html.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"]}),CoreLoginCredentialsPage})();const I=[{path:"",component:F}];let V=(()=>{class CoreLoginCredentialsLazyModule{}return CoreLoginCredentialsLazyModule.ɵmod=M.wc({type:CoreLoginCredentialsLazyModule}),CoreLoginCredentialsLazyModule.ɵinj=M.vc({factory:function CoreLoginCredentialsLazyModule_Factory(e){return new(e||CoreLoginCredentialsLazyModule)},imports:[[n.m.forChild(I),i.a,r.a],n.m]}),CoreLoginCredentialsLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&M.kd(V,{declarations:[F],imports:[n.m,i.a,r.a],exports:[n.m]}))}}]);