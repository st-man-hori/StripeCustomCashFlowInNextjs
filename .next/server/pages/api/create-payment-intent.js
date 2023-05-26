"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/create-payment-intent";
exports.ids = ["pages/api/create-payment-intent"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/create-payment-intent.js":
/*!************************************************!*\
  !*** ./src/pages/api/create-payment-intent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nconst calculateOrderAmount = (items)=>{\n    return 1400;\n};\nasync function handler(req, res) {\n    const { items  } = req.body;\n    //PaymentIntentの作成\n    const paymentIntent = await stripe.paymentIntents.create({\n        amount: calculateOrderAmount(items),\n        currency: \"eur\",\n        automatic_payment_methods: {\n            enabled: true\n        }\n    });\n    res.send({\n        clientSecret: paymentIntent.client_secret\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1wYXltZW50LWludGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsU0FBU0MsbUJBQU9BLENBQUMsd0JBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBRTlELE1BQU1DLHVCQUF1QixDQUFDQyxRQUFVO0lBQ3ZDLE9BQU87QUFDUjtBQUVlLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9DLE1BQU0sRUFBRUgsTUFBSyxFQUFFLEdBQUdFLElBQUlFLElBQUk7SUFFMUIsa0JBQWtCO0lBQ2xCLE1BQU1DLGdCQUFnQixNQUFNWCxPQUFPWSxjQUFjLENBQUNDLE1BQU0sQ0FBQztRQUN4REMsUUFBUVQscUJBQXFCQztRQUM3QlMsVUFBVTtRQUNWQywyQkFBMkI7WUFDMUJDLFNBQVMsSUFBSTtRQUNkO0lBQ0Q7SUFFQVIsSUFBSVMsSUFBSSxDQUFDO1FBQ1JDLGNBQWNSLGNBQWNTLGFBQWE7SUFDMUM7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RyaXBlLWVsZW1lbnQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1wYXltZW50LWludGVudC5qcz9mNzkxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuY29uc3QgY2FsY3VsYXRlT3JkZXJBbW91bnQgPSAoaXRlbXMpID0+IHtcblx0cmV0dXJuIDE0MDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGNvbnN0IHsgaXRlbXMgfSA9IHJlcS5ib2R5O1xuXG5cdC8vUGF5bWVudEludGVudOOBruS9nOaIkFxuXHRjb25zdCBwYXltZW50SW50ZW50ID0gYXdhaXQgc3RyaXBlLnBheW1lbnRJbnRlbnRzLmNyZWF0ZSh7XG5cdFx0YW1vdW50OiBjYWxjdWxhdGVPcmRlckFtb3VudChpdGVtcyksXG5cdFx0Y3VycmVuY3k6IFwiZXVyXCIsXG5cdFx0YXV0b21hdGljX3BheW1lbnRfbWV0aG9kczoge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZXMuc2VuZCh7XG5cdFx0Y2xpZW50U2VjcmV0OiBwYXltZW50SW50ZW50LmNsaWVudF9zZWNyZXQsXG5cdH0pO1xufVxuXG4iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImNhbGN1bGF0ZU9yZGVyQW1vdW50IiwiaXRlbXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsInBheW1lbnRJbnRlbnQiLCJwYXltZW50SW50ZW50cyIsImNyZWF0ZSIsImFtb3VudCIsImN1cnJlbmN5IiwiYXV0b21hdGljX3BheW1lbnRfbWV0aG9kcyIsImVuYWJsZWQiLCJzZW5kIiwiY2xpZW50U2VjcmV0IiwiY2xpZW50X3NlY3JldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/create-payment-intent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/create-payment-intent.js"));
module.exports = __webpack_exports__;

})();