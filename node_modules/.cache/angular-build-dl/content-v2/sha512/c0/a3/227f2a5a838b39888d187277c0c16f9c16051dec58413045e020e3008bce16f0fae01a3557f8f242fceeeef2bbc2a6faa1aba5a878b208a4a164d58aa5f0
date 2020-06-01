function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reward-points-reward-points-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRewardPointsRewardPointsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-menu-button slot=\"start\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </ion-menu-button>\n    <ion-title> {{'Reward Point'| translate }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"refreshPage()\">\n        <ion-icon name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"grid\" class=\"ion-no-padding\" *ngIf=\"rewards.length==0 && !httpLoading\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"happy\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'Your Rewards List is Empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h5>{{'continue shopping'|translate}}</h5>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-button color=\"secondary\" (click)=\"openShop()\">{{'Explore'|translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-card *ngFor=\"let r of rewards\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Action'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" col-6>\n            {{r.type}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Points'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{r.points}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            {{'Date'|translate}}\n          </ion-col>\n          <ion-col class=\"ion-text-right\" size=\"6\">\n            {{r.date}}\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"8\">\n      <h5> {{'Total Points Earned'|translate}} &nbsp;&nbsp;:</h5>\n    </ion-col>\n    <ion-col class=\"ion-text-right\" siz=\"4\">\n      <h5>{{totalPoints()}}</h5>\n    </ion-col>\n  </ion-row>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/reward-points/reward-points.module.ts ***!
    \*******************************************************/

  /*! exports provided: RewardPointsPageModule */

  /***/
  function srcAppRewardPointsRewardPointsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RewardPointsPageModule", function () {
      return RewardPointsPageModule;
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


    var _reward_points_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reward-points.page */
    "./src/app/reward-points/reward-points.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var routes = [{
      path: '',
      component: _reward_points_page__WEBPACK_IMPORTED_MODULE_6__["RewardPointsPage"]
    }];

    var RewardPointsPageModule = function RewardPointsPageModule() {
      _classCallCheck(this, RewardPointsPageModule);
    };

    RewardPointsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_reward_points_page__WEBPACK_IMPORTED_MODULE_6__["RewardPointsPage"]]
    })], RewardPointsPageModule);
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/reward-points/reward-points.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRewardPointsRewardPointsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: var(--ion-color-primary);\n  --color:white;\n}\nion-header ion-toolbar ion-buttons ion-icon {\n  zoom: 1.3;\n}\nion-header ion-toolbar ion-buttons ion-badge {\n  position: absolute;\n  right: 3px;\n  bottom: 12px;\n}\nion-content .grid {\n  margin-top: 50%;\n}\nion-content .grid ion-row ion-col {\n  text-align: center;\n}\nion-content .grid ion-row ion-col ion-icon {\n  zoom: 3.9;\n  color: lightgrey;\n}\nion-content .grid ion-row ion-col ion-button {\n  --background: var(--ion-color-primary);\n  --border-radius: 0px;\n  height: 30px;\n}\nion-content .grid ion-row ion-col h4 {\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 2px;\n}\nion-content .grid ion-row ion-col h5 {\n  font-size: 14px;\n  color: gray;\n  margin-top: 0;\n}\nion-content ion-grid ion-card {\n  color: black;\n}\nion-footer {\n  background-color: #557f5f;\n  color: white;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21vcmVsL0J1cmVhdS9zb2x1dGlvbiBhbmRyb2lkIGRvbGxhcnMgYmlqb3V4L0FwcCBTb3VyY2UgQ29kZS9zcmMvYXBwL3Jld2FyZC1wb2ludHMvcmV3YXJkLXBvaW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jld2FyZC1wb2ludHMvcmV3YXJkLXBvaW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxzQ0FBQTtFQUNBLGFBQUE7QUNBUjtBREVZO0VBQ0ksU0FBQTtBQ0FoQjtBREVZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FoQjtBRE1JO0VBQ0ksZUFBQTtBQ0hSO0FES1k7RUFDSSxrQkFBQTtBQ0hoQjtBRElnQjtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQ0ZwQjtBRElnQjtFQUNJLHNDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDRnBCO0FESWdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZwQjtBRElnQjtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0ZwQjtBRFFRO0VBQ0ksWUFBQTtBQ05aO0FEVUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9yZXdhcmQtcG9pbnRzL3Jld2FyZC1wb2ludHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIC0tY29sb3I6d2hpdGU7XG4gICAgICAgIGlvbi1idXR0b25ze1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgem9vbTogMS4zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJhZGdle1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmlvbi1jb250ZW50e1xuICAgIC5ncmlke1xuICAgICAgICBtYXJnaW4tdG9wOiA1MCU7XG4gICAgICAgIGlvbi1yb3d7XG4gICAgICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgem9vbTozLjk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg0e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg1e1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tZ3JpZHtcbiAgICAgICAgaW9uLWNhcmR7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IzU1N2Y1ZiA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIFxufSIsImlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvcjp3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWljb24ge1xuICB6b29tOiAxLjM7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNweDtcbiAgYm90dG9tOiAxMnB4O1xufVxuXG5pb24tY29udGVudCAuZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24taWNvbiB7XG4gIHpvb206IDMuOTtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cbmlvbi1jb250ZW50IC5ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5pb24tY29udGVudCAuZ3JpZCBpb24tcm93IGlvbi1jb2wgaDQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5pb24tY29udGVudCAuZ3JpZCBpb24tcm93IGlvbi1jb2wgaDUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLWNhcmQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU3ZjVmO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/reward-points/reward-points.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/reward-points/reward-points.page.ts ***!
    \*****************************************************/

  /*! exports provided: RewardPointsPage */

  /***/
  function srcAppRewardPointsRewardPointsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RewardPointsPage", function () {
      return RewardPointsPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/providers/loading/loading.service */
    "./src/providers/loading/loading.service.ts");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");

    var RewardPointsPage = /*#__PURE__*/function () {
      function RewardPointsPage(navCtrl, http, loading, shared, config) {
        _classCallCheck(this, RewardPointsPage);

        this.navCtrl = navCtrl;
        this.http = http;
        this.loading = loading;
        this.shared = shared;
        this.config = config;
        this.rewards = [];
        this.httpLoading = true;
        this.getRewards();
      }

      _createClass(RewardPointsPage, [{
        key: "getRewards",
        value: function getRewards() {
          var _this = this;

          this.httpLoading = true;
          this.loading.show();
          this.http.get(this.config.url + '/api/appusers/ionic_reward_points/?insecure=cool&user_id=' + this.shared.customerData.id).subscribe(function (data) {
            _this.httpLoading = false;

            _this.loading.hide();

            var dat = data.data;
            _this.rewards = dat;
            console.log(dat);
          });
        }
      }, {
        key: "openShop",
        value: function openShop() {
          this.navCtrl.navigateForward("/products/0/0/newest");
        }
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          console.log('ionViewDidLoad RewardPointsPage');
        }
      }, {
        key: "refreshPage",
        value: function refreshPage() {
          this.getRewards();
        }
      }, {
        key: "totalPoints",
        value: function totalPoints() {
          var t = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.rewards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var v = _step.value;
              t = t + parseInt(v.points);
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

          return t;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RewardPointsPage;
    }();

    RewardPointsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]
      }, {
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]
      }];
    };

    RewardPointsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reward-points',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reward-points.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reward-points/reward-points.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reward-points.page.scss */
      "./src/app/reward-points/reward-points.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], src_providers_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])], RewardPointsPage);
    /***/
  }
}]);
//# sourceMappingURL=reward-points-reward-points-module-es5.js.map