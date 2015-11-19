/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import NumberFormat from '../src/NumberFormat';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 42
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <label className='label'>
          Enter a new number...
          <input
            className='input'
            value={this.state.value}
            onChange={this.handleChange.bind(this)} />
          <div className='highlight' />
        </label>
        <NumberFormat value={parseInt(this.state.value, 10) || 0} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('example'));
