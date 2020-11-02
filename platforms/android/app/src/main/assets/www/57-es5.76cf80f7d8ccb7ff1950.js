function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"JyM/":function(n,t,e){"use strict";e.r(t);var i=e("8Y7J"),l=e("ZZ/e"),o=e("egMn"),r=e("HBAR"),a=e("UmVP"),s=e("sf9b"),u=e("KTio"),c=e("PpuG"),h=function(){function n(t,e,i,l,o,r,a,s,u,c){var h=this;_classCallCheck(this,n),this.navCtrl=t,this.shared=e,this.http=i,this.storage=l,this.spinnerDialog=o,this.config=r,this.loading=a,this.location=s,this.themeableBrowser=u,this.applicationRef=c,this.shippingMethod=new Array,this.selectedMethod=!0,this.shippingLocations=[],this.resetPage=!1,console.log(this.shared.customerData),this.shared.translateString(this.shared.checkOutPageText).then((function(n){h.shared.checkOutPageText=n})),this.getShippingZones()}return _createClass(n,[{key:"getShippingZones",value:function(){var n=this;this.loading.show(),this.config.getWoo("shipping/zones?"+this.config.productsArguments).then((function(t){n.getShippingLocations(t)}))}},{key:"getShippingLocations",value:function(n){var t=this,e=0,i=!0,l=!1,o=void 0;try{for(var r,a=function(){var i=r.value;t.config.getWoo("shipping/zones/"+i.id+"/locations?"+t.config.productsArguments).then((function(l){e++;var o=l,r=!0,a=!1,s=void 0;try{for(var u,c=o[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var h=u.value;t.shippingLocations.push(Object.assign(h,{zoneId:i.id}))}}catch(d){a=!0,s=d}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}n.length==e&&(t.loading.hide(),t.sortArray(t.shippingLocations))}))},s=n[Symbol.iterator]();!(i=(r=s.next()).done);i=!0)a()}catch(u){l=!0,o=u}finally{try{i||null==s.return||s.return()}finally{if(l)throw o}}}},{key:"sortArray",value:function(n){var t=[],e=!0,i=!1,l=void 0;try{for(var o,r=n[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var a=o.value;"postcode"==a.type&&t.push(a)}}catch(w){i=!0,l=w}finally{try{e||null==r.return||r.return()}finally{if(i)throw l}}var s=!0,u=!1,c=void 0;try{for(var h,d=n[Symbol.iterator]();!(s=(h=d.next()).done);s=!0){var p=h.value;"state"==p.type&&t.push(p)}}catch(w){u=!0,c=w}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}var g=!0,f=!1,b=void 0;try{for(var v,m=n[Symbol.iterator]();!(g=(v=m.next()).done);g=!0){var y=v.value;"country"==y.type&&t.push(y)}}catch(w){f=!0,b=w}finally{try{g||null==m.return||m.return()}finally{if(f)throw b}}var k=!0,_=!1,C=void 0;try{for(var S,A=n[Symbol.iterator]();!(k=(S=A.next()).done);k=!0){var D=S.value;"continent"==D.type&&t.push(D)}}catch(w){_=!0,C=w}finally{try{k||null==A.return||A.return()}finally{if(_)throw C}}console.log(t),this.findZoneId(t)}},{key:"findZoneId",value:function(n){var t="",e=!0,i=!1,l=void 0;try{for(var o,r=n[Symbol.iterator]();!(e=(o=r.next()).done);e=!0){var a=o.value;if("postcode"==a.type){if(this.matchPostCode(a)){t=a.zoneId,console.log("postcode  "+a.code);break}}else if("state"==a.type){if(this.matchState(a)){console.log("state  "+a.code),t=a.zoneId;break}}else if("country"==a.type){if(this.matchCountry(a)){console.log("country  "+a.code),t=a.zoneId;break}}else if("continent"==a.type&&this.matchContinent(a)){console.log("continent  "+a.code),t=a.zoneId;break}}}catch(s){i=!0,l=s}finally{try{e||null==r.return||r.return()}finally{if(i)throw l}}this.getShippingMethods(t)}},{key:"matchPostCode",value:function(n){var t=this.shared.shipping.postcode;if(n.code.toUpperCase()==t.toUpperCase())return!0;if(n.code.indexOf("*")>0){var e=n.code.indexOf("*"),i=t.substring(0,e-1),l=n.code.substring(0,e-1);if(i.toUpperCase()==l.toUpperCase())return!0}if(n.code.indexOf(".")>0){var o=n.code.indexOf("."),r=n.code.substring(0,o),a=n.code.substring(o+3,n.code.length);r=parseInt(r);var s=parseInt(t);if(a=parseInt(a),s>=r&&s<=a)return!0}}},{key:"matchState",value:function(n){if(this.shared.shipping.country+":"+this.shared.shipping.state==n.code)return!0}},{key:"matchCountry",value:function(n){if(this.shared.shipping.country==n.code)return!0}},{key:"matchContinent",value:function(n){if(this.location.getContientCode(this.shared.shipping.country)==n.code)return!0}},{key:"getShippingMethods",value:function(n){var t=this;""==n&&(n=0),this.loading.show(),this.config.getWoo("shipping/zones/"+n+"/methods?"+this.config.productsArguments).then((function(n){t.loading.hide(),t.shippingMethod=n,t.applicationRef.tick()}))}},{key:"setMethod",value:function(n){this.shared.shipping_lines=[];var t={};if("flat_rate"==n.method_id)t={ship_id:n.id,method_id:n.method_id,method_title:n.method_title,title:n.title,total:this.calculateFlatRate(n)};else if(n.settings.cost){var e=n.settings.cost.value.toString();""==e&&(e="0"),t={ship_id:n.id,method_id:n.method_id,method_title:n.method_title,title:n.title,total:e}}else t={ship_id:n.id,method_id:n.method_id,method_title:n.method_title,title:n.title,total:"0"};console.log(t),this.shared.shipping_lines.push(t)}},{key:"calculateFlatRate",value:function(n){var t=n.settings.cost.value.toString();return""==t&&(t="0"),t}},{key:"checkFreeShipping",value:function(n){return"free_shipping"!=n.method_id||""==n.settings.requires.value||("coupon"==n.settings.requires.value?!!this.findFreeShippingCoupon():"both"==n.settings.requires.value?!!(this.shared.productsTotal()>=n.settings.min_amount.value&&this.findFreeShippingCoupon()):"either"==n.settings.requires.value?!!(this.shared.productsTotal()>=n.settings.min_amount.value||this.findFreeShippingCoupon()):"min_amount"==n.settings.requires.value?this.shared.productsTotal()>=n.settings.min_amount.value:void 0)}},{key:"findFreeShippingCoupon",value:function(){var n=!1;if(0==this.shared.couponArray.length)return!1;var t=!0,e=!1,i=void 0;try{for(var l,o=this.shared.couponArray[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){1==l.value.free_shipping&&(n=!0)}}catch(r){e=!0,i=r}finally{try{t||null==o.return||o.return()}finally{if(e)throw i}}return 1==n}},{key:"proceedOrder",value:function(){2==this.config.checkOutPage?this.navCtrl.navigateForward("order"):this.openOrderPage()}},{key:"openOrderPage",value:function(){var n=0;null!=this.shared.customerData.id&&(n=this.shared.customerData.id);var t=null;null!=this.shared.customerData.cookie&&(t=this.shared.customerData.cookie);var e=this.config.checkOutPage,i={token:t,billing_info:this.shared.billing,shipping_info:this.shared.shipping,products:this.getProducts(),shipping_ids:this.shared.shipping_lines,coupons:this.getCoupons(),customer_note:"",customer_id:n,sameAddress:this.shared.sameAddress,one_page:e,platform:this.shared.device};console.log(i),this.navCtrl.navigateForward("/order")}},{key:"getProducts",value:function(){var n=[],t=!0,e=!1,i=void 0;try{for(var l,o=this.shared.cartProducts[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value,a={quantity:r.quantity,product_id:r.product_id,total:r.total.toString(),customer_note:r.customer_note};r.variation_id&&Object.assign(a,{variation_id:r.variation_id}),n.push(a)}}catch(s){e=!0,i=s}finally{try{t||null==o.return||o.return()}finally{if(e)throw i}}return n}},{key:"getCoupons",value:function(){var n=[],t=!0,e=!1,i=void 0;try{for(var l,o=this.shared.couponArray[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value;n.push({code:r.code,discount:r.amount})}}catch(a){e=!0,i=a}finally{try{t||null==o.return||o.return()}finally{if(e)throw i}}return n}},{key:"getShippingLines",value:function(){var n=[],t=!0,e=!1,i=void 0;try{for(var l,o=this.shared.shipping_lines[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var r=l.value;n.push({code:r.code,discount:r.amount})}}catch(a){e=!0,i=a}finally{try{t||null==o.return||o.return()}finally{if(e)throw i}}return n}},{key:"updateUser",value:function(){var n=this,t={billing:this.shared.billing,shipping:this.shared.shipping};switch(s.a.countryCode){case"cm":this.config.WoocommerceCM.putAsync("customers/"+this.shared.customerData.id,t).then((function(t){var e=t;n.shared.customerData.billing=e.billing,n.shared.customerData.shipping=e.shipping,n.storage.set("customerData",n.shared.customerData)}));break;case"gb":this.config.WoocommerceGB.putAsync("customers/"+this.shared.customerData.id,t).then((function(t){var e=t;n.shared.customerData.billing=e.billing,n.shared.customerData.shipping=e.shipping,n.storage.set("customerData",n.shared.customerData)}));break;case"ck":this.config.WoocommerceCK.putAsync("customers/"+this.shared.customerData.id,t).then((function(t){var e=t;n.shared.customerData.billing=e.billing,n.shared.customerData.shipping=e.shipping,n.storage.set("customerData",n.shared.customerData)}));break;case"cb":this.config.WoocommerceCB.putAsync("customers/"+this.shared.customerData.id,t).then((function(t){var e=t;n.shared.customerData.billing=e.billing,n.shared.customerData.shipping=e.shipping,n.storage.set("customerData",n.shared.customerData)}));break;case"iv":this.config.WoocommerceCI.putAsync("customers/"+this.shared.customerData.id,t).then((function(t){var e=t;n.shared.customerData.billing=e.billing,n.shared.customerData.shipping=e.shipping,n.storage.set("customerData",n.shared.customerData)}));break;default:this.config.WoocommerceCM.putAsync("customers/"+this.shared.customerData.id,t).then((function(t){var e=t;n.shared.customerData.billing=e.billing,n.shared.customerData.shipping=e.shipping,n.storage.set("customerData",n.shared.customerData)}))}}},{key:"ionViewDidEnter",value:function(){var n=this;this.resetPage=!1,setTimeout((function(){n.resetPage=!0}),100),this.shared.shipping_lines=[]}},{key:"ngOnInit",value:function(){}}]),n}(),d=function n(){_classCallCheck(this,n)},p=e("pMnS"),g=e("oBZk"),f=e("s7LF"),b=e("SVse"),v=e("taci"),m=e("IheW"),y=e("xgBC"),k=i.zb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:#fafafa}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#eee}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{height:45px;margin:0}"]],data:{}});function _(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,9,"ion-item",[["lines","full"]],null,null,null,g.Ab,g.y)),i.Ab(1,49152,null,0,l.J,[i.j,i.p,i.F],{lines:[0,"lines"]},null),(n()(),i.Bb(2,0,null,0,2,"ion-label",[],null,null,null,g.Bb,g.B)),i.Ab(3,49152,null,0,l.P,[i.j,i.p,i.F],null,null),(n()(),i.Ub(4,0,[""," "])),(n()(),i.Bb(5,0,null,0,4,"ion-radio",[],null,[[null,"ionSelect"],[null,"ionBlur"]],(function(n,t,e){var l=!0,o=n.component;return"ionBlur"===t&&(l=!1!==i.Nb(n,9)._handleBlurEvent(e.target)&&l),"ionSelect"===t&&(l=!1!==i.Nb(n,9)._handleIonSelect(e.target)&&l),"ionSelect"===t&&(l=!1!==o.setMethod(n.parent.context.$implicit)&&l),l}),g.Hb,g.G)),i.Rb(5120,null,f.e,(function(n){return[n]}),[l.Qb]),i.Ab(7,49152,null,0,l.cb,[i.j,i.p,i.F],{value:[0,"value"]},null),i.Ob(8,1),i.Ab(9,16384,null,0,l.Qb,[i.p],null,null)],(function(n,t){n(t,1,0,"full");var e=n(t,8,0,t.parent.context.$implicit);n(t,7,0,e)}),(function(n,t){n(t,4,0,t.parent.context.$implicit.title)}))}function C(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),i.qb(16777216,null,null,1,null,_)),i.Ab(2,16384,null,0,b.k,[i.W,i.S],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,2,0,t.context.$implicit.enabled&&t.component.checkFreeShipping(t.context.$implicit))}),null)}function S(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,7,"ion-list",[["class","ion-padding"]],null,null,null,g.Cb,g.C)),i.Ab(1,49152,null,0,l.Q,[i.j,i.p,i.F],null,null),(n()(),i.Bb(2,0,null,0,5,"ion-radio-group",[],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var l=!0;return"ionBlur"===t&&(l=!1!==i.Nb(n,5)._handleBlurEvent(e.target)&&l),"ionChange"===t&&(l=!1!==i.Nb(n,5)._handleChangeEvent(e.target)&&l),l}),g.Gb,g.H)),i.Rb(5120,null,f.e,(function(n){return[n]}),[l.Sb]),i.Ab(4,49152,null,0,l.db,[i.j,i.p,i.F],null,null),i.Ab(5,16384,null,0,l.Sb,[i.p],null,null),(n()(),i.qb(16777216,null,0,1,null,C)),i.Ab(7,278528,null,0,b.j,[i.W,i.S,i.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,7,0,t.component.shippingMethod)}),null)}function A(n){return i.Wb(0,[i.Pb(0,v.a,[a.a]),(n()(),i.Bb(1,0,null,null,12,"ion-header",[],null,null,null,g.sb,g.s)),i.Ab(2,49152,null,0,l.D,[i.j,i.p,i.F],null,null),(n()(),i.Bb(3,0,null,0,10,"ion-toolbar",[],null,null,null,g.Zb,g.Z)),i.Ab(4,49152,null,0,l.Eb,[i.j,i.p,i.F],null,null),(n()(),i.Bb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,g.fb,g.f)),i.Ab(6,49152,null,0,l.n,[i.j,i.p,i.F],null,null),(n()(),i.Bb(7,0,null,0,2,"ion-back-button",[["icon","arrow-round-back"]],null,[[null,"click"]],(function(n,t,e){var l=!0;return"click"===t&&(l=!1!==i.Nb(n,9).onClick(e)&&l),l}),g.cb,g.c)),i.Ab(8,49152,null,0,l.i,[i.j,i.p,i.F],{icon:[0,"icon"]},null),i.Ab(9,16384,null,0,l.j,[[2,l.kb],l.Lb],null,null),(n()(),i.Bb(10,0,null,0,3,"ion-title",[],null,null,null,g.Xb,g.X)),i.Ab(11,49152,null,0,l.Cb,[i.j,i.p,i.F],null,null),(n()(),i.Ub(12,0,["",""])),i.Qb(13,1),(n()(),i.Bb(14,0,null,null,3,"ion-content",[],null,null,null,g.nb,g.n)),i.Ab(15,49152,null,0,l.w,[i.j,i.p,i.F],null,null),(n()(),i.qb(16777216,null,0,1,null,S)),i.Ab(17,16384,null,0,b.k,[i.W,i.S],{ngIf:[0,"ngIf"]},null),(n()(),i.Bb(18,0,null,null,5,"ion-footer",[],null,null,null,g.qb,g.q)),i.Ab(19,49152,null,0,l.B,[i.j,i.p,i.F],null,null),(n()(),i.Bb(20,0,null,0,3,"ion-button",[["color","secondary"],["expand","full"]],null,[[null,"click"]],(function(n,t,e){var i=!0;return"click"===t&&(i=!1!==n.component.proceedOrder()&&i),i}),g.eb,g.e)),i.Ab(21,49152,null,0,l.m,[i.j,i.p,i.F],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(n()(),i.Ub(22,0,[" ",""])),i.Qb(23,1)],(function(n,t){var e=t.component;n(t,8,0,"arrow-round-back"),n(t,17,0,e.resetPage),n(t,21,0,"secondary",0==e.shared.shipping_lines.length,"full")}),(function(n,t){var e=i.Vb(t,12,0,n(t,13,0,i.Nb(t,0),"Mode de livraison"));n(t,12,0,e);var l=i.Vb(t,22,0,n(t,23,0,i.Nb(t,0),"suivant"));n(t,22,0,l)}))}var D=i.xb("app-shipping-method",h,(function(n){return i.Wb(0,[(n()(),i.Bb(0,0,null,null,1,"app-shipping-method",[],null,null,null,A,k)),i.Ab(1,114688,null,0,h,[l.Lb,a.a,m.c,y.b,o.a,s.a,u.a,c.a,r.a,i.g],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),w=e("iInd"),P=e("wWlB");e.d(t,"ShippingMethodPageModuleNgFactory",(function(){return B}));var B=i.yb(d,[],(function(n){return i.Kb([i.Lb(512,i.m,i.jb,[[8,[p.a,D]],[3,i.m],i.D]),i.Lb(4608,b.m,b.l,[i.z,[2,b.v]]),i.Lb(4608,f.m,f.m,[]),i.Lb(4608,l.c,l.c,[i.F,i.g]),i.Lb(4608,l.Kb,l.Kb,[l.c,i.m,i.w]),i.Lb(4608,l.Pb,l.Pb,[l.c,i.m,i.w]),i.Lb(1073742336,b.b,b.b,[]),i.Lb(1073742336,f.l,f.l,[]),i.Lb(1073742336,f.c,f.c,[]),i.Lb(1073742336,l.Gb,l.Gb,[]),i.Lb(1073742336,w.o,w.o,[[2,w.t],[2,w.m]]),i.Lb(1073742336,P.a,P.a,[]),i.Lb(1073742336,d,d,[]),i.Lb(1024,w.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);