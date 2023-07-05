import React from 'react';
import { decodeHTML } from '../lib';

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick = () => {
    this.props.handleGuess(this.props.answer);
  };

  render() {
    return (
      <button onClick={this.handleButtonClick} className='btn btn-outline-primary'>
        {decodeHTML(this.props.answer)}
      </button>
    );
  }
}


export { AnswerButton };
