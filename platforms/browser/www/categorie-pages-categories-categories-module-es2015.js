(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-pages-categories-categories-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories/categories.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories/categories.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"name!=0\">\n      <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"name==0\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title *ngIf=\"name==0\">\n      {{'Categories'|translate}}\n    </ion-title>\n    <ion-title *ngIf=\"name!=0\">\n      {{name}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-center\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col *ngFor=\"let c of shared.getCategoriesPageItems(parent)\" (click)=\"openProducts(c.id,c.name)\"\n        class=\"animate-item\" size=\"6\" class=\"ion-no-padding\">\n        <ion-card>\n          <ion-avatar>\n            <img img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n          </ion-avatar>\n          <ion-text>\n            <h6>{{c.name|translate}}</h6>\n            <p>{{c.count}} {{'Products'| translate }}</p>\n          </ion-text>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n\n\n  <ion-button *ngIf=\"parent!=0\" icon-end clear color=\"secondary\" (click)=\"openParentProducts()\">\n    {{ 'View All' | translate }}\n    <ion-icon name=\"md-arrow-dropright\"></ion-icon>\n  </ion-button>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/categorie-pages/categories/categories.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/categorie-pages/categories/categories.module.ts ***!
  \*****************************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categorie-pages/categories/categories.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }
];
let CategoriesPageModule = class CategoriesPageModule {
};
CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })
], CategoriesPageModule);



/***/ }),

/***/ "./src/app/categorie-pages/categories/categories.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/categorie-pages/categories/categories.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-row {\n  padding-left: 1px;\n  padding-right: 1px;\n  background: white;\n  box-shadow: 0 0 0 2px lightgrey;\n}\nion-content ion-row ion-col ion-card {\n  margin: 0;\n  border-radius: 0;\n  box-shadow: #eee;\n  box-shadow: 0.1px 0.1px 0 0 #bbb;\n}\nion-content ion-row ion-col ion-card ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\nion-content ion-row ion-col ion-card h6 {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 0;\n  font-size: var(--heading-font-size);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-row ion-col ion-card p {\n  text-align: center;\n  margin-top: 0;\n  font-size: var(--sub-heading-font-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWUtcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDQUo7QURFTTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNBUjtBREVRO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVY7QURFUTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQVY7QURFUTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0FDQVYiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWUtcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLXJvdyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBsaWdodGdyZXk7XG4gICAgaW9uLWNvbCB7XG4gICAgICBpb24tY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm94LXNoYWRvdzogI2VlZTtcbiAgICAgICAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMCAwICNiYmI7XG5cbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDYge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGVhZGluZy1mb250LXNpemUpO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLXN1Yi1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgcGFkZGluZy1yaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGxpZ2h0Z3JleTtcbn1cbmlvbi1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogI2VlZTtcbiAgYm94LXNoYWRvdzogMC4xcHggMC4xcHggMCAwICNiYmI7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaDYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/categorie-pages/categories/categories.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/categorie-pages/categories/categories.page.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");





let CategoriesPage = class CategoriesPage {
    constructor(shared, config, router, activatedRoute) {
        this.shared = shared;
        this.config = config;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.categories = [];
    }
    ngOnInit() {
        this.parent = this.activatedRoute.snapshot.paramMap.get('parent');
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        console.log(this.parent);
        console.log(this.name);
    }
    openProducts(id, name) {
        let count = 0;
        for (let val of this.shared.allCategories) {
            if (val.parent == id) {
                count++;
            }
        }
        if (count == 0) {
            this.router.navigateByUrl("/products/" + id + "/" + name + "/newest");
        }
        else {
            this.router.navigateByUrl("/categories/" + id + "/" + name);
        }
    }
    openParentProducts() {
        this.router.navigateByUrl("/products/" + this.parent + "/" + this.name + "/newest");
    }
};
CategoriesPage.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories/categories.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.page.scss */ "./src/app/categorie-pages/categories/categories.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CategoriesPage);



/***/ })

}]);
//# sourceMappingURL=categorie-pages-categories-categories-module-es2015.js.map