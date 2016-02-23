webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*
	* @Author: dmyang
	* @Date:   2016-02-23 16:15:24
	* @Last Modified by:   dmyang
	* @Last Modified time: 2016-02-23 17:30:32
	*/

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_index2.default, null), document.getElementById('app'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
	* @Author: dmyang
	* @Date:   2016-01-13 15:57:37
	* @Last Modified by:   dmyang
	* @Last Modified time: 2016-02-23 17:26:06
	*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Foo = __webpack_require__(4);

	var _Foo2 = _interopRequireDefault(_Foo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Foo2.default;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
	* @Author: dmyang
	* @Date:   2016-02-23 15:46:20
	* @Last Modified by:   dmyang
	* @Last Modified time: 2016-02-23 17:29:28
	*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Foo = _react2.default.createClass({
	    displayName: 'Foo',
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            'Foo'
	        );
	    }
	});

	exports.default = Foo;

/***/ }
]);