/*Created by Nikita S Raj Kapini on 25/6/25*/

import React from 'react';
import './SessionExpiredModal.css'; // optional, or inline style

interface Props {
  onClose: () => void;
}

const SessionExpiredModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="session-modal-overlay">
      <div className="session-modal-content">
        <h2>🔒 Session Expired</h2>
        <p>Your session has expired. Please log in again to continue.</p>
        <button className="session-modal-button" onClick={onClose}>Go to Login</button>
      </div>
    </div>
  );
};

export default SessionExpiredModal;