(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{product.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"product-detail-page\">\n  <div class=\"product-tags-top\">\n    <div class=\"product-tag-new\" *ngIf=\"checkProductNew()\">{{'Nouveauté'|translate}}</div>\n    <div class=\"product-tag-featured\" *ngIf=\"product.featured\">{{'En Vedette'|translate}}</div>\n  </div>\n\n  <div class=\"icons share-like\">\n    <ion-icon name=\"share\" (click)=\"share()\"></ion-icon>\n    <ion-icon *ngIf=\"isLiked!=0\" name=\"heart\" (click)=\"clickWishList()\"></ion-icon>\n    <ion-icon *ngIf=\"isLiked==0\" name=\"heart-empty\" (click)=\"clickWishList()\"></ion-icon>\n  </div>\n  <ion-slides class=\"product-slides\" pager=\"true\" dir=\"{{shared.dir}}\">\n    <ion-slide *ngFor=\"let b of product.images\">\n      <div>\n        <img src=\"{{b.src}}\" imageViewer>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-grid class=\"product-detail-title\">\n    <ion-row>\n      <div class=\"product-tags\">\n        <div class=\"product-tag-off\" *ngIf=\"product.on_sale\">{{'PROMOTION'|translate}}</div>\n      </div>\n      <!-- 2.0 updates -->\n\n      <ion-col class=\"woo-price-group\" size=\"12\">\n        <span class=\"woo-price\" [innerHTML]=\"product.price_html\"></span>\n        <span class=\"woo-price\" *ngIf=\"variationPrice!=null\">{{'Votre prix'|translate}} &nbsp;\n          {{variationPrice|curency}}</span>\n\n        <span class=\"product-outstock\" *ngIf=\"product.stock_status!='instock'\">{{'En rupture de stock'|translate}}</span>\n        <span class=\"product-instock\" *ngIf=\"product.stock_status=='instock'\">{{'En stock'|translate}}&nbsp;\n          <span *ngIf=\"product.stock_quantity!=null\">({{product.stock_quantity}})</span>\n        </span>\n      </ion-col>\n\n      <ion-col class=\"product-title\" size=\"12\">\n        <h3>{{product.name}}\n          <br>\n          <small *ngFor=\"let b of product.categories\">{{b.name}}&nbsp;</small>\n        </h3>\n        <ion-spinner *ngIf=\"ratingStarsValue==null\"></ion-spinner>\n        <div class=\"product-ratings\">\n          <ion-row class=\"product-rating animate\" *ngIf=\"product.reviews_allowed && ratingStarsValue!=null\"\n            (click)=\"openReviewsPage()\">\n            <div class=\"stars-outer\">\n              <div class=\"stars-inner\" [style.width]=\"ratingStarsValue+'%'\"></div>\n            </div>\n            <ion-col size=\"7\">\n              <h6>{{reviews.length}}&nbsp;{{'note et avis'|translate}}</h6>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <p style=\"display:none;\">{{'Total Sales'|translate}}&nbsp;({{product.total_sales}})</p> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-header\" *ngIf=\"product.type!='grouped'\">\n    <ion-row>\n      <ion-col class=\"left\" size=\"6\">\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"qty-name\" size=\"12\">{{'Quantité' |translate}}</ion-col>\n          <ion-col size=\"2.7\" class=\"qty-vlue ion-text-right\">\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"qunatityMinus(product,quantity);\"\n              *ngIf=\"!product.sold_individually\">\n              <ion-icon name=\"remove\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"3\" class=\"qty-vlue\">\n            <ion-input class=\"dgi\" type=\"number\" name=\"q\" [(ngModel)]=\"quantity\" (focusout)=\"quantityChange()\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"3\" class=\"qty-vlue\">\n            <!-- <span class=\"dgi\">{{quantity}}</span> -->\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"qunatityPlus(product,quantity);\"\n              *ngIf=\"!product.sold_individually\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-text-end\" size=\"6\" *ngIf=\"selectedVariation!=null && !disableCartButton\">\n        <ion-row class=\"ion-no-margin\">\n          <ion-col class=\"ion-text-right\" class=\"ttl-name\" size=\"12\">{{'Total' |translate}}&nbsp;{{'Prix' |translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" class=\"ttl-vlue\" size=\"12\">{{ quantity*selectedVariation.price|curency}}\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-text-end\" size=\"6\" *ngIf=\"product.type!='variable'\">\n        <ion-row class=\"ion-no-margin\">\n          <ion-col class=\"ion-text-right\" class=\"ttl-name\" size=\"12\">{{'Total' |translate}}&nbsp;{{'Prix' |translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" class=\"ttl-vlue\" size=\"12\">{{ quantity*product.price|curency}}</ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"select-col\" size=\"12\" *ngIf=\"product.type=='variable'\">\n        {{'Veuillez sélectionner toutes les options '|translate}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class=\"product-detail-content\" *ngIf=\"product.sku!=null && product.sku!=''\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <h3>{{'SKU'|translate}}</h3>\n        <div class=\"product-describtion\">{{product.sku}}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"groupProducts.length==0 && product.type=='grouped'\">\n    <ion-col>\n      <ion-spinner></ion-spinner>\n    </ion-col>\n  </ion-grid>\n  <ion-list class=\"group-product\" *ngIf=\"groupProducts.length!=0\">\n\n    <ion-item *ngFor=\"let g of groupProducts\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{g.images[0].src}}\">\n      </ion-thumbnail>\n      <ion-label>\n        <ion-text>\n          <h3 class=\"ion-text-left\">{{g.name}}</h3>\n        </ion-text>\n        <span class=\"ion-text-left\" class=\"woo-price\" [innerHTML]=\"g.price_html\"></span>\n\n        <ion-row class=\"qty-box-total\">\n          <ion-col class=\"left\" size=\"12\">\n            <ion-row>\n              <ion-col class=\"ion-text-left\" class=\"qty-name\" size=\"12\">{{'Quantity' |translate}}</ion-col>\n              <ion-col class=\"qty-vlue ion-text-right\" size=\"3\">\n                <ion-button class=\"button\" size=\"small\" color=\"secondary\" (click)=\"qunatityGroupMinus(g)\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col class=\"qty-vlue\" size=\"3\">\n                <span class=\"dgi\">{{g.quantity}}</span>\n              </ion-col>\n              <ion-col class=\"qty-vlue\" size=\"3\">\n                <ion-button class=\"button\" size=\"small\" color=\"secondary\" (click)=\"qunatityGroupPlus(g)\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"ttl-name\" size=\"12\">{{'Total' |translate}}&nbsp;{{'Price' |translate}}</ion-col>\n              <ion-col class=\"ttl-vlue\" size=\"12\">{{ g.quantity*g.price|curency}}</ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-grid class=\"product-detail-content product-tags\" *ngIf=\"product.type!='variable' && attributes.length!=0\">\n    <ion-row>\n      <ion-col>\n        <h3>{{'Tags'|translate}}</h3>\n        <span *ngFor=\" let att of attributes\">\n          <span *ngIf=\"product.type!='variable'\">\n            <span *ngIf=\"att.visible\">\n              <h6>{{att.name}}</h6>\n              <ion-badge *ngFor=\" let val of att.options\">{{val}}</ion-badge>\n            </span>\n          </span>\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"loaderProductVariations\">\n    <ion-col>\n      <ion-spinner></ion-spinner>\n    </ion-col>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"product.type=='variable' && !loaderProductVariations\">\n    <ion-list>\n      <div *ngFor=\" let att of attributes; let ind = index\">\n        <ion-item *ngIf=\"att.variation\">\n          <ion-label>{{att.name}}</ion-label>\n          <ion-select [(ngModel)]=\"att.value\" (ionChange)=\"fillAttributes(att.value,att.name,ind)\"\n            okText=\"{{'Ok'|translate}}\" cancelText=\"{{'Cancel'|translate}}\">\n            <span *ngFor=\" let val of att.options; let i = index\">\n              <ion-select-option value=\"choose\" selected *ngIf=\"i==0\">{{'Select'|translate}}\n              </ion-select-option>\n              <ion-select-option [value]=\"val\" *ngIf=\"availableOption(att.name,val)\">{{val}}</ion-select-option>\n            </span>\n          </ion-select>\n        </ion-item>\n      </div>\n    </ion-list>\n    <!-- <ion-list>\n      <ion-radio-group *ngFor=\" let att of attributes; let ind = index\" [(ngModel)]=\"att.value\">\n        <div *ngIf=\"false\">\n          <ion-list-header>\n            {{att.name}}\n          </ion-list-header>\n          <ion-row>\n            <ion-col *ngFor=\" let val of att.options; let i = index\">\n              <ion-item>\n               *ngIf=\"availableOption(att.name,val)\" \n                <ion-label>{{val}}</ion-label>\n                <ion-radio [value]=\"val\" [disabled]=\"!availableOption(att.name,val)\"\n                  (ionChange)=\"fillAttributes(att.value,att.name,ind)\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-radio-group>\n    </ion-list> -->\n\n    <ion-row>\n      <ion-col>\n        <span *ngFor=\" let att of attributes\">\n          <span *ngIf=\"!att.variation\">\n            <span *ngIf=\"att.visible\">\n              <h6>{{att.name}}</h6>\n              <ion-badge *ngFor=\" let val of att.options\">{{val}} </ion-badge>\n            </span>\n          </span>\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-content bing-fo\" *ngIf=\"config.showVendorInfo && product.store\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <h3>{{'Seller Information'|translate}}<br><small>{{'Sold by'|translate}}{{' '+product.store.name}}</small></h3>\n        <ion-button expand=\"block\" color=\"light\" (click)=\"openStore(product.store)\">\n          {{'View Store'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"loaderWcVendorInfo\">\n    <ion-col>\n      <ion-spinner></ion-spinner>\n    </ion-col>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-content bing-fo\"\n    *ngIf=\"!loaderWcVendorInfo && config.showWcVendorInfo && wcVendorInfo.meta.pv_shop_name\">\n    <ion-row *ngIf=\"!loaderWcVendorInfo\">\n      <ion-col size=\"12\">\n        <h3>\n          {{'Seller Information'|translate}}<br><small>{{'Sold by'|translate}}{{' '+wcVendorInfo.meta.pv_shop_name}}</small>\n        </h3>\n        <ion-button expand=\"block\" color=\"light\" (click)=\"openStore(wcVendorInfo)\">\n          {{'View Store'|translate}}</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-content ion-no-padding\" *ngIf=\"product.description!=''\">\n    <ion-row class=\"top-icon-header heading\">\n      <ion-button fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"md-list\"></ion-icon>\n        {{'Product Description'|translate}}\n      </ion-button>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col size=\"12\" style=\"padding:0 10px\">\n        <div class=\"product-description\" [innerHTML]=\"product.description\"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"product-detail-content animate-product ion-no-padding\">\n    <ion-col *ngIf=\"releatedItems.length==0\">\n      <ion-spinner style=\"margin-left:5px\"></ion-spinner>\n    </ion-col>\n    <ion-row class=\"ion-no-padding\" *ngIf=\"releatedItems.length!=0\">\n      <ion-col class=\"ion-no-padding\" size=\"12\">\n        <ion-row class=\"top-icon-header heading\">\n          <ion-button fill=\"clear\">\n            <ion-icon slot=\"start\" name=\"albums\"></ion-icon>\n            {{'Related Items'|translate}}\n          </ion-button>\n        </ion-row>\n        <ion-slides class=\"animate-item\" [options]=\"sliderConfigReleatedItems\">\n          <ion-slide *ngFor=\"let p of releatedItems\">\n            <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectAttributes.length!=0\">\n    <ion-fab-button color=\"danger\" (click)=\"resetAttributes()\">{{'Clear'|translate}}\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n<ion-footer class=\"product-detail-footer\">\n  <ion-button expand=\"full\" color=\"secondary\" [disabled]=\"disableCartButton\" *ngIf=\"product.type!='external'\"\n    (click)=\"addToCartProduct()\">\n    {{'Add to Cart'|translate}}</ion-button>\n\n  <ion-button expand=\"full\" color=\"secondary\" [disabled]=\"disableCartButton\" *ngIf=\"product.type=='external'\"\n    (click)=\"openProduct()\">\n    {{product.button_text|translate}}</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/product-detail/product-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/product-detail/product-detail.page.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");









const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]
    }
];
let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_7__["ShareModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
    })
], ProductDetailPageModule);



/***/ }),

/***/ "./src/app/product-detail/product-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.product-detail-page .product-tags-top {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  z-index: 9;\n}\n.product-detail-page .product-tags-top .product-tag-new {\n  color: white;\n  background-color: red;\n  padding: 5px 8px;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n.product-detail-page .product-tags-top .product-tag-featured {\n  background-color: var(--ion-color-secondary);\n  color: white;\n  padding: 5px 8px;\n}\n.product-detail-page .icons {\n  position: absolute;\n  top: 10px;\n  right: 0;\n  background-color: #eee;\n  z-index: 9;\n  direction: ltr;\n}\n.product-detail-page .icons ion-icon {\n  padding-top: 5px;\n  font-size: 22px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.product-detail-page .icons ion-icon[name=share] {\n  color: #bed13c;\n}\n.product-detail-page .icons ion-icon[aria-label=heart],\n.product-detail-page .icons .icon[aria-label=\"heart outline\"] {\n  color: var(--ion-color-secondary);\n}\n.product-detail-page .product-slides .swiper-wrapper .swiper-slide {\n  background-color: #ececec;\n}\n.product-detail-page .product-slides img {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n}\n.product-detail-page .product-detail-title {\n  position: relative;\n  padding-bottom: 0;\n}\n.product-detail-page .product-detail-title .product-tags {\n  position: absolute;\n  left: 10px;\n  top: -15px;\n  z-index: 9;\n}\n.product-detail-page .product-detail-title .product-tags .product-tag-off {\n  background-color: var(--ion-color-secondary);\n  color: white;\n  padding: 5px 8px;\n  margin-right: 4px;\n  float: left;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.product-detail-page .product-detail-title .product-tags .product-tag-featured {\n  background-color: var(--ion-color-secondary);\n  color: white;\n  padding: 5px 8px;\n  float: left;\n}\n.product-detail-page .product-detail-title .woo-price-group {\n  padding-top: 15px;\n  padding-bottom: 0;\n}\n.product-detail-page .product-detail-title .woo-price-group .woocommerce-Price-amount {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n.product-detail-page .product-detail-title .woo-price-group .woo-price {\n  float: left;\n}\n.product-detail-page .product-detail-title .woo-price-group .woo-price del .woocommerce-Price-amount {\n  font-size: 16px;\n  color: var(--ion-color-dark);\n  text-decoration: line-through;\n}\n.product-detail-page .product-detail-title .woo-price-group .woo-price ins {\n  text-decoration: none;\n}\n.product-detail-page .product-detail-title .woo-price-group .woo-price ins .woocommerce-Price-amount {\n  margin-left: 5px;\n}\n.product-detail-page .product-detail-title .woo-price-group .product-instock,\n.product-detail-page .product-detail-title .woo-price-group .product-outstock {\n  float: right;\n  color: red;\n  padding-top: 0;\n  font-size: 14px;\n}\n.product-detail-page .product-detail-title .woo-price-group .product-instock {\n  color: var(--ion-color-dark);\n}\n.product-detail-page .product-detail-title .woo-price-group .product-outstock {\n  color: var(--ion-color-dark);\n}\n.product-detail-page .product-detail-title .product-title {\n  padding-bottom: 0;\n}\n.product-detail-page .product-detail-title .product-title h3 {\n  color: var(--ion-color-dark);\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.product-detail-page .product-detail-title .product-title h3 small {\n  font-size: 12px;\n  color: gray;\n}\n.product-detail-page .product-ratings .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 25px;\n}\n.product-detail-page .product-ratings .stars-outer::before {\n  content: \"☆☆☆☆☆\";\n  color: #ccc;\n}\n.product-detail-page .product-ratings .stars-outer .stars-inner {\n  font-size: 25px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.product-detail-page .product-ratings .stars-outer .stars-inner::before {\n  content: \"★★★★★\";\n  color: #f8ce0b;\n}\n.product-detail-page .product-ratings ion-icon {\n  font-size: 28px;\n  color: gray;\n}\n.product-detail-page .product-ratings h6 {\n  margin-bottom: 6px;\n  text-align: start;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  margin-top: 6px;\n}\n.product-detail-page .product-detail-header {\n  background-color: var(--ion-color-light);\n  position: relative;\n}\n.product-detail-page .product-detail-header .left,\n.product-detail-page .product-detail-header .right {\n  padding-bottom: 0;\n}\n.product-detail-page .product-detail-header .left .col,\n.product-detail-page .product-detail-header .right .col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.product-detail-page .product-detail-header .left .col {\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.product-detail-page .product-detail-header .right .col {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.product-detail-page .product-detail-header .qty-name {\n  padding-top: 0;\n  font-size: 12px;\n}\n.product-detail-page .product-detail-header .qty-name,\n.product-detail-page .product-detail-header .ttl-name {\n  padding-left: 0;\n  padding-bottom: 0;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.product-detail-page .product-detail-header .ttl-vlue {\n  font-weight: bold;\n  font-size: 20px;\n}\n.product-detail-page .product-detail-header .qty-vlue,\n.product-detail-page .product-detail-header .ttl-vlue {\n  padding-left: 0;\n  padding-right: 0;\n}\n.product-detail-page .product-detail-header .total-para {\n  font-size: 12px;\n}\n.product-detail-page .product-detail-header .qty-vlue {\n  padding-left: 0;\n  padding-right: 0;\n}\n.product-detail-page .product-detail-header .qty-vlue ion-button {\n  color: white;\n  border-width: 0;\n  margin: 0;\n  height: 30px;\n}\n.product-detail-page .product-detail-header .qty-vlue .dgi {\n  min-width: 35px;\n  max-width: 50px;\n  background-color: white;\n  height: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2);\n}\n.product-detail-page .product-detail-header .qty-vlue .dgi input {\n  text-align: center;\n  padding-left: 0px;\n}\n.product-detail-page .product-detail-content h3 {\n  margin-top: 0;\n  font-weight: 400;\n  font-size: 14px;\n  font-weight: 400;\n}\n.product-detail-page .product-detail-content p {\n  margin-bottom: 0;\n}\n.product-detail-page .product-detail-content.bing-fo {\n  background-color: var(ion-color-light);\n}\n.product-detail-page .group-product ion-label {\n  margin-left: 10px;\n}\n.product-detail-page .group-product ion-thumbnail {\n  margin: 0;\n  width: 115px;\n  height: 115px;\n}\n.product-detail-page .group-product ion-item {\n  --padding-start: 0;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  border-bottom: 1px solid #dedede;\n  background-color: var(--ion-color-dark);\n}\n.product-detail-page .group-product ion-item .item-inner {\n  border-bottom: none;\n}\n.product-detail-page .group-product .item:last-child {\n  border-bottom: none;\n}\n.product-detail-page .group-product h3 {\n  color: var(--ion-color-dark);\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-weight: 400;\n}\n.product-detail-page .group-product .woo-price {\n  float: left;\n  font-size: 12px;\n}\n.product-detail-page .group-product .woo-price del .woocommerce-Price-amount {\n  font-size: 16px;\n  color: var(--ion-color-dark);\n  text-decoration: line-through;\n}\n.product-detail-page .group-product .woo-price ins {\n  text-decoration: none;\n}\n.product-detail-page .group-product .woo-price ins .woocommerce-Price-amount {\n  margin-left: 5px;\n}\n.product-detail-page .group-product .qty-box-total {\n  float: left;\n}\n.product-detail-page .group-product .qty-box-total .left,\n.product-detail-page .group-product .qty-box-total .right {\n  padding-bottom: 0;\n}\n.product-detail-page .group-product .qty-box-total .left .col,\n.product-detail-page .group-product .qty-box-total .right .col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.product-detail-page .group-product .qty-box-total .left {\n  padding-left: 0;\n}\n.product-detail-page .group-product .qty-box-total .left .col {\n  padding-left: 0;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.product-detail-page .group-product .qty-box-total .right {\n  padding-right: 0;\n}\n.product-detail-page .group-product .qty-box-total .right .col {\n  padding-right: 0;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.product-detail-page .group-product .qty-box-total .qty-name,\n.product-detail-page .group-product .qty-box-total .ttl-name {\n  font-size: 12px;\n  text-transform: uppercase;\n  padding-bottom: 0;\n  padding-left: 0;\n}\n.product-detail-page .group-product .qty-box-total .ttl-vlue {\n  font-size: 12px;\n  padding-left: 0;\n}\n.product-detail-page .group-product .qty-box-total .qty-vlue {\n  padding-left: 0;\n  padding-right: 0;\n}\n.product-detail-page .group-product .qty-box-total .qty-vlue .button {\n  color: white;\n  border-width: 0;\n  margin: 0;\n  width: 45px;\n}\n.product-detail-page .group-product .qty-box-total .qty-vlue .dgi {\n  min-width: 50px;\n  background-color: white;\n  height: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.2);\n  text-align: center;\n  padding-left: 0;\n  --padding-start: 0;\n  padding-right: 0;\n}\n.product-detail-page .product-detail-content h3 {\n  margin-top: 0;\n}\n.product-detail-page .product-detail-content p {\n  margin-bottom: 0;\n}\n.product-detail-page .product-detail-content.bing-fo {\n  background-color: var(--ion-color-light);\n}\n.product-detail-page .product-description p {\n  font-size: 14px;\n  padding-left: 0px;\n  margin-top: 5px;\n}\n.product-detail-page .product-tags-top {\n  font-size: 14px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  z-index: 9;\n}\n.product-detail-page .product-tags-top .product-tag-new {\n  color: white;\n  background-color: red;\n  padding: 5px 8px;\n  display: inline-block;\n  margin-bottom: 4px;\n  text-transform: uppercase;\n}\n.product-detail-page .product-tags-top .product-tag-featured {\n  background-color: var(--ion-color-secondary);\n  color: white;\n  padding: 5px 8px;\n  text-transform: uppercase;\n}\n.product-detail-page ion-slides ion-slide:last-child {\n  height: auto;\n}\n.product-detail-page app-product {\n  width: 100%;\n}\n.product-detail-page ion-row ion-col h5 {\n  margin-top: 7px;\n  margin-bottom: 8px;\n}\n.product-detail-page ion-row ion-col ion-icon {\n  zoom: 0.8;\n  border-color: black;\n  border-width: 2px;\n}\n.product-detail-page .select-col {\n  font-size: 12px;\n}\n.product-detail-page .related-item {\n  padding-left: 10px;\n}\n.product-detail-page [dir=rtl] .product-tags-top {\n  right: 0;\n  left: auto;\n}\n.product-detail-page [dir=rtl] .share-like {\n  left: 0;\n  right: auto;\n}\n.product-detail-footer ion-button {\n  width: 100%;\n  margin: 0;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwiL2hvbWUvbW9yZWwvQnVyZWF1L3NvbHV0aW9uIGFuZHJvaWQgZG9sbGFycyBiaWpvdXgvQXBwIFNvdXJjZSBDb2RlL3NyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NkO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QURDSjtBQ0NJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FEQ047QUNDSTtFQUNFLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ047QUNFRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FEQUo7QUNDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURDTjtBQ0NJO0VBQ0UsY0FBQTtBRENOO0FDQ0k7O0VBRUUsaUNBQUE7QURDTjtBQ0lNO0VBQ0UseUJBQUE7QURGUjtBQ0tJO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBREhOO0FDTUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FESko7QUNNSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FESk47QUNNTTtFQUNFLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FESlI7QUNNTTtFQUNFLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBREpSO0FDUUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FETk47QUNRTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FETlI7QUNTTTtFQUNFLFdBQUE7QURQUjtBQ1NVO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QURQWjtBQ1VRO0VBQ0UscUJBQUE7QURSVjtBQ1NVO0VBQ0UsZ0JBQUE7QURQWjtBQ1lNOztFQUVFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURWUjtBQ1lNO0VBQ0UsNEJBQUE7QURWUjtBQ1lNO0VBQ0UsNEJBQUE7QURWUjtBQ2FJO0VBQ0UsaUJBQUE7QURYTjtBQ1lNO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEVlI7QUNXUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FEVFY7QUNlSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEYk47QUNjTTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBRFpSO0FDY007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURaUjtBQ2NRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FEWlY7QUNnQkk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBRGROO0FDZ0JJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QURkTjtBQ2lCRTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7QURmSjtBQ2dCSTs7RUFFRSxpQkFBQTtBRGROO0FDZU07O0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRFpSO0FDZ0JNO0VBQ0UsdUJBQUE7VUFBQSwyQkFBQTtBRGRSO0FDa0JNO0VBQ0UscUJBQUE7VUFBQSx5QkFBQTtBRGhCUjtBQ29CSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FEbEJOO0FDb0JJOztFQUVFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBRGxCTjtBQ29CSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRGxCTjtBQ29CSTs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7QURsQk47QUNvQkk7RUFDRSxlQUFBO0FEbEJOO0FDb0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEbEJOO0FDbUJNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBRGpCUjtBQ21CTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4Q0FBQTtBRGxCUjtBQ29CUTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QURsQlY7QUN3Qkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUR0Qk47QUN3Qkk7RUFDRSxnQkFBQTtBRHRCTjtBQ3dCSTtFQUNFLHNDQUFBO0FEdEJOO0FDMEJJO0VBQ0UsaUJBQUE7QUR4Qk47QUMwQkk7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUR4Qk47QUMwQkk7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0FEeEJOO0FDeUJNO0VBQ0UsbUJBQUE7QUR2QlI7QUMwQkk7RUFDRSxtQkFBQTtBRHhCTjtBQzBCSTtFQUNFLDRCQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUR6Qk47QUMyQkk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRHpCTjtBQzJCUTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FEekJWO0FDNEJNO0VBQ0UscUJBQUE7QUQxQlI7QUMyQlE7RUFDRSxnQkFBQTtBRHpCVjtBQzhCSTtFQUNFLFdBQUE7QUQ1Qk47QUM4Qk07O0VBRUUsaUJBQUE7QUQ1QlI7QUM2QlE7O0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRDFCVjtBQzZCTTtFQUNFLGVBQUE7QUQzQlI7QUM0QlE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtBRDFCVjtBQzZCTTtFQUNFLGdCQUFBO0FEM0JSO0FDNEJRO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FEMUJWO0FDNkJNOztFQUVFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRDNCUjtBQzZCTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FEM0JSO0FDNkJNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEM0JSO0FDNEJRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRDFCVjtBQzRCUTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDFCVjtBQ2dDSTtFQUNFLGFBQUE7QUQ5Qk47QUNpQ0k7RUFDRSxnQkFBQTtBRC9CTjtBQ2lDSTtFQUNFLHdDQUFBO0FEL0JOO0FDbUNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRGpDTjtBQ29DRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBRGxDSjtBQ29DSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEbENOO0FDb0NJO0VBQ0UsNENBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRGxDTjtBQ3VDTTtFQUNFLFlBQUE7QURyQ1I7QUN5Q0U7RUFDRSxXQUFBO0FEdkNKO0FDNENNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FEMUNSO0FDNENNO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7QUQzQ1I7QUMrQ0U7RUFDRSxlQUFBO0FEN0NKO0FDK0NFO0VBQ0Usa0JBQUE7QUQ3Q0o7QUNpREk7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBRC9DTjtBQ2lESTtFQUNFLE9BQUE7RUFDQSxXQUFBO0FEL0NOO0FDb0RFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FEakRKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtdGFncy10b3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXRhZ3MtdG9wIC5wcm9kdWN0LXRhZy1uZXcge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC10YWdzLXRvcCAucHJvZHVjdC10YWctZmVhdHVyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggOHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmljb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICB6LWluZGV4OiA5O1xuICBkaXJlY3Rpb246IGx0cjtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5pY29ucyBpb24taWNvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5pY29ucyBpb24taWNvbltuYW1lPXNoYXJlXSB7XG4gIGNvbG9yOiAjYmVkMTNjO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmljb25zIGlvbi1pY29uW2FyaWEtbGFiZWw9aGVhcnRdLFxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmljb25zIC5pY29uW2FyaWEtbGFiZWw9XCJoZWFydCBvdXRsaW5lXCJdIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3Qtc2xpZGVzIC5zd2lwZXItd3JhcHBlciAuc3dpcGVyLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXNsaWRlcyBpbWcge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLnByb2R1Y3QtdGFncyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAtMTVweDtcbiAgei1pbmRleDogOTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAucHJvZHVjdC10YWdzIC5wcm9kdWN0LXRhZy1vZmYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAucHJvZHVjdC10YWdzIC5wcm9kdWN0LXRhZy1mZWF0dXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLndvby1wcmljZS1ncm91cCAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAgLndvby1wcmljZSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAgLndvby1wcmljZSBkZWwgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLndvby1wcmljZS1ncm91cCAud29vLXByaWNlIGlucyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAud29vLXByaWNlLWdyb3VwIC53b28tcHJpY2UgaW5zIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAgLnByb2R1Y3QtaW5zdG9jayxcbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAud29vLXByaWNlLWdyb3VwIC5wcm9kdWN0LW91dHN0b2NrIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLXRpdGxlIC53b28tcHJpY2UtZ3JvdXAgLnByb2R1Y3QtaW5zdG9jayB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLndvby1wcmljZS1ncm91cCAucHJvZHVjdC1vdXRzdG9jayB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtdGl0bGUgLnByb2R1Y3QtdGl0bGUge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAucHJvZHVjdC10aXRsZSBoMyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC10aXRsZSAucHJvZHVjdC10aXRsZSBoMyBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1yYXRpbmdzIC5zdGFycy1vdXRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1yYXRpbmdzIC5zdGFycy1vdXRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIbimIbimIbimIbimIZcIjtcbiAgY29sb3I6ICNjY2M7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1yYXRpbmdzIC5zdGFycy1vdXRlciAuc3RhcnMtaW5uZXIge1xuICBmb250LXNpemU6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtcmF0aW5ncyAuc3RhcnMtb3V0ZXIgLnN0YXJzLWlubmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKYheKYheKYheKYheKYhVwiO1xuICBjb2xvcjogI2Y4Y2UwYjtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXJhdGluZ3MgaW9uLWljb24ge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtcmF0aW5ncyBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLmxlZnQsXG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5yaWdodCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAubGVmdCAuY29sLFxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAucmlnaHQgLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5sZWZ0IC5jb2wge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5yaWdodCAuY29sIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnF0eS1uYW1lIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnF0eS1uYW1lLFxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAudHRsLW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC50dGwtdmx1ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5xdHktdmx1ZSxcbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnR0bC12bHVlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAudG90YWwtcGFyYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnF0eS12bHVlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWhlYWRlciAucXR5LXZsdWUgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIgLnF0eS12bHVlIC5kZ2kge1xuICBtaW4td2lkdGg6IDM1cHg7XG4gIG1heC13aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtaGVhZGVyIC5xdHktdmx1ZSAuZGdpIGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1jb250ZW50IGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXRhaWwtY29udGVudC5iaW5nLWZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKGlvbi1jb2xvci1saWdodCk7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCBpb24tbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IGlvbi10aHVtYm5haWwge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMTVweDtcbiAgaGVpZ2h0OiAxMTVweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IGlvbi1pdGVtIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgaDMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAud29vLXByaWNlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC53b28tcHJpY2UgZGVsIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLndvby1wcmljZSBpbnMge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAud29vLXByaWNlIGlucyAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAuZ3JvdXAtcHJvZHVjdCAucXR5LWJveC10b3RhbCAubGVmdCxcbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC5yaWdodCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLmxlZnQgLmNvbCxcbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC5yaWdodCAuY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC5sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLmxlZnQgLmNvbCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC5yaWdodCAuY29sIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC5xdHktbmFtZSxcbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC50dGwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC50dGwtdmx1ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnF0eS12bHVlIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLmdyb3VwLXByb2R1Y3QgLnF0eS1ib3gtdG90YWwgLnF0eS12bHVlIC5idXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogNDVweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5ncm91cC1wcm9kdWN0IC5xdHktYm94LXRvdGFsIC5xdHktdmx1ZSAuZGdpIHtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1jb250ZW50IGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LWRldGFpbC1jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtZGV0YWlsLWNvbnRlbnQuYmluZy1mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSAucHJvZHVjdC1kZXNjcmlwdGlvbiBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtdGFncy10b3Age1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnByb2R1Y3QtdGFncy10b3AgLnByb2R1Y3QtdGFnLW5ldyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5wcm9kdWN0LXRhZ3MtdG9wIC5wcm9kdWN0LXRhZy1mZWF0dXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucHJvZHVjdC1kZXRhaWwtcGFnZSBpb24tc2xpZGVzIGlvbi1zbGlkZTpsYXN0LWNoaWxkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgYXBwLXByb2R1Y3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIGlvbi1yb3cgaW9uLWNvbCBoNSB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgem9vbTogMC44O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIC5zZWxlY3QtY29sIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgLnJlbGF0ZWQtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5wcm9kdWN0LWRldGFpbC1wYWdlIFtkaXI9cnRsXSAucHJvZHVjdC10YWdzLXRvcCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuLnByb2R1Y3QtZGV0YWlsLXBhZ2UgW2Rpcj1ydGxdIC5zaGFyZS1saWtlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IGF1dG87XG59XG5cbi5wcm9kdWN0LWRldGFpbC1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIC0tY29sb3I6IHdoaXRlO1xufSIsIi5wcm9kdWN0LWRldGFpbC1wYWdlIHtcbiAgLnByb2R1Y3QtdGFncy10b3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5O1xuXG4gICAgLnByb2R1Y3QtdGFnLW5ldyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICAucHJvZHVjdC10YWctZmVhdHVyZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIH1cbiAgfVxuICAuaWNvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICB6LWluZGV4OiA5O1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG4gICAgaW9uLWljb25bbmFtZT1cInNoYXJlXCJdIHtcbiAgICAgIGNvbG9yOiAjYmVkMTNjO1xuICAgIH1cbiAgICBpb24taWNvblthcmlhLWxhYmVsPVwiaGVhcnRcIl0sXG4gICAgLmljb25bYXJpYS1sYWJlbD1cImhlYXJ0IG91dGxpbmVcIl0ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgfVxuICAucHJvZHVjdC1zbGlkZXMge1xuICAgIC5zd2lwZXItd3JhcHBlciB7XG4gICAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xuICAgICAgfVxuICAgIH1cbiAgICBpbWcge1xuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWRldGFpbC10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgLnByb2R1Y3QtdGFncyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgdG9wOiAtMTVweDtcbiAgICAgIHotaW5kZXg6IDk7XG5cbiAgICAgIC5wcm9kdWN0LXRhZy1vZmYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICAgIC5wcm9kdWN0LXRhZy1mZWF0dXJlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC53b28tcHJpY2UtZ3JvdXAge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcblxuICAgICAgLndvb2NvbW1lcmNlLVByaWNlLWFtb3VudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIH1cblxuICAgICAgLndvby1wcmljZSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBkZWwge1xuICAgICAgICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbnMge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAud29vY29tbWVyY2UtUHJpY2UtYW1vdW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wcm9kdWN0LWluc3RvY2ssXG4gICAgICAucHJvZHVjdC1vdXRzdG9jayB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5wcm9kdWN0LWluc3RvY2sge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgICAgLnByb2R1Y3Qtb3V0c3RvY2sge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgfVxuICAgIH1cbiAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBzbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LXJhdGluZ3Mge1xuICAgIC5zdGFycy1vdXRlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlxcMjYwNlxcMjYwNlxcMjYwNlxcMjYwNlxcMjYwNlwiO1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgIH1cbiAgICAgIC5zdGFycy1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlxcMjYwNVxcMjYwNVxcMjYwNVxcMjYwNVxcMjYwNVwiO1xuICAgICAgICAgIGNvbG9yOiAjZjhjZTBiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWRldGFpbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5sZWZ0LFxuICAgIC5yaWdodCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIC5jb2wge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAubGVmdCB7XG4gICAgICAuY29sIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQge1xuICAgICAgLmNvbCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnF0eS1uYW1lIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAucXR5LW5hbWUsXG4gICAgLnR0bC1uYW1lIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnR0bC12bHVlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAucXR5LXZsdWUsXG4gICAgLnR0bC12bHVlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuICAgIC50b3RhbC1wYXJhIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnF0eS12bHVlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgICAgLmRnaSB7XG4gICAgICAgIG1pbi13aWR0aDogMzVweDtcbiAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnByb2R1Y3QtZGV0YWlsLWNvbnRlbnQge1xuICAgIGgzIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAmLmJpbmctZm8ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKGlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICB9XG4gIC5ncm91cC1wcm9kdWN0IHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDExNXB4O1xuICAgICAgaGVpZ2h0OiAxMTVweDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLml0ZW06bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgLy9mb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgLndvby1wcmljZSB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGRlbCB7XG4gICAgICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbnMge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC53b29jb21tZXJjZS1QcmljZS1hbW91bnQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucXR5LWJveC10b3RhbCB7XG4gICAgICBmbG9hdDogbGVmdDtcblxuICAgICAgLmxlZnQsXG4gICAgICAucmlnaHQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgLmNvbCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubGVmdCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgLmNvbCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgLmNvbCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucXR5LW5hbWUsXG4gICAgICAudHRsLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAudHRsLXZsdWUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIC5xdHktdmx1ZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRnaSB7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWRldGFpbC1jb250ZW50IHtcbiAgICBoMyB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgLy9mb250LXNpemU6IDE3cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgJi5iaW5nLWZvIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICB9XG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgfVxuICAucHJvZHVjdC10YWdzLXRvcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA5O1xuXG4gICAgLnByb2R1Y3QtdGFnLW5ldyB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLnByb2R1Y3QtdGFnLWZlYXR1cmVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXMge1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcC1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBpb24tcm93IHtcbiAgICAvL21hcmdpbi1yaWdodDogMTBweDtcbiAgICBpb24tY29sIHtcbiAgICAgIGg1IHtcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHpvb206IDAuODtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICAgICAgLy8gY29sb3I6ICNmZmQ3MDA7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2VsZWN0LWNvbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5yZWxhdGVkLWl0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIFtkaXI9XCJydGxcIl0ge1xuICAgIC5wcm9kdWN0LXRhZ3MtdG9wIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogYXV0bztcbiAgICB9XG4gICAgLnNoYXJlLWxpa2Uge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuLnByb2R1Y3QtZGV0YWlsLWZvb3RlciB7XG4gIGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/product-detail/product-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











let ProductDetailPage = class ProductDetailPage {
    constructor(navCtrl, config, shared, modalCtrl, loading, iab, events, storage, http, applicationRef, socialSharing, activatedRoute, router) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.iab = iab;
        this.events = events;
        this.storage = storage;
        this.http = http;
        this.applicationRef = applicationRef;
        this.socialSharing = socialSharing;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.selectAttributes = new Array;
        this.selectedVariation = null;
        this.quantity = 1;
        this.releatedItems = []; // <!-- 2.0 updates -->
        this.reviews = []; // <!-- 2.0 updates -->
        this.ratingStarsValue = null; // <!-- 2.0 updates -->
        this.allVariableAttributes = [];
        this.tempAllVariableAttributes = [];
        this.attributes = [];
        this.isLiked = 0;
        this.wishArray = [];
        this.disableCartButton = false;
        this.variations = new Array;
        this.groupProducts = new Array;
        this.variationPrice = null;
        this.loaderWcVendorInfo = false;
        this.loaderProductVariations = false;
        this.sliderConfigReleatedItems = {
            slidesPerView: this.config.productSlidesPerPage,
            spaceBetween: 0
        };
        //===============================================================================================================================
        //function adding attibute into array
        this.fillAttributes = function (val, key, position) {
            console.log(key + "  " + val);
            let count = 0;
            this.selectAttributes.forEach((value, index) => {
                if (value.position == position) {
                    value.value = val;
                    count++;
                }
                if (val == 'choose' && value.position == position) {
                    this.selectAttributes.splice(index, 1);
                    console.log("splice " + value.key + "  " + value.value);
                }
            });
            if (count == 0 && val != "choose")
                this.selectAttributes.push({ key: key, value: val, position: position });
            this.sortAttributes();
            if (this.getAttributesLength() == this.selectAttributes.length)
                this.selectVariation();
            if (this.selectAttributes.length != this.getAttributesLength()) {
                this.updateProductDetail(JSON.parse(JSON.stringify(this.getProductData(this.pId))));
                this.variationPrice = null;
            }
            console.log(this.selectAttributes);
            this.enableDisbaleCartButton();
        };
        //==============================================================================================================================================  
        //calculating total price  
        this.calculatingTotalPrice = function () {
            var price = parseFloat(this.product.products_price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                price = this.product.discount_price;
            var totalPrice = this.shared.calculateFinalPriceService(this.attributes) + parseFloat(price.toString());
            if (this.product.discount_price != null || this.product.discount_price != undefined)
                this.discount_price = totalPrice;
            else
                this.product_price = totalPrice;
            //  console.log(totalPrice);
        };
        //===============================================================================================================================
        this.qunatityGroupPlus = function (p) {
            //console.log(p.quantity);
            if (p.stock_quantity == null || p.stock_quantity > p.quantity)
                p.quantity++;
            else if (p.stock_quantity == p.quantity)
                this.shared.translateString("Product Quantity is Limited!").then((res) => { this.shared.showAlert(res); });
            this.applicationRef.tick();
            // console.log(p);
        };
        //===============================================================================================================================
        //function decreasing the quantity
        this.qunatityGroupMinus = function (p) {
            if (p.quantity != 0) {
                p.quantity--;
            }
            this.applicationRef.tick();
        };
        //===============================================================================================================================
        this.qunatityPlus = function () {
            if (this.product.stock_quantity == null || this.product.stock_quantity > this.quantity)
                this.quantity++;
            else if (this.product.stock_quantity == this.quantity)
                this.shared.translateString("Product Quantity is Limited!").then((res) => { this.shared.showAlert(res); });
            this.applicationRef.tick();
        };
        //===============================================================================================================================
        //function decreasing the quantity
        this.qunatityMinus = function () {
            if (this.quantity != 1) {
                this.quantity--;
            }
            this.applicationRef.tick();
        };
        this.pId = this.activatedRoute.snapshot.paramMap.get('id');
        this.product = JSON.parse(JSON.stringify(this.getProductData(this.pId)));
        this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
        this.events.subscribe('wishListUpdate', (id, value) => {
            if (id == this.product.id)
                this.isLiked = value;
        });
        this.storage.get('wishListProducts').then((val) => {
            this.wishArray = val;
            this.checkWishList();
        });
        this.enableDisbaleCartButton();
        if (this.product.type == 'variable') {
            this.getVariations();
        }
        if (this.product.type == 'grouped') {
            this.getGroupProducts();
        }
        this.getRelatedItems();
        this.getProductReviews();
        if (this.config.showWcVendorInfo)
            this.getWcVendorInfo();
    }
    ionViewWillEnter() {
        this.enableDisbaleCartButton();
    }
    getProductData(id) {
        let p;
        this.shared.singleProductPageData.forEach(element => {
            if (element.id == id) {
                p = element;
            }
        });
        return p;
    }
    ngOnInit() {
    }
    //=================================================================================================================================================================================
    getGroupProducts() {
        //this.loading.show();
        let count = 0;
        for (let value of this.product.grouped_products) {
            count++;
            this.config.getWoo("products/" + value + "?" + this.config.productsArguments).then(data => {
                this.groupProducts.push(Object.assign(data, { quantity: 0 }));
                this.applicationRef.tick();
            });
            if (count == this.product.grouped_products.length) {
                //this.loading.hide();
            }
        }
    }
    //===============================================================================================================================
    getVariations() {
        let count = 0;
        this.loaderProductVariations = true;
        for (let value of this.product.variations) {
            this.config.getWoo("products/" + value + "?" + this.config.productsArguments).then(data => {
                count++;
                let d = data;
                this.variations.push(d);
                this.initializeAllVariationAttributes(d);
                //console.log(count);
                if (count == this.product.variations.length) {
                    this.loaderProductVariations = false;
                    this.applicationRef.tick();
                    console.log(this.variations);
                }
            });
        }
    }
    //===============================================================================================================================
    initializeAllVariationAttributes(p) {
        let ob = {};
        ob.id = p.id;
        ob.select = false;
        for (let val of this.attributes) {
            if (val.variation == false)
                continue;
            ob[val.name] = 'any';
            for (let v2 of p.attributes) {
                if (val.name.toUpperCase() == v2.name.toUpperCase())
                    ob[val.name] = v2.option;
            }
        }
        this.allVariableAttributes.push(ob);
        if (this.allVariableAttributes.length == this.product.variations.length)
            this.sortAllVariationAttributes();
    }
    //===============================================================================================================================
    sortAllVariationAttributes() {
        let array = [];
        for (let val of this.product.variations) {
            for (let v2 of this.allVariableAttributes) {
                if (val == v2.id)
                    array.push(v2);
            }
        }
        this.allVariableAttributes = array;
        console.log(this.allVariableAttributes);
    }
    availableOption(name, val) {
        if (this.selectAttributes.length == 0)
            return true;
        for (let value of this.tempAllVariableAttributes) {
            if (value.select == true) {
                if (value[name] == 'any')
                    return true;
                if (value[name] == val)
                    return true;
            }
        }
    }
    //checking avalability of option in all variations
    sortAttributes() {
        this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
        let count = 0;
        for (let x of this.selectAttributes) {
            for (let y of this.tempAllVariableAttributes) {
                if (y[x.key] == x.value || y[x.key] == 'any') {
                    if (count == 0) {
                        y.select = true;
                    }
                    else {
                        if (y.select == true)
                            y.select = true;
                        else
                            y.select = false;
                    }
                    console.log(y[x.key] + "   ---  " + x.value);
                }
                else
                    y.select = false;
            }
            count++;
        }
        console.log("attributes after select");
        console.log(this.tempAllVariableAttributes);
    }
    // reset attributes and selection
    resetAttributes() {
        console.log("reset att");
        this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
        this.selectAttributes = [];
        this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
        this.selectedVariation = null;
        this.enableDisbaleCartButton();
        this.product = JSON.parse(JSON.stringify(this.getProductData(this.pId)));
    }
    //===============================================================================================================================
    getAttributesLength() {
        let count = 0;
        for (let a of this.attributes) {
            if (a.variation)
                count++;
        }
        return count;
    }
    //===============================================================================================================================
    enableDisbaleCartButton() {
        // if (this.product.type == 'external') this.disableCartButton = true;
        // else
        if (this.product.type != 'variable' && this.product.stock_status == 'instock')
            this.disableCartButton = false;
        else if (this.selectAttributes.length == this.getAttributesLength() && this.product.stock_status == 'instock')
            this.disableCartButton = false;
        else
            this.disableCartButton = true;
        console.log("disbale cart button " + this.disableCartButton);
        this.applicationRef.tick();
    }
    //===============================================================================================================================
    checkWishList() {
        //getting wishList items from local storage
        let count = 0;
        if (this.wishArray != null)
            for (let value of this.wishArray) {
                if (value.id == this.product.id)
                    count++;
            }
        if (count != 0)
            this.isLiked = 1;
        else
            this.isLiked = 0;
    }
    //===============================================================================================================================
    openProduct() {
        this.loading.autoHide(2000);
        this.iab.create(this.product.external_url, "blank");
    }
    addToCartProduct() {
        let total = 0;
        //this.loading.autoHide(500);
        console.log(this.selectAttributes);
        if (this.product.type == 'variable') {
            this.shared.addToCart(this.product, this.selectedVariation, this.quantity, this.selectAttributes);
            this.navCtrl.pop();
            //this.navCtrl.push(CartPage);
        }
        if (this.product.type == 'simple') {
            this.shared.addToCart(this.product, null, this.quantity, null);
            this.navCtrl.pop();
            //this.navCtrl.push(CartPage);
        }
        if (this.product.type == 'grouped') {
            for (let a of this.groupProducts) {
                total = total + a.quantity;
            }
            if (total == 0)
                this.shared.translateString("Please Add Quantity").then((res) => { this.shared.showAlert(res); });
            else
                for (let value of this.groupProducts) {
                    if (value.quantity != 0)
                        this.shared.addToCart(value, null, value.quantity, null);
                }
            if (total != 0) {
                this.navCtrl.pop();
                //this.navCtrl.push(CartPage);
            }
        }
    }
    //===============================================================================================================================
    selectVariation() {
        let pId = null;
        for (let i of this.tempAllVariableAttributes) {
            if (i.select == true) {
                pId = i.id;
                break;
            }
        }
        for (let i of this.variations) {
            if (i.id == pId) {
                this.selectedVariation = i;
                break;
            }
        }
        if (this.selectAttributes != null)
            this.updateProductDetail(this.selectedVariation);
        console.log(this.product);
    }
    //===============================================================================================================================
    updateProductDetail(p) {
        // console.log(p);
        let oldProduct = JSON.parse(JSON.stringify(this.getProductData(this.pId)));
        this.product.name = p.name;
        this.product.price_html = p.price_html;
        if (p.images[0].src.indexOf('placeholder') == -1) {
            this.product.images = this.removeDuplication(p.images.concat(oldProduct.images));
        }
    }
    removeDuplication(array) {
        var a = array.concat();
        console.log(a);
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i].src === a[j].src)
                    a.splice(j--, 1);
            }
        }
        console.log(a);
        return a;
    }
    //===============================================================================================================================
    checkProductNew() {
        var pDate = new Date(this.product.date_created);
        var date = pDate.getTime() + this.config.newProductDuration * 86400000;
        var todayDate = new Date().getTime();
        if (date > todayDate)
            return true;
        else
            return false;
    }
    quantityChange() {
        console.log("quantity updated");
        if (this.product.stock_quantity == null) {
            console.log("quantity is unlimited");
        }
        else if (this.product.stock_quantity > this.quantity) {
            console.log("quantity is less than stock quantity");
        }
        else if (this.product.stock_quantity < this.quantity) {
            this.shared.translateString("Product Quantity is Limited!").then((res) => {
                if (this.product.stock_quantity == null)
                    this.quantity = 1;
                else
                    this.quantity = parseInt(this.product.stock_quantity);
                this.shared.showAlert(res);
            });
        }
        if (this.quantity == null || this.quantity == 0 || this.quantity < 0) {
            this.quantity = 1;
        }
        this.applicationRef.tick();
    }
    //===============================================================================================================================
    showProductDetail(id) {
        this.loading.show();
        this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then((data) => {
            //this.shared.showAlert("loaded");
            this.loading.hide();
            let p = data;
            this.shared.singleProductPageData.push(p);
            this.navCtrl.navigateForward("product-detail/" + p.id);
        }, err => {
            this.loading.hide();
            console.log(err);
        });
        this.shared.addToRecent(this.product);
    }
    //===============================================================================================================================
    share() {
        this.loading.autoHide(1000);
        // Share via email
        this.socialSharing.share(this.product.name, this.product.name, this.product.images[0].src, this.product.permalink);
    }
    //===============================================================================================================================
    clickWishList() {
        if (this.isLiked == 0) {
            this.addWishList();
        }
        else {
            this.removeWishList();
        }
    }
    //===============================================================================================================================
    addWishList() {
        this.shared.addWishList(this.product);
    }
    //===============================================================================================================================
    removeWishList() {
        this.shared.removeWishList(this.product);
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    getRelatedItems() {
        this.config.getWoo("products/?include=" + this.product.related_ids + "&" + this.config.productsArguments).then((data) => {
            this.releatedItems = data;
            this.applicationRef.tick();
        });
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    getProductReviews() {
        this.config.getWoo("products/reviews/?" + this.config.productsArguments + "&product=" + [this.pId]).then((data) => {
            this.reviews = data;
            this.applicationRef.tick();
            this.totalRating();
        });
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    openReviewsPage() {
        this.navCtrl.navigateForward("/reviews/" + this.product.id);
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    totalRating() {
        let total = 0;
        for (let value of this.reviews) {
            total = total + value.rating;
        }
        let result = (total / this.reviews.length) * 20;
        if (total == 0)
            result = 0;
        this.ratingStarsValue = result;
        this.applicationRef.tick();
        //return result;
    }
    //==============================================================
    openStore(value) {
        if (this.config.showWcVendorInfo) {
            this.shared.storePageData.push(value);
            let id;
            if (value.ID)
                id = value.ID;
            if (value.id)
                id = value.id;
            this.navCtrl.navigateForward("/store/" + id);
        }
        else {
            this.loading.show();
            this.config.getWithUrl(this.config.url + "/wp-json/dokan/v1/stores/" + this.product.store.id).then((data) => {
                this.loading.hide();
                let d = data;
                this.shared.storePageData.push(d);
                let id;
                if (d.ID)
                    id = d.ID;
                if (d.id)
                    id = d.id;
                this.navCtrl.navigateForward("/store/" + id);
                this.applicationRef.tick();
            });
        }
    }
    getWcVendorInfo() {
        this.loaderWcVendorInfo = true;
        this.config.getWithUrl(this.config.url + "/api/appsettings/get_vendor_info/?insecure=cool&product_id=" + this.product.id).then((data) => {
            this.loaderWcVendorInfo = false;
            let d = data;
            this.wcVendorInfo = data.data[0];
            this.applicationRef.tick();
        });
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
];
ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/product-detail/product-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
], ProductDetailPage);



/***/ })

}]);
//# sourceMappingURL=product-detail-product-detail-module-es2015.js.map