'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global ReactDOM React */


var my_news = [{
  author: 'Author One',
  text: 'News one',
  bigText: 'News one in detail'
}, {
  author: 'Author Two',
  text: 'News two',
  bigText: 'News two in detail'
}, {
  author: 'Author Three',
  text: 'News three',
  bigText: 'News three in detail'
}];

var Article = function (_React$Component) {
  _inherits(Article, _React$Component);

  function Article(props) {
    _classCallCheck(this, Article);

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));

    _this.readmoreClick = function (e) {
      e.preventDefault();
      _this.setState({ visible: true });
    };

    _this.state = { visible: false };
    return _this;
  }

  _createClass(Article, [{
    key: 'render',
    value: function render() {
      var author = this.props.data.author,
          text = this.props.data.text,
          bigText = this.props.data.bigText,
          visible = this.state.visible;

      return React.createElement(
        'div',
        { className: 'article' },
        React.createElement(
          'p',
          { className: 'news__author' },
          author,
          ':'
        ),
        React.createElement(
          'p',
          { className: 'news__text' },
          text
        ),
        React.createElement(
          'a',
          { href: '#',
            onClick: this.readmoreClick,
            className: 'news_readmore ' + (visible ? 'none' : '') },
          'Read more'
        ),
        React.createElement(
          'p',
          { className: 'news__big-text ' + (visible ? '' : 'none') },
          bigText
        )
      );
    }
  }]);

  return Article;
}(React.Component);

Article.propTypes = {
  data: _propTypes2.default.shape({
    author: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    bigText: _propTypes2.default.string.isRequired
  })
};

var News = function (_React$Component2) {
  _inherits(News, _React$Component2);

  function News() {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
  }

  _createClass(News, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;
      var newsTemplate = void 0;

      if (data.length > 0) {
        newsTemplate = data.map(function (item, index) {
          return React.createElement(
            'div',
            { key: index },
            React.createElement(Article, { data: item })
          );
        });
      } else {
        newsTemplate = React.createElement(
          'p',
          null,
          'No news detected'
        );
      }

      return React.createElement(
        'div',
        { className: 'news' },
        newsTemplate,
        React.createElement(
          'strong',
          { className: 'news__count ' + (data.length > 0 ? '' : 'none') },
          'News count: ',
          data.length
        )
      );
    }
  }]);

  return News;
}(React.Component);

var Add = function (_React$Component3) {
  _inherits(Add, _React$Component3);

  function Add(props) {
    _classCallCheck(this, Add);

    var _this3 = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

    _this3.componentDidMount = function () {
      _this3.author.focus();
    };

    _this3.onBtnClickHandler = function (e) {
      e.preventDefault();
      var author = _this3.author.value;
      var text = _this3.text.value;
      alert(author + '\n' + text);
    };

    _this3.onFieldChange = function (fieldName, e) {
      if (e.target.value.trim().length > 0) {
        _this3.setState(_defineProperty({}, '' + fieldName, false));
      } else {
        _this3.setState(_defineProperty({}, '' + fieldName, true));
      }
    };

    _this3.onCheckRuleClick = function (e) {
      _this3.setState({ agreeNotChecked: !_this3.state.agreeNotChecked });
    };

    _this3.state = {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    };
    return _this3;
  }

  _createClass(Add, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      var agreeNotChecked = this.state.agreeNotChecked,
          authorIsEmpty = this.state.authorIsEmpty,
          textIsEmpty = this.state.textIsEmpty;

      return React.createElement(
        'form',
        { className: 'add cf' },
        React.createElement('input', {
          className: 'add__author',
          ref: function ref(author) {
            _this4.author = author;
          },
          type: 'text',
          onChange: this.onFieldChange.bind(this, 'authorIsEmpty'),
          placeholder: 'Your name'
        }),
        React.createElement('textarea', {
          className: 'add__text',
          ref: function ref(text) {
            _this4.text = text;
          },
          onChange: this.onFieldChange.bind(this, 'textIsEmpty'),
          placeholder: 'News text'
        }),
        React.createElement(
          'label',
          { className: 'add__checkrule' },
          React.createElement('input', { type: 'checkbox', ref: 'checkrule', onChange: this.onCheckRuleClick }),
          'I agree with the rules'
        ),
        React.createElement(
          'button',
          {
            className: 'add__btn',
            ref: 'alert_button',
            onClick: this.onBtnClickHandler,
            disabled: agreeNotChecked || authorIsEmpty || textIsEmpty
          },
          'Show alert'
        )
      );
    }
  }]);

  return Add;
}(React.Component);

var App = function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'app' },
        React.createElement(
          'h3',
          null,
          'News'
        ),
        React.createElement(Add, null),
        React.createElement(News, { data: my_news })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));