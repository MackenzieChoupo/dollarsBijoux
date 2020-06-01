function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{'Mon panier'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge>{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid class=\"ion-no-padding grid-empty\" *ngIf=\"products.length==0 && loadingServerData\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"basket\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Votre panier est vide!'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continuer les achats!'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button color=\"secondary\" (click)=\"openProductsPage()\">{{'Explorer'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card class=\"ion-padding\" *ngFor=\"let product of products\">\n    <ion-card-header class=\"ion-no-padding\">\n      <ion-card-subtitle>\n        <h3> {{product.name}} </h3>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row>\n          <ion-col size=\"3\">\n            <ion-img src=\"{{product.image}}\"></ion-img>\n          </ion-col>\n          <ion-col class=\"col-price\" size=\"5\">\n            <p>{{'Prix' |translate}}</p>\n            <p>{{'Quantité' |translate}}</p>\n            <p><b>{{'Sous Total' |translate}}</b></p>\n          </ion-col>\n          <ion-col class=\"col-price-ori\" size=\"4\">\n            <p class=\"para-del\" [innerHTML]=\"product.price_html\"></p>\n            <div class=\"div-btn\">\n              <ion-button size=\"small\" fill=\"outline\" (click)=\"qunatityMinus(product);\"\n                *ngIf=\"!product.sold_individually\">\n                <p>-</p>\n              </ion-button>\n              <span>{{product.quantity}}</span>\n              <ion-button class=\"add-btn\" size=\"small\" fill=\"outline\" (click)=\"qunatityPlus(product);\"\n                *ngIf=\"!product.sold_individually\">\n                <p>+</p>\n              </ion-button>\n            </div>\n            <br /><br />\n            <p class=\"para-price-ori\">{{product.subtotal | curency}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let att of product.meta_data\">\n          <ion-col size=\"6\">{{att.key}}&nbsp;:</ion-col>\n          <ion-col size=\"6\">{{att.value}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"2.5\">\n            <ion-button color=\"secondary\" (click)=\"getSingleProductDetail(product.product_id)\">{{'View' | translate}}</ion-button>\n          </ion-col>\n          <ion-col size=\"8.5\">\n            <ion-button fill=\"clear\" color=\"danger\" (click)=\"removeCart(product.cart_id);\">{{'Remove' | translate}}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <div *ngIf=\"products.length!=0\">\n    <ion-card class=\"card-product\" *ngFor=\"let coupon of shared.couponArray\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Code Promo'|translate}}\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            {{coupon.code}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Montant du code'|translate}}\n          </ion-col>\n          <ion-col size=\"6\" class=\"ion-text-right\">\n            {{coupon.amount| curency}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" *ngIf=\"coupon.discount_type == 'percent'\">\n            {{'A percentage discount for the entire cart'|translate}}\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"coupon.discount_type == 'fixed_cart'\">\n            {{'A fixed total discount for the entire cart'|translate}}\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"coupon.discount_type == 'fixed_product'\">\n            {{'A fixed total discount for selected products only'|translate}}\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"coupon.discount_type == 'percent_product'\">\n            {{'A percentage discount for selected products only'|translate}}\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button small color=\"secondary\" (click)=\"deleteCoupon(coupon.code)\">{{'Retirer'|translate}}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"ion-padding\">\n      <ion-card-header class=\"ion-no-padding\">\n        <ion-card-subtitle>\n          <h3 id=\"copounlist\" *ngIf=\"!config.appInProduction\" (click)=\"couponslist()\">{{'Listes de codes promo'|translate}}\n          </h3>\n        </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-input placeholder=\"{{'coupon code'|translate}}\" [(ngModel)]=\"c\"></ion-input>\n          <ion-button color=\"secondary\" slot=\"end\" [disabled]=\"c==''\" (click)=\"getCoupon(c)\">{{'Appliquer'|translate}}\n          </ion-button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <ion-card *ngIf=\"products.length!=0\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'SousTotal'|translate}}\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          {{subtotal| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Remise'|translate}}\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          - {{(subtotal-total)| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Total'|translate}}\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          {{total| curency}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer *ngIf=\"products.length!=0\">\n  <ion-button expand=\"full\" solid block color=\"secondary\" (click)=\"proceedToCheckOut()\">\n    {{'Proceder au paiement'|translate}}\n  </ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/cart/cart.module.ts":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.module.ts ***!
    \*************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
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


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/cart/cart.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts"); // For Translation Language


    var routes = [{
      path: '',
      component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }];

    var CartPageModule = function CartPageModule() {
      _classCallCheck(this, CartPageModule);
    };

    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/cart/cart.page.scss":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .grid-empty {\n  margin-top: 50%;\n}\nion-content .grid-empty ion-row ion-col {\n  text-align: center;\n}\nion-content .grid-empty ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: lightgrey;\n}\nion-content .grid-empty ion-row ion-col ion-button {\n  --border-radius: 0px;\n}\nion-content .grid-empty ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n  margin-bottom: 6px;\n}\nion-content .grid-empty ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\nion-content ion-card {\n  padding-top: 10px;\n  padding-left: 10px;\n}\nion-content ion-card ion-card-header {\n  border-bottom: solid lightgray;\n  height: 30px;\n  border-width: 0.2px;\n}\nion-content ion-card ion-card-header ion-card-subtitle h3 {\n  font-size: 15px;\n  font-weight: bold;\n  margin-top: 0;\n}\nion-content ion-card ion-card-header ion-card-subtitle #copounlist {\n  cursor: pointer;\n  color: var(--ion-color-secondary);\n  text-decoration: underline;\n}\nion-content ion-card ion-card-content {\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n}\nion-content ion-card ion-card-content ion-grid {\n  color: black;\n  margin: 0;\n}\nion-content ion-card ion-card-content ion-grid ion-row ion-col ion-img {\n  margin: 9px;\n  margin-left: 0;\n}\nion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) {\n  border-top: solid lightgray;\n  height: 30px;\n  border-width: 0.2px;\n}\nion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:first-child {\n  text-align: right;\n}\nion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:first-child ion-button {\n  height: 30px;\n  width: 90%;\n  float: left;\n  --border-radius: 1px;\n}\nion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:nth-child(2) {\n  text-align: left;\n}\nion-content ion-card ion-card-content ion-grid ion-row:nth-child(2) ion-col:nth-child(2) ion-button {\n  height: 30px;\n  width: 30%;\n}\n.col-price p {\n  text-align: left;\n  margin-bottom: 8px;\n}\n.col-price p:first-child {\n  margin-bottom: 6px;\n}\n.col-price p:nth-child(3) {\n  margin-bottom: 0;\n}\n.col-price-ori {\n  padding-right: 0;\n}\n.add-btn {\n  float: right;\n}\n.para-del {\n  text-align: right;\n}\n.para-del del {\n  float: left;\n}\n.div-btn ion-button {\n  --color: var(--ion-color-primary);\n  --border-color: var(--ion-color-primary);\n  --border-radius: 0px;\n  width: 25%;\n  height: 25px;\n}\n.div-btn ion-button:first-child {\n  float: left;\n}\n.div-btn ion-button:first-child p {\n  font-size: 35px;\n}\n.div-btn ion-button:nth-child(3) {\n  float: right;\n}\n.div-btn ion-button:nth-child(3) p {\n  font-size: 20px;\n}\n.div-btn span {\n  position: absolute;\n  z-index: 1;\n  left: 50%;\n  top: 34px;\n}\n.para-price-ori {\n  width: 100%;\n  text-align: end;\n  margin-top: -9px;\n}\nion-footer .toolbar {\n  padding-left: 10px;\n}\nion-footer ion-button {\n  height: 45px;\n  margin: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFBO0FDREo7QURHTTtFQUNFLGtCQUFBO0FDRFI7QURFUTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQ0FWO0FERVE7RUFDRSxvQkFBQTtBQ0FWO0FERVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBVjtBREVRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQVY7QURLRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNISjtBRElJO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGTjtBRElRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0ZWO0FESVE7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtBQ0ZWO0FETUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0pOO0FES007RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQ0hSO0FETVk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0pkO0FET1U7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0xaO0FET2M7RUFDRSxpQkFBQTtBQ0xoQjtBRE1nQjtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDSmxCO0FET2M7RUFDRSxnQkFBQTtBQ0xoQjtBRE1nQjtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDSmxCO0FEZUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDWko7QURhSTtFQUNFLGtCQUFBO0FDWE47QURhSTtFQUNFLGdCQUFBO0FDWE47QURlQTtFQUNFLGdCQUFBO0FDWkY7QURjQTtFQUNFLFlBQUE7QUNYRjtBRGFBO0VBQ0UsaUJBQUE7QUNWRjtBRFdFO0VBQ0UsV0FBQTtBQ1RKO0FEYUU7RUFDRSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1ZKO0FEV0k7RUFDRSxXQUFBO0FDVE47QURVTTtFQUNFLGVBQUE7QUNSUjtBRFdJO0VBQ0UsWUFBQTtBQ1ROO0FEVU07RUFDRSxlQUFBO0FDUlI7QURZRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDVko7QURhQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWRjtBRGFFO0VBQ0Usa0JBQUE7QUNWSjtBRFlFO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgLmdyaWQtZW1wdHkge1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICB6b29tOiAzLjk7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDAuMnB4O1xyXG4gICAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjY29wb3VubGlzdCB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICBpb24tZ3JpZCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBpb24tcm93IHtcclxuICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDlweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjJweDtcclxuICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jb2wtcHJpY2Uge1xyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5jb2wtcHJpY2Utb3JpIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbi5hZGQtYnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnBhcmEtZGVsIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBkZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG59XHJcbi5kaXYtYnRuIHtcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDM0cHg7XHJcbiAgfVxyXG59XHJcbi5wYXJhLXByaWNlLW9yaSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIG1hcmdpbi10b3A6IC05cHg7XHJcbn1cclxuaW9uLWZvb3RlciB7XHJcbiAgLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1jb250ZW50IC5ncmlkLWVtcHR5IHtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuaW9uLWNvbnRlbnQgLmdyaWQtZW1wdHkgaW9uLXJvdyBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmdyaWQtZW1wdHkgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgem9vbTogMy45O1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuaW9uLWNvbnRlbnQgLmdyaWQtZW1wdHkgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkLWVtcHR5IGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWNvbnRlbnQgLmdyaWQtZW1wdHkgaW9uLXJvdyBpb24tY29sIGg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIGxpZ2h0Z3JheTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItd2lkdGg6IDAuMnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIGgzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSAjY29wb3VubGlzdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tZ3JpZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWltZyB7XG4gIG1hcmdpbjogOXB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdzpudGgtY2hpbGQoMikge1xuICBib3JkZXItdG9wOiBzb2xpZCBsaWdodGdyYXk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXdpZHRoOiAwLjJweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdzpudGgtY2hpbGQoMikgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tZ3JpZCBpb24tcm93Om50aC1jaGlsZCgyKSBpb24tY29sOmZpcnN0LWNoaWxkIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICAtLWJvcmRlci1yYWRpdXM6IDFweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdzpudGgtY2hpbGQoMikgaW9uLWNvbDpudGgtY2hpbGQoMikge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tZ3JpZCBpb24tcm93Om50aC1jaGlsZCgyKSBpb24tY29sOm50aC1jaGlsZCgyKSBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzAlO1xufVxuXG4uY29sLXByaWNlIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY29sLXByaWNlIHA6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uY29sLXByaWNlIHA6bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNvbC1wcmljZS1vcmkge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uYWRkLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnBhcmEtZGVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucGFyYS1kZWwgZGVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5kaXYtYnRuIGlvbi1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uZGl2LWJ0biBpb24tYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uZGl2LWJ0biBpb24tYnV0dG9uOmZpcnN0LWNoaWxkIHAge1xuICBmb250LXNpemU6IDM1cHg7XG59XG4uZGl2LWJ0biBpb24tYnV0dG9uOm50aC1jaGlsZCgzKSB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5kaXYtYnRuIGlvbi1idXR0b246bnRoLWNoaWxkKDMpIHAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZGl2LWJ0biBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMzRweDtcbn1cblxuLnBhcmEtcHJpY2Utb3JpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbn1cblxuaW9uLWZvb3RlciAudG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cart/cart.page.ts":
  /*!***********************************!*\
    !*** ./src/app/cart/cart.page.ts ***!
    \***********************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
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


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/coupon/coupon.service */
    "./src/providers/coupon/coupon.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../modals/login/login.page */
    "./src/app/modals/login/login.page.ts");

    var CartPage = /*#__PURE__*/function () {
      function CartPage(navCtrl, shared, config, http, loading, storage, events, modalCtrl, applicationRef, couponProvider, actionSheetCtrl) {
        _classCallCheck(this, CartPage);

        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.storage = storage;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.applicationRef = applicationRef;
        this.couponProvider = couponProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.c = '';
        this.couponArray = [];
        this.products = [];
        this.loadingServerData = true; //============================================================================================  

        this.qunatityPlus = function (p) {
          if (p.stock_quantity == p.quantity) this.shared.showAlert("Product Quantity is Limited!");else if (p.stock_quantity == null || p.stock_quantity > p.quantity) {
            p.quantity++;
            p.subtotal = p.subtotal + parseFloat(p.price);
            p.total = p.total + parseFloat(p.price);
            this.updateCart();
          }
        }; //============================================================================================  
        //function decreasing the quantity


        this.qunatityMinus = function (p) {
          if (p.quantity != 1) {
            p.quantity--;
            p.subtotal = parseFloat(p.price) * p.quantity;
            p.total = parseFloat(p.price) * p.quantity;
            this.updateCart();
          }
        }; //============================================================================================   
        //getting getMostLikedProducts from the server


        this.getCoupon = function (code) {
          var _this = this;

          this.loading.show();
          this.config.getWoo("coupons?code=" + code).then(function (data) {
            _this.loading.hide();

            var d = data;
            var coupon = d[0];
            if (d.length == 0) _this.shared.showAlert("Invalid Coupon Code!");else _this.applyCouponCart(coupon);
          }, function (error) {
            _this.loading.hide();

            console.log(error);
          });
        }; //============================================================================================  
        //applying coupon on the cart


        this.applyCouponCart = function (coupon) {
          //checking the coupon is valid or not
          if (this.couponProvider.validateCouponService(coupon, this.products, this.shared.couponArray) == false) {
            return 0;
          } else {
            if (coupon.individual_use == 1) {
              this.products = JSON.parse(JSON.stringify(this.shared.cartProducts));
              this.shared.couponArray = [];
              console.log('individual_use');
            }

            var v = {};
            v.code = coupon.code;
            v.amount = coupon.amount;
            v.product_ids = coupon.product_ids;
            v.excluded_product_ids = coupon.exclude_product_ids;
            v.product_categories = coupon.product_categories;
            v.excluded_product_categories = coupon.excluded_product_categories;
            v.discount = coupon.amount;
            v.individual_use = coupon.individual_use;
            v.free_shipping = coupon.free_shipping;
            v.discount_type = coupon.discount_type; // v.limit_usage_to_x_items = coupon.limit_usage_to_x_items;
            // v.usage_limit = coupon.usage_limit;
            // v.used_by = coupon.used_by ;
            // v.usage_limit_per_user = coupon.usage_limit_per_user ;
            // v.exclude_sale_items = coupon.exclude_sale_items;

            this.shared.couponArray.push(coupon);
          } //applying coupon service


          this.products = this.couponProvider.apply(coupon, this.products);
          this.updateCart();
        }; //============================================================================================  
        //delete Coupon


        this.deleteCoupon = function (code) {
          var _this2 = this;

          this.shared.couponArray.forEach(function (value, index) {
            if (value.code == code) {
              _this2.shared.couponArray.splice(index, 1);

              return true;
            }
          });
          this.updateCart();
          console.log(this.shared.couponArray);
        };
      } //============================================================================================  


      _createClass(CartPage, [{
        key: "totalPrice",
        value: function totalPrice() {
          var price = 0;
          var subPrice = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var value = _step.value;
              subPrice = subPrice + value.subtotal;
              price = price + value.total;
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

          this.subtotal = subPrice;
          this.total = price; // console.log(price);
        }
      }, {
        key: "getSingleProductDetail",
        //============================================================================================  
        value: function getSingleProductDetail(id) {
          var _this3 = this;

          this.loading.show();
          this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then(function (data) {
            _this3.loading.hide();

            var p = data[0];

            _this3.shared.singleProductPageData.push(p);

            _this3.navCtrl.navigateForward("product-detail/" + p.id);
          }, function (err) {
            _this3.loading.hide();

            console.log(err);
          });
        } //============================================================================================  

      }, {
        key: "removeCart",
        value: function removeCart(id) {
          var _this4 = this;

          this.products.forEach(function (value, index) {
            if (value.cart_id == id) {
              _this4.products.splice(index, 1);

              console.log("removing" + id);
            }
          });
          this.shared.removeCart(this.products);
          this.updateCart();
        } //============================================================================================  

      }, {
        key: "proceedToCheckOut",
        value: function proceedToCheckOut() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.shared.customerData.id == null || this.shared.customerData.id == undefined)) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 3;
                    return this.modalCtrl.create({
                      component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_9__["LoginPage"],
                      componentProps: {
                        'hideGuestLogin': true
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    _context.next = 9;
                    break;

                  case 8:
                    // <!-- 2.0 updates -->
                    if (this.config.checkOutPage == 1) this.shared.onePageCheckOut();else this.navCtrl.navigateForward("/shipping-address");

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //============================================================================================  

      }, {
        key: "openProductsPage",
        value: function openProductsPage() {
          this.navCtrl.navigateForward("/products/0/0/newest");
        } //============================================================================================  

      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          //if (this.config.admob == 1) this.shared.showAd();
          this.updateCart();
        } //============================================================================================  

      }, {
        key: "updateCart",
        value: function updateCart() {
          var _this5 = this;

          if (this.shared.cartProducts.length != 0) {
            this.loading.show();
            this.loadingServerData = false;
          }

          var count = 0;
          this.shared.cartProducts.forEach(function (value, index) {
            var id = value.product_id;
            if (value.variation_id != undefined) id = value.variation_id;

            _this5.config.getWoo("products/" + id + "?" + _this5.config.productsArguments).then(function (data) {
              count++;
              var p = data;

              if (p.id == undefined) {
                _this5.shared.cartProducts.splice(index, 1);
              } else if (p.status == 'trash') {
                _this5.shared.cartProducts.splice(index, 1);
              } else {
                value.price = p.price;
                value.name = p.name;
                value.stock_quantity = p.stock_quantity;
                value.tax_status = p.tax_status; //value.image = p.images[0].src;

                value.tax_class = p.tax_class;
                value.tax_status = p.tax_status;
                value.on_sale = p.on_sale;
                value.categories = p.categories;

                if (p.stock_quantity == null) {} else if (p.stock_quantity < value.quantity) value.quantity = p.stock_quantity;else if (p.stock_status != 'instock') {
                  _this5.shared.cartProducts.splice(index, 1);
                }

                value.subtotal = parseFloat(value.price) * value.quantity;
                value.total = parseFloat(value.price) * value.quantity;
              }

              _this5.applicationRef.tick();

              if (count == _this5.shared.cartProducts.length) {
                _this5.changingCart();

                _this5.loading.hide();

                _this5.loadingServerData = true;
              }
            });
          });
        } //==========================================================================

      }, {
        key: "changingCart",
        value: function changingCart() {
          var _this6 = this;

          this.products = this.shared.cartProducts;
          this.storage.set('cartProducts', this.shared.cartProducts);
          this.shared.cartTotalItems();
          this.shared.couponArray.forEach(function (value) {
            _this6.products = _this6.couponProvider.apply(value, _this6.shared.cartProducts);
          });
          this.totalPrice();
          this.applicationRef.tick();
        }
      }, {
        key: "couponslist",
        value: function couponslist() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this7 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Demo Coupons',
                      buttons: [{
                        icon: 'arrow-round-forward',
                        text: 'Product Fixed (fp). A fixed total discount for selected products only',
                        handler: function handler() {
                          _this7.c = 'fp';
                        }
                      }, {
                        icon: 'arrow-round-forward',
                        text: 'Cart Fixed (fc). A fixed total discount for the entire cart',
                        handler: function handler() {
                          _this7.c = 'fc';
                        }
                      }, {
                        icon: 'arrow-round-forward',
                        text: 'Product Percentage (percentage). A percentage discount for selected products only',
                        handler: function handler() {
                          _this7.c = 'percentage';
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler() {}
                      }]
                    });

                  case 2:
                    actionSheet = _context2.sent;
                    _context2.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }, {
        type: src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__["CouponService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }];
    };

    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/cart/cart.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__["CouponService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])], CartPage);
    /***/
  }
}]);
//# sourceMappingURL=cart-cart-module-es5.js.map