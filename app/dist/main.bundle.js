webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-spinner> </app-spinner>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(toastr, vcr) {
        this.toastr = toastr;
        this.title = 'app';
        this.toastr.setRootViewContainerRef(vcr);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_option__ = __webpack_require__("../../../../../src/app/custom-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_shared_service__ = __webpack_require__("../../../../../src/app/service/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_service_login_service__ = __webpack_require__("../../../../../src/app/components/login/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_service_dashboard_service__ = __webpack_require__("../../../../../src/app/components/dashboard/service/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_manage_export_service_manage_service__ = __webpack_require__("../../../../../src/app/components/manage-export/service/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tables_service_table_service__ = __webpack_require__("../../../../../src/app/components/tables/service/table.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_column_service_column_service__ = __webpack_require__("../../../../../src/app/components/column/service/column.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_url_service_url_service__ = __webpack_require__("../../../../../src/app/components/url/service/url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_export_directory_service_directory_service__ = __webpack_require__("../../../../../src/app/components/export-directory/service/directory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_schedule_pdf_export_service_schedule_service__ = __webpack_require__("../../../../../src/app/components/schedule-pdf-export/service/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_layout_layout_component__ = __webpack_require__("../../../../../src/app/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_setting_layout_setting_layout_component__ = __webpack_require__("../../../../../src/app/components/setting-layout/setting-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_url_url_component__ = __webpack_require__("../../../../../src/app/components/url/url.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_data_filter_pipe__ = __webpack_require__("../../../../../src/app/service/data-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_authguard_service__ = __webpack_require__("../../../../../src/app/service/authguard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_tables_tables_component__ = __webpack_require__("../../../../../src/app/components/tables/tables.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_schedule_pdf_export_schedule_pdf_export_component__ = __webpack_require__("../../../../../src/app/components/schedule-pdf-export/schedule-pdf-export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_export_directory_export_directory_component__ = __webpack_require__("../../../../../src/app/components/export-directory/export-directory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_manage_export_manage_export_component__ = __webpack_require__("../../../../../src/app/components/manage-export/manage-export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_column_column_component__ = __webpack_require__("../../../../../src/app/components/column/column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_theme_theme_component__ = __webpack_require__("../../../../../src/app/components/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_logo_logo_component__ = __webpack_require__("../../../../../src/app/components/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_layout_layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_28__service_data_filter_pipe__["a" /* DataFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_30__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_21__components_setting_layout_setting_layout_component__["a" /* SettingLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_url_url_component__["a" /* UrlComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_tables_tables_component__["a" /* TablesComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_schedule_pdf_export_schedule_pdf_export_component__["a" /* SchedulePdfExportComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_export_directory_export_directory_component__["a" /* ExportDirectoryComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_manage_export_manage_export_component__["a" /* ManageExportComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_column_column_component__["a" /* ColumnComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_theme_theme_component__["a" /* ThemeComponent */],
            __WEBPACK_IMPORTED_MODULE_38__components_logo_logo_component__["a" /* LogoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_26_ng4_loading_spinner__["a" /* Ng4LoadingSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_27_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_31_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_39_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */]
                },
                {
                    path: 'admin',
                    component: __WEBPACK_IMPORTED_MODULE_20__components_layout_layout_component__["a" /* LayoutComponent */],
                    children: [
                        {
                            path: 'dashboard',
                            component: __WEBPACK_IMPORTED_MODULE_19__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
                        }
                    ]
                },
                {
                    path: 'settings',
                    component: __WEBPACK_IMPORTED_MODULE_21__components_setting_layout_setting_layout_component__["a" /* SettingLayoutComponent */],
                    children: [
                        {
                            path: 'url',
                            component: __WEBPACK_IMPORTED_MODULE_22__components_url_url_component__["a" /* UrlComponent */]
                        },
                        {
                            path: 'tables',
                            component: __WEBPACK_IMPORTED_MODULE_32__components_tables_tables_component__["a" /* TablesComponent */]
                        },
                        {
                            path: 'export-directory',
                            component: __WEBPACK_IMPORTED_MODULE_34__components_export_directory_export_directory_component__["a" /* ExportDirectoryComponent */]
                        },
                        {
                            path: 'schedule',
                            component: __WEBPACK_IMPORTED_MODULE_33__components_schedule_pdf_export_schedule_pdf_export_component__["a" /* SchedulePdfExportComponent */]
                        },
                        {
                            path: 'start-stop-export',
                            component: __WEBPACK_IMPORTED_MODULE_35__components_manage_export_manage_export_component__["a" /* ManageExportComponent */]
                        },
                        {
                            path: 'column',
                            component: __WEBPACK_IMPORTED_MODULE_36__components_column_column_component__["a" /* ColumnComponent */]
                        },
                        {
                            path: 'theme',
                            component: __WEBPACK_IMPORTED_MODULE_37__components_theme_theme_component__["a" /* ThemeComponent */]
                        },
                        {
                            path: 'logo',
                            component: __WEBPACK_IMPORTED_MODULE_38__components_logo_logo_component__["a" /* LogoComponent */]
                        }
                    ]
                }
            ]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_29__service_authguard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__service_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_9__components_login_service_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_10__components_dashboard_service_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_11__components_manage_export_service_manage_service__["a" /* ManageService */], __WEBPACK_IMPORTED_MODULE_14__components_url_service_url_service__["a" /* URLService */], __WEBPACK_IMPORTED_MODULE_15__components_export_directory_service_directory_service__["a" /* DirectoryService */], __WEBPACK_IMPORTED_MODULE_12__components_tables_service_table_service__["a" /* TableService */], __WEBPACK_IMPORTED_MODULE_16__components_schedule_pdf_export_service_schedule_service__["a" /* ScheduleService */], __WEBPACK_IMPORTED_MODULE_13__components_column_service_column_service__["a" /* ColumnService */], { provide: __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_7__custom_option__["a" /* CustomOption */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/column/column.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/column/column.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Export pdf name</h4>\r\n<hr>\r\n<div class=\"row\">\r\n<form #exportColumn=\"ngForm\" (ngSubmit)=\"submitColumn()\">\r\n  <div class=\"col-sm-12\">\r\n    <p>Set the column name by which you want to export pdf:</p>\r\n  </div>\r\n\r\n  <div class=\"col-sm-5\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">column</span>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"column\" name=\"column\" required placeholder=\"name\">\r\n    </div><br>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"input-group\">\r\n      <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!exportColumn.valid\">Submit</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"column\">\r\n  <div class=\"col-sm-8\">\r\n      <div class=\"well\">\r\n        <ul class=\"list-inline\">\r\n          <li> <strong>PDF will be exported by column  <span class=\"glyphicon glyphicon-arrow-right\"></span> </strong> </li>\r\n          <li>{{column}}</li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/column/column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_column_service__ = __webpack_require__("../../../../../src/app/components/column/service/column.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColumnComponent = (function () {
    function ColumnComponent(columnService, toastr) {
        this.columnService = columnService;
        this.toastr = toastr;
        this.column = 'name';
        this.colObj = { column: "" };
    }
    ColumnComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('column') && localStorage.getItem('column') != null) {
            this.column = localStorage.getItem('column');
            this.colObj.column = this.column;
            this.columnService.setColumn(this.colObj)
                .then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    ColumnComponent.prototype.submitColumn = function () {
        var _this = this;
        localStorage.setItem('column', this.column);
        this.colObj.column = this.column;
        this.columnService.setColumn(this.colObj)
            .then(function (res) {
            console.log(res);
            _this.toastr.success('Export column has been set successfully!', 'Success!');
        }, function (err) {
            console.log(err);
            _this.toastr.error('Export column not set!', 'Oops!');
        });
        console.log(this.column);
    };
    return ColumnComponent;
}());
ColumnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-column',
        template: __webpack_require__("../../../../../src/app/components/column/column.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/column/column.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_column_service__["a" /* ColumnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_column_service__["a" /* ColumnService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object])
], ColumnComponent);

var _a, _b;
//# sourceMappingURL=column.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/column/service/column.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ColumnService = (function () {
    function ColumnService(http) {
        this.http = http;
        console.log('data service connected');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    ColumnService.prototype.setColumn = function (colObj) {
        var localApiUrl = 'http://localhost:3000';
        var url = localApiUrl + "/api/set-column";
        return this.http.post(url, colObj, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    ColumnService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    // // below function can be used when deal with Observable
    ColumnService.prototype.handleErrorPromise = function (error) {
        console.log(error || error);
        //console.error(error.message || error);
        return Promise.reject(error || error.error);
    };
    return ColumnService;
}());
ColumnService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ColumnService);

var _a;
//# sourceMappingURL=column.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@media (min-width: 768px){\r\n.form-inline .form-control {\r\n    display: inline-block;\r\n    width: 125px;\r\n    vertical-align: middle;\r\n  }\r\n}*/\r\n\r\n.form-control{\r\n  border-radius: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n      <h4>Dashboard</h4>\r\n  </div>\r\n</div>\r\n<hr>\r\n<!--  -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\">select parameters</span>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.parameters\" (change)=\"removeSpace()\" name=\"parameters\"  placeholder=\"id, name, createdAt\" required>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <br>\r\n    <div class=\"form-inline\">\r\n\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">from</span>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.table\" name=\"table\"  placeholder=\"document1\" required>\r\n      </div>\r\n\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">where</span>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.field\" name=\"field\" placeholder=\"field\">\r\n      </div>\r\n\r\n      <div class=\"input-group\">\r\n        <select class=\"form-control\" [(ngModel)]=\"query.operator\" name=\"operator\">\r\n          <option value=\"=\">=</option>\r\n          <option value=\"!=\">!=</option>\r\n          <option value=\"<\"><</option>\r\n          <option value=\">\">></option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"query.value\" name=\"value\" placeholder=\"field value\">\r\n      </div>\r\n\r\n      <div class=\"input-group\">\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"submitForm()\" name=\"button\">Search</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<!--  -->\r\n\r\n<div class=\"row\">\r\n<div class=\"col-sm-12\">\r\n  <div class=\"form-inline\">\r\n   <div *ngFor=\"let opt of options; let i = index\">\r\n     <div class=\"query-container\">\r\n    <div class=\"input-group\">\r\n      <select class=\"form-control\" [(ngModel)]=\"options[i].logicalOperator\" name=\"logicalOperator\">\r\n          <option value=\"AND\">AND</option>\r\n          <option value=\"OR\">OR</option>\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"options[i].field\" name=\"field\" placeholder=\"Field\">\r\n    </div>\r\n\r\n    <div class=\"input-group\">\r\n      <select class=\"form-control\" [(ngModel)]=\"options[i].operator\" name=\"operator\">\r\n          <option value=\"=\">=</option>\r\n          <option value=\"!=\">!=</option>\r\n          <option value=\"<\"><</option>\r\n          <option value=\">\">></option>\r\n        </select>\r\n    </div>\r\n\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"options[i].value\" name=\"value\" placeholder=\"Field Value\">\r\n    </div>\r\n\r\n    <div class=\"input-group\">\r\n      <i class=\"glyphicon glyphicon-plus-sign\" role=\"button\" (click)=\"addQuery(i)\" *ngIf=\"iValue == i\" aria-hidden=\"true\" style=\"padding-left:14px;\"></i>\r\n    </div>\r\n    <div class=\"input-group\">\r\n      <i class=\"glyphicon glyphicon-minus-sign\" role=\"button\" (click)=\"removeQuery(i)\" *ngIf=\"iValue != i\" aria-hidden=\"true\" style=\"padding-left:10px;\"></i>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  </div>\r\n  <div class=\"set-rows\">\r\n    <p>Set startRow and maxRows: (0,10) </p>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">startRow</span>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"startRow\" name=\"startRow\" placeholder=\"0\">\r\n    </div>\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">maxRows</span>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"maxRows\" name=\"maxRows\" placeholder=\"10\">\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<hr>\r\n<!--  -->\r\n\r\n<div class=\"hide-table\" *ngIf=\"!tableToggle\">\r\n  <br><br>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\"></div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"alert alert-danger fade in alert-dismissable\">\r\n      <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" title=\"close\">×</a>\r\n      <strong>No Data Avalibale!</strong> Query not fired yet\r\n   </div>\r\n    <!-- <h4 class=\"alert alert-danger text-center\"></h4> -->\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"show-table\" *ngIf=\"tableToggle\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-2\">\r\n\r\n              <label class=\"label-control\">Table</label>\r\n              <input class=\"form-control input-sm\" [(ngModel)]=\"query.table\" placeholder=\"document1\" disabled/>\r\n\r\n          </div>\r\n            <div class=\"col-xs-4\">\r\n              <!-- <label class=\"label-control\">Filter by name</label>\r\n                        <input class=\"form-control input-sm\" [(ngModel)]=\"filterQuery\" placeholder=\"Search by name..\"/> -->\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n                <!-- <label class=\"label-control\">Rows on page</label>\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                    <option [ngValue]=\"5\">5</option>\r\n                    <option [ngValue]=\"10\">10</option>\r\n                    <option [ngValue]=\"15\">15</option>\r\n                </select> -->\r\n            </div>\r\n            <div class=\"col-xs-4\">\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                      <label class=\"label-control\">Filter by name</label>\r\n                      <input class=\"form-control input-sm\" [(ngModel)]=\"searchText\" placeholder=\"Search by name..\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row\">\r\n                      <label class=\"label-control\">Rows on page</label>\r\n                      <select class=\"form-control input-sm\" [(ngModel)]=\"rowsOnPage\">\r\n                          <option [ngValue]=\"5\">5</option>\r\n                          <option [ngValue]=\"10\">10</option>\r\n                          <option [ngValue]=\"15\">15</option>\r\n                      </select>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <!--  -->\r\n\r\n        <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th *ngFor=\"let key of objKeys\">{{key}}</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let n of newArray | filter : searchText | paginate: { itemsPerPage: rowsOnPage, currentPage: page }\">\r\n                  <td *ngFor=\"let key of objKeys\">{{n[key]}}</td>\r\n                  <td><button type=\"button\" (click)=\"exportPdf(n)\" class=\"btn btn-xs\" name=\"button\"><i class=\"glyphicon glyphicon-print\" area-hidden=\"true\"></i> Export</button></td>\r\n                </tr>\r\n                <!-- <tr *ngFor=\"let item of mf.data\">\r\n                    <td>{{item.name}}</td>\r\n                    <td>{{item.email}}</td>\r\n                    <td class=\"text-right\">{{item.age}}</td>\r\n                    <td>{{item.city | uppercase}}</td>\r\n                    <td>\r\n                        <button (click)=\"exportPdf(item)\" class=\"btn btn-danger\">Export</button>\r\n                    </td>\r\n                </tr> -->\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <br>\r\n          <div class=\"text-center\">\r\n            <pagination-controls (pageChange)=\"page = $event\"></pagination-controls>\r\n          </div>\r\n        </div>\r\n        </div>\r\n     </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__ = __webpack_require__("../../../../../src/app/components/dashboard/service/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(http, dashboardService, router, spinnerService, toastr) {
        this.http = http;
        this.dashboardService = dashboardService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.arr2 = [];
        this.newArray = [];
        this.query = { parameters: "", table: "", field: "", operator: "=", value: "" };
        this.options = [{ logicalOperator: "AND", field: "", operator: "=", value: "" }];
        this.whereCondition = '';
        this.firstWhere = '';
        this.iValue = 0;
        this.startRow = 0;
        this.maxRows = 10;
        this.rowsOnPage = 5;
        this.buildQuery = '';
        this.tableToggle = false;
        this.myToggle = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('queryparams') != '' && localStorage.getItem('queryparams') != null) {
            this.query.parameters = localStorage.getItem('queryparams');
            console.log(this.query.parameters);
        }
        else {
            localStorage.setItem('tableToggle', '');
        }
        if (JSON.parse(localStorage.getItem('options')) != '' && JSON.parse(localStorage.getItem('options')) != null) {
            this.options = JSON.parse(localStorage.getItem('options'));
        }
        if (JSON.parse(localStorage.getItem('startRow')) != '' && JSON.parse(localStorage.getItem('startRow')) != null) {
            this.startRow = JSON.parse(localStorage.getItem('startRow'));
        }
        if (JSON.parse(localStorage.getItem('maxRows')) != '' && JSON.parse(localStorage.getItem('maxRows')) != null) {
            this.maxRows = JSON.parse(localStorage.getItem('maxRows'));
        }
        if (localStorage.getItem('table') != '' && localStorage.getItem('table') != null) {
            this.query.table = localStorage.getItem('table');
        }
        if (localStorage.getItem('field') != '' && localStorage.getItem('field') != null) {
            this.query.field = localStorage.getItem('field');
        }
        if (localStorage.getItem('operator') != '' && localStorage.getItem('operator') != null) {
            this.query.operator = localStorage.getItem('operator');
        }
        if (localStorage.getItem('value') != '' && localStorage.getItem('value') != null) {
            this.query.value = localStorage.getItem('value');
        }
        if (localStorage.getItem('ivalue') != '' && localStorage.getItem('ivalue') != null) {
            this.iValue = JSON.parse(localStorage.getItem('ivalue'));
        }
        if (localStorage.getItem('tableToggle') != '' && localStorage.getItem('tableToggle') != null) {
            this.tableToggle = JSON.parse(localStorage.getItem('tableToggle'));
        }
        if (localStorage.getItem('queryparams') != '' && localStorage.getItem('queryparams') != null && localStorage.getItem('table') != '' && localStorage.getItem('table') != null) {
            this.getData();
        }
    };
    DashboardComponent.prototype.submitForm = function () {
        var _this = this;
        //console.log("startRow: "+this.startRow+" maxRows: "+this.maxRows);
        if (this.query.parameters != '') {
            var str = this.query.parameters.split(",");
            console.log(str);
            for (var i = 0; i < str.length; i++) {
                if (str[i] == 'id') {
                    this.myToggle = true;
                    break;
                }
            }
        }
        if (this.myToggle == true) {
            this.spinnerService.show();
            this.newArray = [];
            this.whereCondition = '';
            if (this.query.field != '' && this.query.operator != '' && this.query.value != '') {
                this.firstWhere = this.query.field + " " + this.query.operator + " " + this.query.value;
                this.buildQuery = "SELECT " + this.query.parameters + " FROM " + this.query.table + " WHERE " + this.firstWhere;
            }
            else {
                this.buildQuery = "SELECT " + this.query.parameters + " FROM " + this.query.table;
            }
            this.options.forEach(function (opn) {
                if (opn.field != '' && opn.value != '' && opn.operator != '' && opn.logicalOperator != '') {
                    _this.whereCondition = _this.whereCondition + " " + opn.logicalOperator + " " + opn.field + " " + opn.operator + " " + opn.value;
                }
            });
            //console.log(this.whereCondition);
            this.buildQuery = this.buildQuery + " " + this.whereCondition;
            //console.log("query");
            //console.log(this.buildQuery);
            localStorage.setItem('field', this.query.field);
            localStorage.setItem('operator', this.query.operator);
            localStorage.setItem('value', this.query.value);
            localStorage.setItem('options', JSON.stringify(this.options));
            localStorage.setItem('firstWhere', this.firstWhere);
            localStorage.setItem('queryparams', this.query.parameters);
            localStorage.setItem('table', this.query.table);
            localStorage.setItem('startRow', JSON.stringify(this.startRow));
            localStorage.setItem('maxRows', JSON.stringify(this.maxRows));
            localStorage.setItem('whereOptions', this.whereCondition);
            localStorage.setItem('ivalue', JSON.stringify(this.iValue));
            this.getData();
        }
        else {
            this.toastr.error('id parameter is mandatory!', 'Oops!');
        }
    };
    DashboardComponent.prototype.addQuery = function (i) {
        var i = i + 1;
        this.iValue = i;
        var op = { logicalOperator: "AND", field: "", operator: "=", value: "" };
        this.options.push(op);
    };
    DashboardComponent.prototype.removeQuery = function (i) {
        this.iValue = this.iValue - 1;
        this.options.splice(i, 1);
    };
    DashboardComponent.prototype.getData = function () {
        var _this = this;
        this.dashboardService.getData()
            .subscribe(function (res) {
            //console.log(res.json());
            _this.spinnerService.hide();
            _this.tableToggle = true;
            localStorage.setItem('tableToggle', JSON.stringify(_this.tableToggle));
            var arrObj = [];
            var arryObj2 = [];
            arrObj = res.json();
            _this.objKeys = _this.query.parameters.split(','); // split the queryparams and make them headings
            arrObj.forEach(function (newJobItem) {
                //console.log(newJobItem);
                var i = 0;
                var obj = {};
                _this.objKeys.forEach(function (item) {
                    obj[item] = newJobItem[i];
                    i++;
                });
                _this.newArray.push(obj);
                //console.log(this.newArray);
            });
            //console.log(this.newArray);
        }, function (err) {
            _this.spinnerService.hide();
            console.log(err.json());
            if (err.json().status == 'login' && err.json().message == 'Session expired or invalid login credentials') {
                _this.toastr.error(err.json().message + '!', 'Oops!');
                _this.router.navigate(['/']);
            }
            else {
                _this.toastr.error(err.json().message + '!', 'Oops!');
            }
        });
    };
    DashboardComponent.prototype.exportPdf = function (item) {
        var _this = this;
        if ('name' in item) {
            item.name = item.name;
        }
        else {
            item.name = item.id;
        }
        console.log(item);
        console.log(JSON.parse(JSON.stringify(item)));
        this.spinnerService.show();
        this.dashboardService.getPdf(item).subscribe(function (res) {
            //console.log(res);
            _this.spinnerService.hide();
        });
    };
    DashboardComponent.prototype.removeSpace = function () {
        //console.log(this.query.parameters);
        if (this.query.parameters.match(/\s/g)) {
            this.query.parameters = this.query.parameters.replace(/\s/g, '');
        }
        //console.log(this.query.parameters);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/service/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shared_service__ = __webpack_require__("../../../../../src/app/service/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardService = (function () {
    // headers: Headers;
    // options: RequestOptions;
    function DashboardService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        console.log('data service connected');
    }
    DashboardService.prototype.getData = function () {
        //console.log("yoyoy...........userbelow------");
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        var queryParams = localStorage.getItem('queryparams');
        var table = localStorage.getItem('table');
        var whereConditions = localStorage.getItem('whereOptions');
        var firstWhere = localStorage.getItem('firstWhere');
        var startRow = JSON.parse(localStorage.getItem('startRow'));
        var maxRows = JSON.parse(localStorage.getItem('maxRows'));
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var sessionId = currentUser.sessionId;
        var query = '';
        var finalWhere = '';
        if (firstWhere && firstWhere != null) {
            finalWhere = firstWhere;
            query = "SELECT " + queryParams + " FROM " + table + " WHERE " + finalWhere;
        }
        if (firstWhere && firstWhere != null && whereConditions && whereConditions != null) {
            finalWhere = '';
            finalWhere = firstWhere + ' ' + whereConditions;
            query = '';
            query = "SELECT " + queryParams + " FROM " + table + " WHERE " + finalWhere;
        }
        else {
            query = "SELECT " + queryParams + " FROM " + table;
        }
        //console.log(" query: "+query);
        if (localStorage.getItem('url') && localStorage.getItem('url') != null) {
            var apiurl = localStorage.getItem('url');
        }
        else {
            var apiurl = 'https://www.cloudapps.services';
        }
        var url = apiurl + "/rest/api/selectQuery?sessionId=" + sessionId + "&startRow=" + startRow + "&maxRows=" + maxRows + "&query=" + query + "&output=json";
        return this.http.get(url).map(function (response) { return response; });
    };
    DashboardService.prototype.getPdf = function (item) {
        var currentUser1 = JSON.parse(localStorage.getItem('currentUser'));
        var sessionId1 = currentUser1.sessionId;
        var table = localStorage.getItem('table');
        if (localStorage.getItem('url') && localStorage.getItem('url') != null) {
            var apiurl = localStorage.getItem('url');
        }
        else {
            var apiurl = 'https://www.cloudapps.services';
        }
        var url = apiurl + "/rest/api/getBinaryData?sessionId=" + sessionId1 + "&id=" + item.id + "&fieldName=file&objName=" + table;
        return this.http.get(url, {
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Blob
        }).map(function (response) {
            var blob = new Blob([response.blob()], { type: 'application/pdf' });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_file_saver__["saveAs"])(blob, item.name + '.pdf');
            // const blobUrl = URL.createObjectURL(blob);
            // const iframe = document.createElement('iframe');
            // iframe.style.display = 'none';
            // iframe.src = blobUrl;
            // document.body.appendChild(iframe);
            // iframe.contentWindow.print();
        });
    };
    DashboardService.prototype.extractData = function (res) {
        console.log(res);
        var body = res;
        return body || {};
    };
    // // below function can be used when deal with Observable
    DashboardService.prototype.handleErrorPromise = function (error) {
        console.log(error.error || error.error);
        //console.error(error.message || error);
        return Promise.reject(error.error || error.error);
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_shared_service__["a" /* SharedService */]) === "function" && _b || Object])
], DashboardService);

var _a, _b;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/export-directory/export-directory.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-bs-file{\r\n    position:relative;\r\n}\r\n.btn-bs-file input[type=\"file\"]{\r\n    position: absolute;\r\n    top: -9999999;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n    width:0;\r\n    height:0;\r\n    outline: none;\r\n    cursor: inherit;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/export-directory/export-directory.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Export Directory</h4>\r\n<hr>\r\n<div class=\"row\">\r\n<form #exportDirectory=\"ngForm\" (ngSubmit)=\"submitDirectory()\">\r\n  <div class=\"col-sm-12\">\r\n    <p>Set the pdf export directory:</p>\r\n  </div>\r\n\r\n  <div class=\"col-sm-5\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">Directory</span>\r\n      <input type=\"text\" class=\"form-control\" id=\"directory\" [(ngModel)]=\"directory\" name=\"directory\" required placeholder=\"cloud-export\">\r\n    </div><br>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"input-group\">\r\n      <button type=\"submit\" class=\"btn btn-danger\" id=\"exportsubmit\" [disabled]=\"!exportDirectory.valid\">Submit</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"directory\">\r\n  <div class=\"col-sm-8\">\r\n      <div class=\"well\">\r\n        <ul class=\"list-inline\">\r\n          <li> <strong>Export Directory  <span class=\"glyphicon glyphicon-arrow-right\"></span> </strong> </li>\r\n          <li>{{directory}}</li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/export-directory/export-directory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_directory_service__ = __webpack_require__("../../../../../src/app/components/export-directory/service/directory.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportDirectoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExportDirectoryComponent = (function () {
    function ExportDirectoryComponent(toastr, directoryService) {
        this.toastr = toastr;
        this.directoryService = directoryService;
        this.directory = 'export';
        this.dirObj = { directory: "" };
    }
    ExportDirectoryComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('directory') && localStorage.getItem('directory') != null) {
            this.directory = localStorage.getItem('directory');
            this.dirObj.directory = this.directory;
            this.directoryService.setDirectory(this.dirObj)
                .then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    ExportDirectoryComponent.prototype.submitDirectory = function () {
        var _this = this;
        localStorage.setItem('directory', this.directory);
        this.dirObj.directory = this.directory;
        this.directoryService.setDirectory(this.dirObj)
            .then(function (res) {
            console.log(res);
            _this.toastr.success('Export directory has been set successfully!', 'Success!');
        }, function (err) {
            console.log(err);
            _this.toastr.error('Export directory not set!', 'Oops!');
        });
        console.log(this.directory);
    };
    return ExportDirectoryComponent;
}());
ExportDirectoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-export-directory',
        template: __webpack_require__("../../../../../src/app/components/export-directory/export-directory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/export-directory/export-directory.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_directory_service__["a" /* DirectoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_directory_service__["a" /* DirectoryService */]) === "function" && _b || Object])
], ExportDirectoryComponent);

var _a, _b;
//# sourceMappingURL=export-directory.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/export-directory/service/directory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DirectoryService = (function () {
    function DirectoryService(http) {
        this.http = http;
        console.log('data service connected');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    DirectoryService.prototype.setDirectory = function (dirObj) {
        var localApiUrl = 'http://localhost:3000';
        var url = localApiUrl + "/api/set-directory";
        return this.http.post(url, dirObj, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    DirectoryService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    // // below function can be used when deal with Observable
    DirectoryService.prototype.handleErrorPromise = function (error) {
        console.log(error || error);
        //console.error(error.message || error);
        return Promise.reject(error || error.error);
    };
    return DirectoryService;
}());
DirectoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DirectoryService);

var _a;
//# sourceMappingURL=directory.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*footer */\r\n.footer-box ul {\r\n    padding: 0px;\r\n    list-style-type: none;\r\n}\r\n.footer-box ul li {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.social-icon li {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.footer-box ul li a {\r\n    color: #777;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n}\r\n.social-icon li a i {\r\n    font-size: 22px;\r\n}\r\n\r\n.footer p{\r\n    margin: 5px 0 0;\r\n}\r\n\r\n.footer{\r\n    margin-top:10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer style=\"background-color:#151829;\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <p style=\"color:#777;font-size:13px;margin:10px;\" class=\"text-center\">Design and developed by Zehntech Technologies,Indore(MP),India</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand {\r\n    float: left;\r\n    height: 50px;\r\n    padding: 6px 15px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n}\r\n\r\n.navbar-inverse {\r\n    background-color: #337ab7;\r\n    border-color: #337ab7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style=\"border-radius:0px;\" [ngStyle]=\"getMyStyles()\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <h2 *ngIf=\"!logoToggle\" style=\"color:#fff;margin-top:7px;\">{{logoName}}</h2>\r\n      <a class=\"navbar-brand\"  *ngIf=\"logoToggle\" routerLink=\"/admin/dashboard\"> <img [src]=\"getImagePath()\" style=\"width:200px;height:38px;\" class=\"img-responsive center-block\"/></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"\"><a routerLink=\"/admin/dashboard\" style=\"color:#fff;\">Dashboard</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li>\r\n        <div class=\"dropdown\" style=\"margin-top:8px;\">\r\n          <a class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" style=\"border:0px;color:#fff;\" [ngStyle]=\"getMyStyles()\"><span class=\"badge\">{{badgeChar}}</span> {{username}}\r\n          <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a role=\"button\" routerLink=\"/settings/url\">Settings</a></li>\r\n            <li><a role=\"button\" routerLink=\"\">Logout</a></li>\r\n          </ul>\r\n      </div>\r\n      </li>\r\n      <!-- <li *ngIf=\"toggleLog != true\"><a routerLink=\"/\" style=\"color:#fff;\"><span class=\"glyphicon glyphicon-log-in\"></span> {{toggleLog}}Login</a></li> -->\r\n    </ul>\r\n  </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shared_service__ = __webpack_require__("../../../../../src/app/service/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(sharedService, router) {
        this.sharedService = sharedService;
        this.router = router;
        this.username = 'Admin';
        this.badgeChar = 'A';
        this.colorFlag = false;
        this.imagePath = '';
        this.logoName = 'Brixxs';
        this.logoToggle = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('imagePath') != '' && localStorage.getItem('imagePath') != null) {
            this.imagePath = 'http://localhost:3000/api/fetch-logo?path=' + localStorage.getItem('imagePath');
            this.logoToggle = true;
        }
        else {
            this.logoToggle = false;
        }
        //console.log(localStorage.getItem('currentUser'));
        if (localStorage.getItem('username') && localStorage.getItem('username') != null) {
            this.username = localStorage.getItem('username');
            this.badgeChar = this.username.charAt(0);
        }
    };
    HeaderComponent.prototype.logout = function () {
        //localStorage.setItem('currentUser',undefined);
        this.router.navigate(['']);
    };
    HeaderComponent.prototype.getImagePath = function () {
        if (localStorage.getItem('imagePath') != '' && localStorage.getItem('imagePath') != null) {
            this.imagePath = 'http://localhost:3000/api/fetch-logo?path=' + localStorage.getItem('imagePath');
            this.logoToggle = true;
            return this.imagePath;
        }
        else {
            this.logoToggle = false;
        }
    };
    HeaderComponent.prototype.getMyStyles = function () {
        if (localStorage.getItem('themecolor') != '' && localStorage.getItem('themecolor') != null) {
            var myStyles = {
                'background-color': '' + this.colorFlag ? JSON.parse(localStorage.getItem('themecolor')).colorCode + '' : '#337ab7',
                'border-color': '' + this.colorFlag ? JSON.parse(localStorage.getItem('themecolor')).colorCode + '' : '#337ab7'
                // 'font-size.em': this.isSmall ? this.small/5 : this.big/5,
                // 'background-image': !this.isBackgroundRed ? 'url(\'images/red.gif\')' : 'url(\'images/green.gif\')'
            };
            return myStyles;
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n  <div class=\"container-fluid\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/components/layout/layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/layout/layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert-danger {\r\n     color: #a94442;\r\n     background-color: #f2dede;\r\n     border-color: #fff;\r\n}\r\n\r\n.alert {\r\n    padding: 0px;\r\n    margin-bottom: 20px;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n}\r\n\r\n.container-fluid{\r\n  background-color: #337ab7;\r\n  height: 100vh;\r\n}\r\n\r\nlabel{\r\n  color:#fff;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" [ngStyle]=\"getMyStyles()\">\r\n<div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-4\"></div>\r\n            <div class=\"col-sm-4\">\r\n              <br><br>\r\n              <div class=\"text-center\">\r\n                <h2 *ngIf=\"!logoToggle\" style=\"color:#fff;\">{{logoName}}</h2>\r\n                <img [src]=\"getImagePath()\" style=\"width:300px;\"  *ngIf=\"logoToggle\" class=\"img-responsive center-block\"/>\r\n              </div>\r\n                <br><br>\r\n                <form #user=\"ngForm\" (ngSubmit)=\"loginUser(user)\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"showAuthError\" style=\"font-size:13px;\">{{errorMsg}}</div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"email\">Username:</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" #myusername=\"ngModel\" required placeholder=\"Username\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"myusername.errors?.required && myusername.touched\">Username is required</div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"pwd\">Password:</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"user.password\"  name=\"password\" #mypassword=\"ngModel\" required placeholder=\"Password\">\r\n                    <div class=\"alert alert-danger\" *ngIf=\"mypassword.errors?.required && mypassword.touched\">Password is required</div>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"checkbox\">\r\n                    <label><input type=\"checkbox\"> Remember me</label>\r\n                  </div> -->\r\n                  <button type=\"submit\" id=\"submitButton\" class=\"btn btn-danger\" [disabled]=\"!user.valid\">Submit</button>\r\n              </form>\r\n              </div>\r\n            <div class=\"col-sm-4\"></div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_login_service__ = __webpack_require__("../../../../../src/app/components/login/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_shared_service__ = __webpack_require__("../../../../../src/app/service/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.esm.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(loginService, router, toastr, sharedService, spinnerService) {
        this.loginService = loginService;
        this.router = router;
        this.toastr = toastr;
        this.sharedService = sharedService;
        this.spinnerService = spinnerService;
        this.showAuthError = false;
        this.errorMsg = '';
        this.loading = false;
        this.obj = { username: "", password: "", sessionId: "" };
        this.user = { username: "", password: "" };
        this.colorFlag = false;
        this.imagePath = '';
        this.logoName = 'Brixxs';
        this.logoToggle = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('username') != null && localStorage.getItem('password') != null) {
            this.user.username = localStorage.getItem('username');
            this.user.password = localStorage.getItem('password');
        }
        if (localStorage.getItem('imagePath') != '' && localStorage.getItem('imagePath') != null) {
            this.imagePath = 'http://localhost:3000/api/fetch-logo?path=' + localStorage.getItem('imagePath');
            this.logoToggle = true;
        }
        else {
            this.logoToggle = false;
        }
    };
    LoginComponent.prototype.loginUser = function (formData) {
        var _this = this;
        this.spinnerService.show();
        //console.log(formData.value);
        localStorage.setItem('username', formData.value.username);
        localStorage.setItem('password', formData.value.password);
        this.loginService.login(formData.value.username, formData.value.password).then(function (user1) {
            _this.obj.username = formData.value.username;
            _this.obj.password = formData.value.password;
            console.log(user1.sessionId);
            _this.obj.sessionId = user1.sessionId;
            _this.loginService.postLoginData(_this.obj).then(function (res) {
                console.log(res.json());
            }).catch(function (err) {
                console.log(err);
            });
            formData.reset();
            _this.spinnerService.hide();
            //console.log("toggle value : "+this.sharedService.toggleUser);
            _this.router.navigate(['/admin/dashboard']);
        }).catch(function (error) {
            console.log(error);
            _this.spinnerService.hide();
            _this.showAuthError = true;
            _this.errorMsg = 'Incorrect username or password';
            //this.router.navigate(['/']);
        });
    };
    LoginComponent.prototype.getImagePath = function () {
        if (localStorage.getItem('imagePath') != '' && localStorage.getItem('imagePath') != null) {
            this.imagePath = 'http://localhost:3000/api/fetch-logo?path=' + localStorage.getItem('imagePath');
            this.logoToggle = true;
            return this.imagePath;
        }
        else {
            this.logoToggle = false;
        }
    };
    LoginComponent.prototype.getMyStyles = function () {
        if (localStorage.getItem('themecolor') != '' && localStorage.getItem('themecolor') != null) {
            var myStyles = {
                'background-color': '' + this.colorFlag ? JSON.parse(localStorage.getItem('themecolor')).colorCode + '' : '#337ab7'
                // 'font-size.em': this.isSmall ? this.small/5 : this.big/5,
                // 'background-image': !this.isBackgroundRed ? 'url(\'images/red.gif\')' : 'url(\'images/green.gif\')'
            };
            return myStyles;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_shared_service__ = __webpack_require__("../../../../../src/app/service/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginService = (function () {
    function LoginService(httpC, sharedService, http) {
        this.httpC = httpC;
        this.sharedService = sharedService;
        this.http = http;
        console.log('data service connected');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    LoginService.prototype.login = function (username, password) {
        var mainHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpHeaders */]()
            .set('cache-control', 'no-cache')
            .set('content-type', 'application/json')
            .set('loginName', username)
            .set('password', password)
            .set("postman-token", "c96fb083-e91d-e19b-a7fe-a3830b877d5e")
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
        if (localStorage.getItem('url') && localStorage.getItem('url') != null) {
            var apiurl = localStorage.getItem('url');
        }
        else {
            var apiurl = 'https://www.cloudapps.services';
        }
        return this.httpC.post(apiurl + '/rest/api/login?output=json', '', { headers: mainHeaders }).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    LoginService.prototype.postLoginData = function (obj) {
        var localApiUrl = 'http://localhost:3000';
        var url = localApiUrl + "/api/set-user-data";
        return this.http.post(url, obj, this.options).toPromise()
            .then(this.extractData2)
            .catch(this.handleErrorPromise);
    };
    LoginService.prototype.extractData = function (res) {
        console.log(res);
        localStorage.setItem('currentUser', JSON.stringify(res));
        var body = res;
        return body || {};
    };
    LoginService.prototype.extractData2 = function (res) {
        console.log(res);
        var body = res;
        return body || {};
    };
    // // below function can be used when deal with Observable
    LoginService.prototype.handleErrorPromise = function (error) {
        //localStorage.setItem('currentUser','undefined');
        console.log(error.error || error.error);
        //console.error(error.message || error);
        return Promise.reject(error.error || error.error);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _c || Object])
], LoginService);

var _a, _b, _c;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-bs-file{\r\n    position:relative;\r\n}\r\n.btn-bs-file input[type=\"file\"]{\r\n    position: absolute;\r\n    top: -9999999;\r\n    filter: alpha(opacity=0);\r\n    opacity: 0;\r\n    width:0;\r\n    height:0;\r\n    outline: none;\r\n    cursor: inherit;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Logo </h4>\n<hr>\n\n<div class=\"row\" *ngIf=\"!colorToggle\">\n  <form #logoForm=\"ngForm\" (ngSubmit)=\"submitLogo()\">\n    <div class=\"col-sm-8\">\n      <!-- COMPONENT START -->\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group input-file\" name=\"logo\">\n\t\t\t<span class=\"input-group-btn\">\n        <label class=\"btn-bs-file btn  btn-success\">\n                Browse\n                <input #fileInput type=\"file\"  accept=\"image/*\" (change)=\"handleInputChange($event)\" ng2FileSelect [uploader]=\"imageUploader\" required/>\n            </label>\n    \t\t</span>\n    \t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"inputLogo\" name=\"inputLogo\" placeholder='Choose a logo...' />\n    \t\t<span class=\"input-group-btn\">\n       \t\t\t <button type=\"submit\" class=\"btn btn-danger btn-reset\">Submit</button>\n    \t\t</span>\n\t\t</div>\n\t</div>\n\t<!-- COMPONENT END -->\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var URL = 'http://localhost:3000/api/upload/logo';
var LogoComponent = (function () {
    function LogoComponent(toastr, router) {
        var _this = this;
        this.toastr = toastr;
        this.router = router;
        this.logo = '';
        this.inputLogo = '';
        // image variables
        this.allowedImageType = ['image/png', 'image/gif', 'image/jpeg'];
        this.maxImageSize = 8 * 1024 * 1024; // 8 MB
        this.imageUploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: URL,
            itemAlias: 'photo',
            allowedMimeType: this.allowedImageType,
            maxFileSize: this.maxImageSize,
            autoUpload: false,
            removeAfterUpload: true
        });
        // image uploader functions
        this.imageUploader.onWhenAddingFileFailed = function (item, filter, options) { return _this.onUploadImageFailed(item, filter, options); };
        this.imageUploader.onAfterAddingFile = function (fileItem) {
            fileItem.withCredentials = false;
            console.log(fileItem.file.type);
        };
        this.imageUploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded status:", item, status, response);
            _this.fileInput.nativeElement.value = '';
            _this.inputLogo = '';
            //console.log(item);
            // console.log(status);
            // console.log((response));
            if (response) {
                localStorage.setItem('imagePath', JSON.parse(response).data);
                _this.toastr.success('Logo has been changed successfully!', 'Success!');
            }
            else {
                _this.toastr.error('Logo not updated!', 'Oops!');
            }
        };
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent.prototype.onUploadImageFailed = function (item, filter, options) {
        //console.log(item.type);
        switch (filter.name) {
            case 'fileSize':
                this.errorMessage = 'Maximum upload size 8 MB allowed';
                console.log(this.errorMessage);
                break;
            case 'mimeType':
                var allowedTypes = this.allowedImageType.join();
                this.errorMessage = 'Type ' + item.type + ' is not allowed. Allowed types:' + allowedTypes;
                console.log(this.errorMessage);
                break;
            default:
                this.errorMessage = 'Unknown error filter is ' + filter.name;
                console.log(this.errorMessage);
        }
    };
    LogoComponent.prototype.uploadImage = function () {
        this.imageUploader.uploadAll();
    };
    LogoComponent.prototype.handleInputChange = function (event) {
        var image = event.target.files[0];
        console.log(image);
        this.inputLogo = image.name;
        var pattern = /image-*/;
        //var reader = new FileReader();
        if (!image.type.match(pattern)) {
            console.error('File is not an image');
            //of course you can show an alert message here
        }
    };
    LogoComponent.prototype.submitLogo = function () {
        console.log("-----");
        if (this.inputLogo == '') {
            this.toastr.error('Please select the logo!', 'Oops!');
            return;
        }
        this.uploadImage();
        //this.convertImageToBase64(this.logo);
    };
    return LogoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], LogoComponent.prototype, "fileInput", void 0);
LogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logo',
        template: __webpack_require__("../../../../../src/app/components/logo/logo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/logo/logo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoComponent);

var _a, _b;
//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manage-export/manage-export.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manage-export/manage-export.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Start/Stop Service</h4>\r\n<hr>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n      <ul class=\"list-inline\">\r\n        <li><button class=\"btn btn-primary\" [disabled]=\"startDisabledToggle\" (click)=\"startService()\">Start</button> </li>\r\n        <li><button class=\"btn btn-danger\" [disabled]=\"stopDisabledToggle\" (click)=\"stopService()\">Stop</button> </li>\r\n      </ul>\r\n  </div>\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"well\" *ngIf=\"toggle\">\r\n      <p *ngIf=\"startToggle\"><span style=\"color:#3c763d\">Started!</span> Auto export service has been started successfully!</p>\r\n      <p *ngIf=\"stopToggle\"><span style=\"color:#a94442\">Stopped!</span> Auto export service has been stopped successfully!</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/manage-export/manage-export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_manage_service__ = __webpack_require__("../../../../../src/app/components/manage-export/service/manage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageExportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageExportComponent = (function () {
    function ManageExportComponent(manageService, toastr) {
        this.manageService = manageService;
        this.toastr = toastr;
        this.startToggle = false;
        this.stopToggle = false;
        this.toggle = false;
        this.startDisabledToggle = false;
        this.stopDisabledToggle = false;
    }
    ManageExportComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('startDisabledToggle') && localStorage.getItem('startDisabledToggle') != null) {
            this.startDisabledToggle = JSON.parse(localStorage.getItem('startDisabledToggle'));
        }
        if (localStorage.getItem('stopDisabledToggle') && localStorage.getItem('stopDisabledToggle') != null) {
            this.stopDisabledToggle = JSON.parse(localStorage.getItem('stopDisabledToggle'));
        }
    };
    ManageExportComponent.prototype.startService = function () {
        var _this = this;
        //console.log("clicked");
        this.manageService.startService()
            .subscribe(function (res) {
            console.log(res.json());
            _this.stopToggle = false;
            _this.startToggle = true;
            _this.toggle = true;
            _this.startDisabledToggle = true;
            _this.stopDisabledToggle = false;
            localStorage.setItem('startDisabledToggle', JSON.stringify(_this.startDisabledToggle));
            localStorage.setItem('stopDisabledToggle', JSON.stringify(_this.stopDisabledToggle));
        }, function (err) {
            console.log(err.json());
            if (err.json().statusCode === 402) {
                _this.toastr.error(err.json().data + '!', 'Oops!');
            }
            else {
                _this.toastr.error('Something went wrong, please try again later!', 'Oops!');
            }
        });
    };
    ManageExportComponent.prototype.stopService = function () {
        var _this = this;
        this.manageService.stopService()
            .subscribe(function (res) {
            console.log(res.json());
            _this.stopToggle = true;
            _this.startToggle = false;
            _this.toggle = true;
            _this.startDisabledToggle = false;
            _this.stopDisabledToggle = true;
            localStorage.setItem('startDisabledToggle', JSON.stringify(_this.startDisabledToggle));
            localStorage.setItem('stopDisabledToggle', JSON.stringify(_this.stopDisabledToggle));
        }, function (err) {
            console.log(err);
            _this.stopToggle = true;
            _this.startToggle = false;
            _this.toggle = true;
            _this.startDisabledToggle = false;
            _this.stopDisabledToggle = true;
            localStorage.setItem('startDisabledToggle', JSON.stringify(_this.startDisabledToggle));
            localStorage.setItem('stopDisabledToggle', JSON.stringify(_this.stopDisabledToggle));
        });
    };
    return ManageExportComponent;
}());
ManageExportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-export',
        template: __webpack_require__("../../../../../src/app/components/manage-export/manage-export.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manage-export/manage-export.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_manage_service__["a" /* ManageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_manage_service__["a" /* ManageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object])
], ManageExportComponent);

var _a, _b;
//# sourceMappingURL=manage-export.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manage-export/service/manage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageService = (function () {
    // headers: Headers;
    // options: RequestOptions;
    function ManageService(http) {
        this.http = http;
        console.log('data service connected');
    }
    ManageService.prototype.startService = function () {
        var localApiUrl = 'http://localhost:3000';
        var url = localApiUrl + "/api/service/start";
        return this.http.get(url).map(function (response) { return response; });
    };
    ManageService.prototype.stopService = function () {
        var localApiUrl = 'http://localhost:3000';
        var url = localApiUrl + "/api/service/stop";
        return this.http.get(url).map(function (response) { return response; });
    };
    ManageService.prototype.getPdf = function (item) {
    };
    ManageService.prototype.extractData = function (res) {
        console.log(res);
        var body = res;
        return body || {};
    };
    // // below function can be used when deal with Observable
    ManageService.prototype.handleErrorPromise = function (error) {
        console.log(error.error || error.error);
        //console.error(error.message || error);
        return Promise.reject(error.error || error.error);
    };
    return ManageService;
}());
ManageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ManageService);

var _a;
//# sourceMappingURL=manage.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedule-pdf-export/schedule-pdf-export.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/schedule-pdf-export/schedule-pdf-export.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Schedule Time</h4>\r\n<hr>\r\n\r\n<div class=\"row\">\r\n  <form #schedule=\"ngForm\" (ngSubmit)=\"submitTime(schedule)\">\r\n    <div class=\"col-sm-12\">\r\n      <p>Set the timing for auto-pdf-export</p>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">Every</span>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"everyhour\" name=\"everyhour\" required placeholder=\"2\">\r\n        <span class=\"input-group-addon\">hour</span>\r\n      </div><br>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"input-group\">\r\n        <button type=\"submit\" class=\"btn btn-danger\"  [disabled]=\"!schedule.valid\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"everyhour\">\r\n  <div class=\"col-sm-8\">\r\n      <div class=\"well\">\r\n        <ul class=\"list-inline\">\r\n          <li> <strong>Scheduled Time  <span class=\"glyphicon glyphicon-arrow-right\"></span> </strong> </li>\r\n          <li>Every {{everyhour}} hour</li>\r\n        </ul>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/schedule-pdf-export/schedule-pdf-export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_schedule_service__ = __webpack_require__("../../../../../src/app/components/schedule-pdf-export/service/schedule.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePdfExportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SchedulePdfExportComponent = (function () {
    function SchedulePdfExportComponent(toastr, scheduleService) {
        this.toastr = toastr;
        this.scheduleService = scheduleService;
        this.everyhour = 2;
        this.hourObj = { time: "" };
    }
    SchedulePdfExportComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('everyhour') != '' && localStorage.getItem('everyhour') != null) {
            this.everyhour = JSON.parse(localStorage.getItem('everyhour'));
            this.hourObj.time = "every " + this.everyhour + " hour";
            this.scheduleService.setScheduleTime(this.hourObj)
                .then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.hourObj.time = "every 1 hour";
            this.scheduleService.setScheduleTime(this.hourObj)
                .then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    SchedulePdfExportComponent.prototype.submitTime = function () {
        var _this = this;
        console.log(this.everyhour);
        if (this.everyhour < 1) {
            this.toastr.error('Minimum time is 1 hour!', 'Oops!');
            return;
        }
        localStorage.setItem('everyhour', JSON.stringify(this.everyhour));
        this.hourObj.time = "every " + this.everyhour + " hour";
        this.scheduleService.setScheduleTime(this.hourObj)
            .then(function (res) {
            console.log(res);
            _this.toastr.success('Scheduled for every ' + _this.everyhour + ' hour!', 'Success!');
        }, function (err) {
            console.log(err);
            _this.toastr.error('Time not schedule!', 'Oops!');
        });
    };
    return SchedulePdfExportComponent;
}());
SchedulePdfExportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schedule-pdf-export',
        template: __webpack_require__("../../../../../src/app/components/schedule-pdf-export/schedule-pdf-export.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/schedule-pdf-export/schedule-pdf-export.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_schedule_service__["a" /* ScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_schedule_service__["a" /* ScheduleService */]) === "function" && _b || Object])
], SchedulePdfExportComponent);

var _a, _b;
//# sourceMappingURL=schedule-pdf-export.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/schedule-pdf-export/service/schedule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
        console.log('data service connected');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    ScheduleService.prototype.setScheduleTime = function (timeObj) {
        var localApiUrl = 'http://localhost:3000';
        var url = localApiUrl + "/api/set-time";
        return this.http.post(url, timeObj, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
        ;
    };
    ScheduleService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    // // below function can be used when deal with Observable
    ScheduleService.prototype.handleErrorPromise = function (error) {
        console.log(error || error);
        //console.error(error.message || error);
        return Promise.reject(error || error.error);
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ScheduleService);

var _a;
//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/setting-layout/setting-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item{\r\n  border:none !important;\r\n}\r\n.sidebar{\r\n  border-right:1px solid #ddd;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/setting-layout/setting-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n  <div class=\"container-fluid\">\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-3 sidebar\">\r\n        <div class=\"list-group\">\r\n          <a routerLink=\"/settings/url\" class=\"list-group-item\">URL</a>\r\n          <a class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#exportlist\" role=\"button\">\r\n           Export <span class=\"caret\"></span>\r\n       </a>\r\n       <div class=\"panel collapse\" id=\"exportlist\" style=\"padding-left:20px;\">\r\n         <a routerLink=\"/settings/tables\" class=\"list-group-item\">Export Tables</a>\r\n         <a routerLink=\"/settings/column\" class=\"list-group-item\">Export Column</a>\r\n         <a routerLink=\"/settings/export-directory\" class=\"list-group-item\">Export Directory</a>\r\n         <a routerLink=\"/settings/schedule\" class=\"list-group-item\">Schedule Time</a>\r\n       </div>\r\n          <a routerLink=\"/settings/start-stop-export\" class=\"list-group-item\">Start/Stop Service</a>\r\n          <a routerLink=\"/settings/theme\" class=\"list-group-item\">Theme</a>\r\n          <a routerLink=\"/settings/logo\" class=\"list-group-item\">Logo</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-9\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/setting-layout/setting-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingLayoutComponent = (function () {
    function SettingLayoutComponent() {
    }
    SettingLayoutComponent.prototype.ngOnInit = function () {
    };
    return SettingLayoutComponent;
}());
SettingLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setting-layout',
        template: __webpack_require__("../../../../../src/app/components/setting-layout/setting-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/setting-layout/setting-layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingLayoutComponent);

//# sourceMappingURL=setting-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/service/table.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TableService = (function () {
    function TableService(http) {
        this.http = http;
        console.log('data service connected');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    TableService.prototype.setTables = function (tabObj) {
        var localApiUrl = 'http://localhost:3000';
        var url = localApiUrl + "/api/set-tables";
        return this.http.post(url, tabObj, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
        ;
    };
    TableService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    // // below function can be used when deal with Observable
    TableService.prototype.handleErrorPromise = function (error) {
        console.log(error || error);
        //console.error(error.message || error);
        return Promise.reject(error || error.error);
    };
    return TableService;
}());
TableService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TableService);

var _a;
//# sourceMappingURL=table.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-inline > li {\r\n  padding:5px;\r\n  border:1px solid #ddd;\r\n  margin:5px;\r\n}\r\n\r\n.well{\r\n  padding: 12px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Tables </h4>\r\n<hr>\r\n\r\n<div class=\"row\">\r\n<form #tableData=\"ngForm\" (ngSubmit)=\"submitTable(tableData)\">\r\n  <div class=\"col-sm-12\">\r\n    <p>Add tables for scheduling auto pdf export:</p>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\">Table</span>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"tableData.table\" name=\"table\" required placeholder=\"document1\">\r\n    </div><br>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <div class=\"input-group\">\r\n      <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!tableData.valid\" name=\"button\">Submit</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"toggle\">\r\n  <div class=\"col-sm-8\">\r\n    <div class=\"well\">\r\n      <ul class=\"list-inline\">\r\n        <li *ngFor=\"let table of mainTables; let i = index\">{{table.table}} <span (click)=\"remove(i)\" role=\"button\" class=\"glyphicon glyphicon-remove\"></span></li>\r\n      </ul>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/tables/tables.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_table_service__ = __webpack_require__("../../../../../src/app/components/tables/service/table.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TablesComponent = (function () {
    function TablesComponent(toastr, tableService) {
        this.toastr = toastr;
        this.tableService = tableService;
        this.tableArray = [{ table: "" }];
        this.toggle = false;
        this.mainTables = [{ table: "" }];
        this.obj = { tables: [] };
        this.tableToggle = false;
    }
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('mainTables') != '' && localStorage.getItem('mainTables') != null) {
            this.mainTables = JSON.parse(localStorage.getItem('mainTables'));
            this.toggle = true;
            this.obj = { tables: this.mainTables };
            this.tableService.setTables(this.obj)
                .then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
        this.tableArray.forEach(function (tab) {
            if (tab.table === '') {
                _this.tableArray.splice(0, 1);
            }
        });
    };
    TablesComponent.prototype.submitTable = function (tableData) {
        var _this = this;
        this.table = tableData.value;
        if (localStorage.getItem('mainTables') != '' && localStorage.getItem('mainTables') != null) {
            this.mainTables.forEach(function (element) {
                if (element.table === _this.table.table) {
                    _this.tableToggle = true;
                }
                else {
                    _this.tableToggle = false;
                }
            });
            if (!this.tableToggle) {
                this.mainTables.push(this.table);
                // console.log(this.mainTables);
                localStorage.setItem('mainTables', JSON.stringify(this.mainTables));
                this.obj = { tables: this.mainTables };
                this.tableService.setTables(this.obj)
                    .then(function (res) {
                    console.log(res);
                    _this.toastr.success('Table has been added successfully!', 'Success!');
                    _this.toggle = true;
                }, function (err) {
                    console.log(err);
                    _this.toastr.error('Table not added!', 'Oops!');
                    _this.toggle = true;
                });
            }
            else {
                this.toastr.error('Table already added!', 'Oops!');
            }
        }
        else {
            this.tableArray.forEach(function (element) {
                if (element.table === _this.table.table) {
                    _this.tableToggle = true;
                }
                else {
                    _this.tableToggle = false;
                }
            });
            if (!this.tableToggle) {
                this.tableArray.push(this.table);
                // console.log("mainTables.......");
                // console.log(this.mainTables);
                this.mainTables = this.tableArray;
                localStorage.setItem('mainTables', JSON.stringify(this.mainTables));
                this.obj = { tables: this.mainTables };
                this.tableService.setTables(this.obj)
                    .then(function (res) {
                    console.log(res);
                    _this.toastr.success('Table has been added successfully!', 'Success!');
                    _this.toggle = true;
                }, function (err) {
                    console.log(err);
                    _this.toastr.error('Table not added!', 'Oops!');
                    _this.toggle = true;
                });
            }
            else {
                this.toastr.error('Table already added!', 'Oops!');
            }
        }
    };
    TablesComponent.prototype.remove = function (i) {
        var _this = this;
        this.mainTables.splice(i, 1);
        console.log(this.mainTables);
        localStorage.setItem('mainTables', JSON.stringify(this.mainTables));
        this.obj = { tables: this.mainTables };
        this.tableService.setTables(this.obj)
            .then(function (res) {
            console.log(res);
            _this.toastr.success('Table has been removed!', 'Success!');
        }, function (err) {
            console.log(err);
            _this.toastr.error('Table not removed!', 'Oops!');
        });
    };
    return TablesComponent;
}());
TablesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__("../../../../../src/app/components/tables/tables.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/tables/tables.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_table_service__["a" /* TableService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_table_service__["a" /* TableService */]) === "function" && _b || Object])
], TablesComponent);

var _a, _b;
//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/theme/theme.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/theme/theme.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Manage Theme </h4>\n<hr>\n\n<div class=\"row\" *ngIf=\"!colorToggle\">\n  <form #themeForm=\"ngForm\" (ngSubmit)=\"submitTheme()\">\n    <div class=\"col-sm-8\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Theme</span>\n        <select class=\"form-control\" [(ngModel)]=\"themecolor\" name=\"themecolor\" (change)=\"manageCustomTheme()\" required>\n          <option *ngFor=\"let theme of themes\" [ngValue]=\"theme\">{{theme.color}}</option>\n        </select>\n      </div><br>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"input-group\">\n        <button type=\"submit\" class=\"btn btn-danger\"  [disabled]=\"!themeForm.valid\">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div class=\"row\" *ngIf=\"colorToggle\">\n  <form #colorForm=\"ngForm\" (ngSubmit)=\"customTheme()\">\n    <div class=\"col-sm-12 col-xs-12 form-inline\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Colour</span>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customColor\" name=\"customColor\" placeholder=\"Green\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">Color Code</span>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"customCode\" name=\"customCode\" placeholder=\"#00ff00\" required>\n      </div><br><br>\n      <div class=\"input-group\">\n        <button type=\"submit\" class=\"btn btn-primary\"  [disabled]=\"!colorForm.valid\">Submit</button>\n      </div>\n      <div class=\"input-group\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"pressedBackButton()\">Select Default</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/theme/theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThemeComponent = (function () {
    function ThemeComponent(toastr) {
        this.toastr = toastr;
        this.themes = [{ "color": "Dark", "colorCode": "#343a40" }, { "color": "Blue", "colorCode": "#337ab7" }, { "color": "Cyan", "colorCode": "#17a2b8" }, { "color": "Gray", "colorCode": "#6c757d" },
            { "color": "Mid-night-blue", "colorCode": "#191970" }, { "color": "Customize Colour", "colorCode": "customColorCode" }];
        this.themecolor = { color: "Blue", colorCode: "#337ab7" };
        this.colorToggle = false;
        this.customColor = '';
        this.customCode = '';
    }
    ThemeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('themecolor') != '' && localStorage.getItem('themecolor') != null) {
            if (JSON.parse(localStorage.getItem('themecolor')).custom) {
                //this.themes.push({"color":JSON.parse(localStorage.getItem('themecolor')).color,"colorCode":JSON.parse(localStorage.getItem('themecolor')).colorCode});
                this.onSelect('customColorCode');
                this.colorToggle = true;
                this.customColor = JSON.parse(localStorage.getItem('themecolor')).custom;
                this.customCode = JSON.parse(localStorage.getItem('themecolor')).colorCode;
            }
            else {
                this.onSelect(JSON.parse(localStorage.getItem('themecolor')).colorCode);
            }
        }
        else {
            this.onSelect('#343a40');
        }
    };
    ThemeComponent.prototype.submitTheme = function () {
        this.customColor = '';
        this.customCode = '';
        console.log(this.themecolor);
        localStorage.setItem('themecolor', JSON.stringify(this.themecolor));
        this.toastr.success('Theme has been changed successfully!', 'Success!');
    };
    ThemeComponent.prototype.manageCustomTheme = function () {
        if (this.themecolor.color == 'Customize Colour') {
            this.colorToggle = true;
        }
        else {
            this.colorToggle = false;
        }
    };
    ThemeComponent.prototype.customTheme = function () {
        //console.log("cutom----------");
        if (this.customCode.indexOf('#') > -1) {
            var themeObj = { "color": 'Customize Colour', "colorCode": this.customCode, "custom": this.customColor };
            localStorage.setItem('themecolor', JSON.stringify(themeObj));
            this.toastr.success('Theme has been changed successfully!', 'Success!');
        }
        else {
            this.toastr.error('Color Code must start with # tag!', 'Oops!');
        }
    };
    ThemeComponent.prototype.pressedBackButton = function () {
        this.colorToggle = false;
        this.onSelect('#343a40');
    };
    ThemeComponent.prototype.onSelect = function (colorCode) {
        this.themecolor = null;
        for (var i = 0; i < this.themes.length; i++) {
            if (this.themes[i].colorCode == colorCode) {
                this.themecolor = this.themes[i];
                console.log(this.themecolor);
            }
        }
    };
    return ThemeComponent;
}());
ThemeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-theme',
        template: __webpack_require__("../../../../../src/app/components/theme/theme.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/theme/theme.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object])
], ThemeComponent);

var _a;
//# sourceMappingURL=theme.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/url/service/url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URLService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var URLService = (function () {
    function URLService(http) {
        this.http = http;
        console.log('data service connected');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    URLService.prototype.setURL = function (mainurl) {
        var localApiUrl = 'http://localhost:3000';
        var url = localApiUrl + "/api/set-url";
        return this.http.post(url, mainurl, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
        ;
    };
    URLService.prototype.extractData = function (res) {
        console.log(res);
        var body = res.json();
        return body || {};
    };
    // // below function can be used when deal with Observable
    URLService.prototype.handleErrorPromise = function (error) {
        console.log(error || error);
        //console.error(error.message || error);
        return Promise.reject(error || error.error);
    };
    return URLService;
}());
URLService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], URLService);

var _a;
//# sourceMappingURL=url.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/url/url.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/url/url.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>URL Setting </h4>\r\n<hr>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-8\">\r\n    <div class=\"text-center\">\r\n      <div class=\"\" [ngStyle]=\"{color:msg.color}\">\r\n        <strong>{{msg.status}}</strong> {{msg.message}}\r\n     </div>\r\n     <br>\r\n    </div>\r\n  </div>\r\n  <form #urlData=\"ngForm\" (ngSubmit)=\"submitUrl()\">\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\">URL</span>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"url\" name=\"url\" #myurl=\"ngModel\" required placeholder=\"https://www.cloudapps.services\">\r\n      </div><br>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"input-group\">\r\n        <button type=\"submit\" class=\"btn btn-danger\" [disabled]=\"!urlData.valid\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/url/url.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_url_service__ = __webpack_require__("../../../../../src/app/components/url/service/url.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UrlComponent = (function () {
    function UrlComponent(router, toastr, urlService) {
        this.router = router;
        this.toastr = toastr;
        this.urlService = urlService;
        this.url = 'https://www.cloudapps.services';
        this.msg = { status: "", message: "", color: "" };
        this.clsToggle = false;
        this.obj = { url: "" };
    }
    UrlComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('url') && localStorage.getItem('url') != null) {
            this.url = localStorage.getItem('url');
            this.obj.url = this.url;
            this.urlService.setURL(this.obj)
                .then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
    };
    UrlComponent.prototype.submitUrl = function () {
        var _this = this;
        //console.log(this.url);
        var n = this.url.endsWith("/");
        if (n) {
            this.msg.status = 'Failed!';
            this.msg.message = "Please enter the url without containing '/' at the end of url";
            this.msg.color = '#a94442';
            //this.toastr.error('This is not good!', 'Oops!');
        }
        else {
            this.obj.url = this.url;
            this.urlService.setURL(this.obj)
                .then(function (res) {
                console.log(res);
                _this.msg.status = 'Success!';
                _this.msg.message = 'URL has been set successfully, Please login to continue';
                _this.msg.color = '#3c763d';
                localStorage.setItem('url', _this.url);
                _this.toastr.success('URL has been set successfully, Please login to continue!', 'Success!');
                _this.router.navigate(['/']);
            }, function (err) {
                console.log(err);
                _this.msg.status = 'Failed!';
                _this.msg.message = "URL is not set properly, please try again later";
                _this.msg.color = '#a94442';
            });
        }
        //  console.log(n);
    };
    return UrlComponent;
}());
UrlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-url',
        template: __webpack_require__("../../../../../src/app/components/url/url.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/url/url.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_url_service__["a" /* URLService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_url_service__["a" /* URLService */]) === "function" && _c || Object])
], UrlComponent);

var _a, _b, _c;
//# sourceMappingURL=url.component.js.map

/***/ }),

/***/ "../../../../../src/app/custom-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'fade'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-top-center';
        _this.dismiss = 'auto';
        _this.toastLife = 7000;
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=custom-option.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            console.log(it);
            if (it && 'name' in it) {
                return it.name.toLowerCase().includes(searchText);
            }
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/service/authguard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthGuard = (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('i am checking to see if you are logged in');
        return true;
    };
    AuthGuard.prototype.canActivateChild = function () {
        console.log('checking child route access');
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AuthGuard);

//# sourceMappingURL=authguard.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query) {
        console.log(array);
        console.log(query);
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return row.name.toLowerCase().indexOf(query.toLowerCase()) > -1; });
        }
        return array;
    };
    return DataFilterPipe;
}());
DataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "dataFilter"
    })
], DataFilterPipe);

//# sourceMappingURL=data-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/service/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SharedService = (function () {
    function SharedService(http) {
        this.http = http;
        this.apiUrl = 'https://cloudapps.services/rest/api';
        this.toggleUser = false;
        this.imagePath = '';
        this.logoToggle = false;
        console.log('Shared service connected');
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    SharedService.prototype.verifyUserEmail = function (token) {
        return this.http.get(this.apiUrl + '/api/user/verify_user/' + token, this.options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    };
    SharedService.prototype.sendThankMail = function (email) {
        return this.http.get(this.apiUrl + '/api/thank/' + email, this.options).toPromise()
            .then(function (res) { return res.json().user; })
            .catch(this.handleErrorPromise);
    };
    SharedService.prototype.extractData = function (res) {
        var body = res.json();
        // console.log("below is the extracted data");
        // console.log(body);
        return body || {};
    };
    SharedService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SharedService);

var _a;
// registerUser (body: Object): Promise<Object> {
//
//      let headers      = new Headers({ 'Content-Type': 'application/json' });
//      let options       = new RequestOptions({ headers: headers });
//
//      return this.http.post(this.apiUrl, body, options).toPromise()
//                       .then(res => res.json().user)
//                       .catch(this.handleError);
//  }
//
//  private handleError(error: any): Promise<any> {
//   console.error('An error occurred', error); // for demo purposes only
//   return Promise.reject(error.message || error);
// }
//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });
//platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map