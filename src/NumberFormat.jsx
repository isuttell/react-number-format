/** ****************************************************************************
* NumberFormat
*
* @author       Isaac Suttell <isaac@isaacsuttell.com>
* @file         Shows a number value changing over time. The goal is to
*               visualize data changing over time.
******************************************************************************/

import React from 'react';

export default class NumberFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      targetValue: props.value,
      originalValue: props.value,
      currentValue: props.value
    };
  }

  /**
   * When the value changes then start the loop
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps) {
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
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.props.value) {
      return true;
    } else if(this.formatValue(nextState.currentValue) !== this.formatValue(this.state.currentValue)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Cleanup
   */
  componentWillUnmount(){
     clearInterval(this._interval);
  }

  /**
   * Handle the actual transition
   */
  startTransition() {
    // Clear an exisiting animations
    clearInterval(this._interval);

    // Start interval that keeps updating the value for a limit number of steps
    this._interval = setInterval(()=>{
      // Make sure we don't go too far
      if (this.state.currentStep >= this.props.steps) {
        clearInterval(this._interval);
      }
      // Update the state and therefore the view
      this.setState({
        currentValue: this.getCurrentValue(this.state.currentStep / this.props.steps),
        currentStep: this.state.currentStep + 1
      });
    }, this.props.timeout / this.props.steps);
  }

  /**
   * Based on a percentage calculate the current value
   * @param  {Number}   percent   0..1
   * @return {Number}
   */
  getCurrentValue(percent) {
    const diff = this.state.targetValue - this.state.originalValue;
    return (diff * percent) + this.state.originalValue;
  }

  /*
   * Round the current value and optionally localize it
   */
  formatValue(value = this.state.currentValue) {
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
  render() {
    return (
      <span className='number-display'>{this.formatValue()}</span>
    );
  }
}

/**
 * Defaults
 * @type {Object}
 */
NumberFormat.defaultProps = {
  localize: true,
  timeout: 500,
  steps: 10
}

/**
 * Type Checks
 * @type {Object}
 */
NumberFormat.propTypes = {
  value: React.PropTypes.number.isRequired,
  timeout: React.PropTypes.number,
  steps: React.PropTypes.number,
  localize: React.PropTypes.bool
}
