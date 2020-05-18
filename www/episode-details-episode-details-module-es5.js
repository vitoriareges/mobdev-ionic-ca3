function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-details-episode-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEpisodeDetailsEpisodeDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n<!-- code base from mobdev classes and slides -->\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" defaultHref=\"/tabs/episodes\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Episodes Details:</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"unfavouriteEpisode()\" *ngIf=\"isFavourite\">\n        <ion-icon name=\"heart\" slot=\"icon-only\" color=\"warning\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"favouriteEpisode()\" *ngIf=\"!isFavourite\">\n        <ion-icon name=\"heart-outline\" slot=\"icon-only\" color=\"warning\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-card *ngIf=\"episode\" class=\"movie-card\">\n    <ion-card-header>Season {{ episode.season }} - Episode: {{ episode.episode }}</ion-card-header>\n    <ion-card-content>\n      {{ episode.series }} :  {{ episode.title }}\n    </ion-card-content>\n    <ion-item class=\"movie-info\" lines=\"none\">\n      <ion-icon name=\"flask\" slot=\"start\"></ion-icon>\n      Characters in this episode: {{ episode.characters }}\n    </ion-item>\n    <ion-item class=\"movie-info\" lines=\"none\">\n      <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n      Release Date: {{ episode.air_date }}\n    </ion-item>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: EpisodeDetailsPageRoutingModule */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageRoutingModule", function () {
      return EpisodeDetailsPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _episode_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episode-details.page */
    "./src/app/pages/episode-details/episode-details.page.ts");

    var routes = [{
      path: '',
      component: _episode_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodeDetailsPage"]
    }];

    var EpisodeDetailsPageRoutingModule = function EpisodeDetailsPageRoutingModule() {
      _classCallCheck(this, EpisodeDetailsPageRoutingModule);
    };

    EpisodeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EpisodeDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EpisodeDetailsPageModule */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageModule", function () {
      return EpisodeDetailsPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./episode-details-routing.module */
    "./src/app/pages/episode-details/episode-details-routing.module.ts");
    /* harmony import */


    var _episode_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episode-details.page */
    "./src/app/pages/episode-details/episode-details.page.ts");

    var EpisodeDetailsPageModule = function EpisodeDetailsPageModule() {
      _classCallCheck(this, EpisodeDetailsPageModule);
    };

    EpisodeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailsPageRoutingModule"]],
      declarations: [_episode_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodeDetailsPage"]]
    })], EpisodeDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-header {\n  font-size: larger;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card-content {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-item {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 13px;\n}\n\nion-icon {\n  color: #2dd36f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWlvbmljLWNhMy9zcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lcGlzb2RlLWRldGFpbHMvZXBpc29kZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esc0hBQUE7QUNDSjs7QURFQTtFQUNRLHNIQUFBO0FDQ1I7O0FERUE7RUFDUyxzSEFBQTtFQUNULGVBQUE7QUNDQTs7QURDQTtFQUNJLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgXG59XG5pb24tY2FyZC1jb250ZW50e1xuICAgICAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuXG59XG5pb24taXRlbSB7XG4gICAgICAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuZm9udC1zaXplOiAxM3B4O1xufVxuaW9uLWljb257XG4gICAgY29sb3I6IzJkZDM2Zjtcbn0iLCJpb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjMmRkMzZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.page.ts ***!
    \***************************************************************/

  /*! exports provided: EpisodeDetailsPage */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPage", function () {
      return EpisodeDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/favourite.service */
    "./src/app/services/favourite.service.ts");

    var EpisodeDetailsPage = /*#__PURE__*/function () {
      function EpisodeDetailsPage(activatedRoute, api, favouriteService) {
        _classCallCheck(this, EpisodeDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.episodeId = null;
        this.isFavourite = false;
      }

      _createClass(EpisodeDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getEpisode(this.episodeId).subscribe(function (res) {
            _this.episode = res[0];
          });
          this.favouriteService.isFavourite(this.episodeId).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        }
      }, {
        key: "favouriteEpisode",
        value: function favouriteEpisode() {
          var _this2 = this;

          this.favouriteService.favouriteEpisode(this.episodeId).then(function () {
            _this2.isFavourite = true;
          });
        }
      }, {
        key: "unfavouriteEpisode",
        value: function unfavouriteEpisode() {
          var _this3 = this;

          this.favouriteService.unfavouriteEpisode(this.episodeId).then(function () {
            _this3.isFavourite = false;
          });
        }
      }]);

      return EpisodeDetailsPage;
    }();

    EpisodeDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
      }, {
        type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteService"]
      }];
    };

    EpisodeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-episode-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./episode-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./episode-details.page.scss */
      "./src/app/pages/episode-details/episode-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteService"]])], EpisodeDetailsPage);
    /***/
  },

  /***/
  "./src/app/services/favourite.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/favourite.service.ts ***!
    \***********************************************/

  /*! exports provided: FavouriteService */

  /***/
  function srcAppServicesFavouriteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouriteService", function () {
      return FavouriteService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var STORAGE_KEY = 'favouriteEpisodes';

    var FavouriteService = /*#__PURE__*/function () {
      function FavouriteService(storage) {
        _classCallCheck(this, FavouriteService);

        this.storage = storage;
      }

      _createClass(FavouriteService, [{
        key: "getAllFavouriteEpisodes",
        value: function getAllFavouriteEpisodes() {
          return this.storage.get(STORAGE_KEY);
        }
      }, {
        key: "isFavourite",
        value: function isFavourite(episodeId) {
          return this.getAllFavouriteEpisodes().then(function (result) {
            return result && result.indexOf(episodeId) !== -1;
          });
        }
      }, {
        key: "favouriteEpisode",
        value: function favouriteEpisode(episodeId) {
          var _this4 = this;

          return this.getAllFavouriteEpisodes().then(function (result) {
            if (result) {
              result.push(episodeId);
              return _this4.storage.set(STORAGE_KEY, result);
            } else {
              return _this4.storage.set(STORAGE_KEY, [episodeId]);
            }
          });
        }
      }, {
        key: "unfavouriteEpisode",
        value: function unfavouriteEpisode(episodeId) {
          var _this5 = this;

          return this.getAllFavouriteEpisodes().then(function (result) {
            if (result) {
              var index = result.indexOf(episodeId);
              result.splice(index, 1);
              return _this5.storage.set(STORAGE_KEY, result);
            }
          });
        }
      }]);

      return FavouriteService;
    }();

    FavouriteService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    FavouriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], FavouriteService);
    /***/
  }
}]);
//# sourceMappingURL=episode-details-episode-details-module-es5.js.map