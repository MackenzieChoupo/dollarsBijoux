function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        {{'Chercher'|translate}}\n      </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n          <ion-icon name=\"basket\"></ion-icon>\n          <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n</ion-header>\n\n<ion-content>\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"getSearchData()\">\n    <ion-searchbar [(ngModel)]=\"search\" name=\"search\" placeholder=\"{{'Chercher'|translate}}\" (ionInput)=\"onChangeKeyword($event)\">\n    </ion-searchbar>\n  </form>\n  <div class=\"list\" *ngFor=\"let p of searchResult\">\n    <app-product [data]=\"p\" [type]=\"'list'\"></app-product>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor=\"let c of shared.allCategories\" routerLink=\"/products/{{c.id}}/{{c.name}}/'newest'\"\n      routerDirection=\"forward\">\n      <ion-avatar slot=\"start\" class=\"animate-item delay-500ms\">\n        <img src=\"{{c.image.src}}\" *ngIf=\"c.image\" />\n      </ion-avatar>\n      <ion-label class=\"ion-padding\">\n        <ion-text>\n          <h2>{{c.name|translate}}</h2>\n          <p>{{c.count}} {{'Produits'| translate }}</p>\n        </ion-text>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/search/search.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/search/search.module.ts ***!
    \*****************************************/

  /*! exports provided: SearchPageModule */

  /***/
  function srcAppSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
      return SearchPageModule;
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


    var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/search/search.page.ts");
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
      component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }];

    var SearchPageModule = function SearchPageModule() {
      _classCallCheck(this, SearchPageModule);
    };

    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })], SearchPageModule);
    /***/
  },

  /***/
  "./src/app/search/search.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/search/search.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color:white;\n}\nion-header ion-toolbar ion-buttons ion-icon {\n  zoom: 1.3;\n}\nion-header ion-toolbar ion-buttons ion-badge {\n  position: absolute;\n  right: 3px;\n  bottom: 12px;\n}\nion-content ion-item ion-label {\n  padding-bottom: 0;\n  padding-top: 0;\n  padding-left: 0;\n}\nion-content ion-item ion-label h2 {\n  font-size: 18px;\n}\nion-content ion-item ion-label p {\n  color: gray;\n}\nion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHNDQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERVk7RUFDSSxTQUFBO0FDQWhCO0FERVk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQWhCO0FET1E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSlo7QURLWTtFQUNJLGVBQUE7QUNIaEI7QURLWTtFQUNJLFdBQUE7QUNIaEI7QURVSTtFQUNJLGtCQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWNvbG9yOndoaXRlO1xuICAgICAgICBpb24tYnV0dG9uc3tcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIHpvb206IDEuMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1iYWRnZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tY29udGVudHtcbiAgICBpb24taXRlbXtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1ncmlke1xuICAgIGlvbi1yb3d7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59IiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWNvbG9yOndoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24taWNvbiB7XG4gIHpvb206IDEuMztcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xuICBib3R0b206IDEycHg7XG59XG5cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHAge1xuICBjb2xvcjogZ3JheTtcbn1cblxuaW9uLWdyaWQgaW9uLXJvdyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/search/search.page.ts":
  /*!***************************************!*\
    !*** ./src/app/search/search.page.ts ***!
    \***************************************/

  /*! exports provided: SearchPage */

  /***/
  function srcAppSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
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


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SearchPage = /*#__PURE__*/function () {
      function SearchPage(navCtrl, config, http, loading, shared, applicationRef) {
        _classCallCheck(this, SearchPage);

        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.searchResult = [];
        this.showCategories = true;

        this.onChangeKeyword = function (e) {//console.log(this.search);
          // if (search != undefined) {
          //rchResult = [];
          //  }
        };

        this.getSearchData = function () {
          var _this = this;

          if (this.search != undefined) {
            if (this.search == null || this.search == '') {
              this.shared.toast("Veuillez saisir quelque chose");
              return 0;
            }
          } else {
            this.shared.toast("Veuillez saisir quelque chose");
            return 0;
          }

          this.loading.show();
          this.config.getWoo("products?status=publish&per_page=50&search=" + this.search + "&" + this.config.productsArguments).then(function (data) {
            _this.loading.hide();

            _this.searchResult = data;
            _this.showCategories = false;

            if (_this.searchResult.length == 0) {
              _this.shared.toast("Pas de produits trouvé!");
            }

            _this.applicationRef.tick();
          });
        };
      }

      _createClass(SearchPage, [{
        key: "openProducts",
        value: function openProducts(id, name) {
          this.navCtrl.navigateForward("/products/" + id + "/" + name + "/0");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchPage;
    }();

    SearchPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.page.scss */
      "./src/app/search/search.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], SearchPage);
    /***/
  }
}]);
//# sourceMappingURL=search-search-module-es5.js.map