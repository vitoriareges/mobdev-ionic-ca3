(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deathsionic-deathsionic-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deathsionic/deathsionic.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deathsionic/deathsionic.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Deaths</ion-title>\n  </ion-toolbar>\n</ion-header>\n<!-- code base from mobdev classes and slides -->\n\n<ion-content>\n  <ion-searchbar name=\"search\" [(ngModel)]=\"search\" placeholder=\"Who is your killer?\" cancelButtonText=\"Cancel\"></ion-searchbar>\n  <ion-list>\n    <div *ngFor=\"let death of deaths | async\">\n      <ion-item *ngIf=\"filter(death)\">\n        <ion-label>\n         <div position=left>  \n           <h2> <ion-icon color=\"danger\" name=\"fitness\" slot=\"start\"></ion-icon>\n          {{ death.death }}</h2> </div>\n          <div position=rigth>  \n           \n        </div>\n     \n            <h3> \n            <p><b>Season {{death.season}} - Episode: {{death.episode}} </b></p>\n            <p>Killer: {{death.responsible}}</p>\n            <p>Cause of death: {{death.cause}}</p>\n            <p>Last Words: {{death.last_words}}</p></h3>\n       </ion-label>\n    </ion-item>\n    </div>\n    \n  </ion-list> \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/deathsionic/deathsionic-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/deathsionic/deathsionic-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DeathsionicPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsionicPageRoutingModule", function() { return DeathsionicPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deathsionic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deathsionic.page */ "./src/app/pages/deathsionic/deathsionic.page.ts");




const routes = [
    {
        path: '',
        component: _deathsionic_page__WEBPACK_IMPORTED_MODULE_3__["DeathsionicPage"]
    }
];
let DeathsionicPageRoutingModule = class DeathsionicPageRoutingModule {
};
DeathsionicPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathsionicPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/deathsionic/deathsionic.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/deathsionic/deathsionic.module.ts ***!
  \*********************************************************/
/*! exports provided: DeathsionicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsionicPageModule", function() { return DeathsionicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _deathsionic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deathsionic-routing.module */ "./src/app/pages/deathsionic/deathsionic-routing.module.ts");
/* harmony import */ var _deathsionic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deathsionic.page */ "./src/app/pages/deathsionic/deathsionic.page.ts");







let DeathsionicPageModule = class DeathsionicPageModule {
};
DeathsionicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deathsionic_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsionicPageRoutingModule"]
        ],
        declarations: [_deathsionic_page__WEBPACK_IMPORTED_MODULE_6__["DeathsionicPage"]]
    })
], DeathsionicPageModule);



/***/ }),

/***/ "./src/app/pages/deathsionic/deathsionic.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/deathsionic/deathsionic.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  background-color: antiquewhite;\n}\n\np {\n  font-family: Lucida Console, Charcoal, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LWlvbmljLWNhMy9zcmMvYXBwL3BhZ2VzL2RlYXRoc2lvbmljL2RlYXRoc2lvbmljLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhdGhzaW9uaWMvZGVhdGhzaW9uaWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURHQTtFQUNFLGlEQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWF0aHNpb25pYy9kZWF0aHNpb25pYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xuICAgIFxufVxuXG5we1xuICBmb250LWZhbWlseTogTHVjaWRhICBDb25zb2xlLCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcbn0iLCJkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogTHVjaWRhIENvbnNvbGUsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/deathsionic/deathsionic.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/deathsionic/deathsionic.page.ts ***!
  \*******************************************************/
/*! exports provided: DeathsionicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsionicPage", function() { return DeathsionicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");




let DeathsionicPage = class DeathsionicPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.search = "";
    }
    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.router.navigateByUrl(`/tabs/deaths}`);
    }
    filter(death) {
        // console.log(death.author);
        return death.responsible.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
    }
};
DeathsionicPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DeathsionicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deathsionic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deathsionic.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deathsionic/deathsionic.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deathsionic.page.scss */ "./src/app/pages/deathsionic/deathsionic.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], DeathsionicPage);



/***/ })

}]);
//# sourceMappingURL=deathsionic-deathsionic-module-es2015.js.map