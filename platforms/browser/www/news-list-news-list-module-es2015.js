(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-list-news-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{name}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"news-list-page\">\n  <ion-list>\n    <ion-item lines=\"full\" *ngFor=\"let post of posts\" (click)=\"showPostDetail(post)\" class=\"animated fadeIn\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{post.image}}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{post.title.rendered}}\n          <br>\n          <small>\n            <ion-icon name=\"clock\"></ion-icon>\n            <ion-label>\n              {{post.date}}\n            </ion-label>\n          </small>\n        </h2>\n        <p [innerHTML]=\"post.content.rendered\"></p>\n      </ion-label>\n    </ion-item>\n    <ion-infinite-scroll #infinite (ionInfinite)=\"getPosts()\">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/news-list/news-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/news-list/news-list.module.ts ***!
  \***********************************************/
/*! exports provided: NewsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPageModule", function() { return NewsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-list.page */ "./src/app/news-list/news-list.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _news_list_page__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]
    }
];
let NewsListPageModule = class NewsListPageModule {
};
NewsListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_news_list_page__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]]
    })
], NewsListPageModule);



/***/ }),

/***/ "./src/app/news-list/news-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/news-list/news-list.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".news-list-page ion-list ion-item ion-thumbnail {\n  margin-bottom: auto;\n}\n.news-list-page ion-list ion-item ion-label {\n  margin-top: 4px;\n}\n.news-list-page ion-list ion-item ion-label h2 {\n  font-size: 16px;\n  font-weight: bold;\n  white-space: normal;\n}\n.news-list-page ion-list ion-item ion-label h2 small {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 14px;\n  color: #747474;\n  font-weight: normal;\n  margin-top: 5px;\n}\n.news-list-page ion-list ion-item ion-label h2 small ion-label {\n  padding-left: 4px;\n}\n.news-list-page ion-list ion-item ion-label p p:not(:first-child) {\n  display: none;\n}\n.news-list-page ion-list ion-item ion-label p p:first-child {\n  white-space: normal;\n  line-height: 1.4;\n  -webkit-line-clamp: 4;\n  display: -webkit-box;\n  box-sizing: border-box;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL25ld3MtbGlzdC9uZXdzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9uZXdzLWxpc3QvbmV3cy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHTTtFQUNFLG1CQUFBO0FDRlI7QURJTTtFQUNFLGVBQUE7QUNGUjtBREdRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNEVjtBREVVO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQVo7QURDWTtFQUNFLGlCQUFBO0FDQ2Q7QURJVTtFQUNFLGFBQUE7QUNGWjtBRElVO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9uZXdzLWxpc3QvbmV3cy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWxpc3QtcGFnZSB7XG4gIGlvbi1saXN0IHtcbiAgICBpb24taXRlbSB7XG4gICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgIH1cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM3NDc0NzQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHA6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogNDtcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIubmV3cy1saXN0LXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4ubmV3cy1saXN0LXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLm5ld3MtbGlzdC1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4ubmV3cy1saXN0LXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHNtYWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzc0NzQ3NDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm5ld3MtbGlzdC1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCBoMiBzbWFsbCBpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5uZXdzLWxpc3QtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgcCBwOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5uZXdzLWxpc3QtcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgcCBwOmZpcnN0LWNoaWxkIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA0O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/news-list/news-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/news-list/news-list.page.ts ***!
  \*********************************************/
/*! exports provided: NewsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPage", function() { return NewsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");
/* harmony import */ var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/loading/loading.service */ "./src/providers/loading/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let NewsListPage = class NewsListPage {
    constructor(navCtrl, http, shared, config, loading, activatedRoute) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.activatedRoute = activatedRoute;
        this.page = 1;
        this.posts = new Array;
        this.loadingServerData = true;
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getPosts();
    }
    showPostDetail(post) {
        this.shared.singlePostData = post;
        this.navCtrl.navigateForward("/news-detail");
    }
    ;
    getImagePost(post) {
        post.image = "assets/placeholder.png";
        if (post._links["wp:featuredmedia"])
            this.config.getWithUrl(post._links["wp:featuredmedia"][0].href).then((data) => {
                post.image = data.source_url;
            });
    }
    //============================================================================================  
    //getting list of posts
    getPosts() {
        if (this.page == 1) {
            this.loading.show();
            this.loadingServerData = false;
        }
        this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + this.id + "&" + this.config.productsArguments).then((data) => {
            this.infinite.complete(); //stopping infinite scroll loader
            if (this.page == 1) {
                this.posts = [];
                this.infinite.disabled = false;
                this.loading.hide();
            }
            this.page++;
            data.forEach((value, index) => {
                this.getImagePost(value);
                this.posts.push(value);
            });
            if (data.length < 9) { // if we get less than 10 products then infinite scroll will de disabled
                this.infinite.disabled = true; //disabling infinite scroll
                if (this.posts.length != 0) {
                    // this.shared.toast("All Posts Loaded!");
                }
            }
            this.loadingServerData = true;
        }, err => {
            this.infinite.disabled = true;
            // console.log("Error while loading posts from the server");
            // console.log(response);
        });
    }
    ;
    ngOnInit() {
    }
};
NewsListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] },
    { type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], NewsListPage.prototype, "infinite", void 0);
NewsListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-list',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news-list/news-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-list.page.scss */ "./src/app/news-list/news-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
        src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], NewsListPage);



/***/ })

}]);
//# sourceMappingURL=news-list-news-list-module-es2015.js.map