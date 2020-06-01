(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-pages-billing-address-billing-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/billing-address/billing-address.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/billing-address/billing-address.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{'Adresse de facturation'| translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Prénom'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"shared.billing.first_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Nom'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_lastname\" [(ngModel)]=\"shared.billing.last_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Société'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"company\" [(ngModel)]=\"shared.billing.company\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Addresse'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"shared.billing.address_1\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Addresse'|translate}} 2</ion-label>\n      <ion-input type=\"text\" name=\"address2\" [(ngModel)]=\"shared.billing.address_2\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Pays'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_country\" tappable (click)=\"selectCountryPage()\" readonly\n        [(ngModel)]=\"shared.billingCountryName\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Région'|translate}}</ion-label>\n      <ion-input type=\"text\" required name=\"shipping_zone\" tappable (click)=\"selectZonePage()\" readonly\n        [(ngModel)]=\"shared.billingStateName\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Ville'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_city\" [(ngModel)]=\"shared.billing.city\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Code postal'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_postcode\" [(ngModel)]=\"shared.billing.postcode\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n      <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"shared.billing.email\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Téléphone'|translate}}</ion-label>\n      <ion-input type=\"tel\" name=\"Phone\" [(ngModel)]=\"shared.billing.phone\" required></ion-input>\n    </ion-item>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"submit()\" [disabled]=\"disableButton()\">{{'Suivant'|translate}}\n  </ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/address-pages/billing-address/billing-address.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/address-pages/billing-address/billing-address.module.ts ***!
  \*************************************************************************/
/*! exports provided: BillingAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressPageModule", function() { return BillingAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _billing_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billing-address.page */ "./src/app/address-pages/billing-address/billing-address.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");







// For Translation Language

const routes = [
    {
        path: '',
        component: _billing_address_page__WEBPACK_IMPORTED_MODULE_6__["BillingAddressPage"]
    }
];
let BillingAddressPageModule = class BillingAddressPageModule {
};
BillingAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_billing_address_page__WEBPACK_IMPORTED_MODULE_6__["BillingAddressPage"]]
    })
], BillingAddressPageModule);



/***/ }),

/***/ "./src/app/address-pages/billing-address/billing-address.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/address-pages/billing-address/billing-address.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-size: 20px;\n  text-align: center;\n}\nion-content form ion-item {\n  --background: #fafafa;\n}\nion-content form ion-item ion-label {\n  color: gray;\n}\nion-footer .toolbar {\n  padding-left: 10px;\n}\nion-footer ion-button {\n  height: 45px;\n  margin: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2FkZHJlc3MtcGFnZXMvYmlsbGluZy1hZGRyZXNzL2JpbGxpbmctYWRkcmVzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZHJlc3MtcGFnZXMvYmlsbGluZy1hZGRyZXNzL2JpbGxpbmctYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElJO0VBQ0UscUJBQUE7QUNGTjtBREdNO0VBQ0UsV0FBQTtBQ0RSO0FET0U7RUFDRSxrQkFBQTtBQ0pKO0FETUU7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9hZGRyZXNzLXBhZ2VzL2JpbGxpbmctYWRkcmVzcy9iaWxsaW5nLWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5pb24tZm9vdGVyIHtcclxuICAudG9vbGJhciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi1mb290ZXIgLnRvb2xiYXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5pb24tZm9vdGVyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/address-pages/billing-address/billing-address.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/address-pages/billing-address/billing-address.page.ts ***!
  \***********************************************************************/
/*! exports provided: BillingAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressPage", function() { return BillingAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/location-data/location-data.service */ "./src/providers/location-data/location-data.service.ts");
/* harmony import */ var src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/select-country/select-country.page */ "./src/app/modals/select-country/select-country.page.ts");
/* harmony import */ var src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modals/select-zones/select-zones.page */ "./src/app/modals/select-zones/select-zones.page.ts");







let BillingAddressPage = class BillingAddressPage {
    constructor(shared, modalCtrl, navCtrl, location, applicationRef) {
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.location = location;
        this.applicationRef = applicationRef;
        this.defaultAddress = false;
        if (this.shared.customerData.id != null) {
            this.shared.billing = this.shared.customerData.billing;
            this.shared.billing.email = this.shared.customerData.email;
            this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
            this.shared.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
        }
        if (this.shared.billingCountryName == "" || this.shared.billingCountryName == null)
            this.shared.billingStateName = "";
    }
    // <!-- 2.0 updates -->
    setAddress(value) {
        if (this.defaultAddress == false)
            this.defaultAddress = true;
        else
            this.defaultAddress = false;
        this.shared.sameAddress = this.defaultAddress;
        console.log(this.defaultAddress);
        if (this.defaultAddress == true) {
            console.log(" billing ==shipping");
            this.shared.billing.first_name = this.shared.shipping.first_name;
            this.shared.billing.last_name = this.shared.shipping.last_name;
            this.shared.billing.state = this.shared.shipping.state;
            this.shared.billing.postcode = this.shared.shipping.postcode;
            this.shared.billing.country = this.shared.shipping.country;
            this.shared.billing.address_1 = this.shared.shipping.address_1;
            this.shared.billing.address_2 = this.shared.shipping.address_2;
            this.shared.billing.city = this.shared.shipping.city;
            this.shared.billing.company = this.shared.shipping.company;
            this.shared.billingCountryName = this.shared.shippingCountryName;
            this.shared.billingStateName = this.shared.shippingStateName;
        }
        else {
            if (this.shared.customerData.id != null) {
                console.log("changing customer data billing");
                console.log(this.shared.customerData);
                this.shared.billing = this.shared.customerData.billing;
                this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
                this.shared.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
            }
            else {
                console.log("changing customer data to null for guest");
                this.shared.billing.first_name = '';
                this.shared.billing.last_name = '';
                this.shared.billing.state = '';
                this.shared.billing.postcode = '';
                this.shared.billing.country = '';
                this.shared.billing.address_1 = '';
                this.shared.billing.address_2 = '';
                this.shared.billing.city = '';
                this.shared.billing.company = '';
                this.shared.billingCountryName = "";
                this.shared.billingStateName = "";
            }
        }
        this.applicationRef.tick();
    }
    submit() {
        this.navCtrl.navigateForward("shipping-method");
        this.applicationRef.tick();
    }
    selectCountryPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_5__["SelectCountryPage"],
                componentProps: { page: 'billing' }
            });
            return yield modal.present();
        });
    }
    selectZonePage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_6__["SelectZonesPage"],
                componentProps: { page: 'billing', id: this.shared.billing.country }
            });
            return yield modal.present();
        });
    }
    disableButton() {
        if (this.shared.billing.first_name == ""
            || this.shared.billing.last_name == ""
            || this.shared.billing.city == ""
            || this.shared.billing.postcode == ""
            || this.shared.billing.state == ""
            || this.shared.billing.country == ""
            || this.shared.billing.address_1 == ""
            || this.shared.billing.phone == ""
            || this.shared.billing.email == ""
            || this.shared.billing.state == null
            || this.shared.billing.city == null
            || this.shared.billing.postcode == null
            || this.shared.billing.phone == null) {
            return true;
        }
        else
            return false;
    }
    ngOnInit() { }
};
BillingAddressPage.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_4__["LocationDataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
];
BillingAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./billing-address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/billing-address/billing-address.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./billing-address.page.scss */ "./src/app/address-pages/billing-address/billing-address.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_4__["LocationDataService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
], BillingAddressPage);



/***/ })

}]);
//# sourceMappingURL=address-pages-billing-address-billing-address-module-es2015.js.map