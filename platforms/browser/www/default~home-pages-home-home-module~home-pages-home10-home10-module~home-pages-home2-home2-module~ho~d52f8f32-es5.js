function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsBannerBannerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"shared.banners.length==0\">\n  <ion-skeleton-text animated style=\"height: 211px;\">\n  </ion-skeleton-text>\n</div>\n<div *ngIf=\" shared.banners.length !=0\">\n\n  <ion-slides pager=\"true\" #ionSlides class=\"banner-slider\">\n    <ion-slide *ngFor=\"let b of shared.banners\" class=\"ion-no-padding animate-item\" (click)=\"bannerClick(b)\">\n      <ion-img src=\"{{b.banners_image}}\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- For Home-6 -->\n<!-- =========================================================== with name and product -->\n<div class=\"name\" *ngIf=\"type=='withName'\">\n\n  <ion-slides class=\"animate-item\" [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n      <!-- For Real Products -->\n      <ion-card *ngIf=\"c!=1\">\n\n        <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n\n        <ion-text>\n          <h6>{{c.name}}</h6>\n          <p>{{c.count}} Products</p>\n        </ion-text>\n      </ion-card>\n      <!-- For Skeleton -->\n      <ion-card *ngIf=\"c==1\" class=\"skeleton-name\">\n        <ion-skeleton-text animated>\n        </ion-skeleton-text>\n        <p>\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n</div>\n\n<!-- For Home-7 -->\n<!-- =========================================================== with name and product count -->\n<div class=\"name-count\" *ngIf=\"type=='name&count'\">\n  <ion-slides class=\"animate-item\" [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n      <!-- For Real Products -->\n      <ion-card *ngIf=\"c!=1\" class=\"card-h7\">\n        <ion-avatar>\n          <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n        </ion-avatar>\n        <ion-text>\n          <h6>{{c.name}}</h6>\n          <p>{{c.count}} Products</p>\n        </ion-text>\n      </ion-card>\n      <!-- For Skeleton -->\n      <ion-card *ngIf=\"c==1\">\n        <ion-skeleton-text animated>\n        </ion-skeleton-text>\n        <p>\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<!-- For Home-8 -->\n<!-- =========================================================== with name and round image -->\n<div class=\"round\" *ngIf=\"type=='roundImage'\">\n  <ion-slides class=\"animate-item\" [options]=\"sliderConfig2\">\n    <ion-slide *ngFor=\"let c of shared.categories\" (click)=\"openSubCategories(c)\">\n      <!-- For Real Products -->\n      <ion-card *ngIf=\"c!=1\" class=\"card-h8\">\n        <ion-avatar>\n          <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n        </ion-avatar>\n        <ion-text>\n          <h6>{{c.name}}</h6>\n          <p>{{c.count}} Products</p>\n        </ion-text>\n\n      </ion-card>\n      <!-- For Skeleton -->\n      <ion-card *ngIf=\"c==1\" class=\"card-skeleton-h8\">\n        <ion-avatar>\n          <ion-skeleton-text class=\"skeleton-h8\" animated>\n          </ion-skeleton-text>\n        </ion-avatar>\n        <p>\n          <ion-skeleton-text animated>\n          </ion-skeleton-text>\n        </p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<!-- // For Home-9 -->\n<!-- =========================================================== with name and round image -->\n<div class=\"grid\" *ngIf=\"type=='grid'\">\n  <ion-grid class=\"ion-no-padding categories-grid\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"4\" *ngFor=\"let c of shared.categories | slice:0:6;\" (click)=\"openSubCategories(c)\">\n        <ion-card class=\"card-h9\">\n          <ion-avatar class=\"avatar-h9\">\n            <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n          </ion-avatar>\n          <ion-text>\n            <h6>{{c.name}}</h6>\n            <p>{{c.count}} Products</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-component animate-item\">\n  <!-- skeleton text until data not loaded -->\n  <div *ngIf=\"p==1\" style=\"padding-left: 10px;\">\n    <ion-skeleton-text animated style=\"width: 100%; height: 110px;\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 80%; height: 15px;\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 60%; height: 15px;\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated *ngIf=\"config.cartButton==1\" style=\"width: 100%; height: 25px;\">\n    </ion-skeleton-text>\n\n  </div>\n\n  <div *ngIf=\"p!=1\">\n\n    <ion-card *ngIf=\"type=='normal' || type=='recent' || type=='wishList'\" class=\"animated fadeIn\">\n      <div>\n        <div *ngIf=\"p.on_sale==true\">{{ 'SALE' | translate }}</div>\n        <div *ngIf=\"p.featured\">{{'Featured' | translate }}</div>\n      </div>\n      <ion-img id=\"newimage\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n      <img id=\"image\" *ngIf=\"p.images\" src=\"{{p.images[0].src}}\" (click)=\"showProductDetail()\">\n      <p (click)=\"showProductDetail()\">{{p.name}}</p>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-no-padding\">\n          <ion-col size=\"10\" class=\"ion-no-padding\">\n            <h4 [innerHTML]=\"p.price_html\"></h4>\n          </ion-col>\n          <ion-col size=\"2\"  class=\"ion-text-center ion-no-padding\">\n            <ion-icon (click)=\"clickWishList()\" *ngIf=\"isLiked==0\" name=\"heart-empty\"></ion-icon>\n            <ion-icon (click)=\"clickWishList()\" *ngIf=\"isLiked!=0\" name=\"heart\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-no-padding\">\n          <ion-button *ngIf=\"type=='recent'\" color=\"danger\" (click)=\"removeRecent()\">{{'REMOVE'|translate}}</ion-button>\n          <ion-button *ngIf=\"type=='wishList'\" color=\"danger\" (click)=\"removeWishList()\">{{'REMOVE'|translate}}\n          </ion-button>\n        </ion-row>\n        <ion-row class=\"ion-no-padding\" *ngIf=\"type=='normal'\">\n          <ion-button color=\"secondary\" *ngIf=\"config.cartButton==1 && p.stock_status=='instock' && p.type=='simple'\"\n            (click)=\"addToCart(p);\">{{'ADD TO CART'|translate}}\n          </ion-button>\n          <ion-button color=\"secondary\" (click)=\"showProductDetail()\"\n            *ngIf=\"config.cartButton==1 && p.stock_status=='instock' && p.type!='simple'\">{{'DETAILS'|translate}}\n          </ion-button>\n          <ion-button color=\"secondary\" color=\"danger\" *ngIf=\"config.cartButton==1 && p.stock_status!='instock'\">\n            {{'OUT OF STOCK'|translate}}\n          </ion-button>\n        </ion-row>\n      </ion-grid>\n      <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n      </ion-row>\n    </ion-card>\n\n    <!-- //====================================  list view for shop page ==================================== -->\n    <ion-item lines=\"none\" *ngIf=\"type=='list'\" class=\"animate-item\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img class=\"badge-img\" src=\"assets/badge_new.png\" *ngIf=\"checkProductNew()\"></ion-img>\n        <img *ngIf=\"p.images\" src=\"{{p.images[0].src}}\" (click)=\"showProductDetail()\">\n      </ion-thumbnail>\n      <ion-label>\n        <p (click)=\"showProductDetail()\">{{p.name}}</p>\n        <p [innerHTML]=\"p.price_html\"></p>\n        <ion-row>\n          <ion-col>\n            <ion-button color=\"secondary\" *ngIf=\"config.cartButton==1 && p.stock_status=='instock' && p.type =='simple'\"\n              (click)=\"addToCart(p)\" item-start>{{'ADD TO CART'|translate}}</ion-button>\n            <ion-button color=\"secondary\" (click)=\"showProductDetail()\"\n              *ngIf=\"config.cartButton==1 && p.stock_status=='instock' && p.type!='simple'\" item-start>\n              {{'DETAILS'|translate}}</ion-button>\n            <ion-button color=\"danger\" *ngIf=\"config.cartButton==1 && p.stock_status!='instock'\" item-start>\n              {{'OUT OF STOCK'|translate}}</ion-button>\n          </ion-col>\n        </ion-row>\n        <ion-icon id=\"list-heart-icon\" *ngIf=\"isLiked==0\" (click)=\"clickWishList()\" name=\"heart-empty\"></ion-icon>\n        <ion-icon id=\"list-heart-icon\" *ngIf=\"isLiked!=0\" (click)=\"clickWishList()\" name=\"heart\"></ion-icon>\n      </ion-label>\n\n      <div class=\"img-div\">\n        <div *ngIf=\"p.on_sale==true\" class=\"sale\">{{'SALE'|translate}}</div>\n        <div *ngIf=\"p.featured\" class=\"featured\">{{'Featured'|translate}}</div>\n      </div>\n      <ion-row class=\"card-add-cart\" *ngIf=\"isInCart()\" (click)=\"showProductDetail()\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n      </ion-row>\n    </ion-item>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsScrollingFeaturedProductsScrollingFeaturedProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <ion-grid class=\"ion-no-padding\">\n      <ion-row class=\"ion-no-padding\">\n        <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsSlidingTabsSlidingTabsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Home-1 For Segments With Not Image -->\n<ion-segment *ngIf=\"type!='image'\" [(ngModel)]=\"selected\" scrollable>\n  <ion-segment-button value=\"0\" (click)=\"changeTab('0')\">{{'All'|translate}}</ion-segment-button>\n  <ion-segment-button value=\"{{c.id}}\" *ngFor=\"let c of shared.allCategories\" (click)=\"changeTab(c)\">{{c.name}}\n  </ion-segment-button>\n\n\n</ion-segment>\n\n<!-- Home-2 For Segments With Image -->\n<ion-segment *ngIf=\"type=='image'\" [(ngModel)]=\"selected\" scrollable>\n  <ion-segment-button value=\"0\" (click)=\"changeTab('0')\">\n    <img src=\"assets/home-page/category.png\">\n    {{'All'|translate}}</ion-segment-button>\n  <ion-segment-button value=\"{{c.id}}\" *ngFor=\"let c of shared.allCategories\" (click)=\"changeTab(c)\">\n    <img *ngIf=\"c.image\" src=\"{{c.image.src}}\">\n    {{c.name}} </ion-segment-button>\n</ion-segment>\n\n<!-- scrollable segment divisions -->\n<div [ngSwitch]=\"selected\">\n</div>\n<ion-grid class=\"ion-no-padding\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<!-- infinite scroll -->\n<ion-infinite-scroll threshold=\"10px\" #infinite (ionInfinite)=\"getProducts($event)\">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcComponentsVendorListVendorListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"config.showVendorInfo || config.showWcVendorInfo\">\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"person\"></ion-icon>\n      {{'Featured Vendors'|translate}}\n    </ion-button>\n  </ion-row>\n  <div *ngIf=\"shared.vendors.length!=0 && shared.vendors[0]!=1\" class=\"module\">\n    <!-- vendor list swipe slider -->\n    <ion-slides [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let c of shared.vendors\" (click)=\"openVendorPage(c)\" class=\"animate-item\">\n        <ion-card>\n          <img src=\"{{c.banner}}\" />\n          <p>{{c.name}}</p>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <!-- skeleton text until data not loaded -->\n  <ion-slides [options]=\"sliderConfig\" *ngIf=\"shared.vendors[0]==1\">\n    <ion-slide *ngFor=\"let c of shared.vendors\" (click)=\"openVendorPage(c)\" class=\"animate-item\">\n      <ion-card *ngIf=\"c==1\">\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</div>";
    /***/
  },

  /***/
  "./src/components/banner/banner.component.scss":
  /*!*****************************************************!*\
    !*** ./src/components/banner/banner.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsBannerBannerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  --bullet-background: black;\n  --bullet-background-active: #83af8c;\n  min-height: 180;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXN7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogYmxhY2s7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICM4M2FmOGM7XG4gICAgbWluLWhlaWdodDogMTgwO1xufSIsImlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiBibGFjaztcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICM4M2FmOGM7XG4gIG1pbi1oZWlnaHQ6IDE4MDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/components/banner/banner.component.ts":
  /*!***************************************************!*\
    !*** ./src/components/banner/banner.component.ts ***!
    \***************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcComponentsBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent(shared, navCtrl, config, http, loading) {
        _classCallCheck(this, BannerComponent);

        this.shared = shared;
        this.navCtrl = navCtrl;
        this.config = config;
        this.http = http;
        this.loading = loading; //===============================================================================================
        //on click image banners

        this.bannerClick = function (image) {
          //  console.log(image);
          if (image.type == 'category') {
            this.navCtrl.navigateForward("products/" + image.banners_url + "/0/newest");
          } else if (image.type == 'product') {
            this.getSingleProductDetail(parseInt(image.banners_url));
          } else {
            this.navCtrl.navigateForward("products/0/0/" + image.type);
          }
        };
      } //===============================================================================================
      //getting single product data


      _createClass(BannerComponent, [{
        key: "getSingleProductDetail",
        value: function getSingleProductDetail(id) {
          var _this = this;

          this.loading.show(); //if (this.type == 'recent' || this.type == 'wishList') {

          this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then(function (data) {
            //this.shared.showAlert("loaded");
            _this.loading.hide();

            _this.shared.singleProductPageData.push(data);

            _this.navCtrl.navigateForward("product-detail/" + data.id);

            _this.shared.addToRecent(data);
          }, function (err) {
            _this.loading.hide();

            _this.shared.showAlert("Item not Available!");

            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]
      }];
    };

    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-banner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./banner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./banner.component.scss */
      "./src/components/banner/banner.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"]])], BannerComponent);
    /***/
  },

  /***/
  "./src/components/categories/categories.component.scss":
  /*!*************************************************************!*\
    !*** ./src/components/categories/categories.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsCategoriesCategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".name .swiper-slide {\n  width: 40%;\n}\n.name ion-card {\n  margin-left: 10px;\n  margin-right: 0px;\n  background: white;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.name ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.name ion-card img {\n  width: 100%;\n}\n.name ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  margin-top: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: #000;\n}\n.name ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n  color: #747474;\n}\n.name .skeleton-name {\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n}\n.name .skeleton-name ion-skeleton-text {\n  height: 90px;\n}\n.name .skeleton-name p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.name .skeleton-name ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.round .swiper-slide {\n  width: 40%;\n}\n.round ion-slides ion-slide ion-card {\n  background: white;\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.round ion-slides ion-slide ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.round ion-slides ion-slide ion-card ion-skeleton-text {\n  height: 90px;\n}\n.round ion-slides ion-slide ion-card p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.round ion-slides ion-slide ion-card ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.round ion-slides ion-slide ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.round ion-slides ion-slide ion-card img {\n  width: 100%;\n}\n.round ion-slides ion-slide ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  color: black;\n}\n.round ion-slides ion-slide ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n  color: grey;\n}\n.name-count .swiper-slide {\n  width: 40%;\n}\n.name-count ion-slides ion-slide ion-card {\n  background: white;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.name-count ion-slides ion-slide ion-card:nth-child(2) {\n  background: none;\n}\n.name-count ion-slides ion-slide ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.name-count ion-slides ion-slide ion-card:last-child {\n  width: 100%;\n  margin-top: 15px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n}\n.name-count ion-slides ion-slide ion-card:last-child ion-skeleton-text {\n  height: 90px;\n}\n.name-count ion-slides ion-slide ion-card:last-child p {\n  height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.name-count ion-slides ion-slide ion-card:last-child ion-skeleton-text {\n  width: 100%;\n  height: 110px;\n  margin-top: 0;\n}\n.name-count ion-slides ion-slide ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.name-count ion-slides ion-slide ion-card img {\n  width: 100%;\n}\n.name-count ion-slides ion-slide ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.name-count ion-slides ion-slide ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 0;\n}\n.grid ion-card {\n  min-height: 144px;\n  border-radius: 0px;\n  box-shadow: 0.1px 0.1px 0.1px 0.1px #eee;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: none;\n}\n.grid ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.grid ion-card ion-img {\n  height: 150px;\n  width: 100%;\n}\n.grid ion-card img {\n  width: 100%;\n}\n.grid ion-card h6 {\n  font-size: var(--heading-font-size) !important;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  color: #000;\n}\n.grid ion-card p {\n  font-size: var(--sub-heading-font-size);\n  text-align: center;\n  margin-top: 0;\n  color: #747474;\n}\n.card-h7 {\n  margin-right: 0 !important;\n}\n.card-h8 {\n  background: none !important;\n  box-shadow: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.card-skeleton-h8 {\n  box-shadow: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.card-skeleton-h8 .skeleton-h8 {\n  height: 90% !important;\n}\n.card-h9 {\n  margin: 0;\n  border-radius: 0;\n  background: white;\n  box-shadow: none;\n}\n.card-h9 .avatar-h9 {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.card-h9 h6 {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n}\n.card-h9 p {\n  white-space: nowrap;\n  margin-top: 0;\n}\n.name {\n  font-size: var(--heading-font-size) !important;\n}\n.count {\n  font-size: var(--sub-heading-font-size) !important;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FDQUo7QURFRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0NOO0FEQ0k7RUFDRSxXQUFBO0FDQ047QURFSTtFQUNFLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBTjtBREVJO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDQU47QURHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNESjtBREVJO0VBQ0UsWUFBQTtBQ0FOO0FERUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FOO0FERUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNBTjtBRE1FO0VBQ0UsVUFBQTtBQ0hKO0FET007RUFDRSxpQkFBQTtFQU9BLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQWVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3pCUjtBREFRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRVY7QURJUTtFQUNFLFlBQUE7QUNGVjtBRElRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGVjtBRElRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDRlY7QURRUTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDTlY7QURRUTtFQUNFLFdBQUE7QUNOVjtBRFNRO0VBQ0UsOENBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDUFY7QURTUTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ1BWO0FEY0U7RUFDRSxVQUFBO0FDWEo7QURlTTtFQUNFLGlCQUFBO0VBNEJBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ3hDUjtBRFdRO0VBQ0UsZ0JBQUE7QUNUVjtBRFdRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVFY7QURXUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNUVjtBRFVVO0VBQ0UsWUFBQTtBQ1JaO0FEVVU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1JaO0FEVVU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNSWjtBRGNRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNaVjtBRGNRO0VBQ0UsV0FBQTtBQ1pWO0FEZVE7RUFDRSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2JWO0FEZVE7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ2JWO0FEb0JFO0VBQ0UsaUJBQUE7RUFNQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDdEJKO0FEYUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNYTjtBRGtCSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDaEJOO0FEa0JJO0VBQ0UsV0FBQTtBQ2hCTjtBRG1CSTtFQUNFLDhDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ2pCTjtBRG1CSTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ2pCTjtBRHNCQTtFQUNFLDBCQUFBO0FDbkJGO0FEcUJBO0VBQ0UsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNsQkY7QURvQkE7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNqQkY7QURrQkU7RUFDRSxzQkFBQTtBQ2hCSjtBRG1CQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7QURpQkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNmSjtBRGlCRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2ZKO0FEaUJFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDZko7QURtQkE7RUFDRSw4Q0FBQTtBQ2hCRjtBRGtCQTtFQUNFLGtEQUFBO0VBQ0EsZ0JBQUE7QUNmRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZSB7XHJcbiAgLnN3aXBlci1zbGlkZSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICBpb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBoNiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgY29sb3I6ICM3NDc0NzQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5za2VsZXRvbi1uYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAuMXB4IDAuMXB4ICNlZWU7XHJcbiAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucm91bmQge1xyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICBpb24tc2xpZGUge1xyXG4gICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xyXG4gICAgICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAjZWVlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLm5hbWUtY291bnQge1xyXG4gIC5zd2lwZXItc2xpZGUge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgaW9uLXNsaWRlcyB7XHJcbiAgICBpb24tc2xpZGUge1xyXG4gICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwLjFweCAwLjFweCAwLjFweCAwLjFweCAjZWVlO1xyXG4gICAgICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICNlZWU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDYge1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5ncmlkIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxNDRweDtcclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMC4xcHggMC4xcHggI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3gtc2hhZG93OiAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGg2IHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgIGNvbG9yOiAjNzQ3NDc0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtaDcge1xyXG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJkLWg4IHtcclxuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtc2tlbGV0b24taDgge1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIC5za2VsZXRvbi1oOCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uY2FyZC1oOSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAuYXZhdGFyLWg5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgaDYge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvdW50IHtcclxuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiIsIi5uYW1lIC5zd2lwZXItc2xpZGUge1xuICB3aWR0aDogNDAlO1xufVxuLm5hbWUgaW9uLWNhcmQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAjZWVlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm5hbWUgaW9uLWNhcmQgaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hbWUgaW9uLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmFtZSBpb24tY2FyZCBoNiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm5hbWUgaW9uLWNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICM3NDc0NzQ7XG59XG4ubmFtZSAuc2tlbGV0b24tbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAuMXB4IDAuMXB4ICNlZWU7XG59XG4ubmFtZSAuc2tlbGV0b24tbmFtZSBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGhlaWdodDogOTBweDtcbn1cbi5uYW1lIC5za2VsZXRvbi1uYW1lIHAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5uYW1lIC5za2VsZXRvbi1uYW1lIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5yb3VuZCAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5yb3VuZCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDAuMXB4IDAuMXB4IDAuMXB4IDAuMXB4ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6ICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgcCB7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ucm91bmQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGg2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnJvdW5kIGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHAge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4ubmFtZS1jb3VudCAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6ICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ubmFtZS1jb3VudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZDpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubmFtZS1jb3VudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZDpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMC4xcHggMC4xcHggI2VlZTtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkOmxhc3QtY2hpbGQgaW9uLXNrZWxldG9uLXRleHQge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4ubmFtZS1jb3VudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tY2FyZDpsYXN0LWNoaWxkIHAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkOmxhc3QtY2hpbGQgaW9uLXNrZWxldG9uLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGlvbi1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hbWUtY291bnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWNhcmQgaDYge1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5uYW1lLWNvdW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIHAge1xuICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5ncmlkIGlvbi1jYXJkIHtcbiAgbWluLWhlaWdodDogMTQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMC4xcHggMC4xcHggI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogI2VlZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5ncmlkIGlvbi1jYXJkIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmdyaWQgaW9uLWNhcmQgaW9uLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmdyaWQgaW9uLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ3JpZCBpb24tY2FyZCBoNiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmdyaWQgaW9uLWNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3ViLWhlYWRpbmctZm9udC1zaXplKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzc0NzQ3NDtcbn1cblxuLmNhcmQtaDcge1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaDgge1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLXNrZWxldG9uLWg4IHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5jYXJkLXNrZWxldG9uLWg4IC5za2VsZXRvbi1oOCB7XG4gIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWg5IHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5jYXJkLWg5IC5hdmF0YXItaDkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNhcmQtaDkgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNhcmQtaDkgcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSkgIWltcG9ydGFudDtcbn1cblxuLmNvdW50IHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/components/categories/categories.component.ts":
  /*!***********************************************************!*\
    !*** ./src/components/categories/categories.component.ts ***!
    \***********************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcComponentsCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
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

    var CategoriesComponent = /*#__PURE__*/function () {
      function CategoriesComponent(config, shared, nav, events) {
        _classCallCheck(this, CategoriesComponent);

        this.config = config;
        this.shared = shared;
        this.nav = nav;
        this.events = events; //for product slider after banner

        this.sliderConfig = {
          slidesPerView: 2.2,
          spaceBetween: 0
        };
        this.sliderConfig2 = {
          slidesPerView: 3.5,
          spaceBetween: 0
        };
      }

      _createClass(CategoriesComponent, [{
        key: "openSubCategories",
        value: function openSubCategories(parent) {
          var count = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.shared.subCategories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var val = _step.value;
              if (val.parent == parent.id) count++;
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

          if (count == 0) this.nav.navigateForward("/products/" + parent.id + "/" + parent.name + "/newest");else {
            this.events.publish("openSubcategoryPage", parent);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [{
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], CategoriesComponent.prototype, "type", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/categories/categories.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.component.scss */
      "./src/components/categories/categories.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"]])], CategoriesComponent);
    /***/
  },

  /***/
  "./src/components/product/product.component.scss":
  /*!*******************************************************!*\
    !*** ./src/components/product/product.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsProductProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-component ion-card {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n.product-component ion-card div div {\n  text-transform: uppercase;\n  position: absolute;\n  z-index: 1;\n  font-size: 0.6875rem;\n  background: var(--ion-color-secondary);\n  color: white;\n  right: 0px;\n  width: auto;\n  top: 0px;\n  border-radius: 2px;\n  padding: 2px 4px;\n}\n.product-component ion-card div div:nth-child(2) {\n  top: 20px;\n}\n.product-component ion-card #newimage {\n  height: 52px;\n  position: absolute;\n  z-index: 1;\n  left: 0px !important;\n  width: 30%;\n  top: -4px;\n  margin-left: -4.2px;\n}\n.product-component ion-card #image {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n  width: auto;\n  height: auto;\n}\n.product-component ion-card p {\n  padding-left: 5px;\n  padding-right: 5px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  margin-top: 5px;\n  margin-bottom: 0px;\n  color: black;\n  font-size: 0.6875rem;\n}\n.product-component ion-card ion-grid ion-row ion-col {\n  overflow: hidden;\n}\n.product-component ion-card ion-grid ion-row ion-col h4 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 0.75rem;\n}\n.product-component ion-card ion-grid ion-row ion-col h4 .woocs_price_code {\n  display: -webkit-box;\n  display: flex;\n  color: #222;\n}\n.product-component ion-card ion-grid ion-row ion-col h4 del .woocommerce-Price-amount {\n  display: block;\n  font-size: 0.8125rem;\n  color: var(--ion-color-medium);\n  text-decoration: line-through;\n}\n.product-component ion-card ion-grid ion-row ion-col h4 ins {\n  text-decoration: none;\n}\n.product-component ion-card ion-grid ion-row ion-col h4 ins .woocommerce-Price-amount {\n  display: block;\n  color: #222;\n  font-size: 0.8125rem;\n  font-weight: 550;\n  margin-left: 5px;\n}\n.product-component ion-card ion-grid ion-row ion-col h4 .woocommerce-Price-amount {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 550;\n}\n.product-component ion-card ion-grid ion-row ion-icon {\n  font-size: 17px;\n  color: var(--ion-color-secondary);\n}\n.product-component ion-card ion-grid ion-row ion-button {\n  width: 100%;\n  height: 25px;\n  margin: 0px;\n  --border-radius: 0px;\n}\n.product-component ion-item {\n  border-bottom: solid #eee;\n  border-top: solid #eee;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n.product-component ion-item ion-thumbnail {\n  margin: 0;\n  height: 100px;\n  width: 100px;\n}\n.product-component ion-item ion-thumbnail .badge-img {\n  position: absolute;\n  z-index: 1;\n  height: 45px;\n  width: 45px;\n  left: 9px;\n  top: 9px;\n}\n.product-component ion-item ion-thumbnail img {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\n.product-component ion-item #list-heart-icon {\n  margin-bottom: 0;\n  position: absolute;\n  top: 60px;\n  right: 10px;\n  font-size: 25px;\n  color: var(--ion-color-secondary);\n}\n.product-component ion-item ion-label {\n  margin-bottom: auto;\n  margin-left: 10px;\n}\n.product-component ion-item ion-label p {\n  margin-top: 10px;\n}\n.product-component ion-item .sale {\n  background: var(--ion-color-secondary);\n  padding: 2px;\n  color: white;\n  position: absolute;\n  z-index: 1;\n  right: 0;\n}\n.product-component ion-item .featured {\n  background: var(--ion-color-secondary);\n  padding: 2px;\n  color: white;\n  position: absolute;\n  z-index: 1;\n  right: 0;\n}\n.product-component ion-item .img-div {\n  font-size: 12px;\n}\n.product-component ion-item .img-div :nth-child(1) {\n  top: 0;\n}\n.product-component ion-item .img-div :nth-child(2) {\n  top: 25px;\n}\n.product-component .card-add-cart {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9;\n}\n.product-component .card-add-cart:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 110%;\n  height: 102%;\n  background-color: white;\n  opacity: 0.8;\n}\n.product-component .card-add-cart ion-icon {\n  position: unset;\n  margin: auto;\n  font-size: 2.5rem;\n  color: var(--ion-color-secondary);\n  z-index: 10;\n}\n.product-component [dir=rtl] ion-card p {\n  text-align: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7QURFTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURFUTtFQUNFLFNBQUE7QUNBVjtBRElJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FESUk7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FESUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDSE47QURPUTtFQUNFLGdCQUFBO0FDTFY7QURNVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNKWjtBREtZO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0hkO0FETWM7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FDSmhCO0FET1k7RUFDRSxxQkFBQTtBQ0xkO0FETWM7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0poQjtBRE9ZO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNMZDtBRFNRO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FDUFY7QURVUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDUlY7QURlRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDYko7QURjSTtFQVNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ3BCTjtBRFVNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ1JSO0FEYU07RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FDWFI7QURjSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ1pOO0FEY0k7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDWk47QURhTTtFQUNFLGdCQUFBO0FDWFI7QURjSTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDWk47QURjSTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDWk47QURjSTtFQUNFLGVBQUE7QUNaTjtBRGFNO0VBQ0UsTUFBQTtBQ1hSO0FEYU07RUFDRSxTQUFBO0FDWFI7QURnQkU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDZEo7QURnQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDZE47QURnQkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FDZE47QURtQkk7RUFDRSw0QkFBQTtBQ2pCTiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jb21wb25lbnQge1xuICBpb24tY2FyZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgZGl2IHtcbiAgICAgIGRpdiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcGFkZGluZzogMnB4IDRweDtcbiAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAjbmV3aW1hZ2Uge1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIHRvcDogLTRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNC4ycHg7XG4gICAgfVxuICAgICNpbWFnZSB7XG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgcCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAvL3RleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICB9XG4gICAgaW9uLWdyaWQge1xuICAgICAgaW9uLXJvdyB7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIC53b29jc19wcmljZV9jb2RlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWwge1xuICAgICAgICAgICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucyB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgICAvL3BhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZm9yIHByb2R1Y3QgbGlzdFxuICBpb24taXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAjZWVlO1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgLmJhZGdlLWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgbGVmdDogOXB4O1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgIH1cbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBpbWcge1xuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgICAgIH1cbiAgICB9XG4gICAgI2xpc3QtaGVhcnQtaWNvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA2MHB4O1xuICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNhbGUge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBwYWRkaW5nOiAycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5mZWF0dXJlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gICAgLmltZy1kaXYge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICAgIDpudGgtY2hpbGQoMikge1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhcmQtYWRkLWNhcnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogOTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDExMCU7XG4gICAgICBoZWlnaHQ6IDEwMiU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgcG9zaXRpb246IHVuc2V0O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG4gIH1cblxuICBbZGlyPVwicnRsXCJdIHtcbiAgICBpb24tY2FyZCBwIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4iLCIucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCBpb24tY2FyZCBkaXYgZGl2IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRvcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQgZGl2IGRpdjpudGgtY2hpbGQoMikge1xuICB0b3A6IDIwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQgI25ld2ltYWdlIHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzAlO1xuICB0b3A6IC00cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNC4ycHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQgI2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQgcCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDAuNjg3NXJlbTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCBpb24tY2FyZCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IGlvbi1jYXJkIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGg0IC53b29jc19wcmljZV9jb2RlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMyMjI7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGg0IGRlbCAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IGlvbi1jYXJkIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBoNCBpbnMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGg0IGlucyAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjMjIyO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCBpb24tY2FyZCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaDQgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCBpb24tY2FyZCBpb24tZ3JpZCBpb24tcm93IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWNhcmQgaW9uLWdyaWQgaW9uLXJvdyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgI2VlZTtcbiAgYm9yZGVyLXRvcDogc29saWQgI2VlZTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IGlvbi1pdGVtIGlvbi10aHVtYm5haWwge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCBpb24taXRlbSBpb24tdGh1bWJuYWlsIC5iYWRnZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGxlZnQ6IDlweDtcbiAgdG9wOiA5cHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCBpbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCBpb24taXRlbSAjbGlzdC1oZWFydC1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWl0ZW0gLnNhbGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgcmlnaHQ6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWl0ZW0gLmZlYXR1cmVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHJpZ2h0OiAwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IGlvbi1pdGVtIC5pbWctZGl2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IGlvbi1pdGVtIC5pbWctZGl2IDpudGgtY2hpbGQoMSkge1xuICB0b3A6IDA7XG59XG4ucHJvZHVjdC1jb21wb25lbnQgaW9uLWl0ZW0gLmltZy1kaXYgOm50aC1jaGlsZCgyKSB7XG4gIHRvcDogMjVweDtcbn1cbi5wcm9kdWN0LWNvbXBvbmVudCAuY2FyZC1hZGQtY2FydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5jYXJkLWFkZC1jYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTEwJTtcbiAgaGVpZ2h0OiAxMDIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC44O1xufVxuLnByb2R1Y3QtY29tcG9uZW50IC5jYXJkLWFkZC1jYXJ0IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHVuc2V0O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHotaW5kZXg6IDEwO1xufVxuLnByb2R1Y3QtY29tcG9uZW50IFtkaXI9cnRsXSBpb24tY2FyZCBwIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/components/product/product.component.ts":
  /*!*****************************************************!*\
    !*** ./src/components/product/product.component.ts ***!
    \*****************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
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


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(config, shared, navCtrl, modalCtrl, events, storage, loading) {
        var _this2 = this;

        _classCallCheck(this, ProductComponent);

        this.config = config;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.storage = storage;
        this.loading = loading;
        this.isLiked = 0;
        this.wishArray = [];
        events.subscribe('wishListUpdate', function (id, value) {
          if (id == _this2.p.id) _this2.isLiked = value;
        });
        this.storage.get('wishListProducts').then(function (val) {
          _this2.wishArray = val;

          _this2.checkWishList();
        });
      }

      _createClass(ProductComponent, [{
        key: "checkWishList",
        value: function checkWishList() {
          //getting wishList items from local storage
          var count = 0;

          if (this.wishArray != null) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.wishArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var value = _step2.value;
                if (value.id == this.p.id) count++;
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
          }

          if (count != 0) this.isLiked = 1;else this.isLiked = 0;
        }
      }, {
        key: "pDiscount",
        value: function pDiscount() {
          var rtn = "";
          var p1 = parseInt(this.p.regular_price);
          var p2 = parseInt(this.p.sale_price);

          if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
            rtn = "";
          }

          var result = Math.abs((p1 - p2) / p1 * 100);
          result = parseInt(result.toString());

          if (result == 0) {
            rtn = "";
          }

          rtn = result + '%';
          return rtn;
        }
      }, {
        key: "showProductDetail",
        value: function showProductDetail() {
          this.shared.singleProductPageData.push(this.p);
          this.navCtrl.navigateForward("product-detail/" + this.p.id);

          if (this.type != 'recent') {
            this.shared.addToRecent(this.p);
          }
        }
      }, {
        key: "checkProductNew",
        value: function checkProductNew() {
          var pDate = new Date(this.p.date_created);
          var date = pDate.getTime() + this.config.newProductDuration * 86400000;
          var todayDate = new Date().getTime();
          if (date > todayDate) return true;else return false;
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          this.shared.addToCart(this.p, null, null, null); //this.navCtrl.push(CartPage); 
        }
      }, {
        key: "isInCart",
        value: function isInCart() {
          var found = false;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.shared.cartProducts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var value = _step3.value;

              if (value.product_id == this.p.id) {
                found = true;
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

          if (found == true) return true;else return false;
        }
      }, {
        key: "removeRecent",
        value: function removeRecent() {
          this.shared.removeRecent(this.p);
        }
      }, {
        key: "clickWishList",
        value: function clickWishList() {
          // this.loading.autoHide(500);
          if (this.isLiked == 0) {
            this.addWishList();
          } else {
            this.removeWishList();
          }
        }
      }, {
        key: "addWishList",
        value: function addWishList() {
          this.shared.addWishList(this.p);
        }
      }, {
        key: "removeWishList",
        value: function removeWishList() {
          this.shared.removeWishList(this.p);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProductComponent.prototype, "p", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], ProductComponent.prototype, "type", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/product/product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.scss */
      "./src/components/product/product.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])], ProductComponent);
    /***/
  },

  /***/
  "./src/components/scrolling-featured-products/scrolling-featured-products.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/components/scrolling-featured-products/scrolling-featured-products.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsScrollingFeaturedProductsScrollingFeaturedProductsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvY29tcG9uZW50cy9zY3JvbGxpbmctZmVhdHVyZWQtcHJvZHVjdHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzL3Njcm9sbGluZy1mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvc2Nyb2xsaW5nLWZlYXR1cmVkLXByb2R1Y3RzL3Njcm9sbGluZy1mZWF0dXJlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xyXG4gICAgaW9uLXJvd3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbn0iLCJpb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/components/scrolling-featured-products/scrolling-featured-products.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/components/scrolling-featured-products/scrolling-featured-products.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ScrollingFeaturedProductsComponent */

  /***/
  function srcComponentsScrollingFeaturedProductsScrollingFeaturedProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingFeaturedProductsComponent", function () {
      return ScrollingFeaturedProductsComponent;
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

    var ScrollingFeaturedProductsComponent = /*#__PURE__*/function () {
      function ScrollingFeaturedProductsComponent(config, shared) {
        _classCallCheck(this, ScrollingFeaturedProductsComponent);

        this.config = config;
        this.shared = shared; // For products

        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selected = '';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
      }

      _createClass(ScrollingFeaturedProductsComponent, [{
        key: "getProducts",
        value: function getProducts() {
          var _this3 = this;

          if (this.loadingServerData) return 0;

          if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
          }

          this.loadingServerData = true;
          var query = 'products?' + 'page=' + this.page;
          if (this.selected != '') query = 'products?page=' + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;
          this.config.getWoo(query).then(function (data) {
            var dat = data;
            _this3.infinite.disabled = false;

            if (_this3.page == 1) {
              _this3.products = new Array();
            }

            if (dat.length != 0) {
              _this3.page++;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = dat[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var value = _step4.value;

                  _this3.products.push(value);
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

            if (dat.length == 0) {
              _this3.infinite.disabled = true;
            }

            _this3.loadingServerData = false;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts();
        }
      }]);

      return ScrollingFeaturedProductsComponent;
    }();

    ScrollingFeaturedProductsComponent.ctorParameters = function () {
      return [{
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])], ScrollingFeaturedProductsComponent.prototype, "infinite", void 0);
    ScrollingFeaturedProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scrolling-featured-products',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./scrolling-featured-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/scrolling-featured-products/scrolling-featured-products.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./scrolling-featured-products.component.scss */
      "./src/components/scrolling-featured-products/scrolling-featured-products.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]])], ScrollingFeaturedProductsComponent);
    /***/
  },

  /***/
  "./src/components/share/share.module.ts":
  /*!**********************************************!*\
    !*** ./src/components/share/share.module.ts ***!
    \**********************************************/

  /*! exports provided: ShareModule */

  /***/
  function srcComponentsShareShareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareModule", function () {
      return ShareModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../banner/banner.component */
    "./src/components/banner/banner.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/components/product/product.component.ts");
    /* harmony import */


    var _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../vendor-list/vendor-list.component */
    "./src/components/vendor-list/vendor-list.component.ts");
    /* harmony import */


    var _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sliding-tabs/sliding-tabs.component */
    "./src/components/sliding-tabs/sliding-tabs.component.ts");
    /* harmony import */


    var _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../scrolling-featured-products/scrolling-featured-products.component */
    "./src/components/scrolling-featured-products/scrolling-featured-products.component.ts");
    /* harmony import */


    var _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../categories/categories.component */
    "./src/components/categories/categories.component.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts"); //for home banner
    //for home footer segment
    // for product
    //for vendor list
    //for sliding tab
    //for featrued product scrolling
    //for categories


    var ShareModule = function ShareModule() {
      _classCallCheck(this, ShareModule);
    };

    ShareModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__["VendorListComponent"], _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__["SlidingTabsComponent"], _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__["ScrollingFeaturedProductsComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"]],
      exports: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"], _vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_7__["VendorListComponent"], _sliding_tabs_sliding_tabs_component__WEBPACK_IMPORTED_MODULE_8__["SlidingTabsComponent"], _scrolling_featured_products_scrolling_featured_products_component__WEBPACK_IMPORTED_MODULE_9__["ScrollingFeaturedProductsComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"]],
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"]]
    })], ShareModule);
    /***/
  },

  /***/
  "./src/components/sliding-tabs/sliding-tabs.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/components/sliding-tabs/sliding-tabs.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsSlidingTabsSlidingTabsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-segment ion-segment-button {\n  --indicator-color:lightgray;\n  --indicator-color-checked: var(--ion-color-primary);\n  --color-checked: var(--ion-color-primary);\n  font-size: 0.75rem;\n}\nion-segment ion-segment-button img {\n  width: 32px;\n  height: 36px;\n  padding: 6px;\n}\nion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvY29tcG9uZW50cy9zbGlkaW5nLXRhYnMvc2xpZGluZy10YWJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2NvbXBvbmVudHMvc2xpZGluZy10YWJzL3NsaWRpbmctdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDJCQUFBO0VBQ0EsbURBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NaO0FESUk7RUFDSSxrQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3NsaWRpbmctdGFicy9zbGlkaW5nLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VnbWVudHtcclxuICAgIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgICAtLWluZGljYXRvci1jb2xvcjpsaWdodGdyYXk7XHJcbiAgICAgICAgLS1pbmRpY2F0b3ItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweFxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufVxyXG5pb24tZ3JpZHtcclxuICAgIGlvbi1yb3d7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59IiwiaW9uLXNlZ21lbnQgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgLS1pbmRpY2F0b3ItY29sb3I6bGlnaHRncmF5O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5pb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzZweDtcbiAgcGFkZGluZzogNnB4O1xufVxuXG5pb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/components/sliding-tabs/sliding-tabs.component.ts":
  /*!***************************************************************!*\
    !*** ./src/components/sliding-tabs/sliding-tabs.component.ts ***!
    \***************************************************************/

  /*! exports provided: SlidingTabsComponent */

  /***/
  function srcComponentsSlidingTabsSlidingTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlidingTabsComponent", function () {
      return SlidingTabsComponent;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");

    var SlidingTabsComponent = /*#__PURE__*/function () {
      function SlidingTabsComponent(shared, config, loading, applicationRef) {
        _classCallCheck(this, SlidingTabsComponent);

        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.applicationRef = applicationRef;
        this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.selected = '0';
        this.page = 1;
        this.count = 0;
        this.loadingServerData = false;
      }

      _createClass(SlidingTabsComponent, [{
        key: "getProducts",
        value: function getProducts(infiniteScroll) {
          var _this4 = this;

          if (this.loadingServerData) return 0;

          if (this.page == 1) {
            this.count++;
            this.loadingServerData = false;
          }

          this.loadingServerData = true;
          var query = 'products?' + 'page=' + this.page;
          if (this.selected != '0') query = 'products?category=' + this.selected + '&page=' + this.page;
          query = query + "&status=publish" + "&" + this.config.productsArguments;

          if (this.page == 1) {
            this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          }

          this.config.getWoo(query).then(function (data) {
            var dat = data;

            _this4.infinite.complete();

            if (_this4.page == 1) {
              _this4.products = new Array();
            }

            if (dat.length != 0) {
              _this4.page++;
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = dat[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var value = _step5.value;

                  _this4.products.push(value);
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
            }

            if (dat.length < 10) {
              _this4.infinite.disabled = true;
            }

            _this4.loadingServerData = false;

            _this4.applicationRef.tick();
          });
        } //changing tab

      }, {
        key: "changeTab",
        value: function changeTab(c) {
          this.infinite.disabled = false;
          this.page = 1;
          if (c == '0') this.selected = c;else this.selected = c.id;
          this.getProducts(null); //this.loading.autoHide(700);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProducts(null);
        }
      }]);

      return SlidingTabsComponent;
    }();

    SlidingTabsComponent.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"])], SlidingTabsComponent.prototype, "infinite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SlidingTabsComponent.prototype, "type", void 0);
    SlidingTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sliding-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sliding-tabs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/sliding-tabs/sliding-tabs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sliding-tabs.component.scss */
      "./src/components/sliding-tabs/sliding-tabs.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], SlidingTabsComponent);
    /***/
  },

  /***/
  "./src/components/vendor-list/vendor-list.component.scss":
  /*!***************************************************************!*\
    !*** ./src/components/vendor-list/vendor-list.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcComponentsVendorListVendorListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".swiper-slide {\n  width: 40%;\n}\n\nion-card {\n  margin-right: 0px;\n  margin-top: 10px !important;\n  height: auto;\n  border-radius: 0px;\n}\n\nion-card ion-img {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  background: #fff;\n}\n\nion-card p {\n  padding-left: 10px;\n  padding-right: 10px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 0px;\n  color: black;\n}\n\nion-card {\n  width: 100%;\n}\n\nion-skeleton-text {\n  height: 80px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvY29tcG9uZW50cy92ZW5kb3ItbGlzdC92ZW5kb3ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9jb21wb25lbnRzL3ZlbmRvci1saXN0L3ZlbmRvci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREFFO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL3ZlbmRvci1saXN0L3ZlbmRvci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZSB7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGlvbi1pbWcge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5pb24tY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLXNrZWxldG9uLXRleHQge1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4iLCIuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbmlvbi1jYXJkIGlvbi1pbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbmlvbi1jYXJkIHAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1za2VsZXRvbi10ZXh0IHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/components/vendor-list/vendor-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/components/vendor-list/vendor-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: VendorListComponent */

  /***/
  function srcComponentsVendorListVendorListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VendorListComponent", function () {
      return VendorListComponent;
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


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var VendorListComponent = /*#__PURE__*/function () {
      function VendorListComponent(navCtrl, config, shared, loading, http, applicationRef) {
        _classCallCheck(this, VendorListComponent);

        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.loading = loading;
        this.http = http;
        this.applicationRef = applicationRef; //for product slider after banner

        this.sliderConfig = {
          slidesPerView: 2.5,
          spaceBetween: 0
        };
      }

      _createClass(VendorListComponent, [{
        key: "openVendorPage",
        value: function openVendorPage(c) {
          var _this5 = this;

          if (this.config.showVendorInfo) {
            this.loading.show();
            this.config.getWithUrl(this.config.url + "/wp-json/dokan/v1/stores/" + c.user_id).then(function (data) {
              _this5.loading.hide();

              var d = data;

              _this5.shared.storePageData.push(d);

              var id;
              if (d.ID) id = d.ID;
              if (d.id) id = d.id;

              _this5.navCtrl.navigateForward("/store/" + id);

              _this5.applicationRef.tick();
            });
          } else if (this.config.showWcVendorInfo) {
            //this.loading.show();
            this.shared.storePageData.push(c);
            console.log(this.shared.storePageData);
            var id;
            if (c.ID) id = c.ID;
            if (c.id) id = c.id;
            if (c.user_id) id = c.user_id;
            this.navCtrl.navigateForward("/store/" + id); // this.http.get(this.config.url + "/api/appsettings/get_vendor_info/?insecure=cool&product_id=" + c.user_id).map(res => res.json()).subscribe(data => {
            //   this.loading.hide();
            //   this.applicationRef.tick();
            // });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VendorListComponent;
    }();

    VendorListComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]
      }];
    };

    VendorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vendor-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vendor-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/components/vendor-list/vendor-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vendor-list.component.scss */
      "./src/components/vendor-list/vendor-list.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])], VendorListComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~home-pages-home-home-module~home-pages-home10-home10-module~home-pages-home2-home2-module~ho~d52f8f32-es5.js.map