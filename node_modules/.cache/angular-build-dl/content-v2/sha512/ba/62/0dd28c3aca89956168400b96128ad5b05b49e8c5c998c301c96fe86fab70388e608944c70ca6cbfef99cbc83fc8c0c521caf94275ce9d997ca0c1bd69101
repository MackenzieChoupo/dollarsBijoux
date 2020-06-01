function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsSettingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title>\n      {{'Réglages'| translate }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/search\" routerDirection=\"forward\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button fill=\"clear\" routerLink=\"/cart\" routerDirection=\"forward\">\n        <ion-icon name=\"basket\"></ion-icon>\n        <ion-badge color=\"secondary\">{{shared.cartTotalItems()}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"setting-page\">\n  <ion-row class=\"row-img\">\n    <img src=\"assets/icons_stripe.svg\" />\n  </ion-row>\n  <ion-row>\n    <div></div>\n  </ion-row>\n  <ion-grid class=\"ion-padding\">\n    <ion-row size=\"12\">\n      <ion-col *ngIf=\"checkAvatar()=='false'\" class=\"ion-no-padding\">\n        <ion-avatar>\n          <ion-icon class=\"avatar-icon\" name=\"contact\"></ion-icon>\n        </ion-avatar>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" *ngIf=\"checkAvatar()!='false'\">\n        <ion-avatar>\n          <div id=\"nametxt\">{{getNameFirstLetter()}}</div>\n        </ion-avatar>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"shared.customerData.id==null\" (click)=\"openLoginPage()\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h2>{{ 'Se connecter et Crée un compte' | translate }}</h2>\n        <p>{{ 'Veuillez vous connecter ou créer un compte gratuitement' | translate }}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"shared.customerData.id!=null\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h2>{{shared.customerData.first_name +\"&nbsp;\"+shared.customerData.last_name}}</h2>\n        <p>{{shared.customerData.email}}</p>\n        <ion-button (click)=\"openAccountPage()\">{{'Editer le profil' | translate }}</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list class=\"ion-padding\">\n    <ion-item lines=\"none\">\n      <ion-label>\n        <p>{{\"Activer/désactiver les notifications\"|translate}}</p>\n      </ion-label>\n      <ion-toggle [(ngModel)]=\"setting.notification\" (ionChange)=\"onOffPushNotification(setting.notification)\">\n      </ion-toggle>\n    </ion-item>\n  </ion-list>\n  <ion-list class=\"ion-padding\">\n    <ion-item lines=\"full\" (click)=\"openSite()\">\n      <ion-label>\n        <p>{{\"Site officiel\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"showModal('privacyPolicy')\">\n      <ion-label>\n        <p>{{\"Politique de confidentialité\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"showModal('refundPolicy')\">\n      <ion-label>\n        <p>{{\"Politique de remboursement\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"showModal('termServices')\">\n      <ion-label>\n        <p>{{\"Termes et services\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"rateUs()\">\n      <ion-label>\n        <p>{{\"Évaluez nous\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"star-half\"></ion-icon>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"share()\">\n      <ion-label>\n        <p>{{\"Partager\"|translate}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"share\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <ion-item lines=\"none\" *ngIf=\"shared.customerData.id!=null\">\n    <ion-button color=\"secondary\" (click)=\"logOut()\">{{'deconnexion' | translate }}</ion-button>\n  </ion-item>\n</ion-content>\nÎ";
    /***/
  },

  /***/
  "./src/app/settings/settings.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.module.ts ***!
    \*********************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/settings/settings.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
    }];

    var SettingsPageModule = function SettingsPageModule() {
      _classCallCheck(this, SettingsPageModule);
    };

    SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })], SettingsPageModule);
    /***/
  },

  /***/
  "./src/app/settings/settings.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/settings/settings.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsSettingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".setting-page ion-row img {\n  position: absolute !important;\n  opacity: 0.3% !important;\n  top: -100px;\n}\n.setting-page ion-row div {\n  background: var(--ion-color-primary);\n  width: 100%;\n  height: 100px;\n  height: 200px;\n}\n.setting-page ion-grid {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  width: 100%;\n  color: white;\n  padding-top: 20px;\n  padding-bottom: 0;\n}\n.setting-page ion-grid ion-row ion-col {\n  text-align: center;\n}\n.setting-page ion-grid ion-row ion-col ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  width: 64px;\n  height: 64px;\n}\n.setting-page ion-grid ion-row ion-col h2 {\n  margin-top: 10px;\n  font-weight: bold;\n}\n.setting-page ion-grid ion-row ion-col p {\n  margin-top: 10px;\n  margin-bottom: 8px;\n}\n.setting-page ion-grid ion-row ion-col ion-button {\n  height: 30px;\n  --background: var(--ion-color-light);\n  color: var(--ion-color-primary-shade);\n}\n.setting-page ion-list {\n  background: #fafafa;\n  padding-bottom: 0;\n}\n.setting-page ion-list ion-item {\n  --background: white;\n  padding-bottom: 0;\n}\n.setting-page ion-list ion-item ion-toggle {\n  padding-right: 0;\n  --background-checked: var(--ion-color-primary-tint);\n  --handle-background-checked: var(--ion-color-primary);\n}\n.setting-page ion-list ion-item ion-icon {\n  color: black;\n}\n.setting-page ion-list ion-item p {\n  font-size: 16px;\n  color: black;\n}\n.setting-page ion-list:last-child {\n  padding-top: 0;\n}\n.setting-page ion-item ion-button {\n  width: 100%;\n  margin: 0;\n  height: 30px;\n}\n#nametxt {\n  height: 64px;\n  width: 64px;\n  border-radius: 100px;\n  background: var(--ion-color-secondary);\n  font-size: 35px;\n  line-height: 60px;\n  text-transform: uppercase;\n}\n.avatar-icon {\n  font-size: 64px !important;\n  color: lightgray;\n}\n.row-img {\n  opacity: 0.1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUNETjtBREdJO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNETjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FESU07RUFDRSxrQkFBQTtBQ0ZSO0FER1E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNEVjtBREdRO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RWO0FER1E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDRFY7QURHUTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0FDRFY7QURNRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNKSjtBREtJO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0hOO0FESU07RUFDRSxnQkFBQTtFQUNBLG1EQUFBO0VBQ0EscURBQUE7QUNGUjtBRElNO0VBQ0UsWUFBQTtBQ0ZSO0FESU07RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FES0k7RUFDRSxjQUFBO0FDSE47QURPSTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0xOO0FEU0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ05GO0FEUUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURPQTtFQUNFLHVCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V0dGluZy1wYWdlIHtcbiAgaW9uLXJvdyB7XG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgICAgb3BhY2l0eTogMC4zJSAhaW1wb3J0YW50O1xuICAgICAgdG9wOiAtMTAwcHg7XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxuICBpb24tZ3JpZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIGlvbi10b2dnbGUge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gICAgICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG59XG4jbmFtZXR4dCB7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5hdmF0YXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuLnJvdy1pbWcge1xuICBvcGFjaXR5OiAwLjEgIWltcG9ydGFudDtcbn1cbiIsIi5zZXR0aW5nLXBhZ2UgaW9uLXJvdyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC4zJSAhaW1wb3J0YW50O1xuICB0b3A6IC0xMDBweDtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLXJvdyBkaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLnNldHRpbmctcGFnZSBpb24tZ3JpZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLnNldHRpbmctcGFnZSBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaDIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1saXN0IGlvbi1pdGVtIGlvbi10b2dnbGUge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnNldHRpbmctcGFnZSBpb24tbGlzdCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5zZXR0aW5nLXBhZ2UgaW9uLWxpc3QgaW9uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnNldHRpbmctcGFnZSBpb24tbGlzdDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uc2V0dGluZy1wYWdlIGlvbi1pdGVtIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbiNuYW1ldHh0IHtcbiAgaGVpZ2h0OiA2NHB4O1xuICB3aWR0aDogNjRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYXZhdGFyLWljb24ge1xuICBmb250LXNpemU6IDY0cHggIWltcG9ydGFudDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLnJvdy1pbWcge1xuICBvcGFjaXR5OiAwLjEgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/settings/settings.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/settings/settings.page.ts ***!
    \*******************************************/

  /*! exports provided: SettingsPage */

  /***/
  function srcAppSettingsSettingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
      return SettingsPage;
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


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../modals/login/login.page */
    "./src/app/modals/login/login.page.ts");
    /* harmony import */


    var _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../modals/privacy-policy/privacy-policy.page */
    "./src/app/modals/privacy-policy/privacy-policy.page.ts");
    /* harmony import */


    var _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../modals/term-services/term-services.page */
    "./src/app/modals/term-services/term-services.page.ts");
    /* harmony import */


    var _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../modals/refund-policy/refund-policy.page */
    "./src/app/modals/refund-policy/refund-policy.page.ts");

    var SettingsPage = /*#__PURE__*/function () {
      function SettingsPage(navCtrl, modalCtrl, config, storage, loading, http, events, shared, iab, socialSharing, plt, appVersion, oneSignal) {
        _classCallCheck(this, SettingsPage);

        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.storage = storage;
        this.loading = loading;
        this.http = http;
        this.events = events;
        this.shared = shared;
        this.iab = iab;
        this.socialSharing = socialSharing;
        this.plt = plt;
        this.appVersion = appVersion;
        this.oneSignal = oneSignal;
        this.setting = {};
      }

      _createClass(SettingsPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "updateSetting",
        value: function updateSetting() {
          console.log(this.setting);
          this.storage.set('setting', this.setting);
        }
      }, {
        key: "openLoginPage",
        value: function openLoginPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_12__["LoginPage"],
                      componentProps: {
                        'hideGuestLogin': true
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.shared.logOut();
        }
      }, {
        key: "openAccountPage",
        value: function openAccountPage() {
          this.navCtrl.navigateRoot("my-account");
        }
      }, {
        key: "openSite",
        value: function openSite() {
          this.loading.autoHide(2000);
          this.iab.create(this.config.siteUrl, "blank");
        } //============================================================================================
        //turning on off local  notification

      }, {
        key: "onOffPushNotification",
        value: function onOffPushNotification(value) {
          if (value == false) {
            this.oneSignal.setSubscription(false);
          } else {
            this.oneSignal.setSubscription(true);
          }

          this.updateSetting();
        }
      }, {
        key: "hideShowFooterMenu",
        value: function hideShowFooterMenu() {
          this.events.publish('setting', this.setting);
          this.updateSetting();
        }
      }, {
        key: "hideShowCartButton",
        value: function hideShowCartButton() {
          this.events.publish('setting', this.setting);
          this.updateSetting();
        }
      }, {
        key: "showModal",
        value: function showModal(value) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal, _modal, _modal2;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(value == 'privacyPolicy')) {
                      _context2.next = 9;
                      break;
                    }

                    _context2.next = 3;
                    return this.modalCtrl.create({
                      component: _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyPage"]
                    });

                  case 3:
                    modal = _context2.sent;
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 9:
                    if (!(value == 'termServices')) {
                      _context2.next = 18;
                      break;
                    }

                    _context2.next = 12;
                    return this.modalCtrl.create({
                      component: _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_14__["TermServicesPage"]
                    });

                  case 12:
                    _modal = _context2.sent;
                    _context2.next = 15;
                    return _modal.present();

                  case 15:
                    return _context2.abrupt("return", _context2.sent);

                  case 18:
                    _context2.next = 20;
                    return this.modalCtrl.create({
                      component: _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_15__["RefundPolicyPage"]
                    });

                  case 20:
                    _modal2 = _context2.sent;
                    _context2.next = 23;
                    return _modal2.present();

                  case 23:
                    return _context2.abrupt("return", _context2.sent);

                  case 24:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          var _this = this;

          this.storage.get('setting').then(function (val) {
            if (val != null || val != undefined) {
              _this.setting = val;
            } else {
              _this.setting.localNotification = true;
              _this.setting.notification = true;
              _this.setting.cartButton = true;
              _this.setting.footer = true;
            }
          });
        }
      }, {
        key: "rateUs",
        value: function rateUs() {
          var _this2 = this;

          this.loading.autoHide(2000);

          if (this.plt.is('ios')) {
            this.iab.create(this.config.packgeName.toString(), "_system");
          } else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
              _this2.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
            });
          }
        }
      }, {
        key: "share",
        value: function share() {
          var _this3 = this;

          this.loading.autoHide(2000);

          if (this.plt.is('ios')) {
            this.socialSharing.share(this.config.packgeName.toString(), this.config.appName, this.config.packgeName.toString(), this.config.packgeName.toString());
          } else if (this.plt.is('android')) {
            this.appVersion.getPackageName().then(function (val) {
              _this3.socialSharing.share(_this3.config.appName, _this3.config.appName, "", "https://play.google.com/store/apps/details?id=" + val);
            });
          }
        }
      }, {
        key: "checkAvatar",
        value: function checkAvatar() {
          return this.shared.checkAvatar();
        }
      }, {
        key: "getNameFirstLetter",
        value: function getNameFirstLetter() {
          return this.shared.getNameFirstLetter();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsPage;
    }();

    SettingsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]
      }];
    };

    SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.page.scss */
      "./src/app/settings/settings.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_6__["AppVersion"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_7__["OneSignal"]])], SettingsPage);
    /***/
  }
}]);
//# sourceMappingURL=settings-settings-module-es5.js.map