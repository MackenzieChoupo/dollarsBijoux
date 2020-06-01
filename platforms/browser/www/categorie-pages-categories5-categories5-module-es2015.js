(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categorie-pages-categories5-categories5-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories5/categories5.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories5/categories5.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" *ngIf=\"name!=0\">\n      <ion-back-button icon=\"arrow-round-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-menu-button slot=\"start\" *ngIf=\"name==0\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title *ngIf=\"name==0\">\n      {{'Categories'|translate}}\n    </ion-title>\n    <ion-title *ngIf=\"name!=0\">\n      {{name}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-group *ngFor=\"let c of shared.getCategoriesPageItems(0)\" class=\"animated fadeIn\">\n    <ion-item-divider (click)=\"openProducts(c.id,c.name)\">\n      <ion-avatar slot=\"end\">\n        <img *ngIf=\"c.image\" src=\"{{c.image.src}}\" />\n      </ion-avatar>\n      <ion-label class=\"ion-padding\">\n        <ion-text>\n          <h2>{{c.name}}</h2>\n        </ion-text>\n      </ion-label>\n    </ion-item-divider>\n    <div *ngFor=\"let s of shared.subCategories\">\n      <ion-item *ngIf=\"c.id==s.parent\" (click)=\"openProducts(s.id,s.name)\">\n        <ion-avatar slot=\"end\">\n          <img *ngIf=\"s.image\" src=\"{{s.image.src}}\" />\n        </ion-avatar>\n        <ion-label class=\"ion-padding\">\n          <ion-text>\n            <h2>{{s.name|translate}}</h2>\n            <p>{{s.count}} {{'Products'| translate }}</p>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </div>\n  </ion-item-group>\n</ion-content>");

/***/ }),

/***/ "./src/app/categorie-pages/categories5/categories5.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/categorie-pages/categories5/categories5.module.ts ***!
  \*******************************************************************/
/*! exports provided: Categories5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories5PageModule", function() { return Categories5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories5.page */ "./src/app/categorie-pages/categories5/categories5.page.ts");
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/pipes.module */ "./src/pipes/pipes.module.ts");








const routes = [
    {
        path: '',
        component: _categories5_page__WEBPACK_IMPORTED_MODULE_6__["Categories5Page"]
    }
];
let Categories5PageModule = class Categories5PageModule {
};
Categories5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]
        ],
        declarations: [_categories5_page__WEBPACK_IMPORTED_MODULE_6__["Categories5Page"]]
    })
], Categories5PageModule);



/***/ }),

/***/ "./src/app/categorie-pages/categories5/categories5.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/categorie-pages/categories5/categories5.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-size: var(--sub-heading-font-size);\n}\nion-content ion-item-divider {\n  --background: #ddd;\n}\nion-content ion-item-divider ion-avatar {\n  margin-right: 16px;\n}\nion-content ion-item-divider ion-label {\n  padding-bottom: 0;\n  padding-top: 0;\n}\nion-content ion-item-divider ion-label h2 {\n  font-weight: bold;\n  font-size: var(--heading-font-size);\n  color: black;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nion-content ion-item ion-label {\n  padding-bottom: 0;\n  padding-top: 0;\n}\nion-content ion-item ion-label h2 {\n  font-size: 14px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNS9jYXRlZ29yaWVzNS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZS1wYWdlcy9jYXRlZ29yaWVzNS9jYXRlZ29yaWVzNS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1Q0FBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtBQ0FKO0FEQ0k7RUFDRSxrQkFBQTtBQ0NOO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDTjtBREFNO0VBQ0UsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNFUjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDRE47QURFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllLXBhZ2VzL2NhdGVnb3JpZXM1L2NhdGVnb3JpZXM1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xuICB9XG4gIGlvbi1pdGVtLWRpdmlkZXIge1xuICAgIC0tYmFja2dyb3VuZDogI2RkZDtcbiAgICBpb24tYXZhdGFyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWhlYWRpbmctZm9udC1zaXplKTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1zdWItaGVhZGluZy1mb250LXNpemUpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciB7XG4gIC0tYmFja2dyb3VuZDogI2RkZDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIgaW9uLWF2YXRhciB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIgaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0tZGl2aWRlciBpb24tbGFiZWwgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XG4gIGNvbG9yOiBibGFjaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5pb24tY29udGVudCBpb24taXRlbSBpb24tbGFiZWwgaDIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/categorie-pages/categories5/categories5.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/categorie-pages/categories5/categories5.page.ts ***!
  \*****************************************************************/
/*! exports provided: Categories5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories5Page", function() { return Categories5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/shared-data/shared-data.service */ "./src/providers/shared-data/shared-data.service.ts");
/* harmony import */ var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/config/config.service */ "./src/providers/config/config.service.ts");





let Categories5Page = class Categories5Page {
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
        this.router.navigateByUrl("/products/" + id + "/" + name + "/newest");
    }
};
Categories5Page.ctorParameters = () => [
    { type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] },
    { type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Categories5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories5',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories5.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/categorie-pages/categories5/categories5.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories5.page.scss */ "./src/app/categorie-pages/categories5/categories5.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"],
        src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], Categories5Page);



/***/ })

}]);
//# sourceMappingURL=categorie-pages-categories5-categories5-module-es2015.js.map