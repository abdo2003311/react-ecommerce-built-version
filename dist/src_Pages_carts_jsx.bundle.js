"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkecommerce"] = self["webpackChunkecommerce"] || []).push([["src_Pages_carts_jsx"],{

/***/ "./src/Pages/carts.jsx":
/*!*****************************!*\
  !*** ./src/Pages/carts.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Grid/Grid.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components */ \"./src/Components/index.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ \"./src/styles/index.js\");\n\n\n\n\n\n\nvar Carts = function Carts() {\n  var _useUserCarts = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useUserCarts)(1),\n      carts = _useUserCarts.carts,\n      loading = _useUserCarts.loading,\n      error = _useUserCarts.error;\n\n  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  var classes = (0,_styles__WEBPACK_IMPORTED_MODULE_3__.useCartsStyles)(theme);\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components__WEBPACK_IMPORTED_MODULE_1__.Loading, {\n    width: 100,\n    height: 100\n  });\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"error\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"carts \".concat(classes.carts)\n  }, carts.map(function (cart) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components__WEBPACK_IMPORTED_MODULE_1__.Cart, {\n      cart: cart,\n      key: Math.random() * 100000\n    });\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components__WEBPACK_IMPORTED_MODULE_1__.AddNewCart, {\n    carts: carts\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components__WEBPACK_IMPORTED_MODULE_1__.Footer, null))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carts);\n\n//# sourceURL=webpack://ecommerce/./src/Pages/carts.jsx?");

/***/ })

}]);