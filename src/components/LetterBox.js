import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

export default function LetterBox({ letter, index, filled, correct, selected, originIndex, methods, field = false }) {
  const draggable = letter && !field && !selected;
  const wrong = letter && filled && !correct;

  return (
    <div>
      <div
        className={classNames('letterbox', { disabled: selected, wrong, correct })}
        draggable={draggable ? 'true' : ''}
        onDragStart={e => {
          e.dataTransfer.setData('letter', letter);
          e.dataTransfer.setData('index', index);
        }}
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          if (field) {
            // Droppable Field Box. Continue
            const droppedLetter = e.dataTransfer.getData('letter');
            const selectedIndex = e.dataTransfer.getData('index');

            return methods.onDropLetter(droppedLetter, index, Number(selectedIndex));
          } else {
            // Option boxes are not droppable. cancel
            return e.preventDefault();
          }
        }}
        onClick={e => {
          if (!originIndex || !wrong) return e.preventDefault();

          return methods.onReturnLetter(index, originIndex);
        }}
      >
        <span className="letter">{letter}</span>
      </div>
      {wrong ? <span className="wrong-prompt">Wrong! Click to Change</span> : null}
    </div>
  );
}

LetterBox.propTypes = {
  letter: PropTypes.string.isRequired,
};
