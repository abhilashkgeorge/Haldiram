(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{gviW:function(e,n,o){"use strict";o.r(n),o.d(n,"CoreLoginReconnectLazyModule",(function(){return U}));var t=o("tyNb"),i=o("L3Fv"),c=o("ho2i"),r=o("mrSG"),s=o("3Pt+"),a=o("nvXB"),l=o("GGba"),g=o("9+EE"),d=o("3LXp"),_=o("bFG1"),u=o("mv9v"),p=o("fjkH"),m=o("93ts"),f=o("pHTc"),h=o("4reR"),C=o("51eS"),P=o("7mgC"),O=o("j3ag"),b=o("fXoL"),w=o("TEn/"),M=o("nt/U"),v=o("PgjG"),L=o("ofXK"),k=o("FeAf"),R=o("3CSS"),y=o("uI1u"),E=o("ACYt"),T=o("R5ZM"),x=o("lqoc"),S=o("sYmb");const I=["reconnectForm"];function CoreLoginReconnectPage_core_user_avatar_14_Template(e,n){if(1&e&&b.zc(0,"core-user-avatar",14),2&e){const e=b.Oc();b.Vc("user",e.siteInfo)("linkProfile",!1)("siteId",e.siteId)}}function CoreLoginReconnectPage_div_15_img_1_Template(e,n){if(1&e&&b.zc(0,"img",18),2&e){const e=b.Oc(2);b.Vc("src",e.logoUrl,b.id)}}function CoreLoginReconnectPage_div_15_img_2_Template(e,n){1&e&&b.zc(0,"img",19)}function CoreLoginReconnectPage_div_15_Template(e,n){if(1&e&&(b.Ec(0,"div",15),b.nd(1,CoreLoginReconnectPage_div_15_img_1_Template,1,1,"img",16),b.nd(2,CoreLoginReconnectPage_div_15_img_2_Template,1,0,"img",17),b.Dc()),2&e){const e=b.Oc();b.lc(1),b.Vc("ngIf",e.logoUrl),b.lc(1),b.Vc("ngIf",!e.logoUrl)}}function CoreLoginReconnectPage_ion_card_16_Template(e,n){1&e&&(b.Ec(0,"ion-card",20),b.Ec(1,"ion-item"),b.zc(2,"ion-icon",21),b.Ec(3,"ion-label"),b.Ec(4,"p"),b.pd(5),b.Pc(6,"translate"),b.Dc(),b.Dc(),b.Dc(),b.Dc()),2&e&&(b.lc(5),b.qd(b.Qc(6,1,"core.lostconnection")))}function CoreLoginReconnectPage_core_login_exceeded_attempts_17_Template(e,n){if(1&e){const e=b.Fc();b.Ec(0,"core-login-exceeded-attempts",22),b.Pc(1,"translate"),b.Ec(2,"div",23),b.Mc("click",(function CoreLoginReconnectPage_core_login_exceeded_attempts_17_Template_div_click_2_listener(n){b.fd(e);return b.Oc().exceededAttemptsClicked(n)})),b.Dc(),b.Dc()}if(2&e){const e=b.Oc();b.Vc("supportConfig",e.supportConfig)("supportSubject",b.Qc(1,3,"core.login.exceededloginattemptssupportsubject")),b.lc(2),b.Vc("innerHTML",e.exceededAttemptsHTML,b.gd)}}function CoreLoginReconnectPage_form_18_ion_item_6_Template(e,n){1&e&&(b.Ec(0,"ion-item",33),b.Ec(1,"ion-label",34),b.pd(2),b.Pc(3,"translate"),b.Dc(),b.Ec(4,"core-show-password",35),b.zc(5,"ion-input",36),b.Pc(6,"translate"),b.Dc(),b.Dc()),2&e&&(b.lc(2),b.qd(b.Qc(3,3,"core.login.password")),b.lc(3),b.Wc("placeholder",b.Qc(6,5,"core.login.password")),b.Vc("clearOnEdit",!1))}function CoreLoginReconnectPage_form_18_ion_button_8_Template(e,n){if(1&e&&(b.Ec(0,"ion-button",37),b.pd(1),b.Pc(2,"translate"),b.Dc()),2&e){const e=b.Oc(2);b.Vc("disabled",!e.credForm.valid),b.lc(1),b.rd(" ",b.Qc(2,2,"core.login.loginbutton")," ")}}function CoreLoginReconnectPage_form_18_ion_button_12_Template(e,n){if(1&e){const e=b.Fc();b.Ec(0,"ion-button",38),b.Mc("click",(function CoreLoginReconnectPage_form_18_ion_button_12_Template_ion_button_click_0_listener(){b.fd(e);return b.Oc(2).openBrowserSSO()})),b.pd(1),b.Pc(2,"translate"),b.Dc()}2&e&&(b.lc(1),b.rd(" ",b.Qc(2,1,"core.login.loginbutton")," "))}function CoreLoginReconnectPage_form_18_ion_button_13_Template(e,n){if(1&e){const e=b.Fc();b.Ec(0,"ion-button",39),b.Mc("click",(function CoreLoginReconnectPage_form_18_ion_button_13_Template_ion_button_click_0_listener(){b.fd(e);return b.Oc(2).forgottenPassword()})),b.pd(1),b.Pc(2,"translate"),b.Dc()}2&e&&(b.lc(1),b.rd(" ",b.Qc(2,1,"core.login.forgotten")," "))}function CoreLoginReconnectPage_form_18_Template(e,n){if(1&e){const e=b.Fc();b.Ec(0,"form",24,25),b.Mc("ngSubmit",(function CoreLoginReconnectPage_form_18_Template_form_ngSubmit_0_listener(n){b.fd(e);return b.Oc().login(n)})),b.Ec(2,"ion-item",26),b.Ec(3,"ion-label"),b.Ec(4,"p"),b.pd(5),b.Dc(),b.Dc(),b.Dc(),b.nd(6,CoreLoginReconnectPage_form_18_ion_item_6_Template,7,7,"ion-item",27),b.Ec(7,"div",28),b.nd(8,CoreLoginReconnectPage_form_18_ion_button_8_Template,3,4,"ion-button",29),b.Ec(9,"ion-button",30),b.Mc("click",(function CoreLoginReconnectPage_form_18_Template_ion_button_click_9_listener(n){b.fd(e);return b.Oc().cancel(n)})),b.pd(10),b.Pc(11,"translate"),b.Dc(),b.Dc(),b.nd(12,CoreLoginReconnectPage_form_18_ion_button_12_Template,3,3,"ion-button",31),b.nd(13,CoreLoginReconnectPage_form_18_ion_button_13_Template,3,3,"ion-button",32),b.zc(14,"core-login-methods"),b.Dc()}if(2&e){const e=b.Oc();b.Vc("formGroup",e.credForm),b.lc(5),b.qd(e.username),b.lc(1),b.Vc("ngIf",!e.isBrowserSSO),b.lc(2),b.Vc("ngIf",!e.isBrowserSSO),b.lc(2),b.rd(" ",b.Qc(11,7,"core.login.cancel")," "),b.lc(2),b.Vc("ngIf",e.isBrowserSSO),b.lc(1),b.Vc("ngIf",e.showForgottenPassword&&!e.isOAuth)}}function CoreLoginReconnectPage_ion_list_19_ion_button_6_img_1_Template(e,n){if(1&e&&b.zc(0,"img",46),2&e){const e=b.Oc().$implicit;b.Vc("src",e.iconurl,b.id)}}function CoreLoginReconnectPage_ion_list_19_ion_button_6_Template(e,n){if(1&e){const e=b.Fc();b.Ec(0,"ion-button",44),b.Mc("click",(function CoreLoginReconnectPage_ion_list_19_ion_button_6_Template_ion_button_click_0_listener(){b.fd(e);const o=n.$implicit;return b.Oc(2).oauthClicked(o)})),b.nd(1,CoreLoginReconnectPage_ion_list_19_ion_button_6_img_1_Template,1,1,"img",45),b.Ec(2,"ion-label"),b.pd(3),b.Dc(),b.Dc()}if(2&e){const e=n.$implicit;b.Vc("fill","outline"),b.mc("aria-label",e.name),b.lc(1),b.Vc("ngIf",e.iconurl),b.lc(2),b.qd(e.name)}}function CoreLoginReconnectPage_ion_list_19_Template(e,n){if(1&e&&(b.Ec(0,"ion-list",40),b.Ec(1,"ion-item",41),b.Ec(2,"ion-label"),b.Ec(3,"h2",42),b.pd(4),b.Pc(5,"translate"),b.Dc(),b.Dc(),b.Dc(),b.nd(6,CoreLoginReconnectPage_ion_list_19_ion_button_6_Template,4,4,"ion-button",43),b.Dc()),2&e){const e=b.Oc();b.lc(4),b.qd(b.Qc(5,2,"core.login.potentialidps")),b.lc(2),b.Vc("ngForOf",e.identityProviders)}}function CoreLoginReconnectPage_ion_list_20_Template(e,n){if(1&e){const e=b.Fc();b.Ec(0,"ion-list"),b.Ec(1,"ion-button",47),b.Mc("click",(function CoreLoginReconnectPage_ion_list_20_Template_ion_button_click_1_listener(n){b.fd(e);return b.Oc().cancel(n)})),b.pd(2),b.Pc(3,"translate"),b.Dc(),b.Dc()}2&e&&(b.lc(2),b.rd(" ",b.Qc(3,1,"core.login.cancel")," "))}const _c1=function(e){return{"item-avatar-center":e}};let D=(()=>{class CoreLoginReconnectPage{constructor(e){this.fb=e,this.showForgottenPassword=!0,this.showUserAvatar=!1,this.isBrowserSSO=!1,this.isOAuth=!1,this.showScanQR=!1,this.showLoading=!0,this.reconnectAttempts=0,this.viewLeft=!1,this.eventThrown=!1,this.loginSuccessful=!1;const n=g.b.getCurrentSite();this.isLoggedOut=!n||n.isLoggedOut(),this.credForm=e.group({password:["",s.F.required]})}ngOnInit(){return Object(r.a)(this,void 0,void 0,(function*(){try{this.siteId=f.a.getRequiredRouteParam("siteId");const e=f.a.getRouteParam("redirectPath"),n=f.a.getRouteParam("urlToOpen");(e||n)&&(this.redirectData={redirectPath:e,redirectOptions:f.a.getRouteParam("redirectOptions"),urlToOpen:n});const o=yield g.b.getSite(this.siteId);if(!o.infos)throw new m.a("Invalid site");this.siteUrl=o.getURL(),this.siteInfo={id:this.siteId,siteUrl:this.siteUrl,siteUrlWithoutProtocol:this.siteUrl.replace(/^https?:\/\//,"").toLowerCase(),fullname:o.infos.fullname,firstname:o.infos.firstname,lastname:o.infos.lastname,siteName:yield o.getSiteName(),userpictureurl:o.infos.userpictureurl,loggedOut:!0},this.username=o.infos.username,this.supportConfig=new P.a(o),this.isOAuth=o.isOAuth();const t=yield u.a.getAvailableSites();this.showUserAvatar=!t.length,this.checkSiteConfig(o),this.showLoading=!1}catch(e){return d.a.showErrorModal(e),this.cancel()}}))}ngOnDestroy(){this.viewLeft=!0,p.b.trigger(p.b.LOGIN_SITE_UNCHECKED,{config:this.siteConfig,loginSuccessful:this.loginSuccessful},this.siteId)}showHelp(){C.a.showHelp(O.J.instant("core.login.reconnecthelp"),O.J.instant("core.login.reconnectsupportsubject"),this.supportConfig)}checkSiteConfig(e){var n;return Object(r.a)(this,void 0,void 0,(function*(){if(this.siteConfig=yield _.a.ignoreErrors(e.getPublicConfig({readingStrategy:3})),!this.siteConfig)return;const o=u.a.getDisabledFeatures(this.siteConfig);this.identityProviders=u.a.getValidIdentityProviders(this.siteConfig,o),this.showForgottenPassword=!u.a.isForgottenPasswordDisabled(this.siteConfig),this.exceededAttemptsHTML=u.a.buildExceededAttemptsHTML(!!(null===(n=this.supportConfig)||void 0===n?void 0:n.canContactSupport()),this.showForgottenPassword),this.eventThrown||this.viewLeft||(this.eventThrown=!0,p.b.trigger(p.b.LOGIN_SITE_CHECKED,{config:this.siteConfig})),this.isBrowserSSO=!this.isOAuth&&u.a.isSSOLoginNeeded(this.siteConfig.typeoflogin),this.showScanQR=u.a.displayQRInSiteScreen(),this.showScanQR||(this.showScanQR=yield u.a.displayQRInCredentialsScreen(this.siteConfig.tool_mobile_qrcodetype)),yield g.b.checkApplication(this.siteConfig),this.logoUrl=u.a.getLogoUrl(this.siteConfig)}))}cancel(e){e&&(e.preventDefault(),e.stopPropagation()),this.isLoggedOut&&f.a.navigate("/login/sites",{reset:!0}),g.b.logout()}login(e){return Object(r.a)(this,void 0,void 0,(function*(){e.preventDefault(),e.stopPropagation(),a.a.closeKeyboard();const n=this.credForm.value.password;if(!n)return d.a.showErrorModal("core.login.passwordrequired",!0),void 0;if(!l.a.isOnline())return d.a.showErrorModal("core.networkerrormsg",!0),void 0;const o=yield d.a.showModalLoading();try{const e=yield g.b.getUserToken(this.siteUrl,this.username,n);yield g.b.updateSiteToken(this.siteUrl,this.username,e.token,e.privateToken),h.a.triggerFormSubmittedEvent(this.formElement,!0),yield g.b.updateSiteInfoByUrl(this.siteUrl,this.username),this.credForm.controls.password.reset(),this.loginSuccessful=!0,yield f.a.navigateToSiteHome({params:this.redirectData})}catch(e){u.a.treatUserTokenError(this.siteUrl,e,this.username,n),e.loggedout?this.cancel():"forcepasswordchangenotice"==e.errorcode?this.credForm.controls.password.reset():"invalidlogin"==e.errorcode&&this.reconnectAttempts++}finally{o.dismiss()}}))}exceededAttemptsClicked(e){e.preventDefault(),e.target instanceof HTMLAnchorElement&&this.forgottenPassword()}forgottenPassword(){u.a.forgottenPasswordClicked(this.siteUrl,this.username,this.siteConfig)}openBrowserSSO(){this.siteConfig&&u.a.confirmAndOpenBrowserForSSOLogin(this.siteUrl,this.siteConfig.typeoflogin,void 0,this.siteConfig.launchurl,this.redirectData)}oauthClicked(e){var n;u.a.openBrowserForOAuthLogin(this.siteUrl,e,null===(n=this.siteConfig)||void 0===n?void 0:n.launchurl,this.redirectData)||d.a.showErrorModal("Invalid data.")}showInstructionsAndScanQR(){return Object(r.a)(this,void 0,void 0,(function*(){try{yield u.a.showScanQRInstructions(),yield u.a.scanQR()}catch(e){}}))}keyDown(e){"Escape"===e.key&&(e.preventDefault(),e.stopPropagation())}keyUp(e){"Escape"===e.key&&this.cancel(e)}}return CoreLoginReconnectPage.ɵfac=function CoreLoginReconnectPage_Factory(e){return new(e||CoreLoginReconnectPage)(b.yc(s.f))},CoreLoginReconnectPage.ɵcmp=b.sc({type:CoreLoginReconnectPage,selectors:[["page-core-login-reconnect"]],viewQuery:function CoreLoginReconnectPage_Query(e,n){var o;(1&e&&b.ud(I,!0),2&e)&&(b.dd(o=b.Nc())&&(n.formElement=o.first))},decls:21,vars:17,consts:[["slot","start"],[3,"text"],["slot","end"],[1,"ion-padding",3,"keydown","keyup"],[3,"hideUntil"],[1,"list-item-limited-width"],[1,"ion-text-wrap","ion-text-center","ion-margin-bottom",3,"ngClass"],["class","large-avatar",3,"user","linkProfile","siteId",4,"ngIf"],["class","core-login-site-logo",4,"ngIf"],["class","core-danger-card core-login-reconnect-warning",4,"ngIf"],[3,"supportConfig","supportSubject",4,"ngIf"],["class","core-login-form",3,"formGroup","ngSubmit",4,"ngIf"],["class","ion-padding-top core-login-identity-providers",4,"ngIf"],[4,"ngIf"],[1,"large-avatar",3,"user","linkProfile","siteId"],[1,"core-login-site-logo"],["role","presentation","onError","this.src='assets/img/login_logo.png'","alt","",3,"src",4,"ngIf"],["src","assets/img/login_logo.png","role","presentation","alt","",4,"ngIf"],["role","presentation","onError","this.src='assets/img/login_logo.png'","alt","",3,"src"],["src","assets/img/login_logo.png","role","presentation","alt",""],[1,"core-danger-card","core-login-reconnect-warning"],["name","fas-circle-exclamation","slot","start","aria-hidden","true"],[3,"supportConfig","supportSubject"],[3,"innerHTML","click"],[1,"core-login-form",3,"formGroup","ngSubmit"],["reconnectForm",""],[1,"ion-text-wrap","core-username","item-interactive"],["class","ion-margin-bottom",4,"ngIf"],[1,"adaptable-buttons-row-reverse"],["type","submit","expand","block","class","ion-margin core-login-login-button ion-text-wrap",3,"disabled",4,"ngIf"],["expand","block","fill","outline",1,"ion-margin","ion-text-wrap",3,"click"],["expand","block","class","ion-margin core-login-login-button ion-text-wrap",3,"click",4,"ngIf"],["expand","block","fill","clear","class","core-login-forgotten-password core-button-as-link ion-text-wrap",3,"click",4,"ngIf"],[1,"ion-margin-bottom"],[1,"sr-only"],["name","password"],["name","password","type","password","formControlName","password","autocomplete","current-password","enterkeyhint","go","required","true",1,"core-ioninput-password",3,"placeholder","clearOnEdit"],["type","submit","expand","block",1,"ion-margin","core-login-login-button","ion-text-wrap",3,"disabled"],["expand","block",1,"ion-margin","core-login-login-button","ion-text-wrap",3,"click"],["expand","block","fill","clear",1,"core-login-forgotten-password","core-button-as-link","ion-text-wrap",3,"click"],[1,"ion-padding-top","core-login-identity-providers"],[1,"ion-text-wrap"],[1,"item-heading"],["class","ion-text-wrap ion-margin core-oauth-provider","expand","block",3,"fill","click",4,"ngFor","ngForOf"],["expand","block",1,"ion-text-wrap","ion-margin","core-oauth-provider",3,"fill","click"],["alt","","width","32","height","32","slot","start","aria-hidden","true",3,"src",4,"ngIf"],["alt","","width","32","height","32","slot","start","aria-hidden","true",3,"src"],["expand","block","fill","outline",1,"ion-margin",3,"click"]],template:function CoreLoginReconnectPage_Template(e,n){1&e&&(b.Ec(0,"ion-header"),b.Ec(1,"ion-toolbar"),b.Ec(2,"ion-buttons",0),b.zc(3,"ion-back-button",1),b.Pc(4,"translate"),b.Dc(),b.Ec(5,"ion-title"),b.Ec(6,"h1"),b.pd(7),b.Pc(8,"translate"),b.Dc(),b.Dc(),b.zc(9,"ion-buttons",2),b.Dc(),b.Dc(),b.Ec(10,"ion-content",3),b.Mc("keydown",(function CoreLoginReconnectPage_Template_ion_content_keydown_10_listener(e){return n.keyDown(e)}))("keyup",(function CoreLoginReconnectPage_Template_ion_content_keyup_10_listener(e){return n.keyUp(e)})),b.Ec(11,"core-loading",4),b.Ec(12,"div",5),b.Ec(13,"div",6),b.nd(14,CoreLoginReconnectPage_core_user_avatar_14_Template,1,3,"core-user-avatar",7),b.nd(15,CoreLoginReconnectPage_div_15_Template,3,2,"div",8),b.nd(16,CoreLoginReconnectPage_ion_card_16_Template,7,3,"ion-card",9),b.nd(17,CoreLoginReconnectPage_core_login_exceeded_attempts_17_Template,3,5,"core-login-exceeded-attempts",10),b.Dc(),b.nd(18,CoreLoginReconnectPage_form_18_Template,15,9,"form",11),b.nd(19,CoreLoginReconnectPage_ion_list_19_Template,7,4,"ion-list",12),b.nd(20,CoreLoginReconnectPage_ion_list_20_Template,4,3,"ion-list",13),b.Dc(),b.Dc(),b.Dc()),2&e&&(b.lc(3),b.Vc("text",b.Qc(4,11,"core.back")),b.lc(4),b.qd(b.Qc(8,13,"core.login.reconnect")),b.lc(4),b.Vc("hideUntil",!n.showLoading),b.lc(2),b.Vc("ngClass",b.ad(15,_c1,n.showUserAvatar)),b.lc(1),b.Vc("ngIf",n.showUserAvatar),b.lc(1),b.Vc("ngIf",!n.showUserAvatar),b.lc(1),b.Vc("ngIf",!n.isLoggedOut),b.lc(1),b.Vc("ngIf",n.exceededAttemptsHTML&&n.supportConfig&&n.reconnectAttempts>=3),b.lc(1),b.Vc("ngIf",!n.isOAuth),b.lc(1),b.Vc("ngIf",null==n.identityProviders?null:n.identityProviders.length),b.lc(1),b.Vc("ngIf",n.isOAuth))},directives:[w.C,w.Ab,w.m,w.h,w.i,w.yb,M.a,w.v,v.a,L.q,L.t,k.a,w.n,w.I,w.D,R.a,w.O,y.a,s.H,s.s,s.k,E.a,w.l,T.a,x.a,w.H,w.Pb,s.r,s.i,s.C,w.P,L.s],pipes:[S.d],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--background:var(--core-login-background);--ion-item-background:var(--core-login-background)}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-list[_ngcontent-%COMP%]{--color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .core-oauth-icon[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]{--color:var(--core-login-text-color);-webkit-text-decoration-color:var(--core-login-text-color);text-decoration-color:var(--core-login-text-color)}[_nghost-%COMP%]   ion-button.core-button-as-link[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--core-login-text-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item.item-input[_ngcontent-%COMP%]{margin-bottom:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.ios[_ngcontent-%COMP%]{--inner-border-width:0 0 1px 0}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--background:var(--core-login-input-background);--color:var(--core-login-input-color)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .core-username.item.md[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:unset;-webkit-padding-start:8px;padding-inline-start:8px}}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%] + .core-siteurl[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .core-sitename[_ngcontent-%COMP%]{font-size:1.2rem;margin-bottom:0}[_nghost-%COMP%]   .core-login-site-logo[_ngcontent-%COMP%]{width:90%;max-width:300px;margin:5px auto}[_nghost-%COMP%]   .core-login-forgotten-password[_ngcontent-%COMP%]{text-decoration:underline}[_nghost-%COMP%]   core-user-avatar.large-avatar[_ngcontent-%COMP%]{--core-avatar-size:var(--core-large-avatar-size)}html.dark[_nghost-%COMP%]   core-loading[_ngcontent-%COMP%], html.dark   [_nghost-%COMP%]   core-loading[_ngcontent-%COMP%]{--loading-background:var(--core-login-background-dark);--loading-text-color:#fff;--loading-spinner:#fff}"]}),CoreLoginReconnectPage})();const F=[{path:"",component:D}];let U=(()=>{class CoreLoginReconnectLazyModule{}return CoreLoginReconnectLazyModule.ɵmod=b.wc({type:CoreLoginReconnectLazyModule}),CoreLoginReconnectLazyModule.ɵinj=b.vc({factory:function CoreLoginReconnectLazyModule_Factory(e){return new(e||CoreLoginReconnectLazyModule)},imports:[[t.m.forChild(F),i.a,c.a],t.m]}),CoreLoginReconnectLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&b.kd(U,{declarations:[D],imports:[t.m,i.a,c.a],exports:[t.m]}))}}]);