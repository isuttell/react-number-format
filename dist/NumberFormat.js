(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** ****************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * NumberFormat
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @author       Isaac Suttell <isaac@isaacsuttell.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * @file         Shows a number value changing over time. The goal is to
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *               visualize data changing over time.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ******************************************************************************/
	
	var NumberFormat = (function (_React$Component) {
	  _inherits(NumberFormat, _React$Component);
	
	  function NumberFormat(props) {
	    _classCallCheck(this, NumberFormat);
	
	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberFormat).call(this, props));
	
	    _this2.state = {
	      currentStep: 0,
	      targetValue: props.value,
	      originalValue: props.value,
	      currentValue: props.value
	    };
	    return _this2;
	  }
	
	  /**
	   * When the value changes then start the loop
	   * @param  {Object} nextProps
	   */
	
	  _createClass(NumberFormat, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // Set the starting point
	      this.setState({
	        currentStep: 0,
	        originalValue: this.state.currentValue,
	        targetValue: nextProps.value
	      }, this.startTransition.bind(this));
	    }
	
	    /**
	     * Try to limit excessive updates
	     * @param  {Object} nextProps
	     * @param  {Object} nextState
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (nextProps.value !== this.props.value) {
	        return true;
	      } else if (this.formatValue(nextState.currentValue) !== this.formatValue(this.state.currentValue)) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	
	    /**
	     * Cleanup
	     */
	
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearInterval(this._interval);
	    }
	
	    /**
	     * Handle the actual transition
	     */
	
	  }, {
	    key: 'startTransition',
	    value: function startTransition() {
	      var _this = this;
	
	      // Clear an exisiting animations
	      clearInterval(this._interval);
	
	      // Start interval that keeps updating the value for a limit number of steps
	      this._interval = setInterval(function () {
	        // Make sure we don't go too far
	        if (_this.state.currentStep >= _this.props.steps) {
	          clearInterval(_this._interval);
	        }
	        // Update the state and therefore the view
	        _this.setState({
	          currentValue: _this.getCurrentValue(_this.state.currentStep / _this.props.steps),
	          currentStep: _this.state.currentStep + 1
	        });
	      }, this.props.timeout / this.props.steps);
	    }
	
	    /**
	     * Based on a percentage calculate the current value
	     * @param  {Number}   percent   0..1
	     * @return {Number}
	     */
	
	  }, {
	    key: 'getCurrentValue',
	    value: function getCurrentValue(percent) {
	      var diff = this.state.targetValue - this.state.originalValue;
	      return diff * percent + this.state.originalValue;
	    }
	
	    /*
	     * Round the current value and optionally localize it
	     */
	
	  }, {
	    key: 'formatValue',
	    value: function formatValue() {
	      var value = arguments.length <= 0 || arguments[0] === undefined ? this.state.currentValue : arguments[0];
	
	      value = Math.round(value);
	      if (!this.props.localize) {
	        return value;
	      } else {
	        return value.toLocaleString();
	      }
	    }
	
	    /**
	     * Render
	     * @return {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        { className: 'number-display' },
	        this.formatValue()
	      );
	    }
	  }]);
	
	  return NumberFormat;
	})(_react2.default.Component);
	
	/**
	 * Defaults
	 * @type {Object}
	 */
	
	exports.default = NumberFormat;
	NumberFormat.defaultProps = {
	  localize: true,
	  timeout: 500,
	  steps: 10
	};
	
	/**
	 * Type Checks
	 * @type {Object}
	 */
	NumberFormat.propTypes = {
	  value: _react2.default.PropTypes.number.isRequired,
	  timeout: _react2.default.PropTypes.number,
	  steps: _react2.default.PropTypes.number,
	  localize: _react2.default.PropTypes.bool
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=NumberFormat.js.map