(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{MxkI:function(e,t,i){"use strict";i.r(t),i.d(t,"SelectGameModule",function(){return g});var o=i("ofXK"),n=i("tyNb"),c=i("fXoL"),r=i("BKB1"),s=i("rO7p"),a=i("MutI"),l=i("NFeN");const b=[{path:"",component:(()=>{class e{constructor(e,t){this.routingService=e,this.dialogAlertService=t}onFaceExpressionDetectionTest(){this.dialogAlertService.openDialog({title:"Info",content:"In questa DEMO puoi TESTARE il riconoscimento delle espressioni facciali"}).afterClosed().subscribe(e=>{e&&this.routingService.homeCameraDetection()})}onArcade(){this.dialogAlertService.openDialog({title:"Info",content:"In questa DEMO vedrai un video divertente, cerca di non ridere!"}).afterClosed().subscribe(e=>{e&&this.routingService.homeArcade()})}onExpressionTraining(){this.dialogAlertService.openDialog({title:"Info",content:"In questa DEMO ti sar\xe0 chiesto di fare espressioni di un certo tipo in modo random, non sbagliare!"}).afterClosed().subscribe(e=>{e&&this.routingService.homeExpressionTraining()})}}return e.\u0275fac=function(t){return new(t||e)(c.Jb(r.a),c.Jb(s.a))},e.\u0275cmp=c.Db({type:e,selectors:[["app-select-game"]],decls:17,vars:1,consts:[[2,"text-align","center"],[2,"margin-top","10px"],[2,"width","80%","margin","auto"],[3,"multiple"],[3,"click"],["mat-list-icon",""]],template:function(e,t){1&e&&(c.Mb(0,"div",0),c.Mb(1,"h1",1),c.oc(2,"Seleziona la modalit\xe0 di gioco"),c.Lb(),c.Mb(3,"div",2),c.Mb(4,"mat-selection-list",3),c.Mb(5,"mat-list-option",4),c.Tb("click",function(){return t.onArcade()}),c.Mb(6,"mat-icon",5),c.oc(7,"tag_faces"),c.Lb(),c.oc(8," Arcade game "),c.Lb(),c.Mb(9,"mat-list-option",4),c.Tb("click",function(){return t.onExpressionTraining()}),c.Mb(10,"mat-icon",5),c.oc(11,"face"),c.Lb(),c.oc(12," Allenamento delle espressioni "),c.Lb(),c.Mb(13,"mat-list-option",4),c.Tb("click",function(){return t.onFaceExpressionDetectionTest()}),c.Mb(14,"mat-icon",5),c.oc(15,"api"),c.Lb(),c.oc(16," Face expression detection (TEST) "),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&e&&(c.zb(4),c.cc("multiple",!1))},directives:[a.d,a.c,l.a,a.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[n.b.forChild(b)],n.b]}),e})();var u=i("/t3+"),p=i("bTqV"),m=i("STbY"),f=i("LOIK");let g=(()=>{class e{}return e.\u0275mod=c.Hb({type:e}),e.\u0275inj=c.Gb({factory:function(t){return new(t||e)},imports:[[o.c,d,a.b,u.b,p.b,m.c,l.b,f.a]]}),e})()}}]);