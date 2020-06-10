

import { Injectable, ApplicationRef } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform, Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http/ngx';



declare var WooCommerceAPI: any;
if (localStorage.languageCode == undefined) {
  localStorage.languageCode = "fr"; //default language code
  localStorage.languageDirection = "ltr"; //default language direction of app
  localStorage.currency = "&#36;";  //default currecny html code to show in app.
  // Please visit this link to get your html code  https://html-css-js.com/html/character-codes/currency/
  localStorage.currencyCode = "USD";  //default currency code
  localStorage.currencyPos = "right";  //default currency position
  localStorage.decimals = 0;  //default currecny decimal
}

@Injectable()

export class ConfigService {

  public url: string = 'https://dollarsbijoux.com';
  public consumerKey: string = 'ck_3a5c590f46556e7d542b8ae25c1e1266d9bece06';
  public consumerSecret: string = 'cs_b994779812af2a1694688e15f2b058ebb7c4eb0d';



  public showIntroPage = 0;// show/hide intro page value 1 for show, 0 for hide
  public appInProduction = true;
  public productSlidesPerPage = 2.5;

  public onesignalAppId = "ca42d43c-c6d9-43d7-b4fc-ab172647123f";
  public onesignalSenderId = "234383001171";

  public googleMapId = "AIzaSyCJ7D2-23Gk_uQ22v3LUJ8OiFBsVVMBcM0";



  public admob = 0; // show/hide ads on android value 1 for show, 0 for hide
  public admobBannerid = '';
  public admobIntid = '';
  public admobIos = 0; // show/hide ads on ios value 1 for show, 0 for hide
  public admobBanneridIos = '';
  public admobIntidIos = '';

  public languageCode = localStorage.languageCode;//default language of app
  public languageDirection = localStorage.languageDirection;//default direction of app
  public appDirection: any = this.languageDirection;// application direction
  public currency = localStorage.currency;
  public productsArguments = "lang=" + localStorage.languageCode + "&currency=" + localStorage.currencyCode;//additional product arguments for query

  Woocommerce = WooCommerceAPI.WooCommerceAPI({
    url: this.url,
    consumerKey: this.consumerKey,
    consumerSecret: this.consumerSecret,
    wpAPI: true,
    queryStringAuth: true,
    version: 'wc/v3'
  });

  public urlExt: string = this.url + "/wp-json/woo_app_connect/mobile/";
  public langId: string = "1";
  public loader = 'dots';
  public newProductDuration = 20;
  public cartButton = 1;//1 = show and 0 = hide

  public currencyPos = localStorage.currencyPos;
  public address;
  public fbId;
  public email;
  public latitude;
  public longitude;
  public phoneNo;
  public notifText;
  public notifTitle;
  public notifDuration;
  public footerShowHide;
  public homePage = 1;
  public categoryPage = 1;
  public siteUrl = '';
  public appName = '';
  public packgeName = 1;
  public introPage = 1;
  public myOrdersPage = 1;
  public newsPage = 1;
  public wishListPage = 1;
  public shippingAddressPage = 1;
  public aboutUsPage = 1;
  public contactUsPage = 1;
  public editProfilePage = 1;
  public settingPage = 1;

  public rateApp = 1;
  public shareApp = 1;
  public fbButton = 1;
  public googleButton = 1;
  public notificationType = "";
  public privacyPolicy = "";
  public termServices = "";
  public aboutUs = "";
  public refundPolicy = "";
  public filterMaxPrice = 1000;
  public guestCheckOut = true;
  public checkOutPage = 1;
  public defaultIcons = false;
  public orderCancelButton = false;
  public addressPage = true;
  public downloadPage = true;
  public cancelOrderTime: number;
  public showVendorInfo = false;//for dokan plugin
  public showWcVendorInfo = false;
  public multiLanguage = false;
  public multiCurrency = false;
  public appSettings: { [k: string]: any } = {};
  public enableGeoFencing: boolean = false;
  public enableDeliveryTracking: boolean = false;
  public enableWpPointReward: boolean = false;
  public trackingUrl = "";
  public currentSettings = 1;
  public allSettings = {};

  constructor(
    public http: HttpClient,
    private storage: Storage,
    public platform: Platform,
    private applicationRef: ApplicationRef,
    public events: Events,
    private httpNative: HTTP
  ) {
    this.saveDefaultCurrency();
    // console.log(this.Woocommerce._request("get", "products"));
    // console.log(this.Woocommerce._normalizeQueryString("products"));
    // console.log(this.Woocommerce._getUrl("products"));
    // console.log(this.Woocommerce._getOAuth());
    // console.log(this.Woocommerce._request("get", "products").path);
    // console.log(this.Woocommerce._request2("get", "products"));

    if (!this.appInProduction) {
      storage.get('httpAllDataArray').then((val) => {
        if (val != null) this.httpAllDataArray = val;
      });
    }
  }
  getWithUrl(url) {
    return this.getDataHttp(url);
  }
  getWoo(url) {
    let request = this.getUrl("get", url).url;
    return this.getDataHttp(request);
  }

  getDataHttp(request) {
    let loadedData = this.loadAlreadyLoadedHttp(request);
    if (loadedData.found == false) {
      return new Promise(resolve => {
        if (this.platform.is('cordova')) {
          this.httpNative.get(request, {}, {})
            .then(data => {
              let d = JSON.parse(data.data);
              this.storeHttpData(request, d);
              resolve(d);
              //console.log(data.status);
              //console.log(data.data); // data received by server
              //console.log(data.headers);
            })
            .catch(error => {
              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);
            });
        }
        else {
          this.http.get(request).subscribe((data: any) => {
            let d = data;
            this.storeHttpData(request, d);
            resolve(d);
          }, (err) => {
            console.log("Error : " + request);
            console.log(err);
          });
        }
      });
    }
    else {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(loadedData.data);
        }, 200);

      });
    }
  }

  putAsync(url, dataToPost) {
    return new Promise(resolve => {
      let request = this.getUrl("put", url + "/")
      //console.log(dataToPost);
      if (this.platform.is('cordova')) {
        this.httpNative.put(request.url, dataToPost, request.headers)
          .then(data => {
            resolve(JSON.parse(data.data));
            //console.log(data.status);
            //console.log(data.data); // data received by server
            //console.log(data.headers);
          })
          .catch(error => {
            console.log("------------------ error.status ---------------------");
            console.log(error.status);
            console.log("------------------ error.error ---------------------");
            console.log(error.error); // error message as string
            console.log("------------------ error.headers ---------------------");
            console.log(error.headers);
          });
      }
      else {
        this.http.put(request.url, dataToPost, request.headers).subscribe((data: any) => {
          resolve(data);
        }, (err) => {
          console.log("Error : " + request.url);
          console.log(err);
        });
      }
    });
  }

  getUrl(type, endpoint) {
    let start = "&"
    if (type == "put") start = "?";
    let r = this.Woocommerce._request2(type, endpoint);
    let s = r.url + start;
    if (this.url.indexOf('https://') != -1) {
      s = s + "consumer_key=" + this.consumerKey;
      s = s + "&consumer_secret=" + this.consumerSecret;
    }
    else if (this.url.indexOf('http://') != -1) {
      s = s + "oauth_consumer_key=" + r.qs.oauth_consumer_key;
      s = s + "&oauth_nonce=" + r.qs.oauth_nonce;
      s = s + "&oauth_signature=" + r.qs.oauth_signature;
      s = s + "&oauth_signature_method=" + r.qs.oauth_signature_method;
      s = s + "&oauth_timestamp=" + r.qs.oauth_timestamp;
      s = s + "&oauth_version=" + r.qs.oauth_version;
    }

    return { url: s, headers: r.headers };
  }
  loadAlreadyLoadedHttp(url) {
    let found = false;
    let data = {};
    if (!this.appInProduction) {
      let path = url;
      if (url.indexOf('oauth_consumer_key=') != -1) path = url.split("oauth_consumer_key")[0];
      else if (url.indexOf('consumer_key=') != -1) path = url.split("consumer_key")[0];

      this.httpAllDataArray.forEach(element => {
        if (element.url == path) {
          found = true;
          data = element.data;
          // console.log("------------ url match -------------");
          // console.log(element);
        }
      });
      if (found == false) {
        // console.log("------------ url not match -------------");
        // console.log(path);
      }
    }
    return { found: found, data: data };
  }
  public httpAllDataArray = [];
  storeHttpData(url, data) {
    if (!this.appInProduction) {//======================  for debuging =====================
      let path = url;
      if (url.indexOf('oauth_consumer_key=') != -1) path = url.split("oauth_consumer_key")[0];
      else if (url.indexOf('consumer_key=') != -1) path = url.split("consumer_key")[0];
      if (path.indexOf('orders/?') != -1) return;
      this.httpAllDataArray.push({ url: path, data: data });
      this.storage.set('httpAllDataArray', this.httpAllDataArray);
      console.log(this.httpAllDataArray);
    }
  }
  public siteSetting() {
    return new Promise(resolve => {
      this.storage.get('appSettings').then((val) => {
        if (val == null) {
          this.http.get(this.url + '/api/appsettings/get_all_settings/?insecure=cool').subscribe((data: any) => {
            this.appSettings = data;
            this.storage.set("appSettings", this.appSettings);
            this.defaultSettings();
            this.events.publish('settingsLoaded');
            resolve();
          });
        }
        else {
          this.appSettings = val;
          this.defaultSettings();
          this.events.publish('settingsLoaded');
          resolve();
        }
      });
    });
  }
  defaultSettings() {
    this.homePage = parseInt(this.appSettings.home_style);
    this.categoryPage = parseInt(this.appSettings.category_style);
    this.introPage = parseInt(this.appSettings.intro_page);
    this.myOrdersPage = parseInt(this.appSettings.my_orders_page);
    this.newsPage = parseInt(this.appSettings.news_page);
    this.wishListPage = parseInt(this.appSettings.wish_list_page);
    this.shippingAddressPage = parseInt(this.appSettings.shipping_address_page);
    this.aboutUsPage = parseInt(this.appSettings.about_us_page);
    this.contactUsPage = this.appSettings.contact_us_page;
    this.editProfilePage = parseInt(this.appSettings.edit_profile_page);

    this.settingPage = parseInt(this.appSettings.setting_page);
    //this.currency = this.appSettings.currency_symbol;
    this.cartButton = parseInt(this.appSettings.cart_button);
    this.footerShowHide = parseInt(this.appSettings.footer_button);
    this.addressPage = (this.appSettings.bill_ship_info == "1") ? true : false;
    this.downloadPage = (this.appSettings.downloads == "1") ? true : false;
    this.multiLanguage = (this.appSettings.wpml_enabled == "1") ? true : false;

    this.multiCurrency = (this.appSettings.wp_multi_currency == "1") ? true : false;
    this.showVendorInfo = (this.appSettings.mvf_enabled == "1") ? true : false;
    this.showWcVendorInfo = (this.appSettings.mvf_enabled == "2") ? true : false;
    this.enableGeoFencing = (this.appSettings.geo_fencing == "1") ? true : false;
    this.enableDeliveryTracking = (this.appSettings.delivery_tracking == "1") ? true : false;
    this.enableWpPointReward = (this.appSettings.wp_point_reward == "1") ? true : false;

    this.rateApp = parseInt(this.appSettings.rate_app);
    this.shareApp = parseInt(this.appSettings.share_app);
    this.defaultIcons = (this.appSettings.sidebar_menu_icon == "1") ? false : true;
    this.currentSettings = this.appSettings.update_order;

    this.events.publish("openDeepLink");
    //this.initializeGeoFence();
  }

  checkingNewSettingsFromServer() {
    this.http.get(this.url + '/api/appsettings/get_all_settings/?insecure=cool').subscribe((data: any) => {
      var settings = data;
      this.address = settings.address + ', ' + settings.city + ', ' + settings.state + ' ' + settings.zip + ', ' + settings.country;
      this.email = settings.contact_us_email;
      this.latitude = settings.latitude;
      this.longitude = settings.longitude;
      this.phoneNo = settings.phone_no;
      this.newProductDuration = settings.new_product_duration;
      this.notifText = settings.notification_text;
      this.notifTitle = settings.notification_title;
      this.notifDuration = settings.notification_duration;
      this.packgeName = this.appSettings.package_name;
      this.appName = settings.app_name;

      this.fbButton = parseInt(settings.facebook_login);
      this.siteUrl = this.appSettings.site_url;
      this.filterMaxPrice = parseInt(settings.filter_max_price);
      this.guestCheckOut = (settings.checkout_process == "yes") ? true : false;
      this.checkOutPage = parseInt(settings.one_page_checkout);
      //this.checkOutPage = 2;

      this.orderCancelButton = (settings.cancel_order_button == "1") ? true : false;

      this.cancelOrderTime = parseInt(settings.cancel_order_hours);
      this.trackingUrl = settings.tracking_url;
      this.applicationRef.tick();
      this.reloadingWithNewSettings(settings);
    });
  }
  reloadingWithNewSettings(data) {
    //console.log(this.currentSettings + " setting cahnge " + data.update_order);
    if (this.currentSettings != data.update_order) {
      if (data.wp_multi_currency == "0") this.restoreDefaultCurrency();
      this.storage.set("appSettings", data);
    }
  }

  saveDefaultCurrency() {
    if (localStorage.appStartFirstTime == undefined) {
      localStorage.currencyDefault = localStorage.currency;  //default currecny symbol to show in app
      localStorage.currencyCodeDefault = localStorage.currencyCode;  //default currency code
      localStorage.currencyPosDefault = localStorage.currencyPos;  //default currency position
      localStorage.decimalsDefault = localStorage.decimals;  //default currecny decimal
      localStorage.appStartFirstTime = "started";
    }
  }
  restoreDefaultCurrency() {
    if (localStorage.appStartFirstTime == "started") {
      localStorage.currency = localStorage.currencyDefault;  //default currecny symbol to show in app
      localStorage.currencyCode = localStorage.currencyCodeDefault;  //default currency code
      localStorage.currencyPos = localStorage.currencyPosDefault;  //default currency position
      localStorage.decimals = localStorage.decimalsDefault;  //default currecny decimal
    }
  }
}
