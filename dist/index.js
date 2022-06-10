/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isListempty\": () => (/* binding */ isListempty),\n/* harmony export */   \"list\": () => (/* binding */ list),\n/* harmony export */   \"populate\": () => (/* binding */ populate),\n/* harmony export */   \"rearange\": () => (/* binding */ rearange)\n/* harmony export */ });\n/* harmony import */ var _dots_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dots.svg */ \"./src/dots.svg\");\n/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.svg */ \"./src/remove.svg\");\n/* harmony import */ var _enter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter.svg */ \"./src/enter.svg\");\n/* harmony import */ var _refresh_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refresh.svg */ \"./src/refresh.svg\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localstorage.js */ \"./src/localstorage.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n // import { clearCompleted } from './extend.js';\n// daclare variables and initial data\n\nvar list = document.querySelector('.list');\nvar refreshIcon = document.getElementById(\"refreshIcon\");\nvar enterIcon = document.getElementById(\"enterIcon\");\nvar input = document.querySelector('#yourTask');\nrefreshIcon.src = _refresh_svg__WEBPACK_IMPORTED_MODULE_3__;\nenterIcon.src = _enter_svg__WEBPACK_IMPORTED_MODULE_2__;\nlist.innerHTML = ''; // functionality\n\nfunction isListempty() {\n  if (list.hasChildNodes()) {\n    return true;\n  } else {\n    return false;\n  }\n} // add new item\n// new task template added to newly created li\n\nfunction makeTaskElement(_ref) {\n  var description = _ref.description;\n  var li = document.createElement('li');\n  li.className = 'item';\n  li.innerHTML = \"<label><input type=\\\"checkbox\\\"><input class=\\\"edit\\\" placeholder='\".concat(description, \"'></input></label><img src='\").concat(_dots_svg__WEBPACK_IMPORTED_MODULE_0__, \"'>\");\n  return li;\n} // render new task by appending this to ul\n// assign id to a new li and make a localStorage record\n\n\nfunction addTask(description) {\n  var newTask = {\n    index: _localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr.length,\n    description: description,\n    completed: false\n  };\n  _localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr.push(newTask);\n  localStorage.setItem(\"storedArr\", JSON.stringify(_localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr));\n  var newListItem = makeTaskElement(newTask);\n  newListItem.id = newTask.index;\n  list.appendChild(newListItem);\n  console.log(_localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr);\n}\n\ninput.addEventListener('keypress', function (e) {\n  if (e.keyCode === 13 && e.target.value !== '') {\n    e.preventDefault();\n    var value = input.value;\n    addTask(value);\n    e.target.value = \"\";\n  }\n}); // rearrange indexes in local storage, task array and assign new IDs\n\nfunction rearange() {\n  if (list.hasChildNodes()) {\n    var children = list.childNodes;\n\n    for (var i = 0; i < _localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr.length; i += 1) {\n      children[i].id = i;\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr[i].index = i;\n    }\n  } // console.log(taskArr);\n\n} // remove li from the list (ul) and from task array\n\nfunction remove(_ref2) {\n  var target = _ref2.target;\n  var li = target.parentElement;\n  var index = parseInt(li.id, 10);\n  li.remove();\n  _localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr.splice(index, 1);\n  rearange(); // localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\n\n  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)();\n  console.log(_localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr);\n}\n\ndocument.body.addEventListener('click', function (e) {\n  if (e.target.classList.contains('item')) {\n    var checkElement = list.querySelector('.active');\n\n    if (checkElement != null) {\n      checkElement.classList.remove('active');\n\n      var _checkElement$childre = _slicedToArray(checkElement.children, 2),\n          _lastChild = _checkElement$childre[1];\n\n      _lastChild.src = _dots_svg__WEBPACK_IMPORTED_MODULE_0__;\n    }\n\n    var current = e.target;\n    current.classList.toggle('active');\n\n    var _current$children = _slicedToArray(current.children, 2),\n        lastChild = _current$children[1];\n\n    lastChild.src = _remove_svg__WEBPACK_IMPORTED_MODULE_1__;\n\n    if (!lastChild.isBound) {\n      lastChild.addEventListener('click', remove);\n      lastChild.isBound = true;\n    }\n  }\n}); // edit task description\n\ndocument.body.addEventListener('keypress', function (e) {\n  if (e.target.classList.contains('edit')) {\n    if (e.keyCode === 13 && e.target.value !== '') {\n      e.preventDefault();\n      var value = e.target.value;\n      e.target.placeholder = value;\n      e.target.value = '';\n      var index = parseInt(e.target.parentElement.parentElement.id, 10);\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr[index].description = value;\n      (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_4__.setLocalStorage)(); // localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\n    }\n  }\n});\nvar populate = function populate() {\n  var listItems = \"\";\n  _localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr.forEach(function (_ref3) {\n    var index = _ref3.index,\n        description = _ref3.description;\n    listItems += \"\\n      <li id='\".concat(index, \"' class=\\\"item\\\">\\n        <label>\\n          <input type=\\\"checkbox\\\">\\n          <input type='text' class=\\\"edit\\\" placeholder='\").concat(description, \"'>\\n        </label>\\n        <img src='\").concat(_dots_svg__WEBPACK_IMPORTED_MODULE_0__, \"'>\\n      </li>\\n    \");\n  });\n  list.innerHTML = listItems;\n\n  if (isListempty()) {\n    _localstorage_js__WEBPACK_IMPORTED_MODULE_4__.taskArr.forEach(function (item, i) {\n      if (item.completed === true) {\n        var li = document.getElementById(\"\".concat(i));\n        li.querySelector('input[type=checkbox]').checked = true;\n      }\n    });\n  } //  console.log(taskArr);\n\n};\n/*\r\n  function makeTaskElement({ description }) {\r\n    const li = document.createElement('li');\r\n    li.className = 'item';\r\n    li.innerHTML = `<label><input type=\"checkbox\"><input class=\"edit\" placeholder='${description}'></input></label><img src='${dots}'>`;\r\n    return li;\r\n  }\r\n\r\n  function addTask(description) {\r\n    const newTask = {\r\n      index: taskArr.length,\r\n      description,\r\n      completed: false,\r\n    };\r\n    if (localStorage.length > 0) {\r\n      let temp = localStorage.getItem('storedArr');\r\n      if (temp) taskArr = JSON.parse(temp);\r\n    }\r\n    taskArr.push(newTask);\r\n    localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\r\n    const newListItem = makeTaskElement(newTask);\r\n    newListItem.id = newTask.index;\r\n    list.appendChild(newListItem);\r\n  }\r\n\r\n  input.addEventListener('keypress', (e) => {\r\n    if (e.keyCode === 13 && e.target.value !== '') {\r\n      e.preventDefault();\r\n      const { value } = input;\r\n      addTask(value);\r\n      e.target.value = \"\";\r\n    }\r\n  });\r\n\r\n  document.body.addEventListener('keypress', (e) => {\r\n    if (e.target.classList.contains('edit')) {\r\n      if (e.keyCode === 13 && e.target.value !== '') {\r\n        e.preventDefault();\r\n        const { value } = e.target;\r\n        e.target.placeholder = value;\r\n        e.target.value = '';\r\n        const index = parseInt(e.target.parentElement.parentElement.id, 10);\r\n        taskArr[index].description = value;\r\n        localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\r\n      }\r\n    }\r\n  });\r\n\r\n  const populate = () => {\r\n    let listItems = \"\";\r\n\r\n    taskArr.forEach(({ index, description }) => {\r\n      listItems += `\r\n        <li id='${index}' class=\"item\">\r\n          <label>\r\n            <input type=\"checkbox\">\r\n            <input type='text' class=\"edit\" placeholder='${description}'>\r\n          </label>\r\n          <img src='${dots}'>\r\n        </li>\r\n      `;\r\n    });\r\n    list.innerHTML = listItems;\r\n  };\r\n\r\n  populate();\r\n\r\n  function remove({ target }) {\r\n    const li = target.parentElement;\r\n    li.remove();\r\n\r\n    let index = parseInt(li.id, 10);\r\n    taskArr.splice(index, 1);\r\n\r\n    for (index; index < taskArr.length; index += 1) {\r\n      taskArr[index].index = index;\r\n      list.children[index].id = index;\r\n    }\r\n\r\n    localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\r\n  }\r\n\r\n  document.body.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('item')) {\r\n      const checkElement = list.querySelector('.active');\r\n\r\n      if (checkElement != null) {\r\n        checkElement.classList.remove('active');\r\n        const [, lastChild] = checkElement.children;\r\n        lastChild.src = dots;\r\n      }\r\n\r\n      const current = e.target;\r\n      current.classList.toggle('active');\r\n      const [, lastChild] = current.children;\r\n      lastChild.src = bin;\r\n\r\n      if (!lastChild.isBound) {\r\n        lastChild.addEventListener('click', remove);\r\n        lastChild.isBound = true;\r\n      }\r\n    }\r\n  });\r\n}\r\n*/\n\n//# sourceURL=webpack://to-do-list/./src/app.js?");

/***/ }),

/***/ "./src/extend.js":
/*!***********************!*\
  !*** ./src/extend.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"taskCompleted\": () => (/* binding */ taskCompleted)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/localstorage.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n // Milstone 3tr\n// variables declaration\n\nvar btn = document.getElementById('btn');\nbtn.addEventListener('click', clearCompleted);\ndocument.body.addEventListener('change', function (_ref) {\n  var target = _ref.target;\n\n  if (target.tagName === 'INPUT' && target.type === 'checkbox') {\n    taskCompleted(target);\n  }\n}); // functionality\n// change event status\n\n/*\r\nif (isListempty()) {\r\ntaskArr.forEach((item, i) => {\r\n  if (item.completed === true) {\r\n    let li = document.getElementById(`${i}`);\r\n    li.querySelector('input[type=checkbox]').checked = true;\r\n  }\r\n});\r\n}\r\n*/\n// add text decoration for completed tasks\n\nfunction taskCompleted(target) {\n  //if (isListempty()) {\n  //  getTaskArray();\n  var taskCompletedLi = target.parentElement.parentElement;\n  var index = parseInt(taskCompletedLi.id, 10);\n\n  if (target.checked) {\n    _localstorage_js__WEBPACK_IMPORTED_MODULE_0__.taskArr[index].completed = true;\n    target.nextElementSibling.style['text-decoration'] = 'line-through';\n  } else {\n    _localstorage_js__WEBPACK_IMPORTED_MODULE_0__.taskArr[index].completed = false;\n    target.nextElementSibling.style['text-decoration'] = 'none';\n  } //}\n\n\n  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(); // localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\n} // clear all completed tasks on button click\n\nfunction clearCompleted() {\n  _localstorage_js__WEBPACK_IMPORTED_MODULE_0__.taskArr = _localstorage_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.filter(function (task) {\n    return task.completed === false;\n  });\n  document.body.querySelectorAll(':checked').forEach(function (_ref2) {\n    var parentElement = _ref2.parentElement;\n    var parent = parentElement.parentElement;\n    parent.remove();\n  });\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.rearange)();\n  (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(); // localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\n} // assign event listeners\n\n/* export function loadCheckboxFunctionality() {\r\n\r\n  let taskArr = [];\r\n\r\n  function getTaskArray() {\r\n    const tasks = localStorage.getItem('storedArr');\r\n    if (tasks) taskArr = JSON.parse(tasks);\r\n  }\r\n\r\n  getTaskArray();\r\n\r\n  const btn = document.getElementById('btn');\r\n\r\n  btn.addEventListener('click', clearCompleted);\r\n\r\n  taskArr.forEach((item, i) => {\r\n    if (item.completed === true) {\r\n      let li = document.getElementById(`${i}`);\r\n      li.querySelector('input[type=checkbox]').checked = true;\r\n    }\r\n  });\r\n\r\n  document.body.addEventListener('change', ({target}) => {\r\n    if (target.tagName === 'INPUT' && target.type === 'checkbox') {\r\n      taskCompleted(target);\r\n    }\r\n  });\r\n\r\n  function taskCompleted(target) {\r\n    getTaskArray();\r\n\r\n    let taskCompletedLi = target.parentElement.parentElement;\r\n    const index = parseInt(taskCompletedLi.id, 10);\r\n\r\n    if (target.checked) {\r\n      taskArr[index].completed = true;\r\n\t  target.nextElementSibling.style['text-decoration'] = 'line-through';\r\n    } else {\r\n      taskArr[index].completed = false;\r\n\t  target.nextElementSibling.style['text-decoration'] = 'none';\r\n    }\r\n\r\n    localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\r\n  }\r\n\r\n  function clearCompleted() {\r\n    taskArr = taskArr.filter((task) => task.completed === false);\r\n\r\n    document.body.querySelectorAll(':checked').forEach(({parentElement}) => {\r\n      const parent = parentElement.parentElement;\r\n      parent.remove();\r\n    });\r\n\r\n    rearange();\r\n  }\r\n\r\n  function rearange() {\r\n    taskArr.forEach((item, i) => {\r\n      let index = parseInt(item.index, 10);\r\n      document.getElementById(`${index}`).id = i;\r\n      item.index = i;\r\n    });\r\n    localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\r\n  }\r\n\r\n}\r\n*/\n\n//# sourceURL=webpack://to-do-list/./src/extend.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.js */ \"./src/localstorage.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extend.js */ \"./src/extend.js\");\n\n\n\n\n\nif (localStorage.length > 0) {\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_2__.populate)();\n}\n/*\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\r\n});\r\n*/\n\n/*\r\nexport function setLocalStorage() {\r\n  localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\r\n}\r\n*/\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage),\n/* harmony export */   \"taskArr\": () => (/* binding */ taskArr)\n/* harmony export */ });\nvar taskArr = [];\nvar temp = localStorage.getItem('storedArr');\nif (temp) taskArr = JSON.parse(temp);\nfunction setLocalStorage() {\n  localStorage.setItem(\"storedArr\", JSON.stringify(taskArr));\n}\n\n//# sourceURL=webpack://to-do-list/./src/localstorage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: rgb(237, 237, 237);\\r\\n}\\r\\n\\r\\nsection {\\r\\n  box-sizing: border-box;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background-color: #fff;\\r\\n  width: 70%;\\r\\n  margin: 10% 0;\\r\\n  padding: 0;\\r\\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\\r\\n}\\r\\n\\r\\n.font * {\\r\\n  font-family: 'Ubuntu', sans-serif;\\r\\n  font-size: 1rem;\\r\\n  line-height: 1.2rem;\\r\\n}\\r\\n\\r\\nli,\\r\\nh1,\\r\\nbutton,\\r\\np {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 20px;\\r\\n  border: 0;\\r\\n  border-bottom: 1px solid rgba(130, 130, 130, 0.3);\\r\\n}\\r\\n\\r\\n.italic {\\r\\n  font-style: italic;\\r\\n  font-weight: 300;\\r\\n  color: rgb(130, 130, 130);\\r\\n}\\r\\n\\r\\n.bold {\\r\\n  font-weight: 700;\\r\\n  color: rgb(130, 130, 130);\\r\\n}\\r\\n\\r\\n.list {\\r\\n  box-sizing: border-box;\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  border: 0;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n#btn {\\r\\n  text-align: center;\\r\\n  border-bottom: 0;\\r\\n  background-color: rgb(237, 237, 237);\\r\\n  color: rgb(130, 130, 130);\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\ninput[type=checkbox] {\\r\\n  transform: scale(1.5);\\r\\n  margin-right: 20px;\\r\\n  border: 2px solid rgba(130, 130, 130, 0.3);\\r\\n}\\r\\n\\r\\n.active {\\r\\n  background-color: rgb(255, 250, 232);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dots.svg":
/*!**********************!*\
  !*** ./src/dots.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a3d379183063bebe2f7.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/dots.svg?");

/***/ }),

/***/ "./src/enter.svg":
/*!***********************!*\
  !*** ./src/enter.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c01cba3955852acb001.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/enter.svg?");

/***/ }),

/***/ "./src/refresh.svg":
/*!*************************!*\
  !*** ./src/refresh.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c19a82cdf07baaf66ac.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/refresh.svg?");

/***/ }),

/***/ "./src/remove.svg":
/*!************************!*\
  !*** ./src/remove.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"462d0b81733b3aaa9eb5.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/remove.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;