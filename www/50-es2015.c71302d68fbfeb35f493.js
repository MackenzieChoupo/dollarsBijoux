(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"6vk3":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),i=t("ZZ/e"),o=t("sf9b");let u=(()=>{class l{constructor(){this.apikey="2702753475f62e9dea04482.91237891",this.site_id=132465,this.notify_url="https://YOUR_NOTIFY_URL",this.currency="CFA"}}return l.ngInjectableDef=e.Zb({factory:function(){return new l},token:l,providedIn:"root"}),l})();var s=t("UmVP"),r=t("KTio"),a=t("b3D7"),c=t("9B/o"),b=t("egMn");class d{constructor(l,n,t,e,i,u,s,r,a,c,b){this.navCtrl=l,this.http=n,this.config=t,this.cinetpay=e,this.shared=i,this.loading=u,this.spinnerDialog=s,this.couponProvider=r,this.actionSheetCtrl=a,this.iab=c,this.applicationRef=b,this.url="https://dollarsbijoux.com",this.consumerKey="ck_3a5c590f46556e7d542b8ae25c1e1266d9bece06",this.consumerSecret="cs_b994779812af2a1694688e15f2b058ebb7c4eb0d",this.line_items=[],this.discount=0,this.productsTotal=0,this.totalAmountWithDisocunt=0,this.paymentMethods=[],this.selectedPaymentMethod="",this.selectedPaymentMethodTitle="",this.tax=0,this.loaderTaxCalculating=!0,this.loaderPaymentMethods=!0,this.ordersitems=[],this.apikey="2702753475f62e9dea04482.91237891",this.site_id=132465,this.notify_url="https://YOUR_NOTIFY_URL",this.currency="CFA",this.addOrder=function(l){switch(o.a.countryCode){case"cm":if(this.selectedPaymentMethod="alg_custom_gateway_1")return new Promise(l=>{let n={};n={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country,email:this.order.billing.email,phone:this.order.billing.phone},shipping:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country},line_items:this.getProducts(),shipping_lines:this.getShippingLines(),customer_id:this.shared.customerData.id},console.log(n),this.trans_id=window.performance&&window.performance.now&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.now()+window.performance.timing.navigationStart:Date.now(),CinetPay.setConfig({apikey:this.apikey,site_id:this.site_id,notify_url:this.notify_url}),CinetPay.on("signatureCreated",(function(l){console.log("Tocken g\xe9n\xe9r\xe9: "+l)})),CinetPay.on("paymentPending",(function(l){console.log("code:"+l.code+"Message::"+l.message)})),CinetPay.on("error",(function(l){console.log("Error code:"+l.code+"Message::"+l.message)})),CinetPay.on("paymentSuccessfull",(function(t){if(console.log(t),l(t),void 0!==t.lastTime&&"00"==t.cpm_result)return new Promise(l=>{this.http.post(`${this.config.getCountryParams(o.a.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${this.config.getCountryParams(o.a.countryCode)[1]}&consumer_secret=${this.config.getCountryParams(o.a.countryCode)[2]}`,n).subscribe(n=>{l(n),this.navCtrl.navigateForward("openThankYouPage")})})})),CinetPay.setSignatureData({amount:parseFloat(this.productsTotal)+parseFloat(this.shared.shipping_lines[0].total)+parseFloat(this.discount)+parseFloat(this.tax),trans_id:this.trans_id,currency:this.currency,designation:this.designation,custom:this.cpm_custom}),CinetPay.getSignature()});{let l={},n=0;null!=this.shared.customerData.id&&(n=this.shared.customerData.id);let t=null;return null!=this.shared.customerData.cookie&&(t=this.shared.customerData.cookie),l={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country,email:this.order.billing.email,phone:this.order.billing.phone},shipping:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country},line_items:this.getProducts(),shipping_lines:this.getShippingLines(),customer_id:this.shared.customerData.id},console.log(l),new Promise(n=>{this.http.post(`${this.config.getCountryParams(o.a.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${this.config.getCountryParams(o.a.countryCode)[1]}&consumer_secret=${this.config.getCountryParams(o.a.countryCode)[2]}`,l).subscribe(l=>{n(l),this.navCtrl.navigateForward("openThankYouPage")})})}case"gb":case"ck":case"cb":{let l={},n=0;null!=this.shared.customerData.id&&(n=this.shared.customerData.id);let t=null;return null!=this.shared.customerData.cookie&&(t=this.shared.customerData.cookie),l={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country,email:this.order.billing.email,phone:this.order.billing.phone},shipping:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country},line_items:this.getProducts(),shipping_lines:this.getShippingLines(),customer_id:this.shared.customerData.id},console.log(l),new Promise(n=>{this.http.post(`${this.config.getCountryParams(o.a.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${this.config.getCountryParams(o.a.countryCode)[1]}&consumer_secret=${this.config.getCountryParams(o.a.countryCode)[2]}`,l).subscribe(l=>{n(l),this.navCtrl.navigateForward("openThankYouPage")})})}case"ci":return new Promise(l=>{let n={};n={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country,email:this.order.billing.email,phone:this.order.billing.phone},shipping:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country},line_items:this.getProducts(),shipping_lines:this.getShippingLines(),customer_id:this.shared.customerData.id},console.log(n),this.trans_id=window.performance&&window.performance.now&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.now()+window.performance.timing.navigationStart:Date.now(),CinetPay.setConfig({apikey:this.apikey,site_id:this.site_id,notify_url:this.notify_url}),CinetPay.on("signatureCreated",(function(l){console.log("Tocken g\xe9n\xe9r\xe9: "+l)})),CinetPay.on("paymentPending",(function(l){console.log("code:"+l.code+"Message::"+l.message)})),CinetPay.on("error",(function(l){console.log("Error code:"+l.code+"Message::"+l.message),this.events.publish("fail")})),CinetPay.on("paymentSuccessfull",(function(t){if(console.log(t),l(t),void 0!==t.lastTime&&"00"==t.cpm_result)return new Promise(l=>{this.http.post(`${this.config.getCountryParams(o.a.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${this.config.getCountryParams(o.a.countryCode)[1]}&consumer_secret=${this.config.getCountryParams(o.a.countryCode)[2]}`,n).subscribe(n=>{l(n),this.events.publish("openThankYouPage")})})})),CinetPay.setSignatureData({amount:parseFloat(this.productsTotal)+parseFloat(this.shared.shipping_lines[0].total)+parseFloat(this.discount)+parseFloat(this.tax),trans_id:this.trans_id,currency:this.currency,designation:this.designation,custom:this.cpm_custom}),CinetPay.getSignature()});default:return new Promise(l=>{let n={};n={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,set_paid:!0,billing:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country,email:this.order.billing.email,phone:this.order.billing.phone},shipping:{first_name:this.order.billing.first_name,last_name:this.order.billing.last_name,address_1:"",address_2:"",city:this.order.billing.city,state:"",postcode:"",country:this.order.billing.country},line_items:this.getProducts(),shipping_lines:this.getShippingLines(),customer_id:this.shared.customerData.id},console.log(n),this.trans_id=window.performance&&window.performance.now&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.now()+window.performance.timing.navigationStart:Date.now(),CinetPay.setConfig({apikey:this.apikey,site_id:this.site_id,notify_url:this.notify_url}),CinetPay.on("signatureCreated",(function(l){console.log("Tocken g\xe9n\xe9r\xe9: "+l)})),CinetPay.on("paymentPending",(function(l){console.log("code:"+l.code+"Message::"+l.message)})),CinetPay.on("error",(function(l){console.log("Error code:"+l.code+"Message::"+l.message),this.navCtrl.navigateForward("fail")})),CinetPay.on("paymentSuccessfull",(function(t){if(console.log(t),l(t),void 0!==t.lastTime&&"00"==t.cpm_result)return new Promise(l=>{this.http.post(`${this.config.getCountryParams(o.a.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${this.config.getCountryParams(o.a.countryCode)[1]}&consumer_secret=${this.config.getCountryParams(o.a.countryCode)[2]}`,n).subscribe(n=>{l(n),this.navCtrl.navigateForward("openThankYouPage")})})})),CinetPay.setSignatureData({amount:parseFloat(this.productsTotal)+parseFloat(this.shared.shipping_lines[0].total)+parseFloat(this.discount)+parseFloat(this.tax),trans_id:this.trans_id,currency:this.currency,designation:this.designation,custom:this.cpm_custom}),CinetPay.getSignature()})}},this.calculateDiscount=function(){let l=0;for(let n of this.shared.cartProducts)l+=parseFloat(n.subtotal);this.productsTotal=l,this.discount=parseFloat(this.shared.productsTotal())-l},this.calculateTotal=function(){this.totalAmountWithDisocunt=parseFloat(this.productsTotal)+parseFloat(this.shared.shipping_lines[0].total)+parseFloat(this.discount)+parseFloat(this.tax)},this.order={token:this.shared.customerData.cookie,payment_method:this.selectedPaymentMethod,payment_method_title:this.selectedPaymentMethodTitle,billing:this.shared.billing,shipping:this.shared.shipping,line_items:this.shared.cartProducts,shipping_lines:this.shared.shipping_lines,coupon_lines:this.shared.couponArray,customer_id:this.shared.customerData.id},this.calculateDiscount(),this.calculateTotal(),this.calculateTax()}getProducts(){var l=[];for(let t of this.shared.cartProducts){var n={quantity:t.quantity,product_id:t.product_id,total:t.total.toString(),price:t.price.toString(),customerNotes:t.customerNotes};t.variation_id&&Object.assign(n,{variation_id:t.variation_id}),t.meta_data&&Object.assign(n,{meta_data:t.meta_data}),l.push(n)}return l}getCoupons(){var l=[];for(let n of this.shared.couponArray)l.push({code:n.code,discount:n.amount});return l}getShippingLines(){var l=[];for(let n of this.shared.shipping_lines)l.push({method_id:n.method_id,method_title:n.method_title,total:n.total.toString(),code:n.code,discount:n.amount});return l}selectPayment(l){this.selectedPaymentMethod=l.id,this.selectedPaymentMethodTitle=l.title,console.log(this.selectedPaymentMethod),console.log(this.selectedPaymentMethodTitle),this.scrollToBottom()}scrollToBottom(){setTimeout(()=>{this.content.scrollToBottom(),console.log("botton")},300)}ngOnInit(){this.config.getWoo("payment_gateways?"+this.config.productsArguments).then(l=>{this.loaderPaymentMethods=!1,this.paymentMethods=l,this.applicationRef.tick()})}openHomePage(){this.navCtrl.navigateRoot("/home")}calculateTax(){var l={billing_info:this.shared.billing,shipping_info:this.shared.shipping,products:this.getProducts(),shipping_ids:this.shared.shipping_lines};this.http.get(this.config.getCountryParams(o.a.countryCode)[0]+"/api/appsettings/ionic_get_tax/?insecure=cool&order="+encodeURIComponent(JSON.stringify(l))).subscribe(l=>{this.loaderTaxCalculating=!1;let n=parseFloat(JSON.stringify(l));n?console.log("tax "+n):(console.log("tax err "+n),n=0),this.tax=n,this.calculateTotal(),this.applicationRef.tick()})}}class h{}var g=t("pMnS"),p=t("oBZk"),m=t("SVse"),_=t("s7LF"),f=t("taci"),y=t("4How"),P=t("IheW"),C=e.zb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{font-size:12px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{font-size:14px;margin-bottom:0;margin-top:0;color:#000;background-color:#eee;padding:10px!important}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;font-size:12px;font-weight:600}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{background-color:#fff;font-size:12px;color:#000;padding:10px!important}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .card-disable[_ngcontent-%COMP%]{color:gray!important}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;margin-bottom:6px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:80%}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{--background:transparent}ion-content[_ngcontent-%COMP%]   .row-product[_ngcontent-%COMP%]{border-bottom:solid #d3d3d3;border-width:.2px}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin:0}"]],data:{}});function F(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),e.Ub(1,null,["","\xa0\xa0"]))],null,(function(l,n){l(n,1,0,n.context.$implicit.name)}))}function A(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,7,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(1,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,2,"ion-col",[["size","6"]],null,null,null,p.mb,p.m)),e.Ab(3,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(4,0,["","\xa0:"])),(l()(),e.Bb(5,0,null,0,2,"ion-col",[["size","6"]],null,null,null,p.mb,p.m)),e.Ab(6,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(7,0,["",""]))],(function(l,n){l(n,3,0,"6"),l(n,6,0,"6")}),(function(l,n){l(n,4,0,n.context.$implicit.key),l(n,7,0,n.context.$implicit.value)}))}function v(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,58,"ion-card-content",[],null,null,null,p.gb,p.h)),e.Ab(1,49152,null,0,i.p,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,8,"ion-row",[["class","row-product"]],null,null,null,p.Jb,p.J)),e.Ab(3,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,6,"ion-col",[],null,null,null,p.mb,p.m)),e.Ab(5,49152,null,0,i.v,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,4,"h3",[],null,null,null,null,null)),(l()(),e.Ub(7,null,[""," "])),(l()(),e.Bb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.qb(16777216,null,null,1,null,F)),e.Ab(10,278528,null,0,m.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(11,0,null,0,47,"ion-item",[["lines","full"]],null,null,null,p.Ab,p.y)),e.Ab(12,49152,null,0,i.J,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(13,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,p.Wb,p.W)),e.Ab(14,49152,null,0,i.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(15,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.Bb(16,0,null,0,42,"ion-label",[],null,null,null,p.Bb,p.B)),e.Ab(17,49152,null,0,i.P,[e.j,e.p,e.F],null,null),(l()(),e.Bb(18,0,null,0,8,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(19,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(20,0,null,0,3,"ion-col",[["class","ion-text-left"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(21,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(22,0,["","\xa0:\xa0"])),e.Qb(23,1),(l()(),e.Bb(24,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(25,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(26,0,[""," FCFA"])),(l()(),e.Bb(27,0,null,0,8,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(28,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(29,0,null,0,3,"ion-col",[["class","ion-text-left"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(30,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(31,0,["","\xa0:\xa0"])),e.Qb(32,1),(l()(),e.Bb(33,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(34,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(35,0,["",""])),(l()(),e.qb(16777216,null,0,1,null,A)),e.Ab(37,278528,null,0,m.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.Bb(38,0,null,0,8,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(39,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(40,0,null,0,3,"ion-col",[["class","ion-text-left"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(41,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(42,0,["","\xa0:\xa0"])),e.Qb(43,1),(l()(),e.Bb(44,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(45,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(46,0,[""," FCFA"])),(l()(),e.Bb(47,0,null,0,11,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(48,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(49,0,null,0,5,"ion-col",[["class","ion-text-left"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(50,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(51,0,null,0,2,"strong",[],null,null,null,null,null)),(l()(),e.Ub(52,null,["",""])),e.Qb(53,1),(l()(),e.Ub(-1,0,["\xa0:\xa0"])),(l()(),e.Bb(55,0,null,0,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(56,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(57,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Ub(58,null,[""," FCFA"]))],(function(l,n){l(n,10,0,n.context.$implicit.categories),l(n,12,0,"full"),l(n,21,0,"6"),l(n,25,0,"6"),l(n,30,0,"6"),l(n,34,0,"6"),l(n,37,0,n.context.$implicit.meta_data),l(n,41,0,"6"),l(n,45,0,"6"),l(n,50,0,"6"),l(n,56,0,"6")}),(function(l,n){l(n,7,0,n.context.$implicit.name),l(n,15,0,e.Fb(1,"",n.context.$implicit.image,""));var t=e.Vb(n,22,0,l(n,23,0,e.Nb(n.parent,0),"Prix"));l(n,22,0,t),l(n,26,0,n.context.$implicit.price);var i=e.Vb(n,31,0,l(n,32,0,e.Nb(n.parent,0),"Quantit\xe9"));l(n,31,0,i),l(n,35,0,n.context.$implicit.quantity);var o=e.Vb(n,42,0,l(n,43,0,e.Nb(n.parent,0),"Sous Total"));l(n,42,0,o),l(n,46,0,n.context.$implicit.subtotal);var u=e.Vb(n,52,0,l(n,53,0,e.Nb(n.parent,0),"Total"));l(n,52,0,u),l(n,58,0,n.context.$implicit.total)}))}function w(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,8,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(1,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,2,"ion-col",[["size","6"]],null,null,null,p.mb,p.m)),e.Ab(3,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(4,0,[" "," "])),(l()(),e.Bb(5,0,null,0,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(6,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(7,0,[" "," "])),e.Qb(8,1)],(function(l,n){l(n,3,0,"6"),l(n,6,0,"6")}),(function(l,n){l(n,4,0,n.context.$implicit.code);var t=e.Vb(n,7,0,l(n,8,0,e.Nb(n.parent.parent,1),n.context.$implicit.amount));l(n,7,0,t)}))}function B(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,9,"ion-card",[],null,null,null,p.kb,p.g)),e.Ab(1,49152,null,0,i.o,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,3,"ion-card-header",[],null,null,null,p.hb,p.i)),e.Ab(3,49152,null,0,i.q,[e.j,e.p,e.F],null,null),(l()(),e.Ub(4,0,[" "," "])),e.Qb(5,1),(l()(),e.Bb(6,0,null,0,3,"ion-card-content",[],null,null,null,p.gb,p.h)),e.Ab(7,49152,null,0,i.p,[e.j,e.p,e.F],null,null),(l()(),e.qb(16777216,null,0,1,null,w)),e.Ab(9,278528,null,0,m.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,9,0,n.component.shared.couponArray)}),(function(l,n){var t=e.Vb(n,4,0,l(n,5,0,e.Nb(n.parent,0),"Code Promo"));l(n,4,0,t)}))}function j(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(1,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(2,0,[" "," "]))],(function(l,n){l(n,1,0,"6")}),(function(l,n){l(n,2,0,n.component.tax)}))}function k(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(1,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(2,0,null,0,1,"ion-spinner",[],null,null,null,p.Sb,p.S)),e.Ab(3,49152,null,0,i.ub,[e.j,e.p,e.F],null,null)],(function(l,n){l(n,1,0,"6")}),null)}function z(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,1,"ion-spinner",[],null,null,null,p.Sb,p.S)),e.Ab(1,49152,null,0,i.ub,[e.j,e.p,e.F],null,null)],null,null)}function x(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),e.Bb(1,0,null,null,2,"ion-select-option",[["ngif","p.enabled"]],null,null,null,p.Nb,p.O)),e.Ab(2,49152,null,0,i.qb,[e.j,e.p,e.F],{value:[0,"value"]},null),(l()(),e.Ub(3,0,["",""]))],(function(l,n){l(n,2,0,n.context.$implicit)}),(function(l,n){l(n,3,0,n.context.$implicit.title)}))}function M(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,17,"ion-card-content",[],null,null,null,p.gb,p.h)),e.Ab(1,49152,null,0,i.p,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,15,"ion-list",[],null,null,null,p.Cb,p.C)),e.Ab(3,49152,null,0,i.Q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,13,"ion-item",[],null,null,null,p.Ab,p.y)),e.Ab(5,49152,null,0,i.J,[e.j,e.p,e.F],null,null),(l()(),e.Bb(6,0,null,0,2,"ion-label",[["color","dark"]],null,null,null,p.Bb,p.B)),e.Ab(7,49152,null,0,i.P,[e.j,e.p,e.F],{color:[0,"color"]},null),(l()(),e.Ub(8,0,["",""])),(l()(),e.Bb(9,0,null,0,8,"ion-select",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(l,n,t){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.Nb(l,10)._handleBlurEvent(t.target)&&i),"ionChange"===n&&(i=!1!==e.Nb(l,10)._handleChangeEvent(t.target)&&i),"ngModelChange"===n&&(i=!1!==(o.payment_method=t)&&i),"ionChange"===n&&(i=!1!==o.selectPayment(o.payment_method)&&i),i}),p.Ob,p.N)),e.Ab(10,16384,null,0,i.Sb,[e.p],null,null),e.Rb(1024,null,_.e,(function(l){return[l]}),[i.Sb]),e.Ab(12,671744,null,0,_.j,[[8,null],[8,null],[8,null],[6,_.e]],{model:[0,"model"]},{update:"ngModelChange"}),e.Rb(2048,null,_.f,null,[_.j]),e.Ab(14,16384,null,0,_.g,[[4,_.f]],null,null),e.Ab(15,49152,null,0,i.pb,[e.j,e.p,e.F],{cancelText:[0,"cancelText"],okText:[1,"okText"]},null),(l()(),e.qb(16777216,null,0,1,null,x)),e.Ab(17,278528,null,0,m.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,7,0,"dark"),l(n,12,0,t.payment_method),l(n,15,0,e.Fb(1,"","annuler",""),e.Fb(1,"","Ok","")),l(n,17,0,t.paymentMethods)}),(function(l,n){l(n,8,0,"Methode de paiement"),l(n,9,0,e.Nb(n,14).ngClassUntouched,e.Nb(n,14).ngClassTouched,e.Nb(n,14).ngClassPristine,e.Nb(n,14).ngClassDirty,e.Nb(n,14).ngClassValid,e.Nb(n,14).ngClassInvalid,e.Nb(n,14).ngClassPending)}))}function O(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,3,"ion-button",[["color","secondary"],["expand","full"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addOrder()&&e),e}),p.eb,p.e)),e.Ab(1,49152,null,0,i.m,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),e.Ub(2,0,[" "," "])),e.Qb(3,1)],(function(l,n){l(n,1,0,"secondary","full")}),(function(l,n){var t=e.Vb(n,2,0,l(n,3,0,e.Nb(n.parent,0),"Continuer"));l(n,2,0,t)}))}function T(l){return e.Wb(0,[e.Pb(0,f.a,[s.a]),e.Pb(0,y.a,[]),e.Sb(671088640,1,{content:0}),(l()(),e.Bb(3,0,null,null,12,"ion-header",[],null,null,null,p.sb,p.s)),e.Ab(4,49152,null,0,i.D,[e.j,e.p,e.F],null,null),(l()(),e.Bb(5,0,null,0,10,"ion-toolbar",[],null,null,null,p.Zb,p.Z)),e.Ab(6,49152,null,0,i.Eb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(7,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,p.fb,p.f)),e.Ab(8,49152,null,0,i.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(9,0,null,0,2,"ion-back-button",[["icon","arrow-round-back"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e.Nb(l,11).onClick(t)&&i),i}),p.cb,p.c)),e.Ab(10,49152,null,0,i.i,[e.j,e.p,e.F],{icon:[0,"icon"]},null),e.Ab(11,16384,null,0,i.j,[[2,i.kb],i.Lb],null,null),(l()(),e.Bb(12,0,null,0,3,"ion-title",[],null,null,null,p.Xb,p.X)),e.Ab(13,49152,null,0,i.Cb,[e.j,e.p,e.F],null,null),(l()(),e.Ub(14,0,[" "," "])),e.Qb(15,1),(l()(),e.Bb(16,0,null,null,95,"ion-content",[],null,null,null,p.nb,p.n)),e.Ab(17,49152,[[1,4]],0,i.w,[e.j,e.p,e.F],{scrollEvents:[0,"scrollEvents"]},null),(l()(),e.Bb(18,0,null,0,8,"ion-card",[],null,null,null,p.kb,p.g)),e.Ab(19,49152,null,0,i.o,[e.j,e.p,e.F],null,null),(l()(),e.Bb(20,0,null,0,3,"ion-card-header",[],null,null,null,p.hb,p.i)),e.Ab(21,49152,null,0,i.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(22,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e.Ub(23,null,["",""])),(l()(),e.Bb(24,0,null,0,2,"ion-card-content",[],null,null,null,p.gb,p.h)),e.Ab(25,49152,null,0,i.p,[e.j,e.p,e.F],null,null),(l()(),e.Ub(26,0,[" "," "])),(l()(),e.Bb(27,0,null,0,9,"ion-card",[],null,null,null,p.kb,p.g)),e.Ab(28,49152,null,0,i.o,[e.j,e.p,e.F],null,null),(l()(),e.Bb(29,0,null,0,4,"ion-card-header",[],null,null,null,p.hb,p.i)),e.Ab(30,49152,null,0,i.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(31,0,null,0,2,"h4",[],null,null,null,null,null)),(l()(),e.Ub(32,null,["",""])),e.Qb(33,1),(l()(),e.Bb(34,0,null,0,2,"ion-card-content",[],null,null,null,p.gb,p.h)),e.Ab(35,49152,null,0,i.p,[e.j,e.p,e.F],null,null),(l()(),e.Ub(36,0,[" "," "])),(l()(),e.Bb(37,0,null,0,8,"ion-card",[["class","order-product"]],null,null,null,p.kb,p.g)),e.Ab(38,49152,null,0,i.o,[e.j,e.p,e.F],null,null),(l()(),e.Bb(39,0,null,0,4,"ion-card-header",[],null,null,null,p.hb,p.i)),e.Ab(40,49152,null,0,i.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(41,0,null,0,2,"h4",[],null,null,null,null,null)),(l()(),e.Ub(42,null,["",""])),e.Qb(43,1),(l()(),e.qb(16777216,null,0,1,null,v)),e.Ab(45,278528,null,0,m.j,[e.W,e.S,e.x],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(16777216,null,0,1,null,B)),e.Ab(47,16384,null,0,m.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(48,0,null,0,55,"ion-card",[],null,null,null,p.kb,p.g)),e.Ab(49,49152,null,0,i.o,[e.j,e.p,e.F],null,null),(l()(),e.Bb(50,0,null,0,4,"ion-card-header",[],null,null,null,p.hb,p.i)),e.Ab(51,49152,null,0,i.q,[e.j,e.p,e.F],null,null),(l()(),e.Bb(52,0,null,0,2,"h4",[],null,null,null,null,null)),(l()(),e.Ub(53,null,["",""])),e.Qb(54,1),(l()(),e.Bb(55,0,null,0,48,"ion-card-content",[],null,null,null,p.gb,p.h)),e.Ab(56,49152,null,0,i.p,[e.j,e.p,e.F],null,null),(l()(),e.Bb(57,0,null,0,8,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(58,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(59,0,null,0,3,"ion-col",[["size","6"]],null,null,null,p.mb,p.m)),e.Ab(60,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(61,0,[" "," "])),e.Qb(62,1),(l()(),e.Bb(63,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(64,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(65,0,[" "," FCFA "])),(l()(),e.Bb(66,0,null,0,8,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(67,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(68,0,null,0,3,"ion-col",[["size","6"]],null,null,null,p.mb,p.m)),e.Ab(69,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(70,0,[" "," "])),e.Qb(71,1),(l()(),e.Bb(72,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(73,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(74,0,[" "," "])),(l()(),e.Bb(75,0,null,0,9,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(76,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(77,0,null,0,3,"ion-col",[["size","6"]],null,null,null,p.mb,p.m)),e.Ab(78,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(79,0,[" "," "])),e.Qb(80,1),(l()(),e.qb(16777216,null,0,1,null,j)),e.Ab(82,16384,null,0,m.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,k)),e.Ab(84,16384,null,0,m.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.Bb(85,0,null,0,8,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(86,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(87,0,null,0,3,"ion-col",[["size","6"]],null,null,null,p.mb,p.m)),e.Ab(88,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(89,0,[" "," "])),e.Qb(90,1),(l()(),e.Bb(91,0,null,0,2,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(92,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(93,0,[" "," "])),(l()(),e.Bb(94,0,null,0,9,"ion-row",[],null,null,null,p.Jb,p.J)),e.Ab(95,49152,null,0,i.lb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(96,0,null,0,3,"ion-col",[["size","6"]],null,null,null,p.mb,p.m)),e.Ab(97,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Ub(98,0,[" "," "])),e.Qb(99,1),(l()(),e.Bb(100,0,null,0,3,"ion-col",[["class","ion-text-right"],["size","6"]],null,null,null,p.mb,p.m)),e.Ab(101,49152,null,0,i.v,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Bb(102,0,null,0,1,"strong",[],null,null,null,null,null)),(l()(),e.Ub(103,null,[""," FCFA"])),(l()(),e.Bb(104,0,null,0,5,"ion-card",[["class","ion-text-center"]],null,null,null,p.kb,p.g)),e.Ab(105,49152,null,0,i.o,[e.j,e.p,e.F],null,null),(l()(),e.qb(16777216,null,0,1,null,z)),e.Ab(107,16384,null,0,m.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,M)),e.Ab(109,16384,null,0,m.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(16777216,null,0,1,null,O)),e.Ab(111,16384,null,0,m.k,[e.W,e.S],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,10,0,"arrow-round-back"),l(n,17,0,!0),l(n,45,0,t.order.line_items),l(n,47,0,0!=t.shared.couponArray.length),l(n,60,0,"6"),l(n,64,0,"6"),l(n,69,0,"6"),l(n,73,0,"6"),l(n,78,0,"6"),l(n,82,0,!t.loaderTaxCalculating),l(n,84,0,t.loaderTaxCalculating),l(n,88,0,"6"),l(n,92,0,"6"),l(n,97,0,"6"),l(n,101,0,"6"),l(n,107,0,t.loaderPaymentMethods),l(n,109,0,!t.loaderPaymentMethods),l(n,111,0,""!=t.selectedPaymentMethod)}),(function(l,n){var t=n.component,i=e.Vb(n,14,0,l(n,15,0,e.Nb(n,0),"Commande"));l(n,14,0,i),l(n,23,0,"Vos coordonn\xe9es"),l(n,26,0,t.order.billing.last_name+","+t.order.billing.first_name+","+t.order.billing.phone+","+t.order.billing.city+","+t.order.shipping.country);var o=e.Vb(n,32,0,l(n,33,0,e.Nb(n,0),"Lieu de livraison"));l(n,32,0,o),l(n,36,0,t.order.shipping_lines[0].title);var u=e.Vb(n,42,0,l(n,43,0,e.Nb(n,0),"Produits"));l(n,42,0,u);var s=e.Vb(n,53,0,l(n,54,0,e.Nb(n,0),"Sous total"));l(n,53,0,s);var r=e.Vb(n,61,0,l(n,62,0,e.Nb(n,0),"Prix des produits"));l(n,61,0,r),l(n,65,0,t.productsTotal);var a=e.Vb(n,70,0,l(n,71,0,e.Nb(n,0),"Frais"));l(n,70,0,a),l(n,74,0,t.order.shipping_lines[0].total);var c=e.Vb(n,79,0,l(n,80,0,e.Nb(n,0),"Tax"));l(n,79,0,c);var b=e.Vb(n,89,0,l(n,90,0,e.Nb(n,0),"Remise"));l(n,89,0,b),l(n,93,0,t.discount);var d=e.Vb(n,98,0,l(n,99,0,e.Nb(n,0),"Total"));l(n,98,0,d),l(n,103,0,t.totalAmountWithDisocunt)}))}function S(l){return e.Wb(0,[(l()(),e.Bb(0,0,null,null,1,"app-order",[],null,null,null,T,C)),e.Ab(1,114688,null,0,d,[i.Lb,P.c,o.a,u,s.a,r.a,b.a,a.a,i.a,c.a,e.g],null,null)],(function(l,n){l(n,1,0)}),null)}var U=e.xb("app-order",d,S,{},{},[]),D=t("iInd"),N=t("wWlB");t.d(n,"OrderPageModuleNgFactory",(function(){return W}));var W=e.yb(h,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[g.a,U]],[3,e.m],e.D]),e.Lb(4608,m.m,m.l,[e.z,[2,m.v]]),e.Lb(4608,_.m,_.m,[]),e.Lb(4608,i.c,i.c,[e.F,e.g]),e.Lb(4608,i.Kb,i.Kb,[i.c,e.m,e.w]),e.Lb(4608,i.Pb,i.Pb,[i.c,e.m,e.w]),e.Lb(1073742336,m.b,m.b,[]),e.Lb(1073742336,_.l,_.l,[]),e.Lb(1073742336,_.c,_.c,[]),e.Lb(1073742336,i.Gb,i.Gb,[]),e.Lb(1073742336,D.o,D.o,[[2,D.t],[2,D.m]]),e.Lb(1073742336,N.a,N.a,[]),e.Lb(1073742336,h,h,[]),e.Lb(1024,D.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);