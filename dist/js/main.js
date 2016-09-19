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

	var _getAllNotes = __webpack_require__(18);

	var _getAllNotes2 = _interopRequireDefault(_getAllNotes);

	var _utils = __webpack_require__(3);

	var _createNote = __webpack_require__(19);

	var _createNote2 = _interopRequireDefault(_createNote);

	var _createNode = __webpack_require__(13);

	var _createNode2 = _interopRequireDefault(_createNode);

	var _saveNotes = __webpack_require__(17);

	var _saveNotes2 = _interopRequireDefault(_saveNotes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = document.getElementById.bind(document);

	var notesListNode = $('notes');
	var noteFormNode = $('new-note-form');
	var noteContentNode = $('new-note-content');

	(0, _utils.initNotesStorage)();

	(0, _getAllNotes2.default)().forEach(function (note) {
	  (0, _render2.default)(notesListNode, (0, _createNode2.default)(note));
	});

	noteFormNode.addEventListener('submit', function (e) {
	  e.preventDefault();
	  var newNote = (0, _createNote2.default)(noteContentNode.value);
	  (0, _saveNotes2.default)((0, _getAllNotes2.default)().concat(newNote));
	  (0, _render2.default)(notesListNode, (0, _createNode2.default)(newNote));
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (node, note) {
	  node.appendChild(note);
	};

/***/ },
/* 2 */,
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _editNote = __webpack_require__(14);

	var _editNote2 = _interopRequireDefault(_editNote);

	var _removeNote = __webpack_require__(15);

	var _removeNote2 = _interopRequireDefault(_removeNote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createNode = document.createElement.bind(document);

	var createNoteNode = function createNoteNode(content) {
	  var noteNode = createNode('p');
	  noteNode.classList.add('note');
	  noteNode.textContent = content;
	  noteNode.addEventListener('click', _editNote2.default);

	  return noteNode;
	};

	var createButtonNode = function createButtonNode(action) {
	  var buttonNode = createNode('button');
	  buttonNode.classList.add('note-' + action);
	  buttonNode.textContent = action;

	  if (action === 'remove') {
	    buttonNode.addEventListener('click', _removeNote2.default);
	    return buttonNode;
	  }

	  return buttonNode;
	};

	exports.default = function (note) {
	  var noteWrapper = createNode('li');
	  noteWrapper.classList.add('note-wrapper');
	  noteWrapper.id = note.id;

	  noteWrapper.appendChild(createNoteNode(note.content));
	  noteWrapper.appendChild(createButtonNode('remove'));

	  return noteWrapper;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = editNote;

	var _manageNote = __webpack_require__(16);

	var _saveNotes = __webpack_require__(17);

	var _saveNotes2 = _interopRequireDefault(_saveNotes);

	var _getAllNotes = __webpack_require__(18);

	var _getAllNotes2 = _interopRequireDefault(_getAllNotes);

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

	  this.textContent = newContent;

	  (0, _saveNotes2.default)(modifiedNotes);
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeNote;

	var _manageNote = __webpack_require__(16);

	var _saveNotes = __webpack_require__(17);

	var _saveNotes2 = _interopRequireDefault(_saveNotes);

	var _getAllNotes = __webpack_require__(18);

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
/* 16 */
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
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (notes) {
	  localStorage.notes = JSON.stringify(notes);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return JSON.parse(localStorage.notes);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (content) {
	  return {
	    content: content,
	    id: Date.now()
	  };
	};

/***/ }
/******/ ]);