(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{MxkI:function(e,t,i){"use strict";i.r(t),i.d(t,"SelectGameModule",function(){return g});var n=i("ofXK"),c=i("tyNb"),o=i("fXoL"),r=i("BKB1"),s=i("rO7p"),a=i("MutI"),l=i("NFeN");const b=[{path:"",component:(()=>{class e{constructor(e,t){this.routingService=e,this.dialogAlertService=t}onFaceExpressionDetectionTest(){this.dialogAlertService.openDialog({title:"Info",content:"In questa DEMO puoi TESTARE il riconoscimento delle espressioni facciali"}).afterClosed().subscribe(e=>{e&&this.routingService.homeCameraDetection()})}onArcade(){this.dialogAlertService.openDialog({title:"Info",content:"In questa DEMO vedrai un video divertente, cerca di non ridere!"}).afterClosed().subscribe(e=>{e&&this.routingService.homeArcade()})}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(r.a),o.Jb(s.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-select-game"]],decls:12,vars:1,consts:[[2,"text-align","center"],["src","/assets/img/bg.jpg","width","40%"],[2,"width","80%","margin","auto"],[3,"multiple"],[3,"click"],["mat-list-icon",""]],template:function(e,t){1&e&&(o.Mb(0,"div",0),o.Kb(1,"img",1),o.Mb(2,"div",2),o.Mb(3,"mat-selection-list",3),o.Mb(4,"mat-list-option",4),o.Tb("click",function(){return t.onArcade()}),o.Mb(5,"mat-icon",5),o.pc(6,"tag_faces"),o.Lb(),o.pc(7," Arcade game "),o.Lb(),o.Mb(8,"mat-list-option",4),o.Tb("click",function(){return t.onFaceExpressionDetectionTest()}),o.Mb(9,"mat-icon",5),o.pc(10,"api"),o.Lb(),o.pc(11," Face expression detection (TEST) "),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&e&&(o.zb(3),o.cc("multiple",!1))},directives:[a.d,a.c,l.a,a.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[c.b.forChild(b)],c.b]}),e})();var u=i("/t3+"),d=i("bTqV"),m=i("STbY"),f=i("LOIK");let g=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[n.c,p,a.b,u.b,d.b,m.c,l.b,f.a]]}),e})()}}]);