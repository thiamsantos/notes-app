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

	var _createNoteNode = __webpack_require__(4);

	var _createNoteNode2 = _interopRequireDefault(_createNoteNode);

	var _submitNote = __webpack_require__(12);

	var _submitNote2 = _interopRequireDefault(_submitNote);

	var _clearForm = __webpack_require__(13);

	var _clearForm2 = _interopRequireDefault(_clearForm);

	var _nodes = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _utils.initNotesStorage)();

	(0, _getAllNotes2.default)().forEach(function (note) {
	  (0, _render2.default)(_nodes.notesListNode, (0, _createNoteNode2.default)(note));
	});

	_nodes.newNoteButtonNode.addEventListener('click', function () {
	  _nodes.formSectionNode.classList.add('show');
	  _nodes.noteTitleNode.focus();
	});

	_nodes.noteCancelNode.addEventListener('click', function () {
	  _nodes.formSectionNode.classList.remove('show');
	  (0, _clearForm2.default)(_nodes.noteTitleNode, _nodes.noteContentNode);
	});

	// noteTitleNode.addEventListener('keydown', e => {
	//   if (e.keyCode === 'Tab') {
	//     console.log(e)
	//     noteContentNode.focus()
	//   }
	// })

	_nodes.titleFormNode.addEventListener('submit', function (e) {
	  e.preventDefault();
	});

	_nodes.noteSubmitNode.addEventListener('click', _submitNote2.default);

	var serviceWorkerAvailable = 'serviceWorker' in navigator;
	var useHTTPS = window.location.protocol === 'https:';
	var isLocalhost = window.location.hostname === 'localhost';

	if (serviceWorkerAvailable && (useHTTPS || isLocalhost)) {
	  navigator.serviceWorker.register('/sw.js', {
	    scope: '/notes-app/'
	  }).then(function (reg) {
	    console.info(reg);
	  }).catch(function (err) {
	    console.err(err);
	  });
	}

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.initNotesStorage = undefined;

	var _createNote = __webpack_require__(14);

	var _createNote2 = _interopRequireDefault(_createNote);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initNotesStorage = exports.initNotesStorage = function initNotesStorage() {
	  if (!localStorage.notes) {
	    localStorage.notes = JSON.stringify([(0, _createNote2.default)('First note', 'Click to edit the note or create a new one')]);
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _editNote = __webpack_require__(5);

	var _editNote2 = _interopRequireDefault(_editNote);

	var _removeNote = __webpack_require__(8);

	var _removeNote2 = _interopRequireDefault(_removeNote);

	var _sliceNote = __webpack_require__(10);

	var _sliceNote2 = _interopRequireDefault(_sliceNote);

	var _createNode = __webpack_require__(11);

	var _createNode2 = _interopRequireDefault(_createNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var createContentNode = function createContentNode(content) {
	  return (0, _createNode2.default)('p').addClass('note-content').text(content).done();
	};

	var removeIcon = function removeIcon() {
	  return '<svg class="icon">\n    <use xlink:href="src/img/icons.svg#remove"></use>\n  </svg>';
	};

	var createTitleNode = function createTitleNode(title) {
	  return (0, _createNode2.default)('h2').addClass('note-title').text(title).done();
	};

	var createRemoveButtonNode = function createRemoveButtonNode() {
	  return (0, _createNode2.default)('button').addClass('note-remove').inner(removeIcon()).on('click', _removeNote2.default).done();
	};

	var createNoteNode = function createNoteNode(title, content) {
	  return (0, _createNode2.default)('header').addClass('note').append(createTitleNode(title)).append(createContentNode((0, _sliceNote2.default)(content))).on('click', _editNote2.default).done();
	};

	exports.default = function (note) {
	  return (0, _createNode2.default)('li').addClass('note-wrapper').setId(note.id).append(createNoteNode(note.title, note.content)).append(createRemoveButtonNode()).done();
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = editNote;

	var _nodes = __webpack_require__(6);

	var _manageNote = __webpack_require__(7);

	var _getAllNotes = __webpack_require__(2);

	var _getAllNotes2 = _interopRequireDefault(_getAllNotes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function editNote() {
	  var id = (0, _manageNote.getId)(this.parentNode);
	  _nodes.formSectionNode.setAttribute('data-edit', id);
	  var allNotes = (0, _getAllNotes2.default)();
	  var note = allNotes.filter(function (note) {
	    return note.id === id;
	  })[0];

	  _nodes.noteTitleNode.value = note.title;
	  _nodes.noteContentNode.value = note.content;

	  _nodes.formSectionNode.classList.add('show');
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $ = exports.$ = document.getElementById.bind(document);

	var notesListNode = exports.notesListNode = $('js-notes-list');
	var noteSubmitNode = exports.noteSubmitNode = $('js-submit-note');
	var noteCancelNode = exports.noteCancelNode = $('js-cancel-note');
	var noteTitleNode = exports.noteTitleNode = $('js-form-title');
	var noteContentNode = exports.noteContentNode = $('js-form-content');
	var newNoteButtonNode = exports.newNoteButtonNode = $('js-new-note');
	var formSectionNode = exports.formSectionNode = $('js-form-section');
	var titleFormNode = exports.titleFormNode = $('js-title-form');

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = removeNote;

	var _manageNote = __webpack_require__(7);

	var _saveNotes = __webpack_require__(9);

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
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (notes) {
	  localStorage.notes = JSON.stringify(notes);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (content) {
	  if (content.length >= 43) {
	    return content.slice(0, 42) + "...";
	  }
	  return content;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Node = function () {
	  function Node(element) {
	    _classCallCheck(this, Node);

	    this.element = document.createElement(element);
	  }

	  _createClass(Node, [{
	    key: "addClass",
	    value: function addClass(className) {
	      this.element.classList.add(className);
	      return this;
	    }
	  }, {
	    key: "text",
	    value: function text(content) {
	      this.element.textContent = content;
	      return this;
	    }
	  }, {
	    key: "on",
	    value: function on(event, cb) {
	      this.element.addEventListener(event, cb);
	      return this;
	    }
	  }, {
	    key: "append",
	    value: function append(node) {
	      this.element.appendChild(node);
	      return this;
	    }
	  }, {
	    key: "inner",
	    value: function inner(html) {
	      this.element.innerHTML = html;
	      return this;
	    }
	  }, {
	    key: "setId",
	    value: function setId(id) {
	      this.element.id = id;
	      return this;
	    }
	  }, {
	    key: "done",
	    value: function done() {
	      return this.element;
	    }
	  }]);

	  return Node;
	}();

	exports.default = function (element) {
	  return new Node(element);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _clearForm = __webpack_require__(13);

	var _clearForm2 = _interopRequireDefault(_clearForm);

	var _render = __webpack_require__(1);

	var _createNoteNode = __webpack_require__(4);

	var _createNoteNode2 = _interopRequireDefault(_createNoteNode);

	var _nodes = __webpack_require__(6);

	var _createNote = __webpack_require__(14);

	var _createNote2 = _interopRequireDefault(_createNote);

	var _getAllNotes = __webpack_require__(2);

	var _getAllNotes2 = _interopRequireDefault(_getAllNotes);

	var _saveNotes = __webpack_require__(9);

	var _saveNotes2 = _interopRequireDefault(_saveNotes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  var newContent = _nodes.noteContentNode.value;
	  var newTitle = _nodes.noteTitleNode.value;
	  var allNotes = (0, _getAllNotes2.default)();

	  if (_nodes.formSectionNode.hasAttribute('data-edit')) {
	    var _ret = function () {
	      var id = Number(_nodes.formSectionNode.getAttribute('data-edit'));
	      var presentNote = allNotes.filter(function (note) {
	        return note.id === id;
	      })[0];
	      var isContentEqual = newContent === presentNote.content;
	      var isTitleEqual = newTitle === presentNote.title;

	      if (isContentEqual && isTitleEqual) {
	        (0, _clearForm2.default)(_nodes.noteTitleNode, _nodes.noteContentNode);
	        _nodes.formSectionNode.classList.remove('show');
	        return {
	          v: false
	        };
	      }

	      (0, _nodes.$)(id).remove();
	      allNotes = allNotes.filter(function (note) {
	        return note.id !== id;
	      });
	      _nodes.formSectionNode.removeAttribute('data-edit');
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  } else {
	    _nodes.noteTitleNode.focus();
	  }

	  var newNote = (0, _createNote2.default)(newTitle, newContent);
	  (0, _saveNotes2.default)([newNote].concat(allNotes));
	  (0, _render.renderBefore)(_nodes.notesListNode, (0, _createNoteNode2.default)(newNote));
	  (0, _clearForm2.default)(_nodes.noteTitleNode, _nodes.noteContentNode);
	  _nodes.formSectionNode.classList.remove('show');
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  args.forEach(function (formField) {
	    formField.value = '';
	  });
	};

/***/ },
/* 14 */
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

/***/ }
/******/ ]);