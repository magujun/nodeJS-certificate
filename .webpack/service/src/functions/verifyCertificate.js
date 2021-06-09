/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/verifyCertificate.ts":
/*!********************************************!*\
  !*** ./src/functions/verifyCertificate.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dynamoDBClient */ \"./src/utils/dynamoDBClient.ts\");\n\nconst handle = async (event) => {\n    const { id } = event.pathParameters;\n    const response = await _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_0__.document.query({\n        TableName: 'users_certificates',\n        KeyConditionExpression: 'id = :id',\n        ExpressionAttributeValues: {\n            ':id': id,\n        },\n    })\n        .promise();\n    const userCertificate = response.Items[0];\n    if (userCertificate) {\n        return {\n            statusCode: 200,\n            body: JSON.stringify({\n                message: 'Certificado válido',\n                name: userCertificate.name,\n                url: `https://serverless-certificatesignite.s3.eu-west-3.amazonaws.com/${id}.pdf`,\n            }),\n        };\n    }\n    return {\n        statusCode: 400,\n        body: JSON.stringify({\n            message: 'Certificado inválido',\n        }),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3ZlcmlmeUNlcnRpZmljYXRlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9kZUpTLWNlcnRpZmljYXRlLy4vc3JjL2Z1bmN0aW9ucy92ZXJpZnlDZXJ0aWZpY2F0ZS50cz82YzFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi4vdXRpbHMvZHluYW1vREJDbGllbnQnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKFxuXHRldmVudCxcbikgPT4ge1xuXHQvLyBodHRwOi8vdXJsL2Z1bmN0aW9uTmFtZS91c2VySURcblxuXHRjb25zdCB7IGlkIH0gPSBldmVudC5wYXRoUGFyYW1ldGVycztcblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGRvY3VtZW50XG5cdFx0LnF1ZXJ5KHtcblx0XHRcdFRhYmxlTmFtZTogJ3VzZXJzX2NlcnRpZmljYXRlcycsXG5cdFx0XHRLZXlDb25kaXRpb25FeHByZXNzaW9uOiAnaWQgPSA6aWQnLFxuXHRcdFx0RXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xuXHRcdFx0XHQnOmlkJzogaWQsXG5cdFx0XHR9LFxuXHRcdH0pXG5cdFx0LnByb21pc2UoKTtcblxuXHRjb25zdCB1c2VyQ2VydGlmaWNhdGUgPSByZXNwb25zZS5JdGVtc1swXTtcblx0aWYgKHVzZXJDZXJ0aWZpY2F0ZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0dXNDb2RlOiAyMDAsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdG1lc3NhZ2U6ICdDZXJ0aWZpY2FkbyB2w6FsaWRvJyxcblx0XHRcdFx0bmFtZTogdXNlckNlcnRpZmljYXRlLm5hbWUsXG5cdFx0XHRcdHVybDogYGh0dHBzOi8vc2VydmVybGVzcy1jZXJ0aWZpY2F0ZXNpZ25pdGUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vJHtpZH0ucGRmYCxcblx0XHRcdH0pLFxuXHRcdH07XG5cdH1cblx0cmV0dXJuIHtcblx0XHRzdGF0dXNDb2RlOiA0MDAsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0bWVzc2FnZTogJ0NlcnRpZmljYWRvIGludsOhbGlkbycsXG5cdFx0fSksXG5cdH07XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBRUE7QUFLQTtBQUVBLDRGQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/verifyCertificate.ts\n");

/***/ }),

/***/ "./src/utils/dynamoDBClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamoDBClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: 'localhost',\n    endpoint: 'http://localhost:8000',\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vREJDbGllbnQudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlSlMtY2VydGlmaWNhdGUvLi9zcmMvdXRpbHMvZHluYW1vREJDbGllbnQudHM/ZDkwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQiB9IGZyb20gJ2F3cy1zZGsnO1xuXG5jb25zdCBvcHRpb25zID0ge1xuXHRyZWdpb246ICdsb2NhbGhvc3QnLFxuXHRlbmRwb2ludDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcsXG59O1xuXG5jb25zdCBpc09mZmxpbmUgPSAoKSA9PiB7XG5cdHJldHVybiBwcm9jZXNzLmVudi5JU19PRkZMSU5FO1xufTtcblxuZXhwb3J0IGNvbnN0IGRvY3VtZW50ID0gaXNPZmZsaW5lKClcblx0PyBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQob3B0aW9ucylcblx0OiBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/dynamoDBClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/verifyCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;