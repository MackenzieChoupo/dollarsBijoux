function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var o=l[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"4/Id":function(n,l,t){"use strict";t.r(l);var o=t("8Y7J"),i=t("mrSG"),u=t("ZZ/e"),e=t("KTio"),r=t("sf9b"),c=t("UmVP"),a=t("OMjV"),b=function(){function n(l,t,o,i,u,e,r,c){var a=this;_classCallCheck(this,n),this.navCtrl=l,this.shared=t,this.config=o,this.http=i,this.loading=u,this.applicationRef=e,this.popoverCtrl=r,this.events=c,this.page=1,this.notifications=new Array,this.httpRunning=!0,this.httpRunning=!0,this.getNotifications(),c.subscribe("cardScratched",(function(n){a.updateList(n)}))}return _createClass(n,[{key:"getNotifications",value:function(){var n=this;this.httpRunning=!0,this.loading.show(),this.http.get(this.config.url+"/api/appusers/ionic_coupon_notification/?insecure=cool&user_id="+this.shared.customerData.id).subscribe((function(l){n.httpRunning=!1,n.loading.hide();var t=l.data;if(1==n.page&&(n.notifications=new Array),0!=t.length){n.page++;var o=!0,i=!1,u=void 0;try{for(var e,r=t[Symbol.iterator]();!(o=(e=r.next()).done);o=!0){var c=e.value;n.notifications.push(c)}}catch(a){i=!0,u=a}finally{try{o||null==r.return||r.return()}finally{if(i)throw u}}}n.infinite.disabled=!0,0==t.length&&(n.infinite.disabled=!0),n.applicationRef.tick(),console.log(t)}))}},{key:"openScratchCard",value:function(n){return i.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var t;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.popoverCtrl.create({component:a.a,event:event,componentProps:{data:n}});case 2:return t=l.sent,l.next=5,t.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"refreshPage",value:function(){this.page=1,this.getNotifications()}},{key:"openShop",value:function(){this.navCtrl.navigateForward("/products/0/0/newest")}},{key:"ionViewDidLoad",value:function(){}},{key:"updateList",value:function(n){var l=!0,t=!1,o=void 0;try{for(var i,u=this.notifications[Symbol.iterator]();!(l=(i=u.next()).done);l=!0){var e=i.value;e.id==n.id&&(e.is_view=1,this.shared.toast("Congratulations you Get "+e.message+" use this code : "+e.code),this.http.get(this.config.url+"/api/appusers/ionic_notification_update/?insecure=cool&notification_id="+e.id).subscribe((function(n){console.log(n)})))}}catch(r){t=!0,o=r}finally{try{l||null==u.return||u.return()}finally{if(t)throw o}}}},{key:"ngOnInit",value:function(){}}]),n}(),s=function n(){_classCallCheck(this,n)},p=t("pMnS"),f=t("oBZk"),g=t("SVse"),d=t("taci"),h=t("IheW"),m=o.zb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{margin-top:50%}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{zoom:3.9;color:#d3d3d3}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:var(--ion-color-primary);--border-radius:0px;height:30px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-top:2px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;color:gray;margin-top:0}.note[_ngcontent-%COMP%]{color:red;width:80px;text-align:center}ion-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-secondary)}.pop[_ngcontent-%COMP%]{width:100%;height:100%}.popover-md[_ngcontent-%COMP%]   .popover-content[_ngcontent-%COMP%]{width:400px!important;height:100px}"]],data:{}});function v(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,29,"ion-grid",[["class","ion-no-padding"]],null,null,null,f.rb,f.r)),o.Ab(1,49152,null,0,u.C,[o.j,o.p,o.F],null,null),(n()(),o.Bb(2,0,null,0,5,"ion-row",[["class","ion-no-padding"]],null,null,null,f.Jb,f.J)),o.Ab(3,49152,null,0,u.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(4,0,null,0,3,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,f.mb,f.m)),o.Ab(5,49152,null,0,u.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Bb(6,0,null,0,1,"ion-icon",[["name","notifications"]],null,null,null,f.tb,f.t)),o.Ab(7,49152,null,0,u.E,[o.j,o.p,o.F],{name:[0,"name"]},null),(n()(),o.Bb(8,0,null,0,6,"ion-row",[["class","ion-no-padding"]],null,null,null,f.Jb,f.J)),o.Ab(9,49152,null,0,u.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(10,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,f.mb,f.m)),o.Ab(11,49152,null,0,u.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Bb(12,0,null,0,2,"h4",[],null,null,null,null,null)),(n()(),o.Ub(13,null,["",""])),o.Qb(14,1),(n()(),o.Bb(15,0,null,0,6,"ion-row",[["class","ion-no-padding"]],null,null,null,f.Jb,f.J)),o.Ab(16,49152,null,0,u.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(17,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,f.mb,f.m)),o.Ab(18,49152,null,0,u.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Bb(19,0,null,0,2,"h5",[],null,null,null,null,null)),(n()(),o.Ub(20,null,["",""])),o.Qb(21,1),(n()(),o.Bb(22,0,null,0,7,"ion-row",[["class","ion-no-padding"]],null,null,null,f.Jb,f.J)),o.Ab(23,49152,null,0,u.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(24,0,null,0,5,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,f.mb,f.m)),o.Ab(25,49152,null,0,u.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Bb(26,0,null,0,3,"ion-button",[["color","secondary"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openShop()&&o),o}),f.eb,f.e)),o.Ab(27,49152,null,0,u.m,[o.j,o.p,o.F],{color:[0,"color"]},null),(n()(),o.Ub(28,0,["",""])),o.Qb(29,1)],(function(n,l){n(l,5,0,"12"),n(l,7,0,"notifications"),n(l,11,0,"12"),n(l,18,0,"12"),n(l,25,0,"12"),n(l,27,0,"secondary")}),(function(n,l){var t=o.Vb(l,13,0,n(l,14,0,o.Nb(l.parent,0),"Your Scratch Cards Coupon List is Empty"));n(l,13,0,t);var i=o.Vb(l,20,0,n(l,21,0,o.Nb(l.parent,0),"continue shopping"));n(l,20,0,i);var u=o.Vb(l,28,0,n(l,29,0,o.Nb(l.parent,0),"Explore"));n(l,28,0,u)}))}function C(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,3,"ion-button",[["color","secondary"],["ion-button",""]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.openScratchCard(n.parent.parent.context.$implicit)&&o),o}),f.eb,f.e)),o.Ab(1,49152,null,0,u.m,[o.j,o.p,o.F],{color:[0,"color"]},null),(n()(),o.Ub(2,0,[" "," "])),o.Qb(3,1)],(function(n,l){n(l,1,0,"secondary")}),(function(n,l){var t=o.Vb(l,2,0,n(l,3,0,o.Nb(l.parent.parent.parent,0),"Open Scratch Card"));n(l,2,0,t)}))}function _(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,2,"h2",[],null,null,null,null,null)),(n()(),o.Ub(1,null,["",": ",""])),o.Qb(2,1)],null,(function(n,l){var t=o.Vb(l,1,0,n(l,2,0,o.Nb(l.parent.parent.parent,0),"Code"));n(l,1,0,t,l.parent.parent.context.$implicit.code)}))}function P(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Ub(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.parent.context.$implicit.message)}))}function w(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,17,"ion-item",[],null,null,null,f.Ab,f.y)),o.Ab(1,49152,null,0,u.J,[o.j,o.p,o.F],null,null),(n()(),o.Bb(2,0,null,0,1,"ion-icon",[["name","notifications"],["slot","start"]],null,null,null,f.tb,f.t)),o.Ab(3,49152,null,0,u.E,[o.j,o.p,o.F],{name:[0,"name"]},null),(n()(),o.qb(16777216,null,0,1,null,C)),o.Ab(5,16384,null,0,g.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(6,0,null,0,5,"ion-label",[],null,null,null,f.Bb,f.B)),o.Ab(7,49152,null,0,u.P,[o.j,o.p,o.F],null,null),(n()(),o.qb(16777216,null,0,1,null,_)),o.Ab(9,16384,null,0,g.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(16777216,null,0,1,null,P)),o.Ab(11,16384,null,0,g.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(12,0,null,0,5,"ion-note",[["class","note"],["slot","end"]],null,null,null,f.Fb,f.F)),o.Ab(13,49152,null,0,u.ab,[o.j,o.p,o.F],null,null),(n()(),o.Ub(14,0,[""," "])),o.Qb(15,1),(n()(),o.Bb(16,0,null,0,1,"small",[],null,null,null,null,null)),(n()(),o.Ub(17,null,["",""]))],(function(n,l){n(l,3,0,"notifications"),n(l,5,0,0==l.parent.context.$implicit.is_view),n(l,9,0,1==l.parent.context.$implicit.is_view),n(l,11,0,1==l.parent.context.$implicit.is_view)}),(function(n,l){var t=o.Vb(l,14,0,n(l,15,0,o.Nb(l.parent.parent,0),"Expiry Date"));n(l,14,0,t),n(l,17,0,l.parent.context.$implicit.expire_date)}))}function O(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.qb(16777216,null,null,1,null,w)),o.Ab(2,16384,null,0,g.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,"1"==l.context.$implicit.type)}),null)}function y(n){return o.Wb(0,[o.Pb(0,d.a,[c.a]),o.Sb(671088640,1,{infinite:0}),(n()(),o.Bb(2,0,null,null,17,"ion-header",[],null,null,null,f.sb,f.s)),o.Ab(3,49152,null,0,u.D,[o.j,o.p,o.F],null,null),(n()(),o.Bb(4,0,null,0,15,"ion-toolbar",[],null,null,null,f.Zb,f.Z)),o.Ab(5,49152,null,0,u.Eb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(6,0,null,0,3,"ion-menu-button",[["slot","start"]],null,null,null,f.Db,f.E)),o.Ab(7,49152,null,0,u.T,[o.j,o.p,o.F],null,null),(n()(),o.Bb(8,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,f.tb,f.t)),o.Ab(9,49152,null,0,u.E,[o.j,o.p,o.F],{name:[0,"name"]},null),(n()(),o.Bb(10,0,null,0,3,"ion-title",[],null,null,null,f.Xb,f.X)),o.Ab(11,49152,null,0,u.Cb,[o.j,o.p,o.F],null,null),(n()(),o.Ub(12,0,[" "," "])),o.Qb(13,1),(n()(),o.Bb(14,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,f.fb,f.f)),o.Ab(15,49152,null,0,u.n,[o.j,o.p,o.F],null,null),(n()(),o.Bb(16,0,null,0,3,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.refreshPage()&&o),o}),f.eb,f.e)),o.Ab(17,49152,null,0,u.m,[o.j,o.p,o.F],{fill:[0,"fill"]},null),(n()(),o.Bb(18,0,null,0,1,"ion-icon",[["name","refresh"]],null,null,null,f.tb,f.t)),o.Ab(19,49152,null,0,u.E,[o.j,o.p,o.F],{name:[0,"name"]},null),(n()(),o.Bb(20,0,null,null,11,"ion-content",[],null,null,null,f.nb,f.n)),o.Ab(21,49152,null,0,u.w,[o.j,o.p,o.F],null,null),(n()(),o.qb(16777216,null,0,1,null,v)),o.Ab(23,16384,null,0,g.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(24,0,null,0,3,"ion-list",[],null,null,null,f.Cb,f.C)),o.Ab(25,49152,null,0,u.Q,[o.j,o.p,o.F],null,null),(n()(),o.qb(16777216,null,0,1,null,O)),o.Ab(27,278528,null,0,g.j,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null),(n()(),o.Bb(28,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(n,l,t){var o=!0;return"ionInfinite"===l&&(o=!1!==n.component.getNotifications()&&o),o}),f.wb,f.v)),o.Ab(29,49152,[[1,4],["infinite",4]],0,u.G,[o.j,o.p,o.F],null,null),(n()(),o.Bb(30,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,f.vb,f.w)),o.Ab(31,49152,null,0,u.H,[o.j,o.p,o.F],null,null)],(function(n,l){var t=l.component;n(l,9,0,"menu"),n(l,17,0,"clear"),n(l,19,0,"refresh"),n(l,23,0,0==t.notifications.length&&0==t.httpRunning),n(l,27,0,t.notifications)}),(function(n,l){var t=o.Vb(l,12,0,n(l,13,0,o.Nb(l,0),"Notifications"));n(l,12,0,t)}))}var B=o.xb("app-notifications",b,(function(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,1,"app-notifications",[],null,null,null,y,m)),o.Ab(1,114688,null,0,b,[u.Lb,c.a,r.a,h.c,e.a,o.g,u.Pb,u.f],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),A=t("s7LF"),M=t("iInd"),F=t("wWlB");t.d(l,"NotificationsPageModuleNgFactory",(function(){return j}));var j=o.yb(s,[],(function(n){return o.Kb([o.Lb(512,o.m,o.jb,[[8,[p.a,B]],[3,o.m],o.D]),o.Lb(4608,g.m,g.l,[o.z,[2,g.v]]),o.Lb(4608,A.m,A.m,[]),o.Lb(4608,u.c,u.c,[o.F,o.g]),o.Lb(4608,u.Kb,u.Kb,[u.c,o.m,o.w]),o.Lb(4608,u.Pb,u.Pb,[u.c,o.m,o.w]),o.Lb(1073742336,g.b,g.b,[]),o.Lb(1073742336,A.l,A.l,[]),o.Lb(1073742336,A.c,A.c,[]),o.Lb(1073742336,u.Gb,u.Gb,[]),o.Lb(1073742336,M.o,M.o,[[2,M.t],[2,M.m]]),o.Lb(1073742336,F.a,F.a,[]),o.Lb(1073742336,s,s,[]),o.Lb(1024,M.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);