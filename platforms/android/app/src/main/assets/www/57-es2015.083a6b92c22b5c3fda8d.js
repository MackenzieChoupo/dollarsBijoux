(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{q8rz:function(n,l,t){"use strict";t.r(l);var i=t("8Y7J"),o=t("ZZ/e"),u=t("sf9b"),e=t("KTio"),a=t("UmVP"),c=t("Z4xi");class r{constructor(n,l,t,i,o,u,e,a){this.navCtrl=n,this.activatedRoute=l,this.config=t,this.loading=i,this.http=o,this.applicationRef=u,this.emailComposer=e,this.shared=a,this.page=1,this.name="",this.email="",this.id=null,this.rating=null,this.gravatar=null,this.products=[];let c=this.getData(this.activatedRoute.snapshot.paramMap.get("id"));null!=c.user_email&&(this.email=c.user_email),c.email&&(this.email=c.email),c.rating&&(this.rating=c.rating),c.ID&&(this.id=c.ID),c.id&&(this.id=c.id),c.display_name?(this.name=c.display_name,this.banner=!1):(this.name=c.first_name+" "+c.last_name,this.banner=c.banner,this.gravatar=c.gravatar),this.config.showWcVendorInfo&&(console.log(c),c.meta?this.name=c.meta.pv_shop_name:c.first_name?this.name=c.first_name+" "+c.last_name:c.display_name&&(this.name=c.display_name),c.user_email&&(this.email=c.user_email),c.user_id&&(this.id=c.user_id),this.banner=c.banner),this.getProducts()}getData(n){let l;return this.shared.storePageData.forEach(t=>{t.id&&t.id==n&&(l=t),t.ID&&t.ID==n&&(l=t),t.user_id&&t.user_id==n&&(l=t)}),l}getProducts(){1==this.page&&this.loading.show(),this.config.getWithUrl(this.config.url+"/api/appsettings/ionic_vendor_products/?insecure=cool&post_author="+this.id+"&page="+this.page).then(n=>{this.config.getWoo("products?include="+n.data+"&status=publish").then(n=>{1==this.page&&this.loading.hide(),this.infinite.complete();let l=n;if(console.log(l),0!=l.length){this.page++;for(let n of l)this.products.push(n)}(0==l.length||l.length<10)&&(this.infinite.disabled=!0),this.applicationRef.tick()})})}contactUs(){this.emailComposer.open({to:this.email,subject:"your title",body:"your message"})}ngOnInit(){}}class s{}var b=t("pMnS"),g=t("oBZk"),p=t("0rNO"),m=t("IH98"),h=t("xgBC"),_=t("taci"),d=t("SVse"),f=t("iInd"),C=t("IheW"),P=i.zb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:var(--ion-color-primary);margin-bottom:5px;padding-bottom:0!important}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{--background:transparent}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-top:0;margin-bottom:15px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .bing-img[_ngcontent-%COMP%]{padding:0 60px}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]{position:relative;text-align:center}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{background-color:transparent}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{padding-right:0}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin-right:0;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{min-width:80px;min-height:80px;margin-bottom:15px;margin-left:auto;margin-right:auto}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{color:var(--ion-color-light);font-size:100px;margin-top:-5px}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;height:80px;width:80px}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#fff;margin-top:0;margin-bottom:0}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;white-space:normal;font-size:14px;margin-top:5px;margin-bottom:15px}ion-content[_ngcontent-%COMP%]   .list-avatar[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-bottom:0}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-right:10px}"]],data:{}});function O(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,0,"img",[["class","bing-img"]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,0,0,i.Fb(1,"",l.component.banner,""))}))}function M(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,2,"ion-avatar",[],null,null,null,g.bb,g.b)),i.Ab(1,49152,null,0,o.h,[i.j,i.p,i.F],null,null),(n()(),i.Bb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,2,0,i.Fb(1,"",l.component.gravatar,""))}))}function v(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,3,"p",[["class","icon"]],null,null,null,null,null)),(n()(),i.Bb(1,0,null,null,1,"ion-icon",[["name","star-outline"]],null,null,null,g.tb,g.t)),i.Ab(2,49152,null,0,o.E,[i.j,i.p,i.F],{name:[0,"name"]},null),(n()(),i.Ub(3,null,["\xa0\xa0"," "]))],(function(n,l){n(l,2,0,"star-outline")}),(function(n,l){n(l,3,0,l.component.rating.rating)}))}function B(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,3,"ion-col",[["class","ion-no-padding"],["size","6"]],null,null,null,g.mb,g.m)),i.Ab(1,49152,null,0,o.v,[i.j,i.p,i.F],{size:[0,"size"]},null),(n()(),i.Bb(2,0,null,0,1,"app-product",[],null,null,null,p.b,p.a)),i.Ab(3,638976,null,0,m.a,[u.a,a.a,o.Lb,o.Kb,o.f,h.b,e.a],{p:[0,"p"],type:[1,"type"]},null)],(function(n,l){n(l,1,0,"6"),n(l,3,0,l.context.$implicit,"normal")}),null)}function A(n){return i.Wb(0,[i.Pb(0,_.a,[a.a]),i.Sb(671088640,1,{infinite:0}),(n()(),i.Bb(2,0,null,null,11,"ion-header",[],null,null,null,g.sb,g.s)),i.Ab(3,49152,null,0,o.D,[i.j,i.p,i.F],null,null),(n()(),i.Bb(4,0,null,0,9,"ion-toolbar",[],null,null,null,g.Zb,g.Z)),i.Ab(5,49152,null,0,o.Eb,[i.j,i.p,i.F],null,null),(n()(),i.Bb(6,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,g.fb,g.f)),i.Ab(7,49152,null,0,o.n,[i.j,i.p,i.F],null,null),(n()(),i.Bb(8,0,null,0,2,"ion-back-button",[["icon","arrow-round-back"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==i.Nb(n,10).onClick(t)&&o),o}),g.cb,g.c)),i.Ab(9,49152,null,0,o.i,[i.j,i.p,i.F],{icon:[0,"icon"]},null),i.Ab(10,16384,null,0,o.j,[[2,o.kb],o.Lb],null,null),(n()(),i.Bb(11,0,null,0,2,"ion-title",[],null,null,null,g.Xb,g.X)),i.Ab(12,49152,null,0,o.Cb,[i.j,i.p,i.F],null,null),(n()(),i.Ub(13,0,["",""])),(n()(),i.Bb(14,0,null,null,31,"ion-content",[],null,null,null,g.nb,g.n)),i.Ab(15,49152,null,0,o.w,[i.j,i.p,i.F],null,null),(n()(),i.Bb(16,0,null,0,19,"ion-list",[["class","list-avatar"]],null,null,null,g.Cb,g.C)),i.Ab(17,49152,null,0,o.Q,[i.j,i.p,i.F],null,null),(n()(),i.qb(16777216,null,0,1,null,O)),i.Ab(19,16384,null,0,d.k,[i.W,i.S],{ngIf:[0,"ngIf"]},null),(n()(),i.Bb(20,0,null,0,15,"ion-item",[["class","ion-no-padding ion-text-center"]],null,null,null,g.Ab,g.y)),i.Ab(21,49152,null,0,o.J,[i.j,i.p,i.F],null,null),(n()(),i.Bb(22,0,null,0,13,"ion-label",[],null,null,null,g.Bb,g.B)),i.Ab(23,49152,null,0,o.P,[i.j,i.p,i.F],null,null),(n()(),i.qb(16777216,null,0,1,null,M)),i.Ab(25,16384,null,0,d.k,[i.W,i.S],{ngIf:[0,"ngIf"]},null),(n()(),i.Bb(26,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),i.Ub(27,null,["",""])),(n()(),i.qb(16777216,null,0,1,null,v)),i.Ab(29,16384,null,0,d.k,[i.W,i.S],{ngIf:[0,"ngIf"]},null),(n()(),i.Bb(30,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),i.Ub(31,null,["",""])),(n()(),i.Bb(32,0,null,0,3,"ion-button",[["color","light"]],null,[[null,"click"]],(function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.contactUs()&&i),i}),g.eb,g.e)),i.Ab(33,49152,null,0,o.m,[i.j,i.p,i.F],{color:[0,"color"]},null),(n()(),i.Ub(34,0,[" "," "])),i.Qb(35,1),(n()(),i.Bb(36,0,null,0,5,"ion-grid",[["class","ion-no-padding"]],null,null,null,g.rb,g.r)),i.Ab(37,49152,null,0,o.C,[i.j,i.p,i.F],null,null),(n()(),i.Bb(38,0,null,0,3,"ion-row",[["class","ion-no-padding"]],null,null,null,g.Jb,g.J)),i.Ab(39,49152,null,0,o.lb,[i.j,i.p,i.F],null,null),(n()(),i.qb(16777216,null,0,1,null,B)),i.Ab(41,278528,null,0,d.j,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null),(n()(),i.Bb(42,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(n,l,t){var i=!0;return"ionInfinite"===l&&(i=!1!==n.component.getProducts()&&i),i}),g.wb,g.v)),i.Ab(43,49152,[[1,4],["infinite",4]],0,o.G,[i.j,i.p,i.F],null,null),(n()(),i.Bb(44,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,g.vb,g.w)),i.Ab(45,49152,null,0,o.H,[i.j,i.p,i.F],null,null)],(function(n,l){var t=l.component;n(l,9,0,"arrow-round-back"),n(l,19,0,0!=t.banner),n(l,25,0,null!=t.gravatar),n(l,29,0,null!=t.rating),n(l,33,0,"light"),n(l,41,0,t.products)}),(function(n,l){var t=l.component;n(l,13,0,t.name),n(l,27,0,t.name),n(l,31,0,t.email);var o=i.Vb(l,34,0,n(l,35,0,i.Nb(l,0),"Contactez nous"));n(l,34,0,o)}))}function F(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,1,"app-store",[],null,null,null,A,P)),i.Ab(1,114688,null,0,r,[o.Lb,f.a,u.a,e.a,C.c,i.g,c.a,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}var w=i.xb("app-store",r,F,{},{},[]),x=t("s7LF"),j=t("wWlB"),k=t("pICD");t.d(l,"StorePageModuleNgFactory",(function(){return L}));var L=i.yb(s,[],(function(n){return i.Kb([i.Lb(512,i.m,i.jb,[[8,[b.a,w]],[3,i.m],i.D]),i.Lb(4608,d.m,d.l,[i.z,[2,d.v]]),i.Lb(4608,x.m,x.m,[]),i.Lb(4608,o.c,o.c,[i.F,i.g]),i.Lb(4608,o.Kb,o.Kb,[o.c,i.m,i.w]),i.Lb(4608,o.Pb,o.Pb,[o.c,i.m,i.w]),i.Lb(1073742336,d.b,d.b,[]),i.Lb(1073742336,x.l,x.l,[]),i.Lb(1073742336,x.c,x.c,[]),i.Lb(1073742336,o.Gb,o.Gb,[]),i.Lb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),i.Lb(1073742336,j.a,j.a,[]),i.Lb(1073742336,k.a,k.a,[]),i.Lb(1073742336,s,s,[]),i.Lb(1024,f.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);