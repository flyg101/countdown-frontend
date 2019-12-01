import React from 'react';

export default function Footer({ cheat, toggleCheatMode }) {
  return (
    <footer className="footer" onClick={toggleCheatMode}>
      <h5>
        Made with{' '}
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>{' '}
        by{' '}
        <a href="https://github.com/flyg101" target="_blank" rel="noopener noreferrer">
          Ebuka Ugwu
        </a>
        <span>&nbsp;&nbsp;&nbsp;{cheat}</span>
      </h5>
    </footer>
  );
}
