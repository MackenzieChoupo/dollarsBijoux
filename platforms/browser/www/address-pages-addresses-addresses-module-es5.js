function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-pages-addresses-addresses-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/addresses/addresses.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/addresses/addresses.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddressPagesAddressesAddressesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title> {{'Addresse'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge>{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- For Shipping Address -->\n  <p>\n    {{'Adresse de livraison'| translate }}\n  </p>\n\n  <form #shippingForm=\"ngForm\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'Prénom'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_firstname\" [(ngModel)]=\"shipping.first_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Nom'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_lastname\" [(ngModel)]=\"shipping.last_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Entreprise'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"company\" [(ngModel)]=\"shipping.company\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Addresse'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"address\" [(ngModel)]=\"shipping.address_1\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Addresse'|translate}} 2</ion-label>\n      <ion-input type=\"text\" name=\"address2\" [(ngModel)]=\"shipping.address_2\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Pays'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_country\" tappable (click)=\"selectCountryPage('shippingUpdate')\" readonly\n        [(ngModel)]=\"shippingCountryName\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Région'|translate}}</ion-label>\n      <ion-input type=\"text\" required name=\"shipping_zone\" tappable (click)=\"selectZonePage('shippingUpdate')\" readonly\n        [(ngModel)]=\"shippingStateName\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Ville'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_city\" [(ngModel)]=\"shipping.city\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Code postal'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"shipping_postcode\" [(ngModel)]=\"shipping.postcode\" required></ion-input>\n    </ion-item>\n  </form>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"updateShippingAddress()\" [disabled]=\"!shippingForm.form.valid\">\n    {{'Mettre à jour'|translate}}\n  </ion-button>\n\n  <!-- For Billing Address -->\n  <p>\n    {{'Adresse de facturation'| translate }}\n  </p>\n\n  <form #billingForm=\"ngForm\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'Prénom'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_firstname\" [(ngModel)]=\"billing.first_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Nom'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_lastname\" [(ngModel)]=\"billing.last_name\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Entreprise'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billingcompany\" [(ngModel)]=\"billing.company\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Addresse'|translate}} 1</ion-label>\n      <ion-input type=\"text\" name=\"billingaddress\" [(ngModel)]=\"billing.address_1\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Addresse'|translate}} 2</ion-label>\n      <ion-input type=\"text\" name=\"billingaddress2\" [(ngModel)]=\"billing.address_2\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Pays'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_country\" tappable (click)=\"selectCountryPage('billingUpdate')\" readonly\n        [(ngModel)]=\"billingCountryName\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Région'|translate}}</ion-label>\n      <ion-input type=\"text\" required name=\"billing_zone\" tappable (click)=\"selectZonePage('billingUpdate')\" readonly\n        [(ngModel)]=\"billingStateName\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'Ville'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_city\" [(ngModel)]=\"billing.city\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Code postal'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"billing_postcode\" [(ngModel)]=\"billing.postcode\" required></ion-input>\n    </ion-item>\n  </form>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"updateBillingAddress()\" [disabled]=\"!billingForm.form.valid\">\n    {{'Mettre à jour'|translate}}\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/address-pages/addresses/addresses.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/address-pages/addresses/addresses.module.ts ***!
    \*************************************************************/

  /*! exports provided: AddressesPageModule */

  /***/
  function srcAppAddressPagesAddressesAddressesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressesPageModule", function () {
      return AddressesPageModule;
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


    var _addresses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addresses.page */
    "./src/app/address-pages/addresses/addresses.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts"); // For Translation Language


    var routes = [{
      path: '',
      component: _addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]
    }];

    var AddressesPageModule = function AddressesPageModule() {
      _classCallCheck(this, AddressesPageModule);
    };

    AddressesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_6__["AddressesPage"]]
    })], AddressesPageModule);
    /***/
  },

  /***/
  "./src/app/address-pages/addresses/addresses.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/address-pages/addresses/addresses.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddressPagesAddressesAddressesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content p {\n  font-size: 20px;\n  text-align: center;\n}\nion-content form ion-item {\n  --background: #fafafa;\n}\nion-content form ion-item ion-label {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2FkZHJlc3MtcGFnZXMvYWRkcmVzc2VzL2FkZHJlc3Nlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZHJlc3MtcGFnZXMvYWRkcmVzc2VzL2FkZHJlc3Nlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNEUjtBRElRO0VBQ0kscUJBQUE7QUNGWjtBREdZO0VBQ0ksV0FBQTtBQ0RoQiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MtcGFnZXMvYWRkcmVzc2VzL2FkZHJlc3Nlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnR7XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbmlvbi1jb250ZW50IGZvcm0gaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/address-pages/addresses/addresses.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/address-pages/addresses/addresses.page.ts ***!
    \***********************************************************/

  /*! exports provided: AddressesPage */

  /***/
  function srcAppAddressPagesAddressesAddressesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressesPage", function () {
      return AddressesPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");
    /* harmony import */


    var src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/modals/select-country/select-country.page */
    "./src/app/modals/select-country/select-country.page.ts");
    /* harmony import */


    var src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/modals/select-zones/select-zones.page */
    "./src/app/modals/select-zones/select-zones.page.ts");

    var AddressesPage = /*#__PURE__*/function () {
      function AddressesPage(navCtrl, shared, modalCtrl, config, storage, events, loading, location) {
        var _this = this;

        _classCallCheck(this, AddressesPage);

        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.events = events;
        this.loading = loading;
        this.location = location;
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
        this.shippingStateName = ""; //when country is selected

        events.subscribe('countryChange', function (page, value) {
          if (page == "shippingUpdate") {
            _this.shippingCountryName = value.name;
            _this.shipping.country = value.value;
            _this.shipping.state = null;
            _this.shipping.city = null;
            _this.shipping.postcode = null;
            _this.shippingStateName = "";
          }

          if (page == "billingUpdate") {
            _this.billingCountryName = value.name;
            _this.billing.country = value.value;
            _this.billing.state = null;
            _this.billing.city = null;
            _this.billing.postcode = null;
            _this.billingStateName = "";
          }
        }); //state is selected

        events.subscribe('stateChange', function (page, value) {
          if (page == "shippingUpdate") {
            if (value == 'other') {
              console.log(page + value);
              _this.shipping.state = 'other';
              _this.shippingStateName = "other";
            } else {
              _this.shipping.state = value.value;
              _this.shippingStateName = value.name;
            }
          }

          if (page == "billingUpdate") {
            if (value == 'other') {
              _this.billing.state = 'other';
              _this.billingStateName = "other";
            } else {
              _this.billing.state = value.value;
              _this.billingStateName = value.name;
            }
          }
        });
      }

      _createClass(AddressesPage, [{
        key: "updateBillingAddress",
        value: function updateBillingAddress() {
          var _this2 = this;

          this.loading.show();
          var d = {
            billing: this.billing
          };
          this.config.putAsync("customers/" + this.shared.customerData.id, d).then(function (data) {
            _this2.loading.hide();

            var dat = data;
            _this2.shared.customerData.billing = dat.billing;

            _this2.storage.set('customerData', _this2.shared.customerData);

            _this2.shared.toast("Billing Address Updated");
          });
        }
      }, {
        key: "updateShippingAddress",
        value: function updateShippingAddress() {
          var _this3 = this;

          this.loading.show();
          var d = {
            shipping: this.shipping
          };
          this.config.putAsync("customers/" + this.shared.customerData.id, d).then(function (data) {
            _this3.loading.hide();

            var dat = data;
            _this3.shared.customerData.shipping = dat.shipping;
            console.log("customer data");
            console.log(_this3.shared.customerData);

            _this3.storage.set('customerData', _this3.shared.customerData);

            _this3.shared.toast("Shipping Address Updated");
          });
        }
      }, {
        key: "selectCountryPage",
        value: function selectCountryPage(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_8__["SelectCountryPage"],
                      componentProps: {
                        page: value
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
        key: "selectZonePage",
        value: function selectZonePage(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var id, modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    id = value == "shippingUpdate" ? this.shipping.country : this.billing.country;
                    _context2.next = 3;
                    return this.modalCtrl.create({
                      component: src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_9__["SelectZonesPage"],
                      componentProps: {
                        page: value,
                        id: id
                      }
                    });

                  case 3:
                    modal = _context2.sent;
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openCart",
        value: function openCart() {
          this.navCtrl.navigateForward("cart");
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (this.shared.customerData.id != null) {
            this.shipping = this.shared.customerData.shipping;
            this.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
            this.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
            this.billing = this.shared.customerData.billing;
            this.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
            this.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddressesPage;
    }();

    AddressesPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }, {
        type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__["LocationDataService"]
      }];
    };

    AddressesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addresses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addresses.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/addresses/addresses.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addresses.page.scss */
      "./src/app/address-pages/addresses/addresses.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Events"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_7__["LocationDataService"]])], AddressesPage);
    /***/
  }
}]);
//# sourceMappingURL=address-pages-addresses-addresses-module-es5.js.map