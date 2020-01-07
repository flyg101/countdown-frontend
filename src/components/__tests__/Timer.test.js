import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Timer from '../Timer';

describe('Timer component tests', () => {
  test('renders with correct initial state', () => {
    const endTimerFn = jest.fn();
    const { container } = render(<Timer onEndTimer={endTimerFn} />);

    expect(container.firstChild).toHaveTextContent('1:00');
  });

  test('renders correct DOM Tree', () => {
    const { container } = render(<Timer onEndTimer={jest.fn()} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h1
          class="timer"
        >
          1
          :
          00
        </h1>
      </div>
    `);
  });
});
