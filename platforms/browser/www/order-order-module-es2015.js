(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{'Commande'| translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\">\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Adresse de livraison'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping.address_1+', '+order.shipping.city+', '+order.shipping.state+' '+order.shipping.postcode+',\n      '+order.shipping.country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Adresse de facturation'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      {{order.billing.address_1+', '+order.billing.city+', '+order.billing.state+' '+order.billing.postcode+',\n      '+order.billing.country}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Mode de livraison'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      {{order.shipping_lines[0].method_title}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"order-product\">\n    <ion-card-header>\n      <h4>{{'Produits'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content *ngFor=\"let product of order.line_items\">\n      <ion-row class=\"row-product\">\n        <ion-col>\n          <h3>{{product.name}}\n            <br>\n            <small *ngFor=\"let c of product.categories\">{{c.name}}&nbsp;&nbsp;</small>\n          </h3>\n        </ion-col>\n      </ion-row>\n      <ion-item lines=\"full\">\n        <ion-thumbnail slot=\"start\">\n          <img src=\"{{product.image}}\">\n        </ion-thumbnail>\n        <ion-label>\n          <ion-row>\n            <ion-col class=\"ion-text-left\" size=\"6\">{{'Prix' |translate}}&nbsp;:&nbsp;</ion-col>\n            <ion-col class=\"ion-text-right\" size=\"6\">{{product.price| curency}}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-text-left\" size=\"6\">{{'Quantité'|translate}}&nbsp;:&nbsp;</ion-col>\n            <ion-col class=\"ion-text-right\" size=\"6\">{{product.quantity}}</ion-col>\n          </ion-row>\n\n          <ion-row *ngFor=\"let att of product.meta_data\">\n            <ion-col size=\"6\">{{att.key}}&nbsp;:</ion-col>\n            <ion-col size=\"6\">{{att.value}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"ion-text-left\" size=\"6\">{{'Sous Total'|translate}}&nbsp;:&nbsp;</ion-col>\n            <ion-col class=\"ion-text-right\" size=\"6\">{{product.subtotal| curency}}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-text-left\" size=\"6\">\n              <strong>{{'Total' |translate}}</strong>&nbsp;:&nbsp;</ion-col>\n            <ion-col class=\"ion-text-right\" size=\"6\">\n              <strong>{{product.total | curency}}</strong>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"shared.couponArray.length!=0\">\n    <ion-card-header>\n      {{'Code Promo'|translate}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row *ngFor=\"let coupon of shared.couponArray\">\n        <ion-col size=\"6\">\n          {{coupon.code}}\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n          {{coupon.amount| curency}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Sous total'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Prix des produits'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          {{productsTotal| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Frais'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          {{order.shipping_lines[0].total|curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Tax'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"!loaderTaxCalculating\">\n          {{tax| curency}}\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\" *ngIf=\"loaderTaxCalculating\">\n          <ion-spinner></ion-spinner>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Remise'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          {{discount| curency}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Total'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          <strong>{{totalAmountWithDisocunt| curency}}</strong>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Order Notes'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content class=\"card-disable\">\n      Note to the buyer\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <h4>{{'Mode de paiement'|translate}}</h4>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-input type=\"text\" placeholder=\"{{'Note to the buyer'|translate}}\" name=\"note\" [(ngModel)]=\"customerNotes\">\n      </ion-input>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"ion-text-center\">\n    <ion-spinner *ngIf=\"loaderPaymentMethods\"></ion-spinner>\n    <ion-card-content *ngIf=\"!loaderPaymentMethods\">\n      <ion-list>\n        <ion-item>\n          <ion-label color=\"dark\">{{'Paiement'|translate}}</ion-label>\n          <ion-select [(ngModel)]=\"payment_method\" (ionChange)=\" selectPayment(payment_method)\"\n            okText=\"{{'Ok'|translate}}\" cancelText=\"{{'Cancel'|translate}}\">\n            <span *ngFor=\"let p of paymentMethods\">\n              <ion-select-option [value]=\"p\" *ngIf=\"p.enabled\">{{p.title}}</ion-select-option>\n            </span>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"addOrder()\" *ngIf=\"selectedPaymentMethod!=''\">\n    {{'Continuer'|translate}}\n  </ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "./src/app/order/order.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]
    }
];
let OrderPageModule = class OrderPageModule {
};
OrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "./src/app/order/order.page.scss":
/*!***************************************!*\
  !*** ./src/app/order/order.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-col {\n  font-size: 12px;\n}\nion-content ion-card ion-card-header {\n  font-size: 14px;\n  margin-bottom: 0;\n  margin-top: 0;\n  color: black;\n  background-color: #eee;\n  padding-top: 10px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  padding-bottom: 10px !important;\n}\nion-content ion-card ion-card-header h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: 600;\n}\nion-content ion-card ion-card-content {\n  background-color: white;\n  padding-top: 10px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  padding-bottom: 10px !important;\n  font-size: 12px;\n  color: black;\n}\nion-content ion-card ion-card-content .card-disable {\n  color: gray !important;\n}\nion-content ion-card ion-card-content h3 {\n  font-size: 16px;\n  margin-bottom: 6px;\n}\nion-content ion-card ion-card-content h3 small {\n  font-size: 80%;\n}\nion-content ion-card ion-card-content .item {\n  --background: transparent;\n}\nion-content .row-product {\n  border-bottom: solid lightgray;\n  border-width: 0.2px;\n}\nion-content ion-button {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL29yZGVyL29yZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JkZXIvb3JkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKO0FER0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNETjtBREVNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQVI7QURHSTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ROO0FERU07RUFDRSxzQkFBQTtBQ0FSO0FERU07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVRO0VBQ0UsY0FBQTtBQ0FWO0FER007RUFDRSx5QkFBQTtBQ0RSO0FES0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0FDSEo7QURLRTtFQUNFLFNBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWNvbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIGlvbi1jYXJkIHtcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICAgIGg0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIC5jYXJkLWRpc2FibGUge1xuICAgICAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcblxuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnJvdy1wcm9kdWN0IHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjJweDtcbiAgfVxuICBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1jb2wge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5jYXJkLWRpc2FibGUge1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBoMyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAucm93LXByb2R1Y3Qge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci13aWR0aDogMC4ycHg7XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/order/order.page.ts":
/*!*************************************!*\
  !*** ./src/app/order/order.page.ts ***!
  \*************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/coupon/coupon.service */ "./src/providers/coupon/coupon.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");










let OrderPage = class OrderPage {
    constructor(navCtrl, http, config, shared, loading, spinnerDialog, couponProvider, actionSheetCtrl, iab, applicationRef) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.spinnerDialog = spinnerDialog;
        this.couponProvider = couponProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.iab = iab;
        this.applicationRef = applicationRef;
        this.discount = 0;
        this.productsTotal = 0;
        this.totalAmountWithDisocunt = 0;
        this.paymentMethods = [];
        this.selectedPaymentMethod = '';
        this.selectedPaymentMethodTitle = '';
        this.tax = 0;
        this.loaderTaxCalculating = true;
        this.loaderPaymentMethods = true;
        //============================================================================================  
        //placing order
        this.addOrder = function (nonce) {
            let customer_id = 0;
            if (this.shared.customerData.id != null)
                customer_id = this.shared.customerData.id;
            let token = null;
            if (this.shared.customerData.cookie != null)
                token = this.shared.customerData.cookie;
            let onePage = this.config.checkOutPage;
            //this.loading.auto();
            var data = {
                token: token,
                payment_method: this.selectedPaymentMethod,
                payment_method_title: this.selectedPaymentMethodTitle,
                billing_info: this.shared.billing,
                shipping_info: this.shared.shipping,
                products: this.getProducts(),
                shipping_ids: this.shared.shipping_lines,
                coupons: this.getCoupons(),
                customer_note: this.customerNotes,
                customer_id: customer_id,
                one_page: onePage,
                platform: this.shared.device,
            };
            console.log(this.shared.customerData);
            this.shared.openCheckoutWebview(data);
        };
        //============================================================================================  
        //CAlculate Discount total
        this.calculateDiscount = function () {
            let total = 0;
            for (let value of this.shared.cartProducts) {
                total = total + parseFloat(value.subtotal);
            }
            this.productsTotal = total;
            this.discount = parseFloat(this.shared.productsTotal()) - total;
        };
        //============================================================================================  
        //CAlculate all total
        this.calculateTotal = function () {
            this.totalAmountWithDisocunt = (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax);
        };
        this.order = {
            token: this.shared.customerData.cookie,
            payment_method: this.selectedPaymentMethod,
            payment_method_title: this.selectedPaymentMethodTitle,
            billing: this.shared.billing,
            shipping: this.shared.shipping,
            line_items: this.shared.cartProducts,
            shipping_lines: this.shared.shipping_lines,
            coupon_lines: this.shared.couponArray,
            customer_note: this.customerNotes,
            customer_id: this.shared.customerData.id,
        };
        //this.productsTotal = this.shared.productsTotal();
        this.calculateDiscount();
        this.calculateTotal();
        // if (this.shared.shipping_lines[0].method_id != "local_pickup")
        this.calculateTax();
    }
    getProducts() {
        var data = [];
        for (let v of this.shared.cartProducts) {
            var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString(), price: v.price.toString() };
            if (v.variation_id)
                Object.assign(obj, { variation_id: v.variation_id });
            //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
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
            data.push({ code: v.code, discount: v.amount });
        }
        return data;
    }
    selectPayment(p) {
        this.selectedPaymentMethod = p.id;
        this.selectedPaymentMethodTitle = p.title;
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
        //this.loading.show();
        this.config.getWoo("payment_gateways" + "?" + this.config.productsArguments).then((data) => {
            this.loaderPaymentMethods = false;
            this.paymentMethods = data;
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
        this.http.get(this.config.url + '/api/appsettings/ionic_get_tax/?insecure=cool&order=' + encodeURIComponent(JSON.stringify(data))).subscribe((data) => {
            this.loaderTaxCalculating = false;
            let res = parseFloat(JSON.stringify(data));
            if (res) {
                console.log("tax " + res);
            }
            else {
                console.log("tax err " + res);
                res = 0;
            }
            this.tax = res;
            this.calculateTotal();
            this.applicationRef.tick();
        });
    }
};
OrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_9__["SpinnerDialog"] },
    { type: src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__["CouponService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], OrderPage.prototype, "content", void 0);
OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.page.scss */ "./src/app/order/order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_9__["SpinnerDialog"],
        src_providers_coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__["CouponService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], OrderPage);



/***/ })

}]);
//# sourceMappingURL=order-order-module-es2015.js.map