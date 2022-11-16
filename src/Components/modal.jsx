import React from 'react';


const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'>
        <div className='modalRight'>
            <div>
            <h1> Connect wallet</h1>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          </div>
          <div className='content'>
            <button>Meta Mask</button>
            <button>WalletConnect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;