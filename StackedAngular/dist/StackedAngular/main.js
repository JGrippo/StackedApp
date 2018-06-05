(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<header>\r\n  <app-header></app-header>\r\n</header>\r\n\r\n<body>\r\n  <app-autocomplete></app-autocomplete>\r\n  <app-stack></app-stack>\r\n</body>\r\n\r\n<footer>\r\n  <app-footer></app-footer>\r\n</footer>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_overflow_overflow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/overflow/overflow.component */ "./src/app/components/overflow/overflow.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/stack/stack.component */ "./src/app/components/stack/stack.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.component */ "./src/app/components/autocomplete/autocomplete.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










 //Angular matrial 
 //Angular material 
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_overflow_overflow_component__WEBPACK_IMPORTED_MODULE_3__["OverflowComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_stack_stack_component__WEBPACK_IMPORTED_MODULE_5__["StackComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n          {{ option }}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/autocomplete/autocomplete.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/autocomplete/autocomplete.component.ts ***!
  \*******************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return _this.filter(val); }));
    };
    AutocompleteComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().includes(val.toLowerCase());
        });
    };
    AutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autocomplete',
            template: __webpack_require__(/*! ./autocomplete.component.html */ "./src/app/components/autocomplete/autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete.component.css */ "./src/app/components/autocomplete/autocomplete.component.css")]
        })
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  background: #420d09;\r\n  padding: 2%;\r\n}\r\nh3{\r\n  font-size: 133%;\r\n  color: #777;\r\n}\r\na {\r\n  color: #964;\r\n}\r\na img {\r\n  width: 40px;\r\n  height: 40px;\r\n  line-height: 36px;\r\n  font-size: 16px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  text-align: center;\r\n  transition: all .3s;\r\n  margin-right: 5px;\r\n  text-decoration: none !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"columns\">\r\n            <div class=\"column\">\r\n                <h3>Navigate</h3>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"#\">Link 1</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Link 2</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Link 3</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Link 4</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"column\">\r\n                <h3>Get to Know Us</h3>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"#\">Link 1</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Link 2</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Link 3</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Link 4</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"column\">\r\n                <ul>\r\n                    <li>\r\n                        <h3>Contact Us</h3>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"mailto:info@revature.com\" class=\"sub-head\">info@revature.com</a>\r\n                    </li>\r\n                    <li class=\"margin-top-5\">\r\n                        <a href=\"tel:703 570 8181\" class=\"sub-head\"> <span class=\"small padding-right-5\">Phone: </span>703 570 8181</a>\r\n                    </li>\r\n                    <li class=\"\">\r\n                        <a href=\"tel:703 995 4500\" class=\"sub-head\"> <span class=\"small padding-right-5\">Fax: </span>703 995 4500</a>\r\n                    </li>\r\n                    <li>\r\n                        <span href=\"\" class=\"main-head-contact\">CORPORATE HEADQUARTERS</span>\r\n                    </li>\r\n                    <li>\r\n                        <span href=\"\" class=\"sub-head\">11730 Plaza America Dr.<br/>2nd Floor <br/> Reston, VA 20190. </span>\r\n                    </li>\r\n                    <li class=\"margin-top-5\">\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"container\">\r\n            <h3>Follow Us</h3>\r\n            <a href=\"https://www.facebook.com/revature/\" target=\"_blank\">\r\n                <img src=\"https://3g4d13k75x47q7v53surz1gi-wpengine.netdna-ssl.com/wp-content/themes/revature/imgs/facebook-logo.svg\"/>\r\n            </a>\r\n\r\n            <a href=\"https://twitter.com/WeAreRevature\" target=\"_blank\">\r\n                <img src=\"https://3g4d13k75x47q7v53surz1gi-wpengine.netdna-ssl.com/wp-content/themes/revature/imgs/twitter.svg\"/>\r\n            </a>\r\n\r\n            <a href=\"https://www.linkedin.com/company/revature\" target=\"_blank\">\r\n                <img src=\"https://3g4d13k75x47q7v53surz1gi-wpengine.netdna-ssl.com/wp-content/themes/revature/imgs/linkedin.svg\"/>\r\n            </a>\r\n\r\n            <a href=\"https://www.instagram.com/teamrevature/\" target=\"_blank\">\r\n                <img src=\"https://3g4d13k75x47q7v53surz1gi-wpengine.netdna-ssl.com/wp-content/themes/revature/imgs/instagram.svg\"/>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    letter-spacing: 4px;\r\n\r\n    font-size: 80%;\r\n\r\n    text-align: center;\r\n    background: inherit;\r\n    color: #964;\r\n}\r\n.header {\r\n    /* text-align: center; */\r\n    align-content: center;\r\n    font-size: 200%;\r\n\r\n    background: #420d09;\r\n    color: #777;\r\n\r\n    padding: 2%;\r\n}\r\na {\r\n  color: inherit;\r\n}"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=header>\r\n    <h1>\r\n      {{ Title | uppercase }}\r\n    </h1>\r\n    <nav class=navbar>\r\n      <!--Placeholder hrefs-->\r\n      <a href=\"/Home\">Home</a> |\r\n      <a href=\"/About\">About</a> |\r\n      <a href=\"/Contact\">Contact</a>\r\n    </nav>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.Title = "Stacked";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/overflow/overflow.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/overflow/overflow.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image {\r\n    background-image: url('https://previews.123rf.com/images/madredus/madredus1309/madredus130900084/22289132-pile-of-wood-logs-ready-for-winter.jpg');\r\n    background-size: cover;\r\n  }"

/***/ }),

/***/ "./src/app/components/overflow/overflow.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/overflow/overflow.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>Logs</mat-card-title>\r\n      <mat-card-subtitle>Stacked Logs</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"https://previews.123rf.com/images/madredus/madredus1309/madredus130900084/22289132-pile-of-wood-logs-ready-for-winter.jpg\" alt=\"Photo of a Shiba Inu\">\r\n    <mat-card-content>\r\n      <p>Merge Conflicts</p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n  </mat-card>"

/***/ }),

/***/ "./src/app/components/overflow/overflow.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/overflow/overflow.component.ts ***!
  \***********************************************************/
/*! exports provided: OverflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverflowComponent", function() { return OverflowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverflowComponent = /** @class */ (function () {
    function OverflowComponent() {
    }
    OverflowComponent.prototype.ngOnInit = function () {
    };
    OverflowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overflow',
            template: __webpack_require__(/*! ./overflow.component.html */ "./src/app/components/overflow/overflow.component.html"),
            styles: [__webpack_require__(/*! ./overflow.component.css */ "./src/app/components/overflow/overflow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverflowComponent);
    return OverflowComponent;
}());



/***/ }),

/***/ "./src/app/components/stack/stack.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/stack/stack.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/stack/stack.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/stack/stack.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <select>\r\n    <option disabled>Drop down of stuff</option>\r\n    <option value=\"stuff\">stuff</option>\r\n    <option value=\"stuff\">stuff</option>\r\n    <option value=\"stuff\">stuff</option>\r\n  </select>\r\n  <button (click)=\"clicked()\">{{message}}</button>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/stack/stack.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/stack/stack.component.ts ***!
  \*****************************************************/
/*! exports provided: StackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackComponent", function() { return StackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StackComponent = /** @class */ (function () {
    function StackComponent() {
        this.message = 'click';
    }
    StackComponent.prototype.ngOnInit = function () {
    };
    StackComponent.prototype.clicked = function () {
        this.message = 'stop';
    };
    StackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stack',
            template: __webpack_require__(/*! ./stack.component.html */ "./src/app/components/stack/stack.component.html"),
            styles: [__webpack_require__(/*! ./stack.component.css */ "./src/app/components/stack/stack.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StackComponent);
    return StackComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Revature\StackedApp\StackedAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map