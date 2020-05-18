(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-details-characters-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"primary\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Character Details</ion-title>\n        <ion-buttons slot=\"end\">\n      <ion-button (click)=\"unfavouriteCharacters()\" *ngIf=\"isFavourite\">\n        <ion-icon name=\"heart\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"favouriteCharacters()\" *ngIf=\"!isFavourite\">\n        <ion-icon name=\"heart-outline\" slot=\"icon-only\" color=\"secondary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\t\n</ion-header>\n<ion-content padding>\n\n\t<ion-card *ngIf=\"character\">\n\t\t<ion-card-content>\n        <ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t<ion-icon name=\"happy\" slot=\"start\"></ion-icon>\n\t\t\t\t\t<h2><b>Character: {{ character.name }}</b></h2>\n\t\t\t\t</ion-item>\n\t\t\t<p align=\"center\"><img [src]=\"character.img\" width=\"180\" height=\"180\" class=\"info-img\"></p>\n\t\t\t\t\n\t\t\t\t<ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"finger-print\" slot=\"start\"></ion-icon>\n\t\t\t\t\tNickname: {{ character.nickname  }}\n\t\t\t\t</ion-item>\n                <ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n\t\t\t\t\tBday: {{ character.birthday  }}\n\t\t\t\t</ion-item>\n                <ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"flask\" slot=\"start\"></ion-icon>\n\t\t\t\t\tOccupation: {{ character.occupation  }}\n\t\t\t\t</ion-item>\n                <ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n\t\t\t\t\tStatus: {{ character.status  }}\n\t\t\t\t</ion-item>\n                <ion-item class=\"movie-info\" lines=\"none\">\n\t\t\t\t\t<ion-icon name=\"film\" slot=\"start\"></ion-icon>\n\t\t\t\t\tSeasons: {{ character.appearance  }}\n\t\t\t\t</ion-item>\n\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/characters-details/characters-details-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/characters-details/characters-details-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CharactersDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersDetailsPageRoutingModule", function() { return CharactersDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _characters_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters-details.page */ "./src/app/pages/characters-details/characters-details.page.ts");




const routes = [
    {
        path: '',
        component: _characters_details_page__WEBPACK_IMPORTED_MODULE_3__["CharactersDetailsPage"]
    }
];
let CharactersDetailsPageRoutingModule = class CharactersDetailsPageRoutingModule {
};
CharactersDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharactersDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/characters-details/characters-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/characters-details/characters-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: CharactersDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersDetailsPageModule", function() { return CharactersDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _characters_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters-details-routing.module */ "./src/app/pages/characters-details/characters-details-routing.module.ts");
/* harmony import */ var _characters_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters-details.page */ "./src/app/pages/characters-details/characters-details.page.ts");







let CharactersDetailsPageModule = class CharactersDetailsPageModule {
};
CharactersDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _characters_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersDetailsPageRoutingModule"]
        ],
        declarations: [_characters_details_page__WEBPACK_IMPORTED_MODULE_6__["CharactersDetailsPage"]]
    })
], CharactersDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/characters-details/characters-details.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/characters-details/characters-details.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  border-radius: 50%;\n}\n\nion-card-header {\n  font-size: larger;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-card-content {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\nion-item {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-size: 13px;\n}\n\nion-icon {\n  color: #2dd36f;\n}\n\ndiv {\n  background-color: #2dd36f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWlvbmljLWNhMy9zcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMtZGV0YWlscy9jaGFyYWN0ZXJzLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzLWRldGFpbHMvY2hhcmFjdGVycy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLHNIQUFBO0FDRUo7O0FEQ0E7RUFDUSxzSEFBQTtBQ0VSOztBRENBO0VBQ1Msc0hBQUE7RUFDVCxlQUFBO0FDRUE7O0FEQUE7RUFDSSxjQUFBO0FDR0o7O0FEREE7RUFDSyx5QkFBQTtBQ0lMIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcmFjdGVycy1kZXRhaWxzL2NoYXJhY3RlcnMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5pb24tY2FyZC1oZWFkZXJ7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBcbn1cbmlvbi1jYXJkLWNvbnRlbnR7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cbn1cbmlvbi1pdGVtIHtcbiAgICAgICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5mb250LXNpemU6IDEzcHg7XG59XG5pb24taWNvbntcbiAgICBjb2xvcjojMmRkMzZmO1xufVxuZGl2e1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmXG59IiwiaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnNcIiwgXCJMdWNpZGEgU2FucyBSZWd1bGFyXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG5pb24taXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjMmRkMzZmO1xufVxuXG5kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkMzZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/characters-details/characters-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/characters-details/characters-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: CharactersDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersDetailsPage", function() { return CharactersDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




let CharactersDetailsPage = class CharactersDetailsPage {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.characterId = null;
    }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.character_id));
        });
    }
};
CharactersDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CharactersDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-characters-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./characters-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./characters-details.page.scss */ "./src/app/pages/characters-details/characters-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], CharactersDetailsPage);



/***/ })

}]);
//# sourceMappingURL=characters-details-characters-details-module-es2015.js.map