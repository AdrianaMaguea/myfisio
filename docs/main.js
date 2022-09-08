"use strict";
(self["webpackChunkmyfisio"] = self["webpackChunkmyfisio"] || []).push([["main"],{

/***/ 170:
/*!********************************************!*\
  !*** ./src/app/agenda/agenda.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendaComponent": () => (/* binding */ AgendaComponent)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class AgendaComponent {
    constructor(firestore) {
        this.firestore = firestore;
        const coleccion = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(firestore, 'citas');
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.collectionData)(coleccion)
            .subscribe(console.log);
    }
    ngOnInit() {
    }
}
AgendaComponent.ɵfac = function AgendaComponent_Factory(t) { return new (t || AgendaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore)); };
AgendaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgendaComponent, selectors: [["app-agenda"]], decls: 0, vars: 0, template: function AgendaComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VuZGEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routerOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 100],
    relativeLinkResolution: 'legacy'
};
const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, routerOptions), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agenda/agenda.component */ 170);





class AppComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.menuOpen = false;
        this.isCalendlyOpen = false;
    }
    toggleMenu(isOpen) {
        this.menuOpen = isOpen === undefined ? !this.menuOpen : isOpen;
        if (this.menuOpen) {
            this.renderer.addClass(this.document.body, 'no-scroll');
        }
        else {
            this.renderer.removeClass(this.document.body, 'no-scroll');
        }
    }
    onCalendlyOpen() {
        this.isCalendlyOpen = true;
        this.renderer.addClass(this.document.body, 'no-scroll');
    }
    onCalendlyClose() {
        this.isCalendlyOpen = false;
        this.renderer.removeClass(this.document.body, 'no-scroll');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 174, vars: 17, consts: [[1, "menu"], ["alt", "", "src", "./assets/horizontal.png", 1, "menu-logo", 3, "routerLink", "fragment", "click"], [1, "menu-nav"], [3, "routerLink", "fragment", "click"], [1, "menu-cta", 3, "click"], [1, "menu-hamburger", 3, "click"], ["id", "/", 1, "header"], [1, "header-text"], ["id", "inicio", 1, "power"], [1, "power-content", "container"], [1, "power-text"], [1, "power-line"], [1, "power-line-title"], ["src", "./assets/responsive.png", "alt", "", 1, "power-line-title-icon"], ["src", "./assets/power.png", "alt", "", 1, "power-content-image"], [1, "ourservices", 3, "id"], [1, "ourservices-title"], [1, "ourservices-content", "container"], ["src", "./assets/1.png", "alt", ""], ["src", "./assets/2.png", "alt", ""], ["src", "./assets/3.png", "alt", ""], ["src", "./assets/4.png", "alt", ""], ["src", "./assets/5.png", "alt", ""], ["src", "./assets/6.png", "alt", ""], ["src", "./assets/7.png", "alt", ""], [1, "packs", 3, "id"], [1, "packs-content", "container"], [1, "packs-our"], [1, "packs-our-content"], [1, "packs-price"], [1, "packs-price-tag"], [3, "click"], ["href", "https://wa.me/573137248297?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.", 1, "button"], [1, "contact", 3, "id"], [1, "contact-content", "container"], [1, "contact-content-our"], [1, "contact-text"], [1, "contact-icon"], ["src", "./assets/inst.png", "alt", ""], ["href", "https://www.instagram.com/myfisio.co", "target", "_blank"], ["src", "./assets/what.png", "alt", ""], ["href", "https://wa.me/573137248297?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.", "target", "_blank"], ["src", "./assets/email.png", "alt", ""], ["href", "mailto:info@myfisio.co", "target", "_blank"], [1, "calendly-container"], [1, "close-btn", 3, "click"], ["data-url", "https://calendly.com/d/d2x-3s3-37x", 1, "calendly-inline-widget"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_img_click_1_listener() { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2)(3, "li")(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_4_listener() { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Paquetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { return ctx.toggleMenu(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() { return ctx.onCalendlyOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Agenda tu cita");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 6)(19, "div", 7)(20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "FISIOTERAPIA DEPORTIVA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "A TU ALCANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section", 8)(25, "div", 9)(26, "div", 10)(27, "div", 11)(28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Mejora tu rendimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "De la mano de nuestros profesionales altamente capacitados te ayudamos a impulsar tus capacidades, generando as\u00ED un aumento en tu rendimiento deportivo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11)(35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Entrena sin dolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "En myfisio.co valoramos el movimiento, entendiendo el privilegio que es movernos sin dolencias. Por esto nos encargamos del reentrenamiento de este, tratando la ra\u00EDz del problema.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11)(42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Potencializate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Todos los atletas, sin importar su deporte necesitan del entreno consciente y enfocado a sus metas. Desde myfisio.co te ayudamos a ser una mejor versi\u00F3n de ti en cada paso como atleta. Cuida tu cuerpo a cada paso del camino, para asi llegar a conocer tus limites de una manera sana.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "section", 15)(50, "div", 16)(51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Nuestros servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 17)(54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "puncion seca");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Masajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Electroterapia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Vibropercusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Presoterapia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Kinesiologia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Terapia con ventosas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "section", 25)(83, "div", 26)(84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Paquetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 27)(87, "div", 28)(88, "div", 29)(89, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Recuperacion Miembro Inferior");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "$590.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ul")(94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Evaluacion f\u00EDsica + recomendaciones iniciales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "3 sesiones de Electroterapia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "3 sesiones ventosaterapia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "2 masajes de liberaci\u00F3n medio cuerpo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "1 masaje de liberaci\u00F3n cuerpo completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "2 masajes con Gua Sha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "2 sesi\u00F3n de presoterapia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "1 sesi\u00F3n de vibropercusi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "1 sesi\u00F3n de puncion Seca");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_112_listener() { return ctx.onCalendlyOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "agenda tu cita");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 28)(115, "div", 29)(116, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Recuperacion Miembro Superior");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "$530.000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "ul")(121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Evaluacion f\u00EDsica + recomendaciones iniciales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "3 sesiones de Electroterapia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "3 sesiones ventosaterapia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "2 masajes de liberaci\u00F3n medio cuerpo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "1 masaje de liberaci\u00F3n cuerpo completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "2 masajes con Gua Sha ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "2 sesi\u00F3n de vibropercusi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "2 sesi\u00F3n de puncion Seca");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_137_listener() { return ctx.onCalendlyOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "agenda tu cita");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 28)(140, "div", 29)(141, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Personalizado");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Todas las caracter\u00EDsticas de los paquetes anteriores adem\u00E1s de las caracter\u00EDsticas personalizadas que necesites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "section", 33)(148, "div", 34)(149, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 35)(152, "div", 36)(153, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Utiliza las siguientes v\u00EDas de contacto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p")(158, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "myfisio.co");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "p")(163, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "313 724 8297");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "p")(168, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "info@myfisio.co");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "app-agenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 44)(172, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_span_click_172_listener() { return ctx.onCalendlyClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".")("fragment", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".")("fragment", "inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".")("fragment", "servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".")("fragment", "paquetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ".")("fragment", "contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "servicios");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "paquetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", !ctx.isCalendlyOpen);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_0__.AgendaComponent], styles: [".menu[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  width: calc(100% - 60px);\n  padding: 0 30px;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(242, 242, 242, 0.8);\n  border-bottom: 1px solid rgba(242, 242, 242, 0.4);\n}\n@media (min-width: 768px) {\n  .menu[_ngcontent-%COMP%] {\n    box-shadow: 0 2px 13px rgba(242, 242, 242, 0.8);\n    justify-content: space-around;\n    padding: 0;\n    width: 100%;\n  }\n}\n.menu-logo[_ngcontent-%COMP%] {\n  max-width: 190px;\n  cursor: pointer;\n}\n.menu-nav[_ngcontent-%COMP%] {\n  display: none;\n  justify-content: space-between;\n  padding: 0;\n  margin: 0;\n  align-items: center;\n  column-gap: 20px;\n}\n@media (min-width: 768px) {\n  .menu-nav[_ngcontent-%COMP%] {\n    font-size: 15px;\n    display: flex;\n  }\n}\n@media (min-width: 992px) {\n  .menu-nav[_ngcontent-%COMP%] {\n    font-size: 16px;\n    column-gap: 50px;\n  }\n}\n.menu-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.menu-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 600;\n  color: #262626;\n}\n.menu-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #F86808;\n}\n.menu-cta[_ngcontent-%COMP%] {\n  border: none;\n  height: 32px;\n  background-color: #F86808;\n  border-radius: 40px;\n  color: #f2f2f2;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: 600;\n  padding: 0 17px;\n  cursor: pointer;\n  bottom: 30px;\n  position: fixed;\n  display: block;\n  left: calc(50% - 76px);\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n@media (min-width: 768px) {\n  .menu-cta[_ngcontent-%COMP%] {\n    position: unset;\n    display: block;\n    font-size: 14px;\n    box-shadow: none;\n  }\n}\n.menu-hamburger[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 2px solid #262626;\n  border-bottom: 2px solid #262626;\n  width: 28px;\n  height: 24px;\n  position: relative;\n  cursor: pointer;\n  transition: border-color 0.2s ease-out;\n  background-color: transparent;\n}\n@media (min-width: 768px) {\n  .menu-hamburger[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.menu-hamburger[_ngcontent-%COMP%]:after, .menu-hamburger[_ngcontent-%COMP%]:before {\n  content: \"\";\n  border: 1px solid #262626;\n  position: absolute;\n  top: 9px;\n  left: 0;\n  width: 26px;\n  transition: transform 0.2s ease-out;\n  background-color: #262626;\n}\n.menu.open[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #f2f2f2;\n  flex-direction: column;\n  row-gap: 20px;\n  justify-content: center;\n}\n.menu.open[_ngcontent-%COMP%]   .menu-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 12px;\n}\n.menu.open[_ngcontent-%COMP%]   .menu-hamburger[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  border-color: transparent;\n}\n.menu.open[_ngcontent-%COMP%]   .menu-hamburger[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n}\n.menu.open[_ngcontent-%COMP%]   .menu-hamburger[_ngcontent-%COMP%]:before {\n  transform: rotate(-45deg);\n}\n.header[_ngcontent-%COMP%] {\n  background: url(/assets/header.png) no-repeat 77% center #f2f2f2;\n  background-size: cover;\n  height: 100vh;\n  display: flex;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n.header-text[_ngcontent-%COMP%] {\n  padding: 140px 40px 0;\n}\n@media (min-width: 567px) {\n  .header-text[_ngcontent-%COMP%] {\n    padding: 200px 40px 0;\n  }\n}\n@media (min-width: 768px) {\n  .header-text[_ngcontent-%COMP%] {\n    padding: 0 100px;\n  }\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #262626;\n  margin: 0;\n  font-size: 34px;\n  font-weight: 800;\n}\n@media (min-width: 768px) {\n  .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media (min-width: 992px) {\n  .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 66px;\n  }\n}\n@media (min-width: 1200px) {\n  .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n.header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #F86808;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n@media (min-width: 768px) {\n  .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (min-width: 992px) {\n  .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media (min-width: 1200px) {\n  .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.calendly-container[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.calendly-container.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.calendly-inline-widget[_ngcontent-%COMP%] {\n  min-width: 320px;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.close-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 22px;\n  right: 42px;\n  z-index: 3;\n  opacity: 0.8;\n  width: 30px;\n  height: 30px;\n}\n@media (min-width: 1000px) {\n  .close-btn[_ngcontent-%COMP%] {\n    right: 32px;\n  }\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.close-btn[_ngcontent-%COMP%]:after, .close-btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 20px;\n  background-color: #262626;\n  transform: rotate(45deg);\n  border-radius: 3px;\n  position: absolute;\n  left: 12px;\n  top: 6px;\n}\n.close-btn[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n}\n.header[_ngcontent-%COMP%] {\n  background: url(/assets/header.png) no-repeat 77% center #f2f2f2;\n  background-size: cover;\n  height: 100vh;\n  display: flex;\n}\n@media (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n.header-text[_ngcontent-%COMP%] {\n  padding: 140px 40px 0;\n}\n@media (min-width: 567px) {\n  .header-text[_ngcontent-%COMP%] {\n    padding: 200px 40px 0;\n  }\n}\n@media (min-width: 768px) {\n  .header-text[_ngcontent-%COMP%] {\n    padding: 0 100px;\n  }\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #262626;\n  margin: 0;\n  font-size: 34px;\n  font-weight: 800;\n}\n@media (min-width: 768px) {\n  .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media (min-width: 992px) {\n  .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 66px;\n  }\n}\n@media (min-width: 1200px) {\n  .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n.header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #F86808;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n@media (min-width: 768px) {\n  .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media (min-width: 992px) {\n  .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media (min-width: 1200px) {\n  .header-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.calendly-container[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.calendly-container.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.calendly-inline-widget[_ngcontent-%COMP%] {\n  min-width: 320px;\n  width: 100%;\n  height: 100%;\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.close-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 22px;\n  right: 42px;\n  z-index: 3;\n  opacity: 0.8;\n  width: 30px;\n  height: 30px;\n}\n@media (min-width: 1000px) {\n  .close-btn[_ngcontent-%COMP%] {\n    right: 32px;\n  }\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.close-btn[_ngcontent-%COMP%]:after, .close-btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  width: 3px;\n  height: 20px;\n  background-color: #262626;\n  transform: rotate(45deg);\n  border-radius: 3px;\n  position: absolute;\n  left: 12px;\n  top: 6px;\n}\n.close-btn[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n}\n.power[_ngcontent-%COMP%] {\n  background-color: #262626;\n  padding: 0 0 30px;\n}\n.power-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  column-gap: 50px;\n  flex-direction: column;\n}\n@media (min-width: 992px) {\n  .power-content[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.power-content-image[_ngcontent-%COMP%] {\n  max-width: 450px;\n  width: 100%;\n  aspect-ratio: 0.68;\n  object-fit: cover;\n  object-position: bottom;\n}\n.power-line-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.power-line-title-icon[_ngcontent-%COMP%] {\n  max-width: 40px;\n  margin-right: 12px;\n}\n.power-line-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #F86808;\n  margin: 20px 0 10px 0;\n}\n.power-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #8c8c8c;\n  font-size: 16px;\n}\n.ourservices[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n  padding: 100px 0;\n}\n.ourservices-title[_ngcontent-%COMP%] {\n  padding: 0 0 100px 0;\n}\n.ourservices-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #262626;\n  text-align: center;\n  margin: 0;\n}\n.ourservices-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n}\n.ourservices-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  border-radius: 50%;\n}\n.ourservices-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #262626;\n  font-weight: 600;\n}\n.packs[_ngcontent-%COMP%] {\n  background-color: #F86808;\n  padding: 100px 0;\n  color: #f2f2f2;\n}\n.packs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n}\n.packs-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.packs-our[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-top: 30px;\n  gap: 40px;\n}\n@media (min-width: 768px) {\n  .packs-our[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n.packs-our-content[_ngcontent-%COMP%] {\n  flex-basis: 33%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.packs-our-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 40px;\n  padding: 0 0 0 18px;\n}\n.packs-our-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  color: #f2f2f2;\n}\n.packs-our-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .packs-our-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 40px;\n  background-color: #f2f2f2;\n  border-radius: 40px;\n  border: none;\n  color: #F86808;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 600;\n  padding: 0 17px;\n  cursor: pointer;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n.packs-price[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n}\n.packs-price-tag[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n}\n.contact[_ngcontent-%COMP%] {\n  background-color: #262626;\n  padding: 100px 0;\n  color: #f2f2f2;\n}\n.contact-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n  text-align: center;\n}\n.contact-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 16px;\n  color: #f2f2f2;\n  text-align: center;\n}\n.contact-content-our[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 50px 0 50px;\n}\n.contact-content-our[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%] {\n  flex-basis: 80%;\n}\n.contact-content-our[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #8c8c8c;\n  margin: 0 0 10px;\n}\n.contact-content-our[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.contact-content-our[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 60px;\n  max-height: 60px;\n}\n.contact-content-our[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .contact-content-our[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%]   .contact-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  color: #8c8c8c;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsInN0eWxlc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJzdHlsZXNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0EsaURBQUE7QUFGSjtBQ0lJO0VEVko7SUFtQlEsK0NBQUE7SUFDQSw2QkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VBVE47QUFDRjtBQVVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBUlI7QUFVSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVJSO0FDaEJJO0VEa0JBO0lBUVEsZUFBQTtJQUNBLGFBQUE7RUFOVjtBQUNGO0FDaEJJO0VEWUE7SUFZUSxlQUFBO0lBQ0EsZ0JBQUE7RUFKVjtBQUNGO0FBS1E7RUFDSSxnQkFBQTtBQUhaO0FBSVk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRW5ETTtBRmlEdEI7QUFHZ0I7RUFDSSxjRXBERztBRm1EdkI7QUFNSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJFNURlO0VGNkRmLG1CQUFBO0VBQ0EsY0VoRWM7RUZpRWQsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMENBQUE7QUFKUjtBQ3pESTtFRDhDQTtJQWlCUSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQUZWO0FBQ0Y7QUFJSTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtFQUNBLDZC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dUJBQUE7RUFDQSxtQkFBQTtBQWlDWjtBQWhDWTtFQUNJLGVBQUE7QUFrQ2hCO0FBakNnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNFbmZHO0VGb2ZILGdCQUFBO0FBbUNwQjtBQWpDZ0I7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQW1DcEI7QUFsQ29CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBb0N4QjtBQWxDb0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRWpnQkQ7RUZrZ0JDLHFCQUFBO0FBb0N4QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuL3N0eWxlcy9icmVha3BvaW50c1wiO1xyXG5cclxuLm1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuOCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjQpO1xyXG4gICAgLy8gJjo6YWZ0ZXIge1xyXG4gICAgLy8gICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vICAgICB0b3A6IDA7XHJcbiAgICAvLyAgICAgbGVmdDogMDtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgLy8gfVxyXG4gICAgQGluY2x1ZGUgX3RhYmxldCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTNweCByZ2IoMjQyIDI0MiAyNDIgLyA4MCUpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAmLWxvZ28ge1xyXG4gICAgICAgIG1heC13aWR0aDogMTkwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJi1uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICBAaW5jbHVkZSBfdGFibGV0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBfZGVza3RvcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsYWNrO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LW9yYW5nZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtY3RhIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LW9yYW5nZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS13aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTdweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDc2cHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYigwIDAgMCAvIDUwJSk7XHJcbiAgICAgICAgQGluY2x1ZGUgX3RhYmxldCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWhhbWJ1cmdlciB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkY29sb3ItcHJpbWFyeS1ibGFjaztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbG9yLXByaW1hcnktYmxhY2s7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgQGluY2x1ZGUgX3RhYmxldCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5LWJsYWNrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogOXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYub3BlbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LXdoaXRlO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcm93LWdhcDogMjBweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAubWVudXtcclxuICAgICAgICAgICAgJi1uYXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICByb3ctZ2FwOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaGFtYnVyZ2VyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2hlYWRlci5wbmcpIG5vLXJlcGVhdCA3NyUgY2VudGVyICNmMmYyZjI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBAaW5jbHVkZSBfdGFibGV0IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAxNDBweCA0MHB4IDA7XHJcbiAgICAgICAgQGluY2x1ZGUgX3NtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjAwcHggNDBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBfdGFibGV0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktYmxhY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBfdGFibGV0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBfZGVza3RvcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDY2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgX2xnIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1vcmFuZ2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBfdGFibGV0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBfZGVza3RvcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgX2xnIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhbGVuZGx5IHtcclxuICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1pbmxpbmUtd2lkZ2V0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMnB4O1xyXG4gICAgcmlnaHQ6IDQycHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgcmlnaHQ6IDMycHg7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciwgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaGVhZGVyLnBuZykgbm8tcmVwZWF0IDc3JSBjZW50ZXIgI2YyZjJmMjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIEBpbmNsdWRlIF90YWJsZXQge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDE0MHB4IDQwcHggMDtcclxuICAgICAgICBAaW5jbHVkZSBfc20ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMDBweCA0MHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIF90YWJsZXQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibGFjaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIF90YWJsZXQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIF9kZXNrdG9wIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBfbGcge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LW9yYW5nZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIF90YWJsZXQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIF9kZXNrdG9wIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBfbGcge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FsZW5kbHkge1xyXG4gICAgJi1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYuaGlkZGVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWlubGluZS13aWRnZXQge1xyXG4gICAgICAgIG1pbi13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIycHg7XHJcbiAgICByaWdodDogNDJweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgICAgICByaWdodDogMzJweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyLCAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICAgIHRvcDogNnB4O1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLnBvd2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsYWNrO1xyXG4gICAgcGFkZGluZzogMCAwIDMwcHg7XHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogNTBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIEBpbmNsdWRlIF9kZXNrdG9wIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBhc3BlY3QtcmF0aW86IDAuNjg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGJvdHRvbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWxpbmUge1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICYtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LW9yYW5nZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDEwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnktZ3JleTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm91cnNlcnZpY2VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LXdoaXRlO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMCAxMDBweCAwO1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsYWNrO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogMzBweDtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibGFjaztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWNrcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1vcmFuZ2U7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LXdoaXRlO1xyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgIH1cclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLW91ciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGdhcDogNDBweDtcclxuICAgICAgICBAaW5jbHVkZSBfdGFibGV0IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250ZW50IHsgXHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDMzJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgNDBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDE4cHg7XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbiwgYSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeS13aGl0ZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE3cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYtcHJpY2Uge1xyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXRhZyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5LWJsYWNrO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS13aGl0ZTtcclxuICAgICYtY29udGVudCB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LXdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtb3VyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNTBweCAwIDUwcHg7XHJcbiAgICAgICAgICAgIC5jb250YWN0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogODAlO1xyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWdyZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWN0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwLCBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS1ncmV5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQG1peGluIF94cyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIF9zbSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTY3cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIF90YWJsZXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBfZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIF9sZyB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBfeGwge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59IiwiJGNvbG9yLXByaW1hcnktd2hpdGU6ICNmMmYyZjI7XHJcbiRjb2xvci1wcmltYXJ5LWJsYWNrOiAjMjYyNjI2O1xyXG4kY29sb3ItcHJpbWFyeS1vcmFuZ2U6ICNGODY4MDg7XHJcbiRjb2xvci1zZWNvbmRhcnktZ3JleTogIzhjOGM4YztcclxuIl19 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agenda/agenda.component */ 170);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_8__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_8__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.getFirestore)())] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _agenda_agenda_component__WEBPACK_IMPORTED_MODULE_3__.AgendaComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_8__.FirebaseAppModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.FirestoreModule] }); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCmRuf4IhqDsd7xS7kksBCoLw8A-6UZ9nY",
        authDomain: "myfisio-calendar.firebaseapp.com",
        projectId: "myfisio-calendar",
        storageBucket: "myfisio-calendar.appspot.com",
        messagingSenderId: "407224977517",
        appId: "1:407224977517:web:c112e88a9c818d344f5764",
        measurementId: "G-2QXDNCCZGW"
    }
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
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
//# sourceMappingURL=main.js.map