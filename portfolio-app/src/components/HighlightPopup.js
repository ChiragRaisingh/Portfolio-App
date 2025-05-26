import React from 'react';
import ReactDOM from 'react-dom';
import './HighlightPopup.css';

export default function HighlightPopup({ trigger, setTrigger, children }) {
  if (!trigger) return null;

  return ReactDOM.createPortal(
    <div className="highlightPopup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>Close</button>
        {children}
      </div>
    </div>,
    document.body
  );
}