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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/state */ \"./src/project/state.js\");\n/* harmony import */ var _project_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/render */ \"./src/project/render.js\");\n/* harmony import */ var _task_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task/render */ \"./src/task/render.js\");\n/* harmony import */ var _task_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task/state */ \"./src/task/state.js\");\n\n\n\n\n\n\n\nlet projectBtn = document.getElementById(\"projectBtn\");\nlet projectSubmitBtn = document.getElementById(\"projectSubmitBtn\");\nlet taskBtn = document.getElementById(\"taskBtn\");\nlet taskSubmitBtn = document.getElementById(\"taskSubmitBtn\");\nlet clearBtn = document.getElementById(\"clearBtn\");\n\n// Makes project modal appear\nprojectBtn.addEventListener(\"click\", () => {\n  (0,_project__WEBPACK_IMPORTED_MODULE_0__.projectModal)();\n});\n\nconst renderTaskWithHandler = (project) => {\n  // This can be confusing. When you check a task, you render the tasks once again\n  const checkTaskHandler = (task, isChecked) => {\n    task.checked = isChecked;\n    (0,_task_render__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(project, checkTaskHandler);\n  };\n  (0,_task_render__WEBPACK_IMPORTED_MODULE_4__.renderTasks)(project, checkTaskHandler);\n};\n\n// Submit button for project modal\nprojectSubmitBtn.addEventListener(\"click\", () => {\n  (0,_project__WEBPACK_IMPORTED_MODULE_0__.submitProject)();\n  (0,_project_render__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(_project_state__WEBPACK_IMPORTED_MODULE_2__.state.projects, (project) => {\n    (0,_project_state__WEBPACK_IMPORTED_MODULE_2__.selectProject)(project);\n    (0,_project_render__WEBPACK_IMPORTED_MODULE_3__.renderSelectedProject)(_project_state__WEBPACK_IMPORTED_MODULE_2__.state.selectedProjectId, project);\n    renderTaskWithHandler(project);\n  });\n});\n\n// Makes task modal appear\ntaskBtn.addEventListener(\"click\", () => {\n  (0,_task__WEBPACK_IMPORTED_MODULE_1__.taskModal)();\n});\n\n// Submit button in task modal\ntaskSubmitBtn.addEventListener(\"click\", () => {\n  const project = (0,_project_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedProject)();\n\n  (0,_task__WEBPACK_IMPORTED_MODULE_1__.submitTask)(project);\n  renderTaskWithHandler(project);\n});\n\nclearBtn.addEventListener(\"click\", () => {\n  const project = (0,_project_state__WEBPACK_IMPORTED_MODULE_2__.getSelectedProject)();\n  (0,_task_state__WEBPACK_IMPORTED_MODULE_5__.clearTasks)(project);\n  renderTaskWithHandler(project);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectModal\": () => (/* binding */ projectModal),\n/* harmony export */   \"submitProject\": () => (/* binding */ submitProject)\n/* harmony export */ });\n/* harmony import */ var _project_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project/state */ \"./src/project/state.js\");\n\n\nfunction project(title) {\n  this.title = title;\n}\n\nconst projectModal = () => {\n  let modal = document.querySelector(\"#projectModal\");\n  modal.showModal();\n};\n\nconst submitProject = () => {\n  // Grabbing the value of the input\n  let projectName = document.getElementById(\"projectName\");\n  let storedProjectName = new project(projectName.value);\n\n  //Storing info into object\n  let projectInfo = {\n    title: storedProjectName.title,\n    element: \"\",\n    tasks: [],\n  };\n  (0,_project_state__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectInfo);\n\n  //Clearing the input\n  projectName.value = \"\";\n};\n\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/project/render.js":
/*!*******************************!*\
  !*** ./src/project/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"renderSelectedProject\": () => (/* binding */ renderSelectedProject)\n/* harmony export */ });\n/* harmony import */ var _task_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task/render */ \"./src/task/render.js\");\n\n\nlet projectDivContainer = document.getElementsByClassName(\"projectDiv\")[0];\nlet rightsideTitle = document.getElementsByClassName(\n  \"rightside-header-title\"\n)[0];\n\nconst clearProjects = () => {\n  projectDivContainer.innerText = \"\";\n};\n\nconst renderProjects = (projects, onProjectClick) => {\n  // Clears my project div\n  clearProjects();\n\n  // Loop for adding projects to HTML page\n  for (let i = 0; i < projects.length; i++) {\n    const project = projects[i];\n    const projectElement = document.createElement(\"div\");\n\n    projectElement.setAttribute(\"data-id\", i);\n    projectElement.innerText = project.title;\n\n    projectDivContainer.appendChild(projectElement);\n\n    projectElement.addEventListener(\"click\", () => {\n      onProjectClick(project);\n    });\n  }\n};\n\nconst renderSelectedProject = (index, project) => {\n  const selectedProject = document.querySelector(\".active\");\n\n  if (selectedProject) {\n    selectedProject.classList.remove(\"active\");\n  }\n\n  const projectElement = document.querySelector(`[data-id='${index}']`);\n\n  if (projectElement) {\n    projectElement.classList.add(\"active\");\n  }\n\n  rightsideTitle.innerText = project.title;\n};\n\n\n//# sourceURL=webpack:///./src/project/render.js?");

/***/ }),

/***/ "./src/project/state.js":
/*!******************************!*\
  !*** ./src/project/state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"getSelectedProject\": () => (/* binding */ getSelectedProject),\n/* harmony export */   \"selectProject\": () => (/* binding */ selectProject),\n/* harmony export */   \"state\": () => (/* binding */ state)\n/* harmony export */ });\nconst state = {\n  projects: [],\n  selectedProjectId: undefined,\n};\n\nconst addProject = (project) => {\n  state.projects.push(project);\n};\n\nconst selectProject = (project) => {\n  const index = state.projects.findIndex((p) => p === project);\n\n  state.selectedProjectId = index;\n};\n\nconst getSelectedProject = () => {\n  if (state.selectedProjectId === undefined) {\n    return;\n  }\n\n  return state.projects[state.selectedProjectId];\n};\n\nconst deleteProject = (project) => {\n  const index = state.projects.find((p) => p === project);\n\n  state.projects.splice(index, 1);\n};\n\n\n//# sourceURL=webpack:///./src/project/state.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitTask\": () => (/* binding */ submitTask),\n/* harmony export */   \"taskModal\": () => (/* binding */ taskModal)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n// constructor for new tasks\nfunction task(title, description) {\n  (this.title = title),\n    (this.description = description),\n    (this.checked = false);\n}\n\nconst taskModal = () => {\n  let modal = document.querySelector(\"#taskModal\");\n  modal.showModal();\n};\n\nconst submitTask = (project) => {\n  // Grabs the value of these inputs and creates task with my constructor\n  let taskName = document.getElementById(\"taskName\");\n  let taskDescription = document.getElementById(\"taskDescription\");\n  let taskInfo = new task(taskName.value, taskDescription.value);\n  console.log(taskInfo);\n\n  project.tasks.push(taskInfo);\n\n  // Clears input values\n  taskName.value = \"\";\n  taskDescription.value = \"\";\n};\n\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/task/render.js":
/*!****************************!*\
  !*** ./src/task/render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTasks\": () => (/* binding */ renderTasks)\n/* harmony export */ });\nlet taskDivContainer = document.getElementsByClassName(\"taskDiv\")[0];\n\nconst clearTaskDiv = () => {\n  taskDivContainer.innerText = \"\";\n};\n\nconst renderTasks = (project, onCheck) => {\n  // Clears my task div\n  clearTaskDiv();\n\n  // For loop for searching the active projects tasks and then adding them to page\n  for (let i in project.tasks) {\n    let task = project.tasks[i];\n    let taskElement = document.createElement(\"div\");\n    let taskTitle = document.createElement(\"h5\");\n    let taskDescription = document.createElement(\"p\");\n    let checkbox = document.createElement(\"input\");\n\n    taskDescription.innerText = task.description;\n    taskTitle.innerText = task.title;\n\n    taskElement.appendChild(taskTitle);\n    taskElement.appendChild(taskDescription);\n    taskElement.appendChild(checkbox);\n    taskElement.setAttribute(\"class\", \"taskDetails\");\n    taskElement.setAttribute(\"data-id\", i);\n\n    taskTitle.setAttribute(\"class\", \"taskTitle\");\n\n    taskDescription.setAttribute(\"class\", \"taskDescription\");\n\n    if (task.checked) {\n      checkbox.setAttribute(\"checked\", task.checked);\n    }\n    checkbox.setAttribute(\"type\", \"checkbox\");\n    checkbox.setAttribute(\"class\", \"checkbox\");\n    checkbox.setAttribute(\"data-id\", i);\n    checkbox.addEventListener(\"change\", (event) => {\n      onCheck(task, event.target.checked);\n    });\n\n    taskDivContainer.appendChild(taskElement);\n  }\n};\n\n\n//# sourceURL=webpack:///./src/task/render.js?");

/***/ }),

/***/ "./src/task/state.js":
/*!***************************!*\
  !*** ./src/task/state.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearTasks\": () => (/* binding */ clearTasks)\n/* harmony export */ });\nconst clearTasks = (project) => {\n  const checkedTasks = project.tasks.filter((task) => task.checked);\n  const taskIndices = checkedTasks.map((task) =>\n    project.tasks.findIndex((t) => t === task)\n  );\n\n  taskIndices.forEach((index) => {\n    project.tasks.splice(index, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///./src/task/state.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;