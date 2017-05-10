/* global ReactDOM React */
import PropTypes from 'prop-types'

const my_news = [
  {
    author: 'Author One',
    text: 'News one',
    bigText: 'News one in detail'
  },
  {
    author: 'Author Two',
    text: 'News two',
    bigText: 'News two in detail'
  },
  {
    author: 'Author Three',
    text: 'News three',
    bigText: 'News three in detail'
  }
]

class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {visible: false}
  }

  readmoreClick = (e) => {
    e.preventDefault()
    this.setState({visible: true})
  }

  render() {
    const author = this.props.data.author,
      text = this.props.data.text,
      bigText = this.props.data.bigText,
      visible = this.state.visible

    return (
        <div className="article">
          <p className="news__author">{author}:</p>
          <p className="news__text">{text}</p>
          <a href="#"
             onClick={this.readmoreClick}
             className={`news_readmore ${visible ? 'none': ''}`}>
            Read more
          </a>
          <p className={`news__big-text ${visible ? '': 'none'}`}>{bigText}</p>
        </div>
    )
  }
}
Article.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    bigText: PropTypes.string.isRequired
  })
}

class News extends React.Component {
  render() {
    const data = this.props.data
    let newsTemplate

    if (data.length > 0) {
      newsTemplate = data.map((item, index)=>(
          <div key={index}>
            <Article data={item}/>
          </div>
      ))
    } else {
      newsTemplate = <p>No news detected</p>
    }

    return (
        <div className="news">
          {newsTemplate}
          <strong className={`news__count ${data.length > 0 ? '':'none'}`}>News count: {data.length}</strong>
        </div>
    )
  }
}

class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      agreeNotChecked: true,
      authorIsEmpty: true,
      textIsEmpty: true
    }
  }

  componentDidMount = () => {
    this.author.focus()
  }

  onBtnClickHandler = (e) => {
    e.preventDefault()
    let author = this.author.value
    let text = this.text.value
    alert(`${author}\n${text}`)
  }

  onFieldChange = (fieldName, e) => {
    if (e.target.value.trim().length > 0) {
      this.setState({[''+fieldName]: false})
    } else {
      this.setState({[''+fieldName]: true})
    }
  }

  onCheckRuleClick = (e) => {
    this.setState({agreeNotChecked: !this.state.agreeNotChecked})
  }

  render() {
    const agreeNotChecked = this.state.agreeNotChecked,
        authorIsEmpty = this.state.authorIsEmpty,
        textIsEmpty = this.state.textIsEmpty

    return (
        <form className="add cf">
          <input
              className="add__author"
              ref={(author) => {this.author = author}}
              type="text"
              onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
              placeholder="Your name"
          />
          <textarea
            className="add__text"
            ref={(text) => {this.text = text}}
            onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
            placeholder="News text"
          />
          <label className="add__checkrule">
            <input type="checkbox" ref="checkrule" onChange={this.onCheckRuleClick}/>
            I agree with the rules
          </label>
          <button
            className="add__btn"
            ref="alert_button"
            onClick={this.onBtnClickHandler}
            disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
          >Show alert
          </button>
        </form>
    )
  }
}

class App extends React.Component {
  render() {
    return (
        <div className="app">
          <h3>News</h3>
          <Add/>
          <News data={my_news}/>
        </div>
    )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)