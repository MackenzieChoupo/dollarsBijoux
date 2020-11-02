function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var t=n[u];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{rLA5:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),i=u("ZZ/e"),e=u("sf9b"),o=u("UmVP"),r=u("KTio"),c=function(){function l(n,u,t,i,e,o){_classCallCheck(this,l),this.navCtrl=n,this.http=u,this.config=t,this.shared=i,this.loading=e,this.applicationRef=o,this.page=1,this.orders=new Array,this.httpRunning=!0}return _createClass(l,[{key:"getOrders",value:function(){var l=this;this.httpRunning=!0,1==this.page&&this.loading.show(),this.config.getWoo("orders/?page="+this.page+"&customer="+this.shared.customerData.id+"&"+this.config.productsArguments).then((function(n){l.infinite.complete(),l.httpRunning=!1;var u=n;if(1==l.page&&(l.orders=new Array,l.loading.hide()),0!=u.length){l.page++;var t=!0,i=!1,e=void 0;try{for(var o,r=u[Symbol.iterator]();!(t=(o=r.next()).done);t=!0){var c=o.value;l.orders.push(c)}}catch(b){i=!0,e=b}finally{try{t||null==r.return||r.return()}finally{if(i)throw e}}}0==u.length&&(l.infinite.disabled=!0),l.applicationRef.tick()}),(function(n){l.loading.hide(),l.shared.showAlert("Erreur du serveur lors du chargement des commandes")}))}},{key:"showOrderDetail",value:function(l){this.shared.myOrderDetialPageData=l,this.navCtrl.navigateForward("my-order-detail")}},{key:"ionViewDidLoad",value:function(){}},{key:"openShop",value:function(){this.navCtrl.navigateForward("products/0/0/newest")}},{key:"refreshPage",value:function(){this.page=1,this.infinite.disabled=!1,this.getOrders()}},{key:"addCurrecny",value:function(l,n){return l.currency+" "+n}},{key:"ngOnInit",value:function(){this.httpRunning=!0,this.getOrders()}},{key:"openProductsPage",value:function(){this.navCtrl.navigateForward("/products/0/0/newest")}}]),l}(),b=function l(){_classCallCheck(this,l)},s=u("pMnS"),a=u("oBZk"),p=u("SVse"),g=u("taci"),d=u("iInd"),f=u("IheW"),m=t.zb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{margin-top:50%}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{zoom:3.9;color:#d3d3d3}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:0px}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-top:2px;margin-bottom:6px}ion-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;color:gray;margin-top:0}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{color:#000}.pending[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:#fff}.cancel[_ngcontent-%COMP%]{background-color:red;color:#fff}.complete[_ngcontent-%COMP%], .inprocess[_ngcontent-%COMP%]{background-color:green;color:#fff}"]],data:{}});function h(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,29,"ion-grid",[["class","ion-no-padding grid"]],null,null,null,a.rb,a.r)),t.Ab(1,49152,null,0,i.C,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,5,"ion-row",[["class","ion-no-padding"]],null,null,null,a.Jb,a.J)),t.Ab(3,49152,null,0,i.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,3,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,a.mb,a.m)),t.Ab(5,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(6,0,null,0,1,"ion-icon",[["name","briefcase"]],null,null,null,a.tb,a.t)),t.Ab(7,49152,null,0,i.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Bb(8,0,null,0,6,"ion-row",[["class","ion-no-padding"]],null,null,null,a.Jb,a.J)),t.Ab(9,49152,null,0,i.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(10,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,a.mb,a.m)),t.Ab(11,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(12,0,null,0,2,"h4",[],null,null,null,null,null)),(l()(),t.Ub(13,null,["",""])),t.Qb(14,1),(l()(),t.Bb(15,0,null,0,6,"ion-row",[["class","ion-no-padding"]],null,null,null,a.Jb,a.J)),t.Ab(16,49152,null,0,i.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(17,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,a.mb,a.m)),t.Ab(18,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(19,0,null,0,2,"h5",[],null,null,null,null,null)),(l()(),t.Ub(20,null,["",""])),t.Qb(21,1),(l()(),t.Bb(22,0,null,0,7,"ion-row",[["class","ion-no-padding"]],null,null,null,a.Jb,a.J)),t.Ab(23,49152,null,0,i.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(24,0,null,0,5,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,a.mb,a.m)),t.Ab(25,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(26,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.openProductsPage()&&t),t}),a.eb,a.e)),t.Ab(27,49152,null,0,i.m,[t.j,t.p,t.F],null,null),(l()(),t.Ub(28,0,["",""])),t.Qb(29,1)],(function(l,n){l(n,5,0,"12"),l(n,7,0,"briefcase"),l(n,11,0,"12"),l(n,18,0,"12"),l(n,25,0,"12")}),(function(l,n){var u=t.Vb(n,13,0,l(n,14,0,t.Nb(n.parent,0),"Votre liste de commande est vide"));l(n,13,0,u);var i=t.Vb(n,20,0,l(n,21,0,t.Nb(n.parent,0),"continuer les achats"));l(n,20,0,i);var e=t.Vb(n,28,0,l(n,29,0,t.Nb(n.parent,0),"Explorer"));l(n,28,0,e)}))}function v(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(1,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ub(-1,null,["en attente"]))],(function(l,n){l(n,1,0,"6")}),null)}function A(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(1,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ub(-1,null,["rembours\xe9"]))],(function(l,n){l(n,1,0,"6")}),null)}function B(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(1,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ub(-1,null,["Annul\xe9"]))],(function(l,n){l(n,1,0,"6")}),null)}function z(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(1,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ub(-1,null,["echou\xe9"]))],(function(l,n){l(n,1,0,"6")}),null)}function F(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(1,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ub(-1,null,["en cours"]))],(function(l,n){l(n,1,0,"6")}),null)}function C(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(1,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Bb(2,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),t.Ub(-1,null,["termin\xe9"]))],(function(l,n){l(n,1,0,"6")}),null)}function P(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,48,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showOrderDetail(l.context.$implicit)&&t),t}),a.kb,a.g)),t.Ab(1,49152,null,0,i.o,[t.j,t.p,t.F],null,null),(l()(),t.Bb(2,0,null,0,46,"ion-card-content",[],null,null,null,a.gb,a.h)),t.Ab(3,49152,null,0,i.p,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,8,"ion-row",[],null,null,null,a.Jb,a.J)),t.Ab(5,49152,null,0,i.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.mb,a.m)),t.Ab(7,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Ub(8,0,[" "," "])),t.Qb(9,1),(l()(),t.Bb(10,0,null,0,2,"ion-col",[["class","ion-text-right"],["col-6",""]],null,null,null,a.mb,a.m)),t.Ab(11,49152,null,0,i.v,[t.j,t.p,t.F],null,null),(l()(),t.Ub(12,0,[" "," "])),(l()(),t.Bb(13,0,null,0,8,"ion-row",[],null,null,null,a.Jb,a.J)),t.Ab(14,49152,null,0,i.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(15,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.mb,a.m)),t.Ab(16,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Ub(17,0,[" "," "])),t.Qb(18,1),(l()(),t.Bb(19,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(20,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Ub(21,0,[" "," "])),(l()(),t.Bb(22,0,null,0,8,"ion-row",[],null,null,null,a.Jb,a.J)),t.Ab(23,49152,null,0,i.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(24,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.mb,a.m)),t.Ab(25,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Ub(26,0,[" "," "])),t.Qb(27,1),(l()(),t.Bb(28,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,a.mb,a.m)),t.Ab(29,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Ub(30,0,[" "," "])),(l()(),t.Bb(31,0,null,0,17,"ion-row",[],[[2,"pending",null],[2,"cancel",null],[2,"inprocess",null],[2,"complete",null]],null,null,a.Jb,a.J)),t.Ab(32,49152,null,0,i.lb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(33,0,null,0,3,"ion-col",[["size","6"]],null,null,null,a.mb,a.m)),t.Ab(34,49152,null,0,i.v,[t.j,t.p,t.F],{size:[0,"size"]},null),(l()(),t.Ub(35,0,[" "," "])),t.Qb(36,1),(l()(),t.qb(16777216,null,0,1,null,v)),t.Ab(38,16384,null,0,p.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,A)),t.Ab(40,16384,null,0,p.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,B)),t.Ab(42,16384,null,0,p.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,z)),t.Ab(44,16384,null,0,p.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,F)),t.Ab(46,16384,null,0,p.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(16777216,null,0,1,null,C)),t.Ab(48,16384,null,0,p.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,7,0,"6"),l(n,16,0,"6"),l(n,20,0,"6"),l(n,25,0,"6"),l(n,29,0,"6"),l(n,34,0,"6"),l(n,38,0,"pending"==n.context.$implicit.status),l(n,40,0,"refunded"==n.context.$implicit.status),l(n,42,0,"cancelled"==n.context.$implicit.status),l(n,44,0,"failed"==n.context.$implicit.status),l(n,46,0,"processing"==n.context.$implicit.status),l(n,48,0,"completed"==n.context.$implicit.status)}),(function(l,n){var u=t.Vb(n,8,0,l(n,9,0,t.Nb(n.parent,0),"ID de la commande"));l(n,8,0,u),l(n,12,0,"#"+n.context.$implicit.number);var i=t.Vb(n,17,0,l(n,18,0,t.Nb(n.parent,0),"Date"));l(n,17,0,i),l(n,21,0,n.context.$implicit.date_created);var e=t.Vb(n,26,0,l(n,27,0,t.Nb(n.parent,0),"Prix"));l(n,26,0,e),l(n,30,0,n.context.$implicit.total),l(n,31,0,"pending"==n.context.$implicit.status||"refunded"==n.context.$implicit.status,"cancelled"==n.context.$implicit.status||"failed"==n.context.$implicit.status,"processing"==n.context.$implicit.status,"completed"==n.context.$implicit.status);var o=t.Vb(n,35,0,l(n,36,0,t.Nb(n.parent,0),"Status"));l(n,35,0,o)}))}function j(l){return t.Wb(0,[t.Pb(0,g.a,[o.a]),t.Sb(671088640,1,{infinite:0}),(l()(),t.Bb(2,0,null,null,26,"ion-header",[],null,null,null,a.sb,a.s)),t.Ab(3,49152,null,0,i.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,24,"ion-toolbar",[],null,null,null,a.Zb,a.Z)),t.Ab(5,49152,null,0,i.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(6,0,null,0,3,"ion-menu-button",[["slot","start"]],null,null,null,a.Db,a.E)),t.Ab(7,49152,null,0,i.T,[t.j,t.p,t.F],null,null),(l()(),t.Bb(8,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,a.tb,a.t)),t.Ab(9,49152,null,0,i.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Bb(10,0,null,0,3,"ion-title",[],null,null,null,a.Xb,a.X)),t.Ab(11,49152,null,0,i.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(12,0,[" "," "])),t.Qb(13,1),(l()(),t.Bb(14,0,null,0,14,"ion-buttons",[["slot","end"]],null,null,null,a.fb,a.f)),t.Ab(15,49152,null,0,i.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(16,0,null,0,3,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.refreshPage()&&t),t}),a.eb,a.e)),t.Ab(17,49152,null,0,i.m,[t.j,t.p,t.F],{fill:[0,"fill"]},null),(l()(),t.Bb(18,0,null,0,1,"ion-icon",[["name","refresh"]],null,null,null,a.tb,a.t)),t.Ab(19,49152,null,0,i.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Bb(20,0,null,0,8,"ion-button",[["fill","clear"],["routerDirection","forward"],["routerLink","/cart"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Nb(l,22).onClick()&&i),"click"===n&&(i=!1!==t.Nb(l,23).onClick(u)&&i),i}),a.eb,a.e)),t.Ab(21,49152,null,0,i.m,[t.j,t.p,t.F],{fill:[0,"fill"],routerDirection:[1,"routerDirection"]},null),t.Ab(22,16384,null,0,d.n,[d.m,d.a,[8,null],t.K,t.p],{routerLink:[0,"routerLink"]},null),t.Ab(23,737280,null,0,i.Rb,[p.i,i.Lb,t.p,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t.Bb(24,0,null,0,1,"ion-icon",[["name","basket"]],null,null,null,a.tb,a.t)),t.Ab(25,49152,null,0,i.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Bb(26,0,null,0,2,"ion-badge",[["color","secondary"]],null,null,null,a.db,a.d)),t.Ab(27,49152,null,0,i.l,[t.j,t.p,t.F],{color:[0,"color"]},null),(l()(),t.Ub(28,0,["",""])),(l()(),t.Bb(29,0,null,null,11,"ion-content",[],null,null,null,a.nb,a.n)),t.Ab(30,49152,null,0,i.w,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,h)),t.Ab(32,16384,null,0,p.k,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.Bb(33,0,null,0,3,"ion-grid",[],null,null,null,a.rb,a.r)),t.Ab(34,49152,null,0,i.C,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,P)),t.Ab(36,278528,null,0,p.j,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Bb(37,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.getOrders()&&t),t}),a.wb,a.v)),t.Ab(38,49152,[[1,4],["infinite",4]],0,i.G,[t.j,t.p,t.F],null,null),(l()(),t.Bb(39,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,a.vb,a.w)),t.Ab(40,49152,null,0,i.H,[t.j,t.p,t.F],null,null)],(function(l,n){var u=n.component;l(n,9,0,"menu"),l(n,17,0,"clear"),l(n,19,0,"refresh"),l(n,21,0,"clear","forward"),l(n,22,0,"/cart"),l(n,23,0,"forward"),l(n,25,0,"basket"),l(n,27,0,"secondary"),l(n,32,0,0==u.orders.length&&0==u.httpRunning),l(n,36,0,u.orders)}),(function(l,n){var u=n.component,i=t.Vb(n,12,0,l(n,13,0,t.Nb(n,0),"Mes commandes"));l(n,12,0,i),l(n,28,0,u.shared.cartTotalItems())}))}var w=t.xb("app-my-orders",c,(function(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,1,"app-my-orders",[],null,null,null,j,m)),t.Ab(1,114688,null,0,c,[i.Lb,f.c,e.a,o.a,r.a,t.g],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),O=u("s7LF"),k=u("wWlB");u.d(n,"MyOrdersPageModuleNgFactory",(function(){return _}));var _=t.yb(b,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[s.a,w]],[3,t.m],t.D]),t.Lb(4608,p.m,p.l,[t.z,[2,p.v]]),t.Lb(4608,O.m,O.m,[]),t.Lb(4608,i.c,i.c,[t.F,t.g]),t.Lb(4608,i.Kb,i.Kb,[i.c,t.m,t.w]),t.Lb(4608,i.Pb,i.Pb,[i.c,t.m,t.w]),t.Lb(1073742336,p.b,p.b,[]),t.Lb(1073742336,O.l,O.l,[]),t.Lb(1073742336,O.c,O.c,[]),t.Lb(1073742336,i.Gb,i.Gb,[]),t.Lb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),t.Lb(1073742336,k.a,k.a,[]),t.Lb(1073742336,b,b,[]),t.Lb(1024,d.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);