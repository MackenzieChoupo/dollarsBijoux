function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home9-home9-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHome9Home9PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header-4.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"apps\"></ion-icon>\n      {{'Categories' | translate }}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openCategoryPage()\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n  <!-- categories component -->\n  <app-categories [type]=\"'grid'\"></app-categories>\n\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"topSeller\">{{ 'Newest' | translate }}</ion-segment-button>\n    <ion-segment-button value=\"deals\">{{ 'On Sale' | translate }} </ion-segment-button>\n    <ion-segment-button value=\"mostLiked\"> {{ 'Featured' | translate }}</ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"segments\">\n\n    <!-- first swipe slider -->\n    <ion-slides *ngSwitchCase=\"'topSeller'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab1\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- 2nd swipe slider -->\n    <ion-slides *ngSwitchCase=\"'deals'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab2\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- 3rd swipe slider -->\n    <ion-slides *ngSwitchCase=\"'mostLiked'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab3\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('featured')\"> {{'Shop More'| translate}}\n          <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-albums\"></ion-icon>\n      {{'All Products' | translate }}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('newest')\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- infinite scroll -->\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n  <ion-fab-button color=\"secondary\" (click)=\"scrollToTop()\">\n    <ion-icon name=\"arrow-round-up\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>";
    /***/
  },

  /***/
  "./src/app/home-pages/home9/home9.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home9/home9.module.ts ***!
    \**************************************************/

  /*! exports provided: Home9PageModule */

  /***/
  function srcAppHomePagesHome9Home9ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home9PageModule", function () {
      return Home9PageModule;
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


    var _home9_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home9.page */
    "./src/app/home-pages/home9/home9.page.ts");
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
      component: _home9_page__WEBPACK_IMPORTED_MODULE_6__["Home9Page"]
    }];

    var Home9PageModule = function Home9PageModule() {
      _classCallCheck(this, Home9PageModule);
    };

    Home9PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      declarations: [_home9_page__WEBPACK_IMPORTED_MODULE_6__["Home9Page"]]
    })], Home9PageModule);
    /***/
  },

  /***/
  "./src/app/home-pages/home9/home9.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home9/home9.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagesHome9Home9PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-product {\n  width: 100%;\n}\n\n.swiper-slide {\n  width: 40%;\n}\n\nion-slides ion-slide:last-child {\n  height: auto;\n}\n\nion-segment ion-segment-button {\n  --indicator-color: lightgray;\n  --indicator-color-checked: var(--ion-color-primary);\n  --color-checked: var(--ion-color-primary);\n  font-size: 0.75rem;\n}\n\nion-fab {\n  position: fixed;\n}\n\nion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n}\n\nion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTkvaG9tZTkucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU5L2hvbWU5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7QUNFRjs7QURFSTtFQUNFLFlBQUE7QUNDTjs7QURJRTtFQUNFLDRCQUFBO0VBQ0EsbURBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FERUU7RUFDRSxzQ0FBQTtBQ0FKOztBRElFO0VBQ0ksa0JBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTkvaG9tZTkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXByb2R1Y3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogNDAlO1xufVxuaW9uLXNsaWRlcyB7XG4gIGlvbi1zbGlkZSB7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cbn1cbmlvbi1zZWdtZW50IHtcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogbGlnaHRncmF5O1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbmlvbi1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxufVxuaW9uLWdyaWR7XG4gIGlvbi1yb3d7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn0iLCJhcHAtcHJvZHVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuaW9uLXNsaWRlcyBpb24tc2xpZGU6bGFzdC1jaGlsZCB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IGxpZ2h0Z3JheTtcbiAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xufVxuXG5pb24tZmFiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuaW9uLWZhYiBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home-pages/home9/home9.page.ts":
  /*!************************************************!*\
    !*** ./src/app/home-pages/home9/home9.page.ts ***!
    \************************************************/

  /*! exports provided: Home9Page */

  /***/
  function srcAppHomePagesHome9Home9PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home9Page", function () {
      return Home9Page;
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


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");

    var Home9Page = /*#__PURE__*/function () {
      function Home9Page(nav, config, events, shared) {
        _classCallCheck(this, Home9Page);

        this.nav = nav;
        this.config = config;
        this.events = events;
        this.shared = shared;
        this.segments = "topSeller"; //first segment by default 

        this.scrollTopButton = false; //for scroll down fab 
        //for product slider after banner

        this.sliderConfig = {
          slidesPerView: this.config.productSlidesPerPage,
          spaceBetween: 0
        };
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.page = 1;
      }

      _createClass(Home9Page, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.shared.hideSplashScreen();
        } // For FAB Scroll

      }, {
        key: "onScroll",
        value: function onScroll(e) {
          if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
          }

          if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
          }
        } // For Scroll To Top Content

      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          this.content.scrollToTop(700);
          this.scrollTopButton = false;
        }
      }, {
        key: "openProducts",
        value: function openProducts(value) {
          this.nav.navigateForward("/products/0/0/" + value);
        }
      }, {
        key: "openCategoryPage",
        value: function openCategoryPage() {
          this.events.publish("openCategoryPage");
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this = this;

          var query = 'products?' + 'page=' + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;

          if (this.page == 1) {
            this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          }

          this.config.getWoo(query).then(function (data) {
            var dat = data;

            _this.infinite.complete();

            if (_this.page == 1) {
              _this.products = new Array();
            }

            if (dat.length != 0) {
              _this.page++;
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = dat[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var value = _step.value;

                  _this.products.push(value);
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
            }

            if (dat.length < 10) {
              _this.infinite.disabled = true;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
        }
      }]);

      return Home9Page;
    }();

    Home9Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])], Home9Page.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], Home9Page.prototype, "infinite", void 0);
    Home9Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home9',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home9.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home9/home9.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home9.page.scss */
      "./src/app/home-pages/home9/home9.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])], Home9Page);
    /***/
  }
}]);
//# sourceMappingURL=home-pages-home9-home9-module-es5.js.map