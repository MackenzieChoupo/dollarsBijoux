(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"3F3D":function(n,l,t){"use strict";t.r(l);var u=t("8Y7J"),i=t("mrSG"),o=t("ZZ/e"),e=t("sf9b"),a=t("KTio"),r=t("UmVP"),c=t("8riC"),b=t("1JF4"),s=t("9B/o"),g=t("CjQN"),p=t("pHsZ"),d=t("lhE+"),h=t("51Bv"),m=t("kxD5");class f{constructor(n,l,t,u,i,o,e,a,r,c,b,s,g){this.navCtrl=n,this.modalCtrl=l,this.config=t,this.storage=u,this.loading=i,this.http=o,this.events=e,this.shared=a,this.iab=r,this.socialSharing=c,this.plt=b,this.appVersion=s,this.oneSignal=g,this.setting={}}ionViewDidEnter(){}updateSetting(){console.log(this.setting),this.storage.set("setting",this.setting)}openLoginPage(){return i.b(this,void 0,void 0,(function*(){let n=yield this.modalCtrl.create({component:p.a,componentProps:{hideGuestLogin:!0}});return yield n.present()}))}logOut(){this.shared.logOut()}openAccountPage(){this.navCtrl.navigateRoot("my-account")}openSite(){this.loading.autoHide(2e3),this.iab.create(this.config.siteUrl,"blank")}onOffPushNotification(n){this.oneSignal.setSubscription(0!=n),this.updateSetting()}hideShowFooterMenu(){this.events.publish("setting",this.setting),this.updateSetting()}hideShowCartButton(){this.events.publish("setting",this.setting),this.updateSetting()}showModal(n){return i.b(this,void 0,void 0,(function*(){if("privacyPolicy"==n){let n=yield this.modalCtrl.create({component:d.a});return yield n.present()}if("termServices"==n){let n=yield this.modalCtrl.create({component:h.a});return yield n.present()}{let n=yield this.modalCtrl.create({component:m.a});return yield n.present()}}))}ionViewDidLoad(){this.storage.get("setting").then(n=>{null!=n||null!=n?this.setting=n:(this.setting.localNotification=!0,this.setting.notification=!0,this.setting.cartButton=!0,this.setting.footer=!0)})}rateUs(){this.loading.autoHide(2e3),this.plt.is("ios")?this.iab.create(this.config.packgeName.toString(),"_system"):this.plt.is("android")&&this.appVersion.getPackageName().then(n=>{this.iab.create("https://play.google.com/store/apps/details?id="+n,"_system")})}share(){this.loading.autoHide(2e3),this.plt.is("ios")?this.socialSharing.share(this.config.packgeName.toString(),this.config.appName,this.config.packgeName.toString(),this.config.packgeName.toString()):this.plt.is("android")&&this.appVersion.getPackageName().then(n=>{this.socialSharing.share(this.config.appName,this.config.appName,"","https://play.google.com/store/apps/details?id="+n)})}checkAvatar(){return this.shared.checkAvatar()}getNameFirstLetter(){return this.shared.getNameFirstLetter()}ngOnInit(){}}class C{}var P=t("pMnS"),B=t("oBZk"),A=t("taci"),v=t("iInd"),M=t("SVse"),k=t("s7LF"),O=t("xgBC"),_=t("IheW"),w=u.zb({encapsulation:0,styles:[[".setting-page[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute!important;opacity:.3%!important;top:-100px}.setting-page[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background:var(--ion-color-primary);width:100%;height:200px}.setting-page[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{position:absolute;z-index:1;top:0;width:100%;color:#fff;padding-top:20px;padding-bottom:0}.setting-page[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{text-align:center}.setting-page[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:64px;height:64px}.setting-page[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:10px;font-weight:700}.setting-page[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:8px}.setting-page[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:30px;--background:var(--ion-color-light);color:var(--ion-color-primary-shade)}.setting-page[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:#fafafa;padding-bottom:0}.setting-page[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:white;padding-bottom:0}.setting-page[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{padding-right:0;--background-checked:var(--ion-color-primary-tint);--handle-background-checked:var(--ion-color-primary)}.setting-page[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#000}.setting-page[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#000}.setting-page[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]:last-child{padding-top:0}.setting-page[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;margin:0;height:30px}#nametxt[_ngcontent-%COMP%]{height:64px;width:64px;border-radius:100px;background:var(--ion-color-secondary);font-size:35px;line-height:60px;text-transform:uppercase}.avatar-icon[_ngcontent-%COMP%]{font-size:64px!important;color:#d3d3d3}.row-img[_ngcontent-%COMP%]{opacity:.1!important}"]],data:{}});function F(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,5,"ion-col",[["class","ion-no-padding"]],null,null,null,B.mb,B.m)),u.Ab(1,49152,null,0,o.v,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,3,"ion-avatar",[],null,null,null,B.bb,B.b)),u.Ab(3,49152,null,0,o.h,[u.j,u.p,u.F],null,null),(n()(),u.Bb(4,0,null,0,1,"ion-icon",[["class","avatar-icon"],["name","contact"]],null,null,null,B.tb,B.t)),u.Ab(5,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(n,l){n(l,5,0,"contact")}),null)}function j(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,5,"ion-col",[["class","ion-no-padding"]],null,null,null,B.mb,B.m)),u.Ab(1,49152,null,0,o.v,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,3,"ion-avatar",[],null,null,null,B.bb,B.b)),u.Ab(3,49152,null,0,o.h,[u.j,u.p,u.F],null,null),(n()(),u.Bb(4,0,null,0,1,"div",[["id","nametxt"]],null,null,null,null,null)),(n()(),u.Ub(5,null,["",""]))],null,(function(n,l){n(l,5,0,l.component.getNameFirstLetter())}))}function y(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,5,"ion-row",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.openLoginPage()&&u),u}),B.Jb,B.J)),u.Ab(1,49152,null,0,o.lb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,3,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,B.mb,B.m)),u.Ab(3,49152,null,0,o.v,[u.j,u.p,u.F],{size:[0,"size"]},null),(n()(),u.Bb(4,0,null,0,1,"h2",[["style","font-size: 15px;"]],null,null,null,null,null)),(n()(),u.Ub(5,null,["",""]))],(function(n,l){n(l,3,0,"12")}),(function(n,l){n(l,5,0,"Connectez-vous ou Cr\xe9er un compte")}))}function N(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,11,"ion-row",[],null,null,null,B.Jb,B.J)),u.Ab(1,49152,null,0,o.lb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,9,"ion-col",[["class","ion-no-padding"],["size","12"]],null,null,null,B.mb,B.m)),u.Ab(3,49152,null,0,o.v,[u.j,u.p,u.F],{size:[0,"size"]},null),(n()(),u.Bb(4,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),u.Ub(5,null,["",""])),(n()(),u.Bb(6,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),u.Ub(7,null,["",""])),(n()(),u.Bb(8,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.openAccountPage()&&u),u}),B.eb,B.e)),u.Ab(9,49152,null,0,o.m,[u.j,u.p,u.F],null,null),(n()(),u.Ub(10,0,["",""])),u.Qb(11,1)],(function(n,l){n(l,3,0,"12")}),(function(n,l){var t=l.component;n(l,5,0,t.shared.customerData.first_name+"\xa0"+t.shared.customerData.last_name),n(l,7,0,t.shared.customerData.email);var i=u.Vb(l,10,0,n(l,11,0,u.Nb(l.parent,0),"Editer le profil"));n(l,10,0,i)}))}function L(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,5,"ion-item",[["lines","none"]],null,null,null,B.Ab,B.y)),u.Ab(1,49152,null,0,o.J,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(n()(),u.Bb(2,0,null,0,3,"ion-button",[["color","secondary"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.logOut()&&u),u}),B.eb,B.e)),u.Ab(3,49152,null,0,o.m,[u.j,u.p,u.F],{color:[0,"color"]},null),(n()(),u.Ub(4,0,["",""])),u.Qb(5,1)],(function(n,l){n(l,1,0,"none"),n(l,3,0,"secondary")}),(function(n,l){var t=u.Vb(l,4,0,n(l,5,0,u.Nb(l.parent,0),"deconnexion"));n(l,4,0,t)}))}function S(n){return u.Wb(0,[u.Pb(0,A.a,[r.a]),(n()(),u.Bb(1,0,null,null,28,"ion-header",[],null,null,null,B.sb,B.s)),u.Ab(2,49152,null,0,o.D,[u.j,u.p,u.F],null,null),(n()(),u.Bb(3,0,null,0,26,"ion-toolbar",[],null,null,null,B.Zb,B.Z)),u.Ab(4,49152,null,0,o.Eb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(5,0,null,0,3,"ion-menu-button",[["slot","start"]],null,null,null,B.Db,B.E)),u.Ab(6,49152,null,0,o.T,[u.j,u.p,u.F],null,null),(n()(),u.Bb(7,0,null,0,1,"ion-icon",[["name","menu"]],null,null,null,B.tb,B.t)),u.Ab(8,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(9,0,null,0,3,"ion-title",[],null,null,null,B.Xb,B.X)),u.Ab(10,49152,null,0,o.Cb,[u.j,u.p,u.F],null,null),(n()(),u.Ub(11,0,[" "," "])),u.Qb(12,1),(n()(),u.Bb(13,0,null,0,16,"ion-buttons",[["slot","end"]],null,null,null,B.fb,B.f)),u.Ab(14,49152,null,0,o.n,[u.j,u.p,u.F],null,null),(n()(),u.Bb(15,0,null,0,5,"ion-button",[["fill","clear"],["routerDirection","forward"],["routerLink","/search"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==u.Nb(n,17).onClick()&&i),"click"===l&&(i=!1!==u.Nb(n,18).onClick(t)&&i),i}),B.eb,B.e)),u.Ab(16,49152,null,0,o.m,[u.j,u.p,u.F],{fill:[0,"fill"],routerDirection:[1,"routerDirection"]},null),u.Ab(17,16384,null,0,v.n,[v.m,v.a,[8,null],u.K,u.p],{routerLink:[0,"routerLink"]},null),u.Ab(18,737280,null,0,o.Rb,[M.i,o.Lb,u.p,v.m,[2,v.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),u.Bb(19,0,null,0,1,"ion-icon",[["name","search"],["slot","icon-only"]],null,null,null,B.tb,B.t)),u.Ab(20,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(21,0,null,0,8,"ion-button",[["fill","clear"],["routerDirection","forward"],["routerLink","/cart"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==u.Nb(n,23).onClick()&&i),"click"===l&&(i=!1!==u.Nb(n,24).onClick(t)&&i),i}),B.eb,B.e)),u.Ab(22,49152,null,0,o.m,[u.j,u.p,u.F],{fill:[0,"fill"],routerDirection:[1,"routerDirection"]},null),u.Ab(23,16384,null,0,v.n,[v.m,v.a,[8,null],u.K,u.p],{routerLink:[0,"routerLink"]},null),u.Ab(24,737280,null,0,o.Rb,[M.i,o.Lb,u.p,v.m,[2,v.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),u.Bb(25,0,null,0,1,"ion-icon",[["name","basket"]],null,null,null,B.tb,B.t)),u.Ab(26,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(27,0,null,0,2,"ion-badge",[["color","secondary"]],null,null,null,B.db,B.d)),u.Ab(28,49152,null,0,o.l,[u.j,u.p,u.F],{color:[0,"color"]},null),(n()(),u.Ub(29,0,["",""])),(n()(),u.Bb(30,0,null,null,84,"ion-content",[["class","setting-page"]],null,null,null,B.nb,B.n)),u.Ab(31,49152,null,0,o.w,[u.j,u.p,u.F],null,null),(n()(),u.Bb(32,0,null,0,2,"ion-row",[["class","row-img"]],null,null,null,B.Jb,B.J)),u.Ab(33,49152,null,0,o.lb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(34,0,null,0,0,"img",[["src","assets/icons_stripe.svg"]],null,null,null,null,null)),(n()(),u.Bb(35,0,null,0,2,"ion-row",[],null,null,null,B.Jb,B.J)),u.Ab(36,49152,null,0,o.lb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(37,0,null,0,0,"div",[],null,null,null,null,null)),(n()(),u.Bb(38,0,null,0,11,"ion-grid",[["class","ion-padding"]],null,null,null,B.rb,B.r)),u.Ab(39,49152,null,0,o.C,[u.j,u.p,u.F],null,null),(n()(),u.Bb(40,0,null,0,5,"ion-row",[["size","12"]],null,null,null,B.Jb,B.J)),u.Ab(41,49152,null,0,o.lb,[u.j,u.p,u.F],null,null),(n()(),u.qb(16777216,null,0,1,null,F)),u.Ab(43,16384,null,0,M.k,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.qb(16777216,null,0,1,null,j)),u.Ab(45,16384,null,0,M.k,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.qb(16777216,null,0,1,null,y)),u.Ab(47,16384,null,0,M.k,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.qb(16777216,null,0,1,null,N)),u.Ab(49,16384,null,0,M.k,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.Bb(50,0,null,0,15,"ion-list",[["class","ion-padding"]],null,null,null,B.Cb,B.C)),u.Ab(51,49152,null,0,o.Q,[u.j,u.p,u.F],null,null),(n()(),u.Bb(52,0,null,0,13,"ion-item",[["lines","none"]],null,null,null,B.Ab,B.y)),u.Ab(53,49152,null,0,o.J,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(n()(),u.Bb(54,0,null,0,4,"ion-label",[],null,null,null,B.Bb,B.B)),u.Ab(55,49152,null,0,o.P,[u.j,u.p,u.F],null,null),(n()(),u.Bb(56,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Ub(57,null,["",""])),u.Qb(58,1),(n()(),u.Bb(59,0,null,0,6,"ion-toggle",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==u.Nb(n,60)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==u.Nb(n,60)._handleIonChange(t.target)&&i),"ngModelChange"===l&&(i=!1!==(o.setting.notification=t)&&i),"ionChange"===l&&(i=!1!==o.onOffPushNotification(o.setting.notification)&&i),i}),B.Yb,B.Y)),u.Ab(60,16384,null,0,o.d,[u.p],null,null),u.Rb(1024,null,k.e,(function(n){return[n]}),[o.d]),u.Ab(62,671744,null,0,k.j,[[8,null],[8,null],[8,null],[6,k.e]],{model:[0,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,k.f,null,[k.j]),u.Ab(64,16384,null,0,k.g,[[4,k.f]],null,null),u.Ab(65,49152,null,0,o.Db,[u.j,u.p,u.F],null,null),(n()(),u.Bb(66,0,null,0,46,"ion-list",[["class","ion-padding"]],null,null,null,B.Cb,B.C)),u.Ab(67,49152,null,0,o.Q,[u.j,u.p,u.F],null,null),(n()(),u.Bb(68,0,null,0,8,"ion-item",[["lines","full"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.openSite()&&u),u}),B.Ab,B.y)),u.Ab(69,49152,null,0,o.J,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(n()(),u.Bb(70,0,null,0,4,"ion-label",[],null,null,null,B.Bb,B.B)),u.Ab(71,49152,null,0,o.P,[u.j,u.p,u.F],null,null),(n()(),u.Bb(72,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Ub(73,null,["",""])),u.Qb(74,1),(n()(),u.Bb(75,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,B.tb,B.t)),u.Ab(76,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(77,0,null,0,8,"ion-item",[["lines","full"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.showModal("privacyPolicy")&&u),u}),B.Ab,B.y)),u.Ab(78,49152,null,0,o.J,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(n()(),u.Bb(79,0,null,0,4,"ion-label",[],null,null,null,B.Bb,B.B)),u.Ab(80,49152,null,0,o.P,[u.j,u.p,u.F],null,null),(n()(),u.Bb(81,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Ub(82,null,["",""])),u.Qb(83,1),(n()(),u.Bb(84,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,B.tb,B.t)),u.Ab(85,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(86,0,null,0,8,"ion-item",[["lines","full"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.showModal("refundPolicy")&&u),u}),B.Ab,B.y)),u.Ab(87,49152,null,0,o.J,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(n()(),u.Bb(88,0,null,0,4,"ion-label",[],null,null,null,B.Bb,B.B)),u.Ab(89,49152,null,0,o.P,[u.j,u.p,u.F],null,null),(n()(),u.Bb(90,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Ub(91,null,["",""])),u.Qb(92,1),(n()(),u.Bb(93,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,B.tb,B.t)),u.Ab(94,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(95,0,null,0,8,"ion-item",[["lines","full"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.showModal("termServices")&&u),u}),B.Ab,B.y)),u.Ab(96,49152,null,0,o.J,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(n()(),u.Bb(97,0,null,0,4,"ion-label",[],null,null,null,B.Bb,B.B)),u.Ab(98,49152,null,0,o.P,[u.j,u.p,u.F],null,null),(n()(),u.Bb(99,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Ub(100,null,["",""])),u.Qb(101,1),(n()(),u.Bb(102,0,null,0,1,"ion-icon",[["name","arrow-forward"],["slot","end"]],null,null,null,B.tb,B.t)),u.Ab(103,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(104,0,null,0,8,"ion-item",[["lines","full"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.share()&&u),u}),B.Ab,B.y)),u.Ab(105,49152,null,0,o.J,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(n()(),u.Bb(106,0,null,0,4,"ion-label",[],null,null,null,B.Bb,B.B)),u.Ab(107,49152,null,0,o.P,[u.j,u.p,u.F],null,null),(n()(),u.Bb(108,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.Ub(109,null,["",""])),u.Qb(110,1),(n()(),u.Bb(111,0,null,0,1,"ion-icon",[["name","share"],["slot","end"]],null,null,null,B.tb,B.t)),u.Ab(112,49152,null,0,o.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.qb(16777216,null,0,1,null,L)),u.Ab(114,16384,null,0,M.k,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.Ub(-1,null,["\n\xce"]))],(function(n,l){var t=l.component;n(l,8,0,"menu"),n(l,16,0,"clear","forward"),n(l,17,0,"/search"),n(l,18,0,"forward"),n(l,20,0,"search"),n(l,22,0,"clear","forward"),n(l,23,0,"/cart"),n(l,24,0,"forward"),n(l,26,0,"basket"),n(l,28,0,"secondary"),n(l,43,0,"false"==t.checkAvatar()),n(l,45,0,"false"!=t.checkAvatar()),n(l,47,0,null==t.shared.customerData.id),n(l,49,0,null!=t.shared.customerData.id),n(l,53,0,"none"),n(l,62,0,t.setting.notification),n(l,69,0,"full"),n(l,76,0,"arrow-forward"),n(l,78,0,"full"),n(l,85,0,"arrow-forward"),n(l,87,0,"full"),n(l,94,0,"arrow-forward"),n(l,96,0,"full"),n(l,103,0,"arrow-forward"),n(l,105,0,"full"),n(l,112,0,"share"),n(l,114,0,null!=t.shared.customerData.id)}),(function(n,l){var t=l.component,i=u.Vb(l,11,0,n(l,12,0,u.Nb(l,0),"R\xe9glages"));n(l,11,0,i),n(l,29,0,t.shared.cartTotalItems());var o=u.Vb(l,57,0,n(l,58,0,u.Nb(l,0),"Activer/d\xe9sactiver les notifications"));n(l,57,0,o),n(l,59,0,u.Nb(l,64).ngClassUntouched,u.Nb(l,64).ngClassTouched,u.Nb(l,64).ngClassPristine,u.Nb(l,64).ngClassDirty,u.Nb(l,64).ngClassValid,u.Nb(l,64).ngClassInvalid,u.Nb(l,64).ngClassPending);var e=u.Vb(l,73,0,n(l,74,0,u.Nb(l,0),"Site officiel"));n(l,73,0,e);var a=u.Vb(l,82,0,n(l,83,0,u.Nb(l,0),"Politique de confidentialit\xe9"));n(l,82,0,a);var r=u.Vb(l,91,0,n(l,92,0,u.Nb(l,0),"Politique de remboursement"));n(l,91,0,r);var c=u.Vb(l,100,0,n(l,101,0,u.Nb(l,0),"Termes et services"));n(l,100,0,c);var b=u.Vb(l,109,0,n(l,110,0,u.Nb(l,0),"Partager"));n(l,109,0,b)}))}function x(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,1,"app-settings",[],null,null,null,S,w)),u.Ab(1,114688,null,0,f,[o.Lb,o.Kb,e.a,O.b,a.a,_.c,o.f,r.a,s.a,g.a,o.Ob,c.a,b.a],null,null)],(function(n,l){n(l,1,0)}),null)}var D=u.xb("app-settings",f,x,{},{},[]),J=t("wWlB");t.d(l,"SettingsPageModuleNgFactory",(function(){return U}));var U=u.yb(C,[],(function(n){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[P.a,D]],[3,u.m],u.D]),u.Lb(4608,M.m,M.l,[u.z,[2,M.v]]),u.Lb(4608,k.m,k.m,[]),u.Lb(4608,o.c,o.c,[u.F,u.g]),u.Lb(4608,o.Kb,o.Kb,[o.c,u.m,u.w]),u.Lb(4608,o.Pb,o.Pb,[o.c,u.m,u.w]),u.Lb(1073742336,M.b,M.b,[]),u.Lb(1073742336,k.l,k.l,[]),u.Lb(1073742336,k.c,k.c,[]),u.Lb(1073742336,o.Gb,o.Gb,[]),u.Lb(1073742336,J.a,J.a,[]),u.Lb(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),u.Lb(1073742336,C,C,[]),u.Lb(1024,v.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);