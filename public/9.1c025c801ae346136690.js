(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Xa2L:function(e,t,r){"use strict";r.d(t,"a",function(){return _}),r.d(t,"b",function(){return k});var n=r("fXoL"),o=r("ofXK"),i=r("FKr1"),s=r("8LU1"),a=r("nLfN"),c=r("R1ws");function d(e,t){if(1&e&&(n.Xb(),n.Mb(0,"circle",3)),2&e){const e=n.Yb();n.lc("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),n.Cb("r",e._getCircleRadius())}}function m(e,t){if(1&e&&(n.Xb(),n.Mb(0,"circle",3)),2&e){const e=n.Yb();n.lc("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),n.Cb("r",e._getCircleRadius())}}function f(e,t){if(1&e&&(n.Xb(),n.Mb(0,"circle",3)),2&e){const e=n.Yb();n.lc("animation-name","mat-progress-spinner-stroke-rotate-"+e._spinnerAnimationLabel)("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),n.Cb("r",e._getCircleRadius())}}function h(e,t){if(1&e&&(n.Xb(),n.Mb(0,"circle",3)),2&e){const e=n.Yb();n.lc("stroke-dashoffset",e._getStrokeDashOffset(),"px")("stroke-dasharray",e._getStrokeCircumference(),"px")("stroke-width",e._getCircleStrokeWidth(),"%"),n.Cb("r",e._getCircleRadius())}}const l=".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";class g{constructor(e){this._elementRef=e}}const p=Object(i.h)(g,"primary"),b=new n.r("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let u=(()=>{class e extends p{constructor(t,r,n,o,i){super(t),this._elementRef=t,this._document=n,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const s=e._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),s.has(n.head)||s.set(n.head,new Set([100])),this._fallbackAnimation=r.EDGE||r.TRIDENT,this._noopAnimations="NoopAnimations"===o&&!!i&&!i._forceAnimations,i&&(i.diameter&&(this.diameter=i.diameter),i.strokeWidth&&(this.strokeWidth=i.strokeWidth))}get diameter(){return this._diameter}set diameter(e){this._diameter=Object(s.e)(e),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(e){this._strokeWidth=Object(s.e)(e)}get value(){return"determinate"===this.mode?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,Object(s.e)(e)))}ngOnInit(){const e=this._elementRef.nativeElement;this._styleRoot=Object(a.c)(e)||this._document.head,this._attachStyleNode(),e.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const e=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${e} ${e}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const t=this._styleRoot,r=this._diameter,n=e._diameters;let o=n.get(t);if(!o||!o.has(r)){const e=this._document.createElement("style");e.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),e.textContent=this._getAnimationText(),t.appendChild(e),o||(o=new Set,n.set(t,o)),o.add(r)}}_getAnimationText(){const e=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*e).replace(/END_VALUE/g,""+.2*e).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(n.l),n.Lb(a.a),n.Lb(o.d,8),n.Lb(c.a,8),n.Lb(b))},e.\u0275cmp=n.Fb({type:e,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(e,t){2&e&&(n.Cb("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),n.lc("width",t.diameter,"px")("height",t.diameter,"px"),n.Db("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[n.yb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(n.Xb(),n.Ob(0,"svg",0),n.oc(1,d,1,9,"circle",1),n.oc(2,m,1,7,"circle",2),n.Nb()),2&e&&(n.lc("width",t.diameter,"px")("height",t.diameter,"px"),n.ec("ngSwitch","indeterminate"===t.mode),n.Cb("viewBox",t._getViewBox()),n.Bb(1),n.ec("ngSwitchCase",!0),n.Bb(1),n.ec("ngSwitchCase",!1))},directives:[o.l,o.m],styles:[l],encapsulation:2,changeDetection:0}),e._diameters=new WeakMap,e})(),k=(()=>{class e extends u{constructor(e,t,r,n,o){super(e,t,r,n,o),this.mode="indeterminate"}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(n.l),n.Lb(a.a),n.Lb(o.d,8),n.Lb(c.a,8),n.Lb(b))},e.\u0275cmp=n.Fb({type:e,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(e,t){2&e&&(n.lc("width",t.diameter,"px")("height",t.diameter,"px"),n.Db("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color"},features:[n.yb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(e,t){1&e&&(n.Xb(),n.Ob(0,"svg",0),n.oc(1,f,1,9,"circle",1),n.oc(2,h,1,7,"circle",2),n.Nb()),2&e&&(n.lc("width",t.diameter,"px")("height",t.diameter,"px"),n.ec("ngSwitch","indeterminate"===t.mode),n.Cb("viewBox",t._getViewBox()),n.Bb(1),n.ec("ngSwitchCase",!0),n.Bb(1),n.ec("ngSwitchCase",!1))},directives:[o.l,o.m],styles:[l],encapsulation:2,changeDetection:0}),e})(),_=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},imports:[[i.a,o.c],i.a]}),e})()},"vm+o":function(e,t,r){"use strict";r.r(t),r.d(t,"LoginModule",function(){return u});var n=r("ofXK"),o=r("tyNb"),i=r("lM/l"),s=r("fXoL"),a=r("RL7/"),c=r("BKB1"),d=r("rO7p"),m=r("MutI"),f=r("NFeN"),h=r("Xa2L");function l(e,t){1&e&&(s.Ob(0,"div",7),s.Mb(1,"mat-spinner"),s.Nb())}const g=[{path:"",component:(()=>{class e{constructor(e,t,r,n){this.authenticationService=e,this.cdr=t,this.routingService=r,this.dialogAlertService=n,this.loading=!1}ngOnInit(){this.subUser=this.authenticationService.currentUser.subscribe(()=>{this.routingService.home()}),this.loading=!0,this.cdr.detectChanges(),this.authenticationService.load().finally(()=>{this.loading=!1,this.cdr.detectChanges()})}ngOnDestroy(){Object(i.d)(this.subUser)}onLoginFacebook(){this.dialogAlertService.openDialog({title:"Info",content:"Il login attraverso Facebook \xe8 disponibile solo per gli sviluppatori. Usa il login come ospite."}).afterClosed().subscribe(e=>{e&&this.authenticationService.login()})}onLoginGuest(){this.authenticationService.loginGuest()}}return e.\u0275fac=function(t){return new(t||e)(s.Lb(a.a),s.Lb(s.h),s.Lb(c.a),s.Lb(d.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-login"]],decls:13,vars:3,consts:[["class","spinner",4,"ngIf"],[2,"text-align","center",3,"hidden"],["src","/assets/img/bg.jpg",1,"animation-laugh",2,"width","50%","height","auto","margin-top","50px"],[2,"width","80%","margin","auto"],[3,"multiple"],[3,"click"],["mat-list-icon",""],[1,"spinner"]],template:function(e,t){1&e&&(s.oc(0,l,2,0,"div",0),s.Ob(1,"div",1),s.Mb(2,"img",2),s.Ob(3,"div",3),s.Ob(4,"mat-selection-list",4),s.Ob(5,"mat-list-option",5),s.Vb("click",function(){return t.onLoginGuest()}),s.Ob(6,"mat-icon",6),s.pc(7,"perm_identity"),s.Nb(),s.pc(8," Login come ospite "),s.Nb(),s.Ob(9,"mat-list-option",5),s.Vb("click",function(){return t.onLoginFacebook()}),s.Ob(10,"mat-icon",6),s.pc(11,"facebook"),s.Nb(),s.pc(12," Login con Facebook (TEST) "),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&e&&(s.ec("ngIf",t.loading),s.Bb(1),s.ec("hidden",t.loading),s.Bb(3),s.ec("multiple",!1))},directives:[n.k,m.d,m.c,f.a,m.a,h.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%;background:#ffde17}.spinner[_ngcontent-%COMP%]{margin:auto}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[o.b.forChild(g)],o.b]}),e})();var b=r("LOIK");let u=(()=>{class e{}return e.\u0275mod=s.Jb({type:e}),e.\u0275inj=s.Ib({factory:function(t){return new(t||e)},imports:[[n.c,p,h.a,m.b,f.b,b.a]]}),e})()}}]);