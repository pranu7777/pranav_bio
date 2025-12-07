import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    // Close on backdrop click
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleBackdropClick}>
            <div className="modal-content glass">
                <button className="modal-close" onClick={onClose} aria-label="Close Modal">
                    <i className="fas fa-times"></i>
                </button>
                {title && <h3 className="modal-title">{title}</h3>}
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
