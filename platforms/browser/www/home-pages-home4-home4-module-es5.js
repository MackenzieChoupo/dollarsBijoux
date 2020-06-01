function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home4-home4-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home4/home4.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home4/home4.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHome4Home4PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header-4.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-banner></app-banner>\n  <!-- category avatar -->\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\" size=\"6\"\n        class=\"ion-no-padding animate-item\">\n        <ion-card>\n          <ion-avatar>\n            <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n          </ion-avatar>\n          <ion-text>\n            <h6>{{c.name|translate}}</h6>\n            <p>{{c.count}} {{'Products'| translate }}</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-albums\"></ion-icon>\n      {{ 'Newest Products' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab1\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n    <ion-slide>\n      <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-bookmark\"></ion-icon>\n      {{ 'On Sale Products' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab2\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n    <ion-slide>\n      <ion-button fill=\"clear\" (click)=\"openProducts('sale')\"> {{'Shop More'| translate}}\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-star\"></ion-icon>\n      {{ 'Featured Products' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab3\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n    <ion-slide>\n      <ion-button fill=\"clear\" (click)=\"openProducts('featured')\"> {{'Shop More'| translate}}\n        <ion-icon name=\"arrow-dropright\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n  <!-- recently view Heading -->\n  <ion-row *ngIf=\"shared.recentViewedProducts.length!=0\" class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-list\"></ion-icon>\n      {{'Recently Viewed'|translate}}\n    </ion-button>\n  </ion-row>\n  <!-- recently viewed swipe slider -->\n  <ion-slides #recentSlider [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.recentViewedProducts\">\n      <app-product [data]=\"p\" [type]=\"'recent'\"></app-product>\n    </ion-slide>\n  </ion-slides>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home-pages/home4/home4.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home4/home4.module.ts ***!
    \**************************************************/

  /*! exports provided: Home4PageModule */

  /***/
  function srcAppHomePagesHome4Home4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home4PageModule", function () {
      return Home4PageModule;
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


    var _home4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home4.page */
    "./src/app/home-pages/home4/home4.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");
    /* harmony import */


    var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/components/share/share.module */
    "./src/components/share/share.module.ts");

    var routes = [{
      path: '',
      component: _home4_page__WEBPACK_IMPORTED_MODULE_6__["Home4Page"]
    }];

    var Home4PageModule = function Home4PageModule() {
      _classCallCheck(this, Home4PageModule);
    };

    Home4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      declarations: [_home4_page__WEBPACK_IMPORTED_MODULE_6__["Home4Page"]]
    })], Home4PageModule);
    /***/
  },

  /***/
  "./src/app/home-pages/home4/home4.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home4/home4.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagesHome4Home4PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .swiper-slide {\n  width: 40%;\n}\nion-content ion-grid {\n  padding-bottom: 10px !important;\n}\nion-content ion-grid ion-row {\n  background: white;\n  box-shadow: 0 0 0 2px lightgrey;\n  /* border-radius: 10px; */\n  border-right: solid #fafafa;\n}\nion-content ion-grid ion-row ion-col ion-card {\n  font-weight: bold;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  margin: 0;\n  border-radius: 0px;\n  border: solid #fafafa;\n  box-shadow: 0px 0px 0px 0px #fafafa;\n  border-bottom: 0px;\n  border-right: 0px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\nion-content ion-grid ion-row ion-col ion-card h6 {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  font-size: var(--heading-font-size);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-grid ion-row ion-col ion-card p {\n  text-align: center;\n  margin-top: 0;\n  font-size: var(--sub-heading-font-size);\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTQvaG9tZTQucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU0L2hvbWU0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjtBREVFO0VBQ0UsK0JBQUE7QUNBSjtBRENJO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNDTjtBRENRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDVjtBREFVO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRVo7QURBVTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDRVo7QURBVTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0FDRVo7QURRTTtFQUNFLFlBQUE7QUNOUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTQvaG9tZTQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuc3dpcGVyLXNsaWRlIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIGlvbi1yb3cge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggbGlnaHRncmV5O1xuICAgICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgI2ZhZmFmYTtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkICNmYWZhZmE7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGlvbi1zbGlkZXMge1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiIsImlvbi1jb250ZW50IC5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogNDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggbGlnaHRncmV5O1xuICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICNmYWZhZmE7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyOiBzb2xpZCAjZmFmYWZhO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI2ZhZmFmYTtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmlnaHQ6IDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBoNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZTpsYXN0LWNoaWxkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-pages/home4/home4.page.ts":
  /*!************************************************!*\
    !*** ./src/app/home-pages/home4/home4.page.ts ***!
    \************************************************/

  /*! exports provided: Home4Page */

  /***/
  function srcAppHomePagesHome4Home4PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home4Page", function () {
      return Home4Page;
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

    var Home4Page = /*#__PURE__*/function () {
      function Home4Page(nav, config, events, shared) {
        _classCallCheck(this, Home4Page);

        this.nav = nav;
        this.config = config;
        this.events = events;
        this.shared = shared;
        this.sliderConfig = {
          slidesPerView: this.config.productSlidesPerPage,
          spaceBetween: 0
        };
      }

      _createClass(Home4Page, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.shared.hideSplashScreen();
        }
      }, {
        key: "openSubCategories",
        value: function openSubCategories(parent) {
          var count = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.shared.allCategories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var value = _step.value;
              console.log();

              if (value.parent == parent.id) {
                count++;
                console.log(value);
              }
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

          if (count != 0) this.nav.navigateForward("/categories/" + parent.id + "/" + parent.name);else this.nav.navigateForward("/products/" + parent.id + "/" + parent.name + "/newest");
        }
      }, {
        key: "openProducts",
        value: function openProducts(value) {
          this.nav.navigateForward("/products/0/0/" + value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Home4Page;
    }();

    Home4Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }];
    };

    Home4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home4',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home4.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home4/home4.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home4.page.scss */
      "./src/app/home-pages/home4/home4.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])], Home4Page);
    /***/
  }
}]);
//# sourceMappingURL=home-pages-home4-home4-module-es5.js.map