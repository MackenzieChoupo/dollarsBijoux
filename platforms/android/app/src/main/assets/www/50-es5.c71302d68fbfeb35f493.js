function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"6vk3":function(n,l,t){"use strict";t.r(l);var e,o=t("8Y7J"),i=t("ZZ/e"),u=t("sf9b"),a=((e=function n(){_classCallCheck(this,n),this.apikey="2702753475f62e9dea04482.91237891",this.site_id=132465,this.notify_url="https://YOUR_NOTIFY_URL",this.currency="CFA"}).ngInjectableDef=o.Zb({factory:function(){return new e},token:e,providedIn:"root"}),e),r=t("UmVP"),s=t("KTio"),c=t("b3D7"),b=t("9B/o"),d=t("egMn"),p=function(){function n(l,t,e,o,i,a,r,s,c,b,d){_classCallCheck(this,n),this.navCtrl=l,this.http=t,this.config=e,this.cinetpay=o,this.shared=i,this.loading=a,this.spinnerDialog=r,this.couponProvider=s,this.actionSheetCtrl=c,this.iab=b,this.applicationRef=d,this.url="https://dollarsbijoux.com",this.consumerKey="ck_3a5c590f46556e7d542b8ae25c1e1266d9bece06",this.consumerSecret="cs_b994779812af2a1694688e15f2b058ebb7c4eb0d",this.line_items=[],this.discount=0,this.productsTotal=0,this.totalAmountWithDisocunt=0,this.paymentMethods=[],this.selectedPaymentMethod="",this.selectedPaymentMethodTitle="",this.tax=0,this.loaderTaxCalculating=!0,this.loaderPaymentMethods=!0,this.ordersitems=[],this.apikey="2702753475f62e9dea04482.91237891",this.site_id=132465,this.notify_url="https://YOUR_NOTIFY_URL",this.currency="CFA",this.addOrder=function(n){var l=this;switch(u.a.countryCode){case"cm":if(this.selectedPaymentMethod="alg_custom_gateway_1")return new Promise((function(n){var t;t={token:l.shared.customerData.cookie,payment_method:l.selectedPaymentMethod,payment_method_title:l.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:l.order.billing.first_name,last_name:l.order.billing.last_name,address_1:"",address_2:"",city:l.order.billing.city,state:"",postcode:"",country:l.order.billing.country,email:l.order.billing.email,phone:l.order.billing.phone},shipping:{first_name:l.order.billing.first_name,last_name:l.order.billing.last_name,address_1:"",address_2:"",city:l.order.billing.city,state:"",postcode:"",country:l.order.billing.country},line_items:l.getProducts(),shipping_lines:l.getShippingLines(),customer_id:l.shared.customerData.id},console.log(t),l.trans_id=window.performance&&window.performance.now&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.now()+window.performance.timing.navigationStart:Date.now(),CinetPay.setConfig({apikey:l.apikey,site_id:l.site_id,notify_url:l.notify_url}),CinetPay.on("signatureCreated",(function(n){console.log("Tocken g\xe9n\xe9r\xe9: "+n)})),CinetPay.on("paymentPending",(function(n){console.log("code:"+n.code+"Message::"+n.message)})),CinetPay.on("error",(function(n){console.log("Error code:"+n.code+"Message::"+n.message)})),CinetPay.on("paymentSuccessfull",(function(l){var e=this;if(console.log(l),n(l),void 0!==l.lastTime&&"00"==l.cpm_result)return new Promise((function(n){e.http.post("".concat(e.config.getCountryParams(u.a.countryCode)[0],"/wp-json/wc/v3/orders/?consumer_key=").concat(e.config.getCountryParams(u.a.countryCode)[1],"&consumer_secret=").concat(e.config.getCountryParams(u.a.countryCode)[2]),t).subscribe((function(l){n(l),e.navCtrl.navigateForward("openThankYouPage")}))}))})),CinetPay.setSignatureData({amount:parseFloat(l.productsTotal)+parseFloat(l.shared.shipping_lines[0].total)+parseFloat(l.discount)+parseFloat(l.tax),trans_id:l.trans_id,currency:l.currency,designation:l.designation,custom:l.cpm_custom}),CinetPay.getSignature()}));var t;null!=this.shared.customerData.id&&this.shared.customerData.id;return null!=this.shared.customerData.cookie&&this.shared.customerData.cookie,t={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country,email:this.order.billing.email,phone:this.order.billing.phone},shipping:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country},line_items:this.getProducts(),shipping_lines:this.getShippingLines(),customer_id:this.shared.customerData.id},console.log(t),new Promise((function(n){l.http.post("".concat(l.config.getCountryParams(u.a.countryCode)[0],"/wp-json/wc/v3/orders/?consumer_key=").concat(l.config.getCountryParams(u.a.countryCode)[1],"&consumer_secret=").concat(l.config.getCountryParams(u.a.countryCode)[2]),t).subscribe((function(t){n(t),l.navCtrl.navigateForward("openThankYouPage")}))}));case"gb":case"ck":case"cb":var e;null!=this.shared.customerData.id&&this.shared.customerData.id;return null!=this.shared.customerData.cookie&&this.shared.customerData.cookie,e={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country,email:this.order.billing.email,phone:this.order.billing.phone},shipping:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country},line_items:this.getProducts(),shipping_lines:this.getShippingLines(),customer_id:this.shared.customerData.id},console.log(e),new Promise((function(n){l.http.post("".concat(l.config.getCountryParams(u.a.countryCode)[0],"/wp-json/wc/v3/orders/?consumer_key=").concat(l.config.getCountryParams(u.a.countryCode)[1],"&consumer_secret=").concat(l.config.getCountryParams(u.a.countryCode)[2]),e).subscribe((function(t){n(t),l.navCtrl.navigateForward("openThankYouPage")}))}));case"ci":return new Promise((function(n){var t;t={token:l.shared.customerData.cookie,payment_method:l.selectedPaymentMethod,payment_method_title:l.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:l.order.billing.first_name,last_name:l.order.billing.last_name,address_1:"",address_2:"",city:l.order.billing.city,state:"",postcode:"",country:l.order.billing.country,email:l.order.billing.email,phone:l.order.billing.phone},shipping:{first_name:l.order.billing.first_name,last_name:l.order.billing.last_name,address_1:"",address_2:"",city:l.order.billing.city,state:"",postcode:"",country:l.order.billing.country},line_items:l.getProducts(),shipping_lines:l.getShippingLines(),customer_id:l.shared.customerData.id},console.log(t),l.trans_id=window.performance&&window.performance.now&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.now()+window.performance.timing.navigationStart:Date.now(),CinetPay.setConfig({apikey:l.apikey,site_id:l.site_id,notify_url:l.notify_url}),CinetPay.on("signatureCreated",(function(n){console.log("Tocken g\xe9n\xe9r\xe9: "+n)})),CinetPay.on("paymentPending",(function(n){console.log("code:"+n.code+"Message::"+n.message)})),CinetPay.on("error",(function(n){console.log("Error code:"+n.code+"Message::"+n.message),this.events.publish("fail")})),CinetPay.on("paymentSuccessfull",(function(l){var e=this;if(console.log(l),n(l),void 0!==l.lastTime&&"00"==l.cpm_result)return new Promise((function(n){e.http.post("".concat(e.config.getCountryParams(u.a.countryCode)[0],"/wp-json/wc/v3/orders/?consumer_key=").concat(e.config.getCountryParams(u.a.countryCode)[1],"&consumer_secret=").concat(e.config.getCountryParams(u.a.countryCode)[2]),t).subscribe((function(l){n(l),e.events.publish("openThankYouPage")}))}))})),CinetPay.setSignatureData({amount:parseFloat(l.productsTotal)+parseFloat(l.shared.shipping_lines[0].total)+parseFloat(l.discount)+parseFloat(l.tax),trans_id:l.trans_id,currency:l.currency,designation:l.designation,custom:l.cpm_custom}),CinetPay.getSignature()}));default:return new Promise((function(n){var t;t={token:l.shared.customerData.cookie,payment_method:l.selectedPaymentMethod,payment_method_title:l.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:l.order.billing.first_name,last_name:l.order.billing.last_name,address_1:"",address_2:"",city:l.order.billing.city,state:"",postcode:"",country:l.order.billing.country,email:l.order.billing.email,phone:l.order.billing.phone},shipping:{first_name:l.order.billing.first_name,last_name:l.order.billing.last_name,address_1:"",address_2:"",city:l.order.billing.city,state:"",postcode:"",country:l.order.billing.country},line_items:l.getProducts(),shipping_lines:l.getShippingLines(),customer_id:l.shared.customerData.id},console.log(t),l.trans_id=window.performance&&window.performance.now&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.now()+window.performance.timing.navigationStart:Date.now(),CinetPay.setConfig({apikey:l.apikey,site_id:l.site_id,notify_url:l.notify_url}),CinetPay.on("signatureCreated",(function(n){console.log("Tocken g\xe9n\xe9r\xe9: "+n)})),CinetPay.on("paymentPending",(function(n){console.log("code:"+n.code+"Message::"+n.message)})),CinetPay.on("error",(function(n){console.log("Error code:"+n.code+"Message::"+n.message),this.navCtrl.navigateForward("fail")})),CinetPay.on("paymentSuccessfull",(function(l){var e=this;if(console.log(l),n(l),void 0!==l.lastTime&&"00"==l.cpm_result)return new Promise((function(n){e.http.post("".concat(e.config.getCountryParams(u.a.countryCode)[0],"/wp-json/wc/v3/orders/?consumer_key=").concat(e.config.getCountryParams(u.a.countryCode)[1],"&consumer_secret=").concat(e.config.getCountryParams(u.a.countryCode)[2]),t).subscribe((function(l){n(l),e.navCtrl.navigateForward("openThankYouPage")}))}))})),CinetPay.setSignatureData({amount:parseFloat(l.productsTotal)+parseFloat(l.shared.shipping_lines[0].total)+parseFloat(l.discount)+parseFloat(l.tax),trans_id:l.trans_id,currency:l.currency,designation:l.designation,custom:l.cpm_custom}),CinetPay.getSignature()}))}},this.calculateDiscount=function(){var n=0,l=!0,t=!1,e=void 0;try{for(var o,i=this.shared.cartProducts[Symbol.iterator]();!(l=(o=i.next()).done);l=!0){var u=o.value;n+=parseFloat(u.subtotal)}}catch(a){t=!0,e=a}finally{try{l||null==i.return||i.return()}finally{if(t)throw e}}this.productsTotal=n,this.discount=parseFloat(this.shared.productsTotal())-n},this.calculateTotal=function(){this.totalAmountWithDisocunt=parseFloat(this.productsTotal)+parseFloat(this.shared.shipping_lines[0].total)+parseFloat(this.discount)+parseFloat(this.tax)},this.order={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,billing:this.shared.billing,shipping:this.shared.shipping,line_items:this.shared.cartProducts,shipping_lines:this.shared.shipping_lines,coupon_lines:this.shared.couponArray,customer_id:this.shared.customerData.id},this.calculateDiscount(),this.calculateTotal(),this.calculateTax()}return _createClass(n,[{key:"getProducts",value:function(){var n=[],l=!0,t=!1,e=void 0;try{for(var o,i=this.shared.cartProducts[Symbol.iterator]();!(l=(o=i.next()).done);l=!0){var u=o.value,a={quantity:u.quantity,product_id:u.product_id,total:u.total.toString(),price:u.price.toString(),customerNotes:u.customerNotes};u.variation_id&&Object.assign(a,{variation_id:u.variation_id}),u.meta_data&&Object.assign(a,{meta_data:u.meta_data}),n.push(a)}}catch(r){t=!0,e=r}finally{try{l||null==i.return||i.return()}finally{if(t)throw e}}return n}},{key:"getCoupons",value:function(){var n=[],l=!0,t=!1,e=void 0;try{for(var o,i=this.shared.couponArray[Symbol.iterator]();!(l=(o=i.next()).done);l=!0){var u=o.value;n.push({code:u.code,discount:u.amount})}}catch(a){t=!0,e=a}finally{try{l||null==i.return||i.return()}finally{if(t)throw e}}return n}},{key:"getShippingLines",value:function(){var n=[],l=!0,t=!1,e=void 0;try{for(var o,i=this.shared.shipping_lines[Symbol.iterator]();!(l=(o=i.next()).done);l=!0){var u=o.value;n.push({method_id:u.method_id,method_title:u.method_title,total:u.total.toString(),code:u.code,discount:u.amount})}}catch(a){t=!0,e=a}finally{try{l||null==i.return||i.return()}finally{if(t)throw e}}return n}},{key:"selectPayment",value:function(n){this.selectedPaymentMethod=n.id,this.selectedPaymentMethodTitle=n.title,console.log(this.selectedPaymentMethod),console.log(this.selectedPaymentMethodTitle),this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var n=this;setTimeout((function(){n.content.scrollToBottom(),console.log("botton")}),300)}},{key:"ngOnInit",value:function(){var n=this;this.config.getWoo("payment_gateways?"+this.config.productsArguments).then((function(l){n.loaderPaymentMethods=!1,n.paymentMethods=l,n.applicationRef.tick()}))}},{key:"openHomePage",value:function(){this.navCtrl.navigateRoot("/home")}},{key:"calculateTax",value:function(){var n=this,l={billing_info:this.shared.billing,shipping_info:this.shared.shipping,products:this.getProducts(),shipping_ids:this.shared.shipping_lines};this.http.get(this.config.getCountryParams(u.a.countryCode)[0]+"/api/appsettings/ionic_get_tax/?insecure=cool&order="+encodeURIComponent(JSON.stringify(l))).subscribe((function(l){n.loaderTaxCalculating=!1;var t=parseFloat(JSON.stringify(l));t?console.log("tax "+t):(console.log("tax err "+t),t=0),n.tax=t,n.calculateTotal(),n.applicationRef.tick()}))}}]),n}(),g=function n(){_classCallCheck(this,n)},m=t("pMnS"),h=t("oBZk"),f=t("SVse"),y=t("s7LF"),_=t("taci"),C=t("4How"),P=t("IheW"),v=o.zb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{font-size:14px;margin-bottom:0;margin-top:0;color:#000;background-color:#eee;padding:10px!important}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;font-size:12px;font-weight:600}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{background-color:#fff;font-size:12px;color:#000;padding:10px!important}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .card-disable[_ngcontent-%COMP%]{color:gray!important}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;margin-bottom:6px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:80%}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{--background:transparent}ion-content[_ngcontent-%COMP%]   .row-product[_ngcontent-%COMP%]{border-bottom:solid #d3d3d3;border-width:.2px}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0}"]],data:{}});function F(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),o.Ub(1,null,["","\xa0\xa0"]))],null,(function(n,l){n(l,1,0,l.context.$implicit.name)}))}function w(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,7,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(1,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(2,0,null,0,2,"ion-col",[["size","6"]],null,null,null,h.mb,h.m)),o.Ab(3,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(4,0,["","\xa0:"])),(n()(),o.Bb(5,0,null,0,2,"ion-col",[["size","6"]],null,null,null,h.mb,h.m)),o.Ab(6,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(7,0,["",""]))],(function(n,l){n(l,3,0,"6"),n(l,6,0,"6")}),(function(n,l){n(l,4,0,l.context.$implicit.key),n(l,7,0,l.context.$implicit.value)}))}function A(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,58,"ion-card-content",[],null,null,null,h.gb,h.h)),o.Ab(1,49152,null,0,i.p,[o.j,o.p,o.F],null,null),(n()(),o.Bb(2,0,null,0,8,"ion-row",[["class","row-product"]],null,null,null,h.Jb,h.J)),o.Ab(3,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(4,0,null,0,6,"ion-col",[],null,null,null,h.mb,h.m)),o.Ab(5,49152,null,0,i.v,[o.j,o.p,o.F],null,null),(n()(),o.Bb(6,0,null,0,4,"h3",[],null,null,null,null,null)),(n()(),o.Ub(7,null,[""," "])),(n()(),o.Bb(8,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.qb(16777216,null,null,1,null,F)),o.Ab(10,278528,null,0,f.j,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null),(n()(),o.Bb(11,0,null,0,47,"ion-item",[["lines","full"]],null,null,null,h.Ab,h.y)),o.Ab(12,49152,null,0,i.J,[o.j,o.p,o.F],{lines:[0,"lines"]},null),(n()(),o.Bb(13,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,h.Wb,h.W)),o.Ab(14,49152,null,0,i.Bb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(15,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.Bb(16,0,null,0,42,"ion-label",[],null,null,null,h.Bb,h.B)),o.Ab(17,49152,null,0,i.P,[o.j,o.p,o.F],null,null),(n()(),o.Bb(18,0,null,0,8,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(19,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(20,0,null,0,3,"ion-col",[["class","ion-text-left"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(21,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(22,0,["","\xa0:\xa0"])),o.Qb(23,1),(n()(),o.Bb(24,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(25,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(26,0,[""," FCFA"])),(n()(),o.Bb(27,0,null,0,8,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(28,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(29,0,null,0,3,"ion-col",[["class","ion-text-left"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(30,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(31,0,["","\xa0:\xa0"])),o.Qb(32,1),(n()(),o.Bb(33,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(34,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(35,0,["",""])),(n()(),o.qb(16777216,null,0,1,null,w)),o.Ab(37,278528,null,0,f.j,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null),(n()(),o.Bb(38,0,null,0,8,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(39,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(40,0,null,0,3,"ion-col",[["class","ion-text-left"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(41,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(42,0,["","\xa0:\xa0"])),o.Qb(43,1),(n()(),o.Bb(44,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(45,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(46,0,[""," FCFA"])),(n()(),o.Bb(47,0,null,0,11,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(48,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(49,0,null,0,5,"ion-col",[["class","ion-text-left"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(50,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Bb(51,0,null,0,2,"strong",[],null,null,null,null,null)),(n()(),o.Ub(52,null,["",""])),o.Qb(53,1),(n()(),o.Ub(-1,0,["\xa0:\xa0"])),(n()(),o.Bb(55,0,null,0,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(56,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Bb(57,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),o.Ub(58,null,[""," FCFA"]))],(function(n,l){n(l,10,0,l.context.$implicit.categories),n(l,12,0,"full"),n(l,21,0,"6"),n(l,25,0,"6"),n(l,30,0,"6"),n(l,34,0,"6"),n(l,37,0,l.context.$implicit.meta_data),n(l,41,0,"6"),n(l,45,0,"6"),n(l,50,0,"6"),n(l,56,0,"6")}),(function(n,l){n(l,7,0,l.context.$implicit.name),n(l,15,0,o.Fb(1,"",l.context.$implicit.image,""));var t=o.Vb(l,22,0,n(l,23,0,o.Nb(l.parent,0),"Prix"));n(l,22,0,t),n(l,26,0,l.context.$implicit.price);var e=o.Vb(l,31,0,n(l,32,0,o.Nb(l.parent,0),"Quantit\xe9"));n(l,31,0,e),n(l,35,0,l.context.$implicit.quantity);var i=o.Vb(l,42,0,n(l,43,0,o.Nb(l.parent,0),"Sous Total"));n(l,42,0,i),n(l,46,0,l.context.$implicit.subtotal);var u=o.Vb(l,52,0,n(l,53,0,o.Nb(l.parent,0),"Total"));n(l,52,0,u),n(l,58,0,l.context.$implicit.total)}))}function B(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,8,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(1,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(2,0,null,0,2,"ion-col",[["size","6"]],null,null,null,h.mb,h.m)),o.Ab(3,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(4,0,[" "," "])),(n()(),o.Bb(5,0,null,0,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(6,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(7,0,[" "," "])),o.Qb(8,1)],(function(n,l){n(l,3,0,"6"),n(l,6,0,"6")}),(function(n,l){n(l,4,0,l.context.$implicit.code);var t=o.Vb(l,7,0,n(l,8,0,o.Nb(l.parent.parent,1),l.context.$implicit.amount));n(l,7,0,t)}))}function k(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,9,"ion-card",[],null,null,null,h.kb,h.g)),o.Ab(1,49152,null,0,i.o,[o.j,o.p,o.F],null,null),(n()(),o.Bb(2,0,null,0,3,"ion-card-header",[],null,null,null,h.hb,h.i)),o.Ab(3,49152,null,0,i.q,[o.j,o.p,o.F],null,null),(n()(),o.Ub(4,0,[" "," "])),o.Qb(5,1),(n()(),o.Bb(6,0,null,0,3,"ion-card-content",[],null,null,null,h.gb,h.h)),o.Ab(7,49152,null,0,i.p,[o.j,o.p,o.F],null,null),(n()(),o.qb(16777216,null,0,1,null,B)),o.Ab(9,278528,null,0,f.j,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,9,0,l.component.shared.couponArray)}),(function(n,l){var t=o.Vb(l,4,0,n(l,5,0,o.Nb(l.parent,0),"Code Promo"));n(l,4,0,t)}))}function j(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(1,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(2,0,[" "," "]))],(function(n,l){n(l,1,0,"6")}),(function(n,l){n(l,2,0,l.component.tax)}))}function x(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(1,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Bb(2,0,null,0,1,"ion-spinner",[],null,null,null,h.Sb,h.S)),o.Ab(3,49152,null,0,i.ub,[o.j,o.p,o.F],null,null)],(function(n,l){n(l,1,0,"6")}),null)}function z(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,1,"ion-spinner",[],null,null,null,h.Sb,h.S)),o.Ab(1,49152,null,0,i.ub,[o.j,o.p,o.F],null,null)],null,null)}function M(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),o.Bb(1,0,null,null,2,"ion-select-option",[["ngif","p.enabled"]],null,null,null,h.Nb,h.O)),o.Ab(2,49152,null,0,i.qb,[o.j,o.p,o.F],{value:[0,"value"]},null),(n()(),o.Ub(3,0,["",""]))],(function(n,l){n(l,2,0,l.context.$implicit)}),(function(n,l){n(l,3,0,l.context.$implicit.title)}))}function O(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,17,"ion-card-content",[],null,null,null,h.gb,h.h)),o.Ab(1,49152,null,0,i.p,[o.j,o.p,o.F],null,null),(n()(),o.Bb(2,0,null,0,15,"ion-list",[],null,null,null,h.Cb,h.C)),o.Ab(3,49152,null,0,i.Q,[o.j,o.p,o.F],null,null),(n()(),o.Bb(4,0,null,0,13,"ion-item",[],null,null,null,h.Ab,h.y)),o.Ab(5,49152,null,0,i.J,[o.j,o.p,o.F],null,null),(n()(),o.Bb(6,0,null,0,2,"ion-label",[["color","dark"]],null,null,null,h.Bb,h.B)),o.Ab(7,49152,null,0,i.P,[o.j,o.p,o.F],{color:[0,"color"]},null),(n()(),o.Ub(8,0,["",""])),(n()(),o.Bb(9,0,null,0,8,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,t){var e=!0,i=n.component;return"ionBlur"===l&&(e=!1!==o.Nb(n,10)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==o.Nb(n,10)._handleChangeEvent(t.target)&&e),"ngModelChange"===l&&(e=!1!==(i.payment_method=t)&&e),"ionChange"===l&&(e=!1!==i.selectPayment(i.payment_method)&&e),e}),h.Ob,h.N)),o.Ab(10,16384,null,0,i.Sb,[o.p],null,null),o.Rb(1024,null,y.e,(function(n){return[n]}),[i.Sb]),o.Ab(12,671744,null,0,y.j,[[8,null],[8,null],[8,null],[6,y.e]],{model:[0,"model"]},{update:"ngModelChange"}),o.Rb(2048,null,y.f,null,[y.j]),o.Ab(14,16384,null,0,y.g,[[4,y.f]],null,null),o.Ab(15,49152,null,0,i.pb,[o.j,o.p,o.F],{cancelText:[0,"cancelText"],okText:[1,"okText"]},null),(n()(),o.qb(16777216,null,0,1,null,M)),o.Ab(17,278528,null,0,f.j,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,7,0,"dark"),n(l,12,0,t.payment_method),n(l,15,0,o.Fb(1,"","annuler",""),o.Fb(1,"","Ok","")),n(l,17,0,t.paymentMethods)}),(function(n,l){n(l,8,0,"Methode de paiement"),n(l,9,0,o.Nb(l,14).ngClassUntouched,o.Nb(l,14).ngClassTouched,o.Nb(l,14).ngClassPristine,o.Nb(l,14).ngClassDirty,o.Nb(l,14).ngClassValid,o.Nb(l,14).ngClassInvalid,o.Nb(l,14).ngClassPending)}))}function S(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,3,"ion-button",[["color","secondary"],["expand","full"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addOrder()&&e),e}),h.eb,h.e)),o.Ab(1,49152,null,0,i.m,[o.j,o.p,o.F],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),o.Ub(2,0,[" "," "])),o.Qb(3,1)],(function(n,l){n(l,1,0,"secondary","full")}),(function(n,l){var t=o.Vb(l,2,0,n(l,3,0,o.Nb(l.parent,0),"Continuer"));n(l,2,0,t)}))}function T(n){return o.Wb(0,[o.Pb(0,_.a,[r.a]),o.Pb(0,C.a,[]),o.Sb(671088640,1,{content:0}),(n()(),o.Bb(3,0,null,null,12,"ion-header",[],null,null,null,h.sb,h.s)),o.Ab(4,49152,null,0,i.D,[o.j,o.p,o.F],null,null),(n()(),o.Bb(5,0,null,0,10,"ion-toolbar",[],null,null,null,h.Zb,h.Z)),o.Ab(6,49152,null,0,i.Eb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.fb,h.f)),o.Ab(8,49152,null,0,i.n,[o.j,o.p,o.F],null,null),(n()(),o.Bb(9,0,null,0,2,"ion-back-button",[["icon","arrow-round-back"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Nb(n,11).onClick(t)&&e),e}),h.cb,h.c)),o.Ab(10,49152,null,0,i.i,[o.j,o.p,o.F],{icon:[0,"icon"]},null),o.Ab(11,16384,null,0,i.j,[[2,i.kb],i.Lb],null,null),(n()(),o.Bb(12,0,null,0,3,"ion-title",[],null,null,null,h.Xb,h.X)),o.Ab(13,49152,null,0,i.Cb,[o.j,o.p,o.F],null,null),(n()(),o.Ub(14,0,[" "," "])),o.Qb(15,1),(n()(),o.Bb(16,0,null,null,95,"ion-content",[],null,null,null,h.nb,h.n)),o.Ab(17,49152,[[1,4]],0,i.w,[o.j,o.p,o.F],{scrollEvents:[0,"scrollEvents"]},null),(n()(),o.Bb(18,0,null,0,8,"ion-card",[],null,null,null,h.kb,h.g)),o.Ab(19,49152,null,0,i.o,[o.j,o.p,o.F],null,null),(n()(),o.Bb(20,0,null,0,3,"ion-card-header",[],null,null,null,h.hb,h.i)),o.Ab(21,49152,null,0,i.q,[o.j,o.p,o.F],null,null),(n()(),o.Bb(22,0,null,0,1,"h4",[],null,null,null,null,null)),(n()(),o.Ub(23,null,["",""])),(n()(),o.Bb(24,0,null,0,2,"ion-card-content",[],null,null,null,h.gb,h.h)),o.Ab(25,49152,null,0,i.p,[o.j,o.p,o.F],null,null),(n()(),o.Ub(26,0,[" "," "])),(n()(),o.Bb(27,0,null,0,9,"ion-card",[],null,null,null,h.kb,h.g)),o.Ab(28,49152,null,0,i.o,[o.j,o.p,o.F],null,null),(n()(),o.Bb(29,0,null,0,4,"ion-card-header",[],null,null,null,h.hb,h.i)),o.Ab(30,49152,null,0,i.q,[o.j,o.p,o.F],null,null),(n()(),o.Bb(31,0,null,0,2,"h4",[],null,null,null,null,null)),(n()(),o.Ub(32,null,["",""])),o.Qb(33,1),(n()(),o.Bb(34,0,null,0,2,"ion-card-content",[],null,null,null,h.gb,h.h)),o.Ab(35,49152,null,0,i.p,[o.j,o.p,o.F],null,null),(n()(),o.Ub(36,0,[" "," "])),(n()(),o.Bb(37,0,null,0,8,"ion-card",[["class","order-product"]],null,null,null,h.kb,h.g)),o.Ab(38,49152,null,0,i.o,[o.j,o.p,o.F],null,null),(n()(),o.Bb(39,0,null,0,4,"ion-card-header",[],null,null,null,h.hb,h.i)),o.Ab(40,49152,null,0,i.q,[o.j,o.p,o.F],null,null),(n()(),o.Bb(41,0,null,0,2,"h4",[],null,null,null,null,null)),(n()(),o.Ub(42,null,["",""])),o.Qb(43,1),(n()(),o.qb(16777216,null,0,1,null,A)),o.Ab(45,278528,null,0,f.j,[o.W,o.S,o.x],{ngForOf:[0,"ngForOf"]},null),(n()(),o.qb(16777216,null,0,1,null,k)),o.Ab(47,16384,null,0,f.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(48,0,null,0,55,"ion-card",[],null,null,null,h.kb,h.g)),o.Ab(49,49152,null,0,i.o,[o.j,o.p,o.F],null,null),(n()(),o.Bb(50,0,null,0,4,"ion-card-header",[],null,null,null,h.hb,h.i)),o.Ab(51,49152,null,0,i.q,[o.j,o.p,o.F],null,null),(n()(),o.Bb(52,0,null,0,2,"h4",[],null,null,null,null,null)),(n()(),o.Ub(53,null,["",""])),o.Qb(54,1),(n()(),o.Bb(55,0,null,0,48,"ion-card-content",[],null,null,null,h.gb,h.h)),o.Ab(56,49152,null,0,i.p,[o.j,o.p,o.F],null,null),(n()(),o.Bb(57,0,null,0,8,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(58,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(59,0,null,0,3,"ion-col",[["size","6"]],null,null,null,h.mb,h.m)),o.Ab(60,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(61,0,[" "," "])),o.Qb(62,1),(n()(),o.Bb(63,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(64,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(65,0,[" "," FCFA "])),(n()(),o.Bb(66,0,null,0,8,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(67,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(68,0,null,0,3,"ion-col",[["size","6"]],null,null,null,h.mb,h.m)),o.Ab(69,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(70,0,[" "," "])),o.Qb(71,1),(n()(),o.Bb(72,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(73,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(74,0,[" "," "])),(n()(),o.Bb(75,0,null,0,9,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(76,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(77,0,null,0,3,"ion-col",[["size","6"]],null,null,null,h.mb,h.m)),o.Ab(78,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(79,0,[" "," "])),o.Qb(80,1),(n()(),o.qb(16777216,null,0,1,null,j)),o.Ab(82,16384,null,0,f.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(16777216,null,0,1,null,x)),o.Ab(84,16384,null,0,f.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.Bb(85,0,null,0,8,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(86,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(87,0,null,0,3,"ion-col",[["size","6"]],null,null,null,h.mb,h.m)),o.Ab(88,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(89,0,[" "," "])),o.Qb(90,1),(n()(),o.Bb(91,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(92,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(93,0,[" "," "])),(n()(),o.Bb(94,0,null,0,9,"ion-row",[],null,null,null,h.Jb,h.J)),o.Ab(95,49152,null,0,i.lb,[o.j,o.p,o.F],null,null),(n()(),o.Bb(96,0,null,0,3,"ion-col",[["size","6"]],null,null,null,h.mb,h.m)),o.Ab(97,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Ub(98,0,[" "," "])),o.Qb(99,1),(n()(),o.Bb(100,0,null,0,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,h.mb,h.m)),o.Ab(101,49152,null,0,i.v,[o.j,o.p,o.F],{size:[0,"size"]},null),(n()(),o.Bb(102,0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),o.Ub(103,null,[""," FCFA"])),(n()(),o.Bb(104,0,null,0,5,"ion-card",[["class","ion-text-center"]],null,null,null,h.kb,h.g)),o.Ab(105,49152,null,0,i.o,[o.j,o.p,o.F],null,null),(n()(),o.qb(16777216,null,0,1,null,z)),o.Ab(107,16384,null,0,f.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(16777216,null,0,1,null,O)),o.Ab(109,16384,null,0,f.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o.qb(16777216,null,0,1,null,S)),o.Ab(111,16384,null,0,f.k,[o.W,o.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,10,0,"arrow-round-back"),n(l,17,0,!0),n(l,45,0,t.order.line_items),n(l,47,0,0!=t.shared.couponArray.length),n(l,60,0,"6"),n(l,64,0,"6"),n(l,69,0,"6"),n(l,73,0,"6"),n(l,78,0,"6"),n(l,82,0,!t.loaderTaxCalculating),n(l,84,0,t.loaderTaxCalculating),n(l,88,0,"6"),n(l,92,0,"6"),n(l,97,0,"6"),n(l,101,0,"6"),n(l,107,0,t.loaderPaymentMethods),n(l,109,0,!t.loaderPaymentMethods),n(l,111,0,""!=t.selectedPaymentMethod)}),(function(n,l){var t=l.component,e=o.Vb(l,14,0,n(l,15,0,o.Nb(l,0),"Commande"));n(l,14,0,e),n(l,23,0,"Vos coordonn\xe9es"),n(l,26,0,t.order.billing.last_name+","+t.order.billing.first_name+","+t.order.billing.phone+","+t.order.billing.city+","+t.order.shipping.country);var i=o.Vb(l,32,0,n(l,33,0,o.Nb(l,0),"Lieu de livraison"));n(l,32,0,i),n(l,36,0,t.order.shipping_lines[0].title);var u=o.Vb(l,42,0,n(l,43,0,o.Nb(l,0),"Produits"));n(l,42,0,u);var a=o.Vb(l,53,0,n(l,54,0,o.Nb(l,0),"Sous total"));n(l,53,0,a);var r=o.Vb(l,61,0,n(l,62,0,o.Nb(l,0),"Prix des produits"));n(l,61,0,r),n(l,65,0,t.productsTotal);var s=o.Vb(l,70,0,n(l,71,0,o.Nb(l,0),"Frais"));n(l,70,0,s),n(l,74,0,t.order.shipping_lines[0].total);var c=o.Vb(l,79,0,n(l,80,0,o.Nb(l,0),"Tax"));n(l,79,0,c);var b=o.Vb(l,89,0,n(l,90,0,o.Nb(l,0),"Remise"));n(l,89,0,b),n(l,93,0,t.discount);var d=o.Vb(l,98,0,n(l,99,0,o.Nb(l,0),"Total"));n(l,98,0,d),n(l,103,0,t.totalAmountWithDisocunt)}))}var U=o.xb("app-order",p,(function(n){return o.Wb(0,[(n()(),o.Bb(0,0,null,null,1,"app-order",[],null,null,null,T,v)),o.Ab(1,114688,null,0,p,[i.Lb,P.c,u.a,a,r.a,s.a,d.a,c.a,i.a,b.a,o.g],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),D=t("iInd"),N=t("wWlB");t.d(l,"OrderPageModuleNgFactory",(function(){return W}));var W=o.yb(g,[],(function(n){return o.Kb([o.Lb(512,o.m,o.jb,[[8,[m.a,U]],[3,o.m],o.D]),o.Lb(4608,f.m,f.l,[o.z,[2,f.v]]),o.Lb(4608,y.m,y.m,[]),o.Lb(4608,i.c,i.c,[o.F,o.g]),o.Lb(4608,i.Kb,i.Kb,[i.c,o.m,o.w]),o.Lb(4608,i.Pb,i.Pb,[i.c,o.m,o.w]),o.Lb(1073742336,f.b,f.b,[]),o.Lb(1073742336,y.l,y.l,[]),o.Lb(1073742336,y.c,y.c,[]),o.Lb(1073742336,i.Gb,i.Gb,[]),o.Lb(1073742336,D.o,D.o,[[2,D.t],[2,D.m]]),o.Lb(1073742336,N.a,N.a,[]),o.Lb(1073742336,g,g,[]),o.Lb(1024,D.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);