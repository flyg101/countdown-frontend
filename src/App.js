import React, { Component } from 'react';

import classNames from 'classnames';

import Timer from './components/Timer';
import Title from './components/Title';
import LetterBoxWrapper from './components/LetterBoxWrapper';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

import { word, display } from './word';

export default class App extends Component {
  state = {
    fails: 0,

    finished: false,
    success: false,

    options: display.map((letter, i) => ({
      letter,
      index: i,
      selected: false,
    })),

    fields: word.map((_, i) => ({
      letter: '',
      index: i,
      originIndex: null,
      field: true,
      filled: false,
      correct: false,
    })),

    cheatMode: false,
  };

  onDropLetter = (droppedLetter, index, selectedIndex) => {
    const correct = droppedLetter === word[index];

    this.setState(state => {
      const newState = {
        fields: state.fields.map((f, i) =>
          i === index ? { ...f, letter: droppedLetter, filled: true, originIndex: selectedIndex, correct } : f
        ),
        options: state.options.map((o, i) => (i === selectedIndex ? { ...o, selected: true } : o)),
        fails: state.fails + (correct ? 0 : 1),
      };

      const success = newState.fields.every(field => field.correct);

      if (success || newState.fails > 2) {
        newState.finished = true;
        newState.success = success;
      }

      return newState;
    });
  };

  onReturnLetter = (index, originIndex) => {
    this.setState(state => ({
      fields: state.fields.map((f, i) => (i === index ? { ...f, letter: '', filled: false, originIndex: null } : f)),
      options: state.options.map((o, i) => (i === originIndex ? { ...o, selected: false } : o)),
    }));
  };

  onEndTimer = () => {
    this.setState({ finished: true });
  };

  toggleCheatMode = () => this.setState(state => ({ cheatMode: !state.cheatMode }));

  render() {
    const { options, fields, finished, success } = this.state;
    return (
      <div className={classNames('app', { finished })}>
        <Timer finished={finished} success={success} onEndTimer={this.onEndTimer} />
        <Title />
        <LetterBoxWrapper letters={options} />
        <LetterBoxWrapper
          letters={fields}
          methods={{
            onDropLetter: this.onDropLetter,
            onReturnLetter: this.onReturnLetter,
          }}
        />

        <Feedback finished={finished} success={success} />
        <Footer toggleCheatMode={this.toggleCheatMode} cheat={this.state.cheatMode ? word.join('') : ''} />
      </div>
    );
  }
}
