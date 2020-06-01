function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./about-us/about-us.module": ["./src/app/about-us/about-us.module.ts", "about-us-about-us-module"],
      "./add-review/add-review.module": ["./src/app/add-review/add-review.module.ts", "add-review-add-review-module"],
      "./address-pages/addresses/addresses.module": ["./src/app/address-pages/addresses/addresses.module.ts", "address-pages-addresses-addresses-module"],
      "./address-pages/billing-address/billing-address.module": ["./src/app/address-pages/billing-address/billing-address.module.ts", "address-pages-billing-address-billing-address-module"],
      "./address-pages/shipping-address/shipping-address.module": ["./src/app/address-pages/shipping-address/shipping-address.module.ts", "address-pages-shipping-address-shipping-address-module"],
      "./cart/cart.module": ["./src/app/cart/cart.module.ts", "default~cart-cart-module~order-order-module", "cart-cart-module"],
      "./categorie-pages/categories/categories.module": ["./src/app/categorie-pages/categories/categories.module.ts", "categorie-pages-categories-categories-module"],
      "./categorie-pages/categories2/categories2.module": ["./src/app/categorie-pages/categories2/categories2.module.ts", "categorie-pages-categories2-categories2-module"],
      "./categorie-pages/categories3/categories3.module": ["./src/app/categorie-pages/categories3/categories3.module.ts", "categorie-pages-categories3-categories3-module"],
      "./categorie-pages/categories4/categories4.module": ["./src/app/categorie-pages/categories4/categories4.module.ts", "categorie-pages-categories4-categories4-module"],
      "./categorie-pages/categories5/categories5.module": ["./src/app/categorie-pages/categories5/categories5.module.ts", "categorie-pages-categories5-categories5-module"],
      "./categorie-pages/categories6/categories6.module": ["./src/app/categorie-pages/categories6/categories6.module.ts", "categorie-pages-categories6-categories6-module"],
      "./contact-us/contact-us.module": ["./src/app/contact-us/contact-us.module.ts", "contact-us-contact-us-module"],
      "./downloads/downloads.module": ["./src/app/downloads/downloads.module.ts", "downloads-downloads-module"],
      "./home-pages/home/home.module": ["./src/app/home-pages/home/home.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home-home-module"],
      "./home-pages/home10/home10.module": ["./src/app/home-pages/home10/home10.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home10-home10-module"],
      "./home-pages/home2/home2.module": ["./src/app/home-pages/home2/home2.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home2-home2-module"],
      "./home-pages/home3/home3.module": ["./src/app/home-pages/home3/home3.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home3-home3-module"],
      "./home-pages/home4/home4.module": ["./src/app/home-pages/home4/home4.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home4-home4-module"],
      "./home-pages/home5/home5.module": ["./src/app/home-pages/home5/home5.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home5-home5-module"],
      "./home-pages/home6/home6.module": ["./src/app/home-pages/home6/home6.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home6-home6-module"],
      "./home-pages/home7/home7.module": ["./src/app/home-pages/home7/home7.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home7-home7-module"],
      "./home-pages/home8/home8.module": ["./src/app/home-pages/home8/home8.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home8-home8-module"],
      "./home-pages/home9/home9.module": ["./src/app/home-pages/home9/home9.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "home-pages-home9-home9-module"],
      "./intro/intro.module": ["./src/app/intro/intro.module.ts", "intro-intro-module"],
      "./my-account/my-account.module": ["./src/app/my-account/my-account.module.ts", "my-account-my-account-module"],
      "./my-order-detail/my-order-detail.module": ["./src/app/my-order-detail/my-order-detail.module.ts", "my-order-detail-my-order-detail-module"],
      "./my-orders/my-orders.module": ["./src/app/my-orders/my-orders.module.ts", "my-orders-my-orders-module"],
      "./news-detail/news-detail.module": ["./src/app/news-detail/news-detail.module.ts", "news-detail-news-detail-module"],
      "./news-list/news-list.module": ["./src/app/news-list/news-list.module.ts", "news-list-news-list-module"],
      "./news/news.module": ["./src/app/news/news.module.ts", "news-news-module"],
      "./notifications/notifications.module": ["./src/app/notifications/notifications.module.ts", "notifications-notifications-module"],
      "./order/order.module": ["./src/app/order/order.module.ts", "default~cart-cart-module~order-order-module", "order-order-module"],
      "./product-detail/product-detail.module": ["./src/app/product-detail/product-detail.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "product-detail-product-detail-module"],
      "./products/products.module": ["./src/app/products/products.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "products-products-module"],
      "./reviews/reviews.module": ["./src/app/reviews/reviews.module.ts", "reviews-reviews-module"],
      "./reward-points/reward-points.module": ["./src/app/reward-points/reward-points.module.ts", "reward-points-reward-points-module"],
      "./search/search.module": ["./src/app/search/search.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "search-search-module"],
      "./settings/settings.module": ["./src/app/settings/settings.module.ts", "settings-settings-module"],
      "./shipping-method/shipping-method.module": ["./src/app/shipping-method/shipping-method.module.ts", "shipping-method-shipping-method-module"],
      "./store/store.module": ["./src/app/store/store.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "store-store-module"],
      "./thank-you/thank-you.module": ["./src/app/thank-you/thank-you.module.ts", "thank-you-thank-you-module"],
      "./wish-list/wish-list.module": ["./src/app/wish-list/wish-list.module.ts", "default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32", "wish-list-wish-list-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-controller_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js", "common", 0],
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 1],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 2],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 3],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 4],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 5],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 6],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 7],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 8],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 9],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 10],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 11],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 12],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 13],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 14],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 15],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 16],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 17],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 18],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 19],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 20],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 21],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 22],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 23],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 24],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 25],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 26],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 27],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 28],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 29],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 30],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 31],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 32],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 33],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 34],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 35],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 36],
      "./ion-menu_4-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js", "common", 37],
      "./ion-menu_4-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js", "common", 38],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 39],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 40],
      "./ion-nav_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js", "common", 41],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 42],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 43],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 44],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 45],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 46],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 47],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 48],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 49],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 50],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 51],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 52],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 53],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 54],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 55],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 56],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 57],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 58],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 59],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 60],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 61],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 62],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 63],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 64],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 65],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 66],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 67],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 68],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 69],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 70],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 71],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 72],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 73],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 74],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 75],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 76],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 77]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane>\n    <ion-menu type=\"overlay\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>{{ 'Menu' | translate:appPages }}</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button fill=\"clear\" (click)=\"openCurrencyPage()\" *ngIf=\"config.multiCurrency\">\n              <ion-icon slot=\"icon-only\" name=\"logo-usd\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\" (click)=\"openLanguagePage()\" *ngIf=\"config.multiLanguage\">\n              <ion-icon name=\"globe\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <ion-list class=\"ion-no-padding\">\n\n          <ion-item lines=\"full\" *ngIf=\"shared.customerData.id==null\" (click)=\"openLoginPage()\">\n            <ion-img src=\"assets/icons_stripe.svg\"></ion-img>\n            <div></div>\n            <ion-item lines=\"none\">\n              <ion-avatar>\n                <img src=\"assets/avatar.png\" />\n              </ion-avatar>\n              <ion-label class=\"ion-padding\">\n                <h2>{{ 'Login & Register' | translate:appPages }}</h2>\n                <p>{{ 'Please login or create an account for free' | translate:appPages }}</p>\n              </ion-label>\n            </ion-item>\n          </ion-item>\n\n          <ion-item lines=\"full\" *ngIf=\"shared.customerData.id!=null\" (click)=\"openPage('/settings')\">\n            <ion-img src=\"assets/icons_stripe.svg\"></ion-img>\n            <div></div>\n            <ion-item lines=\"none\">\n              <ion-avatar class=\"nameTextAvatar\">\n                <div id=\"nametext\">{{getNameFirstLetter()}}</div>\n              </ion-avatar>\n              <ion-label class=\"ion-padding\">\n                <h2>{{shared.customerData.first_name +\"&nbsp;\"+shared.customerData.last_name}}</h2>\n                <p>{{shared.customerData.email}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-item>\n\n\n\n          <ion-item lines=\"full\" *ngFor=\"let p of appPages\" class=\"ion-no-padding\">\n            <ion-grid class=\"ion-no-padding\">\n              <ion-row class=\"ion-no-padding\" (click)=\"openPage(p.url)\" *ngIf=\"!p.items\">\n                <ion-col class=\"ion-align-self-center\" size=\"2\">\n                  <img *ngIf=\"showImg()\" src=\"{{p.img}}\">\n                  <ion-icon *ngIf=\"!showImg()\" name=\"{{p.icon}}\"></ion-icon>\n                </ion-col>\n                <ion-col class=\"col-text\" class=\"ion-align-self-center\" size=\"8\">\n                  <p>\n                    {{p.name | translate}}\n                  </p>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-no-padding\" *ngIf=\"p.items\" (click)=\"expandItem(p)\">\n                <ion-col class=\"ion-align-self-center\" size=\"2\">\n                  <img *ngIf=\"showImg()\" src=\"{{p.img}}\">\n                  <ion-icon *ngIf=\"!showImg()\" name=\"{{p.icon}}\"></ion-icon>\n                </ion-col>\n                <ion-col class=\"col-text\" class=\"ion-align-self-center\" size=\"8\">\n                  <p>\n                    {{p.name | translate}}\n                  </p>\n                </ion-col>\n                <ion-col class=\"ion-align-self-center\" size=\"2\">\n                  <ion-icon name=\"add\" *ngIf=\"!p.expanded\"></ion-icon>\n                  <ion-icon name=\"remove\" *ngIf=\"p.expanded\"></ion-icon>\n                </ion-col>\n              </ion-row>\n              <app-menu-component expandHeight=\"700px\" *ngIf=\"p.items\" [expanded]=\"p.expanded\" class=\"ion-no-padding\">\n                <ion-item class=\"item-inner-list\" lines=\"full\" *ngFor=\"let list of p.items;\"\n                  (click)=\"openPage(list.url)\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col class=\"ion-align-self-center\" size=\"2\">\n                        <ion-icon name=\"remove\"></ion-icon>\n                      </ion-col>\n                      <ion-col class=\"ion-align-self-center\">\n                        <p><span *ngIf=\"p.name!='Shop'\">{{p.name | translate}} - </span> {{list.name| translate}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n              </app-menu-component>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n        <p class=\"primary-light-Color\" #my id=\"my\">Just to get color. Donot remove this.\n        </p>\n        <p class=\"primary-Color\" #primary id=\"primary\">Just to get color. Donot remove this.\n        </p>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/blank-modal/blank-modal.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/blank-modal/blank-modal.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsBlankModalBlankModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/currency-list/currency-list.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/currency-list/currency-list.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsCurrencyListCurrencyListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{\"Select Currency\"|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"currency\">\n      <ion-item *ngFor=\"let v of currencyList\">\n        <ion-img src=\"{{v.flag}}\" slot=\"start\"></ion-img>\n        <ion-label>{{v.name}}</ion-label>\n        <ion-radio [value]=\"v\" (click)=\"updateCurrency(v)\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/forgot-password/forgot-password.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/forgot-password/forgot-password.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Forgot Password'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-img src=\"assets/icons_stripe.svg\"></ion-img>\n\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"forgetPassword()\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n      <ion-input type=\"email\" name=\"customers_email_address\" [(ngModel)]=\"formData.customers_email_address\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"errorMessage!=''\" lines=\"none\">\n      <ion-label>\n        {{errorMessage| translate}}\n      </ion-label>\n    </ion-item>\n\n    <ion-button disabled=\"true\" expand=\"full\" color=\"secondary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">\n      {{'Send'|translate}}\n    </ion-button>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/language/language.page.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/language/language.page.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsLanguageLanguagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Select Language'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"language\">\n      <ion-item *ngFor=\"let v of languageList\">\n        <ion-img src=\"{{v.image}}\" slot=\"start\"></ion-img>\n        <ion-label>{{v.name}}</ion-label>\n        <ion-radio [value]=\"v\" (ionSelect)=\"updateLanguage(v)\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/login/login.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/login/login.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Login'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-img src=\"assets/icons_stripe.svg\"></ion-img>\n\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"login()\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email or Username'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"email\" [(ngModel)]=\"formData.username\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Password'|translate}}</ion-label>\n      <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"formData.password\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\" *ngIf=\"errorMessage!=''\">\n      <ion-label>\n        {{errorMessage| translate}}\n      </ion-label>\n    </ion-item>\n\n\n    <ion-button [disabled]=\"!loginForm.form.valid\" color=\"secondary\" expand=\"full\" type=\"submit\">\n      {{ 'Login' | translate }}\n    </ion-button>\n\n  </form>\n\n  <ion-button expand=\"full\" fill=\"clear\" color=\"dark\" (click)=\"openForgetPasswordPage()\">{{ \"I've forgotten my\n      password?\" | translate }}</ion-button>\n\n  <ion-button expand=\"full\" (click)=\"facebookLogin()\">{{ 'Login with' | translate }}\n    <ion-icon name=\"logo-facebook\"></ion-icon>\n  </ion-button>\n\n  <ion-button expand=\"block\" fill=\"outline\" (click)=\"openSignUpPage()\">{{ 'Register' | translate }}</ion-button>\n\n  <ion-button expand=\"block\" *ngIf=\"config.guestCheckOut && hideGuestLogin\" [disabled]=\"shared.cartProducts.length==0\"\n    (click)=\"guestLogin()\">\n    {{'Continue as a Guest'|translate}}</ion-button>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/privacy-policy/privacy-policy.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/privacy-policy/privacy-policy.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsPrivacyPolicyPrivacyPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Privacy Policy'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-text>\n    <p [innerHTML]=\"config.privacyPolicy\">\n    </p>\n  </ion-text>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/refund-policy/refund-policy.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/refund-policy/refund-policy.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsRefundPolicyRefundPolicyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Refund Policy'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-text>\n    <p [innerHTML]=\"config.refundPolicy\">\n    </p>\n  </ion-text>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/scratch-card/scratch-card.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/scratch-card/scratch-card.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsScratchCardScratchCardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{'Scratch it'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button icon-only fill=\"clear\" (click)=\"close()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"scratch-card-popup\">\n  <div id=\"js--sc--container\"></div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-country/select-country.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-country/select-country.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsSelectCountrySelectCountryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Select Country'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar (ionInput)=\"getItems($event)\" placeholder=\"{{'Search'|translate}}\" #Searchbar></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\" (click)=\"selectCountry(item)\">\n      {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-zones/select-zones.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-zones/select-zones.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsSelectZonesSelectZonesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Select Zone'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"page-select-zones\">\n  <ion-searchbar (ionInput)=\"getItems($event)\" placeholder=\"{{'Search'|translate}}\" autofocus></ion-searchbar>\n  <!-- <ion-item *ngFor=\"let item of items\" (click)=\"selectZone(item)\">\n      {{ item.name }}\n    </ion-item>\n    <ion-item (click)=\"selectZone('other')\" *ngIf=\"hideOther()\">\n      {{'other'|translate}}\n    </ion-item> -->\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\" (click)=\"selectZone(item)\">\n      {{ item.name }}\n    </ion-item>\n    <ion-item (click)=\"selectZone('other')\" *ngIf=\"hideOther()\">\n      {{'other'|translate}}\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/sign-up/sign-up.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/sign-up/sign-up.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Create an Account'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-avatar>\n    <ion-img src=\"assets/avatar.png\"></ion-img>\n  </ion-avatar>\n\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"createAccount()\">\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"customers_firstname\" [(ngModel)]=\"formData.first_name\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"customers_lastname\" [(ngModel)]=\"formData.last_name\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Username'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"username\" [(ngModel)]=\"formData.username\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n      <ion-input type=\"email\" email name=\"email\" [(ngModel)]=\"formData.email\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Password'|translate}}</ion-label>\n      <ion-input type=\"password\" name=\"c_d\" [(ngModel)]=\"formData.password\" required>\n      </ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"errorMessage!=''\" lines=\"none\">\n      <ion-label>\n        {{errorMessage| translate}}\n      </ion-label>\n    </ion-item>\n\n    <p>{{\"Creating an account means you’re okay with our\"|translate}}\n      <a (click)=\"openTermServicesPage()\">{{'Term and Services'|translate}}</a>,\n      <a (click)=\"openPrivacyPolicyPage()\">{{'Privacy Policy'|translate}}</a> {{'and'|translate}}\n      <a (click)=\"openRefundPolicyPage()\">{{'Refund Policy'|translate}}</a>\n    </p>\n\n    <ion-button disabled=\"true\" expand=\"full\" color=\"secondary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">\n      {{'Register'|translate}}\n    </ion-button>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/term-services/term-services.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/term-services/term-services.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalsTermServicesTermServicesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Term and Services'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-text>\n    <p [innerHTML]=\"config.termServices\">\n    </p>\n  </ion-text>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/menu-component/menu-component.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/menu-component/menu-component.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsMenuComponentMenuComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n    <ng-content></ng-content>\n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [//{
    // path: '',
    //redirectTo: 'home',
    // pathMatch: 'full'
    //},
    {
      path: 'list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | list-list-module */
        "list-list-module").then(__webpack_require__.bind(null,
        /*! ./list/list.module */
        "./src/app/list/list.module.ts")).then(function (m) {
          return m.ListPageModule;
        });
      }
    }, {
      path: 'about-us',
      loadChildren: './about-us/about-us.module#AboutUsPageModule'
    }, {
      path: 'add-review/:id',
      loadChildren: './add-review/add-review.module#AddReviewPageModule'
    }, {
      path: 'cart',
      loadChildren: './cart/cart.module#CartPageModule'
    }, {
      path: 'contact-us',
      loadChildren: './contact-us/contact-us.module#ContactUsPageModule'
    }, {
      path: 'downloads',
      loadChildren: './downloads/downloads.module#DownloadsPageModule'
    }, {
      path: 'intro',
      loadChildren: './intro/intro.module#IntroPageModule'
    }, {
      path: 'my-account',
      loadChildren: './my-account/my-account.module#MyAccountPageModule'
    }, {
      path: 'my-orders',
      loadChildren: './my-orders/my-orders.module#MyOrdersPageModule'
    }, {
      path: 'news',
      loadChildren: './news/news.module#NewsPageModule'
    }, {
      path: 'news-detail',
      loadChildren: './news-detail/news-detail.module#NewsDetailPageModule'
    }, {
      path: 'news-list/:id/:name',
      loadChildren: './news-list/news-list.module#NewsListPageModule'
    }, {
      path: 'notifications',
      loadChildren: './notifications/notifications.module#NotificationsPageModule'
    }, {
      path: 'order',
      loadChildren: './order/order.module#OrderPageModule'
    }, {
      path: 'product-detail/:id',
      loadChildren: './product-detail/product-detail.module#ProductDetailPageModule'
    }, {
      path: 'products/:id/:name/:type',
      loadChildren: './products/products.module#ProductsPageModule'
    }, {
      path: 'reviews/:id',
      loadChildren: './reviews/reviews.module#ReviewsPageModule'
    }, {
      path: 'reward-points',
      loadChildren: './reward-points/reward-points.module#RewardPointsPageModule'
    }, {
      path: 'search',
      loadChildren: './search/search.module#SearchPageModule'
    }, {
      path: 'settings',
      loadChildren: './settings/settings.module#SettingsPageModule'
    }, {
      path: 'shipping-method',
      loadChildren: './shipping-method/shipping-method.module#ShippingMethodPageModule'
    }, {
      path: 'store/:id',
      loadChildren: './store/store.module#StorePageModule'
    }, {
      path: 'thank-you',
      loadChildren: './thank-you/thank-you.module#ThankYouPageModule'
    }, {
      path: 'wish-list',
      loadChildren: './wish-list/wish-list.module#WishListPageModule'
    }, {
      path: 'addresses',
      loadChildren: './address-pages/addresses/addresses.module#AddressesPageModule'
    }, {
      path: 'billing-address',
      loadChildren: './address-pages/billing-address/billing-address.module#BillingAddressPageModule'
    }, {
      path: 'shipping-address',
      loadChildren: './address-pages/shipping-address/shipping-address.module#ShippingAddressPageModule'
    }, {
      path: 'categories/:parent/:name',
      loadChildren: './categorie-pages/categories/categories.module#CategoriesPageModule'
    }, {
      path: 'categories2/:parent/:name',
      loadChildren: './categorie-pages/categories2/categories2.module#Categories2PageModule'
    }, {
      path: 'categories3/:parent/:name',
      loadChildren: './categorie-pages/categories3/categories3.module#Categories3PageModule'
    }, {
      path: 'categories4/:parent/:name',
      loadChildren: './categorie-pages/categories4/categories4.module#Categories4PageModule'
    }, {
      path: 'categories5/:parent/:name',
      loadChildren: './categorie-pages/categories5/categories5.module#Categories5PageModule'
    }, {
      path: 'categories6/:parent/:name',
      loadChildren: './categorie-pages/categories6/categories6.module#Categories6PageModule'
    }, {
      path: 'home',
      loadChildren: './home-pages/home/home.module#HomePageModule'
    }, {
      path: 'home2',
      loadChildren: './home-pages/home2/home2.module#Home2PageModule'
    }, {
      path: 'home3',
      loadChildren: './home-pages/home3/home3.module#Home3PageModule'
    }, {
      path: 'home4',
      loadChildren: './home-pages/home4/home4.module#Home4PageModule'
    }, {
      path: 'home5',
      loadChildren: './home-pages/home5/home5.module#Home5PageModule'
    }, {
      path: 'home6',
      loadChildren: './home-pages/home6/home6.module#Home6PageModule'
    }, {
      path: 'home7',
      loadChildren: './home-pages/home7/home7.module#Home7PageModule'
    }, {
      path: 'home8',
      loadChildren: './home-pages/home8/home8.module#Home8PageModule'
    }, {
      path: 'home9',
      loadChildren: './home-pages/home9/home9.module#Home9PageModule'
    }, {
      path: 'home10',
      loadChildren: './home-pages/home10/home10.module#Home10PageModule'
    }, {
      path: 'my-order-detail',
      loadChildren: './my-order-detail/my-order-detail.module#MyOrderDetailPageModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .nameTextAvatar {\n  width: 50px;\n  height: 50px;\n}\nion-content ion-list ion-item {\n  --inner-padding-end: 0;\n}\nion-content ion-list ion-item ion-menu-toggle {\n  width: 100%;\n}\nion-content ion-list ion-item:first-child {\n  --inner-padding-end: 0;\n  --padding-start: 0;\n  height: 100px;\n}\nion-content ion-list ion-item:first-child ion-img {\n  position: fixed;\n  opacity: 0.3;\n}\nion-content ion-list ion-item:first-child div {\n  background: var(--ion-color-primary);\n  width: 100%;\n  height: 100px;\n}\nion-content ion-list ion-item:first-child ion-item {\n  position: absolute;\n  --background: transparent;\n  --color: white;\n}\nion-content ion-list ion-item:first-child ion-item ion-label h2 {\n  font-weight: bold;\n}\nion-content ion-list ion-item:first-child ion-item ion-label p {\n  color: white;\n  white-space: normal;\n}\nion-content ion-list ion-item ion-grid ion-row {\n  border-bottom: solid lightgray;\n  border-width: 0.4px;\n  height: 47px;\n}\nion-content ion-list ion-item ion-grid ion-row ion-icon {\n  zoom: 1.2;\n}\nion-content ion-list ion-item ion-grid ion-row img {\n  max-width: 60%;\n}\nion-content ion-list ion-item ion-grid ion-row ion-col p {\n  margin-top: 6px !important;\n  margin-bottom: 6px !important;\n}\nion-content ion-list ion-item ion-grid ion-row ion-col:first-child {\n  text-align: right;\n}\n.item-inner-list {\n  height: 52px !important;\n  margin-left: -3px !important;\n  --inner-padding-end: 0 !important;\n  --padding-start: 0 !important;\n}\n.item-inner-list ion-row {\n  padding-left: 0 !important;\n}\n.item-inner-list:last-child {\n  border-bottom: none;\n}\n.col-text {\n  padding-left: 16px !important;\n}\n.primary-light-Color {\n  color: var(--ion-color-primary-light);\n  display: none;\n}\n.primary-Color {\n  color: var(--ion-color-primary);\n  display: none;\n}\n#nametext {\n  width: 50px;\n  height: 50px;\n  border-radius: 100px;\n  background: var(--ion-color-secondary);\n  text-align: center;\n  color: white;\n  font-size: 25px;\n  line-height: 44px;\n  text-transform: uppercase;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNGSjtBREtJO0VBQ0Usc0JBQUE7QUNITjtBRElNO0VBQ0UsV0FBQTtBQ0ZSO0FESU07RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0ZSO0FER1E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0RWO0FER1E7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRFY7QURHUTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDRFY7QURHWTtFQUNFLGlCQUFBO0FDRGQ7QURHWTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RkO0FET1E7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0xWO0FETVU7RUFDRSxTQUFBO0FDSlo7QURNVTtFQUNFLGNBQUE7QUNKWjtBRE9ZO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQ0xkO0FET1k7RUFDRSxpQkFBQTtBQ0xkO0FEYUE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQ1ZGO0FEV0U7RUFDRSwwQkFBQTtBQ1RKO0FEV0U7RUFDRSxtQkFBQTtBQ1RKO0FEWUE7RUFDRSw2QkFBQTtBQ1RGO0FEWUE7RUFDRSxxQ0FBQTtFQUNBLGFBQUE7QUNURjtBRFlBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0FDVEY7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tY29udGVudCB7XG4gIC5uYW1lVGV4dEF2YXRhcntcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICBpb24tbWVudS10b2dnbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWdyaWQge1xuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgem9vbTogMS4yO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5pdGVtLWlubmVyLWxpc3Qge1xuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHggIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgaW9uLXJvdyB7XG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59XG4uY29sLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnByaW1hcnktbGlnaHQtQ29sb3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktbGlnaHQpO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJpbWFyeS1Db2xvciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jbmFtZXRleHQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5cbiIsImlvbi1jb250ZW50IC5uYW1lVGV4dEF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbWVudS10b2dnbGUge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgaW9uLWltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3BhY2l0eTogMC4zO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgZGl2IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkIGlvbi1pdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtOmZpcnN0LWNoaWxkIGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW06Zmlyc3QtY2hpbGQgaW9uLWl0ZW0gaW9uLWxhYmVsIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tZ3JpZCBpb24tcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItd2lkdGg6IDAuNHB4O1xuICBoZWlnaHQ6IDQ3cHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tZ3JpZCBpb24tcm93IGlvbi1pY29uIHtcbiAgem9vbTogMS4yO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWdyaWQgaW9uLXJvdyBpbWcge1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBwIHtcbiAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pdGVtLWlubmVyLWxpc3Qge1xuICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHggIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbn1cbi5pdGVtLWlubmVyLWxpc3QgaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLml0ZW0taW5uZXItbGlzdDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNvbC10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmltYXJ5LWxpZ2h0LUNvbG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByaW1hcnktQ29sb3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbmFtZXRleHQge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/admob-free/ngx */
    "./node_modules/@ionic-native/admob-free/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/deeplinks/ngx */
    "./node_modules/@ionic-native/deeplinks/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./modals/login/login.page */
    "./src/app/modals/login/login.page.ts");
    /* harmony import */


    var _modals_sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./modals/sign-up/sign-up.page */
    "./src/app/modals/sign-up/sign-up.page.ts");
    /* harmony import */


    var _modals_language_language_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modals/language/language.page */
    "./src/app/modals/language/language.page.ts");
    /* harmony import */


    var _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./modals/currency-list/currency-list.page */
    "./src/app/modals/currency-list/currency-list.page.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(shared, config, router, navCtrl, platform, modalCtrl, statusBar, storage, network, loading, admobFree, events, plt, appVersion, iab, socialSharing, deeplinks, menuCtrl) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.shared = shared;
        this.config = config;
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.storage = storage;
        this.network = network;
        this.loading = loading;
        this.admobFree = admobFree;
        this.events = events;
        this.plt = plt;
        this.appVersion = appVersion;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.deeplinks = deeplinks;
        this.menuCtrl = menuCtrl;
        this.appPages = []; // For all pages

        this.a1 = [{
          name: 'Accueil',
          icon: 'home',
          url: 'accueil',
          img: 'assets/left-menu-icon/home.png',
          items: [{
            name: "1",
            url: '/home'
          }, {
            name: "2",
            url: '/home2'
          }, {
            name: "3",
            url: '/home3'
          }, {
            name: "4",
            url: '/home4'
          }, {
            name: "5",
            url: '/home5'
          }, {
            name: "6",
            url: '/home6'
          }, {
            name: "7",
            url: '/home7'
          }, {
            name: "8",
            url: '/home8'
          }, {
            name: "9",
            url: '/home9'
          }, {
            name: "10",
            url: '/home10'
          }],
          expanded: false
        }, {
          name: 'Categories',
          icon: 'apps',
          url: 'categories/0/0',
          img: 'assets/left-menu-icon/category.png',
          items: [{
            name: "1",
            url: '/categories/0/0'
          }, {
            name: "2",
            url: '/categories2/0/0'
          }, {
            name: "3",
            url: '/categories3/0/0'
          }, {
            name: "4",
            url: '/categories4/0/0'
          }, {
            name: "5",
            url: '/categories5/0/0'
          }, {
            name: "6",
            url: '/categories6/0/0'
          }],
          expanded: false
        }, {
          name: 'Boutique',
          icon: 'cash',
          url: '/products/0/0/newest',
          img: 'assets/left-menu-icon/shop.png',
          items: [{
            name: "Nouveautés",
            url: '/products/0/0/newest'
          }, {
            name: "En promotion",
            url: '/products/0/0/sale'
          }, {
            name: "A la Une",
            url: '/products/0/0/featured'
          }],
          expanded: false
        }];
        this.a2 = [{
          name: 'Accueil',
          icon: 'home',
          url: 'home',
          img: 'assets/left-menu-icon/home.png'
        }, {
          name: 'Categories',
          icon: 'apps',
          url: 'categories',
          img: 'assets/left-menu-icon/category.png'
        }, {
          name: 'Boutique',
          icon: 'cash',
          url: '/products',
          img: 'assets/left-menu-icon/shop.png',
          items: [{
            name: "Nouveautés",
            url: '/products/0/0/newest'
          }, {
            name: "En promotion",
            url: '/products/0/0/sale'
          }, {
            name: "A la Une",
            url: '/products/0/0/featured'
          }],
          expanded: false
        }];
        this.a3 = [{
          name: 'Mes Favoris',
          icon: 'heart',
          img: 'assets/left-menu-icon/wishlist.png',
          url: '/wish-list',
          value: 'wishListPage'
        }, {
          name: 'Contact',
          icon: 'call',
          img: 'assets/left-menu-icon/phone.png',
          url: '/contact-us',
          value: 'contactPage'
        }, {
          name: 'A Propos',
          icon: 'information-circle',
          img: 'assets/left-menu-icon/about.png',
          url: '/about-us',
          value: 'aboutUsPage'
        }, {
          name: 'Actualités',
          icon: 'paper',
          img: 'assets/left-menu-icon/news.png',
          url: '/news',
          value: 'newsPage'
        }, {
          name: 'Intro',
          icon: 'logo-ionic',
          img: 'assets/left-menu-icon/intro.png',
          url: '/intro',
          value: 'introPage'
        }, {
          name: 'Partagez',
          icon: 'share',
          img: 'assets/left-menu-icon/share.png',
          url: 'share',
          value: 'sharePage'
        }, {
          name: 'Evaluez Nous',
          icon: 'star-half',
          img: 'assets/left-menu-icon/rating.png',
          url: 'rateUs',
          value: 'ratePage'
        }, {
          name: 'Reglages',
          icon: 'settings',
          img: 'assets/left-menu-icon/setting.png',
          url: '/settings',
          value: 'settingsPage'
        }];
        this.a4 = [{
          name: 'Mes Favoris',
          icon: 'heart',
          img: 'assets/left-menu-icon/wishlist.png',
          url: '/wish-list',
          value: 'wishListPage'
        }, {
          name: 'Modifier le profil',
          icon: 'lock',
          img: 'assets/left-menu-icon/locked.png',
          url: '/my-account',
          login: true,
          value: 'editPage'
        }, {
          name: 'Addresses',
          icon: 'home',
          img: 'assets/left-menu-icon/map.png',
          url: '/addresses',
          login: true,
          value: 'addressesPage'
        }, {
          name: 'Downloads',
          icon: 'download',
          img: 'assets/left-menu-icon/download.png',
          url: '/downloads',
          login: true,
          value: 'downloadsPage'
        }, {
          name: 'Mes commandes',
          icon: 'cart',
          img: 'assets/left-menu-icon/orders.png',
          url: '/my-orders',
          login: true,
          value: 'myOrdersPage'
        }, {
          name: 'Reward Points',
          img: 'assets/left-menu-icon/gift.png',
          icon: 'happy',
          url: '/reward-points',
          login: true,
          value: 'rewardPointsPage'
        }, {
          name: 'Notifications',
          icon: 'notifications',
          img: 'assets/left-menu-icon/notifications.png',
          url: '/notifications',
          login: true,
          value: 'scratchCardPage'
        }, {
          name: 'Contact',
          icon: 'call',
          img: 'assets/left-menu-icon/phone.png',
          url: '/contact-us',
          value: 'contactPage'
        }, {
          name: 'A Propos',
          icon: 'information-circle',
          img: 'assets/left-menu-icon/about.png',
          url: '/about-us',
          value: 'aboutUsPage'
        }, {
          name: 'Actualités',
          icon: 'paper',
          img: 'assets/left-menu-icon/news.png',
          url: '/news',
          value: 'newsPage'
        }, {
          name: 'Intro',
          icon: 'logo-ionic',
          img: 'assets/left-menu-icon/intro.png',
          url: '/intro',
          value: 'introPage'
        }, {
          name: 'Partagez',
          icon: 'share',
          img: 'assets/left-menu-icon/share.png',
          url: 'share',
          value: 'sharePage'
        }, {
          name: 'Evaluez Nous',
          icon: 'star-half',
          img: 'assets/left-menu-icon/rating.png',
          url: 'rateUs',
          value: 'ratePage'
        }, {
          name: 'Reglages',
          icon: 'settings',
          img: 'assets/left-menu-icon/setting.png',
          url: '/settings',
          value: 'settingsPage'
        }];
        this.link = "empty";
        this.deepUrl = "";
        this.initializeApp();
        var connectedToInternet = true;
        network.onDisconnect().subscribe(function () {
          connectedToInternet = false;

          _this2.shared.showAlertWithTitle("Veuillez vous connecter à Internet!", "Déconnecté"); //  console.log('network was disconnected :-(');

        });
        network.onConnect().subscribe(function () {
          if (!connectedToInternet) {
            window.location.reload();

            _this2.shared.showAlertWithTitle("Network connected Reloading Data" + '...', "Connected");
          } //connectSubscription.unsubscribe();

        }); //this.platform.setDir(, true);

        document.documentElement.dir = this.config.appDirection;
        shared.dir = this.config.appDirection;
        events.subscribe('showAd', function () {
          _this2.showInterstitial();
        });
        events.subscribe('openThankYouPage', function () {
          _this2.navCtrl.navigateRoot("/thank-you");
        });
        events.subscribe('openShippingAddressPage', function () {
          _this2.navCtrl.navigateForward("/shipping-address");
        });
        events.subscribe('openDeepLink', function (value) {
          _this2.naviagateDeeplink(value);
        });
        events.subscribe('openCategoryPage', function (value) {
          _this2.openCategoryPage();
        });
        events.subscribe('openHomePage', function (value) {
          _this2.openHomePage();
        });
        events.subscribe('openSubcategoryPage', function (value) {
          _this2.openSubcategoryPage(value);
        });
        events.subscribe('updateSideMenu', function (value) {
          _this2.getLeftItems();
        });
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this3 = this;

          this.platform.ready().then(function () {
            //this.getStatusBarColor()
            _this3.shared.subscribePush();

            _this3.runAdmob();

            _this3.config.siteSetting().then(function (value) {
              _this3.loadHomePage();

              _this3.shared.getVendorList();

              _this3.getLeftItems();
            });

            if (_this3.platform.is('cordova')) {
              _this3.initializeDeepLinks();
            }
          });
        } // loading home page =========================================================================

      }, {
        key: "loadHomePage",
        value: function loadHomePage() {
          var _this4 = this;

          this.storage.get('firsttimeApp').then(function (val) {
            var value = val;
            if (_this4.config.showIntroPage == 0) value = 'firstTime';

            if (value == 'firstTime') {
              _this4.openHomePage();

              _this4.config.checkingNewSettingsFromServer();
            } else {
              _this4.navCtrl.navigateRoot("intro");
            }

            _this4.storage.set('firsttimeApp', 'firstTime');

            setTimeout(function () {
              _this4.events.publish("openDeepLink");
            }, 500);
          });
        } // starting admob =========================================================================

      }, {
        key: "runAdmob",
        value: function runAdmob() {
          if (this.plt.is('ios')) {
            if (this.config.admobIos == 1) this.initializeAdmob(this.config.admobBanneridIos, this.config.admobIntidIos);
            this.config.admob = this.config.admobIos;
            this.shared.device = 'ios';
          } else if (this.plt.is('android')) {
            if (this.config.admob == 1) this.initializeAdmob(this.config.admobBannerid, this.config.admobIntid);
            this.shared.device = 'android';
          }
        } // preparing admob =========================================================================

      }, {
        key: "initializeAdmob",
        value: function initializeAdmob(bannerId, intId) {
          if (this.platform.is('cordova')) {
            var bannerConfig = {
              id: bannerId,
              isTesting: false,
              autoShow: true
            };
            this.admobFree.banner.config(bannerConfig);
            this.admobFree.banner.prepare().then(function () {//alert("loaded" +bannerId);
              //this.admobFree.banner.show();
            }).catch(function (e) {
              return console.log(e);
            });
            var interstitialConfig = {
              id: intId,
              isTesting: false,
              autoShow: false
            };
            this.admobFree.interstitial.config(interstitialConfig);
            this.admobFree.interstitial.prepare();
          }
        } //=========================================================================

      }, {
        key: "showInterstitial",
        value: function showInterstitial() {
          if (this.platform.is('cordova')) {
            this.admobFree.interstitial.show(); //this.admobFree.interstitial.isReady().then(() => { });

            this.admobFree.interstitial.prepare();
          }
        } //=========================================================================

      }, {
        key: "openPage",
        value: function openPage(page) {
          console.log(page); //this.router.navigateByUrl(page);

          if (page == 'home') this.openHomePage();else if (page == 'categories') this.openCategoryPage();else if (page == '/products/0/0/newest') this.navCtrl.navigateForward(page);else if (page == '/products/0/0/sale') this.navCtrl.navigateForward(page);else if (page == '/products/0/0/featured') this.navCtrl.navigateForward(page);else if (page == 'share') this.share();else if (page == 'rateUs') this.rateUs();else this.navCtrl.navigateRoot(page);
          this.menuCtrl.toggle();
        }
      }, {
        key: "openHomePage",
        value: function openHomePage() {
          if (this.config.homePage == 1) {
            this.navCtrl.navigateRoot("/home");
          }

          if (this.config.homePage == 2) {
            this.navCtrl.navigateRoot("/home2");
          }

          if (this.config.homePage == 3) {
            this.navCtrl.navigateRoot("/home3");
          }

          if (this.config.homePage == 4) {
            this.navCtrl.navigateRoot("/home4");
          }

          if (this.config.homePage == 5) {
            this.navCtrl.navigateRoot("/home5");
          }

          if (this.config.homePage == 6) this.navCtrl.navigateRoot("/home6");
          if (this.config.homePage == 7) this.navCtrl.navigateRoot("/home7");
          if (this.config.homePage == 8) this.navCtrl.navigateRoot("/home8");
          if (this.config.homePage == 9) this.navCtrl.navigateRoot("/home9");
          if (this.config.homePage == 10) this.navCtrl.navigateRoot("/home10");
        }
      }, {
        key: "openCategoryPage",
        value: function openCategoryPage() {
          if (this.config.categoryPage == 1) {
            this.navCtrl.navigateRoot("categories/0/0");
          }

          if (this.config.categoryPage == 2) {
            this.navCtrl.navigateRoot("categories2/0/0");
          }

          if (this.config.categoryPage == 3) {
            this.navCtrl.navigateRoot("categories3/0/0");
          }

          if (this.config.categoryPage == 4) {
            this.navCtrl.navigateRoot("categories4/0/0");
          }

          if (this.config.categoryPage == 5) {
            this.navCtrl.navigateRoot("categories5/0/0");
          }

          if (this.config.categoryPage == 6) {
            this.navCtrl.navigateRoot("categories6/0/0");
          }
        }
      }, {
        key: "openSubcategoryPage",
        value: function openSubcategoryPage(parent) {
          var i = "/" + parent.id + "/" + parent.name;

          if (this.config.categoryPage == 1) {
            this.navCtrl.navigateForward("categories" + i);
          }

          if (this.config.categoryPage == 2) {
            this.navCtrl.navigateForward("categories2" + i);
          }

          if (this.config.categoryPage == 3) {
            this.navCtrl.navigateForward("categories3" + i);
          }

          if (this.config.categoryPage == 4) {
            this.navCtrl.navigateForward("categories4" + i);
          }

          if (this.config.categoryPage == 5) {
            this.navCtrl.navigateForward("categories5" + i);
          }

          if (this.config.categoryPage == 6) {
            this.navCtrl.navigateForward("categories6" + i);
          }
        }
      }, {
        key: "openLoginPage",
        value: function openLoginPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_16__["LoginPage"],
                      componentProps: {
                        'hideGuestLogin': false
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "openSignUpPage",
        value: function openSignUpPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_17__["SignUpPage"]
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.shared.logOut();
        }
      }, {
        key: "rateUs",
        value: function rateUs() {
          var _this5 = this;

          this.loading.autoHide(2000);

          if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
          } else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
              _this5.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
          }
        }
      }, {
        key: "share",
        value: function share() {
          var _this6 = this;

          this.loading.autoHide(2000);

          if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString());
          } else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
              _this6.socialSharing.share(_this6.config.appName, _this6.config.appName, "", "https://play.google.com/store/apps/details?id=" + val);
            });
          }
        }
      }, {
        key: "openLanguagePage",
        value: function openLanguagePage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_language_language_page__WEBPACK_IMPORTED_MODULE_18__["LanguagePage"]
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openCurrencyPage",
        value: function openCurrencyPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_19__["CurrencyListPage"]
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getStatusBarColor",
        value: function getStatusBarColor() {
          var headerColor = jquery__WEBPACK_IMPORTED_MODULE_14__('#primary').css('color');
          var rgb2 = headerColor;
          rgb2 = headerColor.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
          this.shared.headerHexColor = rgb2 && rgb2.length === 4 ? "#" + ("0" + parseInt(rgb2[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb2[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb2[3], 10).toString(16)).slice(-2) : headerColor;
          console.log(this.shared.headerHexColor);
          var color = jquery__WEBPACK_IMPORTED_MODULE_14__('#my').css('color');
          var rgb = color;
          rgb = color.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
          var ret = rgb && rgb.length === 4 ? "#" + ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : color;
          console.log(ret);
          this.statusBar.backgroundColorByHexString(ret);
        }
      }, {
        key: "initializeDeepLinks",
        value: function initializeDeepLinks() {
          var _this7 = this;

          //this.deeplinks.routeWithNavController(this.nav, {
          this.deeplinks.route({}).subscribe(function (match) {
            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            _this7.deepUrl = match.$link.url;
            _this7.link = match.$link.path;
            _this7.linkArgs = match.$args;
            console.log(match);
            console.log(match.$args);
            console.log('Successfully matched route', match); //if (this.rootPage != undefined) this.naviagateDeeplink();
          }, function (nomatch) {
            // nomatch.$link - the full link data
            _this7.deepUrl = nomatch.$link.url; //if (this.rootPage != undefined) this.naviagateDeeplink();

            console.error('Got a deeplink that didn\'t match', nomatch);
          });
        }
      }, {
        key: "naviagateDeeplink",
        value: function naviagateDeeplink(value) {
          //console.log(this.deepUrl)
          if (this.deepUrl.indexOf('/shop') != -1 && value != "openCategoryInShop") {
            this.navCtrl.navigateForward("/products/0/0/newest");
            console.log("navigate to Shop");
          }

          if (this.link == "/shop/" && value != "openCategoryInShop") {
            console.log("navigate to Shop with sorting");
          }

          if (this.link == "/product/" && value != "openCategoryInShop") {
            console.log("navigate to product detail");
          }

          if (this.deepUrl.indexOf('product=') != -1 && value != "openCategoryInShop") {
            var linkk = this.deepUrl;
            var arr = linkk.split("=");
            var slug = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var val = _step.value;
                if (val.indexOf('product') == -1) slug = val;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            this.getSingleProductDetail(slug);
            console.log("navigate to product detail with = Slug");
          }

          if (this.deepUrl.indexOf('/product/') != -1 && value != "openCategoryInShop") {
            var _arr = this.deepUrl.split("/");

            var count = 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _val = _step2.value;
                count++;

                if (_val == "product") {
                  break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            var _slug = _arr[count];
            this.getSingleProductDetail(_slug);
            console.log("navigate to product detail with / Slug :" + _slug);
          }

          if (this.deepUrl.indexOf('/product-category/') != -1) {
            //'http://vc.com/product-category/watches/gold-watches/ooo'
            var _arr2 = this.deepUrl.split("/");

            var _count = 0;
            var arr2 = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _arr2[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _val3 = _step3.value;
                if (_count == 1 && _val3 != "") arr2.push(_val3);
                if (_val3 == "product-category") _count = 1;
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            var _slug2 = arr2[arr2.length - 1];
            console.log(_slug2);
            console.log("navigate to shop page with category . Slug :" + _slug2);
            console.log(value);

            if (value == "openCategoryInShop") {
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = this.shared.allCategories[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var _val2 = _step4.value;
                  console.log(_val2);

                  if (_val2.slug == _slug2) {
                    console.log("id matched : " + _val2.id);
                    console.log(_val2);
                    var navigationExtras = {
                      queryParams: {
                        id: _val2.id,
                        name: "",
                        sortOrder: 'newest'
                      }
                    };
                    this.navCtrl.navigateForward("/products/" + _val2.id + "/0/newest");
                  }
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
          }
        }
      }, {
        key: "getSingleProductDetail",
        value: function getSingleProductDetail(slug) {
          var _this8 = this;

          this.loading.show();
          this.config.getWoo("products/" + "?" + this.config.productsArguments + "&slug=" + slug).then(function (data) {
            _this8.loading.hide();

            var p = data[0];

            _this8.shared.singleProductPageData.push(p);

            _this8.navCtrl.navigateForward("product-detail/" + p.id);
          }, function (err) {
            _this8.loading.hide();

            console.log(err);
          });
        }
      }, {
        key: "checkAvatar",
        value: function checkAvatar() {
          return this.shared.checkAvatar();
        }
      }, {
        key: "getNameFirstLetter",
        value: function getNameFirstLetter() {
          return this.shared.getNameFirstLetter();
        } //==============================================================
        //for

      }, {
        key: "expandItem",
        value: function expandItem(i) {
          if (i.expanded == false) i.expanded = true;else i.expanded = false;
        }
      }, {
        key: "showImg",
        value: function showImg() {
          return !this.config.defaultIcons;
        }
      }, {
        key: "getLeftItems",
        value: function getLeftItems() {
          var _this9 = this;

          var tempArray = new Array();

          if (!this.config.appInProduction) {
            this.a1.forEach(function (v, index) {
              tempArray.push(v);
            });
          } else {
            this.a2.forEach(function (v, index) {
              tempArray.push(v);
            });
          }

          if (this.shared.customerData.id == null) {
            this.a3.forEach(function (v, index) {
              tempArray.push(v);
            });
          } else {
            this.a4.forEach(function (v, index) {
              tempArray.push(v);
            });
          }

          tempArray.forEach(function (v, index) {
            if (_this9.config.wishListPage == 0 && v.value == "wishListPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.editProfilePage == 0 && v.value == "editPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.contactUsPage == 0 && v.value == "contactPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.downloadPage == false && v.value == "downloadsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.enableWpPointReward == false && v.value == "rewardPointsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.aboutUsPage == 0 && v.value == "aboutUsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.newsPage == 0 && v.value == "newsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.introPage == 0 && v.value == "introPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.shareApp == 0 && v.value == "sharePage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.rateApp == 0 && v.value == "ratePage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.settingPage == 0 && v.value == "settingsPage") {
              tempArray.splice(index, 1);
            }

            if (_this9.config.myOrdersPage == 0 && v.value == "myOrdersPage") {
              tempArray.splice(index, 1);
            }
          });
          this.appPages = tempArray;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_8__["AdMobFree"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"]
      }, {
        type: _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_12__["Deeplinks"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_8__["AdMobFree"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_12__["Deeplinks"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/themeable-browser/ngx */
    "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/admob-free/ngx */
    "./node_modules/@ionic-native/admob-free/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic-native/deeplinks/ngx */
    "./node_modules/@ionic-native/deeplinks/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/email-composer/ngx */
    "./node_modules/@ionic-native/email-composer/ngx/index.js");
    /* harmony import */


    var _providers_config_config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../components/menu-component/menu-component.component */
    "./src/components/menu-component/menu-component.component.ts");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");
    /* harmony import */


    var _modals_refund_policy_refund_policy_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./modals/refund-policy/refund-policy.module */
    "./src/app/modals/refund-policy/refund-policy.module.ts");
    /* harmony import */


    var _modals_currency_list_currency_list_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./modals/currency-list/currency-list.module */
    "./src/app/modals/currency-list/currency-list.module.ts");
    /* harmony import */


    var _modals_login_login_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./modals/login/login.module */
    "./src/app/modals/login/login.module.ts");
    /* harmony import */


    var _modals_sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./modals/sign-up/sign-up.module */
    "./src/app/modals/sign-up/sign-up.module.ts");
    /* harmony import */


    var _modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./modals/forgot-password/forgot-password.module */
    "./src/app/modals/forgot-password/forgot-password.module.ts");
    /* harmony import */


    var _modals_privacy_policy_privacy_policy_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./modals/privacy-policy/privacy-policy.module */
    "./src/app/modals/privacy-policy/privacy-policy.module.ts");
    /* harmony import */


    var _modals_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./modals/select-country/select-country.module */
    "./src/app/modals/select-country/select-country.module.ts");
    /* harmony import */


    var _modals_select_zones_select_zones_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./modals/select-zones/select-zones.module */
    "./src/app/modals/select-zones/select-zones.module.ts");
    /* harmony import */


    var _modals_scratch_card_scratch_card_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./modals/scratch-card/scratch-card.module */
    "./src/app/modals/scratch-card/scratch-card.module.ts");
    /* harmony import */


    var _modals_term_services_term_services_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./modals/term-services/term-services.module */
    "./src/app/modals/term-services/term-services.module.ts");
    /* harmony import */


    var _modals_language_language_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./modals/language/language.module */
    "./src/app/modals/language/language.module.ts");
    /* harmony import */


    var _modals_blank_modal_blank_modal_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./modals/blank-modal/blank-modal.module */
    "./src/app/modals/blank-modal/blank-modal.module.ts"); // Providers Import
    // For Translation
    //for side menu expandable


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"], _components_menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_27__["MenuComponentComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: 'md'
      }), _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_30__["PipesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"], _modals_blank_modal_blank_modal_module__WEBPACK_IMPORTED_MODULE_42__["BlankModalPageModule"], _modals_language_language_module__WEBPACK_IMPORTED_MODULE_41__["LanguagePageModule"], _modals_refund_policy_refund_policy_module__WEBPACK_IMPORTED_MODULE_31__["RefundPolicyPageModule"], _modals_currency_list_currency_list_module__WEBPACK_IMPORTED_MODULE_32__["CurrencyListPageModule"], _modals_login_login_module__WEBPACK_IMPORTED_MODULE_33__["LoginPageModule"], _modals_sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_34__["SignUpPageModule"], _modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_35__["ForgotPasswordPageModule"], _modals_privacy_policy_privacy_policy_module__WEBPACK_IMPORTED_MODULE_36__["PrivacyPolicyPageModule"], _modals_term_services_term_services_module__WEBPACK_IMPORTED_MODULE_40__["TermServicesPageModule"], _modals_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_37__["SelectCountryPageModule"], _modals_select_zones_select_zones_module__WEBPACK_IMPORTED_MODULE_38__["SelectZonesPageModule"], _modals_scratch_card_scratch_card_module__WEBPACK_IMPORTED_MODULE_39__["ScratchCardPageModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _providers_config_config_service__WEBPACK_IMPORTED_MODULE_21__["ConfigService"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_23__["LocationDataService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_22__["SharedDataService"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_7__["AppVersion"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_8__["SpinnerDialog"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"], _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_11__["ThemeableBrowser"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeGeocoder"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_14__["SocialSharing"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_15__["InAppBrowser"], _ionic_native_admob_free_ngx__WEBPACK_IMPORTED_MODULE_16__["AdMobFree"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__["Network"], _ionic_native_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_18__["Deeplinks"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_19__["HTTP"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_28__["Facebook"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_20__["EmailComposer"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/modals/blank-modal/blank-modal.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modals/blank-modal/blank-modal.module.ts ***!
    \**********************************************************/

  /*! exports provided: BlankModalPageModule */

  /***/
  function srcAppModalsBlankModalBlankModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankModalPageModule", function () {
      return BlankModalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _blank_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blank-modal.page */
    "./src/app/modals/blank-modal/blank-modal.page.ts");

    var routes = [{
      path: '',
      component: _blank_modal_page__WEBPACK_IMPORTED_MODULE_6__["BlankModalPage"]
    }];

    var BlankModalPageModule = function BlankModalPageModule() {
      _classCallCheck(this, BlankModalPageModule);
    };

    BlankModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_blank_modal_page__WEBPACK_IMPORTED_MODULE_6__["BlankModalPage"]],
      entryComponents: [_blank_modal_page__WEBPACK_IMPORTED_MODULE_6__["BlankModalPage"]]
    })], BlankModalPageModule);
    /***/
  },

  /***/
  "./src/app/modals/blank-modal/blank-modal.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modals/blank-modal/blank-modal.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsBlankModalBlankModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9ibGFuay1tb2RhbC9ibGFuay1tb2RhbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modals/blank-modal/blank-modal.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/modals/blank-modal/blank-modal.page.ts ***!
    \********************************************************/

  /*! exports provided: BlankModalPage */

  /***/
  function srcAppModalsBlankModalBlankModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlankModalPage", function () {
      return BlankModalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var BlankModalPage = /*#__PURE__*/function () {
      function BlankModalPage(modalCont) {
        _classCallCheck(this, BlankModalPage);

        this.modalCont = modalCont;
      }

      _createClass(BlankModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {//this.modalCont.dismiss();
        }
      }]);

      return BlankModalPage;
    }();

    BlankModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    BlankModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blank-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blank-modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/blank-modal/blank-modal.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blank-modal.page.scss */
      "./src/app/modals/blank-modal/blank-modal.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], BlankModalPage);
    /***/
  },

  /***/
  "./src/app/modals/currency-list/currency-list.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/currency-list/currency-list.module.ts ***!
    \**************************************************************/

  /*! exports provided: CurrencyListPageModule */

  /***/
  function srcAppModalsCurrencyListCurrencyListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyListPageModule", function () {
      return CurrencyListPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _currency_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./currency-list.page */
    "./src/app/modals/currency-list/currency-list.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _currency_list_page__WEBPACK_IMPORTED_MODULE_6__["CurrencyListPage"]
    }];

    var CurrencyListPageModule = function CurrencyListPageModule() {
      _classCallCheck(this, CurrencyListPageModule);
    };

    CurrencyListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_currency_list_page__WEBPACK_IMPORTED_MODULE_6__["CurrencyListPage"]],
      entryComponents: [_currency_list_page__WEBPACK_IMPORTED_MODULE_6__["CurrencyListPage"]]
    })], CurrencyListPageModule);
    /***/
  },

  /***/
  "./src/app/modals/currency-list/currency-list.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modals/currency-list/currency-list.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsCurrencyListCurrencyListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jdXJyZW5jeS1saXN0L2N1cnJlbmN5LWxpc3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modals/currency-list/currency-list.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/currency-list/currency-list.page.ts ***!
    \************************************************************/

  /*! exports provided: CurrencyListPage */

  /***/
  function srcAppModalsCurrencyListCurrencyListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyListPage", function () {
      return CurrencyListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var CurrencyListPage = /*#__PURE__*/function () {
      function CurrencyListPage(loading, config, shared, modalCtrl, http) {
        _classCallCheck(this, CurrencyListPage);

        this.loading = loading;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.currencyList = [];
        this.getListOfCurrency();
      }

      _createClass(CurrencyListPage, [{
        key: "getListOfCurrency",
        value: function getListOfCurrency() {
          var _this10 = this;

          this.loading.show();
          this.config.getWithUrl(this.config.url + "/api/appsettings/get_all_currencies/?insecure=cool").then(function (data) {
            _this10.loading.hide();

            _this10.currencyList = data.data;

            _this10.currencyList.forEach(function (val) {
              if (val.symbol == localStorage.currency) {
                console.log(val.symbol);
                _this10.currency = val;
              }
            });
          });
        }
      }, {
        key: "updateCurrency",
        value: function updateCurrency(c) {
          if (localStorage.currency != c.code) {
            this.loading.autoHide(1000);
            localStorage.currency = c.symbol;
            localStorage.currencyCode = c.name;
            localStorage.currencyPos = c.position;
            localStorage.decimals = c.decimals;
            this.shared.emptyCart();
            this.shared.emptyRecentViewed();
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          }
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CurrencyListPage;
    }();

    CurrencyListPage.ctorParameters = function () {
      return [{
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    CurrencyListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-currency-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./currency-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/currency-list/currency-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./currency-list.page.scss */
      "./src/app/modals/currency-list/currency-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], CurrencyListPage);
    /***/
  },

  /***/
  "./src/app/modals/forgot-password/forgot-password.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modals/forgot-password/forgot-password.module.ts ***!
    \******************************************************************/

  /*! exports provided: ForgotPasswordPageModule */

  /***/
  function srcAppModalsForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
      return ForgotPasswordPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/modals/forgot-password/forgot-password.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }];

    var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
      _classCallCheck(this, ForgotPasswordPageModule);
    };

    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]],
      entryComponents: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })], ForgotPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/modals/forgot-password/forgot-password.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modals/forgot-password/forgot-password.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-img {\n  height: 150px;\n  opacity: 0.1;\n}\n\nform {\n  padding-top: 28px;\n}\n\nform ion-item {\n  --padding-start: 0;\n  --background: #fafafa;\n}\n\nform ion-item ion-label {\n  color: gray;\n}\n\nform ion-item:nth-child(2) {\n  height: 33px;\n}\n\nform ion-item:nth-child(2) ion-label {\n  color: red;\n}\n\nform ion-button {\n  margin-top: 10px;\n  --background: #557f5f;\n  text-transform: uppercase;\n  color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FERUk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDQVI7O0FEQ1E7RUFDSSxXQUFBO0FDQ1o7O0FEQ1E7RUFDSSxZQUFBO0FDQ1o7O0FEQVk7RUFDSSxVQUFBO0FDRWhCOztBREVJO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRm9yIGltYWdlIGRlc2lnblxuaW9uLWltZ3tcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG9wYWNpdHk6IDAuMTA7XG59XG5cbi8vIEZvciBGb3JtXG5mb3Jte1xuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgIGlvbi1pdGVte1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgJjpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgY29sb3I6cmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzU1N2Y1ZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICNmYWZhZmE7XG5cbiAgICB9XG59IiwiaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuZm9ybSBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuZm9ybSBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogZ3JheTtcbn1cbmZvcm0gaW9uLWl0ZW06bnRoLWNoaWxkKDIpIHtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuZm9ybSBpb24taXRlbTpudGgtY2hpbGQoMikgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHJlZDtcbn1cbmZvcm0gaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogIzU1N2Y1ZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmYWZhZmE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modals/forgot-password/forgot-password.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modals/forgot-password/forgot-password.page.ts ***!
    \****************************************************************/

  /*! exports provided: ForgotPasswordPage */

  /***/
  function srcAppModalsForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
      return ForgotPasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var ForgotPasswordPage = /*#__PURE__*/function () {
      function ForgotPasswordPage(loading, http, config, shared, modalCtrl) {
        _classCallCheck(this, ForgotPasswordPage);

        this.loading = loading;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.formData = {
          customers_email_address: ''
        };
        this.errorMessage = '';
      }

      _createClass(ForgotPasswordPage, [{
        key: "forgetPassword",
        value: function forgetPassword() {
          var _this11 = this;

          this.loading.show();
          this.errorMessage = '';
          this.http.get(this.config.url + '/api/appusers/forgot_password/?insecure=cool&email=' + this.formData.customers_email_address).subscribe(function (data) {
            _this11.loading.hide();

            console.log(data);

            _this11.shared.showAlert(data);

            _this11.dismiss();
          }, function (error) {
            _this11.loading.hide();

            if (error.ok == false) {
              console.log(error);
              _this11.errorMessage = error.error.error;
            }
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordPage;
    }();

    ForgotPasswordPage.ctorParameters = function () {
      return [{
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }];
    };

    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/forgot-password/forgot-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.page.scss */
      "./src/app/modals/forgot-password/forgot-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], ForgotPasswordPage);
    /***/
  },

  /***/
  "./src/app/modals/language/language.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/modals/language/language.module.ts ***!
    \****************************************************/

  /*! exports provided: LanguagePageModule */

  /***/
  function srcAppModalsLanguageLanguageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function () {
      return LanguagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./language.page */
    "./src/app/modals/language/language.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]
    }];

    var LanguagePageModule = function LanguagePageModule() {
      _classCallCheck(this, LanguagePageModule);
    };

    LanguagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      exports: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]],
      declarations: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]],
      entryComponents: [_language_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePage"]]
    })], LanguagePageModule);
    /***/
  },

  /***/
  "./src/app/modals/language/language.page.scss":
  /*!****************************************************!*\
    !*** ./src/app/modals/language/language.page.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsLanguageLanguagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9sYW5ndWFnZS9sYW5ndWFnZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modals/language/language.page.ts":
  /*!**************************************************!*\
    !*** ./src/app/modals/language/language.page.ts ***!
    \**************************************************/

  /*! exports provided: LanguagePage */

  /***/
  function srcAppModalsLanguageLanguagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguagePage", function () {
      return LanguagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var LanguagePage = /*#__PURE__*/function () {
      function LanguagePage(loading, modalCont, config, shared) {
        var _this12 = this;

        _classCallCheck(this, LanguagePage);

        this.loading = loading;
        this.modalCont = modalCont;
        this.config = config;
        this.shared = shared;
        this.currentLanguageCode = localStorage.languageCode;
        this.languageList = [{
          "name": "English",
          "code": "en",
          "image": "assets/flags/english.jpg",
          "direction": "ltr"
        }, {
          "name": "Francais",
          "code": "fr",
          "image": "assets/flags/uae.jpg",
          "direction": "ltr"
        }];
        this.languageList.forEach(function (val) {
          if (val.code == _this12.currentLanguageCode) _this12.language = val;
        });
      }

      _createClass(LanguagePage, [{
        key: "updateLanguage",
        value: function updateLanguage(v) {
          console.log(v.code);

          if (this.currentLanguageCode != v.code) {
            console.log(v.code);
            this.loading.autoHide(1000);
            localStorage.languageCode = v.code;
            localStorage.languageDirection = v.direction;
            this.shared.emptyCart();
            this.shared.emptyRecentViewed();
            setTimeout(function () {
              window.location.reload();
            }, 1000);
          }
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCont.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LanguagePage;
    }();

    LanguagePage.ctorParameters = function () {
      return [{
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }];
    };

    LanguagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-language',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./language.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/language/language.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./language.page.scss */
      "./src/app/modals/language/language.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]])], LanguagePage);
    /***/
  },

  /***/
  "./src/app/modals/login/login.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/modals/login/login.module.ts ***!
    \**********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppModalsLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/modals/login/login.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }];

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
      entryComponents: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/modals/login/login.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/modals/login/login.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color: white;\n}\nion-header ion-toolbar ion-icon {\n  zoom: 1.4;\n}\nion-img {\n  height: 150px;\n  opacity: 0.1;\n}\nform {\n  padding-top: 28px;\n}\nform ion-item {\n  --padding-start: 0;\n  --background: #fafafa;\n}\nform ion-item ion-label {\n  color: gray;\n}\nform ion-item:nth-child(3) {\n  height: 33px;\n}\nform ion-item:nth-child(3) ion-label {\n  color: red;\n}\nform ion-button {\n  text-transform: uppercase;\n  color: #fafafa;\n}\nion-button:nth-child(3) {\n  text-transform: capitalize;\n  margin-top: 15px;\n}\nion-button:nth-child(4) {\n  margin-top: 15px;\n  --background: #3b5998;\n  color: white;\n}\nion-button:nth-child(5) {\n  color: black;\n  margin-top: 20px;\n  --border-color: black;\n  --border-width: thin;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQ0FBQTtFQUNBLGNBQUE7QUNBSjtBRENJO0VBQ0UsU0FBQTtBQ0NOO0FES0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FETUE7RUFDRSxpQkFBQTtBQ0hGO0FESUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDRko7QURHSTtFQUNFLFdBQUE7QUNETjtBREdJO0VBQ0UsWUFBQTtBQ0ROO0FERU07RUFDRSxVQUFBO0FDQVI7QURJRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FEUUU7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FDTEo7QURPRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDTEo7QURPRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIHpvb206IDEuNDtcbiAgICB9XG4gIH1cbn1cblxuLy8gRm9yIGltYWdlIGRlc2lnblxuaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuLy8gRm9yIEZvcm1cbmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjhweDtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmFmYWZhO1xuICB9XG59XG5cbi8vIEZvciBMb2dpbiwgRmFjZWJvb2ssIFJlZ2lzdGVyIEJ1dHRvbnNcbmlvbi1idXR0b24ge1xuICAmOm50aC1jaGlsZCgzKSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAmOm50aC1jaGlsZCg0KSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAtLWJhY2tncm91bmQ6ICMzYjU5OTg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gICY6bnRoLWNoaWxkKDUpIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAtLWJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgLS1ib3JkZXItd2lkdGg6IHRoaW47XG4gIH1cbn1cblxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWljb24ge1xuICB6b29tOiAxLjQ7XG59XG5cbmlvbi1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjhweDtcbn1cbmZvcm0gaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbmZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXk7XG59XG5mb3JtIGlvbi1pdGVtOm50aC1jaGlsZCgzKSB7XG4gIGhlaWdodDogMzNweDtcbn1cbmZvcm0gaW9uLWl0ZW06bnRoLWNoaWxkKDMpIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5mb3JtIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZhZmFmYTtcbn1cblxuaW9uLWJ1dHRvbjpudGgtY2hpbGQoMykge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbmlvbi1idXR0b246bnRoLWNoaWxkKDQpIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjM2I1OTk4O1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24tYnV0dG9uOm50aC1jaGlsZCg1KSB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLS1ib3JkZXItY29sb3I6IGJsYWNrO1xuICAtLWJvcmRlci13aWR0aDogdGhpbjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/login/login.page.ts":
  /*!********************************************!*\
    !*** ./src/app/modals/login/login.page.ts ***!
    \********************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppModalsLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../sign-up/sign-up.page */
    "./src/app/modals/sign-up/sign-up.page.ts");
    /* harmony import */


    var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../forgot-password/forgot-password.page */
    "./src/app/modals/forgot-password/forgot-password.page.ts");
    /* harmony import */


    var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/facebook/ngx */
    "./node_modules/@ionic-native/facebook/ngx/index.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(http, config, modalCtrl, loading, shared, fb, applicationRef, navCtrl, events, navParams) {
        _classCallCheck(this, LoginPage);

        this.http = http;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.fb = fb;
        this.applicationRef = applicationRef;
        this.navCtrl = navCtrl;
        this.events = events;
        this.navParams = navParams;
        this.hideGuestLogin = false;
        this.formData = {
          username: '',
          password: ''
        };
        this.errorMessage = '';
        this.hideGuestLogin = navParams.get('hideGuestLogin');
        console.log(this.hideGuestLogin);
      } // <!-- 2.0 updates -->


      _createClass(LoginPage, [{
        key: "guestLogin",
        value: function guestLogin() {
          if (this.config.checkOutPage == 1) this.shared.onePageCheckOut();else this.events.publish('openShippingAddressPage');
          this.dismiss();
        }
      }, {
        key: "login",
        value: function login() {
          var _this13 = this;

          this.loading.show();
          this.errorMessage = '';
          var formData = new FormData();
          formData.append("username", this.formData.username);
          formData.append("password", this.formData.password);
          this.http.post(this.config.url + '/api/appusers/generate_cookie/?insecure=cool', formData).subscribe(function (data) {
            if (data.status == "ok") _this13.getUserData(data, "simple");else {
              _this13.errorMessage = data.error;

              _this13.loading.hide();
            }
          }, function (err) {
            _this13.loading.hide();

            if (err.ok == false) {
              _this13.errorMessage = "Invalid Username or Password";
            }
          }); // this.config.getWoo("customers/" + 118 + "?" + this.config.productsArguments).then((data:any) => {
          //   this.loading.hide();
          //   this.shared.login(data);
          //   //console.log(this.shared.customerData);
          //   this.dismiss();
          //   this.applicationRef.tick();
          // });
        }
      }, {
        key: "getUserData",
        value: function getUserData(c, type) {
          var _this14 = this;

          var id;
          if (type == "simple") id = c.user.id;
          if (type == "fb") id = c.id; //alert(c.user.id + " -- " + c.id + " --- " + id);

          this.config.getWoo("customers/" + id + "?" + this.config.productsArguments).then(function (data) {
            _this14.loading.hide();

            var dat = data; //alert(JSON.stringify(dat));

            _this14.shared.login(Object.assign({
              cookie: c.cookie
            }, dat)); // alert(JSON.stringify(Object.assign({ cookie: c.cookie }, dat)));


            _this14.dismiss();

            _this14.applicationRef.tick();
          });
        }
      }, {
        key: "openSignUpPage",
        value: function openSignUpPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var modal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalCtrl.create({
                      component: _sign_up_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
                    });

                  case 2:
                    modal = _context5.sent;
                    _context5.next = 5;
                    return modal.present();

                  case 5:
                    return _context5.abrupt("return", _context5.sent);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "openForgetPasswordPage",
        value: function openForgetPasswordPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalCtrl.create({
                      component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordPage"]
                    });

                  case 2:
                    modal = _context6.sent;
                    _context6.next = 5;
                    return modal.present();

                  case 5:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          var _this15 = this;

          this.fb.getLoginStatus().then(function (res) {
            if (res.status == 'connected') {
              console.log("user connected already" + res.authResponse.accessToken);

              _this15.createAccount(res.authResponse.accessToken, 'fb');
            } else {
              console.log("USer Not login ");

              _this15.fb.login(['public_profile', 'user_friends', 'email']).then(function (res) {
                // this.shared.showAlert('Logged into Facebook!' + JSON.stringify(res));
                console.log("successfully login ");

                _this15.createAccount(res.authResponse.accessToken, 'fb');
              }).catch(function (e) {
                return _this15.shared.showAlert('Error logging into Facebook' + JSON.stringify(e));
              });
            }
          }).catch(function (e) {
            return _this15.shared.showAlert('Error Check Login Status Facebook' + JSON.stringify(e));
          });
        } // googleLogin() {
        //   this.loading.autoHide(500);
        //   this.googlePlus.login({})
        //     .then(res => {
        //       //  alert(JSON.stringify(res))
        //       this.createAccount(res, 'google');
        //     })
        //     .catch(err => this.shared.showAlert(JSON.stringify(err)));
        // }
        //============================================================================================  
        //creating new account using function facebook or google details 

      }, {
        key: "createAccount",
        value: function createAccount(info, type) {
          var _this16 = this;

          //this.formData.username = info;
          // alert(info);
          this.loading.show();
          var url = '';
          url = '/api/appusers/fb_connect/?insecure=cool&access_token=' + info;
          this.http.get(this.config.url + url).subscribe(function (data) {
            _this16.loading.hide(); //alert(JSON.stringify(data));


            _this16.getUserData(data, "fb");
          }, function (error) {
            _this16.loading.hide(); //this.shared.showAlert("error " + JSON.stringify(error));

          });
        }
      }, {
        key: "dismiss",
        //close modal
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/modals/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/modals/privacy-policy/privacy-policy.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modals/privacy-policy/privacy-policy.module.ts ***!
    \****************************************************************/

  /*! exports provided: PrivacyPolicyPageModule */

  /***/
  function srcAppModalsPrivacyPolicyPrivacyPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function () {
      return PrivacyPolicyPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./privacy-policy.page */
    "./src/app/modals/privacy-policy/privacy-policy.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]
    }];

    var PrivacyPolicyPageModule = function PrivacyPolicyPageModule() {
      _classCallCheck(this, PrivacyPolicyPageModule);
    };

    PrivacyPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]],
      entryComponents: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicyPage"]]
    })], PrivacyPolicyPageModule);
    /***/
  },

  /***/
  "./src/app/modals/privacy-policy/privacy-policy.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modals/privacy-policy/privacy-policy.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsPrivacyPolicyPrivacyPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-text p {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICBpb24tdGV4dCB7XHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudCBpb24tdGV4dCBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/privacy-policy/privacy-policy.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/privacy-policy/privacy-policy.page.ts ***!
    \**************************************************************/

  /*! exports provided: PrivacyPolicyPage */

  /***/
  function srcAppModalsPrivacyPolicyPrivacyPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPage", function () {
      return PrivacyPolicyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var PrivacyPolicyPage = /*#__PURE__*/function () {
      function PrivacyPolicyPage(mdCtrl, config) {
        _classCallCheck(this, PrivacyPolicyPage);

        this.mdCtrl = mdCtrl;
        this.config = config;
      }

      _createClass(PrivacyPolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // For Modal Dismiss

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.mdCtrl.dismiss();
        }
      }]);

      return PrivacyPolicyPage;
    }();

    PrivacyPolicyPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }];
    };

    PrivacyPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-privacy-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacy-policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/privacy-policy/privacy-policy.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacy-policy.page.scss */
      "./src/app/modals/privacy-policy/privacy-policy.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], PrivacyPolicyPage);
    /***/
  },

  /***/
  "./src/app/modals/refund-policy/refund-policy.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/refund-policy/refund-policy.module.ts ***!
    \**************************************************************/

  /*! exports provided: RefundPolicyPageModule */

  /***/
  function srcAppModalsRefundPolicyRefundPolicyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPolicyPageModule", function () {
      return RefundPolicyPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _refund_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./refund-policy.page */
    "./src/app/modals/refund-policy/refund-policy.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _refund_policy_page__WEBPACK_IMPORTED_MODULE_6__["RefundPolicyPage"]
    }];

    var RefundPolicyPageModule = function RefundPolicyPageModule() {
      _classCallCheck(this, RefundPolicyPageModule);
    };

    RefundPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_refund_policy_page__WEBPACK_IMPORTED_MODULE_6__["RefundPolicyPage"]],
      entryComponents: [_refund_policy_page__WEBPACK_IMPORTED_MODULE_6__["RefundPolicyPage"]]
    })], RefundPolicyPageModule);
    /***/
  },

  /***/
  "./src/app/modals/refund-policy/refund-policy.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modals/refund-policy/refund-policy.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsRefundPolicyRefundPolicyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-text p {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy9yZWZ1bmQtcG9saWN5L3JlZnVuZC1wb2xpY3kucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvcmVmdW5kLXBvbGljeS9yZWZ1bmQtcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9yZWZ1bmQtcG9saWN5L3JlZnVuZC1wb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICBpb24tdGV4dCB7XHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tY29udGVudCBpb24tdGV4dCBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/refund-policy/refund-policy.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/refund-policy/refund-policy.page.ts ***!
    \************************************************************/

  /*! exports provided: RefundPolicyPage */

  /***/
  function srcAppModalsRefundPolicyRefundPolicyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPolicyPage", function () {
      return RefundPolicyPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var RefundPolicyPage = /*#__PURE__*/function () {
      function RefundPolicyPage(mdCtrl, config) {
        _classCallCheck(this, RefundPolicyPage);

        this.mdCtrl = mdCtrl;
        this.config = config;
      }

      _createClass(RefundPolicyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // For Modal Dismiss

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.mdCtrl.dismiss();
        }
      }]);

      return RefundPolicyPage;
    }();

    RefundPolicyPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }];
    };

    RefundPolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refund-policy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./refund-policy.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/refund-policy/refund-policy.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./refund-policy.page.scss */
      "./src/app/modals/refund-policy/refund-policy.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])], RefundPolicyPage);
    /***/
  },

  /***/
  "./src/app/modals/scratch-card/scratch-card.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/scratch-card/scratch-card.module.ts ***!
    \************************************************************/

  /*! exports provided: ScratchCardPageModule */

  /***/
  function srcAppModalsScratchCardScratchCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScratchCardPageModule", function () {
      return ScratchCardPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _scratch_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scratch-card.page */
    "./src/app/modals/scratch-card/scratch-card.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _scratch_card_page__WEBPACK_IMPORTED_MODULE_6__["ScratchCardPage"]
    }];

    var ScratchCardPageModule = function ScratchCardPageModule() {
      _classCallCheck(this, ScratchCardPageModule);
    };

    ScratchCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_scratch_card_page__WEBPACK_IMPORTED_MODULE_6__["ScratchCardPage"]]
    })], ScratchCardPageModule);
    /***/
  },

  /***/
  "./src/app/modals/scratch-card/scratch-card.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/modals/scratch-card/scratch-card.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsScratchCardScratchCardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scratch-card-popup {\n  /* Where the scratchcard will be generate. */\n  /* Background image, the result... */\n  /* The scratchcard generate with scratchcard-js */\n  /* Scratchcard informations */\n}\n.scratch-card-popup #js--sc--container {\n  position: relative;\n  margin: 0 auto;\n  height: 100px;\n  border: 1px solid black;\n  top: -100px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transform: translateY(100px);\n          transform: translateY(100px);\n  opacity: 1;\n}\n.scratch-card-popup #js--sc--container:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"/assets/loader.gif\");\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.scratch-card-popup #js--sc--container canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.scratch-card-popup #js--sc--container img {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.scratch-card-popup #js-debug-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: yellow;\n  width: 50px;\n  height: 50px;\n  z-index: 99;\n  will-change: transform;\n  -webkit-transition-duration: 300ms;\n  transition-duration: 300ms;\n}\n.scratch-card-popup .sc__wrapper {\n  display: block;\n  width: 100%;\n  height: 300px;\n  max-width: 300px;\n  margin: 0 auto;\n  border: 5px solid rgba(255, 255, 255, 0.5);\n}\n.scratch-card-popup .sc__container {\n  position: relative;\n  overflow: hidden;\n  max-height: 300px;\n  max-width: 300px;\n}\n.scratch-card-popup .sc__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.scratch-card-popup .sc__container > img {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n.scratch-card-popup .sc__container canvas {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n.scratch-card-popup .sc__infos {\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n  margin-top: 5px;\n  font-weight: bold;\n  font-size: 16px;\n}\n.scratch-card-popup .test {\n  color: lightsalmon;\n  font-size: 23px;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy9zY3JhdGNoLWNhcmQvc2NyYXRjaC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3NjcmF0Y2gtY2FyZC9zY3JhdGNoLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBeUVFLDRDQUFBO0VBZ0JBLG9DQUFBO0VBU0EsaURBQUE7RUFTQSw2QkFBQTtBQ3RHRjtBREpFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFVBQUE7QUNLSjtBRERFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7QUNHSjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7QURDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREdFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUNESjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSko7QURRRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05KO0FEVUU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSSjtBRFlFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDVko7QURhRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvc2NyYXRjaC1jYXJkL3NjcmF0Y2gtY2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NyYXRjaC1jYXJkLXBvcHVwIHtcbiAgI2pzLS1zYy0tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLy93aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB0b3A6IC0xMDBweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICAvLyBhbmltYXRpb246IG1vdmUgMnM7XG4gIH1cblxuICAjanMtLXNjLS1jb250YWluZXI6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sb2FkZXIuZ2lmXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgfVxuXG4gICNqcy0tc2MtLWNvbnRhaW5lciBjYW52YXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAjanMtLXNjLS1jb250YWluZXIgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAjanMtZGVidWctY3Vyc29yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIH1cblxuICAuc2NfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKCNmZmYsIDAuNSk7XG4gIH1cblxuICAvKiBXaGVyZSB0aGUgc2NyYXRjaGNhcmQgd2lsbCBiZSBnZW5lcmF0ZS4gKi9cbiAgLnNjX19jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cblxuICAuc2NfX2lubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLyogQmFja2dyb3VuZCBpbWFnZSwgdGhlIHJlc3VsdC4uLiAqL1xuICAuc2NfX2NvbnRhaW5lciA+IGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC8qIFRoZSBzY3JhdGNoY2FyZCBnZW5lcmF0ZSB3aXRoIHNjcmF0Y2hjYXJkLWpzICovXG4gIC5zY19fY29udGFpbmVyIGNhbnZhcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC8qIFNjcmF0Y2hjYXJkIGluZm9ybWF0aW9ucyAqL1xuICAuc2NfX2luZm9zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAudGVzdCB7XG4gICAgY29sb3I6IGxpZ2h0c2FsbW9uO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgfVxufVxuIiwiLnNjcmF0Y2gtY2FyZC1wb3B1cCB7XG4gIC8qIFdoZXJlIHRoZSBzY3JhdGNoY2FyZCB3aWxsIGJlIGdlbmVyYXRlLiAqL1xuICAvKiBCYWNrZ3JvdW5kIGltYWdlLCB0aGUgcmVzdWx0Li4uICovXG4gIC8qIFRoZSBzY3JhdGNoY2FyZCBnZW5lcmF0ZSB3aXRoIHNjcmF0Y2hjYXJkLWpzICovXG4gIC8qIFNjcmF0Y2hjYXJkIGluZm9ybWF0aW9ucyAqL1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAjanMtLXNjLS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgdG9wOiAtMTAwcHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwICNqcy0tc2MtLWNvbnRhaW5lcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbG9hZGVyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbi5zY3JhdGNoLWNhcmQtcG9wdXAgI2pzLS1zYy0tY29udGFpbmVyIGNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAjanMtLXNjLS1jb250YWluZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAjanMtZGVidWctY3Vyc29yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAuc2NfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG4uc2NyYXRjaC1jYXJkLXBvcHVwIC5zY19fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cbi5zY3JhdGNoLWNhcmQtcG9wdXAgLnNjX19pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAuc2NfX2NvbnRhaW5lciA+IGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAuc2NfX2NvbnRhaW5lciBjYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5zY3JhdGNoLWNhcmQtcG9wdXAgLnNjX19pbmZvcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnNjcmF0Y2gtY2FyZC1wb3B1cCAudGVzdCB7XG4gIGNvbG9yOiBsaWdodHNhbG1vbjtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modals/scratch-card/scratch-card.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modals/scratch-card/scratch-card.page.ts ***!
    \**********************************************************/

  /*! exports provided: ScratchCardPage */

  /***/
  function srcAppModalsScratchCardScratchCardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScratchCardPage", function () {
      return ScratchCardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var ScratchCardPage = /*#__PURE__*/function () {
      function ScratchCardPage(navCtrl, popoverCtrl, navParams, events) {
        _classCallCheck(this, ScratchCardPage);

        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.events = events;
        this.data = this.navParams.get("data");
      }

      _createClass(ScratchCardPage, [{
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {}
      }, {
        key: "close",
        value: function close() {
          this.popoverCtrl.dismiss();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.data = this.navParams.get("data");
          console.log(this.data);

          var _this = this; // window.addEventListener('load', function () {


          var html = '<div class="test">' + this.data.message + '<br>(code : <strong>' + this.data.code + ')</strong></div>';
          var scContainer = document.getElementById('js--sc--container');
          var sc = new ScratchCard('#js--sc--container', {
            enabledPercentUpdate: true,
            scratchType: SCRATCH_TYPE.CIRCLE,
            // brushSrc: './images/brush.png',
            containerWidth: scContainer.offsetWidth,
            containerHeight: scContainer.offsetHeight,
            imageForwardSrc: 'assets/scratchcard.png',
            imageBackgroundSrc: '',
            htmlBackground: html,
            clearZoneRadius: 25,
            percentToFinish: 25,
            nPoints: 30,
            pointSize: 20,
            callback: function callback() {
              _this.events.publish('cardScratched', _this.data);

              console.log("Card is scratched"); //_this.close();
            }
          });
          sc.init();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScratchCardPage;
    }();

    ScratchCardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }];
    };

    ScratchCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scratch-card',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scratch-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/scratch-card/scratch-card.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scratch-card.page.scss */
      "./src/app/modals/scratch-card/scratch-card.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])], ScratchCardPage);
    /***/
  },

  /***/
  "./src/app/modals/select-country/select-country.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modals/select-country/select-country.module.ts ***!
    \****************************************************************/

  /*! exports provided: SelectCountryPageModule */

  /***/
  function srcAppModalsSelectCountrySelectCountryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPageModule", function () {
      return SelectCountryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _select_country_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-country.page */
    "./src/app/modals/select-country/select-country.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]
    }];

    var SelectCountryPageModule = function SelectCountryPageModule() {
      _classCallCheck(this, SelectCountryPageModule);
    };

    SelectCountryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_6__["SelectCountryPage"]]
    })], SelectCountryPageModule);
    /***/
  },

  /***/
  "./src/app/modals/select-country/select-country.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modals/select-country/select-country.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsSelectCountrySelectCountryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color:white;\n}\nion-header ion-toolbar ion-icon {\n  zoom: 1.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy9zZWxlY3QtY291bnRyeS9zZWxlY3QtY291bnRyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFscy9zZWxlY3QtY291bnRyeS9zZWxlY3QtY291bnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQ0FBQTtFQUNBLGFBQUE7QUNBUjtBRENRO0VBQ0ksU0FBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3NlbGVjdC1jb3VudHJ5L3NlbGVjdC1jb3VudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAtLWNvbG9yOndoaXRlO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB6b29tOiAxLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOndoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24taWNvbiB7XG4gIHpvb206IDEuNDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/select-country/select-country.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/select-country/select-country.page.ts ***!
    \**************************************************************/

  /*! exports provided: SelectCountryPage */

  /***/
  function srcAppModalsSelectCountrySelectCountryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectCountryPage", function () {
      return SelectCountryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");

    var SelectCountryPage = /*#__PURE__*/function () {
      function SelectCountryPage(http, events, config, modalCtrl, loading, shared, navParams, location) {
        var _this17 = this;

        _classCallCheck(this, SelectCountryPage);

        this.http = http;
        this.events = events;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.navParams = navParams;
        this.location = location;
        this.searchQuery = '';
        this.countries = new Array();
        this.items = this.countries = this.location.data.countries;
        setTimeout(function () {
          _this17.searchBar.setFocus();
        }, 250);
      }

      _createClass(SelectCountryPage, [{
        key: "initializeItems",
        value: function initializeItems() {
          this.items = this.countries;
        }
      }, {
        key: "getItems",
        value: function getItems(ev) {
          // Reset items back to all of the items
          this.initializeItems(); // set val to the value of the searchbar

          var val = ev.target.value; // if the value is an empty string don't filter the items

          if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
              return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          }
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "selectCountry",
        value: function selectCountry(c) {
          var page = this.navParams.get('page');
          this.events.publish("countryChange", page, c);

          if (page == 'shipping') {
            this.shared.shippingCountryName = c.name;
            this.shared.shipping.country = c.value;
            this.shared.shipping.state = null;
            this.shared.shipping.city = null;
            this.shared.shipping.postcode = null;
            this.shared.shippingStateName = "";
          } else if (page == 'billing') {
            this.shared.billingCountryName = c.name;
            this.shared.billing.country = c.value;
            this.shared.billing.state = null;
            this.shared.billing.city = null;
            this.shared.billing.postcode = null;
            this.shared.billingStateName = "";
          }

          this.dismiss();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectCountryPage;
    }();

    SelectCountryPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__["LocationDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Searchbar', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSearchbar"])], SelectCountryPage.prototype, "searchBar", void 0);
    SelectCountryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-country',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-country.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-country/select-country.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-country.page.scss */
      "./src/app/modals/select-country/select-country.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_5__["LocationDataService"]])], SelectCountryPage);
    /***/
  },

  /***/
  "./src/app/modals/select-zones/select-zones.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/select-zones/select-zones.module.ts ***!
    \************************************************************/

  /*! exports provided: SelectZonesPageModule */

  /***/
  function srcAppModalsSelectZonesSelectZonesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectZonesPageModule", function () {
      return SelectZonesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _select_zones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select-zones.page */
    "./src/app/modals/select-zones/select-zones.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _select_zones_page__WEBPACK_IMPORTED_MODULE_6__["SelectZonesPage"]
    }];

    var SelectZonesPageModule = function SelectZonesPageModule() {
      _classCallCheck(this, SelectZonesPageModule);
    };

    SelectZonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_select_zones_page__WEBPACK_IMPORTED_MODULE_6__["SelectZonesPage"]]
    })], SelectZonesPageModule);
    /***/
  },

  /***/
  "./src/app/modals/select-zones/select-zones.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/modals/select-zones/select-zones.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsSelectZonesSelectZonesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color:white;\n}\nion-header ion-toolbar ion-icon {\n  zoom: 1.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy9zZWxlY3Qtem9uZXMvc2VsZWN0LXpvbmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWxzL3NlbGVjdC16b25lcy9zZWxlY3Qtem9uZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0NBQUE7RUFDQSxhQUFBO0FDQVI7QURDUTtFQUNJLFNBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9zZWxlY3Qtem9uZXMvc2VsZWN0LXpvbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAtLWNvbG9yOndoaXRlO1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICB6b29tOiAxLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOndoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24taWNvbiB7XG4gIHpvb206IDEuNDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/select-zones/select-zones.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modals/select-zones/select-zones.page.ts ***!
    \**********************************************************/

  /*! exports provided: SelectZonesPage */

  /***/
  function srcAppModalsSelectZonesSelectZonesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectZonesPage", function () {
      return SelectZonesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");

    var SelectZonesPage = /*#__PURE__*/function () {
      function SelectZonesPage(navCtrl, navParams, http, events, config, modalCtrl, loading, shared, location) {
        _classCallCheck(this, SelectZonesPage);

        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.events = events;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.location = location;
        this.searchQuery = '';
        this.items = [];
        this.zones = [];
        var page = this.navParams.get('page');
        var id = this.navParams.get('id');

        if (page == 'shipping') {
          this.items = this.zones = this.location.data.states[this.shared.shipping.country];
        } else {
          this.items = this.zones = this.location.data.states[this.shared.billing.country];
        }

        if (page == 'shippingUpdate' || page == 'billingUpdate') {
          console.log(id);
          this.items = this.zones = this.location.data.states[id];
          if (this.items == undefined) this.items = this.zones = [];
          console.log(this.items);
        }
      }

      _createClass(SelectZonesPage, [{
        key: "initializeItems",
        value: function initializeItems() {
          this.items = this.zones;
        }
      }, {
        key: "getItems",
        value: function getItems(ev) {
          // Reset items back to all of the items
          this.initializeItems(); // set val to the value of the searchbar

          var val = ev.target.value; // if the value is an empty string don't filter the items

          if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
              return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
          }
        } //close modal

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss();
        }
      }, {
        key: "selectZone",
        value: function selectZone(c) {
          var page = this.navParams.get('page');
          this.events.publish("stateChange", page, c);

          if (page == 'shipping') {
            if (c == 'other') {
              this.shared.shipping.state = 'other';
              this.shared.shippingStateName = "other";
            } else {
              this.shared.shipping.state = c.value;
              this.shared.shippingStateName = c.name; // this.shared.orderDetails.tax_zone_id = c.zone_id;
            }
          } else {
            if (c == 'other') {
              this.shared.billing.state = 'other';
              this.shared.billingStateName = "other";
            } else {
              this.shared.billing.state = c.value;
              this.shared.billingStateName = c.name;
            }
          }

          this.dismiss();
        }
      }, {
        key: "hideOther",
        value: function hideOther() {
          if (this.zones == undefined) this.zones = [];
          if (this.zones.length == 0) return true;else return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectZonesPage;
    }();

    SelectZonesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__["LocationDataService"]
      }];
    };

    SelectZonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-zones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-zones.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-zones/select-zones.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-zones.page.scss */
      "./src/app/modals/select-zones/select-zones.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__["LocationDataService"]])], SelectZonesPage);
    /***/
  },

  /***/
  "./src/app/modals/sign-up/sign-up.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/modals/sign-up/sign-up.module.ts ***!
    \**************************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppModalsSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/modals/sign-up/sign-up.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]
    }];

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]],
      entryComponents: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/modals/sign-up/sign-up.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/modals/sign-up/sign-up.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-avatar {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  height: 100px;\n  width: 100px;\n}\nion-content form {\n  padding-top: 28px;\n}\nion-content form ion-item {\n  --padding-start: 0;\n  --background: #fafafa;\n}\nion-content form ion-item ion-label {\n  color: gray;\n}\nion-content form ion-item:nth-child(6) {\n  height: 33px;\n}\nion-content form ion-item:nth-child(6) ion-label {\n  color: red;\n}\nion-content form p {\n  font-size: 14px;\n}\nion-content form ion-button {\n  --background: #557f5f;\n  text-transform: uppercase;\n  color: #fafafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDREo7QURLRTtFQUNFLGlCQUFBO0FDSEo7QURJSTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUNGTjtBREdNO0VBQ0UsV0FBQTtBQ0RSO0FER007RUFDRSxZQUFBO0FDRFI7QURFUTtFQUNFLFVBQUE7QUNBVjtBRElJO0VBQ0UsZUFBQTtBQ0ZOO0FESUk7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3NpZ24tdXAvc2lnbi11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC8vIEZvciBpbWFnZSBkZXNpZ25cbiAgaW9uLWF2YXRhciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIC8vIEZvciBGb3JtXG4gIGZvcm0ge1xuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgfVxuICAgICAgJjpudGgtY2hpbGQoNikge1xuICAgICAgICBoZWlnaHQ6IDMzcHg7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAtLWJhY2tncm91bmQ6ICM1NTdmNWY7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgY29sb3I6ICNmYWZhZmE7XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCBpb24tYXZhdGFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5pb24tY29udGVudCBmb3JtIHtcbiAgcGFkZGluZy10b3A6IDI4cHg7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBncmF5O1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24taXRlbTpudGgtY2hpbGQoNikge1xuICBoZWlnaHQ6IDMzcHg7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1pdGVtOm50aC1jaGlsZCg2KSBpb24tbGFiZWwge1xuICBjb2xvcjogcmVkO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNTU3ZjVmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZhZmFmYTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/sign-up/sign-up.page.ts":
  /*!************************************************!*\
    !*** ./src/app/modals/sign-up/sign-up.page.ts ***!
    \************************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppModalsSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../term-services/term-services.page */
    "./src/app/modals/term-services/term-services.page.ts");
    /* harmony import */


    var _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../refund-policy/refund-policy.page */
    "./src/app/modals/refund-policy/refund-policy.page.ts");
    /* harmony import */


    var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../privacy-policy/privacy-policy.page */
    "./src/app/modals/privacy-policy/privacy-policy.page.ts");

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(http, config, modalCtrl, loading, shared, platform) {
        _classCallCheck(this, SignUpPage);

        this.http = http;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.platform = platform;
        this.formData = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          username: '',
          wpgdprc: 1,
          register: 'Register'
        };
        this.errorMessage = ''; // /api/appusers/register/?insecure=cool&username=abcd&password=123456&email=abcdxyz@gmail.com&display_name=aopi&nonce=6ad2605198
      }

      _createClass(SignUpPage, [{
        key: "createAccount",
        value: function createAccount() {
          var _this18 = this;

          this.loading.show();
          this.http.get(this.config.url + '/api/get_nonce/?controller=appusers&method=register').subscribe(function (data) {
            _this18.signUp(data.nonce);
          });
        }
      }, {
        key: "signUp",
        value: function signUp(nonce) {
          var _this19 = this;

          console.log(nonce);
          this.errorMessage = '';
          var formData = new FormData();
          formData.append("username", this.formData.username);
          formData.append("email", this.formData.email);
          formData.append("display_name", this.formData.first_name + " " + this.formData.last_name);
          formData.append("nonce", nonce);
          formData.append("password", this.formData.password);
          formData.append("first_name", this.formData.first_name);
          formData.append("last_name", this.formData.last_name);
          this.http.post(this.config.url + '/api/appusers/register/?insecure=cool', formData).subscribe(function (data) {
            _this19.loading.hide();

            if (data.status == "ok") {
              _this19.shared.toast("User Created. Login Using your Username & Password");

              _this19.dismiss();
            } else {
              _this19.errorMessage = data.error;
              console.log(_this19.errorMessage);
            }
          }, function (err) {
            _this19.loading.hide();

            if (err.ok == false) {
              console.log(err);
              _this19.errorMessage = err.error.error;
            }
          });
        }
      }, {
        key: "openPrivacyPolicyPage",
        value: function openPrivacyPolicyPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalCtrl.create({
                      component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyPage"]
                    });

                  case 2:
                    modal = _context7.sent;
                    _context7.next = 5;
                    return modal.present();

                  case 5:
                    return _context7.abrupt("return", _context7.sent);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "openTermServicesPage",
        value: function openTermServicesPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var modal;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.modalCtrl.create({
                      component: _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_7__["TermServicesPage"]
                    });

                  case 2:
                    modal = _context8.sent;
                    _context8.next = 5;
                    return modal.present();

                  case 5:
                    return _context8.abrupt("return", _context8.sent);

                  case 6:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "openRefundPolicyPage",
        value: function openRefundPolicyPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var modal;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.modalCtrl.create({
                      component: _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_8__["RefundPolicyPage"]
                    });

                  case 2:
                    modal = _context9.sent;
                    _context9.next = 5;
                    return modal.present();

                  case 5:
                    return _context9.abrupt("return", _context9.sent);

                  case 6:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.modalCtrl.dismiss();

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/sign-up/sign-up.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/modals/sign-up/sign-up.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])], SignUpPage);
    /***/
  },

  /***/
  "./src/app/modals/term-services/term-services.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modals/term-services/term-services.module.ts ***!
    \**************************************************************/

  /*! exports provided: TermServicesPageModule */

  /***/
  function srcAppModalsTermServicesTermServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermServicesPageModule", function () {
      return TermServicesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _term_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./term-services.page */
    "./src/app/modals/term-services/term-services.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]
    }];

    var TermServicesPageModule = function TermServicesPageModule() {
      _classCallCheck(this, TermServicesPageModule);
    };

    TermServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]],
      entryComponents: [_term_services_page__WEBPACK_IMPORTED_MODULE_6__["TermServicesPage"]]
    })], TermServicesPageModule);
    /***/
  },

  /***/
  "./src/app/modals/term-services/term-services.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/modals/term-services/term-services.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalsTermServicesTermServicesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color:white;\n}\nion-header ion-toolbar ion-icon {\n  zoom: 1.4;\n}\nion-content ion-text p {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL21vZGFscy90ZXJtLXNlcnZpY2VzL3Rlcm0tc2VydmljZXMucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RhbHMvdGVybS1zZXJ2aWNlcy90ZXJtLXNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNDQUFBO0VBQ0EsYUFBQTtBQ0FSO0FEQ1E7RUFDSSxTQUFBO0FDQ1o7QURLUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy90ZXJtLXNlcnZpY2VzL3Rlcm0tc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC0tY29sb3I6d2hpdGU7XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIHpvb206IDEuNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOndoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24taWNvbiB7XG4gIHpvb206IDEuNDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRleHQgcCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modals/term-services/term-services.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/modals/term-services/term-services.page.ts ***!
    \************************************************************/

  /*! exports provided: TermServicesPage */

  /***/
  function srcAppModalsTermServicesTermServicesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermServicesPage", function () {
      return TermServicesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var TermServicesPage = /*#__PURE__*/function () {
      function TermServicesPage(mdCtrl, config) {
        _classCallCheck(this, TermServicesPage);

        this.mdCtrl = mdCtrl;
        this.config = config;
      }

      _createClass(TermServicesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // For Modal Dismiss

      }, {
        key: "dismiss",
        value: function dismiss() {
          this.mdCtrl.dismiss();
        }
      }]);

      return TermServicesPage;
    }();

    TermServicesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }];
    };

    TermServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-term-services',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./term-services.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modals/term-services/term-services.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./term-services.page.scss */
      "./src/app/modals/term-services/term-services.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])], TermServicesPage);
    /***/
  },

  /***/
  "./src/components/menu-component/menu-component.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/components/menu-component/menu-component.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsMenuComponentMenuComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expand-wrapper {\n  -webkit-transition: max-height 0.4s ease-in-out;\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n  width: 100%;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvY29tcG9uZW50cy9tZW51LWNvbXBvbmVudC9tZW51LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFBQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFSTtFQUNFLHdCQUFBO0FDQ04iLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvbWVudS1jb21wb25lbnQvbWVudS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kLXdyYXBwZXIge1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmNvbGxhcHNlZCB7XG4gICAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgfSIsIi5leHBhbmQtd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/components/menu-component/menu-component.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/components/menu-component/menu-component.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MenuComponentComponent */

  /***/
  function srcComponentsMenuComponentMenuComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponentComponent", function () {
      return MenuComponentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuComponentComponent = /*#__PURE__*/function () {
      function MenuComponentComponent(renderer) {
        _classCallCheck(this, MenuComponentComponent);

        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
      }

      _createClass(MenuComponentComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
        }
      }]);

      return MenuComponentComponent;
    }();

    MenuComponentComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MenuComponentComponent.prototype, "expandWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], MenuComponentComponent.prototype, "expanded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)], MenuComponentComponent.prototype, "expandHeight", void 0);
    MenuComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/menu-component/menu-component.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-component.component.scss */
      "./src/components/menu-component/menu-component.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])], MenuComponentComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    //import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/pipes/curency.pipe.ts":
  /*!***********************************!*\
    !*** ./src/pipes/curency.pipe.ts ***!
    \***********************************/

  /*! exports provided: CurencyPipe */

  /***/
  function srcPipesCurencyPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurencyPipe", function () {
      return CurencyPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);

    var CurencyPipe = /*#__PURE__*/function () {
      function CurencyPipe() {
        _classCallCheck(this, CurencyPipe);

        this.currency = jquery__WEBPACK_IMPORTED_MODULE_2__('<textarea />').html(localStorage.currency).text();
        this.position = localStorage.currencyPos;
        this.decimal = localStorage.decimals;
      }

      _createClass(CurencyPipe, [{
        key: "transform",
        value: function transform(value) {
          var v = parseFloat(value).toFixed(this.decimal);

          if (v.toString() == 'NaN') {
            if (this.position == 'left') return this.currency + "" + value;else return value + " " + this.currency;
          } else {
            if (this.position == 'left') return this.currency + "" + v;else return v + " " + this.currency;
          }
        }
      }]);

      return CurencyPipe;
    }();

    CurencyPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'curency'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], CurencyPipe);
    /***/
  },

  /***/
  "./src/pipes/pipes.module.ts":
  /*!***********************************!*\
    !*** ./src/pipes/pipes.module.ts ***!
    \***********************************/

  /*! exports provided: PipesModule */

  /***/
  function srcPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _curency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./curency.pipe */
    "./src/pipes/curency.pipe.ts");
    /* harmony import */


    var _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./translate-app/translate-app.pipe */
    "./src/pipes/translate-app/translate-app.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_curency_pipe__WEBPACK_IMPORTED_MODULE_2__["CurencyPipe"], _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslateAppPipe"]],
      imports: [],
      exports: [_curency_pipe__WEBPACK_IMPORTED_MODULE_2__["CurencyPipe"], _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslateAppPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/pipes/translate-app/translate-app.pipe.ts":
  /*!*******************************************************!*\
    !*** ./src/pipes/translate-app/translate-app.pipe.ts ***!
    \*******************************************************/

  /*! exports provided: TranslateAppPipe */

  /***/
  function srcPipesTranslateAppTranslateAppPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateAppPipe", function () {
      return TranslateAppPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var TranslateAppPipe = /*#__PURE__*/function () {
      function TranslateAppPipe(shared) {
        _classCallCheck(this, TranslateAppPipe);

        this.shared = shared;
      }

      _createClass(TranslateAppPipe, [{
        key: "transform",
        value: function transform(value) {
          //console.log(value + " " + this.shared.translationListArray[value.toString()]);
          if (this.shared.translationListArray[value] == undefined) return value;
          return this.shared.translationListArray[value];
        }
      }]);

      return TranslateAppPipe;
    }();

    TranslateAppPipe.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }];
    };

    TranslateAppPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'translate'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]])], TranslateAppPipe);
    /***/
  },

  /***/
  "./src/providers/config/config.service.ts":
  /*!************************************************!*\
    !*** ./src/providers/config/config.service.ts ***!
    \************************************************/

  /*! exports provided: ConfigService */

  /***/
  function srcProvidersConfigConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js"); // Project Name: Ionic woocommerce
    // Project URI: http://themes-coder.com/products/ionic-woocommerce/
    // Author: themes-coder Team
    // Author URI: http://themes-coder.com/


    if (localStorage.languageCode == undefined) {
      localStorage.languageCode = "fr"; //default language code

      localStorage.languageDirection = "ltr"; //default language direction of app

      localStorage.currency = "&#36;"; //default currecny html code to show in app.
      // Please visit this link to get your html code  https://html-css-js.com/html/character-codes/currency/

      localStorage.currencyCode = "USD"; //default currency code

      localStorage.currencyPos = "left"; //default currency position

      localStorage.decimals = 2; //default currecny decimal
    }

    var ConfigService = /*#__PURE__*/function () {
      function ConfigService(http, storage, platform, applicationRef, events, httpNative) {
        var _this20 = this;

        _classCallCheck(this, ConfigService);

        this.http = http;
        this.storage = storage;
        this.platform = platform;
        this.applicationRef = applicationRef;
        this.events = events;
        this.httpNative = httpNative;
        this.url = 'https://dollarsbijoux.com';
        this.consumerKey = 'ck_3a5c590f46556e7d542b8ae25c1e1266d9bece06';
        this.consumerSecret = 'cs_b994779812af2a1694688e15f2b058ebb7c4eb0d';
        this.showIntroPage = 0; // show/hide intro page value 1 for show, 0 for hide

        this.appInProduction = true;
        this.productSlidesPerPage = 2.5;
        this.onesignalAppId = "ca42d43c-c6d9-43d7-b4fc-ab172647123f";
        this.onesignalSenderId = "MmY0YTM3YTgtYTZmOS00NTA5LWE2N2QtZDc1ZTc5MmJhZTM5";
        this.googleMapId = "AIzaSyCJ7D2-23Gk_uQ22v3LUJ8OiFBsVVMBcM0";
        this.admob = 0; // show/hide ads on android value 1 for show, 0 for hide

        this.admobBannerid = '';
        this.admobIntid = '';
        this.admobIos = 0; // show/hide ads on ios value 1 for show, 0 for hide

        this.admobBanneridIos = '';
        this.admobIntidIos = '';
        this.languageCode = localStorage.languageCode; //default language of app

        this.languageDirection = localStorage.languageDirection; //default direction of app

        this.appDirection = this.languageDirection; // application direction

        this.currency = localStorage.currency;
        this.productsArguments = "lang=" + localStorage.languageCode + "&currency=" + localStorage.currencyCode; //additional product arguments for query

        this.Woocommerce = WooCommerceAPI.WooCommerceAPI({
          url: this.url,
          consumerKey: this.consumerKey,
          consumerSecret: this.consumerSecret,
          wpAPI: true,
          queryStringAuth: true,
          version: 'wc/v3'
        });
        this.urlExt = this.url + "/wp-json/woo_app_connect/mobile/";
        this.langId = "1";
        this.loader = 'dots';
        this.newProductDuration = 20;
        this.cartButton = 1; //1 = show and 0 = hide

        this.currencyPos = localStorage.currencyPos;
        this.homePage = 1;
        this.categoryPage = 1;
        this.siteUrl = '';
        this.appName = '';
        this.packgeName = 1;
        this.introPage = 1;
        this.myOrdersPage = 1;
        this.newsPage = 1;
        this.wishListPage = 1;
        this.shippingAddressPage = 1;
        this.aboutUsPage = 1;
        this.contactUsPage = 1;
        this.editProfilePage = 1;
        this.settingPage = 1;
        this.rateApp = 1;
        this.shareApp = 1;
        this.fbButton = 1;
        this.googleButton = 1;
        this.notificationType = "";
        this.privacyPolicy = "";
        this.termServices = "";
        this.aboutUs = "";
        this.refundPolicy = "";
        this.filterMaxPrice = 1000;
        this.guestCheckOut = true;
        this.checkOutPage = 1;
        this.defaultIcons = false;
        this.orderCancelButton = false;
        this.addressPage = true;
        this.downloadPage = true;
        this.showVendorInfo = false; //for dokan plugin

        this.showWcVendorInfo = false;
        this.multiLanguage = false;
        this.multiCurrency = false;
        this.appSettings = {};
        this.enableGeoFencing = false;
        this.enableDeliveryTracking = false;
        this.enableWpPointReward = false;
        this.trackingUrl = "";
        this.currentSettings = 1;
        this.allSettings = {};
        this.httpAllDataArray = [];
        this.saveDefaultCurrency(); // console.log(this.Woocommerce._request("get", "products"));
        // console.log(this.Woocommerce._normalizeQueryString("products"));
        // console.log(this.Woocommerce._getUrl("products"));
        // console.log(this.Woocommerce._getOAuth());
        // console.log(this.Woocommerce._request("get", "products").path);
        // console.log(this.Woocommerce._request2("get", "products"));

        if (!this.appInProduction) {
          storage.get('httpAllDataArray').then(function (val) {
            if (val != null) _this20.httpAllDataArray = val;
          });
        }
      }

      _createClass(ConfigService, [{
        key: "getWithUrl",
        value: function getWithUrl(url) {
          return this.getDataHttp(url);
        }
      }, {
        key: "getWoo",
        value: function getWoo(url) {
          var request = this.getUrl("get", url).url;
          return this.getDataHttp(request);
        }
      }, {
        key: "getDataHttp",
        value: function getDataHttp(request) {
          var _this21 = this;

          var loadedData = this.loadAlreadyLoadedHttp(request);

          if (loadedData.found == false) {
            return new Promise(function (resolve) {
              if (_this21.platform.is('cordova')) {
                _this21.httpNative.get(request, {}, {}).then(function (data) {
                  var d = JSON.parse(data.data);

                  _this21.storeHttpData(request, d);

                  resolve(d); //console.log(data.status);
                  //console.log(data.data); // data received by server
                  //console.log(data.headers);
                }).catch(function (error) {
                  console.log(error.status);
                  console.log(error.error); // error message as string

                  console.log(error.headers);
                });
              } else {
                _this21.http.get(request).subscribe(function (data) {
                  var d = data;

                  _this21.storeHttpData(request, d);

                  resolve(d);
                }, function (err) {
                  console.log("Error : " + request);
                  console.log(err);
                });
              }
            });
          } else {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(loadedData.data);
              }, 200);
            });
          }
        }
      }, {
        key: "putAsync",
        value: function putAsync(url, dataToPost) {
          var _this22 = this;

          return new Promise(function (resolve) {
            var request = _this22.getUrl("put", url + "/"); //console.log(dataToPost);


            if (_this22.platform.is('cordova')) {
              _this22.httpNative.put(request.url, dataToPost, request.headers).then(function (data) {
                resolve(JSON.parse(data.data)); //console.log(data.status);
                //console.log(data.data); // data received by server
                //console.log(data.headers);
              }).catch(function (error) {
                console.log("------------------ error.status ---------------------");
                console.log(error.status);
                console.log("------------------ error.error ---------------------");
                console.log(error.error); // error message as string

                console.log("------------------ error.headers ---------------------");
                console.log(error.headers);
              });
            } else {
              _this22.http.put(request.url, dataToPost, request.headers).subscribe(function (data) {
                resolve(data);
              }, function (err) {
                console.log("Error : " + request.url);
                console.log(err);
              });
            }
          });
        }
      }, {
        key: "getUrl",
        value: function getUrl(type, endpoint) {
          var start = "&";
          if (type == "put") start = "?";

          var r = this.Woocommerce._request2(type, endpoint);

          var s = r.url + start;

          if (this.url.indexOf('https://') != -1) {
            s = s + "consumer_key=" + this.consumerKey;
            s = s + "&consumer_secret=" + this.consumerSecret;
          } else if (this.url.indexOf('http://') != -1) {
            s = s + "oauth_consumer_key=" + r.qs.oauth_consumer_key;
            s = s + "&oauth_nonce=" + r.qs.oauth_nonce;
            s = s + "&oauth_signature=" + r.qs.oauth_signature;
            s = s + "&oauth_signature_method=" + r.qs.oauth_signature_method;
            s = s + "&oauth_timestamp=" + r.qs.oauth_timestamp;
            s = s + "&oauth_version=" + r.qs.oauth_version;
          }

          return {
            url: s,
            headers: r.headers
          };
        }
      }, {
        key: "loadAlreadyLoadedHttp",
        value: function loadAlreadyLoadedHttp(url) {
          var found = false;
          var data = {};

          if (!this.appInProduction) {
            var path = url;
            if (url.indexOf('oauth_consumer_key=') != -1) path = url.split("oauth_consumer_key")[0];else if (url.indexOf('consumer_key=') != -1) path = url.split("consumer_key")[0];
            this.httpAllDataArray.forEach(function (element) {
              if (element.url == path) {
                found = true;
                data = element.data; // console.log("------------ url match -------------");
                // console.log(element);
              }
            });

            if (found == false) {// console.log("------------ url not match -------------");
              // console.log(path);
            }
          }

          return {
            found: found,
            data: data
          };
        }
      }, {
        key: "storeHttpData",
        value: function storeHttpData(url, data) {
          if (!this.appInProduction) {
            //======================  for debuging =====================
            var path = url;
            if (url.indexOf('oauth_consumer_key=') != -1) path = url.split("oauth_consumer_key")[0];else if (url.indexOf('consumer_key=') != -1) path = url.split("consumer_key")[0];
            if (path.indexOf('orders/?') != -1) return;
            this.httpAllDataArray.push({
              url: path,
              data: data
            });
            this.storage.set('httpAllDataArray', this.httpAllDataArray);
            console.log(this.httpAllDataArray);
          }
        }
      }, {
        key: "siteSetting",
        value: function siteSetting() {
          var _this23 = this;

          return new Promise(function (resolve) {
            _this23.storage.get('appSettings').then(function (val) {
              if (val == null) {
                _this23.http.get(_this23.url + '/api/appsettings/get_all_settings/?insecure=cool').subscribe(function (data) {
                  _this23.appSettings = data;

                  _this23.storage.set("appSettings", _this23.appSettings);

                  _this23.defaultSettings();

                  _this23.events.publish('settingsLoaded');

                  resolve();
                });
              } else {
                _this23.appSettings = val;

                _this23.defaultSettings();

                _this23.events.publish('settingsLoaded');

                resolve();
              }
            });
          });
        }
      }, {
        key: "defaultSettings",
        value: function defaultSettings() {
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
          this.settingPage = parseInt(this.appSettings.setting_page); //this.currency = this.appSettings.currency_symbol;

          this.cartButton = parseInt(this.appSettings.cart_button);
          this.footerShowHide = parseInt(this.appSettings.footer_button);
          this.addressPage = this.appSettings.bill_ship_info == "1" ? true : false;
          this.downloadPage = this.appSettings.downloads == "1" ? true : false;
          this.multiLanguage = this.appSettings.wpml_enabled == "1" ? true : false;
          this.multiCurrency = this.appSettings.wp_multi_currency == "1" ? true : false;
          this.showVendorInfo = this.appSettings.mvf_enabled == "1" ? true : false;
          this.showWcVendorInfo = this.appSettings.mvf_enabled == "2" ? true : false;
          this.enableGeoFencing = this.appSettings.geo_fencing == "1" ? true : false;
          this.enableDeliveryTracking = this.appSettings.delivery_tracking == "1" ? true : false;
          this.enableWpPointReward = this.appSettings.wp_point_reward == "1" ? true : false;
          this.rateApp = parseInt(this.appSettings.rate_app);
          this.shareApp = parseInt(this.appSettings.share_app);
          this.defaultIcons = this.appSettings.sidebar_menu_icon == "1" ? false : true;
          this.currentSettings = this.appSettings.update_order;
          this.events.publish("openDeepLink"); //this.initializeGeoFence();
        }
      }, {
        key: "checkingNewSettingsFromServer",
        value: function checkingNewSettingsFromServer() {
          var _this24 = this;

          this.http.get(this.url + '/api/appsettings/get_all_settings/?insecure=cool').subscribe(function (data) {
            var settings = data;
            _this24.address = settings.address + ', ' + settings.city + ', ' + settings.state + ' ' + settings.zip + ', ' + settings.country;
            _this24.email = settings.contact_us_email;
            _this24.latitude = settings.latitude;
            _this24.longitude = settings.longitude;
            _this24.phoneNo = settings.phone_no;
            _this24.newProductDuration = settings.new_product_duration;
            _this24.notifText = settings.notification_text;
            _this24.notifTitle = settings.notification_title;
            _this24.notifDuration = settings.notification_duration;
            _this24.packgeName = _this24.appSettings.package_name;
            _this24.appName = settings.app_name;
            _this24.fbButton = parseInt(settings.facebook_login);
            _this24.siteUrl = _this24.appSettings.site_url;
            _this24.filterMaxPrice = parseInt(settings.filter_max_price);
            _this24.guestCheckOut = settings.checkout_process == "yes" ? true : false;
            _this24.checkOutPage = parseInt(settings.one_page_checkout); //this.checkOutPage = 2;

            _this24.orderCancelButton = settings.cancel_order_button == "1" ? true : false;
            _this24.cancelOrderTime = parseInt(settings.cancel_order_hours);
            _this24.trackingUrl = settings.tracking_url;

            _this24.applicationRef.tick();

            _this24.reloadingWithNewSettings(settings);
          });
        }
      }, {
        key: "reloadingWithNewSettings",
        value: function reloadingWithNewSettings(data) {
          //console.log(this.currentSettings + " setting cahnge " + data.update_order);
          if (this.currentSettings != data.update_order) {
            if (data.wp_multi_currency == "0") this.restoreDefaultCurrency();
            this.storage.set("appSettings", data);
          }
        }
      }, {
        key: "saveDefaultCurrency",
        value: function saveDefaultCurrency() {
          if (localStorage.appStartFirstTime == undefined) {
            localStorage.currencyDefault = localStorage.currency; //default currecny symbol to show in app

            localStorage.currencyCodeDefault = localStorage.currencyCode; //default currency code

            localStorage.currencyPosDefault = localStorage.currencyPos; //default currency position

            localStorage.decimalsDefault = localStorage.decimals; //default currecny decimal

            localStorage.appStartFirstTime = "started";
          }
        }
      }, {
        key: "restoreDefaultCurrency",
        value: function restoreDefaultCurrency() {
          if (localStorage.appStartFirstTime == "started") {
            localStorage.currency = localStorage.currencyDefault; //default currecny symbol to show in app

            localStorage.currencyCode = localStorage.currencyCodeDefault; //default currency code

            localStorage.currencyPos = localStorage.currencyPosDefault; //default currency position

            localStorage.decimals = localStorage.decimalsDefault; //default currecny decimal
          }
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }];
    };

    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]])], ConfigService);
    /***/
  },

  /***/
  "./src/providers/loading/loading.service.ts":
  /*!**************************************************!*\
    !*** ./src/providers/loading/loading.service.ts ***!
    \**************************************************/

  /*! exports provided: LoadingService */

  /***/
  function srcProvidersLoadingLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
      return LoadingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var LoadingService = /*#__PURE__*/function () {
      function LoadingService(loadingCtrl) {
        _classCallCheck(this, LoadingService);

        this.loadingCtrl = loadingCtrl;
      }

      _createClass(LoadingService, [{
        key: "show",
        value: function show() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadingCtrl.create({
                      duration: 20000
                    });

                  case 2:
                    this.loading = _context11.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "hide",
        value: function hide() {
          try {
            this.loading.dismiss();
          } catch (error) {}
        }
      }, {
        key: "autoHide",
        value: function autoHide(time) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadingCtrl.create({
                      duration: time
                    });

                  case 2:
                    this.loading = _context12.sent;
                    this.loading.present();

                  case 4:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }]);

      return LoadingService;
    }();

    LoadingService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], LoadingService);
    /***/
  },

  /***/
  "./src/providers/location-data/location-data.service.ts":
  /*!**************************************************************!*\
    !*** ./src/providers/location-data/location-data.service.ts ***!
    \**************************************************************/

  /*! exports provided: LocationDataService */

  /***/
  function srcProvidersLocationDataLocationDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationDataService", function () {
      return LocationDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocationDataService = /*#__PURE__*/function () {
      function LocationDataService() {
        _classCallCheck(this, LocationDataService);

        this.data = {
          "countries": [{
            "value": "AF",
            "name": "Afghanistan"
          }, {
            "value": "AL",
            "name": "Albania"
          }, {
            "value": "DZ",
            "name": "Algeria"
          }, {
            "value": "AS",
            "name": "American Samoa"
          }, {
            "value": "AD",
            "name": "Andorra"
          }, {
            "value": "AO",
            "name": "Angola"
          }, {
            "value": "AI",
            "name": "Anguilla"
          }, {
            "value": "AQ",
            "name": "Antarctica"
          }, {
            "value": "AG",
            "name": "Antigua and Barbuda"
          }, {
            "value": "AR",
            "name": "Argentina"
          }, {
            "value": "AM",
            "name": "Armenia"
          }, {
            "value": "AW",
            "name": "Aruba"
          }, {
            "value": "AU",
            "name": "Australia"
          }, {
            "value": "AT",
            "name": "Austria"
          }, {
            "value": "AZ",
            "name": "Azerbaijan"
          }, {
            "value": "BS",
            "name": "Bahamas"
          }, {
            "value": "BH",
            "name": "Bahrain"
          }, {
            "value": "BD",
            "name": "Bangladesh"
          }, {
            "value": "BB",
            "name": "Barbados"
          }, {
            "value": "BY",
            "name": "Belarus"
          }, {
            "value": "PW",
            "name": "Belau"
          }, {
            "value": "BE",
            "name": "Belgium"
          }, {
            "value": "BZ",
            "name": "Belize"
          }, {
            "value": "BJ",
            "name": "Benin"
          }, {
            "value": "BM",
            "name": "Bermuda"
          }, {
            "value": "BT",
            "name": "Bhutan"
          }, {
            "value": "BO",
            "name": "Bolivia"
          }, {
            "value": "BQ",
            "name": "Bonaire, Saint Eustatius and Saba"
          }, {
            "value": "BA",
            "name": "Bosnia and Herzegovina"
          }, {
            "value": "BW",
            "name": "Botswana"
          }, {
            "value": "BV",
            "name": "Bouvet Island"
          }, {
            "value": "BR",
            "name": "Brazil"
          }, {
            "value": "IO",
            "name": "British Indian Ocean Territory"
          }, {
            "value": "VG",
            "name": "British Virgin Islands"
          }, {
            "value": "BN",
            "name": "Brunei"
          }, {
            "value": "BG",
            "name": "Bulgaria"
          }, {
            "value": "BF",
            "name": "Burkina Faso"
          }, {
            "value": "BI",
            "name": "Burundi"
          }, {
            "value": "KH",
            "name": "Cambodia"
          }, {
            "value": "CM",
            "name": "Cameroon"
          }, {
            "value": "CA",
            "name": "Canada"
          }, {
            "value": "CV",
            "name": "Cape Verde"
          }, {
            "value": "KY",
            "name": "Cayman Islands"
          }, {
            "value": "CF",
            "name": "Central African Republic"
          }, {
            "value": "TD",
            "name": "Chad"
          }, {
            "value": "CL",
            "name": "Chile"
          }, {
            "value": "CN",
            "name": "China"
          }, {
            "value": "CX",
            "name": "Christmas Island"
          }, {
            "value": "CC",
            "name": "Cocos (Keeling) Islands"
          }, {
            "value": "CO",
            "name": "Colombia"
          }, {
            "value": "KM",
            "name": "Comoros"
          }, {
            "value": "CG",
            "name": "Congo (Brazzaville)"
          }, {
            "value": "CD",
            "name": "Congo (Kinshasa)"
          }, {
            "value": "CK",
            "name": "Cook Islands"
          }, {
            "value": "CR",
            "name": "Costa Rica"
          }, {
            "value": "HR",
            "name": "Croatia"
          }, {
            "value": "CU",
            "name": "Cuba"
          }, {
            "value": "CW",
            "name": "Cura&ccedil;ao"
          }, {
            "value": "CY",
            "name": "Cyprus"
          }, {
            "value": "CZ",
            "name": "Czech Republic"
          }, {
            "value": "DK",
            "name": "Denmark"
          }, {
            "value": "DJ",
            "name": "Djibouti"
          }, {
            "value": "DM",
            "name": "Dominica"
          }, {
            "value": "DO",
            "name": "Dominican Republic"
          }, {
            "value": "EC",
            "name": "Ecuador"
          }, {
            "value": "EG",
            "name": "Egypt"
          }, {
            "value": "SV",
            "name": "El Salvador"
          }, {
            "value": "GQ",
            "name": "Equatorial Guinea"
          }, {
            "value": "ER",
            "name": "Eritrea"
          }, {
            "value": "EE",
            "name": "Estonia"
          }, {
            "value": "ET",
            "name": "Ethiopia"
          }, {
            "value": "FK",
            "name": "Falkland Islands"
          }, {
            "value": "FO",
            "name": "Faroe Islands"
          }, {
            "value": "FJ",
            "name": "Fiji"
          }, {
            "value": "FI",
            "name": "Finland"
          }, {
            "value": "FR",
            "name": "France"
          }, {
            "value": "GF",
            "name": "French Guiana"
          }, {
            "value": "PF",
            "name": "French Polynesia"
          }, {
            "value": "TF",
            "name": "French Southern Territories"
          }, {
            "value": "GA",
            "name": "Gabon"
          }, {
            "value": "GM",
            "name": "Gambia"
          }, {
            "value": "GE",
            "name": "Georgia"
          }, {
            "value": "DE",
            "name": "Germany"
          }, {
            "value": "GH",
            "name": "Ghana"
          }, {
            "value": "GI",
            "name": "Gibraltar"
          }, {
            "value": "GR",
            "name": "Greece"
          }, {
            "value": "GL",
            "name": "Greenland"
          }, {
            "value": "GD",
            "name": "Grenada"
          }, {
            "value": "GP",
            "name": "Guadeloupe"
          }, {
            "value": "GU",
            "name": "Guam"
          }, {
            "value": "GT",
            "name": "Guatemala"
          }, {
            "value": "GG",
            "name": "Guernsey"
          }, {
            "value": "GN",
            "name": "Guinea"
          }, {
            "value": "GW",
            "name": "Guinea-Bissau"
          }, {
            "value": "GY",
            "name": "Guyana"
          }, {
            "value": "HT",
            "name": "Haiti"
          }, {
            "value": "HM",
            "name": "Heard Island and McDonald Islands"
          }, {
            "value": "HN",
            "name": "Honduras"
          }, {
            "value": "HK",
            "name": "Hong Kong"
          }, {
            "value": "HU",
            "name": "Hungary"
          }, {
            "value": "IS",
            "name": "Iceland"
          }, {
            "value": "IN",
            "name": "India"
          }, {
            "value": "ID",
            "name": "Indonesia"
          }, {
            "value": "IR",
            "name": "Iran"
          }, {
            "value": "IQ",
            "name": "Iraq"
          }, {
            "value": "IE",
            "name": "Ireland"
          }, {
            "value": "IM",
            "name": "Isle of Man"
          }, {
            "value": "IL",
            "name": "Israel"
          }, {
            "value": "IT",
            "name": "Italy"
          }, {
            "value": "CI",
            "name": "Ivory Coast"
          }, {
            "value": "JM",
            "name": "Jamaica"
          }, {
            "value": "JP",
            "name": "Japan"
          }, {
            "value": "JE",
            "name": "Jersey"
          }, {
            "value": "JO",
            "name": "Jordan"
          }, {
            "value": "KZ",
            "name": "Kazakhstan"
          }, {
            "value": "KE",
            "name": "Kenya"
          }, {
            "value": "KI",
            "name": "Kiribati"
          }, {
            "value": "KW",
            "name": "Kuwait"
          }, {
            "value": "KG",
            "name": "Kyrgyzstan"
          }, {
            "value": "LA",
            "name": "Laos"
          }, {
            "value": "LV",
            "name": "Latvia"
          }, {
            "value": "LB",
            "name": "Lebanon"
          }, {
            "value": "LS",
            "name": "Lesotho"
          }, {
            "value": "LR",
            "name": "Liberia"
          }, {
            "value": "LY",
            "name": "Libya"
          }, {
            "value": "LI",
            "name": "Liechtenstein"
          }, {
            "value": "LT",
            "name": "Lithuania"
          }, {
            "value": "LU",
            "name": "Luxembourg"
          }, {
            "value": "MO",
            "name": "Macao S.A.R., China"
          }, {
            "value": "MK",
            "name": "Macedonia"
          }, {
            "value": "MG",
            "name": "Madagascar"
          }, {
            "value": "MW",
            "name": "Malawi"
          }, {
            "value": "MY",
            "name": "Malaysia"
          }, {
            "value": "MV",
            "name": "Maldives"
          }, {
            "value": "ML",
            "name": "Mali"
          }, {
            "value": "MT",
            "name": "Malta"
          }, {
            "value": "MH",
            "name": "Marshall Islands"
          }, {
            "value": "MQ",
            "name": "Martinique"
          }, {
            "value": "MR",
            "name": "Mauritania"
          }, {
            "value": "MU",
            "name": "Mauritius"
          }, {
            "value": "YT",
            "name": "Mayotte"
          }, {
            "value": "MX",
            "name": "Mexico"
          }, {
            "value": "FM",
            "name": "Micronesia"
          }, {
            "value": "MD",
            "name": "Moldova"
          }, {
            "value": "MC",
            "name": "Monaco"
          }, {
            "value": "MN",
            "name": "Mongolia"
          }, {
            "value": "ME",
            "name": "Montenegro"
          }, {
            "value": "MS",
            "name": "Montserrat"
          }, {
            "value": "MA",
            "name": "Morocco"
          }, {
            "value": "MZ",
            "name": "Mozambique"
          }, {
            "value": "MM",
            "name": "Myanmar"
          }, {
            "value": "NA",
            "name": "Namibia"
          }, {
            "value": "NR",
            "name": "Nauru"
          }, {
            "value": "NP",
            "name": "Nepal"
          }, {
            "value": "NL",
            "name": "Netherlands"
          }, {
            "value": "NC",
            "name": "New Caledonia"
          }, {
            "value": "NZ",
            "name": "New Zealand"
          }, {
            "value": "NI",
            "name": "Nicaragua"
          }, {
            "value": "NE",
            "name": "Niger"
          }, {
            "value": "NG",
            "name": "Nigeria"
          }, {
            "value": "NU",
            "name": "Niue"
          }, {
            "value": "NF",
            "name": "Norfolk Island"
          }, {
            "value": "KP",
            "name": "North Korea"
          }, {
            "value": "MP",
            "name": "Northern Mariana Islands"
          }, {
            "value": "NO",
            "name": "Norway"
          }, {
            "value": "OM",
            "name": "Oman"
          }, {
            "value": "PK",
            "name": "Pakistan"
          }, {
            "value": "PS",
            "name": "Palestinian Territory"
          }, {
            "value": "PA",
            "name": "Panama"
          }, {
            "value": "PG",
            "name": "Papua New Guinea"
          }, {
            "value": "PY",
            "name": "Paraguay"
          }, {
            "value": "PE",
            "name": "Peru"
          }, {
            "value": "PH",
            "name": "Philippines"
          }, {
            "value": "PN",
            "name": "Pitcairn"
          }, {
            "value": "PL",
            "name": "Poland"
          }, {
            "value": "PT",
            "name": "Portugal"
          }, {
            "value": "PR",
            "name": "Puerto Rico"
          }, {
            "value": "QA",
            "name": "Qatar"
          }, {
            "value": "RE",
            "name": "Reunion"
          }, {
            "value": "RO",
            "name": "Romania"
          }, {
            "value": "RU",
            "name": "Russia"
          }, {
            "value": "RW",
            "name": "Rwanda"
          }, {
            "value": "ST",
            "name": "S&atilde;o Tom&eacute; and Pr&iacute;ncipe"
          }, {
            "value": "BL",
            "name": "Saint Barth&eacute;lemy"
          }, {
            "value": "SH",
            "name": "Saint Helena"
          }, {
            "value": "KN",
            "name": "Saint Kitts and Nevis"
          }, {
            "value": "LC",
            "name": "Saint Lucia"
          }, {
            "value": "SX",
            "name": "Saint Martin (Dutch part)"
          }, {
            "value": "MF",
            "name": "Saint Martin (French part)"
          }, {
            "value": "PM",
            "name": "Saint Pierre and Miquelon"
          }, {
            "value": "VC",
            "name": "Saint Vincent and the Grenadines"
          }, {
            "value": "WS",
            "name": "Samoa"
          }, {
            "value": "SM",
            "name": "San Marino"
          }, {
            "value": "SA",
            "name": "Saudi Arabia"
          }, {
            "value": "SN",
            "name": "Senegal"
          }, {
            "value": "RS",
            "name": "Serbia"
          }, {
            "value": "SC",
            "name": "Seychelles"
          }, {
            "value": "SL",
            "name": "Sierra Leone"
          }, {
            "value": "SG",
            "name": "Singapore"
          }, {
            "value": "SK",
            "name": "Slovakia"
          }, {
            "value": "SI",
            "name": "Slovenia"
          }, {
            "value": "SB",
            "name": "Solomon Islands"
          }, {
            "value": "SO",
            "name": "Somalia"
          }, {
            "value": "ZA",
            "name": "South Africa"
          }, {
            "value": "GS",
            "name": "South Georgia/Sandwich Islands"
          }, {
            "value": "KR",
            "name": "South Korea"
          }, {
            "value": "SS",
            "name": "South Sudan"
          }, {
            "value": "ES",
            "name": "Spain"
          }, {
            "value": "LK",
            "name": "Sri Lanka"
          }, {
            "value": "SD",
            "name": "Sudan"
          }, {
            "value": "SR",
            "name": "Suriname"
          }, {
            "value": "SJ",
            "name": "Svalbard and Jan Mayen"
          }, {
            "value": "SZ",
            "name": "Swaziland"
          }, {
            "value": "SE",
            "name": "Sweden"
          }, {
            "value": "CH",
            "name": "Switzerland"
          }, {
            "value": "SY",
            "name": "Syria"
          }, {
            "value": "TW",
            "name": "Taiwan"
          }, {
            "value": "TJ",
            "name": "Tajikistan"
          }, {
            "value": "TZ",
            "name": "Tanzania"
          }, {
            "value": "TH",
            "name": "Thailand"
          }, {
            "value": "TL",
            "name": "Timor-Leste"
          }, {
            "value": "TG",
            "name": "Togo"
          }, {
            "value": "TK",
            "name": "Tokelau"
          }, {
            "value": "TO",
            "name": "Tonga"
          }, {
            "value": "TT",
            "name": "Trinidad and Tobago"
          }, {
            "value": "TN",
            "name": "Tunisia"
          }, {
            "value": "TR",
            "name": "Turkey"
          }, {
            "value": "TM",
            "name": "Turkmenistan"
          }, {
            "value": "TC",
            "name": "Turks and Caicos Islands"
          }, {
            "value": "TV",
            "name": "Tuvalu"
          }, {
            "value": "UG",
            "name": "Uganda"
          }, {
            "value": "UA",
            "name": "Ukraine"
          }, {
            "value": "AE",
            "name": "United Arab Emirates"
          }, {
            "value": "GB",
            "name": "United Kingdom (UK)"
          }, {
            "value": "US",
            "name": "United States (US)"
          }, {
            "value": "UM",
            "name": "United States (US) Minor Outlying Islands"
          }, {
            "value": "VI",
            "name": "United States (US) Virgin Islands"
          }, {
            "value": "UY",
            "name": "Uruguay"
          }, {
            "value": "UZ",
            "name": "Uzbekistan"
          }, {
            "value": "VU",
            "name": "Vanuatu"
          }, {
            "value": "VA",
            "name": "Vatican"
          }, {
            "value": "VE",
            "name": "Venezuela"
          }, {
            "value": "VN",
            "name": "Vietnam"
          }, {
            "value": "WF",
            "name": "Wallis and Futuna"
          }, {
            "value": "EH",
            "name": "Western Sahara"
          }, {
            "value": "YE",
            "name": "Yemen"
          }, {
            "value": "ZM",
            "name": "Zambia"
          }, {
            "value": "ZW",
            "name": "Zimbabwe"
          }],
          "states": {
            "AR": [{
              "value": "C",
              "name": "Ciudad Aut&oacute;noma de Buenos Aires"
            }, {
              "value": "B",
              "name": "Buenos Aires"
            }, {
              "value": "K",
              "name": "Catamarca"
            }, {
              "value": "H",
              "name": "Chaco"
            }, {
              "value": "U",
              "name": "Chubut"
            }, {
              "value": "X",
              "name": "C&oacute;rdoba"
            }, {
              "value": "W",
              "name": "Corrientes"
            }, {
              "value": "E",
              "name": "Entre R&iacute;os"
            }, {
              "value": "P",
              "name": "Formosa"
            }, {
              "value": "Y",
              "name": "Jujuy"
            }, {
              "value": "L",
              "name": "La Pampa"
            }, {
              "value": "F",
              "name": "La Rioja"
            }, {
              "value": "M",
              "name": "Mendoza"
            }, {
              "value": "N",
              "name": "Misiones"
            }, {
              "value": "Q",
              "name": "Neuqu&eacute;n"
            }, {
              "value": "R",
              "name": "R&iacute;o Negro"
            }, {
              "value": "A",
              "name": "Salta"
            }, {
              "value": "J",
              "name": "San Juan"
            }, {
              "value": "D",
              "name": "San Luis"
            }, {
              "value": "Z",
              "name": "Santa Cruz"
            }, {
              "value": "S",
              "name": "Santa Fe"
            }, {
              "value": "G",
              "name": "Santiago del Estero"
            }, {
              "value": "V",
              "name": "Tierra del Fuego"
            }, {
              "value": "T",
              "name": "Tucum&aacute;n"
            }],
            "AU": [{
              "value": "ACT",
              "name": "Australian Capital Territory"
            }, {
              "value": "NSW",
              "name": "New South Wales"
            }, {
              "value": "NT",
              "name": "Northern Territory"
            }, {
              "value": "QLD",
              "name": "Queensland"
            }, {
              "value": "SA",
              "name": "South Australia"
            }, {
              "value": "TAS",
              "name": "Tasmania"
            }, {
              "value": "VIC",
              "name": "Victoria"
            }, {
              "value": "WA",
              "name": "Western Australia"
            }],
            "BD": [{
              "value": "BAG",
              "name": "Bagerhat"
            }, {
              "value": "BAN",
              "name": "Bandarban"
            }, {
              "value": "BAR",
              "name": "Barguna"
            }, {
              "value": "BARI",
              "name": "Barisal"
            }, {
              "value": "BHO",
              "name": "Bhola"
            }, {
              "value": "BOG",
              "name": "Bogra"
            }, {
              "value": "BRA",
              "name": "Brahmanbaria"
            }, {
              "value": "CHA",
              "name": "Chandpur"
            }, {
              "value": "CHI",
              "name": "Chittagong"
            }, {
              "value": "CHU",
              "name": "Chuadanga"
            }, {
              "value": "COM",
              "name": "Comilla"
            }, {
              "value": "COX",
              "name": "Cox's Bazar"
            }, {
              "value": "DHA",
              "name": "Dhaka"
            }, {
              "value": "DIN",
              "name": "Dinajpur"
            }, {
              "value": "FAR",
              "name": "Faridpur "
            }, {
              "value": "FEN",
              "name": "Feni"
            }, {
              "value": "GAI",
              "name": "Gaibandha"
            }, {
              "value": "GAZI",
              "name": "Gazipur"
            }, {
              "value": "GOP",
              "name": "Gopalganj"
            }, {
              "value": "HAB",
              "name": "Habiganj"
            }, {
              "value": "JAM",
              "name": "Jamalpur"
            }, {
              "value": "JES",
              "name": "Jessore"
            }, {
              "value": "JHA",
              "name": "Jhalokati"
            }, {
              "value": "JHE",
              "name": "Jhenaidah"
            }, {
              "value": "JOY",
              "name": "Joypurhat"
            }, {
              "value": "KHA",
              "name": "Khagrachhari"
            }, {
              "value": "KHU",
              "name": "Khulna"
            }, {
              "value": "KIS",
              "name": "Kishoreganj"
            }, {
              "value": "KUR",
              "name": "Kurigram"
            }, {
              "value": "KUS",
              "name": "Kushtia"
            }, {
              "value": "LAK",
              "name": "Lakshmipur"
            }, {
              "value": "LAL",
              "name": "Lalmonirhat"
            }, {
              "value": "MAD",
              "name": "Madaripur"
            }, {
              "value": "MAG",
              "name": "Magura"
            }, {
              "value": "MAN",
              "name": "Manikganj "
            }, {
              "value": "MEH",
              "name": "Meherpur"
            }, {
              "value": "MOU",
              "name": "Moulvibazar"
            }, {
              "value": "MUN",
              "name": "Munshiganj"
            }, {
              "value": "MYM",
              "name": "Mymensingh"
            }, {
              "value": "NAO",
              "name": "Naogaon"
            }, {
              "value": "NAR",
              "name": "Narail"
            }, {
              "value": "NARG",
              "name": "Narayanganj"
            }, {
              "value": "NARD",
              "name": "Narsingdi"
            }, {
              "value": "NAT",
              "name": "Natore"
            }, {
              "value": "NAW",
              "name": "Nawabganj"
            }, {
              "value": "NET",
              "name": "Netrakona"
            }, {
              "value": "NIL",
              "name": "Nilphamari"
            }, {
              "value": "NOA",
              "name": "Noakhali"
            }, {
              "value": "PAB",
              "name": "Pabna"
            }, {
              "value": "PAN",
              "name": "Panchagarh"
            }, {
              "value": "PAT",
              "name": "Patuakhali"
            }, {
              "value": "PIR",
              "name": "Pirojpur"
            }, {
              "value": "RAJB",
              "name": "Rajbari"
            }, {
              "value": "RAJ",
              "name": "Rajshahi"
            }, {
              "value": "RAN",
              "name": "Rangamati"
            }, {
              "value": "RANP",
              "name": "Rangpur"
            }, {
              "value": "SAT",
              "name": "Satkhira"
            }, {
              "value": "SHA",
              "name": "Shariatpur"
            }, {
              "value": "SHE",
              "name": "Sherpur"
            }, {
              "value": "SIR",
              "name": "Sirajganj"
            }, {
              "value": "SUN",
              "name": "Sunamganj"
            }, {
              "value": "SYL",
              "name": "Sylhet"
            }, {
              "value": "TAN",
              "name": "Tangail"
            }, {
              "value": "THA",
              "name": "Thakurgaon"
            }],
            "BO": [{
              "value": "B",
              "name": "Chuquisaca"
            }, {
              "value": "H",
              "name": "Beni"
            }, {
              "value": "C",
              "name": "Cochabamba"
            }, {
              "value": "L",
              "name": "La Paz"
            }, {
              "value": "O",
              "name": "Oruro"
            }, {
              "value": "N",
              "name": "Pando"
            }, {
              "value": "P",
              "name": "Potosí"
            }, {
              "value": "S",
              "name": "Santa Cruz"
            }, {
              "value": "T",
              "name": "Tarija"
            }],
            "BR": [{
              "value": "AC",
              "name": "Acre"
            }, {
              "value": "AL",
              "name": "Alagoas"
            }, {
              "value": "AP",
              "name": "Amap&aacute;"
            }, {
              "value": "AM",
              "name": "Amazonas"
            }, {
              "value": "BA",
              "name": "Bahia"
            }, {
              "value": "CE",
              "name": "Cear&aacute;"
            }, {
              "value": "DF",
              "name": "Distrito Federal"
            }, {
              "value": "ES",
              "name": "Esp&iacute;rito Santo"
            }, {
              "value": "GO",
              "name": "Goi&aacute;s"
            }, {
              "value": "MA",
              "name": "Maranh&atilde;o"
            }, {
              "value": "MT",
              "name": "Mato Grosso"
            }, {
              "value": "MS",
              "name": "Mato Grosso do Sul"
            }, {
              "value": "MG",
              "name": "Minas Gerais"
            }, {
              "value": "PA",
              "name": "Par&aacute;"
            }, {
              "value": "PB",
              "name": "Para&iacute;ba"
            }, {
              "value": "PR",
              "name": "Paran&aacute;"
            }, {
              "value": "PE",
              "name": "Pernambuco"
            }, {
              "value": "PI",
              "name": "Piau&iacute;"
            }, {
              "value": "RJ",
              "name": "Rio de Janeiro"
            }, {
              "value": "RN",
              "name": "Rio Grande do Norte"
            }, {
              "value": "RS",
              "name": "Rio Grande do Sul"
            }, {
              "value": "RO",
              "name": "Rond&ocirc;nia"
            }, {
              "value": "RR",
              "name": "Roraima"
            }, {
              "value": "SC",
              "name": "Santa Catarina"
            }, {
              "value": "SP",
              "name": "S&atilde;o Paulo"
            }, {
              "value": "SE",
              "name": "Sergipe"
            }, {
              "value": "TO",
              "name": "Tocantins"
            }],
            "BG": [{
              "value": "BG-01",
              "name": "Blagoevgrad"
            }, {
              "value": "BG-02",
              "name": "Burgas"
            }, {
              "value": "BG-08",
              "name": "Dobrich"
            }, {
              "value": "BG-07",
              "name": "Gabrovo"
            }, {
              "value": "BG-26",
              "name": "Haskovo"
            }, {
              "value": "BG-09",
              "name": "Kardzhali"
            }, {
              "value": "BG-10",
              "name": "Kyustendil"
            }, {
              "value": "BG-11",
              "name": "Lovech"
            }, {
              "value": "BG-12",
              "name": "Montana"
            }, {
              "value": "BG-13",
              "name": "Pazardzhik"
            }, {
              "value": "BG-14",
              "name": "Pernik"
            }, {
              "value": "BG-15",
              "name": "Pleven"
            }, {
              "value": "BG-16",
              "name": "Plovdiv"
            }, {
              "value": "BG-17",
              "name": "Razgrad"
            }, {
              "value": "BG-18",
              "name": "Ruse"
            }, {
              "value": "BG-27",
              "name": "Shumen"
            }, {
              "value": "BG-19",
              "name": "Silistra"
            }, {
              "value": "BG-20",
              "name": "Sliven"
            }, {
              "value": "BG-21",
              "name": "Smolyan"
            }, {
              "value": "BG-23",
              "name": "Sofia"
            }, {
              "value": "BG-22",
              "name": "Sofia-Grad"
            }, {
              "value": "BG-24",
              "name": "Stara Zagora"
            }, {
              "value": "BG-25",
              "name": "Targovishte"
            }, {
              "value": "BG-03",
              "name": "Varna"
            }, {
              "value": "BG-04",
              "name": "Veliko Tarnovo"
            }, {
              "value": "BG-05",
              "name": "Vidin"
            }, {
              "value": "BG-06",
              "name": "Vratsa"
            }, {
              "value": "BG-28",
              "name": "Yambol"
            }],
            "CA": [{
              "value": "AB",
              "name": "Alberta"
            }, {
              "value": "BC",
              "name": "British Columbia"
            }, {
              "value": "MB",
              "name": "Manitoba"
            }, {
              "value": "NB",
              "name": "New Brunswick"
            }, {
              "value": "NL",
              "name": "Newfoundland and Labrador"
            }, {
              "value": "NT",
              "name": "Northwest Territories"
            }, {
              "value": "NS",
              "name": "Nova Scotia"
            }, {
              "value": "NU",
              "name": "Nunavut"
            }, {
              "value": "ON",
              "name": "Ontario"
            }, {
              "value": "PE",
              "name": "Prince Edward Island"
            }, {
              "value": "QC",
              "name": "Quebec"
            }, {
              "value": "SK",
              "name": "Saskatchewan"
            }, {
              "value": "YT",
              "name": "Yukon Territory"
            }],
            "CN": [{
              "value": "CN1",
              "name": "Yunnan / &#20113;&#21335;"
            }, {
              "value": "CN2",
              "name": "Beijing / &#21271;&#20140;"
            }, {
              "value": "CN3",
              "name": "Tianjin / &#22825;&#27941;"
            }, {
              "value": "CN4",
              "name": "Hebei / &#27827;&#21271;"
            }, {
              "value": "CN5",
              "name": "Shanxi / &#23665;&#35199;"
            }, {
              "value": "CN6",
              "name": "Inner Mongolia / &#20839;&#33945;&#21476;"
            }, {
              "value": "CN7",
              "name": "Liaoning / &#36797;&#23425;"
            }, {
              "value": "CN8",
              "name": "Jilin / &#21513;&#26519;"
            }, {
              "value": "CN9",
              "name": "Heilongjiang / &#40657;&#40857;&#27743;"
            }, {
              "value": "CN10",
              "name": "Shanghai / &#19978;&#28023;"
            }, {
              "value": "CN11",
              "name": "Jiangsu / &#27743;&#33487;"
            }, {
              "value": "CN12",
              "name": "Zhejiang / &#27993;&#27743;"
            }, {
              "value": "CN13",
              "name": "Anhui / &#23433;&#24509;"
            }, {
              "value": "CN14",
              "name": "Fujian / &#31119;&#24314;"
            }, {
              "value": "CN15",
              "name": "Jiangxi / &#27743;&#35199;"
            }, {
              "value": "CN16",
              "name": "Shandong / &#23665;&#19996;"
            }, {
              "value": "CN17",
              "name": "Henan / &#27827;&#21335;"
            }, {
              "value": "CN18",
              "name": "Hubei / &#28246;&#21271;"
            }, {
              "value": "CN19",
              "name": "Hunan / &#28246;&#21335;"
            }, {
              "value": "CN20",
              "name": "Guangdong / &#24191;&#19996;"
            }, {
              "value": "CN21",
              "name": "Guangxi Zhuang / &#24191;&#35199;&#22766;&#26063;"
            }, {
              "value": "CN22",
              "name": "Hainan / &#28023;&#21335;"
            }, {
              "value": "CN23",
              "name": "Chongqing / &#37325;&#24198;"
            }, {
              "value": "CN24",
              "name": "Sichuan / &#22235;&#24029;"
            }, {
              "value": "CN25",
              "name": "Guizhou / &#36149;&#24030;"
            }, {
              "value": "CN26",
              "name": "Shaanxi / &#38485;&#35199;"
            }, {
              "value": "CN27",
              "name": "Gansu / &#29976;&#32899;"
            }, {
              "value": "CN28",
              "name": "Qinghai / &#38738;&#28023;"
            }, {
              "value": "CN29",
              "name": "Ningxia Hui / &#23425;&#22799;"
            }, {
              "value": "CN30",
              "name": "Macau / &#28595;&#38376;"
            }, {
              "value": "CN31",
              "name": "Tibet / &#35199;&#34255;"
            }, {
              "value": "CN32",
              "name": "Xinjiang / &#26032;&#30086;"
            }],
            "GR": [{
              "value": "I",
              "name": "Αττική"
            }, {
              "value": "A",
              "name": "Ανατολική Μακεδονία και Θράκη"
            }, {
              "value": "B",
              "name": "Κεντρική Μακεδονία"
            }, {
              "value": "C",
              "name": "Δυτική Μακεδονία"
            }, {
              "value": "D",
              "name": "Ήπειρος"
            }, {
              "value": "E",
              "name": "Θεσσαλία"
            }, {
              "value": "F",
              "name": "Ιόνιοι Νήσοι"
            }, {
              "value": "G",
              "name": "Δυτική Ελλάδα"
            }, {
              "value": "H",
              "name": "Στερεά Ελλάδα"
            }, {
              "value": "J",
              "name": "Πελοπόννησος"
            }, {
              "value": "K",
              "name": "Βόρειο Αιγαίο"
            }, {
              "value": "L",
              "name": "Νότιο Αιγαίο"
            }, {
              "value": "M",
              "name": "Κρήτη"
            }],
            "HK": [{
              "value": "HONG KONG",
              "name": "Hong Kong Island"
            }, {
              "value": "KOWLOON",
              "name": "Kowloon"
            }, {
              "value": "NEW TERRITORIES",
              "name": "New Territories"
            }],
            "HU": [{
              "value": "BK",
              "name": "Bács-Kiskun"
            }, {
              "value": "BE",
              "name": "Békés"
            }, {
              "value": "BA",
              "name": "Baranya"
            }, {
              "value": "BZ",
              "name": "Borsod-Abaúj-Zemplén"
            }, {
              "value": "BU",
              "name": "Budapest"
            }, {
              "value": "CS",
              "name": "Csongrád"
            }, {
              "value": "FE",
              "name": "Fejér"
            }, {
              "value": "GS",
              "name": "Győr-Moson-Sopron"
            }, {
              "value": "HB",
              "name": "Hajdú-Bihar"
            }, {
              "value": "HE",
              "name": "Heves"
            }, {
              "value": "JN",
              "name": "Jász-Nagykun-Szolnok"
            }, {
              "value": "KE",
              "name": "Komárom-Esztergom"
            }, {
              "value": "NO",
              "name": "Nógrád"
            }, {
              "value": "PE",
              "name": "Pest"
            }, {
              "value": "SO",
              "name": "Somogy"
            }, {
              "value": "SZ",
              "name": "Szabolcs-Szatmár-Bereg"
            }, {
              "value": "TO",
              "name": "Tolna"
            }, {
              "value": "VA",
              "name": "Vas"
            }, {
              "value": "VE",
              "name": "Veszprém"
            }, {
              "value": "ZA",
              "name": "Zala"
            }],
            "IN": [{
              "value": "AP",
              "name": "Andhra Pradesh"
            }, {
              "value": "AR",
              "name": "Arunachal Pradesh"
            }, {
              "value": "AS",
              "name": "Assam"
            }, {
              "value": "BR",
              "name": "Bihar"
            }, {
              "value": "CT",
              "name": "Chhattisgarh"
            }, {
              "value": "GA",
              "name": "Goa"
            }, {
              "value": "GJ",
              "name": "Gujarat"
            }, {
              "value": "HR",
              "name": "Haryana"
            }, {
              "value": "HP",
              "name": "Himachal Pradesh"
            }, {
              "value": "JK",
              "name": "Jammu and Kashmir"
            }, {
              "value": "JH",
              "name": "Jharkhand"
            }, {
              "value": "KA",
              "name": "Karnataka"
            }, {
              "value": "KL",
              "name": "Kerala"
            }, {
              "value": "MP",
              "name": "Madhya Pradesh"
            }, {
              "value": "MH",
              "name": "Maharashtra"
            }, {
              "value": "MN",
              "name": "Manipur"
            }, {
              "value": "ML",
              "name": "Meghalaya"
            }, {
              "value": "MZ",
              "name": "Mizoram"
            }, {
              "value": "NL",
              "name": "Nagaland"
            }, {
              "value": "OR",
              "name": "Orissa"
            }, {
              "value": "PB",
              "name": "Punjab"
            }, {
              "value": "RJ",
              "name": "Rajasthan"
            }, {
              "value": "SK",
              "name": "Sikkim"
            }, {
              "value": "TN",
              "name": "Tamil Nadu"
            }, {
              "value": "TS",
              "name": "Telangana"
            }, {
              "value": "TR",
              "name": "Tripura"
            }, {
              "value": "UK",
              "name": "Uttarakhand"
            }, {
              "value": "UP",
              "name": "Uttar Pradesh"
            }, {
              "value": "WB",
              "name": "West Bengal"
            }, {
              "value": "AN",
              "name": "Andaman and Nicobar Islands"
            }, {
              "value": "CH",
              "name": "Chandigarh"
            }, {
              "value": "DN",
              "name": "Dadra and Nagar Haveli"
            }, {
              "value": "DD",
              "name": "Daman and Diu"
            }, {
              "value": "DL",
              "name": "Delhi"
            }, {
              "value": "LD",
              "name": "Lakshadeep"
            }, {
              "value": "PY",
              "name": "Pondicherry (Puducherry)"
            }],
            "ID": [{
              "value": "AC",
              "name": "Daerah Istimewa Aceh"
            }, {
              "value": "SU",
              "name": "Sumatera Utara"
            }, {
              "value": "SB",
              "name": "Sumatera Barat"
            }, {
              "value": "RI",
              "name": "Riau"
            }, {
              "value": "KR",
              "name": "Kepulauan Riau"
            }, {
              "value": "JA",
              "name": "Jambi"
            }, {
              "value": "SS",
              "name": "Sumatera Selatan"
            }, {
              "value": "BB",
              "name": "Bangka Belitung"
            }, {
              "value": "BE",
              "name": "Bengkulu"
            }, {
              "value": "LA",
              "name": "Lampung"
            }, {
              "value": "JK",
              "name": "DKI Jakarta"
            }, {
              "value": "JB",
              "name": "Jawa Barat"
            }, {
              "value": "BT",
              "name": "Banten"
            }, {
              "value": "JT",
              "name": "Jawa Tengah"
            }, {
              "value": "JI",
              "name": "Jawa Timur"
            }, {
              "value": "YO",
              "name": "Daerah Istimewa Yogyakarta"
            }, {
              "value": "BA",
              "name": "Bali"
            }, {
              "value": "NB",
              "name": "Nusa Tenggara Barat"
            }, {
              "value": "NT",
              "name": "Nusa Tenggara Timur"
            }, {
              "value": "KB",
              "name": "Kalimantan Barat"
            }, {
              "value": "KT",
              "name": "Kalimantan Tengah"
            }, {
              "value": "KI",
              "name": "Kalimantan Timur"
            }, {
              "value": "KS",
              "name": "Kalimantan Selatan"
            }, {
              "value": "KU",
              "name": "Kalimantan Utara"
            }, {
              "value": "SA",
              "name": "Sulawesi Utara"
            }, {
              "value": "ST",
              "name": "Sulawesi Tengah"
            }, {
              "value": "SG",
              "name": "Sulawesi Tenggara"
            }, {
              "value": "SR",
              "name": "Sulawesi Barat"
            }, {
              "value": "SN",
              "name": "Sulawesi Selatan"
            }, {
              "value": "GO",
              "name": "Gorontalo"
            }, {
              "value": "MA",
              "name": "Maluku"
            }, {
              "value": "MU",
              "name": "Maluku Utara"
            }, {
              "value": "PA",
              "name": "Papua"
            }, {
              "value": "PB",
              "name": "Papua Barat"
            }],
            "IR": [{
              "value": "KHZ",
              "name": "Khuzestan  (خوزستان)"
            }, {
              "value": "THR",
              "name": "Tehran  (تهران)"
            }, {
              "value": "ILM",
              "name": "Ilaam (ایلام)"
            }, {
              "value": "BHR",
              "name": "Bushehr (بوشهر)"
            }, {
              "value": "ADL",
              "name": "Ardabil (اردبیل)"
            }, {
              "value": "ESF",
              "name": "Isfahan (اصفهان)"
            }, {
              "value": "YZD",
              "name": "Yazd (یزد)"
            }, {
              "value": "KRH",
              "name": "Kermanshah (کرمانشاه)"
            }, {
              "value": "KRN",
              "name": "Kerman (کرمان)"
            }, {
              "value": "HDN",
              "name": "Hamadan (همدان)"
            }, {
              "value": "GZN",
              "name": "Ghazvin (قزوین)"
            }, {
              "value": "ZJN",
              "name": "Zanjan (زنجان)"
            }, {
              "value": "LRS",
              "name": "Luristan (لرستان)"
            }, {
              "value": "ABZ",
              "name": "Alborz (البرز)"
            }, {
              "value": "EAZ",
              "name": "East Azarbaijan (آذربایجان شرقی)"
            }, {
              "value": "WAZ",
              "name": "West Azarbaijan (آذربایجان غربی)"
            }, {
              "value": "CHB",
              "name": "Chaharmahal and Bakhtiari (چهارمحال و بختیاری)"
            }, {
              "value": "SKH",
              "name": "South Khorasan (خراسان جنوبی)"
            }, {
              "value": "RKH",
              "name": "Razavi Khorasan (خراسان رضوی)"
            }, {
              "value": "NKH",
              "name": "North Khorasan (خراسان جنوبی)"
            }, {
              "value": "SMN",
              "name": "Semnan (سمنان)"
            }, {
              "value": "FRS",
              "name": "Fars (فارس)"
            }, {
              "value": "QHM",
              "name": "Qom (قم)"
            }, {
              "value": "KRD",
              "name": "Kurdistan / کردستان)"
            }, {
              "value": "KBD",
              "name": "Kohgiluyeh and BoyerAhmad (کهگیلوییه و بویراحمد)"
            }, {
              "value": "GLS",
              "name": "Golestan (گلستان)"
            }, {
              "value": "GIL",
              "name": "Gilan (گیلان)"
            }, {
              "value": "MZN",
              "name": "Mazandaran (مازندران)"
            }, {
              "value": "MKZ",
              "name": "Markazi (مرکزی)"
            }, {
              "value": "HRZ",
              "name": "Hormozgan (هرمزگان)"
            }, {
              "value": "SBN",
              "name": "Sistan and Baluchestan (سیستان و بلوچستان)"
            }],
            "IE": [{
              "value": "CE",
              "name": "Clare"
            }, {
              "value": "CK",
              "name": "Cork"
            }, {
              "value": "CN",
              "name": "Cavan"
            }, {
              "value": "CW",
              "name": "Carlow"
            }, {
              "value": "DL",
              "name": "Donegal"
            }, {
              "value": "DN",
              "name": "Dublin"
            }, {
              "value": "GY",
              "name": "Galway"
            }, {
              "value": "KE",
              "name": "Kildare"
            }, {
              "value": "KK",
              "name": "Kilkenny"
            }, {
              "value": "KY",
              "name": "Kerry"
            }, {
              "value": "LD",
              "name": "Longford"
            }, {
              "value": "LH",
              "name": "Louth"
            }, {
              "value": "LK",
              "name": "Limerick"
            }, {
              "value": "LM",
              "name": "Leitrim"
            }, {
              "value": "LS",
              "name": "Laois"
            }, {
              "value": "MH",
              "name": "Meath"
            }, {
              "value": "MN",
              "name": "Monaghan"
            }, {
              "value": "MO",
              "name": "Mayo"
            }, {
              "value": "OY",
              "name": "Offaly"
            }, {
              "value": "RN",
              "name": "Roscommon"
            }, {
              "value": "SO",
              "name": "Sligo"
            }, {
              "value": "TY",
              "name": "Tipperary"
            }, {
              "value": "WD",
              "name": "Waterford"
            }, {
              "value": "WH",
              "name": "Westmeath"
            }, {
              "value": "WW",
              "name": "Wicklow"
            }, {
              "value": "WX",
              "name": "Wexford"
            }],
            "IT": [{
              "value": "AG",
              "name": "Agrigento"
            }, {
              "value": "AL",
              "name": "Alessandria"
            }, {
              "value": "AN",
              "name": "Ancona"
            }, {
              "value": "AO",
              "name": "Aosta"
            }, {
              "value": "AR",
              "name": "Arezzo"
            }, {
              "value": "AP",
              "name": "Ascoli Piceno"
            }, {
              "value": "AT",
              "name": "Asti"
            }, {
              "value": "AV",
              "name": "Avellino"
            }, {
              "value": "BA",
              "name": "Bari"
            }, {
              "value": "BT",
              "name": "Barletta-Andria-Trani"
            }, {
              "value": "BL",
              "name": "Belluno"
            }, {
              "value": "BN",
              "name": "Benevento"
            }, {
              "value": "BG",
              "name": "Bergamo"
            }, {
              "value": "BI",
              "name": "Biella"
            }, {
              "value": "BO",
              "name": "Bologna"
            }, {
              "value": "BZ",
              "name": "Bolzano"
            }, {
              "value": "BS",
              "name": "Brescia"
            }, {
              "value": "BR",
              "name": "Brindisi"
            }, {
              "value": "CA",
              "name": "Cagliari"
            }, {
              "value": "CL",
              "name": "Caltanissetta"
            }, {
              "value": "CB",
              "name": "Campobasso"
            }, {
              "value": "CI",
              "name": "Carbonia-Iglesias"
            }, {
              "value": "CE",
              "name": "Caserta"
            }, {
              "value": "CT",
              "name": "Catania"
            }, {
              "value": "CZ",
              "name": "Catanzaro"
            }, {
              "value": "CH",
              "name": "Chieti"
            }, {
              "value": "CO",
              "name": "Como"
            }, {
              "value": "CS",
              "name": "Cosenza"
            }, {
              "value": "CR",
              "name": "Cremona"
            }, {
              "value": "KR",
              "name": "Crotone"
            }, {
              "value": "CN",
              "name": "Cuneo"
            }, {
              "value": "EN",
              "name": "Enna"
            }, {
              "value": "FM",
              "name": "Fermo"
            }, {
              "value": "FE",
              "name": "Ferrara"
            }, {
              "value": "FI",
              "name": "Firenze"
            }, {
              "value": "FG",
              "name": "Foggia"
            }, {
              "value": "FC",
              "name": "Forlì-Cesena"
            }, {
              "value": "FR",
              "name": "Frosinone"
            }, {
              "value": "GE",
              "name": "Genova"
            }, {
              "value": "GO",
              "name": "Gorizia"
            }, {
              "value": "GR",
              "name": "Grosseto"
            }, {
              "value": "IM",
              "name": "Imperia"
            }, {
              "value": "IS",
              "name": "Isernia"
            }, {
              "value": "SP",
              "name": "La Spezia"
            }, {
              "value": "AQ",
              "name": "L'Aquila"
            }, {
              "value": "LT",
              "name": "Latina"
            }, {
              "value": "LE",
              "name": "Lecce"
            }, {
              "value": "LC",
              "name": "Lecco"
            }, {
              "value": "LI",
              "name": "Livorno"
            }, {
              "value": "LO",
              "name": "Lodi"
            }, {
              "value": "LU",
              "name": "Lucca"
            }, {
              "value": "MC",
              "name": "Macerata"
            }, {
              "value": "MN",
              "name": "Mantova"
            }, {
              "value": "MS",
              "name": "Massa-Carrara"
            }, {
              "value": "MT",
              "name": "Matera"
            }, {
              "value": "ME",
              "name": "Messina"
            }, {
              "value": "MI",
              "name": "Milano"
            }, {
              "value": "MO",
              "name": "Modena"
            }, {
              "value": "MB",
              "name": "Monza e della Brianza"
            }, {
              "value": "NA",
              "name": "Napoli"
            }, {
              "value": "NO",
              "name": "Novara"
            }, {
              "value": "NU",
              "name": "Nuoro"
            }, {
              "value": "OT",
              "name": "Olbia-Tempio"
            }, {
              "value": "OR",
              "name": "Oristano"
            }, {
              "value": "PD",
              "name": "Padova"
            }, {
              "value": "PA",
              "name": "Palermo"
            }, {
              "value": "PR",
              "name": "Parma"
            }, {
              "value": "PV",
              "name": "Pavia"
            }, {
              "value": "PG",
              "name": "Perugia"
            }, {
              "value": "PU",
              "name": "Pesaro e Urbino"
            }, {
              "value": "PE",
              "name": "Pescara"
            }, {
              "value": "PC",
              "name": "Piacenza"
            }, {
              "value": "PI",
              "name": "Pisa"
            }, {
              "value": "PT",
              "name": "Pistoia"
            }, {
              "value": "PN",
              "name": "Pordenone"
            }, {
              "value": "PZ",
              "name": "Potenza"
            }, {
              "value": "PO",
              "name": "Prato"
            }, {
              "value": "RG",
              "name": "Ragusa"
            }, {
              "value": "RA",
              "name": "Ravenna"
            }, {
              "value": "RC",
              "name": "Reggio Calabria"
            }, {
              "value": "RE",
              "name": "Reggio Emilia"
            }, {
              "value": "RI",
              "name": "Rieti"
            }, {
              "value": "RN",
              "name": "Rimini"
            }, {
              "value": "RM",
              "name": "Roma"
            }, {
              "value": "RO",
              "name": "Rovigo"
            }, {
              "value": "SA",
              "name": "Salerno"
            }, {
              "value": "VS",
              "name": "Medio Campidano"
            }, {
              "value": "SS",
              "name": "Sassari"
            }, {
              "value": "SV",
              "name": "Savona"
            }, {
              "value": "SI",
              "name": "Siena"
            }, {
              "value": "SR",
              "name": "Siracusa"
            }, {
              "value": "SO",
              "name": "Sondrio"
            }, {
              "value": "TA",
              "name": "Taranto"
            }, {
              "value": "TE",
              "name": "Teramo"
            }, {
              "value": "TR",
              "name": "Terni"
            }, {
              "value": "TO",
              "name": "Torino"
            }, {
              "value": "OG",
              "name": "Ogliastra"
            }, {
              "value": "TP",
              "name": "Trapani"
            }, {
              "value": "TN",
              "name": "Trento"
            }, {
              "value": "TV",
              "name": "Treviso"
            }, {
              "value": "TS",
              "name": "Trieste"
            }, {
              "value": "UD",
              "name": "Udine"
            }, {
              "value": "VA",
              "name": "Varese"
            }, {
              "value": "VE",
              "name": "Venezia"
            }, {
              "value": "VB",
              "name": "Verbano-Cusio-Ossola"
            }, {
              "value": "VC",
              "name": "Vercelli"
            }, {
              "value": "VR",
              "name": "Verona"
            }, {
              "value": "VV",
              "name": "Vibo Valentia"
            }, {
              "value": "VI",
              "name": "Vicenza"
            }, {
              "value": "VT",
              "name": "Viterbo"
            }],
            "JP": [{
              "value": "JP01",
              "name": "Hokkaido"
            }, {
              "value": "JP02",
              "name": "Aomori"
            }, {
              "value": "JP03",
              "name": "Iwate"
            }, {
              "value": "JP04",
              "name": "Miyagi"
            }, {
              "value": "JP05",
              "name": "Akita"
            }, {
              "value": "JP06",
              "name": "Yamagata"
            }, {
              "value": "JP07",
              "name": "Fukushima"
            }, {
              "value": "JP08",
              "name": "Ibaraki"
            }, {
              "value": "JP09",
              "name": "Tochigi"
            }, {
              "value": "JP10",
              "name": "Gunma"
            }, {
              "value": "JP11",
              "name": "Saitama"
            }, {
              "value": "JP12",
              "name": "Chiba"
            }, {
              "value": "JP13",
              "name": "Tokyo"
            }, {
              "value": "JP14",
              "name": "Kanagawa"
            }, {
              "value": "JP15",
              "name": "Niigata"
            }, {
              "value": "JP16",
              "name": "Toyama"
            }, {
              "value": "JP17",
              "name": "Ishikawa"
            }, {
              "value": "JP18",
              "name": "Fukui"
            }, {
              "value": "JP19",
              "name": "Yamanashi"
            }, {
              "value": "JP20",
              "name": "Nagano"
            }, {
              "value": "JP21",
              "name": "Gifu"
            }, {
              "value": "JP22",
              "name": "Shizuoka"
            }, {
              "value": "JP23",
              "name": "Aichi"
            }, {
              "value": "JP24",
              "name": "Mie"
            }, {
              "value": "JP25",
              "name": "Shiga"
            }, {
              "value": "JP26",
              "name": "Kyoto"
            }, {
              "value": "JP27",
              "name": "Osaka"
            }, {
              "value": "JP28",
              "name": "Hyogo"
            }, {
              "value": "JP29",
              "name": "Nara"
            }, {
              "value": "JP30",
              "name": "Wakayama"
            }, {
              "value": "JP31",
              "name": "Tottori"
            }, {
              "value": "JP32",
              "name": "Shimane"
            }, {
              "value": "JP33",
              "name": "Okayama"
            }, {
              "value": "JP34",
              "name": "Hiroshima"
            }, {
              "value": "JP35",
              "name": "Yamaguchi"
            }, {
              "value": "JP36",
              "name": "Tokushima"
            }, {
              "value": "JP37",
              "name": "Kagawa"
            }, {
              "value": "JP38",
              "name": "Ehime"
            }, {
              "value": "JP39",
              "name": "Kochi"
            }, {
              "value": "JP40",
              "name": "Fukuoka"
            }, {
              "value": "JP41",
              "name": "Saga"
            }, {
              "value": "JP42",
              "name": "Nagasaki"
            }, {
              "value": "JP43",
              "name": "Kumamoto"
            }, {
              "value": "JP44",
              "name": "Oita"
            }, {
              "value": "JP45",
              "name": "Miyazaki"
            }, {
              "value": "JP46",
              "name": "Kagoshima"
            }, {
              "value": "JP47",
              "name": "Okinawa"
            }],
            "MY": [{
              "value": "JHR",
              "name": "Johor"
            }, {
              "value": "KDH",
              "name": "Kedah"
            }, {
              "value": "KTN",
              "name": "Kelantan"
            }, {
              "value": "LBN",
              "name": "Labuan"
            }, {
              "value": "MLK",
              "name": "Malacca (Melaka)"
            }, {
              "value": "NSN",
              "name": "Negeri Sembilan"
            }, {
              "value": "PHG",
              "name": "Pahang"
            }, {
              "value": "PNG",
              "name": "Penang (Pulau Pinang)"
            }, {
              "value": "PRK",
              "name": "Perak"
            }, {
              "value": "PLS",
              "name": "Perlis"
            }, {
              "value": "SBH",
              "name": "Sabah"
            }, {
              "value": "SWK",
              "name": "Sarawak"
            }, {
              "value": "SGR",
              "name": "Selangor"
            }, {
              "value": "TRG",
              "name": "Terengganu"
            }, {
              "value": "PJY",
              "name": "Putrajaya"
            }, {
              "value": "KUL",
              "name": "Kuala Lumpur"
            }],
            "MX": [{
              "value": "Distrito Federal",
              "name": "Distrito Federal"
            }, {
              "value": "Jalisco",
              "name": "Jalisco"
            }, {
              "value": "Nuevo Leon",
              "name": "Nuevo León"
            }, {
              "value": "Aguascalientes",
              "name": "Aguascalientes"
            }, {
              "value": "Baja California",
              "name": "Baja California"
            }, {
              "value": "Baja California Sur",
              "name": "Baja California Sur"
            }, {
              "value": "Campeche",
              "name": "Campeche"
            }, {
              "value": "Chiapas",
              "name": "Chiapas"
            }, {
              "value": "Chihuahua",
              "name": "Chihuahua"
            }, {
              "value": "Coahuila",
              "name": "Coahuila"
            }, {
              "value": "Colima",
              "name": "Colima"
            }, {
              "value": "Durango",
              "name": "Durango"
            }, {
              "value": "Guanajuato",
              "name": "Guanajuato"
            }, {
              "value": "Guerrero",
              "name": "Guerrero"
            }, {
              "value": "Hidalgo",
              "name": "Hidalgo"
            }, {
              "value": "Estado de Mexico",
              "name": "Edo. de México"
            }, {
              "value": "Michoacan",
              "name": "Michoacán"
            }, {
              "value": "Morelos",
              "name": "Morelos"
            }, {
              "value": "Nayarit",
              "name": "Nayarit"
            }, {
              "value": "Oaxaca",
              "name": "Oaxaca"
            }, {
              "value": "Puebla",
              "name": "Puebla"
            }, {
              "value": "Queretaro",
              "name": "Querétaro"
            }, {
              "value": "Quintana Roo",
              "name": "Quintana Roo"
            }, {
              "value": "San Luis Potosi",
              "name": "San Luis Potosí"
            }, {
              "value": "Sinaloa",
              "name": "Sinaloa"
            }, {
              "value": "Sonora",
              "name": "Sonora"
            }, {
              "value": "Tabasco",
              "name": "Tabasco"
            }, {
              "value": "Tamaulipas",
              "name": "Tamaulipas"
            }, {
              "value": "Tlaxcala",
              "name": "Tlaxcala"
            }, {
              "value": "Veracruz",
              "name": "Veracruz"
            }, {
              "value": "Yucatan",
              "name": "Yucatán"
            }, {
              "value": "Zacatecas",
              "name": "Zacatecas"
            }],
            "NP": [{
              "value": "BAG",
              "name": "Bagmati"
            }, {
              "value": "BHE",
              "name": "Bheri"
            }, {
              "value": "DHA",
              "name": "Dhaulagiri"
            }, {
              "value": "GAN",
              "name": "Gandaki"
            }, {
              "value": "JAN",
              "name": "Janakpur"
            }, {
              "value": "KAR",
              "name": "Karnali"
            }, {
              "value": "KOS",
              "name": "Koshi"
            }, {
              "value": "LUM",
              "name": "Lumbini"
            }, {
              "value": "MAH",
              "name": "Mahakali"
            }, {
              "value": "MEC",
              "name": "Mechi"
            }, {
              "value": "NAR",
              "name": "Narayani"
            }, {
              "value": "RAP",
              "name": "Rapti"
            }, {
              "value": "SAG",
              "name": "Sagarmatha"
            }, {
              "value": "SET",
              "name": "Seti"
            }],
            "NZ": [{
              "value": "NL",
              "name": "Northland"
            }, {
              "value": "AK",
              "name": "Auckland"
            }, {
              "value": "WA",
              "name": "Waikato"
            }, {
              "value": "BP",
              "name": "Bay of Plenty"
            }, {
              "value": "TK",
              "name": "Taranaki"
            }, {
              "value": "GI",
              "name": "Gisborne"
            }, {
              "value": "HB",
              "name": "Hawke&rsquo;s Bay"
            }, {
              "value": "MW",
              "name": "Manawatu-Wanganui"
            }, {
              "value": "WE",
              "name": "Wellington"
            }, {
              "value": "NS",
              "name": "Nelson"
            }, {
              "value": "MB",
              "name": "Marlborough"
            }, {
              "value": "TM",
              "name": "Tasman"
            }, {
              "value": "WC",
              "name": "West Coast"
            }, {
              "value": "CT",
              "name": "Canterbury"
            }, {
              "value": "OT",
              "name": "Otago"
            }, {
              "value": "SL",
              "name": "Southland"
            }],
            "NG": [{
              "value": "AB",
              "name": "Abia"
            }, {
              "value": "FC",
              "name": "Abuja"
            }, {
              "value": "AD",
              "name": "Adamawa"
            }, {
              "value": "AK",
              "name": "Akwa Ibom"
            }, {
              "value": "AN",
              "name": "Anambra"
            }, {
              "value": "BA",
              "name": "Bauchi"
            }, {
              "value": "BY",
              "name": "Bayelsa"
            }, {
              "value": "BE",
              "name": "Benue"
            }, {
              "value": "BO",
              "name": "Borno"
            }, {
              "value": "CR",
              "name": "Cross River"
            }, {
              "value": "DE",
              "name": "Delta"
            }, {
              "value": "EB",
              "name": "Ebonyi"
            }, {
              "value": "ED",
              "name": "Edo"
            }, {
              "value": "EK",
              "name": "Ekiti"
            }, {
              "value": "EN",
              "name": "Enugu"
            }, {
              "value": "GO",
              "name": "Gombe"
            }, {
              "value": "IM",
              "name": "Imo"
            }, {
              "value": "JI",
              "name": "Jigawa"
            }, {
              "value": "KD",
              "name": "Kaduna"
            }, {
              "value": "KN",
              "name": "Kano"
            }, {
              "value": "KT",
              "name": "Katsina"
            }, {
              "value": "KE",
              "name": "Kebbi"
            }, {
              "value": "KO",
              "name": "Kogi"
            }, {
              "value": "KW",
              "name": "Kwara"
            }, {
              "value": "LA",
              "name": "Lagos"
            }, {
              "value": "NA",
              "name": "Nasarawa"
            }, {
              "value": "NI",
              "name": "Niger"
            }, {
              "value": "OG",
              "name": "Ogun"
            }, {
              "value": "ON",
              "name": "Ondo"
            }, {
              "value": "OS",
              "name": "Osun"
            }, {
              "value": "OY",
              "name": "Oyo"
            }, {
              "value": "PL",
              "name": "Plateau"
            }, {
              "value": "RI",
              "name": "Rivers"
            }, {
              "value": "SO",
              "name": "Sokoto"
            }, {
              "value": "TA",
              "name": "Taraba"
            }, {
              "value": "YO",
              "name": "Yobe"
            }, {
              "value": "ZA",
              "name": "Zamfara"
            }],
            "PK": [{
              "value": "JK",
              "name": "Azad Kashmir"
            }, {
              "value": "BA",
              "name": "Balochistan"
            }, {
              "value": "TA",
              "name": "FATA"
            }, {
              "value": "GB",
              "name": "Gilgit Baltistan"
            }, {
              "value": "IS",
              "name": "Islamabad Capital Territory"
            }, {
              "value": "KP",
              "name": "Khyber Pakhtunkhwa"
            }, {
              "value": "PB",
              "name": "Punjab"
            }, {
              "value": "SD",
              "name": "Sindh"
            }],
            "PE": [{
              "value": "CAL",
              "name": "El Callao"
            }, {
              "value": "LMA",
              "name": "Municipalidad Metropolitana de Lima"
            }, {
              "value": "AMA",
              "name": "Amazonas"
            }, {
              "value": "ANC",
              "name": "Ancash"
            }, {
              "value": "APU",
              "name": "Apur&iacute;mac"
            }, {
              "value": "ARE",
              "name": "Arequipa"
            }, {
              "value": "AYA",
              "name": "Ayacucho"
            }, {
              "value": "CAJ",
              "name": "Cajamarca"
            }, {
              "value": "CUS",
              "name": "Cusco"
            }, {
              "value": "HUV",
              "name": "Huancavelica"
            }, {
              "value": "HUC",
              "name": "Hu&aacute;nuco"
            }, {
              "value": "ICA",
              "name": "Ica"
            }, {
              "value": "JUN",
              "name": "Jun&iacute;n"
            }, {
              "value": "LAL",
              "name": "La Libertad"
            }, {
              "value": "LAM",
              "name": "Lambayeque"
            }, {
              "value": "LIM",
              "name": "Lima"
            }, {
              "value": "LOR",
              "name": "Loreto"
            }, {
              "value": "MDD",
              "name": "Madre de Dios"
            }, {
              "value": "MOQ",
              "name": "Moquegua"
            }, {
              "value": "PAS",
              "name": "Pasco"
            }, {
              "value": "PIU",
              "name": "Piura"
            }, {
              "value": "PUN",
              "name": "Puno"
            }, {
              "value": "SAM",
              "name": "San Mart&iacute;n"
            }, {
              "value": "TAC",
              "name": "Tacna"
            }, {
              "value": "TUM",
              "name": "Tumbes"
            }, {
              "value": "UCA",
              "name": "Ucayali"
            }],
            "PH": [{
              "value": "ABR",
              "name": "Abra"
            }, {
              "value": "AGN",
              "name": "Agusan del Norte"
            }, {
              "value": "AGS",
              "name": "Agusan del Sur"
            }, {
              "value": "AKL",
              "name": "Aklan"
            }, {
              "value": "ALB",
              "name": "Albay"
            }, {
              "value": "ANT",
              "name": "Antique"
            }, {
              "value": "APA",
              "name": "Apayao"
            }, {
              "value": "AUR",
              "name": "Aurora"
            }, {
              "value": "BAS",
              "name": "Basilan"
            }, {
              "value": "BAN",
              "name": "Bataan"
            }, {
              "value": "BTN",
              "name": "Batanes"
            }, {
              "value": "BTG",
              "name": "Batangas"
            }, {
              "value": "BEN",
              "name": "Benguet"
            }, {
              "value": "BIL",
              "name": "Biliran"
            }, {
              "value": "BOH",
              "name": "Bohol"
            }, {
              "value": "BUK",
              "name": "Bukidnon"
            }, {
              "value": "BUL",
              "name": "Bulacan"
            }, {
              "value": "CAG",
              "name": "Cagayan"
            }, {
              "value": "CAN",
              "name": "Camarines Norte"
            }, {
              "value": "CAS",
              "name": "Camarines Sur"
            }, {
              "value": "CAM",
              "name": "Camiguin"
            }, {
              "value": "CAP",
              "name": "Capiz"
            }, {
              "value": "CAT",
              "name": "Catanduanes"
            }, {
              "value": "CAV",
              "name": "Cavite"
            }, {
              "value": "CEB",
              "name": "Cebu"
            }, {
              "value": "COM",
              "name": "Compostela Valley"
            }, {
              "value": "NCO",
              "name": "Cotabato"
            }, {
              "value": "DAV",
              "name": "Davao del Norte"
            }, {
              "value": "DAS",
              "name": "Davao del Sur"
            }, {
              "value": "DAC",
              "name": "Davao Occidental"
            }, {
              "value": "DAO",
              "name": "Davao Oriental"
            }, {
              "value": "DIN",
              "name": "Dinagat Islands"
            }, {
              "value": "EAS",
              "name": "Eastern Samar"
            }, {
              "value": "GUI",
              "name": "Guimaras"
            }, {
              "value": "IFU",
              "name": "Ifugao"
            }, {
              "value": "ILN",
              "name": "Ilocos Norte"
            }, {
              "value": "ILS",
              "name": "Ilocos Sur"
            }, {
              "value": "ILI",
              "name": "Iloilo"
            }, {
              "value": "ISA",
              "name": "Isabela"
            }, {
              "value": "KAL",
              "name": "Kalinga"
            }, {
              "value": "LUN",
              "name": "La Union"
            }, {
              "value": "LAG",
              "name": "Laguna"
            }, {
              "value": "LAN",
              "name": "Lanao del Norte"
            }, {
              "value": "LAS",
              "name": "Lanao del Sur"
            }, {
              "value": "LEY",
              "name": "Leyte"
            }, {
              "value": "MAG",
              "name": "Maguindanao"
            }, {
              "value": "MAD",
              "name": "Marinduque"
            }, {
              "value": "MAS",
              "name": "Masbate"
            }, {
              "value": "MSC",
              "name": "Misamis Occidental"
            }, {
              "value": "MSR",
              "name": "Misamis Oriental"
            }, {
              "value": "MOU",
              "name": "Mountain Province"
            }, {
              "value": "NEC",
              "name": "Negros Occidental"
            }, {
              "value": "NER",
              "name": "Negros Oriental"
            }, {
              "value": "NSA",
              "name": "Northern Samar"
            }, {
              "value": "NUE",
              "name": "Nueva Ecija"
            }, {
              "value": "NUV",
              "name": "Nueva Vizcaya"
            }, {
              "value": "MDC",
              "name": "Occidental Mindoro"
            }, {
              "value": "MDR",
              "name": "Oriental Mindoro"
            }, {
              "value": "PLW",
              "name": "Palawan"
            }, {
              "value": "PAM",
              "name": "Pampanga"
            }, {
              "value": "PAN",
              "name": "Pangasinan"
            }, {
              "value": "QUE",
              "name": "Quezon"
            }, {
              "value": "QUI",
              "name": "Quirino"
            }, {
              "value": "RIZ",
              "name": "Rizal"
            }, {
              "value": "ROM",
              "name": "Romblon"
            }, {
              "value": "WSA",
              "name": "Samar"
            }, {
              "value": "SAR",
              "name": "Sarangani"
            }, {
              "value": "SIQ",
              "name": "Siquijor"
            }, {
              "value": "SOR",
              "name": "Sorsogon"
            }, {
              "value": "SCO",
              "name": "South Cotabato"
            }, {
              "value": "SLE",
              "name": "Southern Leyte"
            }, {
              "value": "SUK",
              "name": "Sultan Kudarat"
            }, {
              "value": "SLU",
              "name": "Sulu"
            }, {
              "value": "SUN",
              "name": "Surigao del Norte"
            }, {
              "value": "SUR",
              "name": "Surigao del Sur"
            }, {
              "value": "TAR",
              "name": "Tarlac"
            }, {
              "value": "TAW",
              "name": "Tawi-Tawi"
            }, {
              "value": "ZMB",
              "name": "Zambales"
            }, {
              "value": "ZAN",
              "name": "Zamboanga del Norte"
            }, {
              "value": "ZAS",
              "name": "Zamboanga del Sur"
            }, {
              "value": "ZSI",
              "name": "Zamboanga Sibugay"
            }, {
              "value": "00",
              "name": "Metro Manila"
            }],
            "RO": [{
              "value": "AB",
              "name": "Alba"
            }, {
              "value": "AR",
              "name": "Arad"
            }, {
              "value": "AG",
              "name": "Arges"
            }, {
              "value": "BC",
              "name": "Bacau"
            }, {
              "value": "BH",
              "name": "Bihor"
            }, {
              "value": "BN",
              "name": "Bistrita-Nasaud"
            }, {
              "value": "BT",
              "name": "Botosani"
            }, {
              "value": "BR",
              "name": "Braila"
            }, {
              "value": "BV",
              "name": "Brasov"
            }, {
              "value": "B",
              "name": "Bucuresti"
            }, {
              "value": "BZ",
              "name": "Buzau"
            }, {
              "value": "CL",
              "name": "Calarasi"
            }, {
              "value": "CS",
              "name": "Caras-Severin"
            }, {
              "value": "CJ",
              "name": "Cluj"
            }, {
              "value": "CT",
              "name": "Constanta"
            }, {
              "value": "CV",
              "name": "Covasna"
            }, {
              "value": "DB",
              "name": "Dambovita"
            }, {
              "value": "DJ",
              "name": "Dolj"
            }, {
              "value": "GL",
              "name": "Galati"
            }, {
              "value": "GR",
              "name": "Giurgiu"
            }, {
              "value": "GJ",
              "name": "Gorj"
            }, {
              "value": "HR",
              "name": "Harghita"
            }, {
              "value": "HD",
              "name": "Hunedoara"
            }, {
              "value": "IL",
              "name": "Ialomita"
            }, {
              "value": "IS",
              "name": "Iasi"
            }, {
              "value": "IF",
              "name": "Ilfov"
            }, {
              "value": "MM",
              "name": "Maramures"
            }, {
              "value": "MH",
              "name": "Mehedinti"
            }, {
              "value": "MS",
              "name": "Mures"
            }, {
              "value": "NT",
              "name": "Neamt"
            }, {
              "value": "OT",
              "name": "Olt"
            }, {
              "value": "PH",
              "name": "Prahova"
            }, {
              "value": "SJ",
              "name": "Salaj"
            }, {
              "value": "SM",
              "name": "Satu Mare"
            }, {
              "value": "SB",
              "name": "Sibiu"
            }, {
              "value": "SV",
              "name": "Suceava"
            }, {
              "value": "TR",
              "name": "Teleorman"
            }, {
              "value": "TM",
              "name": "Timis"
            }, {
              "value": "TL",
              "name": "Tulcea"
            }, {
              "value": "VL",
              "name": "Valcea"
            }, {
              "value": "VS",
              "name": "Vaslui"
            }, {
              "value": "VN",
              "name": "Vrancea"
            }],
            "ZA": [{
              "value": "EC",
              "name": "Eastern Cape"
            }, {
              "value": "FS",
              "name": "Free State"
            }, {
              "value": "GP",
              "name": "Gauteng"
            }, {
              "value": "KZN",
              "name": "KwaZulu-Natal"
            }, {
              "value": "LP",
              "name": "Limpopo"
            }, {
              "value": "MP",
              "name": "Mpumalanga"
            }, {
              "value": "NC",
              "name": "Northern Cape"
            }, {
              "value": "NW",
              "name": "North West"
            }, {
              "value": "WC",
              "name": "Western Cape"
            }],
            "ES": [{
              "value": "C",
              "name": "A Coru&ntilde;a"
            }, {
              "value": "VI",
              "name": "Araba/&Aacute;lava"
            }, {
              "value": "AB",
              "name": "Albacete"
            }, {
              "value": "A",
              "name": "Alicante"
            }, {
              "value": "AL",
              "name": "Almer&iacute;a"
            }, {
              "value": "O",
              "name": "Asturias"
            }, {
              "value": "AV",
              "name": "&Aacute;vila"
            }, {
              "value": "BA",
              "name": "Badajoz"
            }, {
              "value": "PM",
              "name": "Baleares"
            }, {
              "value": "B",
              "name": "Barcelona"
            }, {
              "value": "BU",
              "name": "Burgos"
            }, {
              "value": "CC",
              "name": "C&aacute;ceres"
            }, {
              "value": "CA",
              "name": "C&aacute;diz"
            }, {
              "value": "S",
              "name": "Cantabria"
            }, {
              "value": "CS",
              "name": "Castell&oacute;n"
            }, {
              "value": "CE",
              "name": "Ceuta"
            }, {
              "value": "CR",
              "name": "Ciudad Real"
            }, {
              "value": "CO",
              "name": "C&oacute;rdoba"
            }, {
              "value": "CU",
              "name": "Cuenca"
            }, {
              "value": "GI",
              "name": "Girona"
            }, {
              "value": "GR",
              "name": "Granada"
            }, {
              "value": "GU",
              "name": "Guadalajara"
            }, {
              "value": "SS",
              "name": "Gipuzkoa"
            }, {
              "value": "H",
              "name": "Huelva"
            }, {
              "value": "HU",
              "name": "Huesca"
            }, {
              "value": "J",
              "name": "Ja&eacute;n"
            }, {
              "value": "LO",
              "name": "La Rioja"
            }, {
              "value": "GC",
              "name": "Las Palmas"
            }, {
              "value": "LE",
              "name": "Le&oacute;n"
            }, {
              "value": "L",
              "name": "Lleida"
            }, {
              "value": "LU",
              "name": "Lugo"
            }, {
              "value": "M",
              "name": "Madrid"
            }, {
              "value": "MA",
              "name": "M&aacute;laga"
            }, {
              "value": "ML",
              "name": "Melilla"
            }, {
              "value": "MU",
              "name": "Murcia"
            }, {
              "value": "NA",
              "name": "Navarra"
            }, {
              "value": "OR",
              "name": "Ourense"
            }, {
              "value": "P",
              "name": "Palencia"
            }, {
              "value": "PO",
              "name": "Pontevedra"
            }, {
              "value": "SA",
              "name": "Salamanca"
            }, {
              "value": "TF",
              "name": "Santa Cruz de Tenerife"
            }, {
              "value": "SG",
              "name": "Segovia"
            }, {
              "value": "SE",
              "name": "Sevilla"
            }, {
              "value": "SO",
              "name": "Soria"
            }, {
              "value": "T",
              "name": "Tarragona"
            }, {
              "value": "TE",
              "name": "Teruel"
            }, {
              "value": "TO",
              "name": "Toledo"
            }, {
              "value": "V",
              "name": "Valencia"
            }, {
              "value": "VA",
              "name": "Valladolid"
            }, {
              "value": "BI",
              "name": "Bizkaia"
            }, {
              "value": "ZA",
              "name": "Zamora"
            }, {
              "value": "Z",
              "name": "Zaragoza"
            }],
            "TH": [{
              "value": "TH-37",
              "name": "Amnat Charoen (&#3629;&#3635;&#3609;&#3634;&#3592;&#3648;&#3592;&#3619;&#3636;&#3597;)"
            }, {
              "value": "TH-15",
              "name": "Ang Thong (&#3629;&#3656;&#3634;&#3591;&#3607;&#3629;&#3591;)"
            }, {
              "value": "TH-14",
              "name": "Ayutthaya (&#3614;&#3619;&#3632;&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3629;&#3618;&#3640;&#3608;&#3618;&#3634;)"
            }, {
              "value": "TH-10",
              "name": "Bangkok (&#3585;&#3619;&#3640;&#3591;&#3648;&#3607;&#3614;&#3617;&#3627;&#3634;&#3609;&#3588;&#3619;)"
            }, {
              "value": "TH-38",
              "name": "Bueng Kan (&#3610;&#3638;&#3591;&#3585;&#3634;&#3628;)"
            }, {
              "value": "TH-31",
              "name": "Buri Ram (&#3610;&#3640;&#3619;&#3637;&#3619;&#3633;&#3617;&#3618;&#3660;)"
            }, {
              "value": "TH-24",
              "name": "Chachoengsao (&#3593;&#3632;&#3648;&#3594;&#3636;&#3591;&#3648;&#3607;&#3619;&#3634;)"
            }, {
              "value": "TH-18",
              "name": "Chai Nat (&#3594;&#3633;&#3618;&#3609;&#3634;&#3607;)"
            }, {
              "value": "TH-36",
              "name": "Chaiyaphum (&#3594;&#3633;&#3618;&#3616;&#3641;&#3617;&#3636;)"
            }, {
              "value": "TH-22",
              "name": "Chanthaburi (&#3592;&#3633;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-50",
              "name": "Chiang Mai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3651;&#3627;&#3617;&#3656;)"
            }, {
              "value": "TH-57",
              "name": "Chiang Rai (&#3648;&#3594;&#3637;&#3618;&#3591;&#3619;&#3634;&#3618;)"
            }, {
              "value": "TH-20",
              "name": "Chonburi (&#3594;&#3621;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-86",
              "name": "Chumphon (&#3594;&#3640;&#3617;&#3614;&#3619;)"
            }, {
              "value": "TH-46",
              "name": "Kalasin (&#3585;&#3634;&#3628;&#3626;&#3636;&#3609;&#3608;&#3640;&#3660;)"
            }, {
              "value": "TH-62",
              "name": "Kamphaeng Phet (&#3585;&#3635;&#3649;&#3614;&#3591;&#3648;&#3614;&#3594;&#3619;)"
            }, {
              "value": "TH-71",
              "name": "Kanchanaburi (&#3585;&#3634;&#3597;&#3592;&#3609;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-40",
              "name": "Khon Kaen (&#3586;&#3629;&#3609;&#3649;&#3585;&#3656;&#3609;)"
            }, {
              "value": "TH-81",
              "name": "Krabi (&#3585;&#3619;&#3632;&#3610;&#3637;&#3656;)"
            }, {
              "value": "TH-52",
              "name": "Lampang (&#3621;&#3635;&#3611;&#3634;&#3591;)"
            }, {
              "value": "TH-51",
              "name": "Lamphun (&#3621;&#3635;&#3614;&#3641;&#3609;)"
            }, {
              "value": "TH-42",
              "name": "Loei (&#3648;&#3621;&#3618;)"
            }, {
              "value": "TH-16",
              "name": "Lopburi (&#3621;&#3614;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-58",
              "name": "Mae Hong Son (&#3649;&#3617;&#3656;&#3630;&#3656;&#3629;&#3591;&#3626;&#3629;&#3609;)"
            }, {
              "value": "TH-44",
              "name": "Maha Sarakham (&#3617;&#3627;&#3634;&#3626;&#3634;&#3619;&#3588;&#3634;&#3617;)"
            }, {
              "value": "TH-49",
              "name": "Mukdahan (&#3617;&#3640;&#3585;&#3604;&#3634;&#3627;&#3634;&#3619;)"
            }, {
              "value": "TH-26",
              "name": "Nakhon Nayok (&#3609;&#3588;&#3619;&#3609;&#3634;&#3618;&#3585;)"
            }, {
              "value": "TH-73",
              "name": "Nakhon Pathom (&#3609;&#3588;&#3619;&#3611;&#3600;&#3617;)"
            }, {
              "value": "TH-48",
              "name": "Nakhon Phanom (&#3609;&#3588;&#3619;&#3614;&#3609;&#3617;)"
            }, {
              "value": "TH-30",
              "name": "Nakhon Ratchasima (&#3609;&#3588;&#3619;&#3619;&#3634;&#3594;&#3626;&#3637;&#3617;&#3634;)"
            }, {
              "value": "TH-60",
              "name": "Nakhon Sawan (&#3609;&#3588;&#3619;&#3626;&#3623;&#3619;&#3619;&#3588;&#3660;)"
            }, {
              "value": "TH-80",
              "name": "Nakhon Si Thammarat (&#3609;&#3588;&#3619;&#3624;&#3619;&#3637;&#3608;&#3619;&#3619;&#3617;&#3619;&#3634;&#3594;)"
            }, {
              "value": "TH-55",
              "name": "Nan (&#3609;&#3656;&#3634;&#3609;)"
            }, {
              "value": "TH-96",
              "name": "Narathiwat (&#3609;&#3619;&#3634;&#3608;&#3636;&#3623;&#3634;&#3626;)"
            }, {
              "value": "TH-39",
              "name": "Nong Bua Lam Phu (&#3627;&#3609;&#3629;&#3591;&#3610;&#3633;&#3623;&#3621;&#3635;&#3616;&#3641;)"
            }, {
              "value": "TH-43",
              "name": "Nong Khai (&#3627;&#3609;&#3629;&#3591;&#3588;&#3634;&#3618;)"
            }, {
              "value": "TH-12",
              "name": "Nonthaburi (&#3609;&#3609;&#3607;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-13",
              "name": "Pathum Thani (&#3611;&#3607;&#3640;&#3617;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-94",
              "name": "Pattani (&#3611;&#3633;&#3605;&#3605;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-82",
              "name": "Phang Nga (&#3614;&#3633;&#3591;&#3591;&#3634;)"
            }, {
              "value": "TH-93",
              "name": "Phatthalung (&#3614;&#3633;&#3607;&#3621;&#3640;&#3591;)"
            }, {
              "value": "TH-56",
              "name": "Phayao (&#3614;&#3632;&#3648;&#3618;&#3634;)"
            }, {
              "value": "TH-67",
              "name": "Phetchabun (&#3648;&#3614;&#3594;&#3619;&#3610;&#3641;&#3619;&#3603;&#3660;)"
            }, {
              "value": "TH-76",
              "name": "Phetchaburi (&#3648;&#3614;&#3594;&#3619;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-66",
              "name": "Phichit (&#3614;&#3636;&#3592;&#3636;&#3605;&#3619;)"
            }, {
              "value": "TH-65",
              "name": "Phitsanulok (&#3614;&#3636;&#3625;&#3603;&#3640;&#3650;&#3621;&#3585;)"
            }, {
              "value": "TH-54",
              "name": "Phrae (&#3649;&#3614;&#3619;&#3656;)"
            }, {
              "value": "TH-83",
              "name": "Phuket (&#3616;&#3641;&#3648;&#3585;&#3655;&#3605;)"
            }, {
              "value": "TH-25",
              "name": "Prachin Buri (&#3611;&#3619;&#3634;&#3592;&#3637;&#3609;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-77",
              "name": "Prachuap Khiri Khan (&#3611;&#3619;&#3632;&#3592;&#3623;&#3610;&#3588;&#3637;&#3619;&#3637;&#3586;&#3633;&#3609;&#3608;&#3660;)"
            }, {
              "value": "TH-85",
              "name": "Ranong (&#3619;&#3632;&#3609;&#3629;&#3591;)"
            }, {
              "value": "TH-70",
              "name": "Ratchaburi (&#3619;&#3634;&#3594;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-21",
              "name": "Rayong (&#3619;&#3632;&#3618;&#3629;&#3591;)"
            }, {
              "value": "TH-45",
              "name": "Roi Et (&#3619;&#3657;&#3629;&#3618;&#3648;&#3629;&#3655;&#3604;)"
            }, {
              "value": "TH-27",
              "name": "Sa Kaeo (&#3626;&#3619;&#3632;&#3649;&#3585;&#3657;&#3623;)"
            }, {
              "value": "TH-47",
              "name": "Sakon Nakhon (&#3626;&#3585;&#3621;&#3609;&#3588;&#3619;)"
            }, {
              "value": "TH-11",
              "name": "Samut Prakan (&#3626;&#3617;&#3640;&#3607;&#3619;&#3611;&#3619;&#3634;&#3585;&#3634;&#3619;)"
            }, {
              "value": "TH-74",
              "name": "Samut Sakhon (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3634;&#3588;&#3619;)"
            }, {
              "value": "TH-75",
              "name": "Samut Songkhram (&#3626;&#3617;&#3640;&#3607;&#3619;&#3626;&#3591;&#3588;&#3619;&#3634;&#3617;)"
            }, {
              "value": "TH-19",
              "name": "Saraburi (&#3626;&#3619;&#3632;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-91",
              "name": "Satun (&#3626;&#3605;&#3641;&#3621;)"
            }, {
              "value": "TH-17",
              "name": "Sing Buri (&#3626;&#3636;&#3591;&#3627;&#3660;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-33",
              "name": "Sisaket (&#3624;&#3619;&#3637;&#3626;&#3632;&#3648;&#3585;&#3625;)"
            }, {
              "value": "TH-90",
              "name": "Songkhla (&#3626;&#3591;&#3586;&#3621;&#3634;)"
            }, {
              "value": "TH-64",
              "name": "Sukhothai (&#3626;&#3640;&#3650;&#3586;&#3607;&#3633;&#3618;)"
            }, {
              "value": "TH-72",
              "name": "Suphan Buri (&#3626;&#3640;&#3614;&#3619;&#3619;&#3603;&#3610;&#3640;&#3619;&#3637;)"
            }, {
              "value": "TH-84",
              "name": "Surat Thani (&#3626;&#3640;&#3619;&#3634;&#3625;&#3598;&#3619;&#3660;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-32",
              "name": "Surin (&#3626;&#3640;&#3619;&#3636;&#3609;&#3607;&#3619;&#3660;)"
            }, {
              "value": "TH-63",
              "name": "Tak (&#3605;&#3634;&#3585;)"
            }, {
              "value": "TH-92",
              "name": "Trang (&#3605;&#3619;&#3633;&#3591;)"
            }, {
              "value": "TH-23",
              "name": "Trat (&#3605;&#3619;&#3634;&#3604;)"
            }, {
              "value": "TH-34",
              "name": "Ubon Ratchathani (&#3629;&#3640;&#3610;&#3621;&#3619;&#3634;&#3594;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-41",
              "name": "Udon Thani (&#3629;&#3640;&#3604;&#3619;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-61",
              "name": "Uthai Thani (&#3629;&#3640;&#3607;&#3633;&#3618;&#3608;&#3634;&#3609;&#3637;)"
            }, {
              "value": "TH-53",
              "name": "Uttaradit (&#3629;&#3640;&#3605;&#3619;&#3604;&#3636;&#3605;&#3606;&#3660;)"
            }, {
              "value": "TH-95",
              "name": "Yala (&#3618;&#3632;&#3621;&#3634;)"
            }, {
              "value": "TH-35",
              "name": "Yasothon (&#3618;&#3650;&#3626;&#3608;&#3619;)"
            }],
            "TR": [{
              "value": "TR01",
              "name": "Adana"
            }, {
              "value": "TR02",
              "name": "Ad&#305;yaman"
            }, {
              "value": "TR03",
              "name": "Afyon"
            }, {
              "value": "TR04",
              "name": "A&#287;r&#305;"
            }, {
              "value": "TR05",
              "name": "Amasya"
            }, {
              "value": "TR06",
              "name": "Ankara"
            }, {
              "value": "TR07",
              "name": "Antalya"
            }, {
              "value": "TR08",
              "name": "Artvin"
            }, {
              "value": "TR09",
              "name": "Ayd&#305;n"
            }, {
              "value": "TR10",
              "name": "Bal&#305;kesir"
            }, {
              "value": "TR11",
              "name": "Bilecik"
            }, {
              "value": "TR12",
              "name": "Bing&#246;l"
            }, {
              "value": "TR13",
              "name": "Bitlis"
            }, {
              "value": "TR14",
              "name": "Bolu"
            }, {
              "value": "TR15",
              "name": "Burdur"
            }, {
              "value": "TR16",
              "name": "Bursa"
            }, {
              "value": "TR17",
              "name": "&#199;anakkale"
            }, {
              "value": "TR18",
              "name": "&#199;ank&#305;r&#305;"
            }, {
              "value": "TR19",
              "name": "&#199;orum"
            }, {
              "value": "TR20",
              "name": "Denizli"
            }, {
              "value": "TR21",
              "name": "Diyarbak&#305;r"
            }, {
              "value": "TR22",
              "name": "Edirne"
            }, {
              "value": "TR23",
              "name": "Elaz&#305;&#287;"
            }, {
              "value": "TR24",
              "name": "Erzincan"
            }, {
              "value": "TR25",
              "name": "Erzurum"
            }, {
              "value": "TR26",
              "name": "Eski&#351;ehir"
            }, {
              "value": "TR27",
              "name": "Gaziantep"
            }, {
              "value": "TR28",
              "name": "Giresun"
            }, {
              "value": "TR29",
              "name": "G&#252;m&#252;&#351;hane"
            }, {
              "value": "TR30",
              "name": "Hakkari"
            }, {
              "value": "TR31",
              "name": "Hatay"
            }, {
              "value": "TR32",
              "name": "Isparta"
            }, {
              "value": "TR33",
              "name": "&#304;&#231;el"
            }, {
              "value": "TR34",
              "name": "&#304;stanbul"
            }, {
              "value": "TR35",
              "name": "&#304;zmir"
            }, {
              "value": "TR36",
              "name": "Kars"
            }, {
              "value": "TR37",
              "name": "Kastamonu"
            }, {
              "value": "TR38",
              "name": "Kayseri"
            }, {
              "value": "TR39",
              "name": "K&#305;rklareli"
            }, {
              "value": "TR40",
              "name": "K&#305;r&#351;ehir"
            }, {
              "value": "TR41",
              "name": "Kocaeli"
            }, {
              "value": "TR42",
              "name": "Konya"
            }, {
              "value": "TR43",
              "name": "K&#252;tahya"
            }, {
              "value": "TR44",
              "name": "Malatya"
            }, {
              "value": "TR45",
              "name": "Manisa"
            }, {
              "value": "TR46",
              "name": "Kahramanmara&#351;"
            }, {
              "value": "TR47",
              "name": "Mardin"
            }, {
              "value": "TR48",
              "name": "Mu&#287;la"
            }, {
              "value": "TR49",
              "name": "Mu&#351;"
            }, {
              "value": "TR50",
              "name": "Nev&#351;ehir"
            }, {
              "value": "TR51",
              "name": "Ni&#287;de"
            }, {
              "value": "TR52",
              "name": "Ordu"
            }, {
              "value": "TR53",
              "name": "Rize"
            }, {
              "value": "TR54",
              "name": "Sakarya"
            }, {
              "value": "TR55",
              "name": "Samsun"
            }, {
              "value": "TR56",
              "name": "Siirt"
            }, {
              "value": "TR57",
              "name": "Sinop"
            }, {
              "value": "TR58",
              "name": "Sivas"
            }, {
              "value": "TR59",
              "name": "Tekirda&#287;"
            }, {
              "value": "TR60",
              "name": "Tokat"
            }, {
              "value": "TR61",
              "name": "Trabzon"
            }, {
              "value": "TR62",
              "name": "Tunceli"
            }, {
              "value": "TR63",
              "name": "&#350;anl&#305;urfa"
            }, {
              "value": "TR64",
              "name": "U&#351;ak"
            }, {
              "value": "TR65",
              "name": "Van"
            }, {
              "value": "TR66",
              "name": "Yozgat"
            }, {
              "value": "TR67",
              "name": "Zonguldak"
            }, {
              "value": "TR68",
              "name": "Aksaray"
            }, {
              "value": "TR69",
              "name": "Bayburt"
            }, {
              "value": "TR70",
              "name": "Karaman"
            }, {
              "value": "TR71",
              "name": "K&#305;r&#305;kkale"
            }, {
              "value": "TR72",
              "name": "Batman"
            }, {
              "value": "TR73",
              "name": "&#350;&#305;rnak"
            }, {
              "value": "TR74",
              "name": "Bart&#305;n"
            }, {
              "value": "TR75",
              "name": "Ardahan"
            }, {
              "value": "TR76",
              "name": "I&#287;d&#305;r"
            }, {
              "value": "TR77",
              "name": "Yalova"
            }, {
              "value": "TR78",
              "name": "Karab&#252;k"
            }, {
              "value": "TR79",
              "name": "Kilis"
            }, {
              "value": "TR80",
              "name": "Osmaniye"
            }, {
              "value": "TR81",
              "name": "D&#252;zce"
            }],
            "US": [{
              "value": "AL",
              "name": "Alabama"
            }, {
              "value": "AK",
              "name": "Alaska"
            }, {
              "value": "AZ",
              "name": "Arizona"
            }, {
              "value": "AR",
              "name": "Arkansas"
            }, {
              "value": "CA",
              "name": "California"
            }, {
              "value": "CO",
              "name": "Colorado"
            }, {
              "value": "CT",
              "name": "Connecticut"
            }, {
              "value": "DE",
              "name": "Delaware"
            }, {
              "value": "DC",
              "name": "District Of Columbia"
            }, {
              "value": "FL",
              "name": "Florida"
            }, {
              "value": "GA",
              "name": "Georgia"
            }, {
              "value": "HI",
              "name": "Hawaii"
            }, {
              "value": "ID",
              "name": "Idaho"
            }, {
              "value": "IL",
              "name": "Illinois"
            }, {
              "value": "IN",
              "name": "Indiana"
            }, {
              "value": "IA",
              "name": "Iowa"
            }, {
              "value": "KS",
              "name": "Kansas"
            }, {
              "value": "KY",
              "name": "Kentucky"
            }, {
              "value": "LA",
              "name": "Louisiana"
            }, {
              "value": "ME",
              "name": "Maine"
            }, {
              "value": "MD",
              "name": "Maryland"
            }, {
              "value": "MA",
              "name": "Massachusetts"
            }, {
              "value": "MI",
              "name": "Michigan"
            }, {
              "value": "MN",
              "name": "Minnesota"
            }, {
              "value": "MS",
              "name": "Mississippi"
            }, {
              "value": "MO",
              "name": "Missouri"
            }, {
              "value": "MT",
              "name": "Montana"
            }, {
              "value": "NE",
              "name": "Nebraska"
            }, {
              "value": "NV",
              "name": "Nevada"
            }, {
              "value": "NH",
              "name": "New Hampshire"
            }, {
              "value": "NJ",
              "name": "New Jersey"
            }, {
              "value": "NM",
              "name": "New Mexico"
            }, {
              "value": "NY",
              "name": "New York"
            }, {
              "value": "NC",
              "name": "North Carolina"
            }, {
              "value": "ND",
              "name": "North Dakota"
            }, {
              "value": "OH",
              "name": "Ohio"
            }, {
              "value": "OK",
              "name": "Oklahoma"
            }, {
              "value": "OR",
              "name": "Oregon"
            }, {
              "value": "PA",
              "name": "Pennsylvania"
            }, {
              "value": "RI",
              "name": "Rhode Island"
            }, {
              "value": "SC",
              "name": "South Carolina"
            }, {
              "value": "SD",
              "name": "South Dakota"
            }, {
              "value": "TN",
              "name": "Tennessee"
            }, {
              "value": "TX",
              "name": "Texas"
            }, {
              "value": "UT",
              "name": "Utah"
            }, {
              "value": "VT",
              "name": "Vermont"
            }, {
              "value": "VA",
              "name": "Virginia"
            }, {
              "value": "WA",
              "name": "Washington"
            }, {
              "value": "WV",
              "name": "West Virginia"
            }, {
              "value": "WI",
              "name": "Wisconsin"
            }, {
              "value": "WY",
              "name": "Wyoming"
            }, {
              "value": "AA",
              "name": "Armed Forces (AA)"
            }, {
              "value": "AE",
              "name": "Armed Forces (AE)"
            }, {
              "value": "AP",
              "name": "Armed Forces (AP)"
            }]
          },
          "continent": {
            "BD": "AS",
            "BE": "EU",
            "BF": "AF",
            "BG": "EU",
            "BA": "EU",
            "BB": "NA",
            "WF": "OC",
            "BL": "NA",
            "BM": "NA",
            "BN": "AS",
            "BO": "SA",
            "BH": "AS",
            "BI": "AF",
            "BJ": "AF",
            "BT": "AS",
            "JM": "NA",
            "BV": "AN",
            "BW": "AF",
            "WS": "OC",
            "BQ": "NA",
            "BR": "SA",
            "BS": "NA",
            "JE": "EU",
            "BY": "EU",
            "BZ": "NA",
            "RU": "EU",
            "RW": "AF",
            "RS": "EU",
            "TL": "OC",
            "RE": "AF",
            "TM": "AS",
            "TJ": "AS",
            "RO": "EU",
            "TK": "OC",
            "GW": "AF",
            "GU": "OC",
            "GT": "NA",
            "GS": "AN",
            "GR": "EU",
            "GQ": "AF",
            "GP": "NA",
            "JP": "AS",
            "GY": "SA",
            "GG": "EU",
            "GF": "SA",
            "GE": "AS",
            "GD": "NA",
            "GB": "EU",
            "GA": "AF",
            "SV": "NA",
            "GN": "AF",
            "GM": "AF",
            "GL": "NA",
            "GI": "EU",
            "GH": "AF",
            "OM": "AS",
            "TN": "AF",
            "JO": "AS",
            "HR": "EU",
            "HT": "NA",
            "HU": "EU",
            "HK": "AS",
            "HN": "NA",
            "HM": "AN",
            "VE": "SA",
            "PR": "NA",
            "PS": "AS",
            "PW": "OC",
            "PT": "EU",
            "SJ": "EU",
            "PY": "SA",
            "IQ": "AS",
            "PA": "NA",
            "PF": "OC",
            "PG": "OC",
            "PE": "SA",
            "PK": "AS",
            "PH": "AS",
            "PN": "OC",
            "PL": "EU",
            "PM": "NA",
            "ZM": "AF",
            "EH": "AF",
            "EE": "EU",
            "EG": "AF",
            "ZA": "AF",
            "EC": "SA",
            "IT": "EU",
            "VN": "AS",
            "SB": "OC",
            "ET": "AF",
            "SO": "AF",
            "ZW": "AF",
            "SA": "AS",
            "ES": "EU",
            "ER": "AF",
            "ME": "EU",
            "MD": "EU",
            "MG": "AF",
            "MF": "NA",
            "MA": "AF",
            "MC": "EU",
            "UZ": "AS",
            "MM": "AS",
            "ML": "AF",
            "MO": "AS",
            "MN": "AS",
            "MH": "OC",
            "MK": "EU",
            "MU": "AF",
            "MT": "EU",
            "MW": "AF",
            "MV": "AS",
            "MQ": "NA",
            "MP": "OC",
            "MS": "NA",
            "MR": "AF",
            "IM": "EU",
            "UG": "AF",
            "TZ": "AF",
            "MY": "AS",
            "MX": "NA",
            "IL": "AS",
            "FR": "EU",
            "IO": "AS",
            "SH": "AF",
            "FI": "EU",
            "FJ": "OC",
            "FK": "SA",
            "FM": "OC",
            "FO": "EU",
            "NI": "NA",
            "NL": "EU",
            "NO": "EU",
            "NA": "AF",
            "VU": "OC",
            "NC": "OC",
            "NE": "AF",
            "NF": "OC",
            "NG": "AF",
            "NZ": "OC",
            "NP": "AS",
            "NR": "OC",
            "NU": "OC",
            "CK": "OC",
            "XK": "EU",
            "CI": "AF",
            "CH": "EU",
            "CO": "SA",
            "CN": "AS",
            "CM": "AF",
            "CL": "SA",
            "CC": "AS",
            "CA": "NA",
            "CG": "AF",
            "CF": "AF",
            "CD": "AF",
            "CZ": "EU",
            "CY": "EU",
            "CX": "AS",
            "CR": "NA",
            "CW": "NA",
            "CV": "AF",
            "CU": "NA",
            "SZ": "AF",
            "SY": "AS",
            "SX": "NA",
            "KG": "AS",
            "KE": "AF",
            "SS": "AF",
            "SR": "SA",
            "KI": "OC",
            "KH": "AS",
            "KN": "NA",
            "KM": "AF",
            "ST": "AF",
            "SK": "EU",
            "KR": "AS",
            "SI": "EU",
            "KP": "AS",
            "KW": "AS",
            "SN": "AF",
            "SM": "EU",
            "SL": "AF",
            "SC": "AF",
            "KZ": "AS",
            "KY": "NA",
            "SG": "AS",
            "SE": "EU",
            "SD": "AF",
            "DO": "NA",
            "DM": "NA",
            "DJ": "AF",
            "DK": "EU",
            "VG": "NA",
            "DE": "EU",
            "YE": "AS",
            "DZ": "AF",
            "US": "NA",
            "UY": "SA",
            "YT": "AF",
            "UM": "OC",
            "LB": "AS",
            "LC": "NA",
            "LA": "AS",
            "TV": "OC",
            "TW": "AS",
            "TT": "NA",
            "TR": "AS",
            "LK": "AS",
            "LI": "EU",
            "LV": "EU",
            "TO": "OC",
            "LT": "EU",
            "LU": "EU",
            "LR": "AF",
            "LS": "AF",
            "TH": "AS",
            "TF": "AN",
            "TG": "AF",
            "TD": "AF",
            "TC": "NA",
            "LY": "AF",
            "VA": "EU",
            "VC": "NA",
            "AE": "AS",
            "AD": "EU",
            "AG": "NA",
            "AF": "AS",
            "AI": "NA",
            "VI": "NA",
            "IS": "EU",
            "IR": "AS",
            "AM": "AS",
            "AL": "EU",
            "AO": "AF",
            "AQ": "AN",
            "AS": "OC",
            "AR": "SA",
            "AU": "OC",
            "AT": "EU",
            "AW": "NA",
            "IN": "AS",
            "AX": "EU",
            "AZ": "AS",
            "IE": "EU",
            "ID": "AS",
            "UA": "EU",
            "QA": "AS",
            "MZ": "AF"
          }
        };
      }

      _createClass(LocationDataService, [{
        key: "getCountryName",
        value: function getCountryName(val) {
          var name = '';
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = this.data.countries[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var v = _step5.value;
              if (val == v.value) name = v.name;
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }

          return name;
        }
      }, {
        key: "getStateName",
        value: function getStateName(val, val2) {
          var name = "";

          if (this.data.states[val]) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = this.data.states[val][Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var v = _step6.value;
                if (val2 == v.value) name = v.name;
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          } else name = "other";

          return name;
        }
      }, {
        key: "getStateCode",
        value: function getStateCode(c, s) {
          var name = "";

          if (this.data.states[c]) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = this.data.states[c][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var v = _step7.value;
                if (s == v.name) name = v.value;
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          } else name = "s";

          return name;
        }
      }, {
        key: "getContientCode",
        value: function getContientCode(con) {
          return this.data.continent[con];
        }
      }]);

      return LocationDataService;
    }();

    LocationDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LocationDataService);
    /***/
  },

  /***/
  "./src/providers/shared-data/shared-data.service.ts":
  /*!**********************************************************!*\
    !*** ./src/providers/shared-data/shared-data.service.ts ***!
    \**********************************************************/

  /*! exports provided: SharedDataService */

  /***/
  function srcProvidersSharedDataSharedDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedDataService", function () {
      return SharedDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/themeable-browser/ngx */
    "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
    /* harmony import */


    var _loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js"); // Project Name: IonicEcommerce
    // Project URI: http://ionicecommerce.com
    // Author: VectorCoder Team
    // Author URI: http://vectorcoder.com/


    var SharedDataService = /*#__PURE__*/function () {
      function SharedDataService(http, config, storage, loading, events, platform, spinnerDialog, oneSignal, alertCtrl, toastCtrl, themeableBrowser, applicationRef, splashScreen) {
        var _this25 = this;

        _classCallCheck(this, SharedDataService);

        this.http = http;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.events = events;
        this.platform = platform;
        this.spinnerDialog = spinnerDialog;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.themeableBrowser = themeableBrowser;
        this.applicationRef = applicationRef;
        this.splashScreen = splashScreen;
        this.banners = [];
        this.tab1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.vendors = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.allCategories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.categories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.subCategories = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.customerData = {};
        this.recentViewedProducts = new Array();
        this.wishListProducts = new Array();
        this.cartProducts = new Array();
        this.couponArray = new Array();
        this.wishList = new Array();
        this.tempdata = {};
        this.dir = "ltr";
        this.selectedFooterPage = "HomePage";
        this.cartTempProducts = [];
        this.translationListArray = [];
        this.billing = {
          first_name: '',
          last_name: '',
          company: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          postcode: '',
          country: '',
          email: '',
          phone: ''
        };
        this.billingCountryName = "";
        this.billingStateName = "";
        this.shipping = {
          first_name: '',
          last_name: '',
          company: '',
          address_1: '',
          address_2: '',
          city: '',
          state: '',
          postcode: '',
          country: ''
        };
        this.shippingCountryName = "";
        this.shippingStateName = "";
        this.shipping_lines = [];
        this.listTaxRates = [];
        this.sameAddress = false;
        this.checkOutPageText = "Place Your Order";
        this.device = '';
        this.attributes = [];
        this.headerHexColor = "#51688F";
        this.singleProductPageData = [];
        this.storePageData = [];
        this.splashScreenHide = false; //Function calcualte the total items of cart

        this.cartTotalItems = function () {
          this.events.publish('cartChange');
          var total = 0;
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = this.cartProducts[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var value = _step8.value;
              total += parseInt(value.quantity);
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          this.cartquantity = total; // this.applicationRef.tick();

          return total;
        };

        this.http.get('assets/i18n/' + localStorage.languageCode + ".json").subscribe(function (data) {
          _this25.translationListArray = data;

          _this25.applicationRef.tick();
        });
        events.subscribe('settingsLoaded', function () {
          _this25.onStart();
        }); //getting translation of the 

        this.translateString(this.checkOutPageText).then(function (res) {
          _this25.checkOutPageText = res;
        }); //update settings before calling
        //getting recent viewed items from local storage

        storage.get('customerData').then(function (val) {
          if (val != null || val != undefined) _this25.customerData = val;
        }); //getting recent viewed items from local storage

        storage.get('recentViewedProducts').then(function (val) {
          if (val != null) _this25.recentViewedProducts = val;
        }); //getting cart from local storage

        storage.get('cartProducts').then(function (val) {
          if (val != null) _this25.cartProducts = val;

          _this25.cartTotalItems();
        });
        this.cartTotalItems(); //getting wishList items from local storage

        storage.get('wishListProducts').then(function (val) {
          if (val != null) _this25.wishListProducts = val; // console.log(val);
        }); //---------------- end -----------------
      }

      _createClass(SharedDataService, [{
        key: "hideSplashScreen",
        value: function hideSplashScreen() {
          if (this.platform.is('cordova')) {
            if (!this.splashScreenHide) {
              this.splashScreen.hide();
              this.splashScreenHide = true;
            }
          }
        }
      }, {
        key: "onStart",
        value: function onStart() {
          var _this26 = this;

          //banners
          this.config.getWithUrl(this.config.url + '/api/appsettings/get_all_banners/?insecure=cool').then(function (data) {
            _this26.banners = data.data;
          }); // //getting tab 1 products?status=publish

          this.config.getWoo("products?status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this26.tab1 = data;

            _this26.applicationRef.tick();
          }); //getting tab 2

          this.config.getWoo("products?on_sale=true&status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this26.tab2 = data;

            _this26.applicationRef.tick();
          }); //getting tab 3

          this.config.getWoo("products?featured=true&status=publish" + "&" + this.config.productsArguments).then(function (data) {
            _this26.tab3 = data;

            _this26.applicationRef.tick();
          });
          var url = this.config.url + '/wp-json/wp/v2/pages/';

          if (this.config.appSettings.about_page_id != undefined) {
            var ids = this.config.appSettings.about_page_id + "," + this.config.appSettings.refund_page_id + "," + this.config.appSettings.terms_page_id + "," + this.config.appSettings.privacy_page_id;
            url = url + '?include=' + ids;
          } //content pages


          this.config.getWithUrl(url).then(function (data) {
            var d = data;
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = d[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var value = _step9.value;

                if (_this26.config.appSettings.about_page_id == value.id) {
                  _this26.config.aboutUs = value.content.rendered;
                }

                if (_this26.config.appSettings.refund_page_id == value.id) _this26.config.refundPolicy = value.content.rendered;
                if (_this26.config.appSettings.terms_page_id == value.id) _this26.config.termServices = value.content.rendered;
                if (_this26.config.appSettings.privacy_page_id == value.id) _this26.config.privacyPolicy = value.content.rendered;
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                  _iterator9.return();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }
          }); //getting all allCategories

          this.getAllCategories(1);
        }
      }, {
        key: "getVendorList",
        value: function getVendorList() {
          var _this27 = this;

          if (this.config.showVendorInfo) {
            this.config.getWithUrl(this.config.url + "/api/appsettings/get_featured_dokan_vendors_list/?insecure=cool").then(function (data) {
              if (_this27.vendors[0] == 1) _this27.vendors = [];
              var _iteratorNormalCompletion10 = true;
              var _didIteratorError10 = false;
              var _iteratorError10 = undefined;

              try {
                for (var _iterator10 = data.data[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                  var d = _step10.value;
                  if (d.banner == false) d.banner = "assets/placeholder-v.png"; //;

                  if (d.meta[0].store_name != '') d.name = d.meta[0].store_name;else d.name = d.first_name + " " + d.last_name; //console.log(d.name);

                  _this27.vendors.push(d);
                }
              } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                    _iterator10.return();
                  }
                } finally {
                  if (_didIteratorError10) {
                    throw _iteratorError10;
                  }
                }
              }

              _this27.applicationRef.tick();
            }); //console.log("dokan is enabled");
          } else if (this.config.showWcVendorInfo) {
            this.config.getWithUrl(this.config.url + "/api/appsettings/get_featured_wcvendors_list/?insecure=cool").then(function (data) {
              if (_this27.vendors[0] == 1) _this27.vendors = []; //console.log(data.data)

              if (data.data == null) data.data = [];
              var _iteratorNormalCompletion11 = true;
              var _didIteratorError11 = false;
              var _iteratorError11 = undefined;

              try {
                for (var _iterator11 = data.data[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                  var d = _step11.value;
                  if (d.banner == false) d.banner = "assets/placeholder-wc.png"; //;

                  if (d.meta.pv_shop_name != '') d.name = d.meta.pv_shop_name;else d.name = d.first_name + " " + d.last_name; // console.log(d.name);

                  _this27.vendors.push(d);
                }
              } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                    _iterator11.return();
                  }
                } finally {
                  if (_didIteratorError11) {
                    throw _iteratorError11;
                  }
                }
              }

              _this27.applicationRef.tick();
            });
          }
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories(page) {
          var _this28 = this;

          //if (dat.length != 0) { this.getAllTaxRates(page + 1); }
          this.config.getWoo("products/categories?per_page=50&page=" + page + "&" + this.config.productsArguments).then(function (data) {
            var dat = data;

            if (_this28.allCategories[0] == 1) {
              _this28.allCategories = [];
              _this28.categories = [];
              _this28.subCategories = [];
            }

            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = dat[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var value = _step12.value;

                if (value.count != 0) {
                  value.name = _this28.removeHtmlEntites(value.name);

                  _this28.allCategories.push(value);

                  if (value.parent == 0) _this28.categories.push(value);else _this28.subCategories.push(value);
                }
              }
            } catch (err) {
              _didIteratorError12 = true;
              _iteratorError12 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                  _iterator12.return();
                }
              } finally {
                if (_didIteratorError12) {
                  throw _iteratorError12;
                }
              }
            }

            if (dat.length == 50) {
              _this28.getAllCategories(page + 1);
            }

            if (dat.length == 0) {
              _this28.events.publish("openDeepLink", "openCategoryInShop");
            }

            _this28.applicationRef.tick();
          });
        }
      }, {
        key: "removeHtmlEntites",
        value: function removeHtmlEntites(value) {
          var multiple = {
            '&nbsp;': ' ',
            '&lt;': '<',
            '&gt;': '>',
            '&amp;': '&',
            '&quot;': '"',
            '&apos;': '\'',
            '&cent;': '¢',
            '&pound;': '£',
            '&yen;': '¥',
            '&euro;': '€',
            '&copy;': '©',
            '&reg;': '®',
            '&#160;': ' ',
            '&#60;': '<',
            '&#62;': '>',
            '&#38;': '&',
            '&#34;': '"',
            '&#39;': '\'',
            '&#162;': '¢',
            '&#163;': '£',
            '&#165;': '¥',
            '&#8364;': '€',
            '&#169;': '©',
            '&#174;': '®'
          };

          for (var char in multiple) {
            var before = char;
            var after = multiple[char];
            var pattern = new RegExp(before, 'g');
            value = value.replace(pattern, after);
          }

          return value;
        } //adding into recent array products

      }, {
        key: "addToRecent",
        value: function addToRecent(p) {
          var found = false;
          var _iteratorNormalCompletion13 = true;
          var _didIteratorError13 = false;
          var _iteratorError13 = undefined;

          try {
            for (var _iterator13 = this.recentViewedProducts[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
              var value = _step13.value;

              if (value.id == p.id) {
                found = true;
              }
            }
          } catch (err) {
            _didIteratorError13 = true;
            _iteratorError13 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                _iterator13.return();
              }
            } finally {
              if (_didIteratorError13) {
                throw _iteratorError13;
              }
            }
          }

          if (found == false) {
            this.recentViewedProducts.push(p);
            this.storage.set('recentViewedProducts', this.recentViewedProducts);
          }
        } //removing from recent array products

      }, {
        key: "removeRecent",
        value: function removeRecent(p) {
          var _this29 = this;

          this.recentViewedProducts.forEach(function (value, index) {
            if (value.id == p.id) {
              _this29.recentViewedProducts.splice(index, 1);

              _this29.storage.set('recentViewedProducts', _this29.recentViewedProducts);
            }
          });
          this.events.publish('recentDeleted');
        } //adding into cart array products

      }, {
        key: "addToCart",
        value: function addToCart(product, variation, quantity, metaData) {
          if (!this.checkCart(product, quantity)) return 0;
          if (this.alreadyInCart(product, variation, quantity)) return 0;
          var p = {};
          p.product_id = product.id;
          p.name = product.name;
          if (quantity == null || quantity == "null") p.quantity = 1;else {
            p.quantity = quantity;
            console.log(quantity);
            console.log("quantity not null");
          }
          ;
          var seconds = new Date().getTime();
          p.cart_id = product.id + seconds;
          p.image = product.images[0].src; //console.log(p.image)

          p.stock_quantity = product.stock_quantity;
          p.tax_class = product.tax_class;
          p.tax_status = product.tax_status;
          p.price = product.price;
          p.price_html = product.price_html;
          p.subtotal = parseFloat(product.price) * parseInt(p.quantity);
          p.total = parseFloat(product.price) * parseInt(p.quantity);
          p.on_sale = product.on_sale;
          p.categories = product.categories;
          if (metaData != null) p.meta_data = metaData;
          p.sold_individually = product.sold_individually;

          if (product.type == 'variable' && variation != null) {
            p.variation_id = variation.id;
            p.price = parseFloat(variation.price) * parseInt(p.quantity);
            p.subtotal = parseFloat(variation.price) * parseInt(p.quantity);
            p.total = parseFloat(variation.price) * parseInt(p.quantity);
            p.name = variation.name;
            p.stock_quantity = variation.stock_quantity;
            p.tax_status = variation.tax_status;

            if (variation.images[0].src.indexOf('placeholder') == -1) {
              p.image = variation.images[0].src; //console.log(variation.images[0].src)
            }
          }

          console.log(p);
          this.cartProducts.push(p);
          this.storage.set('cartProducts', this.cartProducts);
          this.cartTotalItems();
          this.applicationRef.tick(); // console.log(this.cartProducts);
          //console.log(this.cartProducts);

          this.toast("Added To Cart!");
        }
      }, {
        key: "checkCart",
        value: function checkCart(p, quantity) {
          var name = null;
          var onlyOneAllowed = true;
          var quantityCheck = true; //check for only one item is allowed

          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = this.cartProducts[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var value = _step14.value;

              if (value.sold_individually == true && p.id == value.product_id) {
                onlyOneAllowed = false;
                name = value.name;
              }
            }
          } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                _iterator14.return();
              }
            } finally {
              if (_didIteratorError14) {
                throw _iteratorError14;
              }
            }
          }

          if (onlyOneAllowed == false) this.showAlertWithTitle(name, "Only One Item Allowed"); //check for product quantity

          if (quantity == null) quantity = 1;
          if (p.stock_quantity == null || p.stock_quantity > quantity) quantityCheck = true;else if (p.stock_quantity < quantity) {
            quantityCheck = false;
            this.showAlert("Product Quantity is Limited!");
          }
          if (onlyOneAllowed && quantityCheck) return true;else return false;
        }
      }, {
        key: "alreadyInCart",
        value: function alreadyInCart(p, vId, quantity) {
          var count = 0;
          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = this.cartProducts[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var value = _step15.value;

              //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
              if (p.type != 'variable' && value.product_id == p.id) {
                count++;
                value.quantity = parseInt(value.quantity) + parseInt(quantity);
              } else if (value.product_id == p.id && value.variation_id == vId.id) {
                count++;
                value.quantity = parseInt(value.quantity) + parseInt(quantity);
              }
            }
          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                _iterator15.return();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }

          this.storage.set('cartProducts', this.cartProducts);
          this.cartTotalItems();
          if (count != 0) return true;else return false;
        } //removing from recent array products

      }, {
        key: "removeCart",
        value: function removeCart(p) {
          //console.log(value);
          this.cartProducts = p;
          this.storage.set('cartProducts', this.cartProducts); // this.storage.get('cartProducts').then((val) => {
          //   //console.log(val);
          // });

          this.cartTotalItems();
        }
      }, {
        key: "emptyCart",
        value: function emptyCart() {
          this.cartProducts = [];
          this.storage.set('cartProducts', this.cartProducts);
          this.cartTotalItems();
        }
      }, {
        key: "emptyRecentViewed",
        value: function emptyRecentViewed() {
          this.recentViewedProducts = [];
          this.storage.set('recentViewedProducts', this.recentViewedProducts);
        }
      }, {
        key: "productsTotal",
        value: function productsTotal() {
          var total = 0;
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = this.cartProducts[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var value = _step16.value;
              total = total + parseFloat(value.total);
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                _iterator16.return();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }

          return total;
        }
      }, {
        key: "removeWishList",
        value: function removeWishList(p) {
          var _this30 = this;

          this.wishListProducts.forEach(function (value, index) {
            if (value.id == p.id) {
              _this30.wishListProducts.splice(index, 1);

              _this30.storage.set('wishListProducts', _this30.wishListProducts);
            }
          });
          this.events.publish('wishListUpdate', p.id, 0);
          this.toast("Removed From Wish List!");
          this.applicationRef.tick();
        }
      }, {
        key: "addWishList",
        value: function addWishList(p) {
          this.wishListProducts.push(p);
          this.storage.set('wishListProducts', this.wishListProducts);
          this.events.publish('wishListUpdate', p.id, 1);
          this.toast("Added To Wish List!");
          this.applicationRef.tick();
        }
      }, {
        key: "login",
        value: function login(data) {
          console.log(data);
          this.customerData = data;
          this.storage.set('customerData', this.customerData);
          this.subscribePush();
          this.events.publish("updateSideMenu");
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.loading.autoHide(500);
          this.customerData = {};
          this.storage.set('customerData', this.customerData);
          this.resetData();
          this.events.publish("updateSideMenu"); // this.fb.logout();
        } //============================================================================================
        //getting token and passing to server

      }, {
        key: "subscribePush",
        value: function subscribePush() {
          if (this.platform.is('cordova') && this.config.onesignalAppId != "") {
            this.oneSignal.startInit(this.config.onesignalAppId, this.config.onesignalSenderId);
            this.oneSignal.endInit();
            this.oneSignal.getIds().then(function (data) {// alert("registration" + data.userId);
              // console.log(data.userId);
              //this.storage.set('registrationId', token);
            });
          }
        }
      }, {
        key: "showAd",
        value: function showAd() {
          if (this.platform.is('cordova')) {
            this.events.publish('showAd');
          }
        }
      }, {
        key: "orderComplete",
        value: function orderComplete() {
          this.cartProducts = [];
          this.couponArray = [];
          this.storage.set('cartProducts', []);
          this.shipping_lines = [];
          this.cartTotalItems();
          console.log("order complete");
        } // <!-- 2.0 updates -->

      }, {
        key: "onePageCheckOut",
        value: function onePageCheckOut() {
          var customer_id = 0;
          var token = null;
          var biling = this.billing;
          var shiping = this.shipping;

          if (this.customerData.id != null) {
            customer_id = this.customerData.id;
            token = this.customerData.cookie;
            biling = this.customerData.billing;
            shiping = this.customerData.shipping;
          }

          var onePage = this.config.checkOutPage;
          var data = {
            token: token,
            billing_info: biling,
            shipping_info: shiping,
            products: this.getProducts(),
            //shipping_ids: this.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            //sameAddress: this.sameAddress
            one_page: onePage,
            platform: this.device
          };
          console.log(data);
          this.openCheckoutWebview(data);
        } //=================================================================================================================================
        // <!-- 2.0 updates -->

      }, {
        key: "getProducts",
        value: function getProducts() {
          var data = [];
          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = this.cartProducts[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var v = _step17.value;
              var obj = {
                quantity: v.quantity,
                product_id: v.product_id,
                total: v.total.toString()
              };
              if (v.variation_id) Object.assign(obj, {
                variation_id: v.variation_id
              }); //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })

              data.push(obj);
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                _iterator17.return();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }

          return data;
        } //=================================================================================================================================
        //Object.assign(c, data
        // <!-- 2.0 updates -->

      }, {
        key: "getCoupons",
        value: function getCoupons() {
          var data = [];
          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = this.couponArray[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var v = _step18.value;
              data.push({
                code: v.code,
                discount: v.amount
              });
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                _iterator18.return();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }

          return data;
        } //=================================================================================================================================
        // <!-- 2.0 updates -->

      }, {
        key: "getShippingLines",
        value: function getShippingLines() {
          var data = [];
          var _iteratorNormalCompletion19 = true;
          var _didIteratorError19 = false;
          var _iteratorError19 = undefined;

          try {
            for (var _iterator19 = this.shipping_lines[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
              var v = _step19.value;
              data.push({
                code: v.code,
                discount: v.amount
              });
            }
          } catch (err) {
            _didIteratorError19 = true;
            _iteratorError19 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                _iterator19.return();
              }
            } finally {
              if (_didIteratorError19) {
                throw _iteratorError19;
              }
            }
          }

          return data;
        }
      }, {
        key: "resetData",
        value: function resetData() {
          this.billing = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: '',
            email: '',
            phone: ''
          };
          this.billingCountryName = "";
          this.billingStateName = "";
          this.shipping = {
            first_name: '',
            last_name: '',
            company: '',
            address_1: '',
            address_2: '',
            city: '',
            state: '',
            postcode: '',
            country: ''
          };
          this.shippingCountryName = "";
          this.shippingStateName = "";
        }
      }, {
        key: "toast",
        value: function toast(msg) {
          var _this31 = this;

          this.translateString(msg).then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this31, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var toast;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.toastCtrl.create({
                        message: res,
                        duration: 2500,
                        position: 'bottom'
                      });

                    case 2:
                      toast = _context13.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          });
        }
      }, {
        key: "uploadDataToServer",
        value: function uploadDataToServer(data) {
          var _this32 = this;

          this.loading.show(); // var uri = encodeURIComponent(JSON.stringify(data));
          // let d = { "order_link": data };

          return new Promise(function (resolve) {
            _this32.http.post(_this32.config.url + '/api/appsettings/ionic_data_link/?insecure=cool', data).subscribe(function (dat) {
              console.log(dat);
              resolve(dat);

              _this32.loading.hide();
            });
          });
        } //=================================================================================================================================

      }, {
        key: "openCheckoutWebview",
        value: function openCheckoutWebview(data) {
          var _this33 = this;

          var options = {
            statusbar: {
              color: this.headerHexColor
            },
            toolbar: {
              height: 44,
              color: this.headerHexColor
            },
            title: {
              color: '#ffffff',
              staticText: this.checkOutPageText,
              showPageTitle: false
            },
            closeButton: {
              wwwImage: 'assets/close.png',
              align: 'right',
              event: 'closePressed'
            },
            backButton: {
              wwwImage: 'assets/back.png',
              align: 'left' //event: 'closePressed'

            },
            backButtonCanClose: true
          };
          this.uploadDataToServer(data).then(function (id) {
            console.log("id from data = " + id);

            var b = _this33.themeableBrowser.create(_this33.config.url + "/mobile-checkout/?order_id=" + id, '_blank', options);

            var orderPlaced = false;
            b.on('loadstart').subscribe(function (res) {
              _this33.translateString('Loading').then(function (res) {
                _this33.spinnerDialog.show("", res, true, {
                  overlayOpacity: 1.00
                });

                setTimeout(function () {
                  _this33.spinnerDialog.hide();
                }, 5000);
              });

              if (res.url.indexOf('order-received') != -1) {
                console.log(res.url);
                orderPlaced = true;
                b.close();

                _this33.events.publish('openThankYouPage');
              } else if (res.url.indexOf('cancel_order=true') != -1) {
                b.close();
              }
            });
            b.on('closePressed').subscribe(function (res) {
              b.close();
            });
            b.on('loadstop').subscribe(function (res) {
              console.log('loadstop');
            });
            b.on('exit').subscribe(function (res) {
              if (orderPlaced) _this33.events.publish('openThankYouPage');
            });
          });
        }
      }, {
        key: "checkAvatar",
        value: function checkAvatar() {
          var result = "";

          if (this.customerData.id != null) {
            if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') != -1) {
              result = "avatar";
            } else if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') == -1) {
              result = "image";
            }
          } else result = "false";

          return result;
        }
      }, {
        key: "getNameFirstLetter",
        value: function getNameFirstLetter() {
          return this.customerData.first_name.charAt(0);
        } //categories page

      }, {
        key: "getCategoriesPageItems",
        value: function getCategoriesPageItems(parent) {
          var c = [];
          if (parent == undefined) c = this.categories;else {
            var _iteratorNormalCompletion20 = true;
            var _didIteratorError20 = false;
            var _iteratorError20 = undefined;

            try {
              for (var _iterator20 = this.allCategories[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                var v = _step20.value;

                if (v.parent == parent) {
                  c.push(v);
                }
              }
            } catch (err) {
              _didIteratorError20 = true;
              _iteratorError20 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                  _iterator20.return();
                }
              } finally {
                if (_didIteratorError20) {
                  throw _iteratorError20;
                }
              }
            }
          }
          return c;
        } // translation services

      }, {
        key: "translateString",
        value: function translateString(value) {
          var _this34 = this;

          return new Promise(function (resolve) {
            resolve(_this34.translationListArray[value]);
          });
        }
      }, {
        key: "translateArray",
        value: function translateArray(value) {
          var _this35 = this;

          return new Promise(function (resolve) {
            var tempArray = [];
            value.forEach(function (element) {
              if (_this35.translationListArray[element] != undefined) tempArray[element] = _this35.translationListArray[element];else tempArray[element] = element;
            });
            resolve(tempArray);
          });
        } //=================================================

      }, {
        key: "showAlert",
        value: function showAlert(text) {
          var _this36 = this;

          this.translateArray([text, "ok", "Alert"]).then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this36, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var alert;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      console.log(res);
                      _context14.next = 3;
                      return this.alertCtrl.create({
                        header: res["Alert"],
                        message: res[text],
                        buttons: [res["ok"]]
                      });

                    case 3:
                      alert = _context14.sent;
                      _context14.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          });
        }
      }, {
        key: "showAlertWithTitle",
        value: function showAlertWithTitle(text, title) {
          var _this37 = this;

          this.translateArray([text, "ok", title]).then(function (res) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this37, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var alert;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.alertCtrl.create({
                        header: res[title],
                        message: res[text],
                        buttons: [res["ok"]]
                      });

                    case 2:
                      alert = _context15.sent;
                      _context15.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          });
        }
      }]);

      return SharedDataService;
    }();

    SharedDataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"]
      }, {
        type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }, {
        type: _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["ThemeableBrowser"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"]
      }];
    };

    SharedDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _loading_loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_9__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"], _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["ThemeableBrowser"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"]])], SharedDataService);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/morel/Bureau/solution android dollars bijoux/App Source Code/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map