// Write your React code here.
// Write your React code here.
import {Component} from 'react'
import EmojiItem from '../EmojiItem'
import './index.css'

class Feedback extends Component {
  state = {feedbackGiven: false}

  feedbackBtn = () => {
    this.setState({
      feedbackGiven: true,
    })
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {feedbackGiven} = this.state

    if (feedbackGiven) {
      return (
        <div className="bgContainer">
          <div className="Container">
            <img className="emoji" src={loveEmojiUrl} alt="love emoji" />
            <h1 className="heading2">Thank You!</h1>
            <p className="para">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="bgContainer">
        <div className="Container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emojiesContainer">
            {emojis.map(each => (
              <EmojiItem
                key={each.id}
                details={each}
                feedbackBtn={this.feedbackBtn}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
