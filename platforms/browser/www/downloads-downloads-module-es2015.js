(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["downloads-downloads-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/downloads/downloads.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/downloads/downloads.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title> {{'Download'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"downloads.length==0 && !httpLoading\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\">\n        <h3 class=\"ion-text-center\">\n          <ion-icon name=\"download\"></ion-icon>\n        </h3>\n        <h4 class=\"ion-text-center\">{{'Your Download List is Empty'|translate}}</h4>\n        <h5 class=\"ion-text-center\">{{'continue shopping'|translate}}</h5>\n        <p class=\"ion-text-center\">\n          <ion-button routerLink=\"/products/0/0/newest\" routerDirection=\"forward\">\n            {{'Explore'|translate}}\n          </ion-button>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor=\"let down of downloads\">\n    <ion-card-content>\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Product'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\">\n          {{down.product_name}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Downloads remaining'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"down.downloads_remaining!='unlimited'\">\n          {{down.downloads_remaining}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"down.downloads_remaining=='unlimited'\">\n          &infin;\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          {{'Expires'|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"down.access_expires == 'never'\">\n          {{down.access_expires|translate}}\n        </ion-col>\n        <ion-col class=\"ion-text-right\" size=\"6\" *ngIf=\"down.access_expires != 'never'\">\n          {{down.access_expires|date}}\n        </ion-col>\n      </ion-row>\n      <ion-button expand=\"full\" color=\"secondary\" (click)=\"downloadFile(down)\">\n        {{down.download_name}}\n        <ion-icon name=\"download\" slot=\"end\"></ion-icon>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getDownloads()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/downloads/downloads.module.ts":
/*!***********************************************!*\
  !*** ./src/app/downloads/downloads.module.ts ***!
  \***********************************************/
/*! exports provided: DownloadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPageModule", function() { return DownloadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _downloads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloads.page */ "./src/app/downloads/downloads.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _downloads_page__WEBPACK_IMPORTED_MODULE_6__["DownloadsPage"]
    }
];
let DownloadsPageModule = class DownloadsPageModule {
};
DownloadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_downloads_page__WEBPACK_IMPORTED_MODULE_6__["DownloadsPage"]]
    })
], DownloadsPageModule);



/***/ }),

/***/ "./src/app/downloads/downloads.page.scss":
/*!***********************************************!*\
  !*** ./src/app/downloads/downloads.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-grid {\n  margin-top: 50%;\n}\nion-content ion-grid ion-row ion-col {\n  text-align: center;\n}\nion-content ion-grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n  margin-bottom: 6px;\n}\nion-content ion-grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\nion-content ion-card ion-card-content {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2Rvd25sb2Fkcy9kb3dubG9hZHMucGFnZS5zY3NzIiwic3JjL2FwcC9kb3dubG9hZHMvZG93bmxvYWRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBREVNO0VBQ0Usa0JBQUE7QUNBUjtBRENRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1Y7QURDUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NWO0FES0k7RUFDRSxhQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9kb3dubG9hZHMvZG93bmxvYWRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWdyaWQge1xuICAgIG1hcmdpbi10b3A6IDUwJTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWNhcmQge1xuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaDUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/downloads/downloads.page.ts":
/*!*********************************************!*\
  !*** ./src/app/downloads/downloads.page.ts ***!
  \*********************************************/
/*! exports provided: DownloadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsPage", function() { return DownloadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/themeable-browser/ngx */ "./node_modules/@ionic-native/themeable-browser/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");







let DownloadsPage = class DownloadsPage {
    constructor(navCtrl, loading, shared, config, events, applicationRef, themeableBrowser) {
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.events = events;
        this.applicationRef = applicationRef;
        this.themeableBrowser = themeableBrowser;
        this.downloads = [];
        this.httpLoading = true;
        this.getDownloads();
    }
    getDownloads() {
        this.httpLoading = true;
        this.loading.show();
        this.config.getWoo("customers/" + this.shared.customerData.id + "/downloads" + "?" + this.config.productsArguments).then((data) => {
            this.httpLoading = false;
            this.loading.hide();
            let dat = data;
            this.downloads = dat;
            console.log(dat);
            this.applicationRef.tick();
        });
    }
    downloadFile(value) {
        let options = {};
        this.themeableBrowser.create(value.download_url, '_system', options);
        this.loading.autoHide(1000);
        this.events.publish("openHomePage");
    }
    refreshPage() {
        this.getDownloads();
    }
    ngOnInit() {
    }
};
DownloadsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["ThemeableBrowser"] }
];
DownloadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-downloads',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./downloads.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/downloads/downloads.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./downloads.page.scss */ "./src/app/downloads/downloads.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _ionic_native_themeable_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["ThemeableBrowser"]])
], DownloadsPage);



/***/ })

}]);
//# sourceMappingURL=downloads-downloads-module-es2015.js.map