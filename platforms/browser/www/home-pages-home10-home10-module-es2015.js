(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home10-home10-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home10/home10.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home10/home10.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header-4.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"apps\"></ion-icon>\n      {{'Categories' | translate }}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openCategoryPage()\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n  <!-- categories component -->\n  <app-categories [type]=\"'withName'\"></app-categories>\n\n  <!-- For Banner -->\n  <app-banner></app-banner>\n\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-albums\"></ion-icon>\n      {{'Newest Products'|translate}}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('newest')\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      {{ 'Shop More' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <!-- Newest Products swipe slider -->\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let p of shared.tab1\">\n      <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- For Segments Products -->\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"sale\">{{ 'On Sale' | translate }} </ion-segment-button>\n    <ion-segment-button value=\"mostLiked\"> {{ 'Featured' | translate }}</ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]=\"segments\">\n    <ion-grid class=\"ion-no-padding\" *ngSwitchCase=\"'sale'\">\n      <ion-row class=\"row-segment ion-no-padding\">\n        <ion-col *ngFor=\"let p of shared.tab2\" size=\"6\" class=\"ion-no-padding\">\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <ion-button fill=\"clear\" color=\"secondary\" (click)=\"openProducts('sale')\">\n            {{ 'Shop More' | translate}}\n            <ion-icon name=\"md-arrow-dropright\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"ion-no-padding\" *ngSwitchCase=\"'mostLiked'\">\n      <ion-row class=\"ion-no-padding\">\n        <ion-col *ngFor=\"let p of shared.tab3\" size=\"6\" class=\"ion-no-padding\">\n          <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center\">\n        <ion-col>\n          <ion-button fill=\"clear\" color=\"secondary\" (click)=\"openProducts('featured')\">{{ 'Shop More' | translate}}\n            <ion-icon name=\"md-arrow-dropright\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/home-pages/home10/home10.module.ts":
/*!****************************************************!*\
  !*** ./src/app/home-pages/home10/home10.module.ts ***!
  \****************************************************/
/*! exports provided: Home10PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home10PageModule", function() { return Home10PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home10_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home10.page */ "./src/app/home-pages/home10/home10.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _home10_page__WEBPACK_IMPORTED_MODULE_6__["Home10Page"]
    }
];
let Home10PageModule = class Home10PageModule {
};
Home10PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        declarations: [_home10_page__WEBPACK_IMPORTED_MODULE_6__["Home10Page"]]
    })
], Home10PageModule);



/***/ }),

/***/ "./src/app/home-pages/home10/home10.page.scss":
/*!****************************************************!*\
  !*** ./src/app/home-pages/home10/home10.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .swiper-slide {\n  width: 40%;\n}\nion-content ion-segment {\n  background: #f9f9f9;\n}\nion-content ion-segment ion-segment-button {\n  --indicator-color: lightgray;\n  --indicator-color-checked: var(--ion-color-primary);\n  --color-checked: var(--ion-color-primary);\n  font-size: 11.3px;\n  --color: var(--ion-color-primary);\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\nion-content app-product {\n  width: 100%;\n}\nion-content .row-segment {\n  margin-right: 10px;\n}\nion-content ion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTEwL2hvbWUxMC5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTEwL2hvbWUxMC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxVQUFBO0FDQUo7QURHRTtFQUNFLG1CQUFBO0FDREo7QURFSTtFQUNFLDRCQUFBO0VBQ0EsbURBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUNBTjtBREtNO0VBQ0UsWUFBQTtBQ0hSO0FET0U7RUFDRSxXQUFBO0FDTEo7QURPRTtFQUNFLGtCQUFBO0FDTEo7QURRSTtFQUNFLGtCQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWUxMC9ob21lMTAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuc3dpcGVyLXNsaWRlIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC8vIGlmIGRhdGEgbG9hZFxuICBpb24tc2VnbWVudCB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAxMS4zcHg7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICB9XG4gIGlvbi1zbGlkZXMge1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFwcC1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucm93LXNlZ21lbnQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCAuc3dpcGVyLXNsaWRlIHtcbiAgd2lkdGg6IDQwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1zZWdtZW50IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cbmlvbi1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiBsaWdodGdyYXk7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTEuM3B4O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZTpsYXN0LWNoaWxkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgYXBwLXByb2R1Y3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5yb3ctc2VnbWVudCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-pages/home10/home10.page.ts":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home10/home10.page.ts ***!
  \**************************************************/
/*! exports provided: Home10Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home10Page", function() { return Home10Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");





let Home10Page = class Home10Page {
    constructor(nav, config, events, shared) {
        this.nav = nav;
        this.config = config;
        this.events = events;
        this.shared = shared;
        this.segments = "sale"; //first segment by default 
        //for product slider after banner
        this.sliderConfig = {
            slidesPerView: this.config.productSlidesPerPage,
            spaceBetween: 0
        };
    }
    openCategoryPage() {
        this.events.publish("openCategoryPage");
    }
    openProducts(value) {
        this.nav.navigateForward("/products/0/0/" + value);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.shared.hideSplashScreen();
    }
};
Home10Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }
];
Home10Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home10',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home10.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home10/home10.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home10.page.scss */ "./src/app/home-pages/home10/home10.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])
], Home10Page);



/***/ })

}]);
//# sourceMappingURL=home-pages-home10-home10-module-es2015.js.map