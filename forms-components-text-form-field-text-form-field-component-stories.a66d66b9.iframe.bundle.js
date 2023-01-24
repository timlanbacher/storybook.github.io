"use strict";
(self["webpackChunktca_shared_ui"] = self["webpackChunktca_shared_ui"] || []).push([[543],{

/***/ "./projects/tca-shared-portal/forms/components/text-form-field/text-form-field..component.stories.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TextFormField": () => (/* binding */ TextFormField),
  "default": () => (/* binding */ text_form_field_component_stories)
});

// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2020/forms.mjs + 3 modules
var fesm2020_forms = __webpack_require__("./node_modules/@angular/forms/fesm2020/forms.mjs");
// EXTERNAL MODULE: ./node_modules/@storybook/angular/dist/index.mjs
var dist = __webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__("./node_modules/tslib/tslib.es6.js");
;// CONCATENATED MODULE: ./projects/tca-shared-portal/forms/components/text-form-field/text-form-field.component.html?ngResource
const text_form_field_componentngResource_namespaceObject = "<mat-form-field appearance=\"outline\" *ngIf=\"control\" [floatLabel]=\"floatLabel\">\r\n  <mat-label *ngIf=\"label && !hideLabel\">{{ label }}</mat-label>\r\n  <input\r\n    matInput\r\n    [tcaInputAutofocus]=\"autoFocus\"\r\n    [preventScroll]=\"preventScroll\"\r\n    [formControl]=\"control\"\r\n    maxlength=\"{{ maxLength }}\"\r\n    [attr.data-cy]=\"name\"\r\n    [placeholder]=\"placeholder\"\r\n    [attr.tabindex]=\"tabindex\"\r\n    (blur)=\"blur.emit($event)\"\r\n  />\r\n  <span matSuffix>\r\n    {{ suffix }}\r\n  </span>\r\n  <span *ngIf=\"prefix\" matPrefix>{{ prefix }}&nbsp; </span>\r\n\r\n  <mat-hint>\r\n    <ng-content select=\"[hint]\"></ng-content>\r\n  </mat-hint>\r\n  <mat-error\r\n    *ngIf=\"control.hasError('required')\"\r\n    [attr.data-cy]=\"name + '-required-validation'\"\r\n  >\r\n    {{\r\n      translation.common.validators.required\r\n        | tcaPlaceholder\r\n          : {\r\n              object: label\r\n            }\r\n    }}\r\n  </mat-error>\r\n  <mat-error\r\n    *ngIf=\"control.hasError('maxlength')\"\r\n    [attr.data-cy]=\"name + '-maxlength-validation'\"\r\n  >\r\n    {{\r\n      translation.common.validators.maxlength\r\n        | tcaPlaceholder\r\n          : {\r\n              object: label,\r\n              requiredLength: control.errors.maxlength.requiredLength\r\n            }\r\n    }}\r\n  </mat-error>\r\n  <mat-error\r\n    *ngIf=\"control.hasError('pattern')\"\r\n    [attr.data-cy]=\"name + '-pattern-validation'\"\r\n  >\r\n    {{\r\n      translation.common.validators.pattern\r\n        | tcaPlaceholder\r\n          : {\r\n              object: label\r\n            }\r\n    }}\r\n  </mat-error>\r\n  <mat-error\r\n    *ngIf=\"control.hasError('email')\"\r\n    [attr.data-cy]=\"name + '-email-validation'\"\r\n  >\r\n    {{\r\n      translation.common.validators.email\r\n        | tcaPlaceholder\r\n          : {\r\n              object: label\r\n            }\r\n    }}\r\n  </mat-error>\r\n</mat-form-field>\r\n";
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2020/core.mjs + 1 modules
var core = __webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");
;// CONCATENATED MODULE: ./projects/tca-shared-portal/forms/components/text-form-field/text-form-field.component.ts



let TcaTextFormFieldComponent = class TcaTextFormFieldComponent {
    constructor() {
        this.hideLabel = false;
        this.maxLength = 100;
        this.placeholder = null;
        this.floatLabel = 'auto';
        this.autoFocus = false;
        this.preventScroll = true;
        // eslint-disable-next-line @angular-eslint/no-output-native
        this.blur = new core.EventEmitter();
    }
};
TcaTextFormFieldComponent.propDecorators = {
    name: [{ type: core.Input }],
    label: [{ type: core.Input }],
    hideLabel: [{ type: core.Input }],
    control: [{ type: core.Input }],
    maxLength: [{ type: core.Input }],
    translation: [{ type: core.Input }],
    placeholder: [{ type: core.Input }],
    floatLabel: [{ type: core.Input }],
    autoFocus: [{ type: core.Input }],
    preventScroll: [{ type: core.Input }],
    tabindex: [{ type: core.Input }],
    suffix: [{ type: core.Input }],
    prefix: [{ type: core.Input }],
    blur: [{ type: core.Output }]
};
TcaTextFormFieldComponent = (0,tslib_es6/* __decorate */.gn)([
    (0,core.Component)({
        selector: 'tca-text-form-field',
        template: text_form_field_componentngResource_namespaceObject,
    })
], TcaTextFormFieldComponent);


// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/input.mjs + 5 modules
var input = __webpack_require__("./node_modules/@angular/material/fesm2020/input.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/material/fesm2020/form-field.mjs + 3 modules
var form_field = __webpack_require__("./node_modules/@angular/material/fesm2020/form-field.mjs");
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2020/animations.mjs + 1 modules
var animations = __webpack_require__("./node_modules/@angular/platform-browser/fesm2020/animations.mjs");
;// CONCATENATED MODULE: ./projects/tca-shared-portal/forms/components/text-form-field/text-form-field..component.stories.ts






/* harmony default export */ const text_form_field_component_stories = ({
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'TextFormField',
    component: TcaTextFormFieldComponent,
    decorators: [
        (0,dist.moduleMetadata)({
            declarations: [],
            imports: [
                input/* MatInputModule */.c,
                animations/* BrowserAnimationsModule */.PW,
                form_field/* MatFormFieldModule */.lN,
                fesm2020_forms.ReactiveFormsModule,
                fesm2020_forms.FormsModule,
            ],
            providers: [],
        }),
    ],
});
//👇 We create a “template” of how args map to rendering
let Template = (args) => ({
    props: {
        control: new fesm2020_forms.FormControl(),
    },
});
let TextFormField = Template.bind({});
TextFormField.args = {
    control: new fesm2020_forms.FormControl(),
};


/***/ })

}]);
//# sourceMappingURL=forms-components-text-form-field-text-form-field-component-stories.a66d66b9.iframe.bundle.js.map