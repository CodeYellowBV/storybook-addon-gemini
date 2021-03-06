"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Screenshots = require("../components/Screenshots");

var _Screenshots2 = _interopRequireDefault(_Screenshots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screenshots = function (_Component) {
    _inherits(Screenshots, _Component);

    function Screenshots(props) {
        var _ref;

        _classCallCheck(this, Screenshots);

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Screenshots.__proto__ || Object.getPrototypeOf(Screenshots)).call.apply(_ref, [this, props].concat(args)));

        _this.state = { kind: null, story: null };
        return _this;
    }

    _createClass(Screenshots, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.props.api.onStory(function (kind, story) {
                _this2.setState({
                    kind: kind,
                    story: story
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                kind = _state.kind,
                story = _state.story;
            // TODO: can this ever happen? If so, we should show some message.

            if (!kind) {
                return null;
            }
            // TODO: Need to find a good way to get the domain. Relying on the `window` is not... nice.
            var domain = window.STORYBOOK_ADDON_GEMINI_DOMAIN;
            if (!domain) {
                return _react2.default.createElement(
                    "p",
                    null,
                    "Please configure `window.STORYBOOK_ADDON_GEMINI_DOMAIN` to the host + port where Gemini GUI is running"
                );
            }
            var combinedName = kind + ": " + story;
            var url = domain + "?suite=" + encodeURIComponent(combinedName);
            return _react2.default.createElement(_Screenshots2.default, { iframeUrl: url });
        }
    }]);

    return Screenshots;
}(_react.Component);

exports.default = Screenshots;