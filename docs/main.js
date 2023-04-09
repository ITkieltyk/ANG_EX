"use strict";
(self["webpackChunkANG_EX"] = self["webpackChunkANG_EX"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first/first.component */ 7259);
/* harmony import */ var _lotto_lotto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lotto/lotto.component */ 3980);



class AppComponent {
    constructor() {
        this.title = 'ANG_EX';
    }
    colorChange(node) {
        const hue = Math.random() * 360;
        node.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;
        node.style.color = `hsl(${(hue + 180) % 360}, 80%, 50%)`;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "ex1div"], ["sampleDiv1", ""], [1, "button", "color-change-button", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "This is sample div for coloring");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.colorChange(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Ex1 button for color change\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-first")(6, "app-lotto");
    } }, dependencies: [_first_first_component__WEBPACK_IMPORTED_MODULE_0__.FirstComponent, _lotto_lotto_component__WEBPACK_IMPORTED_MODULE_1__.LottoComponent], styles: ["*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.ex1div[_ngcontent-%COMP%] {\r\n  background-color: hsl(0, 70%, 67%);\r\n  height: 200px;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  padding: 50px 0;\r\n  color: hsl(180, 88%, 54%);\r\n}"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./first/first.component */ 7259);
/* harmony import */ var _lotto_lotto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lotto/lotto.component */ 3980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4650);






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _first_first_component__WEBPACK_IMPORTED_MODULE_2__.FirstComponent,
        _lotto_lotto_component__WEBPACK_IMPORTED_MODULE_3__.LottoComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 7259:
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstComponent": () => (/* binding */ FirstComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6895);


function FirstComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", el_r7, " ");
} }
function FirstComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", el_r9, " ");
} }
function FirstComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", el_r11, " ");
} }
function FirstComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", el_r13, " ");
} }
function FirstComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", el_r15, " ");
} }
function FirstComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", el_r17, " ");
} }
class FirstComponent {
    constructor() {
        this.rootArray = [];
    }
    arrayGenerator(listElement) {
        const resultArray = [];
        for (let i = 0; i < 20; i++) {
            resultArray.push(Math.random() * 100);
        }
        this.rootArray = resultArray;
        listElement.classList.toggle('lists-wrapper-visible');
        listElement.classList.toggle('lists-wrapper');
    }
    arrayModFor() {
        const resultArray = [];
        for (let i = 0; i < this.rootArray.length; i++) {
            resultArray.push(Math.random() * 100 + this.rootArray[i]);
        }
        return resultArray;
    }
    arrayModForOf() {
        const resultArray = [];
        for (let el of this.rootArray) {
            resultArray.push(Math.random() * 100 + el);
        }
        return resultArray;
    }
    arrayModWhile() {
        const resultArray = [];
        let i = this.rootArray.length;
        while (i > 0) {
            resultArray.push(Math.random() * 100 + this.rootArray[this.rootArray.length - i]);
            i--;
        }
        return resultArray;
    }
    arrayModDoWhile() {
        const resultArray = [];
        let i = this.rootArray.length;
        do {
            resultArray.push(Math.random() * 100 + this.rootArray[this.rootArray.length - i]);
            i--;
        } while (i > 0);
        return resultArray;
    }
    arrayModForEach() {
        const resultArray = [];
        this.rootArray.forEach((el) => resultArray.push(el + Math.random() * 100));
        return resultArray;
    }
    arrayModMap() {
        const resultArray = this.rootArray.map((el) => el + Math.random() * 100);
        return resultArray;
    }
    ngOnInit() { }
}
FirstComponent.ɵfac = function FirstComponent_Factory(t) { return new (t || FirstComponent)(); };
FirstComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirstComponent, selectors: [["app-first"]], decls: 28, vars: 6, consts: [[1, "button", 3, "click"], [1, "lists-wrapper"], ["listsWrapper", ""], [1, "list-from-array"], [4, "ngFor", "ngForOf"]], template: function FirstComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirstComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.arrayGenerator(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Twenty elements arrays generation\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1, 2)(4, "ol", 3)(5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "List modified by \"for\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FirstComponent_li_7_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 3)(9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "List modified by \"for of\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FirstComponent_li_11_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ol", 3)(13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "List modified by \"while\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FirstComponent_li_15_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ol", 3)(17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "List modified by \"do while\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FirstComponent_li_19_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ol", 3)(21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "List modified by \"forEach\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FirstComponent_li_23_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ol", 3)(25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "List modified by \"map\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FirstComponent_li_27_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayModFor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayModForOf());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayModWhile());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayModDoWhile());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayModForEach());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayModMap());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["*[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.lists-wrapper-visible[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 5px;\r\n  position: relative;\r\n  opacity: 100;\r\n  justify-content: space-around;\r\n  transition: opacity 1s ease, top 2s ease;\r\n  top: 0;\r\n  z-index: -1;\r\n  flex-wrap: wrap;\r\n}\r\n.lists-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 5px;\r\n  position: absolute;\r\n  opacity: 0;\r\n  justify-content: space-around;\r\n  z-index: -1;\r\n  width: 98%;\r\n  flex-wrap: wrap;\r\n}\r\n.list-from-array[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  padding-left: 40px;\r\n\r\n  width: 150px;\r\n  word-wrap: normal;\r\n  overflow: hidden;\r\n  border: 1px solid grey;\r\n}\r\n.list-from-array-go[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  padding-left: 40px;\r\n\r\n  border: 1px solid grey;\r\n  width: 80px;\r\n  word-wrap: normal;\r\n  position: absolute;\r\n  top: 0;\r\n  overflow: hidden;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n  margin-left: -20px;\r\n  margin-top: 10px;\r\n}"] });


/***/ }),

/***/ 3980:
/*!******************************************!*\
  !*** ./src/app/lotto/lotto.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LottoComponent": () => (/* binding */ LottoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4650);

class LottoComponent {
    constructor() {
        this.maszynaLosujaca = [];
        this.tekst1linijka = '';
        this.wonNumbers = [];
    }
    ngOnInit() { }
    losowanie(element) {
        this.tekst1linijka = '';
        const tekst1 = 'Maszyna losująca jest pusta';
        this.tekst1linijka = tekst1;
        element.classList.remove('typed-out3');
        element.classList.add('typed-out');
        setTimeout(() => {
            const tekst2 = 'Następuje zwolnienie blokady';
            this.tekst1linijka = tekst2;
            element.classList.toggle('typed-out');
            element.classList.toggle('typed-out2');
            setTimeout(() => {
                const tekst3 = 'Wylosowane liczby to:';
                for (let i = 1; i < 50; i++) {
                    this.maszynaLosujaca.push(i);
                }
                for (let i = 0; i < 6; i++) {
                    let wonIndex = Math.floor(Math.random() * (49 - i));
                    this.wonNumbers.push(this.maszynaLosujaca[wonIndex]);
                    this.maszynaLosujaca.splice(wonIndex, 1);
                }
                this.tekst1linijka = tekst3 + ' ' + this.wonNumbers.join(', ');
                element.classList.toggle('typed-out2');
                element.classList.toggle('typed-out3');
            }, 4000);
        }, 5000);
    }
}
LottoComponent.ɵfac = function LottoComponent_Factory(t) { return new (t || LottoComponent)(); };
LottoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LottoComponent, selectors: [["app-lotto"]], decls: 6, vars: 1, consts: [[1, "button", 3, "click"], [1, "typing-container"], ["wynik", ""]], template: function LottoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LottoComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.losowanie(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Losowanie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "p", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tekst1linijka);
    } }, styles: ["p[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  text-align: right;\r\n  margin: 0 auto;\r\n}\r\n.typed-out[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  animation: typing 2s steps(20, end) forwards, blink 1s infinite;\r\n  border-right: 0.15em solid orange;\r\n  width: 0;\r\n}\r\n.typed-out-noblink[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  border-right: 0;\r\n  width: 0;\r\n}\r\n.typed-out2[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  animation: typing2 2s steps(24, end) forwards, blink 1s infinite;\r\n  border-right: 0.15em solid orange;\r\n  width: 0;\r\n}\r\n.typed-out3[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  animation: typing3 2s steps(24, end) forwards, blink 1s infinite;\r\n  border-right: 0.15em solid orange;\r\n  width: 0;\r\n}\r\n@keyframes blink {\r\n  from {\r\n    border-color: transparent;\r\n  }\r\n  to {\r\n    border-color: orange;\r\n  }\r\n}\r\n.typing-container[_ngcontent-%COMP%] {\r\n  width: 20rem;\r\n  margin: 5px auto;\r\n}\r\n@keyframes typing {\r\n  from {\r\n    width: 0;\r\n  }\r\n  to {\r\n    width: 11.5rem;\r\n  }\r\n}\r\n@keyframes typing2 {\r\n  from {\r\n    width: 0;\r\n  }\r\n  to {\r\n    width: 12.2rem;\r\n  }\r\n}\r\n@keyframes typing3 {\r\n  from {\r\n    width: 0;\r\n  }\r\n  to {\r\n    width: 100%;\r\n  }\r\n}\r\n@keyframes blink {\r\n  from {\r\n    border-color: transparent;\r\n  }\r\n  to {\r\n    border-color: orange;\r\n  }\r\n}"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4650);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);