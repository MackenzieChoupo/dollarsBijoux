function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home8-home8-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home8/home8.page.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home8/home8.page.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePagesHome8Home8PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header-4.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <!-- For Categories Sliders -->\n  <app-categories [type]=\"'roundImage'\"></app-categories>\n\n  <!-- Newest Products Heading -->\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-albums\"></ion-icon>\n      {{'Newest Products'|translate}}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('newest')\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <!-- Newest Products swipe slider -->\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab1\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n  </ion-slides>\n  <!-- On Sale Products Heading -->\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-bookmark\"></ion-icon>\n      {{'On Sale Products'|translate}}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('sale')\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <!-- On Sale Products swipe slider -->\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab2\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n\n  <!-- Featured Products Heading -->\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-star\"></ion-icon>\n      {{'Featured Products' | translate }}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('featured')\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <!-- Featured Products -->\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let p of shared.tab3\" size=\"6\" class=\"ion-no-padding\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-icon name=\"help-buoy\"></ion-icon>\n        <p>{{'Contact Us'|translate}}</p>\n        <p><small>{{config.phoneNo}}</small></p>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-icon name=\"card\"></ion-icon>\n        <p>{{'Safe Payment'|translate}}</p>\n        <p><small>{{'Secure Online Payment'|translate}}</small></p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home-pages/home8/home8.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home8/home8.module.ts ***!
    \**************************************************/

  /*! exports provided: Home8PageModule */

  /***/
  function srcAppHomePagesHome8Home8ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home8PageModule", function () {
      return Home8PageModule;
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


    var _home8_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home8.page */
    "./src/app/home-pages/home8/home8.page.ts");
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
      component: _home8_page__WEBPACK_IMPORTED_MODULE_6__["Home8Page"]
    }];

    var Home8PageModule = function Home8PageModule() {
      _classCallCheck(this, Home8PageModule);
    };

    Home8PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"]],
      declarations: [_home8_page__WEBPACK_IMPORTED_MODULE_6__["Home8Page"]]
    })], Home8PageModule);
    /***/
  },

  /***/
  "./src/app/home-pages/home8/home8.page.scss":
  /*!**************************************************!*\
    !*** ./src/app/home-pages/home8/home8.page.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePagesHome8Home8PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .swiper-slide {\n  width: 40%;\n}\nion-content app-product {\n  width: 100%;\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\nion-content ion-item {\n  --inner-padding-end: 0;\n  --padding-start: 4px;\n  padding-top: 3px;\n  margin-bottom: -15px;\n}\nion-content ion-item ion-icon {\n  margin-right: 5px;\n  zoom: 0.9;\n  color: var(--ion-color-primary);\n}\nion-content ion-item ion-label p {\n  font-size: 13.5px;\n}\nion-content ion-grid ion-row {\n  padding-right: 10px;\n  background: white;\n}\nion-content ion-grid ion-row ion-col {\n  text-align: center;\n}\nion-content ion-grid ion-row ion-col ion-icon {\n  color: #557f5f;\n}\nion-content ion-grid ion-row ion-col p {\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTgvaG9tZTgucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU4L2hvbWU4LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FESU07RUFDRSxZQUFBO0FDRlI7QURNRTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDSko7QURLSTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FDSE47QURNTTtFQUNFLGlCQUFBO0FDSlI7QURTSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNQTjtBRFFNO0VBQ0Usa0JBQUE7QUNOUjtBRE9RO0VBQ0UsY0FBQTtBQ0xWO0FET1E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNMViIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTgvaG9tZTgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuc3dpcGVyLXNsaWRlIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIGFwcC1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBpb24tc2xpZGUge1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgem9vbTogMC45O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEzLjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiAjNTU3ZjVmO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IC5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogNDAlO1xufVxuaW9uLWNvbnRlbnQgYXBwLXByb2R1Y3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlOmxhc3QtY2hpbGQge1xuICBoZWlnaHQ6IGF1dG87XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHpvb206IDAuOTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxMy41cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICBjb2xvcjogIzU1N2Y1Zjtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBwIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-pages/home8/home8.page.ts":
  /*!************************************************!*\
    !*** ./src/app/home-pages/home8/home8.page.ts ***!
    \************************************************/

  /*! exports provided: Home8Page */

  /***/
  function srcAppHomePagesHome8Home8PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Home8Page", function () {
      return Home8Page;
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

    var Home8Page = /*#__PURE__*/function () {
      function Home8Page(nav, config, events, shared) {
        _classCallCheck(this, Home8Page);

        this.nav = nav;
        this.config = config;
        this.events = events;
        this.shared = shared;
        this.sliderConfig = {
          slidesPerView: 2.5,
          spaceBetween: 0
        };
      }

      _createClass(Home8Page, [{
        key: "openProducts",
        value: function openProducts(value) {
          this.nav.navigateForward("/products/0/0/" + value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.shared.hideSplashScreen();
        }
      }]);

      return Home8Page;
    }();

    Home8Page.ctorParameters = function () {
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

    Home8Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home8',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home8.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home8/home8.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home8.page.scss */
      "./src/app/home-pages/home8/home8.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])], Home8Page);
    /***/
  }
}]);
//# sourceMappingURL=home-pages-home8-home8-module-es5.js.map