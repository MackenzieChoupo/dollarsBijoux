function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shipping-method-shipping-method-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-method/shipping-method.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-method/shipping-method.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShippingMethodShippingMethodPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Mode de livraison'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list class=\"ion-padding\" *ngIf=\"resetPage\">\n    <ion-radio-group>\n      <div *ngFor=\"let m of shippingMethod\">\n        <ion-item lines=\"full\" *ngIf=\"m.enabled && checkFreeShipping(m)\">\n          <ion-label>{{m.method_title}}\n            <span *ngIf=\"m.settings.cost\">{{m.settings.cost.value|curency}}</span>\n          </ion-label>\n          <ion-radio [value]=[m] (ionSelect)=\"setMethod(m)\"></ion-radio>\n        </ion-item>\n      </div> \n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"proceedOrder()\" [disabled]=\"shared.shipping_lines.length==0\">\n    {{'suivant'|translate}}</ion-button>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/shipping-method/shipping-method.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shipping-method/shipping-method.module.ts ***!
    \***********************************************************/

  /*! exports provided: ShippingMethodPageModule */

  /***/
  function srcAppShippingMethodShippingMethodModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingMethodPageModule", function () {
      return ShippingMethodPageModule;
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


    var _shipping_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shipping-method.page */
    "./src/app/shipping-method/shipping-method.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _shipping_method_page__WEBPACK_IMPORTED_MODULE_6__["ShippingMethodPage"]
    }];

    var ShippingMethodPageModule = function ShippingMethodPageModule() {
      _classCallCheck(this, ShippingMethodPageModule);
    };

    ShippingMethodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_shipping_method_page__WEBPACK_IMPORTED_MODULE_6__["ShippingMethodPage"]]
    })], ShippingMethodPageModule);
    /***/
  },

  /***/
  "./src/app/shipping-method/shipping-method.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/shipping-method/shipping-method.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShippingMethodShippingMethodPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-list {\n  background: #fafafa;\n}\nion-content ion-list ion-item {\n  --background: #eee;\n}\nion-footer ion-button {\n  height: 45px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL3NoaXBwaW5nLW1ldGhvZC9zaGlwcGluZy1tZXRob2QucGFnZS5zY3NzIiwic3JjL2FwcC9zaGlwcGluZy1tZXRob2Qvc2hpcHBpbmctbWV0aG9kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLG1CQUFBO0FDREo7QURFSTtFQUNFLGtCQUFBO0FDQU47QURLRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGlwcGluZy1tZXRob2Qvc2hpcHBpbmctbWV0aG9kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6ICNlZWU7XG4gICAgfVxuICB9XG59XG5pb24tZm9vdGVyIHtcbiAgaW9uLWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNlZWU7XG59XG5cbmlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shipping-method/shipping-method.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shipping-method/shipping-method.page.ts ***!
    \*********************************************************/

  /*! exports provided: ShippingMethodPage */

  /***/
  function srcAppShippingMethodShippingMethodPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShippingMethodPage", function () {
      return ShippingMethodPage;
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


    var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/spinner-dialog/ngx */
    "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
    /* harmony import */


    var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/themeable-browser/ngx */
    "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/providers/location-data/location-data.service */
    "./src/providers/location-data/location-data.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var ShippingMethodPage = /*#__PURE__*/function () {
      function ShippingMethodPage(navCtrl, shared, http, storage, spinnerDialog, config, loading, location, themeableBrowser, applicationRef) {
        var _this = this;

        _classCallCheck(this, ShippingMethodPage);

        this.navCtrl = navCtrl;
        this.shared = shared;
        this.http = http;
        this.storage = storage;
        this.spinnerDialog = spinnerDialog;
        this.config = config;
        this.loading = loading;
        this.location = location;
        this.themeableBrowser = themeableBrowser;
        this.applicationRef = applicationRef;
        this.shippingMethod = new Array();
        this.selectedMethod = true;
        this.shippingLocations = [];
        this.resetPage = false;
        console.log(this.shared.customerData);
        this.shared.translateString(this.shared.checkOutPageText).then(function (res) {
          _this.shared.checkOutPageText = res;
        }); // if (this.shared.customerData.id != null) {
        //   if (this.shared.customerData.billing.first_name == "" &&
        //     this.shared.customerData.shippping.first_name == "" &&
        //     this.shared.customerData.shippping.last_name == "" &&
        //     this.shared.customerData.billing.last_name == ""
        //   ) { this.updateUser(); }
        // }

        this.getShippingZones();
      } //=================================================================================================================================


      _createClass(ShippingMethodPage, [{
        key: "getShippingZones",
        value: function getShippingZones() {
          var _this2 = this;

          this.loading.show();
          this.config.getWoo("shipping/zones" + "?" + this.config.productsArguments).then(function (data) {
            var d = data;

            _this2.getShippingLocations(d);
          });
        } //=================================================================================================================================

      }, {
        key: "getShippingLocations",
        value: function getShippingLocations(array) {
          var _this3 = this;

          var count = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var v = _step.value;

              _this3.config.getWoo("shipping/zones/" + v.id + "/locations" + "?" + _this3.config.productsArguments).then(function (data) {
                count++;
                var d = data;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = d[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var v2 = _step2.value;

                    _this3.shippingLocations.push(Object.assign(v2, {
                      zoneId: v.id
                    }));
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

                if (array.length == count) {
                  _this3.loading.hide();

                  _this3.sortArray(_this3.shippingLocations);
                }
              });
            };

            for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop();
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
        } //=================================================================================================================================

      }, {
        key: "sortArray",
        value: function sortArray(array) {
          var tempArray = [];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = array[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var value = _step3.value;

              if (value.type == "postcode") {
                tempArray.push(value);
              }
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

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = array[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _value = _step4.value;

              if (_value.type == "state") {
                tempArray.push(_value);
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

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = array[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _value2 = _step5.value;

              if (_value2.type == "country") {
                tempArray.push(_value2);
              }
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

          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = array[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _value3 = _step6.value;

              if (_value3.type == "continent") {
                tempArray.push(_value3);
              }
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

          console.log(tempArray);
          this.findZoneId(tempArray);
        } //=================================================================================================================================

      }, {
        key: "findZoneId",
        value: function findZoneId(array) {
          var zoneId = "";
          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = array[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var value = _step7.value;

              if (value.type == "postcode") {
                if (this.matchPostCode(value)) {
                  zoneId = value.zoneId;
                  console.log("postcode" + "  " + value.code);
                  break;
                }
              } else if (value.type == "state") {
                if (this.matchState(value)) {
                  console.log("state" + "  " + value.code);
                  zoneId = value.zoneId;
                  break;
                }
              } else if (value.type == "country") {
                if (this.matchCountry(value)) {
                  console.log("country" + "  " + value.code);
                  zoneId = value.zoneId;
                  break;
                }
              } else if (value.type == "continent") {
                if (this.matchContinent(value)) {
                  console.log("continent" + "  " + value.code);
                  zoneId = value.zoneId;
                  break;
                }
              }
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

          this.getShippingMethods(zoneId);
        } //=================================================================================================================================

      }, {
        key: "matchPostCode",
        value: function matchPostCode(value) {
          var postcode = this.shared.shipping.postcode;
          if (value.code.toUpperCase() == postcode.toUpperCase()) return true;

          if (value.code.indexOf("*") > 0) {
            var ind = value.code.indexOf("*");
            var s1 = postcode.substring(0, ind - 1);
            var s2 = value.code.substring(0, ind - 1);

            if (s1.toUpperCase() == s2.toUpperCase()) {
              return true;
            }
          }

          if (value.code.indexOf(".") > 0) {
            var i = value.code.indexOf(".");
            var min = value.code.substring(0, i);
            var max = value.code.substring(i + 3, value.code.length);
            min = parseInt(min);
            var p = parseInt(postcode);
            max = parseInt(max);

            if (p >= min && p <= max) {
              return true;
            }
          }
        } //=================================================================================================================================

      }, {
        key: "matchState",
        value: function matchState(value) {
          var s = this.shared.shipping.country + ":" + this.shared.shipping.state;

          if (s == value.code) {
            return true;
          }
        } //=================================================================================================================================

      }, {
        key: "matchCountry",
        value: function matchCountry(value) {
          var s = this.shared.shipping.country;

          if (s == value.code) {
            return true;
          }
        } //=================================================================================================================================

      }, {
        key: "matchContinent",
        value: function matchContinent(value) {
          var s = this.location.getContientCode(this.shared.shipping.country);
          if (s == value.code) return true;
        } //=================================================================================================================================

      }, {
        key: "getShippingMethods",
        value: function getShippingMethods(id) {
          var _this4 = this;

          if (id == "") id = 0;
          this.loading.show();
          this.config.getWoo("shipping/zones/" + id + "/methods" + "?" + this.config.productsArguments).then(function (data) {
            _this4.loading.hide();

            _this4.shippingMethod = data;

            _this4.applicationRef.tick();
          });
        } //=================================================================================================================================

      }, {
        key: "setMethod",
        value: function setMethod(data) {
          this.shared.shipping_lines = [];
          var s = {};
          if (data.method_id == "flat_rate") s = {
            ship_id: data.id,
            method_id: data.method_id,
            method_title: data.method_title,
            total: this.calculateFlatRate(data)
          };else if (data.settings.cost) {
            var cal = data.settings.cost.value.toString();
            if (cal == "") cal = "0";
            s = {
              ship_id: data.id,
              method_id: data.method_id,
              method_title: data.method_title,
              total: cal
            };
          } else {
            s = {
              ship_id: data.id,
              method_id: data.method_id,
              method_title: data.method_title,
              total: "0"
            };
          }
          console.log(s);
          this.shared.shipping_lines.push(s);
        } //===============================================================================

      }, {
        key: "calculateFlatRate",
        value: function calculateFlatRate(data) {
          // if (data.settings.cost.value.indexOf("*") > 0) {
          //   let split = data.settings.cost.value.split("*");
          //   let value = parseFloat(split[0]);
          //   let result = value * this.shared.cartTotalItems();
          //   return result.toString();
          // }
          // else 
          var cal = data.settings.cost.value.toString();
          if (cal == "") cal = "0";
          return cal;
        } //=====================================================================================================================

      }, {
        key: "checkFreeShipping",
        value: function checkFreeShipping(data) {
          if (data.method_id != "free_shipping") {
            return true;
          }

          if (data.settings.requires.value == "") {
            return true;
          }

          if (data.settings.requires.value == "coupon") {
            if (this.findFreeShippingCoupon()) return true;else return false;
          }

          if (data.settings.requires.value == "both") {
            //console.log("total : " + this.shared.productsTotal() + " coupon min " + data.settings.min_amount.value);
            if (this.shared.productsTotal() >= data.settings.min_amount.value && this.findFreeShippingCoupon()) {
              return true;
            } else return false;
          }

          if (data.settings.requires.value == "either") {
            if (this.shared.productsTotal() >= data.settings.min_amount.value || this.findFreeShippingCoupon()) {
              return true;
            } else return false;
          }

          if (data.settings.requires.value == "min_amount") {
            if (this.shared.productsTotal() >= data.settings.min_amount.value) {
              return true;
            } else return false;
          }
        } //=====================================================================================================================

      }, {
        key: "findFreeShippingCoupon",
        value: function findFreeShippingCoupon() {
          var found = false;
          if (this.shared.couponArray.length == 0) return false;
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = this.shared.couponArray[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var value = _step8.value;
              if (value.free_shipping == true) found = true;
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

          if (found == true) return true;else return false;
        }
      }, {
        key: "proceedOrder",
        value: function proceedOrder() {
          if (this.config.checkOutPage == 2) this.navCtrl.navigateForward("order");else this.openOrderPage();
        } //=====================================================================================================================

      }, {
        key: "openOrderPage",
        value: function openOrderPage() {
          var customer_id = 0; // <!-- 2.0 updates -->

          if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id; // <!-- 2.0 updates -->

          var token = null; // <!-- 2.0 updates -->

          if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie; // <!-- 2.0 updates -->

          var onePage = this.config.checkOutPage;
          var data = {
            token: token,
            // payment_method: this.selectedPaymentMethod,
            // payment_method_title: this.selectedPaymentMethodTitle,
            billing_info: this.shared.billing,
            shipping_info: this.shared.shipping,
            products: this.getProducts(),
            shipping_ids: this.shared.shipping_lines,
            coupons: this.getCoupons(),
            customer_note: "",
            customer_id: customer_id,
            sameAddress: this.shared.sameAddress,
            one_page: onePage,
            platform: this.shared.device
          };
          console.log(data);
          this.shared.openCheckoutWebview(data);
        } //=================================================================================================================================

      }, {
        key: "getProducts",
        value: function getProducts() {
          var data = [];
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = this.shared.cartProducts[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var v = _step9.value;
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

          return data;
        } //=================================================================================================================================
        //Object.assign(c, data

      }, {
        key: "getCoupons",
        value: function getCoupons() {
          var data = [];
          var _iteratorNormalCompletion10 = true;
          var _didIteratorError10 = false;
          var _iteratorError10 = undefined;

          try {
            for (var _iterator10 = this.shared.couponArray[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
              var v = _step10.value;
              data.push({
                code: v.code,
                discount: v.amount
              });
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

          return data;
        } //=================================================================================================================================

      }, {
        key: "getShippingLines",
        value: function getShippingLines() {
          var data = [];
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = this.shared.shipping_lines[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var v = _step11.value;
              data.push({
                code: v.code,
                discount: v.amount
              });
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

          return data;
        } //=================================================================================================================================

      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this5 = this;

          var data = {
            billing: this.shared.billing,
            shipping: this.shared.shipping
          };
          this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, data).then(function (data) {
            var dat = data;
            _this5.shared.customerData.billing = dat.billing;
            _this5.shared.customerData.shipping = dat.shipping;

            _this5.storage.set('customerData', _this5.shared.customerData);
          });
        } //=================================================================================================================================

      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this6 = this;

          this.resetPage = false;
          setTimeout(function () {
            _this6.resetPage = true;
          }, 100);
          this.shared.shipping_lines = [];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShippingMethodPage;
    }();

    ShippingMethodPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]
      }, {
        type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"]
      }, {
        type: src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_9__["LocationDataService"]
      }, {
        type: _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["ThemeableBrowser"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    ShippingMethodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shipping-method',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipping-method.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shipping-method/shipping-method.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shipping-method.page.scss */
      "./src/app/shipping-method/shipping-method.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_3__["SpinnerDialog"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__["LoadingService"], src_providers_location_data_location_data_service__WEBPACK_IMPORTED_MODULE_9__["LocationDataService"], _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["ThemeableBrowser"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], ShippingMethodPage);
    /***/
  }
}]);
//# sourceMappingURL=shipping-method-shipping-method-module-es5.js.map