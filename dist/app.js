'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  function Article() {
    _classCallCheck(this, Article);

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this));

    _this.showAll = function () {
      _this.setState({
        showAll: true,
        showBtn: false
      });
    };

    _this.state = { visible: false };
    return _this;
  }

  _createClass(Article, [{
    key: 'readmoreClick',
    value: function readmoreClick(e) {
      e.preventDefault();
      this.setState({ visible: true });
    }
  }, {
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
          { href: '#', onClick: this.readmoreClick, className: 'news_readmore ' + (visible ? 'none' : '') },
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

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

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
        React.createElement(News, { data: my_news })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));