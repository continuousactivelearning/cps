//Created by Nakshatra Bhandary on 20/6/25

import React from 'react';
import './LogoutModal.css';

interface LogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to logout?</h3>
        <div className='modal-buttons'>
          <button className="modal-button yes-button" onClick={onConfirm}>Yes</button>
          <button className="modal-button no-button" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;



