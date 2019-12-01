import React from 'react';

import LetterBox from './LetterBox';

export default function LetterBoxWrapper({ letters, methods }) {
  return (
    <div className="box-container">
      {letters.map((o, i) => (
        <LetterBox key={i} {...o} methods={methods} />
      ))}
    </div>
  );
}
