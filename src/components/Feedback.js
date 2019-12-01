import React from 'react';

export default function Feedback({ finished = false, success = false }) {
  return finished ? (
    <div onClick={() => window.location.reload()} className="feedback">
      {success ? (
        <div>
          <img alt="success" src="/success.png" />
        </div>
      ) : (
        <div className="fail">
          <img alt="fail" src="/fail.png" />
          <h6>Try Again</h6>
        </div>
      )}
    </div>
  ) : null;
}
