(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-pages-home7-home7-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      <ion-img src=\"assets/logo_header-4.png\" alt=\"logo\"></ion-img>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n\n  <app-banner></app-banner>\n  <!-- categories component -->\n  <app-categories [type]=\"'name&count'\"></app-categories>\n\n  <ion-segment [(ngModel)]=\"segments\">\n    <ion-segment-button value=\"topSeller\">{{ 'Nouveautés' | translate }}</ion-segment-button>\n    <ion-segment-button value=\"deals\">{{ 'En promotion' | translate }} </ion-segment-button>\n    <ion-segment-button value=\"mostLiked\"> {{ 'A la une' | translate }}</ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"segments\">\n\n    <!-- first swipe slider -->\n    <ion-slides *ngSwitchCase=\"'topSeller'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab1\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Voir plus'| translate}}\n          <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- 2nd swipe slider -->\n    <ion-slides *ngSwitchCase=\"'deals'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab2\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('latest')\"> {{'Voir plus'| translate}}\n          <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n\n    <!-- 3rd swipe slider -->\n    <ion-slides *ngSwitchCase=\"'mostLiked'\" [options]=\"sliderConfig\">\n      <ion-slide *ngFor=\"let p of shared.tab3\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-slide>\n      <ion-slide>\n        <ion-button fill=\"clear\" (click)=\"openProducts('featured')\"> {{'Voir plus'| translate}}\n          <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <!-- For Vendor List -->\n  <app-vendor-list></app-vendor-list>\n\n  <ion-row class=\"top-icon-header\">\n    <ion-button fill=\"clear\">\n      <ion-icon slot=\"start\" name=\"md-albums\"></ion-icon>\n      {{'Tous les produits' | translate }}\n    </ion-button>\n    <ion-button id=\"second\" fill=\"clear\" (click)=\"openProducts('newest')\">\n      <ion-icon slot=\"end\" name=\"arrow-dropright\"></ion-icon>\n      {{ 'Voir plus' | translate }}\n    </ion-button>\n  </ion-row>\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let p of products\" size=\"6\" class=\"ion-no-padding\">\n        <app-product [data]=\"p\" [type]=\"'normal'\"></app-product>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- infinite scroll -->\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n  <ion-fab-button color=\"secondary\" (click)=\"scrollToTop()\">\n    <ion-icon name=\"arrow-round-up\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>");

/***/ }),

/***/ "./src/app/home-pages/home7/home7.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home7/home7.module.ts ***!
  \**************************************************/
/*! exports provided: Home7PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home7PageModule", function() { return Home7PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home7_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home7.page */ "./src/app/home-pages/home7/home7.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");
/* harmony import */ var src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/share/share.module */ "./src/components/share/share.module.ts");









const routes = [
    {
        path: '',
        component: _home7_page__WEBPACK_IMPORTED_MODULE_6__["Home7Page"]
    }
];
let Home7PageModule = class Home7PageModule {
};
Home7PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            src_components_share_share_module__WEBPACK_IMPORTED_MODULE_8__["ShareModule"],
        ],
        declarations: [_home7_page__WEBPACK_IMPORTED_MODULE_6__["Home7Page"]]
    })
], Home7PageModule);



/***/ }),

/***/ "./src/app/home-pages/home7/home7.page.scss":
/*!**************************************************!*\
  !*** ./src/app/home-pages/home7/home7.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .swiper-slide {\n  width: 40%;\n}\nion-content ion-segment ion-segment-button {\n  --indicator-color: lightgray;\n  --indicator-color-checked: var(--ion-color-primary);\n  --color-checked: var(--ion-color-primary);\n  font-size: 0.75rem;\n}\nion-content ion-slides ion-slide:last-child {\n  height: auto;\n}\nion-content app-product {\n  width: 100%;\n}\nion-content ion-fab {\n  position: fixed;\n}\nion-content ion-fab ion-fab-button {\n  --background: var(--ion-color-primary);\n}\nion-grid ion-row {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTcvaG9tZTcucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lLXBhZ2VzL2hvbWU3L2hvbWU3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQUE7QUNBSjtBRElJO0VBQ0UsNEJBQUE7RUFDQSxtREFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUNGTjtBRE9NO0VBQ0UsWUFBQTtBQ0xSO0FEU0U7RUFDRSxXQUFBO0FDUEo7QURVRTtFQUNFLGVBQUE7QUNSSjtBRFNJO0VBQ0Usc0NBQUE7QUNQTjtBRGFFO0VBQ0Usa0JBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZXMvaG9tZTcvaG9tZTcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAuc3dpcGVyLXNsaWRlIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC8vIGlmIGRhdGEgbG9hZFxuICBpb24tc2VnbWVudCB7XG4gICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlcyB7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYXBwLXByb2R1Y3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgaW9uLWZhYiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgfVxufVxuXG5pb24tZ3JpZCB7XG4gIGlvbi1yb3cge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQgLnN3aXBlci1zbGlkZSB7XG4gIHdpZHRoOiA0MCU7XG59XG5pb24tY29udGVudCBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24ge1xuICAtLWluZGljYXRvci1jb2xvcjogbGlnaHRncmF5O1xuICAtLWluZGljYXRvci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZTpsYXN0LWNoaWxkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgYXBwLXByb2R1Y3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1mYWIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5pb24tY29udGVudCBpb24tZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1ncmlkIGlvbi1yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home-pages/home7/home7.page.ts":
/*!************************************************!*\
  !*** ./src/app/home-pages/home7/home7.page.ts ***!
  \************************************************/
/*! exports provided: Home7Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home7Page", function() { return Home7Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");





let Home7Page = class Home7Page {
    constructor(nav, config, events, shared) {
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
    ionViewDidEnter() {
        this.shared.hideSplashScreen();
    }
    // For FAB Scroll
    onScroll(e) {
        if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
        }
        if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
        }
    }
    // For Scroll To Top Content
    scrollToTop() {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    }
    openProducts(value) {
        this.nav.navigateForward("/products/0/0/" + value);
    }
    getProducts() {
        let query = 'products?' + 'page=' + this.page;
        query = query + "&status=publish" + "&" + this.config.productsArguments;
        if (this.page == 1) {
            this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        }
        this.config.getWoo(query).then((data) => {
            let dat = data;
            this.infinite.complete();
            if (this.page == 1) {
                this.products = new Array;
            }
            if (dat.length != 0) {
                this.page++;
                for (let value of dat) {
                    this.products.push(value);
                }
            }
            if (dat.length < 10) {
                this.infinite.disabled = true;
            }
        });
    }
    ngOnInit() {
        this.getProducts();
    }
};
Home7Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], Home7Page.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recentSlider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], Home7Page.prototype, "slider", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], Home7Page.prototype, "infinite", void 0);
Home7Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home7',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home7.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pages/home7/home7.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home7.page.scss */ "./src/app/home-pages/home7/home7.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"]])
], Home7Page);



/***/ })

}]);
//# sourceMappingURL=home-pages-home7-home7-module-es2015.js.map