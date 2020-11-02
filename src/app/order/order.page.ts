import { Component, OnInit, ApplicationRef, ViewChild } from '@angular/core';
import { NavController, ActionSheetController, IonContent, Events  } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigService } from 'src/providers/config/config.service';
import { CinetpayService} from 'src/app/services/cinetpay.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LoadingService } from 'src/providers/loading/loading.service';

import { CouponService } from 'src/providers/coupon/coupon.service';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';


declare var CinetPay;


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;
  
  public url: string = 'https://dollarsbijoux.com';
  public consumerKey: string = 'ck_3a5c590f46556e7d542b8ae25c1e1266d9bece06';
  public consumerSecret: string = 'cs_b994779812af2a1694688e15f2b058ebb7c4eb0d';
  customerNotes;
  line_items:any =  [];
  discount = 0;
  productsTotal = 0;
  totalAmountWithDisocunt = 0;
 /* paymentMethods = [
    {payment_method: "agence"  , payment_method_title: "payer à l'agence"},
    {payment_method: "ommomo"  , payment_method_title: "payer par Orange Money, Mobile Money"},
    {payment_method: "paypal"  , payment_method_title: "payer par paypal"},
    {payment_method: "dbCard"  , payment_method_title: "payer avec votre DB Card"}

  ];*/
  paymentMethods = [];
  
  selectedPaymentMethod = '';
  selectedPaymentMethodTitle = '';
  order: any;
  tax = 0;
  loaderTaxCalculating: boolean = true;
  loaderPaymentMethods: boolean = true;
  ordersitems: any[] = [];
  public CinetPay: any;

  public apikey: string = '2702753475f62e9dea04482.91237891';
  public site_id: number = 132465;
  public notify_url: string = 'https://YOUR_NOTIFY_URL';
  public trans_id: any; //Your transaction id
  public cpm_custom: any;
  public designation: any;
  public currency: string = 'CFA';
  public amount: any;

  constructor(
    public navCtrl: NavController,
   // public WooCommerce: WooCommerceRestApi,
    public http: HttpClient,
    public config: ConfigService,
    private cinetpay : CinetpayService,
    public shared: SharedDataService,
    public loading: LoadingService,
    public spinnerDialog: SpinnerDialog,
    public couponProvider: CouponService,
    public events: Events,
    public actionSheetCtrl: ActionSheetController,
    public iab: InAppBrowser,
    public applicationRef: ApplicationRef, ) {
    this.order = {
      token: this.shared.customerData.cookie,
      payment_method: this.selectedPaymentMethod,
      payment_method_title: this.selectedPaymentMethodTitle,
      billing: this.shared.billing,
      shipping: this.shared.shipping,
      line_items: this.shared.cartProducts,
      shipping_lines: this.shared.shipping_lines,
      coupon_lines: this.shared.couponArray,
      //customer_note: this.customerNotes,
      customer_id: this.shared.customerData.id,
    };
    //this.productsTotal = this.shared.productsTotal();
    this.calculateDiscount();
    this.calculateTotal();

    // if (this.shared.shipping_lines[0].method_id != "local_pickup")
    this.calculateTax();
    // Setup:

      }

    /*  seamless(amount : number){
        return new Promise(resolve => {

          //Generation d'une id de transaction
          this.trans_id = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();


          this.CinetPay.setConfig({
            apikey: this.apikey,
            site_id: this.site_id,
            notify_url: this.notify_url
          });
          //Lorsque la signature est généré
          this.CinetPay.on('signatureCreated', function (token) {
              console.log('Tocken généré: ' + token);
          });
          this.CinetPay.on('paymentPending', function (e) {
              console.log('code:' + e.code + 'Message::' + e.message);
          });
          this.CinetPay.on('error', function (e) {
              console.log('Error code:' + e.code + 'Message::' + e.message);
              
          });
          
          this.CinetPay.on('paymentSuccessfull', function(paymentInfo) {
            console.log(paymentInfo)
            resolve(paymentInfo);
            
              //if payment is successfull paymentInfo.cpm_result == '00'
                if (typeof paymentInfo.lastTime != 'undefined') {
                  if (paymentInfo.cpm_result == '00') {
                    this.Validorder();
                  }
                }
          });
    
          this.CinetPay.setSignatureData({
            amount: amount,
            trans_id: this.trans_id,
            currency: this.currency,
            designation: this.designation,
            custom: this.cpm_custom
          });
          this.CinetPay.getSignature();
        });
      }*/

  //============================================================================================  
  //placing order
  addOrder = function (nonce) {
    switch(ConfigService.countryCode){
      case 'cm':{
        if(this.selectedPaymentMethod = "alg_custom_gateway_1"){
          return new Promise(resolve => {
            let data: any = {}
          let customer_id = 0;
          if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
          let token = null;
          if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
          data = {
            token: this.shared.customerData.cookie,
            payment_method: this.selectedPaymentMethod,
            payment_method_title: this.selectedPaymentMethodTitle,
            set_paid: true,
            billing: {
              first_name: this.order.billing.first_name,
              last_name: this.order.billing.last_name,
              address_1: "",
              address_2: "",
              city: this.order.billing.city,
              state: "",
              postcode: "",
              country: this.order.billing.country,
              email: this.order.billing.email,
              phone: this.order.billing.phone
            },
            shipping: {
              first_name: this.order.billing.first_name,
              last_name: this.order.billing.last_name,
              address_1: "",
              address_2: "",
              city: this.order.billing.city,
              state: "",
              postcode: "",
              country: this.order.billing.country,
            },
              line_items: this.getProducts(),
              shipping_lines: this.getShippingLines(),
               customer_id: this.shared.customerData.id,
          };
          console.log(data);
      
            //Generation d'une id de transaction
            this.trans_id = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
            
            CinetPay.setConfig({
              apikey: this.apikey,
              site_id: this.site_id,
              notify_url: this.notify_url
            });
            //Lorsque la signature est généré
            CinetPay.on('signatureCreated', function (token) {
                console.log('Tocken généré: ' + token);
            });
            CinetPay.on('paymentPending', function (e) {
                console.log('code:' + e.code + 'Message::' + e.message);
                //this.navCtrl.navigateForward("fail");
            });
            CinetPay.on('error', function (e) {
                console.log('Error code:' + e.code + 'Message::' + e.message);
               // this.navCtrl.navigateForward("fail");
            });
            CinetPay.on('paymentSuccessfull', function(paymentInfo) {
              console.log(paymentInfo)
              resolve(paymentInfo);
                //if payment is successfull paymentInfo.cpm_result == '00'
                //  if (typeof paymentInfo.lastTime != 'undefined') {
                    if (paymentInfo.cpm_result == '00') {
                      return new Promise(resolve => {
                        this.http
                          .post(
                            `${this.config.getCountryParams(ConfigService.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${
                              this.config.getCountryParams(ConfigService.countryCode)[1]
                            }&consumer_secret=${this.config.getCountryParams(ConfigService.countryCode)[2]}`,
                            data
                          ).subscribe(data => {
                            resolve(data);
                            this.navCtrl.navigateForward("openThankYouPage");
                            //this.events.publish('openThankYouPage');
                          });
                          
                      });
                    }
                 // }
            });

            CinetPay.setSignatureData({
              amount: (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax),
              trans_id: this.trans_id,
              currency: this.currency,
              designation: this.designation,
              custom: this.cpm_custom
            });
      
           CinetPay.getSignature();
          });
        } else {
          let data: any = {}
        let customer_id = 0;
        if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
        let token = null;
        if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
        data = {
          token: this.shared.customerData.cookie,
          payment_method: this.selectedPaymentMethod,
          payment_method_title: this.selectedPaymentMethodTitle,
          set_paid: true,
          billing: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
            email: this.order.billing.email,
            phone: this.order.billing.phone
          },
          shipping: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
          },
            line_items: this.getProducts(),
            shipping_lines: this.getShippingLines(),
             customer_id: this.shared.customerData.id,
        };
        console.log(data);
        return new Promise(resolve => {
          this.http
            .post(
              `${this.config.getCountryParams(ConfigService.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${
                this.config.getCountryParams(ConfigService.countryCode)[1]
              }&consumer_secret=${this.config.getCountryParams(ConfigService.countryCode)[2]}`,
              data
            ).subscribe(data => {
              resolve(data);
              this.navCtrl.navigateForward("openThankYouPage");
              //this.events.publish('openThankYouPage');
            });
            //this.navCtrl.navigateForward("openThankYouPage");
        });
        }
      }
      case 'gb':{
        let data: any = {}
        let customer_id = 0;
        if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
        let token = null;
        if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
        data = {
          token: this.shared.customerData.cookie,
          payment_method: this.selectedPaymentMethod,
          payment_method_title: this.selectedPaymentMethodTitle,
          set_paid: true,
          billing: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
            email: this.order.billing.email,
            phone: this.order.billing.phone
          },
          shipping: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
          },
            line_items: this.getProducts(),
            shipping_lines: this.getShippingLines(),
             customer_id: this.shared.customerData.id,
        };
        console.log(data);
        return new Promise(resolve => {
          this.http
            .post(
              `${this.config.getCountryParams(ConfigService.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${
                this.config.getCountryParams(ConfigService.countryCode)[1]
              }&consumer_secret=${this.config.getCountryParams(ConfigService.countryCode)[2]}`,
              data
            ).subscribe(data => {
              resolve(data);
              this.navCtrl.navigateForward("openThankYouPage");
              //this.events.publish('openThankYouPage');
            });
            //this.navCtrl.navigateForward("openThankYouPage");
        });
      }
      case 'ck':{
        let data: any = {}
        let customer_id = 0;
        if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
        let token = null;
        if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
        data = {
          token: this.shared.customerData.cookie,
          payment_method: this.selectedPaymentMethod,
          payment_method_title: this.selectedPaymentMethodTitle,
          set_paid: true,
          billing: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
            email: this.order.billing.email,
            phone: this.order.billing.phone
          },
          shipping: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
          },
            line_items: this.getProducts(),
            shipping_lines: this.getShippingLines(),
             customer_id: this.shared.customerData.id,
        };
        console.log(data);
        return new Promise(resolve => {
          this.http
            .post(
              `${this.config.getCountryParams(ConfigService.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${
                this.config.getCountryParams(ConfigService.countryCode)[1]
              }&consumer_secret=${this.config.getCountryParams(ConfigService.countryCode)[2]}`,
              data
            ).subscribe(data => {
              resolve(data);
              this.navCtrl.navigateForward("openThankYouPage");
              //this.events.publish('openThankYouPage');
            });
           // this.navCtrl.navigateForward("openThankYouPage");
        });
      }
      case 'cb':{
        let data: any = {}
        let customer_id = 0;
        if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
        let token = null;
        if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
        data = {
          token: this.shared.customerData.cookie,
          payment_method: this.selectedPaymentMethod,
          payment_method_title: this.selectedPaymentMethodTitle,
          set_paid: true,
          billing: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
            email: this.order.billing.email,
            phone: this.order.billing.phone
          },
          shipping: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
          },
            line_items: this.getProducts(),
            shipping_lines: this.getShippingLines(),
             customer_id: this.shared.customerData.id,
        };
        console.log(data);
        return new Promise(resolve => {
          this.http
            .post(
              `${this.config.getCountryParams(ConfigService.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${
                this.config.getCountryParams(ConfigService.countryCode)[1]
              }&consumer_secret=${this.config.getCountryParams(ConfigService.countryCode)[2]}`,
              data
            ).subscribe(data => {
              resolve(data);
              this.navCtrl.navigateForward("openThankYouPage");
              //this.events.publish('openThankYouPage');
            });
            //this.navCtrl.navigateForward("openThankYouPage");
        });
      
      }
      case 'ci':{
        return new Promise(resolve => {
          let data: any = {}
        let customer_id = 0;
        if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
        let token = null;
        if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
        data = {
          token: this.shared.customerData.cookie,
          payment_method: this.selectedPaymentMethod,
          payment_method_title: this.selectedPaymentMethodTitle,
          set_paid: true,
          billing: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
            email: this.order.billing.email,
            phone: this.order.billing.phone
          },
          shipping: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
          },
            line_items: this.getProducts(),
            shipping_lines: this.getShippingLines(),
             customer_id: this.shared.customerData.id,
        };
        console.log(data);
    
          //Generation d'une id de transaction
          this.trans_id = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();

          CinetPay.setConfig({
            apikey: this.apikey,
            site_id: this.site_id,
            notify_url: this.notify_url
          });
          //Lorsque la signature est généré
          CinetPay.on('signatureCreated', function (token) {
              console.log('Tocken généré: ' + token);
          });
          CinetPay.on('paymentPending', function (e) {
              console.log('code:' + e.code + 'Message::' + e.message);
              //this.navCtrl.navigateForward("fail");
          });
          CinetPay.on('error', function (e) {
              console.log('Error code:' + e.code + 'Message::' + e.message);
              this.events.publish('fail');
             // this.navCtrl.navigateForward("fail");
          });
          CinetPay.on('paymentSuccessfull', function(paymentInfo) {
            console.log(paymentInfo)
            resolve(paymentInfo);
              //if payment is successfull paymentInfo.cpm_result == '00'
              //  if (typeof paymentInfo.lastTime != 'undefined') {
                  if (paymentInfo.cpm_result == '00') {
                    return new Promise(resolve => {
                      this.http
                        .post(
                          `${this.config.getCountryParams(ConfigService.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${
                            this.config.getCountryParams(ConfigService.countryCode)[1]
                          }&consumer_secret=${this.config.getCountryParams(ConfigService.countryCode)[2]}`,
                          data
                        ).subscribe(data => {
                          resolve(data);
                          this.navCtrl.navigateForward("openThankYouPage");
                          //this.events.publish('openThankYouPage');
                        });
                       /// this.navCtrl.navigateForward("openThankYouPage");
                    });
                  }
               // }
    
          });
    
          CinetPay.setSignatureData({
            amount: (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax),
            trans_id: this.trans_id,
            currency: this.currency,
            designation: this.designation,
            custom: this.cpm_custom
          });
    
         CinetPay.getSignature();
    
        });
       
      }
      default: {
        return new Promise(resolve => {
          let data: any = {}
        let customer_id = 0;
        if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
        let token = null;
        if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
        data = {
          token: this.shared.customerData.cookie,
          payment_method: this.selectedPaymentMethod,
          payment_method_title: this.selectedPaymentMethodTitle,
          set_paid: true,
          billing: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
            email: this.order.billing.email,
            phone: this.order.billing.phone
          },
          shipping: {
            first_name: this.order.billing.first_name,
            last_name: this.order.billing.last_name,
            address_1: "",
            address_2: "",
            city: this.order.billing.city,
            state: "",
            postcode: "",
            country: this.order.billing.country,
          },
            line_items: this.getProducts(),
            shipping_lines: this.getShippingLines(),
             customer_id: this.shared.customerData.id,
        };
        console.log(data);
    
          //Generation d'une id de transaction
          this.trans_id = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now();
    
    
          CinetPay.setConfig({
            apikey: this.apikey,
            site_id: this.site_id,
            notify_url: this.notify_url
          });
          //Lorsque la signature est généré
          CinetPay.on('signatureCreated', function (token) {
              console.log('Tocken généré: ' + token);
          });
          CinetPay.on('paymentPending', function (e) {
              console.log('code:' + e.code + 'Message::' + e.message);
              //this.navCtrl.navigateForward("fail");
          });
          CinetPay.on('error', function (e) {
              console.log('Error code:' + e.code + 'Message::' + e.message);
             // this.navCtrl.navigateForward("fail");
             this.events.publish('fail');
          });
          CinetPay.on('paymentSuccessfull', function(paymentInfo) {
            console.log(paymentInfo)
            resolve(paymentInfo);
              //if payment is successfull paymentInfo.cpm_result == '00'
               // if (typeof paymentInfo.lastTime != 'undefined') {
                  if (paymentInfo.cpm_result == '00') {
                    return new Promise(resolve => {
                      this.http
                        .post(
                          `${this.config.getCountryParams(ConfigService.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${
                            this.config.getCountryParams(ConfigService.countryCode)[1]
                          }&consumer_secret=${this.config.getCountryParams(ConfigService.countryCode)[2]}`,
                          data
                        ).subscribe(data => {
                          resolve(data);
                          this.navCtrl.navigateForward("openThankYouPage");
                          //this.events.publish('openThankYouPage');
                        });
                        //this.navCtrl.navigateForward("openThankYouPage");
                    });
                  }
                //}
    
          });
    
          CinetPay.setSignatureData({
            amount: (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax),
            trans_id: this.trans_id,
            currency: this.currency,
            designation: this.designation,
            custom: this.cpm_custom
          });
    
         CinetPay.getSignature();
    
        });
      }
    }
  };

  getProducts() {
    var data = [];
    for (let v of this.shared.cartProducts) {
      var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString(), price: v.price.toString(), customerNotes: v.customerNotes};
      if (v.variation_id) Object.assign(obj, { variation_id: v.variation_id })
      if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
      data.push(obj);
    }
    return data;
  }
  //Object.assign(c, data
  getCoupons() {
    var data = [];
    for (let v of this.shared.couponArray) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }
  getShippingLines() {
    var data = [];
    for (let v of this.shared.shipping_lines) {
      data.push({ method_id: v.method_id,
      method_title: v.method_title,
      total: v.total.toString(), code: v.code, discount: v.amount });
    }
    return data;
  }

  //============================================================================================  
  //CAlculate Discount total
  calculateDiscount = function () {
    let total = 0;
    for (let value of this.shared.cartProducts) {
      total = total + parseFloat(value.subtotal);
    }
    this.productsTotal = total;
    this.discount = parseFloat(this.shared.productsTotal()) - total;
  };

  //============================================================================================  
  //CAlculate all total
  calculateTotal = function () {
    this.totalAmountWithDisocunt = (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax);
  };

  selectPayment(p) {
    this.selectedPaymentMethod = p.id;
    this.selectedPaymentMethodTitle = p.title;
    console.log(this.selectedPaymentMethod);
    console.log(this.selectedPaymentMethodTitle);
    /*this.selectedPaymentMethod = p.payment_method_id;
    this.selectedPaymentMethodTitle = p.payment_method_title;*/
    this.scrollToBottom();
  }

  //========================================================================================
  scrollToBottom() {

    setTimeout(() => {
      this.content.scrollToBottom();
      console.log("botton");
    }, 300);

  }
  ngOnInit() {
    //this.loaderPaymentMethods = false;
    //this.loading.show();

    this.config.getWoo("payment_gateways" + "?" + this.config.productsArguments).then((data: any) => {
      this.loaderPaymentMethods = false;
      this.paymentMethods = data
      this.applicationRef.tick();
    });


  }
  openHomePage() {
    this.navCtrl.navigateRoot("/home");
  }

  calculateTax() {
    var data = {

      billing_info: this.shared.billing,
      shipping_info: this.shared.shipping,
      products: this.getProducts(),
      shipping_ids: this.shared.shipping_lines,

    };

    this.http.get(this.config.getCountryParams(ConfigService.countryCode)[0] + '/api/appsettings/ionic_get_tax/?insecure=cool&order=' + encodeURIComponent(JSON.stringify(data))).subscribe((data: any) => {
      this.loaderTaxCalculating = false;

      let res = parseFloat(JSON.stringify(data));
      if (res) { console.log("tax " + res); }
      else { console.log("tax err " + res); res = 0; }

      this.tax = res;
      this.calculateTotal();
      this.applicationRef.tick();

    });
  }

 /* Validorder(){
    return new Promise(resolve => {
      this.http
        .post(
          `${this.config.getCountryParams(ConfigService.countryCode)[0]}/wp-json/wc/v3/orders/?consumer_key=${
            this.config.getCountryParams(ConfigService.countryCode)[1]
          }&consumer_secret=${this.config.getCountryParams(ConfigService.countryCode)[2]}`,
          data
        ).subscribe(data => {
          resolve(data);
          this.navCtrl.navigateForward("openThankYouPage");
        });
    });
  }*/

}
