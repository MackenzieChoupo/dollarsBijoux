function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,i){return n&&_defineProperties(l.prototype,n),i&&_defineProperties(l,i),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"0yQ7":function(l,n,i){"use strict";i.r(n);var t=i("8Y7J"),e=i("ZZ/e"),u=i("UmVP"),o=i("sf9b"),a=i("KTio"),s=function(){function l(n,i,t,e,u,o){_classCallCheck(this,l),this.navCtrl=n,this.http=i,this.shared=t,this.config=e,this.loading=u,this.activatedRoute=o,this.page=1,this.posts=new Array,this.loadingServerData=!0,this.name=this.activatedRoute.snapshot.paramMap.get("name"),this.id=this.activatedRoute.snapshot.paramMap.get("id"),this.getPosts()}return _createClass(l,[{key:"showPostDetail",value:function(l){this.shared.singlePostData=l,this.navCtrl.navigateForward("/news-detail")}},{key:"getImagePost",value:function(l){l.image="assets/placeholder.png",l._links["wp:featuredmedia"]&&this.config.getWithUrl(l._links["wp:featuredmedia"][0].href).then((function(n){l.image=n.source_url}))}},{key:"getPosts",value:function(){var l=this;1==this.page&&(this.loading.show(),this.loadingServerData=!1),this.config.getWithUrl(this.config.url+"/wp-json/wp/v2/posts/?page="+this.page+"&categories="+this.id+"&"+this.config.productsArguments).then((function(n){l.infinite.complete(),1==l.page&&(l.posts=[],l.infinite.disabled=!1,l.loading.hide()),l.page++,n.forEach((function(n,i){l.getImagePost(n),l.posts.push(n)})),n.length<9&&(l.infinite.disabled=!0),l.loadingServerData=!0}),(function(n){l.infinite.disabled=!0}))}},{key:"ngOnInit",value:function(){}}]),l}(),b=function l(){_classCallCheck(this,l)},c=i("pMnS"),r=i("oBZk"),p=i("SVse"),f=i("IheW"),h=i("iInd"),g=t.zb({encapsulation:2,styles:[[".news-list-page ion-list ion-item ion-thumbnail{margin-bottom:auto}.news-list-page ion-list ion-item ion-label{margin-top:4px}.news-list-page ion-list ion-item ion-label h2{font-size:16px;font-weight:700;white-space:normal}.news-list-page ion-list ion-item ion-label h2 small{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:14px;color:#747474;font-weight:400;margin-top:5px}.news-list-page ion-list ion-item ion-label h2 small ion-label{padding-left:4px}.news-list-page ion-list ion-item ion-label p p:not(:first-child){display:none}.news-list-page ion-list ion-item ion-label p p:first-child{white-space:normal;line-height:1.4;-webkit-line-clamp:4;display:-webkit-box;box-sizing:border-box;-webkit-box-orient:vertical}"]],data:{}});function m(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,17,"ion-item",[["class","animated fadeIn"],["lines","full"]],null,[[null,"click"]],(function(l,n,i){var t=!0;return"click"===n&&(t=!1!==l.component.showPostDetail(l.context.$implicit)&&t),t}),r.Ab,r.y)),t.Ab(1,49152,null,0,e.J,[t.j,t.p,t.F],{lines:[0,"lines"]},null),(l()(),t.Bb(2,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,r.Wb,r.W)),t.Ab(3,49152,null,0,e.Bb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(4,0,null,0,1,"ion-img",[],null,null,null,r.ub,r.u)),t.Ab(5,49152,null,0,e.F,[t.j,t.p,t.F],{src:[0,"src"]},null),(l()(),t.Bb(6,0,null,0,11,"ion-label",[],null,null,null,r.Bb,r.B)),t.Ab(7,49152,null,0,e.P,[t.j,t.p,t.F],null,null),(l()(),t.Bb(8,0,null,0,8,"h2",[],null,null,null,null,null)),(l()(),t.Ub(9,null,[""," "])),(l()(),t.Bb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Bb(11,0,null,null,5,"small",[],null,null,null,null,null)),(l()(),t.Bb(12,0,null,null,1,"ion-icon",[["name","clock"]],null,null,null,r.tb,r.t)),t.Ab(13,49152,null,0,e.E,[t.j,t.p,t.F],{name:[0,"name"]},null),(l()(),t.Bb(14,0,null,null,2,"ion-label",[],null,null,null,r.Bb,r.B)),t.Ab(15,49152,null,0,e.P,[t.j,t.p,t.F],null,null),(l()(),t.Ub(16,0,[" "," "])),(l()(),t.Bb(17,0,null,0,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){l(n,1,0,"full"),l(n,5,0,t.Fb(1,"",n.context.$implicit.image,"")),l(n,13,0,"clock")}),(function(l,n){l(n,9,0,n.context.$implicit.title.rendered),l(n,16,0,n.context.$implicit.date),l(n,17,0,n.context.$implicit.content.rendered)}))}function d(l){return t.Wb(0,[t.Sb(671088640,1,{infinite:0}),(l()(),t.Bb(1,0,null,null,11,"ion-header",[],null,null,null,r.sb,r.s)),t.Ab(2,49152,null,0,e.D,[t.j,t.p,t.F],null,null),(l()(),t.Bb(3,0,null,0,9,"ion-toolbar",[],null,null,null,r.Zb,r.Z)),t.Ab(4,49152,null,0,e.Eb,[t.j,t.p,t.F],null,null),(l()(),t.Bb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.fb,r.f)),t.Ab(6,49152,null,0,e.n,[t.j,t.p,t.F],null,null),(l()(),t.Bb(7,0,null,0,2,"ion-back-button",[["icon","arrow-round-back"]],null,[[null,"click"]],(function(l,n,i){var e=!0;return"click"===n&&(e=!1!==t.Nb(l,9).onClick(i)&&e),e}),r.cb,r.c)),t.Ab(8,49152,null,0,e.i,[t.j,t.p,t.F],{icon:[0,"icon"]},null),t.Ab(9,16384,null,0,e.j,[[2,e.kb],e.Lb],null,null),(l()(),t.Bb(10,0,null,0,2,"ion-title",[],null,null,null,r.Xb,r.X)),t.Ab(11,49152,null,0,e.Cb,[t.j,t.p,t.F],null,null),(l()(),t.Ub(12,0,[" "," "])),(l()(),t.Bb(13,0,null,null,9,"ion-content",[["class","news-list-page"]],null,null,null,r.nb,r.n)),t.Ab(14,49152,null,0,e.w,[t.j,t.p,t.F],null,null),(l()(),t.Bb(15,0,null,0,7,"ion-list",[],null,null,null,r.Cb,r.C)),t.Ab(16,49152,null,0,e.Q,[t.j,t.p,t.F],null,null),(l()(),t.qb(16777216,null,0,1,null,m)),t.Ab(18,278528,null,0,p.j,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(l()(),t.Bb(19,0,null,0,3,"ion-infinite-scroll",[],null,[[null,"ionInfinite"]],(function(l,n,i){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.getPosts()&&t),t}),r.wb,r.v)),t.Ab(20,49152,[[1,4],["infinite",4]],0,e.G,[t.j,t.p,t.F],null,null),(l()(),t.Bb(21,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,r.vb,r.w)),t.Ab(22,49152,null,0,e.H,[t.j,t.p,t.F],null,null)],(function(l,n){var i=n.component;l(n,8,0,"arrow-round-back"),l(n,18,0,i.posts)}),(function(l,n){l(n,12,0,n.component.name)}))}var w=t.xb("app-news-list",s,(function(l){return t.Wb(0,[(l()(),t.Bb(0,0,null,null,1,"app-news-list",[],null,null,null,d,g)),t.Ab(1,114688,null,0,s,[e.Lb,f.c,u.a,o.a,a.a,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=i("s7LF"),v=i("wWlB");i.d(n,"NewsListPageModuleNgFactory",(function(){return B}));var B=t.yb(b,[],(function(l){return t.Kb([t.Lb(512,t.m,t.jb,[[8,[c.a,w]],[3,t.m],t.D]),t.Lb(4608,p.m,p.l,[t.z,[2,p.v]]),t.Lb(4608,k.m,k.m,[]),t.Lb(4608,e.c,e.c,[t.F,t.g]),t.Lb(4608,e.Kb,e.Kb,[e.c,t.m,t.w]),t.Lb(4608,e.Pb,e.Pb,[e.c,t.m,t.w]),t.Lb(1073742336,p.b,p.b,[]),t.Lb(1073742336,k.l,k.l,[]),t.Lb(1073742336,k.c,k.c,[]),t.Lb(1073742336,e.Gb,e.Gb,[]),t.Lb(1073742336,v.a,v.a,[]),t.Lb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.Lb(1073742336,b,b,[]),t.Lb(1024,h.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);