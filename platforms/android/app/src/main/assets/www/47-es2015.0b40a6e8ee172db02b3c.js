(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"0yQ7":function(l,n,i){"use strict";i.r(n);var t=i("8Y7J"),u=i("ZZ/e"),e=i("UmVP"),o=i("sf9b"),s=i("KTio");class a{constructor(l,n,i,t,u,e){this.navCtrl=l,this.http=n,this.shared=i,this.config=t,this.loading=u,this.activatedRoute=e,this.page=1,this.posts=new Array,this.loadingServerData=!0,this.name=this.activatedRoute.snapshot.paramMap.get("name"),this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getPosts()}showPostDetail(l){this.shared.singlePostData=l,this.navCtrl.navigateForward("/news-detail")}getImagePost(l){l.image="assets/placeholder.png",l._links["wp:featuredmedia"]&&this.config.getWithUrl(l._links["wp:featuredmedia"][0].href).then(n=>{l.image=n.source_url})}getPosts(){1==this.page&&(this.loading.show(),this.loadingServerData=!1),this.config.getWithUrl(this.config.getCountryParams(o.a.countryCode)[0]+"/wp-json/wp/v2/posts/?page="+this.page+"&categories="+this.id+"&"+this.config.productsArguments).then(l=>{this.infinite.complete(),1==this.page&&(this.posts=[],this.infinite.disabled=!1,this.loading.hide()),this.page++,l.forEach((l,n)=>{this.getImagePost(l),this.posts.push(l)}),l.length<9&&(this.infinite.disabled=!0),this.loadingServerData=!0},l=>{this.infinite.disabled=!0})}ngOnInit(){}}class b{}var c=i("pMnS"),r=i("oBZk"),p=i("SVse"),h=i("IheW"),g=i("iInd"),m=t.zb({encapsulation:2,styles:[[".news-list-page ion-list ion-item ion-thumbnail{margin-bottom:auto}.news-list-page ion-list ion-item ion-label{margin-top:4px}.news-list-page ion-list ion-item ion-label h2{font-size:16px;font-weight:700;white-space:normal}.news-list-page ion-list ion-item ion-label h2 small{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:14px;color:#747474;font-weight:400;margin-top:5px}.news-list-page ion-list ion-item ion-label h2 small ion-label{padding-left:4px}.news-list-page ion-list ion-item ion-label p p:not(:first-child){display:none}.news-list-page ion-list ion-item ion-label p p:first-child{white-space:normal;line-height:1.4;-webkit-line-clamp:4;display:-webkit-box;box-sizing:border-box;-webkit-box-orient:vertical}"]],data:{}});function d(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,17,"ion-item",[["class","animated fadeIn"],["lines","full"]],null,[[null,"click"]],(function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.showPostDetail(l.context.$implicit)&&t),t}),r.Ab,r.y)),t.Ab(1,49152,null,0,u.J,[t.j,t.p,t.F],{lines:[0,"lines"]},null),(l()(),t.Bb(2,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,r.Wb,r.W)),t.Ab(3,49152,null,0,u.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,1,"ion-img",[],null,null,null,r.ub,r.u)),t.Ab(5,49152,null,0,u.F,[t.j,t.p,t.F],{src:[0,"src"]},null),(l()(),t.Bb(6,0,null,0,11,"ion-label",[],null,null,null,r.Bb,r.B)),t.Ab(7,49152,null,0,u.P,[t.j,t.p,t.F],null,null),(l()(),t.Bb(8,0,null,0,8,"h2",[],null,null,null,null,null)),(l()(),t.Ub(9,null,[""," "])),(l()(),t.Bb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Bb(11,0,null,null,5,"small",[],null,null,null,null,null)),(l()(),t.Bb(12,0,null,null,1,"ion-icon",[["name","clock"]],null,null,null,r.tb,r.t)),t.Ab(13,49152,null,0,u.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Bb(14,0,null,null,2,"ion-label",[],null,null,null,r.Bb,r.B)),t.Ab(15,49152,null,0,u.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(16,0,[" "," "])),(l()(),t.Bb(17,0,null,0,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){l(n,1,0,"full"),l(n,5,0,t.Fb(1,"",n.context.$implicit.image,"")),l(n,13,0,"clock")}),(function(l,n){l(n,9,0,n.context.$implicit.title.rendered),l(n,16,0,n.context.$implicit.date),l(n,17,0,n.context.$implicit.content.rendered)}))}function f(l){return t.Wb(0,[t.Sb(671088640,1,{infinite:0}),(l()(),t.Bb(1,0,null,null,11,"ion-header",[],null,null,null,r.sb,r.s)),t.Ab(2,49152,null,0,u.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(3,0,null,0,9,"ion-toolbar",[],null,null,null,r.Zb,r.Z)),t.Ab(4,49152,null,0,u.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.fb,r.f)),t.Ab(6,49152,null,0,u.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(7,0,null,0,2,"ion-back-button",[["icon","arrow-round-back"]],null,[[null,"click"]],(function(l,n,i){var u=!0;return"click"===n&&(u=!1!==t.Nb(l,9).onClick(i)&&u),u}),r.cb,r.c)),t.Ab(8,49152,null,0,u.i,[t.j,t.p,t.F],{icon:[0,"icon"]},null),t.Ab(9,16384,null,0,u.j,[[2,u.kb],u.Lb],null,null),(l()(),t.Bb(10,0,null,0,2,"ion-title",[],null,null,null,r.Xb,r.X)),t.Ab(11,49152,null,0,u.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(12,0,[" "," "])),(l()(),t.Bb(13,0,null,null,9,"ion-content",[["class","news-list-page"]],null,null,null,r.nb,r.n)),t.Ab(14,49152,null,0,u.w,[t.j,t.p,t.F],null,null),(l()(),t.Bb(15,0,null,0,7,"ion-list",[],null,null,null,r.Cb,r.C)),t.Ab(16,49152,null,0,u.Q,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,d)),t.Ab(18,278528,null,0,p.j,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Bb(19,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(l,n,i){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.getPosts()&&t),t}),r.wb,r.v)),t.Ab(20,49152,[[1,4],["infinite",4]],0,u.G,[t.j,t.p,t.F],null,null),(l()(),t.Bb(21,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,r.vb,r.w)),t.Ab(22,49152,null,0,u.H,[t.j,t.p,t.F],null,null)],(function(l,n){var i=n.component;l(n,8,0,"arrow-round-back"),l(n,18,0,i.posts)}),(function(l,n){l(n,12,0,n.component.name)}))}function w(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,1,"app-news-list",[],null,null,null,f,m)),t.Ab(1,114688,null,0,a,[u.Lb,h.c,e.a,o.a,s.a,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var B=t.xb("app-news-list",a,w,{},{},[]),F=i("s7LF"),k=i("wWlB");i.d(n,"NewsListPageModuleNgFactory",(function(){return v}));var v=t.yb(b,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[c.a,B]],[3,t.m],t.D]),t.Lb(4608,p.m,p.l,[t.z,[2,p.v]]),t.Lb(4608,F.m,F.m,[]),t.Lb(4608,u.c,u.c,[t.F,t.g]),t.Lb(4608,u.Kb,u.Kb,[u.c,t.m,t.w]),t.Lb(4608,u.Pb,u.Pb,[u.c,t.m,t.w]),t.Lb(1073742336,p.b,p.b,[]),t.Lb(1073742336,F.l,F.l,[]),t.Lb(1073742336,F.c,F.c,[]),t.Lb(1073742336,u.Gb,u.Gb,[]),t.Lb(1073742336,k.a,k.a,[]),t.Lb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.Lb(1073742336,b,b,[]),t.Lb(1024,g.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);