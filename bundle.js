require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = font;

function font(fontProps) {

	var style = {};
	if (fontProps === undefined) return style;
	style = fontProps;
	if (fontProps.bold) style['fontWeight'] = 'bold';
	if (fontProps.italic) style['fontStyle'] = 'italic';
	if (fontProps.underline) style['borderBottom'] = '1px dashed #999';
	return style;
}

module.exports = exports['default'];


},{}],2:[function(require,module,exports){
'use strict';

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} one
 * @param {function} two
 * @returns {function|null}
 */
function createChainedFunction(one, two) {
  var hasOne = typeof one === 'function';
  var hasTwo = typeof two === 'function';

  if (!hasOne && !hasTwo) {
    return null;
  }
  if (!hasOne) {
    return two;
  }
  if (!hasTwo) {
    return one;
  }

  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

module.exports = createChainedFunction;


},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesFont = require('../styles/font');

var _stylesFont2 = _interopRequireDefault(_stylesFont);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var Flipper = (function (_React$Component) {
	function Flipper(props) {
		_classCallCheck(this, Flipper);

		_get(Object.getPrototypeOf(Flipper.prototype), 'constructor', this).call(this, props);
		this.state = { flipped: false };
	}

	_inherits(Flipper, _React$Component);

	_createClass(Flipper, [{
		key: 'flip',
		value: function flip() {
			this.setState({ flipped: !this.state.flipped });
		}
	}, {
		key: 'render',
		value: function render() {
			var style = {};
			if (this.props.width !== undefined) style['width'] = this.props.width;
			if (this.props.height !== undefined) style['height'] = this.props.height;

			var front = this.props.front || {};
			var frontStyle = (0, _stylesFont2['default'])(front.font);
			if (front.bgColor !== undefined) frontStyle['backgroundColor'] = front.bgColor;

			var back = this.props.back || {};
			var backStyle = (0, _stylesFont2['default'])(back.font);
			if (back.bgColor !== undefined) backStyle['backgroundColor'] = back.bgColor;

			return _react2['default'].createElement(
				'div',
				{ style: style, className: 'flipper-container ' + this.props.orientation, onClick: this.flip.bind(this) },
				_react2['default'].createElement(
					'div',
					{ className: 'flipper' + (this.state.flipped ? ' flipped' : '') },
					_react2['default'].createElement(
						Front,
						{ style: frontStyle },
						front.content
					),
					_react2['default'].createElement(
						Back,
						{ style: backStyle },
						back.content
					)
				)
			);
		}
	}]);

	return Flipper;
})(_react2['default'].Component);

exports['default'] = Flipper;

var Front = (function (_React$Component2) {
	function Front() {
		_classCallCheck(this, Front);

		if (_React$Component2 != null) {
			_React$Component2.apply(this, arguments);
		}
	}

	_inherits(Front, _React$Component2);

	_createClass(Front, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement('div', { className: 'front tile', style: this.props.style, dangerouslySetInnerHTML: { __html: this.props.children } });
		}
	}]);

	return Front;
})(_react2['default'].Component);

var Back = (function (_React$Component3) {
	function Back() {
		_classCallCheck(this, Back);

		if (_React$Component3 != null) {
			_React$Component3.apply(this, arguments);
		}
	}

	_inherits(Back, _React$Component3);

	_createClass(Back, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement('div', { className: 'back tile', style: this.props.style, dangerouslySetInnerHTML: { __html: this.props.children } });
		}
	}]);

	return Back;
})(_react2['default'].Component);

module.exports = exports['default'];


},{"../styles/font":1,"react":undefined,"underscore":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesFont = require('../styles/font');

var _stylesFont2 = _interopRequireDefault(_stylesFont);

var HtmlBox = (function (_React$Component) {
    function HtmlBox() {
        _classCallCheck(this, HtmlBox);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(HtmlBox, _React$Component);

    _createClass(HtmlBox, [{
        key: 'render',
        value: function render() {
            //experimental - columnCount, counterReset
            var style = (0, _stylesFont2['default'])(this.props.font);
            if (this.props.columnCount !== undefined) style.WebkitColumnCount = this.props.columnCount;
            if (this.props.counterReset !== undefined) style.counterReset = 'item ' + (this.props.counterReset - 1);
            return _react2['default'].createElement('div', { className: 'nestedList', style: style, dangerouslySetInnerHTML: { __html: this.props.content } });
        }
    }]);

    return HtmlBox;
})(_react2['default'].Component);

exports['default'] = HtmlBox;
module.exports = exports['default'];


},{"../styles/font":1,"react":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ImageBox = (function (_React$Component) {
	function ImageBox() {
		_classCallCheck(this, ImageBox);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(ImageBox, _React$Component);

	_createClass(ImageBox, [{
		key: 'render',
		value: function render() {
			var style = {};

			var size = this.props.margin || {};

			style.marginTop = size.top;
			style.marginRight = size.right;
			style.marginBottom = size.bottom;
			style.marginLeft = size.left;

			//padding
			size = this.props.padding || {};
			style.paddingTop = size.top;
			style.paddingRight = size.right;
			style.paddingBottom = size.bottom;
			style.paddingLeft = size.left;

			//border
			var border = this.props.border || {};
			style.borderWidth = border.width;
			style.borderRadius = border.radius;
			style.borderColor = border.color;
			style.borderStyle = border.style;

			//size
			style.height = this.props.height || 0;
			style.width = this.props.width || 0;

			return _react2['default'].createElement('img', { src: this.props.url, style: style, width: style.width, height: style.height });
		}
	}]);

	return ImageBox;
})(_react2['default'].Component);

exports['default'] = ImageBox;
module.exports = exports['default'];


},{"react":undefined}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesFont = require('../styles/font');

var _stylesFont2 = _interopRequireDefault(_stylesFont);

var ImagePanel = (function (_React$Component) {
	function ImagePanel() {
		_classCallCheck(this, ImagePanel);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(ImagePanel, _React$Component);

	_createClass(ImagePanel, [{
		key: 'render',
		value: function render() {
			var style = (0, _stylesFont2['default'])(this.props.font);
			//margin
			var size = this.props.margin || {};
			style.marginTop = size.top;
			style.marginRight = size.right;
			style.marginBottom = size.bottom;
			style.marginLeft = size.left;

			//padding
			size = this.props.padding || {};
			style.paddingTop = size.top;
			style.paddingRight = size.right;
			style.paddingBottom = size.bottom;
			style.paddingLeft = size.left;

			//border
			var border = this.props.border || {};
			style.borderWidth = border.width;
			style.borderRadius = border.radius;
			style.borderColor = border.color;
			style.borderStyle = border.style;

			//size
			style.height = this.props.height || 0;
			style.width = this.props.width || 0;

			if (this.props.bgColor !== undefined) style.backgroundColor = this.props.bgColor;

			var pStyle = {};
			var float = this.props.imageAlign === 'topRight' || this.props.imageAlign === 'bottomRight' ? 'right' : 'left';
			var bottom = this.props.imageAlign === 'bottomLeft' || this.props.imageAlign === 'bottomRight' ? true : false;

			var image = this.props.image || {};

			var imgStyle = { float: float, clear: float };
			if (!!!image.width && !!!image.height) {
				imgStyle.height = '50%';
			};
			if (!!image.width) imgStyle.width = image.width;
			if (!!image.height) imgStyle.height = image.height;

			//margin
			size = image.margin || {};
			imgStyle.marginTop = size.top;
			imgStyle.marginRight = size.right;
			imgStyle.marginBottom = size.bottom;
			imgStyle.marginLeft = size.left;

			//padding
			size = image.padding || {};
			imgStyle.paddingTop = size.top;
			imgStyle.paddingRight = size.right;
			imgStyle.paddingBottom = size.bottom;
			imgStyle.paddingLeft = size.left;

			//border
			border = image.border || {};
			imgStyle.borderWidth = border.width;
			imgStyle.borderRadius = border.radius;
			imgStyle.borderColor = border.color;
			imgStyle.borderStyle = border.style;

			var spacerStyle = { height: 0 };
			if (bottom) {
				spacerStyle = { float: float, width: 0 };

				var imgHeight = image.height;
				var boxHeight = this.props.height - 2 * (this.props.border.width || 0);
				if (boxHeight !== undefined) {
					if (imgHeight === undefined) imgHeight = parseInt(image.height / 2, 10);

					// equal to the height of the content minus the height of the image and minus some margin.
					spacerStyle.height = boxHeight - imgHeight - (image.margin !== undefined ? image.margin.bottom || 0 + image.margin.top || 0 : 0) - ((this.props.padding.top || 0) + (this.props.padding.bottom || 0));
				}
			}
			return _react2['default'].createElement(
				'div',
				{ style: style },
				_react2['default'].createElement('div', { style: spacerStyle }),
				_react2['default'].createElement('img', { src: image.url, style: imgStyle }),
				_react2['default'].createElement('div', { style: pStyle, dangerouslySetInnerHTML: { __html: this.props.content } })
			);
		}
	}]);

	return ImagePanel;
})(_react2['default'].Component);

exports['default'] = ImagePanel;
;
module.exports = exports['default'];


},{"../styles/font":1,"react":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _stylesFont = require('../styles/font');

var _stylesFont2 = _interopRequireDefault(_stylesFont);

var React = require('react');
var BindToMixin = require('react-binding');
var chainedFunction = require('../utils/createChainedFunction');
var TangleNumberText = require('./input/TangleNumberText');
var TangleBoolText = require('./input/TangleBoolText');

var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;
var FormattedDate = ReactIntl.FormattedDate;
var FormattedTime = ReactIntl.FormattedTime;
var FormattedRelative = ReactIntl.FormattedRelative;
var FormattedMessage = ReactIntl.FormattedMessage;
var FormattedHTMLMessage = ReactIntl.FormattedHTMLMessage;

//shortcuts
var TangleText = TangleNumberText;
var BoolText = TangleBoolText;

var _ = require('underscore');

var JSXBox = (function (_React$Component) {
	function JSXBox() {
		_classCallCheck(this, JSXBox);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(JSXBox, _React$Component);

	_createClass(JSXBox, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			return true;
		}
	}, {
		key: 'render',
		value: function render() {
			//empty content
			if (this.props.content === undefined || this.props.content.compiled === undefined) return React.createElement('span', {}, 'empty code');

			try {

				var self = this;
				var input = this.props.input;
				var output = this.props.output;
				return React.createElement('div', { style: (0, _stylesFont2['default'])(this.props.font) }, eval(this.props.content.compiled));
			} catch (err) {
				//error content
				return React.createElement('span', {}, err.message);
			}
		}
	}]);

	return JSXBox;
})(React.Component);

exports['default'] = JSXBox;
module.exports = exports['default'];


},{"../styles/font":1,"../utils/createChainedFunction":2,"./input/TangleBoolText":13,"./input/TangleNumberText":14,"react":undefined,"react-binding":undefined,"react-intl":undefined,"underscore":undefined}],8:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPivot = require('react-pivot');

var _reactPivot2 = _interopRequireDefault(_reactPivot);

var PivotTable = _react2['default'].createClass({
	displayName: 'PivotTable',

	render: function render() {
		//prepare helper object to grap data binded values -> create data binder
		var dataBinder = this.props.dataBinder;

		var rows = dataBinder === undefined ? this.props.rows : dataBinder.getValue(this.props.rows.path);
		var dimensions = dataBinder === undefined ? this.props.dimensions : dataBinder.getValue(this.props.dimensions.path);

		if (rows === undefined) return _react2['default'].createElement(
			'span',
			null,
			'no data available'
		);

		var reduce;
		if (this.props.reduce !== undefined) reduce = new Function(this.props.reduce.code)();
		var calculations;
		if (this.props.calculations !== undefined) calculations = new Function(this.props.calculations.code)();
		var rowsCount = this.props.nPaginateRows !== undefined ? this.props.nPaginateRows : 10;

		return _react2['default'].createElement(_reactPivot2['default'], { rows: rows,
			dimensions: dimensions,
			reduce: reduce,
			calculations: calculations,
			nPaginateRows: rowsCount });
	}
});
module.exports = PivotTable;


},{"react":undefined,"react-pivot":undefined}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesFont = require('../styles/font');

var _stylesFont2 = _interopRequireDefault(_stylesFont);

var TextBox = (function (_React$Component) {
    function TextBox() {
        _classCallCheck(this, TextBox);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(TextBox, _React$Component);

    _createClass(TextBox, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'span',
                { style: (0, _stylesFont2['default'])(this.props.font) },
                this.props.content
            );
        }
    }]);

    return TextBox;
})(_react2['default'].Component);

exports['default'] = TextBox;
module.exports = exports['default'];


},{"../styles/font":1,"react":undefined}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesFont = require('../styles/font');

var _stylesFont2 = _interopRequireDefault(_stylesFont);

var ValueBox = (function (_React$Component) {
    function ValueBox() {
        _classCallCheck(this, ValueBox);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ValueBox, _React$Component);

    _createClass(ValueBox, [{
        key: 'render',
        value: function render() {

            var content = !!this.props.content ? this.props.content : this.props.emptyValue;

            return _react2['default'].createElement(
                'span',
                { style: (0, _stylesFont2['default'])(this.props.font) },
                content
            );
        }
    }]);

    return ValueBox;
})(_react2['default'].Component);

exports['default'] = ValueBox;
module.exports = exports['default'];


},{"../styles/font":1,"react":undefined}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var CheckBoxInput = (function (_React$Component) {
    function CheckBoxInput() {
        _classCallCheck(this, CheckBoxInput);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(CheckBoxInput, _React$Component);

    _createClass(CheckBoxInput, [{
        key: "render",
        value: function render() {
            var valueModel = this.props.valueLink;
            var value = valueModel && valueModel.value || false;
            var handleChange = function handleChange(e) {
                valueModel.value = e.target.checked ? true : false;
            };
            return _react2["default"].createElement(
                "label",
                null,
                _react2["default"].createElement("input", { type: "checkbox", checked: value, onChange: handleChange }),
                this.props.label
            );
        }
    }]);

    return CheckBoxInput;
})(_react2["default"].Component);

exports["default"] = CheckBoxInput;
;
module.exports = exports["default"];


},{"react":undefined}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var SelectBoxInput = (function (_React$Component) {
	function SelectBoxInput() {
		_classCallCheck(this, SelectBoxInput);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(SelectBoxInput, _React$Component);

	_createClass(SelectBoxInput, [{
		key: 'render',
		value: function render() {
			//init props with default values
			var workplace = this.props.workplace || false;
			var delimiter = this.props.delimiter || ',';
			var multi = this.props.multi || false;

			//one-way data binding
			var options = !workplace ? this.props.options || [] : [];

			//two-way data binding
			var defaultValue = [];
			var valueModel = this.props.valueLink;
			if (valueModel === undefined) valueModel = { value: defaultValue };

			var selectedOptions = valueModel.value;
			var value = selectedOptions !== undefined && selectedOptions.length !== 0 ? _underscore2['default'].map(selectedOptions, function (opt) {
				return opt.value;
			}).join(delimiter) : undefined;

			var handleChange = function handleChange(newValue, selectedOptions) {
				valueModel.value = selectedOptions;
			};

			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_reactSelect2['default'], {
					delimiter: delimiter,
					value: value,
					options: options,
					multi: multi,
					placeholder: this.props.placeholder,
					onChange: handleChange
				})
			);
		}
	}]);

	return SelectBoxInput;
})(_react2['default'].Component);

exports['default'] = SelectBoxInput;
module.exports = exports['default'];


},{"react":undefined,"react-select":undefined,"underscore":undefined}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TangleBoolText = (function (_React$Component) {
	function TangleBoolText() {
		_classCallCheck(this, TangleBoolText);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(TangleBoolText, _React$Component);

	_createClass(TangleBoolText, [{
		key: 'render',
		value: function render() {

			//support for two-way data binding
			var valueModel = this.props.valueLink;
			var handleChange = function handleChange(e) {
				//toogle value
				if (valueModel === undefined) return;
				valueModel.value = !valueModel.value;
			};

			var trueComponent = this.props.trueComponent || _react2['default'].createElement('span', null, this.props.trueText);
			var falseComponent = this.props.falseComponent || _react2['default'].createElement('span', null, this.props.falseText);

			//if no valueLink is provided - fallback to false
			var component = valueModel !== undefined && valueModel.value ? trueComponent : falseComponent;

			var style = { display: 'inline', color: 'darkblue', borderBottom: '1px dashed black' };

			return _react2['default'].createElement(
				'div',
				{ style: style, onClick: handleChange },
				component
			);
		}
	}]);

	return TangleBoolText;
})(_react2['default'].Component);

exports['default'] = TangleBoolText;
module.exports = exports['default'];


},{"react":undefined}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TangleNumberText = (function (_React$Component) {
	function TangleNumberText() {
		_classCallCheck(this, TangleNumberText);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(TangleNumberText, _React$Component);

	_createClass(TangleNumberText, [{
		key: 'render',
		value: function render() {
			//support for two-way data binding
			var valueModel = this.props.valueLink;
			var handleChange = function handleChange(value) {
				valueModel.value = value;
			};

			//if no valueLink is provided - fallback to text representation of binding object
			if (valueModel === undefined) valueModel = { value: JSON.stringify(this.props.value) };

			var style = { display: 'inline', color: 'darkblue', borderBottom: '1px dashed black !important' };

			return _react2['default'].createElement(
				'div',
				{ style: style },
				_react2['default'].createElement(TangleText, { value: valueModel.value || 0, onChange: handleChange,
					min: this.props.min,
					max: this.props.max,
					step: this.props.step,
					className: this.props.className,
					pixelDistance: this.props.pixelDistance,
					width: this.props.width })
			);
		}
	}]);

	return TangleNumberText;
})(_react2['default'].Component);

exports['default'] = TangleNumberText;

//Copied and credits to: https://github.com/mapbox/react-tangle
var TangleText = _react2['default'].createClass({
	displayName: 'TangleText',

	propTypes: {
		value: _react2['default'].PropTypes.number.isRequired,
		onChange: _react2['default'].PropTypes.func.isRequired,
		min: _react2['default'].PropTypes.number,
		max: _react2['default'].PropTypes.number,
		step: _react2['default'].PropTypes.number,
		pixelDistance: _react2['default'].PropTypes.number,
		className: _react2['default'].PropTypes.string,
		onInput: _react2['default'].PropTypes.func,
		format: _react2['default'].PropTypes.func
	},
	getDefaultProps: function getDefaultProps() {
		return {
			min: -Infinity,
			max: Infinity,
			step: 1,
			pixelDistance: null,
			className: 'react-tangle-input',
			format: function format(x) {
				return x;
			},
			onInput: function onInput() {}
		};
	},
	componentWillMount: function componentWillMount() {
		this.__isMouseDown = false;
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.setState({ value: nextProps.value });
	},
	getInitialState: function getInitialState() {
		return { value: this.props.value || 0 };
	},
	bounds: function bounds(num) {
		num = Math.max(num, this.props.min);
		num = Math.min(num, this.props.max);
		return num;
	},
	onChange: function onChange(e) {
		this.setState({ value: e.target.value });
	},
	onBlur: function onBlur(e) {
		var parsed = parseFloat(this.state.value);
		if (isNaN(parsed)) {
			this.setState({ value: this.props.value });
		} else {
			this.props.onChange(this.bounds(parsed));
			this.setState({ value: this.bounds(parsed) });
		}
	},
	onMouseMove: function onMouseMove(e) {
		var change;
		if (this.props.pixelDistance > 0) {
			change = Math.floor((this.startX - e.screenX) / this.props.pixelDistance);
		} else {
			change = this.startX - e.screenX;
		}
		this.dragged = true;
		var value = this.bounds(this.startValue - change * this.props.step);
		this.setState({ value: value });
		this.props.onInput(value);
	},
	onMouseDown: function onMouseDown(e) {
		// short circuit if currently editing number
		if (e.target === document.activeElement || e.button !== 0) return;
		this.__isMouseDown = true;

		e.preventDefault();

		this.dragged = false;
		this.startX = e.screenX;
		this.startValue = this.state.value;

		window.addEventListener('mousemove', this.onMouseMove);
		window.addEventListener('mouseup', this.onMouseUp);
	},
	onMouseUp: function onMouseUp(e) {
		if (this.__isMouseDown) {
			e.preventDefault();
			window.removeEventListener('mousemove', this.onMouseMove);
			window.removeEventListener('mouseup', this.onMouseUp);
			if (this.dragged) this.onBlur();
			this.__isMouseDown = false;
		}
	},
	onDoubleClick: function onDoubleClick(e) {
		e.target.focus();
	},
	onKeyDown: function onKeyDown(e) {
		var value;
		if (e.which == 38) {
			// UP
			e.preventDefault();
			value = this.state.value + this.props.step;
			this.setState({ value: value });
			this.props.onInput(value);
		} else if (e.which == 40) {
			// DOWN
			e.preventDefault();
			value = this.state.value - this.props.step;
			this.setState({ value: value });
			this.props.onInput(value);
		} else if (e.which == 13) {
			// ENTER
			this.onBlur(e);
			e.target.blur();
		}
	},
	render: function render() {
		var style = { webkitAppearance: 'none', textAlign: 'left', cursor: 'col-resize', border: '0px solid' };
		//var style = {display:'inline', color:'darkblue',borderBottom: '1px dashed black'};
		if (this.props.width !== undefined) style.width = this.props.width;
		/* jshint ignore:start */
		return _react2['default'].createElement('input', { style: style,
			className: this.props.className,
			disabled: this.props.disabled,
			type: 'text',
			onChange: this.onChange,
			onMouseDown: this.onMouseDown,
			onKeyDown: this.onKeyDown,
			onMouseUp: this.onMouseUp,
			onDoubleClick: this.onDoubleClick,
			onBlur: this.onBlur,
			value: this.props.format(this.state.value) });
		/* jshint ignore:end */
	}
});
module.exports = exports['default'];


},{"react":undefined}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TextBoxInput = (function (_React$Component) {
	function TextBoxInput() {
		_classCallCheck(this, TextBoxInput);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(TextBoxInput, _React$Component);

	_createClass(TextBoxInput, [{
		key: 'render',
		value: function render() {
			var valueModel = this.props.valueLink;
			var value = valueModel && valueModel.value || '';
			var handleChange = function handleChange(e) {
				valueModel.value = e.target.value;
			};
			return _react2['default'].createElement(
				'label',
				null,
				this.props.label,
				_react2['default'].createElement('input', { type: 'text', value: value, placeholder: this.props.placeholder, onChange: handleChange })
			);
		}
	}]);

	return TextBoxInput;
})(_react2['default'].Component);

exports['default'] = TextBoxInput;
module.exports = exports['default'];


},{"react":undefined}],"react-designer-widgets":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var defaultImageUrl = 'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

exports['default'] = {
	TextBoxInput: _underscore2['default'].extend(require('./widgets/input/TextBoxInput'), {
		metaData: {
			props: {
				value: { mode: 'TwoWay' },
				placeholder: '',
				label: 'your label'
			},
			settings: {
				fields: {
					value: { type: 'bindingEditor', settings: { editing: false } } }
			}
		}
	}),
	CheckBoxInput: _underscore2['default'].extend(require('./widgets/input/CheckBoxInput'), {
		metaData: {
			props: {
				checked: { mode: 'TwoWay' },
				label: 'your label'
			},
			settings: {
				fields: {
					checked: { type: 'bindingEditor', settings: { editing: false } }
				}
			}
		}
	}),
	TangleBoolText: _underscore2['default'].extend(require('./widgets/input/TangleBoolText'), {
		metaData: {
			props: {
				value: { mode: 'TwoWay' },
				trueText: 'true condition',
				falseText: 'false condition'
			},
			settings: {
				fields: {
					value: { type: 'bindingEditor', settings: { editing: false } }
				}
			}
		}
	}),
	TangleNumberText: _underscore2['default'].extend(require('./widgets/input/TangleNumberText'), {
		metaData: {
			props: {
				value: { mode: 'TwoWay' },
				min: 0,
				max: 100,
				step: 1,
				width: 100,
				pixelDistance: 1
			},
			settings: {
				fields: {
					value: { type: 'bindingEditor', settings: { editing: false } },
					min: { type: 'number' },
					max: { type: 'number' },
					step: { type: 'number' },
					width: { type: 'number' },
					pixelDistance: { type: 'number' }
				}
			}
		}
	}),
	SelectBoxInput: _underscore2['default'].extend(require('./widgets/input/SelectBoxInput'), {
		metaData: {
			props: {
				selectedItems: { mode: 'TwoWay' },
				options: undefined,
				multi: false
			},
			settings: {
				fields: {
					selectedItems: { type: 'bindingEditor', settings: { editing: false } },
					options: { type: 'bindingEditor', settings: { editing: false } },
					multi: { type: 'boolean' }
				}
			}
		}
	}),
	TextBox: _underscore2['default'].extend(require('./widgets/TextBox'), {
		metaData: {
			props: {
				content: 'type your text',
				font: undefined
			},
			settings: {
				fields: {
					content: { type: 'textEditor' },
					font: { type: 'fontEditor' }
				}
			}
		}
	}),
	ValueBox: _underscore2['default'].extend(require('./widgets/ValueBox'), {
		metaData: {
			props: {
				content: undefined,
				emptyValue: '---',
				font: undefined
			},
			settings: {
				fields: {
					content: { type: 'bindingEditor', settings: { editing: false } },
					font: { type: 'fontEditor' }
				}
			}

		}
	}),
	HtmlBox: _underscore2['default'].extend(require('./widgets/HtmlBox'), {
		metaData: {
			props: {
				content: 'type your content',
				columnCount: undefined,
				counterReset: undefined,
				font: undefined
			},
			settings: {
				fields: {
					content: { type: 'htmlEditor' },
					columnCount: { type: 'number' },
					counterReset: { type: 'number' },
					font: { type: 'fontEditor' }
				}
			}
		}
	}),
	JSXBox: _underscore2['default'].extend(require('./widgets/JSXBox'), {
		metaData: {
			props: {
				content: {
					code: 'return (<div>type your code</div>)',
					compiled: '(function(){return React.createElement("div",null,"type your code")})();'
				},
				input: undefined,
				output: { mode: 'TwoWay' },
				font: undefined
			},
			settings: {
				fields: {
					content: { type: 'codeEditor' },
					input: { type: 'bindingEditor', settings: { editing: false } },
					output: { type: 'bindingEditor', settings: { editing: false } },
					font: { type: 'fontEditor' }
				}
			}
		}
	}),
	ImageBox: _underscore2['default'].extend(require('./widgets/ImageBox'), {
		metaData: {
			props: {
				url: defaultImageUrl,
				width: 100,
				height: 100,
				border: {
					width: 2,
					radius: 20,
					color: '#000000',
					style: 'solid'
				},
				margin: {
					top: 5,
					left: 5,
					bottom: 5,
					right: 5
				},
				padding: undefined
			}
		}
	}),
	ImagePanel: _underscore2['default'].extend(require('./widgets/ImagePanel'), {
		metaData: {
			props: {
				width: 700,
				height: 400,
				content: 'type your content',
				bgColor: '#f7c10c',
				margin: {},
				padding: {
					top: 10,
					right: 10,
					bottom: 10,
					left: 10
				},
				border: {
					width: 3,
					radius: 10,
					color: '#000000',
					style: 'solid'
				},
				imageAlign: 'topLeft',
				image: {
					url: defaultImageUrl,
					width: 100,
					height: 100,
					border: {
						width: 2,
						radius: 20,
						color: '#000000',
						style: 'solid'
					},
					margin: {
						top: 5,
						left: 5,
						bottom: 5,
						right: 5
					},
					padding: {}
				},
				font: undefined
			},
			settings: {
				fields: {
					width: { type: 'number' },
					height: { type: 'number' },
					padding: { type: 'boxSizeEditor' },
					margin: { type: 'boxSizeEditor' },
					border: { type: 'borderEditor' },
					imageAlign: {
						type: 'select',
						settings: { options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] }
					},
					image: {
						fields: {
							padding: { type: 'boxSizeEditor' },
							margin: { type: 'boxSizeEditor' },
							border: { type: 'borderEditor' },
							width: { type: 'number' },
							height: { type: 'number' }
						}
					},
					bgColor: { type: 'colorPicker' },
					font: { type: 'fontEditor' }
				}
			}
		}
	}),
	Pivot: _underscore2['default'].extend(require('./widgets/PivotTable'), {
		metaData: {
			props: {
				rows: undefined,
				dimensions: undefined,
				calculations: {
					code: 'return [{title: \'Count\',\tvalue: \'count\',className: \'alignRight\'}];'
				},
				reduce: {
					code: 'return function(row, memo) {memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount); return memo;}'
				},
				nPaginateRows: 10
			},
			settings: {
				fields: {
					rows: {
						type: 'bindingEditor'
					},
					dimensions: {
						type: 'bindingEditor'
					},
					reduce: {
						type: 'codeEditor'
					},
					calculations: {
						type: 'codeEditor'
					}
				}
			}
		}
	}),
	Flipper: _underscore2['default'].extend(require('./widgets/Flipper'), {
		metaData: {
			props: {
				width: 200,
				height: 200,
				orientation: 'horizontal',
				front: {
					bgColor: '#19489E',
					content: 'type front text',
					font: undefined
				},
				back: {
					bgColor: '#9E1919',
					content: 'type back text',
					font: undefined
				}
			},
			settings: {
				fields: {
					width: { type: 'number' },
					height: { type: 'number' },
					orientation: {
						type: 'select', settings: { options: ['horizontal', 'vertical'] }
					},
					front: {
						fields: {
							bgColor: { type: 'colorPicker' },
							content: { type: 'htmlEditor' },
							font: { type: 'fontEditor' }
						}
					},
					back: {
						fields: {
							bgColor: { type: 'colorPicker' },
							content: { type: 'htmlEditor' },
							font: { type: 'fontEditor' }
						}
					}
				}
			}
		}
	})
};
module.exports = exports['default'];


},{"./widgets/Flipper":3,"./widgets/HtmlBox":4,"./widgets/ImageBox":5,"./widgets/ImagePanel":6,"./widgets/JSXBox":7,"./widgets/PivotTable":8,"./widgets/TextBox":9,"./widgets/ValueBox":10,"./widgets/input/CheckBoxInput":11,"./widgets/input/SelectBoxInput":12,"./widgets/input/TangleBoolText":13,"./widgets/input/TangleNumberText":14,"./widgets/input/TextBoxInput":15,"underscore":undefined}]},{},[]);
