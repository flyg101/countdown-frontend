import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

export default class Timer extends Component {
  state = {
    time: 60,
    running: true,
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState(state => ({ time: state.time - 1 })), 1000);
  }

  componentDidUpdate() {
    if ((this.state.time <= 0 || this.props.finished) && this.state.running) {
      // End Game!
      this.endTimer();
    }
  }

  endTimer = () => {
    this.setState({ running: false });
    clearInterval(this.interval);
    this.props.onEndTimer();
  };

  render() {
    const { time, running } = this.state;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return (
      <h1 className={classNames('timer', { fail: !running && !this.props.success })}>
        {minutes}:{seconds >= 10 ? seconds : '0' + seconds}
      </h1>
    );
  }
}

Timer.propTypes = {
  finished: PropTypes.bool,
  success: PropTypes.bool,
  onEndTimer: PropTypes.func.isRequired,
};
