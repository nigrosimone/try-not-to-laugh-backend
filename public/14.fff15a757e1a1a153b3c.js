(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{MxkI:function(e,t,i){"use strict";i.r(t),i.d(t,"SelectGameModule",function(){return h});var n=i("ofXK"),o=i("tyNb"),c=i("lM/l"),r=i("fXoL"),s=i("BKB1"),a=i("rO7p"),l=i("MutI"),b=i("NFeN");const p=[{path:"",component:(()=>{class e{constructor(e,t){this.routingService=e,this.dialogAlertService=t}onFaceExpressionDetectionTest(e){Object(c.b)(e.x,e.y),this.dialogAlertService.openDialog({title:"Info",content:"In questa DEMO puoi TESTARE il riconoscimento delle espressioni facciali"}).afterClosed().subscribe(e=>{e&&this.routingService.homeCameraDetection()})}onArcade(e){Object(c.b)(e.x,e.y),this.dialogAlertService.openDialog({title:"Info",content:"In questa DEMO vedrai un video divertente, cerca di non ridere!"}).afterClosed().subscribe(e=>{e&&this.routingService.homeArcade()})}onExpressionTraining(e){Object(c.b)(e.x,e.y),this.dialogAlertService.openDialog({title:"Info",content:"In questa DEMO ti sar\xe0 chiesto di fare espressioni di un certo tipo in modo random, non sbagliare!"}).afterClosed().subscribe(e=>{e&&this.routingService.homeExpressionTraining()})}onEmojiDetection(e){Object(c.b)(e.x,e.y),this.dialogAlertService.openDialog({title:"Info",content:"In questa demo la tua espressione viene utilizzata per selezionare una emoji pertinente"}).afterClosed().subscribe(e=>{e&&this.routingService.homeEmojiDetection()})}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(s.a),r.Lb(a.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-select-game"]],decls:21,vars:1,consts:[[2,"text-align","center"],[2,"margin-top","10px"],[2,"width","80%","margin","auto"],[3,"multiple"],[3,"click"],["mat-list-icon",""]],template:function(e,t){1&e&&(r.Ob(0,"div",0),r.Ob(1,"h1",1),r.pc(2,"Seleziona la modalit\xe0 di gioco"),r.Nb(),r.Ob(3,"div",2),r.Ob(4,"mat-selection-list",3),r.Ob(5,"mat-list-option",4),r.Vb("click",function(e){return t.onArcade(e)}),r.Ob(6,"mat-icon",5),r.pc(7,"tag_faces"),r.Nb(),r.pc(8," Arcade game "),r.Nb(),r.Ob(9,"mat-list-option",4),r.Vb("click",function(e){return t.onExpressionTraining(e)}),r.Ob(10,"mat-icon",5),r.pc(11,"face"),r.Nb(),r.pc(12," Allenamento delle espressioni "),r.Nb(),r.Ob(13,"mat-list-option",4),r.Vb("click",function(e){return t.onEmojiDetection(e)}),r.Ob(14,"mat-icon",5),r.pc(15,"emoji_emotions"),r.Nb(),r.pc(16," Selezione emoji "),r.Nb(),r.Ob(17,"mat-list-option",4),r.Vb("click",function(e){return t.onFaceExpressionDetectionTest(e)}),r.Ob(18,"mat-icon",5),r.pc(19,"api"),r.Nb(),r.pc(20," Face expression detection (TEST) "),r.Nb(),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.Bb(4),r.ec("multiple",!1))},directives:[l.d,l.c,b.a,l.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},imports:[[o.b.forChild(p)],o.b]}),e})();var d=i("/t3+"),m=i("bTqV"),f=i("STbY"),g=i("LOIK");let h=(()=>{class e{}return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},imports:[[n.c,u,l.b,d.b,m.b,f.c,b.b,g.a]]}),e})()}}]);