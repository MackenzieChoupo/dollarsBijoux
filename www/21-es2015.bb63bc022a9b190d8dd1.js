(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hkgh:function(n,l,e){"use strict";e.r(l);var u=e("8Y7J"),t=e("ZZ/e"),i=e("sf9b"),a=e("KTio"),o=e("UmVP");class r{constructor(n,l,e,u,t,i,a){this.navCtrl=n,this.http=l,this.config=e,this.activatedRoute=u,this.loading=t,this.shared=i,this.applicationRef=a,this.rating=null,this.errorMessage="",this.formData={name:"",email:"",description:""},this.ratingStars=[{value:"1",fill:"star-outline"},{value:"2",fill:"star-outline"},{value:"3",fill:"star-outline"},{value:"4",fill:"star-outline"},{value:"5",fill:"star-outline"}],this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getNonce(),this.formData.name=this.shared.customerData.first_name+" "+this.shared.customerData.last_name,this.formData.email=this.shared.customerData.email}getNonce(){this.loading.show(),this.http.get(this.config.url+"/api/get_nonce/?controller=AppSettings&method=create_product_review").subscribe(n=>{this.nonce=n.nonce,console.log(n),this.loading.hide()})}addComment(){this.loading.show(),this.http.get(this.config.url+"/api/appsettings/create_product_review/?insecure=cool&nonce="+this.nonce+"&author_name="+this.formData.name+"&author_email="+this.formData.email+"&product_id="+this.id+"&author_content="+this.formData.description+"&rate_star="+this.rating+"&user_id="+this.shared.customerData.id).subscribe(n=>{this.loading.hide(),"ok"==n.status&&this.navCtrl.pop(),console.log(n)},n=>{this.errorMessage=n.message})}selectRating(n){this.rating=n;for(let l of this.ratingStars)l.fill=l.value<=n?"star":"star-outline";this.applicationRef.tick()}disbaleButton(){return null==this.rating||""==this.formData.description||""==this.formData.name||""==this.formData.email}ngOnInit(){}}class b{}var s=e("pMnS"),d=e("oBZk"),c=e("taci"),g=e("SVse"),h=e("s7LF"),m=e("IheW"),p=e("iInd"),f=u.zb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{padding-left:10px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{zoom:1.9;color:#d9d027}ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#fafafa}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:100%;margin:0;border:none}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0}"]],data:{}});function C(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,3,"ion-col",[["class","ion-align-self-end"],["size","1"]],null,null,null,d.mb,d.m)),u.Ab(1,49152,null,0,t.v,[u.j,u.p,u.F],{size:[0,"size"]},null),(n()(),u.Bb(2,0,null,0,1,"ion-icon",[],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.selectRating(n.context.$implicit.value)&&u),u}),d.tb,d.t)),u.Ab(3,49152,null,0,t.E,[u.j,u.p,u.F],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"1"),n(l,3,0,l.context.$implicit.fill)}),null)}function v(n){return u.Wb(0,[u.Pb(0,c.a,[o.a]),(n()(),u.Bb(1,0,null,null,13,"ion-header",[],null,null,null,d.sb,d.s)),u.Ab(2,49152,null,0,t.D,[u.j,u.p,u.F],null,null),(n()(),u.Bb(3,0,null,0,11,"ion-toolbar",[],null,null,null,d.Zb,d.Z)),u.Ab(4,49152,null,0,t.Eb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(5,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,d.fb,d.f)),u.Ab(6,49152,null,0,t.n,[u.j,u.p,u.F],null,null),(n()(),u.Bb(7,0,null,0,3,"ion-button",[["fill","clear"],["routerDirection","backward"]],null,null,null,d.eb,d.e)),u.Ab(8,49152,null,0,t.m,[u.j,u.p,u.F],{fill:[0,"fill"],routerDirection:[1,"routerDirection"]},null),(n()(),u.Bb(9,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","icon-only"]],null,null,null,d.tb,d.t)),u.Ab(10,49152,null,0,t.E,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(11,0,null,0,3,"ion-title",[],null,null,null,d.Xb,d.X)),u.Ab(12,49152,null,0,t.Cb,[u.j,u.p,u.F],null,null),(n()(),u.Ub(13,0,["",""])),u.Qb(14,1),(n()(),u.Bb(15,0,null,null,56,"ion-content",[["class","ion-no-padding"]],null,null,null,d.nb,d.n)),u.Ab(16,49152,null,0,t.w,[u.j,u.p,u.F],null,null),(n()(),u.Bb(17,0,null,0,2,"h4",[],null,null,null,null,null)),(n()(),u.Ub(18,null,["",""])),u.Qb(19,1),(n()(),u.Bb(20,0,null,0,10,"ion-grid",[["class","ion-no-padding"]],null,null,null,d.rb,d.r)),u.Ab(21,49152,null,0,t.C,[u.j,u.p,u.F],null,null),(n()(),u.Bb(22,0,null,0,8,"ion-row",[["class","ion-no-padding"]],null,null,null,d.Jb,d.J)),u.Ab(23,49152,null,0,t.lb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(24,0,null,0,4,"ion-col",[["class","ion-no-padding"],["size","3.6"]],null,null,null,d.mb,d.m)),u.Ab(25,49152,null,0,t.v,[u.j,u.p,u.F],{size:[0,"size"]},null),(n()(),u.Bb(26,0,null,0,2,"h5",[],null,null,null,null,null)),(n()(),u.Ub(27,null,["",""])),u.Qb(28,1),(n()(),u.qb(16777216,null,0,1,null,C)),u.Ab(30,278528,null,0,g.j,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null),(n()(),u.Bb(31,0,null,0,40,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0;return"submit"===l&&(t=!1!==u.Nb(n,33).onSubmit(e)&&t),"reset"===l&&(t=!1!==u.Nb(n,33).onReset()&&t),t}),null,null)),u.Ab(32,16384,null,0,h.n,[],null,null),u.Ab(33,4210688,null,0,h.i,[[8,null],[8,null]],null,null),u.Rb(2048,null,h.a,null,[h.i]),u.Ab(35,16384,null,0,h.h,[[4,h.a]],null,null),(n()(),u.Bb(36,0,null,null,11,"ion-item",[],null,null,null,d.Ab,d.y)),u.Ab(37,49152,null,0,t.J,[u.j,u.p,u.F],null,null),(n()(),u.Bb(38,0,null,0,9,"ion-input",[["name","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,i=n.component;return"ionBlur"===l&&(t=!1!==u.Nb(n,41)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Nb(n,41)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(i.formData.name=e)&&t),t}),d.xb,d.x)),u.Ab(39,16384,null,0,h.k,[],{required:[0,"required"]},null),u.Rb(1024,null,h.d,(function(n){return[n]}),[h.k]),u.Ab(41,16384,null,0,t.Tb,[u.p],null,null),u.Rb(1024,null,h.e,(function(n){return[n]}),[t.Tb]),u.Ab(43,671744,null,0,h.j,[[2,h.a],[6,h.d],[8,null],[6,h.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,h.f,null,[h.j]),u.Ab(45,16384,null,0,h.g,[[4,h.f]],null,null),u.Ab(46,49152,null,0,t.I,[u.j,u.p,u.F],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),u.Qb(47,1),(n()(),u.Bb(48,0,null,null,11,"ion-item",[],null,null,null,d.Ab,d.y)),u.Ab(49,49152,null,0,t.J,[u.j,u.p,u.F],null,null),(n()(),u.Bb(50,0,null,0,9,"ion-input",[["name","email"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,i=n.component;return"ionBlur"===l&&(t=!1!==u.Nb(n,53)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Nb(n,53)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(i.formData.email=e)&&t),t}),d.xb,d.x)),u.Ab(51,16384,null,0,h.k,[],{required:[0,"required"]},null),u.Rb(1024,null,h.d,(function(n){return[n]}),[h.k]),u.Ab(53,16384,null,0,t.Tb,[u.p],null,null),u.Rb(1024,null,h.e,(function(n){return[n]}),[t.Tb]),u.Ab(55,671744,null,0,h.j,[[2,h.a],[6,h.d],[8,null],[6,h.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,h.f,null,[h.j]),u.Ab(57,16384,null,0,h.g,[[4,h.f]],null,null),u.Ab(58,49152,null,0,t.I,[u.j,u.p,u.F],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],type:[3,"type"]},null),u.Qb(59,1),(n()(),u.Bb(60,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,d.Ab,d.y)),u.Ab(61,49152,null,0,t.J,[u.j,u.p,u.F],{lines:[0,"lines"]},null),(n()(),u.Bb(62,0,null,0,9,"ion-textarea",[["name","desc"],["required",""],["rows","17"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var t=!0,i=n.component;return"ionBlur"===l&&(t=!1!==u.Nb(n,65)._handleBlurEvent(e.target)&&t),"ionChange"===l&&(t=!1!==u.Nb(n,65)._handleInputEvent(e.target)&&t),"ngModelChange"===l&&(t=!1!==(i.formData.description=e)&&t),t}),d.Vb,d.V)),u.Ab(63,16384,null,0,h.k,[],{required:[0,"required"]},null),u.Rb(1024,null,h.d,(function(n){return[n]}),[h.k]),u.Ab(65,16384,null,0,t.Tb,[u.p],null,null),u.Rb(1024,null,h.e,(function(n){return[n]}),[t.Tb]),u.Ab(67,671744,null,0,h.j,[[2,h.a],[6,h.d],[8,null],[6,h.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u.Rb(2048,null,h.f,null,[h.j]),u.Ab(69,16384,null,0,h.g,[[4,h.f]],null,null),u.Ab(70,49152,null,0,t.Ab,[u.j,u.p,u.F],{name:[0,"name"],placeholder:[1,"placeholder"],required:[2,"required"],rows:[3,"rows"]},null),u.Qb(71,1),(n()(),u.Bb(72,0,null,null,5,"ion-footer",[],null,null,null,d.qb,d.q)),u.Ab(73,49152,null,0,t.B,[u.j,u.p,u.F],null,null),(n()(),u.Bb(74,0,null,0,3,"ion-button",[["color","secondary"],["expand","full"]],null,[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==n.component.addComment()&&u),u}),d.eb,d.e)),u.Ab(75,49152,null,0,t.m,[u.j,u.p,u.F],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),u.Ub(76,0,[" "," "])),u.Qb(77,1)],(function(n,l){var e=l.component;n(l,8,0,"clear","backward"),n(l,10,0,"arrow-back"),n(l,25,0,"3.6"),n(l,30,0,e.ratingStars),n(l,39,0,""),n(l,43,0,"name",e.formData.name);var t=u.Fb(1,"",u.Vb(l,46,1,n(l,47,0,u.Nb(l,0),"Name")),"");n(l,46,0,"name",t,"","text"),n(l,51,0,""),n(l,55,0,"email",e.formData.email);var i=u.Fb(1,"",u.Vb(l,58,1,n(l,59,0,u.Nb(l,0),"Email")),"");n(l,58,0,"email",i,"","text"),n(l,61,0,"none"),n(l,63,0,""),n(l,67,0,"desc",e.formData.description);var a=u.Fb(1,"",u.Vb(l,70,1,n(l,71,0,u.Nb(l,0),"Enter a description")),"");n(l,70,0,"desc",a,"","17"),n(l,75,0,"secondary",e.disbaleButton(),"full")}),(function(n,l){var e=u.Vb(l,13,0,n(l,14,0,u.Nb(l,0),"Write a review"));n(l,13,0,e);var t=u.Vb(l,18,0,n(l,19,0,u.Nb(l,0),"Comment about this product"));n(l,18,0,t);var i=u.Vb(l,27,0,n(l,28,0,u.Nb(l,0),"Your Rating:"));n(l,27,0,i),n(l,31,0,u.Nb(l,35).ngClassUntouched,u.Nb(l,35).ngClassTouched,u.Nb(l,35).ngClassPristine,u.Nb(l,35).ngClassDirty,u.Nb(l,35).ngClassValid,u.Nb(l,35).ngClassInvalid,u.Nb(l,35).ngClassPending),n(l,38,0,u.Nb(l,39).required?"":null,u.Nb(l,45).ngClassUntouched,u.Nb(l,45).ngClassTouched,u.Nb(l,45).ngClassPristine,u.Nb(l,45).ngClassDirty,u.Nb(l,45).ngClassValid,u.Nb(l,45).ngClassInvalid,u.Nb(l,45).ngClassPending),n(l,50,0,u.Nb(l,51).required?"":null,u.Nb(l,57).ngClassUntouched,u.Nb(l,57).ngClassTouched,u.Nb(l,57).ngClassPristine,u.Nb(l,57).ngClassDirty,u.Nb(l,57).ngClassValid,u.Nb(l,57).ngClassInvalid,u.Nb(l,57).ngClassPending),n(l,62,0,u.Nb(l,63).required?"":null,u.Nb(l,69).ngClassUntouched,u.Nb(l,69).ngClassTouched,u.Nb(l,69).ngClassPristine,u.Nb(l,69).ngClassDirty,u.Nb(l,69).ngClassValid,u.Nb(l,69).ngClassInvalid,u.Nb(l,69).ngClassPending);var a=u.Vb(l,76,0,n(l,77,0,u.Nb(l,0),"Post Comment"));n(l,76,0,a)}))}function N(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,1,"app-add-review",[],null,null,null,v,f)),u.Ab(1,114688,null,0,r,[t.Lb,m.c,i.a,p.a,a.a,o.a,u.g],null,null)],(function(n,l){n(l,1,0)}),null)}var A=u.xb("app-add-review",r,N,{},{},[]),B=e("wWlB");e.d(l,"AddReviewPageModuleNgFactory",(function(){return _}));var _=u.yb(b,[],(function(n){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[s.a,A]],[3,u.m],u.D]),u.Lb(4608,g.m,g.l,[u.z,[2,g.v]]),u.Lb(4608,h.m,h.m,[]),u.Lb(4608,t.c,t.c,[u.F,u.g]),u.Lb(4608,t.Kb,t.Kb,[t.c,u.m,u.w]),u.Lb(4608,t.Pb,t.Pb,[t.c,u.m,u.w]),u.Lb(1073742336,g.b,g.b,[]),u.Lb(1073742336,h.l,h.l,[]),u.Lb(1073742336,h.c,h.c,[]),u.Lb(1073742336,t.Gb,t.Gb,[]),u.Lb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),u.Lb(1073742336,B.a,B.a,[]),u.Lb(1073742336,b,b,[]),u.Lb(1024,p.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);