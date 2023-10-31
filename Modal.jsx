import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  //  useEffect is for handling focus when the modal is open.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling in the background
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen]);

  const handleKeyUp = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="modal-overlay"
          onClick={handleClickOutside}
          onKeyUp={handleKeyUp}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-content" role="document">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;




