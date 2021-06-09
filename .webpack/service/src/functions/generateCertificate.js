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

/***/ "./src/functions/generateCertificate.ts":
/*!**********************************************!*\
  !*** ./src/functions/generateCertificate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chrome-aws-lambda */ \"chrome-aws-lambda\");\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dynamoDBClient */ \"./src/utils/dynamoDBClient.ts\");\n\n\n\n\n\n\n\nconst compile = async function (data) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'src', 'templates', 'certificate.hbs');\n    const html = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(filePath, 'utf-8');\n    return handlebars__WEBPACK_IMPORTED_MODULE_3___default().compile(html)(data);\n};\nconst handle = async (event) => {\n    const { id, name, grade } = JSON.parse(event.body);\n    const response = await _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_6__.document.query({\n        TableName: 'users_certificates',\n        KeyConditionExpression: 'id = :id',\n        ExpressionAttributeValues: {\n            ':id': id,\n        },\n    })\n        .promise();\n    const userAlreadyExists = response.Items[0];\n    if (!userAlreadyExists) {\n        await _utils_dynamoDBClient__WEBPACK_IMPORTED_MODULE_6__.document.put({\n            TableName: 'users_certificates',\n            Item: {\n                id,\n                name,\n                grade,\n            },\n        })\n            .promise();\n    }\n    const medalPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'src', 'templates', 'selo.png');\n    const medal = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(medalPath, 'base64');\n    const data = {\n        date: dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format('DD/MM/YYYY'),\n        grade,\n        name,\n        id,\n        medal,\n    };\n    const content = await compile(data);\n    const browser = await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().puppeteer.launch({\n        headless: true,\n        args: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().args),\n        defaultViewport: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().defaultViewport),\n        executablePath: await (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_0___default().executablePath),\n    });\n    const page = await browser.newPage();\n    await page.setContent(content);\n    const pdf = await page.pdf({\n        format: 'a4',\n        landscape: true,\n        path: process.env.IS_OFFLINE ? 'certificate.pdf' : null,\n        printBackground: true,\n        preferCSSPageSize: true,\n    });\n    await browser.close();\n    const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_5__.S3();\n    await s3\n        .putObject({\n        Bucket: 'serverless-certificatesignite',\n        Key: `${id}.pdf`,\n        ACL: 'public-read',\n        Body: pdf,\n        ContentType: 'application/pdf',\n    })\n        .promise();\n    return {\n        statusCode: 201,\n        body: JSON.stringify({\n            message: 'Certificate created!',\n            url: `https://serverless-certificatesignite.s3.eu-west-3.amazonaws.com/${id}.pdf`,\n        }),\n        headers: { 'Content-Type': 'application/json' },\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlSlMtY2VydGlmaWNhdGUvLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHM/YTVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hyb21pdW0gZnJvbSAnY2hyb21lLWF3cy1sYW1iZGEnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGhhbmRsZWJhcnMgZnJvbSAnaGFuZGxlYmFycyc7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IHsgUzMgfSBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSAnLi4vdXRpbHMvZHluYW1vREJDbGllbnQnO1xuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuXG5pbnRlcmZhY2UgSUNyZWF0ZUNlcnRpZmljYXRlIHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRncmFkZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVRlbXBsYXRlIHtcblx0aWQ6IHN0cmluZztcblx0bmFtZTogc3RyaW5nO1xuXHRncmFkZTogc3RyaW5nO1xuXHRkYXRlOiBzdHJpbmc7XG5cdG1lZGFsOiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvbXBpbGUgPSBhc3luYyBmdW5jdGlvbiAoZGF0YTogSVRlbXBsYXRlKSB7XG5cdGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKFxuXHRcdHByb2Nlc3MuY3dkKCksXG5cdFx0J3NyYycsXG5cdFx0J3RlbXBsYXRlcycsXG5cdFx0J2NlcnRpZmljYXRlLmhicycsXG5cdCk7XG5cdGNvbnN0IGh0bWwgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgsICd1dGYtOCcpO1xuXHRyZXR1cm4gaGFuZGxlYmFycy5jb21waWxlKGh0bWwpKGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZTogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChcblx0ZXZlbnQsXG4pID0+IHtcblx0Ly8gaWQsIG5hbWUsIGdyYWRlID1cblx0Y29uc3QgeyBpZCwgbmFtZSwgZ3JhZGUgfSA9IEpTT04ucGFyc2UoXG5cdFx0ZXZlbnQuYm9keSxcblx0KSBhcyBJQ3JlYXRlQ2VydGlmaWNhdGU7XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkb2N1bWVudFxuXHRcdC5xdWVyeSh7XG5cdFx0XHRUYWJsZU5hbWU6ICd1c2Vyc19jZXJ0aWZpY2F0ZXMnLFxuXHRcdFx0S2V5Q29uZGl0aW9uRXhwcmVzc2lvbjogJ2lkID0gOmlkJyxcblx0XHRcdEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcblx0XHRcdFx0JzppZCc6IGlkLFxuXHRcdFx0fSxcblx0XHR9KVxuXHRcdC5wcm9taXNlKCk7XG5cblx0Y29uc3QgdXNlckFscmVhZHlFeGlzdHMgPSByZXNwb25zZS5JdGVtc1swXTtcblx0aWYgKCF1c2VyQWxyZWFkeUV4aXN0cykge1xuXHRcdGF3YWl0IGRvY3VtZW50XG5cdFx0XHQucHV0KHtcblx0XHRcdFx0VGFibGVOYW1lOiAndXNlcnNfY2VydGlmaWNhdGVzJyxcblx0XHRcdFx0SXRlbToge1xuXHRcdFx0XHRcdGlkLFxuXHRcdFx0XHRcdG5hbWUsXG5cdFx0XHRcdFx0Z3JhZGUsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KVxuXHRcdFx0LnByb21pc2UoKTtcblx0fVxuXG5cdGNvbnN0IG1lZGFsUGF0aCA9IHBhdGguam9pbihcblx0XHRwcm9jZXNzLmN3ZCgpLFxuXHRcdCdzcmMnLFxuXHRcdCd0ZW1wbGF0ZXMnLFxuXHRcdCdzZWxvLnBuZycsXG5cdCk7XG5cdGNvbnN0IG1lZGFsID0gZnMucmVhZEZpbGVTeW5jKG1lZGFsUGF0aCwgJ2Jhc2U2NCcpO1xuXG5cdGNvbnN0IGRhdGE6IElUZW1wbGF0ZSA9IHtcblx0XHRkYXRlOiBkYXlqcygpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxuXHRcdGdyYWRlLFxuXHRcdG5hbWUsXG5cdFx0aWQsXG5cdFx0bWVkYWwsXG5cdH07XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGNvbXBpbGUoZGF0YSk7XG5cblx0Y29uc3QgYnJvd3NlciA9IGF3YWl0IGNocm9taXVtLnB1cHBldGVlci5sYXVuY2goe1xuXHRcdGhlYWRsZXNzOiB0cnVlLFxuXHRcdGFyZ3M6IGNocm9taXVtLmFyZ3MsXG5cdFx0ZGVmYXVsdFZpZXdwb3J0OiBjaHJvbWl1bS5kZWZhdWx0Vmlld3BvcnQsXG5cdFx0ZXhlY3V0YWJsZVBhdGg6IGF3YWl0IGNocm9taXVtLmV4ZWN1dGFibGVQYXRoLFxuXHR9KTtcblxuXHRjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XG5cdGF3YWl0IHBhZ2Uuc2V0Q29udGVudChjb250ZW50KTtcblx0Y29uc3QgcGRmID0gYXdhaXQgcGFnZS5wZGYoe1xuXHRcdGZvcm1hdDogJ2E0Jyxcblx0XHRsYW5kc2NhcGU6IHRydWUsXG5cdFx0cGF0aDogcHJvY2Vzcy5lbnYuSVNfT0ZGTElORSA/ICdjZXJ0aWZpY2F0ZS5wZGYnIDogbnVsbCxcblx0XHRwcmludEJhY2tncm91bmQ6IHRydWUsXG5cdFx0cHJlZmVyQ1NTUGFnZVNpemU6IHRydWUsXG5cdH0pO1xuXG5cdGF3YWl0IGJyb3dzZXIuY2xvc2UoKTtcblxuXHRjb25zdCBzMyA9IG5ldyBTMygpO1xuXHRhd2FpdCBzM1xuXHRcdC5wdXRPYmplY3Qoe1xuXHRcdFx0QnVja2V0OiAnc2VydmVybGVzcy1jZXJ0aWZpY2F0ZXNpZ25pdGUnLFxuXHRcdFx0S2V5OiBgJHtpZH0ucGRmYCxcblx0XHRcdEFDTDogJ3B1YmxpYy1yZWFkJyxcblx0XHRcdEJvZHk6IHBkZixcblx0XHRcdENvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vcGRmJyxcblx0XHR9KVxuXHRcdC5wcm9taXNlKCk7XG5cblx0cmV0dXJuIHtcblx0XHRzdGF0dXNDb2RlOiAyMDEsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0bWVzc2FnZTogJ0NlcnRpZmljYXRlIGNyZWF0ZWQhJyxcblx0XHRcdHVybDogYGh0dHBzOi8vc2VydmVybGVzcy1jZXJ0aWZpY2F0ZXNpZ25pdGUuczMuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb20vJHtpZH0ucGRmYCxcblx0XHR9KSxcblx0XHRoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcblx0fTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFJQSw0RkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLDZFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/generateCertificate.ts\n");

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

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");;

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/generateCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;