(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{rLA5:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J"),o=u("ZZ/e"),i=u("sf9b"),e=u("UmVP"),r=u("KTio");class b{constructor(n,l,u,t,o,i){this.navCtrl=n,this.http=l,this.config=u,this.shared=t,this.loading=o,this.applicationRef=i,this.page=1,this.orders=new Array,this.httpRunning=!0}getOrders(){this.httpRunning=!0,1==this.page&&this.loading.show(),this.config.getWoo("orders/?page="+this.page+"&customer="+this.shared.customerData.id+"&"+this.config.productsArguments).then(n=>{this.infinite.complete(),this.httpRunning=!1;let l=n;if(1==this.page&&(this.orders=new Array,this.loading.hide()),0!=l.length){this.page++;for(let n of l)this.orders.push(n)}0==l.length&&(this.infinite.disabled=!0),this.applicationRef.tick()},n=>{this.loading.hide(),this.shared.showAlert("Erreur du serveur lors du chargement des commandes")})}showOrderDetail(n){this.shared.myOrderDetialPageData=n,this.navCtrl.navigateForward("my-order-detail")}ionViewDidLoad(){}openShop(){this.navCtrl.navigateForward("products/0/0/newest")}refreshPage(){this.page=1,this.infinite.disabled=!1,this.getOrders()}addCurrecny(n,l){return n.currency+" "+l}ngOnInit(){this.httpRunning=!0,this.getOrders()}openProductsPage(){this.navCtrl.navigateForward("/products/0/0/newest")}}class c{}var s=u("pMnS"),a=u("oBZk"),p=u("taci"),d=u("iInd"),g=u("SVse"),m=u("IheW"),h=t.zb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{margin-top:50%}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{zoom:3.9;color:#d3d3d3}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:0px}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-top:2px;margin-bottom:6px}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;color:gray;margin-top:0}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{color:#000}.pending[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}.cancel[_ngcontent-%COMP%]{background-color:red;color:#fff}.complete[_ngcontent-%COMP%], .inprocess[_ngcontent-%COMP%]{background-color:green;color:#fff}"]],data:{}});function f(n){return t.Wb(0,[(n()(),t.Bb(0,0,null,null,29,"ion-grid",[["class","ion-no-padding grid"]],null,null,null,a.rb,a.r)),t.Ab(1,49152,null,0,o.C,[t.j,t.p,t.F],null,null),(n()(),t.Bb(2,0,null,0,5,"ion-row",[["class","ion-no-padding"]],null,null,null,a.Jb,a.J)),t.Ab(3,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(4,0,null,0,3,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,a.mb,a.m)),t.Ab(5,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(6,0,null,0,1,"ion-icon",[["name","briefcase"]],null,null,null,a.tb,a.t)),t.Ab(7,49152,null,0,o.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(n()(),t.Bb(8,0,null,0,6,"ion-row",[["class","ion-no-padding"]],null,null,null,a.Jb,a.J)),t.Ab(9,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(10,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,a.mb,a.m)),t.Ab(11,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(12,0,null,0,2,"h4",[],null,null,null,null,null)),(n()(),t.Ub(13,null,["",""])),t.Qb(14,1),(n()(),t.Bb(15,0,null,0,6,"ion-row",[["class","ion-no-padding"]],null,null,null,a.Jb,a.J)),t.Ab(16,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(17,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,a.mb,a.m)),t.Ab(18,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(19,0,null,0,2,"h5",[],null,null,null,null,null)),(n()(),t.Ub(20,null,["",""])),t.Qb(21,1),(n()(),t.Bb(22,0,null,0,7,"ion-row",[["class","ion-no-padding"]],null,null,null,a.Jb,a.J)),t.Ab(23,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(24,0,null,0,5,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,a.mb,a.m)),t.Ab(25,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(26,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.openProductsPage()&&t),t}),a.eb,a.e)),t.Ab(27,49152,null,0,o.m,[t.j,t.p,t.F],null,null),(n()(),t.Ub(28,0,["",""])),t.Qb(29,1)],(function(n,l){n(l,5,0,"12"),n(l,7,0,"briefcase"),n(l,11,0,"12"),n(l,18,0,"12"),n(l,25,0,"12")}),(function(n,l){var u=t.Vb(l,13,0,n(l,14,0,t.Nb(l.parent,0),"Votre liste de commande est vide"));n(l,13,0,u);var o=t.Vb(l,20,0,n(l,21,0,t.Nb(l.parent,0),"continuer les achats"));n(l,20,0,o);var i=t.Vb(l,28,0,n(l,29,0,t.Nb(l.parent,0),"Explorer"));n(l,28,0,i)}))}function A(n){return t.Wb(0,[(n()(),t.Bb(0,0,null,null,41,"ion-card",[],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.showOrderDetail(n.context.$implicit)&&t),t}),a.kb,a.g)),t.Ab(1,49152,null,0,o.o,[t.j,t.p,t.F],null,null),(n()(),t.Bb(2,0,null,0,39,"ion-card-content",[],null,null,null,a.gb,a.h)),t.Ab(3,49152,null,0,o.p,[t.j,t.p,t.F],null,null),(n()(),t.Bb(4,0,null,0,8,"ion-row",[],null,null,null,a.Jb,a.J)),t.Ab(5,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(6,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.mb,a.m)),t.Ab(7,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Ub(8,0,[" "," "])),t.Qb(9,1),(n()(),t.Bb(10,0,null,0,2,"ion-col",[["class","ion-text-right"],["col-6",""]],null,null,null,a.mb,a.m)),t.Ab(11,49152,null,0,o.v,[t.j,t.p,t.F],null,null),(n()(),t.Ub(12,0,[" "," "])),(n()(),t.Bb(13,0,null,0,8,"ion-row",[],null,null,null,a.Jb,a.J)),t.Ab(14,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(15,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.mb,a.m)),t.Ab(16,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Ub(17,0,[" "," "])),t.Qb(18,1),(n()(),t.Bb(19,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(20,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Ub(21,0,[" "," "])),(n()(),t.Bb(22,0,null,0,8,"ion-row",[],null,null,null,a.Jb,a.J)),t.Ab(23,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(24,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.mb,a.m)),t.Ab(25,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Ub(26,0,[" "," "])),t.Qb(27,1),(n()(),t.Bb(28,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(29,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Ub(30,0,[" "," "])),(n()(),t.Bb(31,0,null,0,10,"ion-row",[],[[2,"pending",null],[2,"cancel",null],[2,"inprocess",null],[2,"complete",null]],null,null,a.Jb,a.J)),t.Ab(32,49152,null,0,o.lb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(33,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.mb,a.m)),t.Ab(34,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Ub(35,0,[" "," "])),t.Qb(36,1),(n()(),t.Bb(37,0,null,0,4,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(38,49152,null,0,o.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(n()(),t.Bb(39,0,null,0,2,"strong",[],null,null,null,null,null)),(n()(),t.Ub(40,null,["",""])),t.Qb(41,1)],(function(n,l){n(l,7,0,"6"),n(l,16,0,"6"),n(l,20,0,"6"),n(l,25,0,"6"),n(l,29,0,"6"),n(l,34,0,"6"),n(l,38,0,"6")}),(function(n,l){var u=t.Vb(l,8,0,n(l,9,0,t.Nb(l.parent,0),"ID de la commande"));n(l,8,0,u),n(l,12,0,"#"+l.context.$implicit.number);var o=t.Vb(l,17,0,n(l,18,0,t.Nb(l.parent,0),"Date"));n(l,17,0,o),n(l,21,0,l.context.$implicit.date_created);var i=t.Vb(l,26,0,n(l,27,0,t.Nb(l.parent,0),"Prix"));n(l,26,0,i),n(l,30,0,l.context.$implicit.total),n(l,31,0,"pending"==l.context.$implicit.status||"refunded"==l.context.$implicit.status,"cancelled"==l.context.$implicit.status||"failed"==l.context.$implicit.status,"processing"==l.context.$implicit.status,"completed"==l.context.$implicit.status);var e=t.Vb(l,35,0,n(l,36,0,t.Nb(l.parent,0),"Status"));n(l,35,0,e);var r=t.Vb(l,40,0,n(l,41,0,t.Nb(l.parent,0),l.context.$implicit.status));n(l,40,0,r)}))}function F(n){return t.Wb(0,[t.Pb(0,p.a,[e.a]),t.Sb(671088640,1,{infinite:0}),(n()(),t.Bb(2,0,null,null,26,"ion-header",[],null,null,null,a.sb,a.s)),t.Ab(3,49152,null,0,o.D,[t.j,t.p,t.F],null,null),(n()(),t.Bb(4,0,null,0,24,"ion-toolbar",[],null,null,null,a.Zb,a.Z)),t.Ab(5,49152,null,0,o.Eb,[t.j,t.p,t.F],null,null),(n()(),t.Bb(6,0,null,0,3,"ion-menu-button",[["slot","start"]],null,null,null,a.Db,a.E)),t.Ab(7,49152,null,0,o.T,[t.j,t.p,t.F],null,null),(n()(),t.Bb(8,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,a.tb,a.t)),t.Ab(9,49152,null,0,o.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(n()(),t.Bb(10,0,null,0,3,"ion-title",[],null,null,null,a.Xb,a.X)),t.Ab(11,49152,null,0,o.Cb,[t.j,t.p,t.F],null,null),(n()(),t.Ub(12,0,[" "," "])),t.Qb(13,1),(n()(),t.Bb(14,0,null,0,14,"ion-buttons",[["slot","end"]],null,null,null,a.fb,a.f)),t.Ab(15,49152,null,0,o.n,[t.j,t.p,t.F],null,null),(n()(),t.Bb(16,0,null,0,3,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.refreshPage()&&t),t}),a.eb,a.e)),t.Ab(17,49152,null,0,o.m,[t.j,t.p,t.F],{fill:[0,"fill"]},null),(n()(),t.Bb(18,0,null,0,1,"ion-icon",[["name","refresh"]],null,null,null,a.tb,a.t)),t.Ab(19,49152,null,0,o.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(n()(),t.Bb(20,0,null,0,8,"ion-button",[["fill","clear"],["routerDirection","forward"],["routerLink","/cart"]],null,[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.Nb(n,22).onClick()&&o),"click"===l&&(o=!1!==t.Nb(n,23).onClick(u)&&o),o}),a.eb,a.e)),t.Ab(21,49152,null,0,o.m,[t.j,t.p,t.F],{fill:[0,"fill"],routerDirection:[1,"routerDirection"]},null),t.Ab(22,16384,null,0,d.n,[d.m,d.a,[8,null],t.K,t.p],{routerLink:[0,"routerLink"]},null),t.Ab(23,737280,null,0,o.Rb,[g.i,o.Lb,t.p,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),t.Bb(24,0,null,0,1,"ion-icon",[["name","basket"]],null,null,null,a.tb,a.t)),t.Ab(25,49152,null,0,o.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(n()(),t.Bb(26,0,null,0,2,"ion-badge",[["color","secondary"]],null,null,null,a.db,a.d)),t.Ab(27,49152,null,0,o.l,[t.j,t.p,t.F],{color:[0,"color"]},null),(n()(),t.Ub(28,0,["",""])),(n()(),t.Bb(29,0,null,null,11,"ion-content",[],null,null,null,a.nb,a.n)),t.Ab(30,49152,null,0,o.w,[t.j,t.p,t.F],null,null),(n()(),t.qb(16777216,null,0,1,null,f)),t.Ab(32,16384,null,0,g.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(n()(),t.Bb(33,0,null,0,3,"ion-grid",[],null,null,null,a.rb,a.r)),t.Ab(34,49152,null,0,o.C,[t.j,t.p,t.F],null,null),(n()(),t.qb(16777216,null,0,1,null,A)),t.Ab(36,278528,null,0,g.j,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(n()(),t.Bb(37,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(n,l,u){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.getOrders()&&t),t}),a.wb,a.v)),t.Ab(38,49152,[[1,4],["infinite",4]],0,o.G,[t.j,t.p,t.F],null,null),(n()(),t.Bb(39,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,a.vb,a.w)),t.Ab(40,49152,null,0,o.H,[t.j,t.p,t.F],null,null)],(function(n,l){var u=l.component;n(l,9,0,"menu"),n(l,17,0,"clear"),n(l,19,0,"refresh"),n(l,21,0,"clear","forward"),n(l,22,0,"/cart"),n(l,23,0,"forward"),n(l,25,0,"basket"),n(l,27,0,"secondary"),n(l,32,0,0==u.orders.length&&0==u.httpRunning),n(l,36,0,u.orders)}),(function(n,l){var u=l.component,o=t.Vb(l,12,0,n(l,13,0,t.Nb(l,0),"Mes commandes"));n(l,12,0,o),n(l,28,0,u.shared.cartTotalItems())}))}function B(n){return t.Wb(0,[(n()(),t.Bb(0,0,null,null,1,"app-my-orders",[],null,null,null,F,h)),t.Ab(1,114688,null,0,b,[o.Lb,m.c,i.a,e.a,r.a,t.g],null,null)],(function(n,l){n(l,1,0)}),null)}var P=t.xb("app-my-orders",b,B,{},{},[]),v=u("s7LF"),O=u("wWlB");u.d(l,"MyOrdersPageModuleNgFactory",(function(){return C}));var C=t.yb(c,[],(function(n){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[s.a,P]],[3,t.m],t.D]),t.Lb(4608,g.m,g.l,[t.z,[2,g.v]]),t.Lb(4608,v.m,v.m,[]),t.Lb(4608,o.c,o.c,[t.F,t.g]),t.Lb(4608,o.Kb,o.Kb,[o.c,t.m,t.w]),t.Lb(4608,o.Pb,o.Pb,[o.c,t.m,t.w]),t.Lb(1073742336,g.b,g.b,[]),t.Lb(1073742336,v.l,v.l,[]),t.Lb(1073742336,v.c,v.c,[]),t.Lb(1073742336,o.Gb,o.Gb,[]),t.Lb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.Lb(1073742336,O.a,O.a,[]),t.Lb(1073742336,c,c,[]),t.Lb(1024,d.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);