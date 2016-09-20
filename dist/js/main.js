/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _render = __webpack_require__(1);

	var _render2 = _interopRequireDefault(_render);

	var _getAllNotes = __webpack_require__(2);

	var _getAllNotes2 = _interopRequireDefault(_getAllNotes);

	var _utils = __webpack_require__(3);

	var _createNote = __webpack_require__(4);

	var _createNote2 = _interopRequireDefault(_createNote);

	var _createNode = __webpack_require__(5);

	var _createNode2 = _interopRequireDefault(_createNode);

	var _saveNotes = __webpack_require__(8);

	var _saveNotes2 = _interopRequireDefault(_saveNotes);

	var _sliceNote = __webpack_require__(10);

	var _sliceNote2 = _interopRequireDefault(_sliceNote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = document.getElementById.bind(document);

	var notesListNode = $('notes');
	var noteSubmitNode = $('js-submit-note');
	var noteTitleNode = $('js-form-title');
	var noteContentNode = $('js-form-content');
	var newNoteButtonNode = $('js-new-note');
	var formSection = $('js-form-section');

	(0, _utils.initNotesStorage)();

	(0, _getAllNotes2.default)().forEach(function (note) {
	  (0, _render2.default)(notesListNode, (0, _createNode2.default)((0, _sliceNote2.default)(note)));
	});

	newNoteButtonNode.addEventListener('click', function () {
	  formSection.classList.add('show');
	});

	noteSubmitNode.addEventListener('click', function () {
	  var newNote = (0, _createNote2.default)(noteTitleNode.value, noteContentNode.value);
	  (0, _saveNotes2.default)([newNote].concat((0, _getAllNotes2.default)()));
	  (0, _render.renderBefore)(notesListNode, (0, _createNode2.default)((0, _sliceNote2.default)(newNote)));
	  noteTitleNode.value = '';
	  noteContentNode.value = '';
	  formSection.classList.remove('show');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var renderBefore = exports.renderBefore = function renderBefore(referenceNode, newNode) {
	  referenceNode.insertBefore(newNode, referenceNode.firstChild);
	};

	exports.default = function (node, note) {
	  node.appendChild(note);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return JSON.parse(localStorage.notes);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initNotesStorage = exports.initNotesStorage = function initNotesStorage() {
	  if (!localStorage.notes) {
	    localStorage.notes = JSON.stringify([]);
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (title, content) {
	  return {
	    title: title,
	    content: content,
	    id: Date.now()
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _editNote = __webpack_require__(6);

	var _editNote2 = _interopRequireDefault(_editNote);

	var _removeNote = __webpack_require__(9);

	var _removeNote2 = _interopRequireDefault(_removeNote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createNode = document.createElement.bind(document);

	var createContentNode = function createContentNode(content) {
	  var contentNode = createNode('p');
	  contentNode.classList.add('note-content');
	  contentNode.textContent = content;

	  return contentNode;
	};

	var removeIcon = function removeIcon() {
	  return '<svg class="icon">\n    <use xlink:href="src/img/icons.svg#remove"></use>\n  </svg>';
	};

	var createTitleNode = function createTitleNode(title) {
	  var titleNode = createNode('h2');
	  titleNode.classList.add('note-title');
	  titleNode.textContent = title;
	  return titleNode;
	};

	var createButtonNode = function createButtonNode(action) {
	  var buttonNode = createNode('button');
	  buttonNode.classList.add('note-' + action);

	  if (action === 'remove') {
	    buttonNode.innerHTML = removeIcon();
	    buttonNode.addEventListener('click', _removeNote2.default);
	    return buttonNode;
	  }

	  return buttonNode;
	};

	var createNoteNode = function createNoteNode(title, content) {
	  var noteNode = createNode('header');
	  noteNode.classList.add('note');
	  noteNode.appendChild(createTitleNode(title));
	  noteNode.appendChild(createContentNode(content));
	  // noteNode.addEventListener('click', editNote)

	  return noteNode;
	};

	exports.default = function (note) {
	  var noteWrapper = createNode('li');
	  noteWrapper.classList.add('note-wrapper');
	  noteWrapper.id = note.id;

	  noteWrapper.appendChild(createNoteNode(note.title, note.content));
	  noteWrapper.appendChild(createButtonNode('remove'));

	  return noteWrapper;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = editNote;

	var _manageNote = __webpack_require__(7);

	var _saveNotes = __webpack_require__(8);

	var _saveNotes2 = _interopRequireDefault(_saveNotes);

	var _getAllNotes = __webpack_require__(2);

	var _getAllNotes2 = _interopRequireDefault(_getAllNotes);

	var _sliceNote = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function editNote() {
	  var id = (0, _manageNote.getId)(this.parentNode);

	  var allNotes = (0, _getAllNotes2.default)();

	  var note = allNotes.filter(function (note) {
	    return note.id === id;
	  })[0];
	  var newContent = prompt('', note.content);
	  var mapNotes = (0, _manageNote.modifyNote)(id, 'content', newContent);

	  var modifiedNotes = allNotes.map(mapNotes);

	  if (this.textContent !== newContent) {
	    this.textContent = (0, _sliceNote.sliceNoteContent)(newContent);
	  }

	  (0, _saveNotes2.default)(modifiedNotes);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modifyNote = modifyNote;
	function modifyNote(id, attribute, newValue) {
	  return function (note) {
	    if (note.id === id) {
	      note[attribute] = newValue;
	    }
	    return note;
	  };
	}

	var getId = exports.getId = function getId(node) {
	  return Number(node.id);
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (notes) {
	  localStorage.notes = JSON.stringify(notes);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeNote;

	var _manageNote = __webpack_require__(7);

	var _saveNotes = __webpack_require__(8);

	var _saveNotes2 = _interopRequireDefault(_saveNotes);

	var _getAllNotes = __webpack_require__(2);

	var _getAllNotes2 = _interopRequireDefault(_getAllNotes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function removeNote() {
	  var parentNode = this.parentNode;
	  var id = (0, _manageNote.getId)(parentNode);
	  var notes = (0, _getAllNotes2.default)().filter(function (note) {
	    return note.id !== id;
	  });

	  (0, _saveNotes2.default)(notes);
	  parentNode.remove();
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var sliceNoteContent = exports.sliceNoteContent = function sliceNoteContent(content) {
	  return content.slice(0, 42) + "...";
	};

	exports.default = function (note) {
	  return {
	    title: note.title,
	    content: sliceNoteContent(note.content),
	    id: note.id
	  };
	};

/***/ }
/******/ ]);