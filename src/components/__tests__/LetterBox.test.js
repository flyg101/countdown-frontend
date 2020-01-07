import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, getByText, fireEvent } from '@testing-library/react';
import LetterBox from '../LetterBox';

describe('test LetterBox Component', () => {
  test('renders LetterBox successfully', () => {
    render(<LetterBox letter="A" />);
  });

  test('renders with correct letter', () => {
    const { container } = render(<LetterBox letter="H" index={2} />);
    const letterSpan = getByText(container, 'H');
    expect(letterSpan.textContent).toBe('H');
  });

  test('renders witch correct classNames', () => {
    const { container } = render(<LetterBox letter="C" correct={true} selected={true} index={4} />);
    const letterSpan = getByText(container, 'C');
    const wrapDiv = container.firstChild.firstChild;

    expect(letterSpan).toHaveClass('letter');
    expect(wrapDiv).toHaveClass('letterbox disabled correct');
  });

  test('renders with expected DOM Tree', () => {
    const { container } = render(<LetterBox letter="A" />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <div
            class="letterbox"
            draggable="true"
          >
            <span
              class="letter"
            >
              A
            </span>
          </div>
        </div>
      </div>
    `);
  });
});
