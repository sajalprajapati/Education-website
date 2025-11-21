import React, { useState } from "react";

const Modal = ({ t, leadForm, leadErrors, onClose, onChange, onSubmit }) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleAttemptClose = () => {
    setShowWarning(true);
  };

  const handleConfirmClose = () => {
    setShowWarning(false);
    onClose(); // actual close callback
  };

  const handleCancelClose = () => {
    setShowWarning(false);
  };

  return (
    <div className="modal" role="dialog" aria-modal="true">

      {/* BACKDROP CLICK -> Show Warning */}
      <div className="modal__backdrop" onClick={handleAttemptClose} />

      <div className="modal__content modal__content--video">
        {/* CLOSE BUTTON */}
        <button className="modal__close" type="button" onClick={handleAttemptClose}>
          ×
        </button>

        {/* WARNING POPUP */}
        {showWarning && (
          <div className="modal-warning">
            <div className="modal-warning__box">
              <h4>⚠ Wait!</h4>
              <p>
                This course ends with a sale. Hurry up!  
                If you leave, you might miss your chance.
              </p>

              <div className="modal-warning__actions">
                <button className="btn btn--danger" onClick={handleConfirmClose}>
                  Leave Anyway
                </button>
                <button className="btn btn--primary" onClick={handleCancelClose}>
                  Stay
                </button>
              </div>
            </div>
          </div>
        )}

        {/* NORMAL FORM UI */}
        <div className="modal__icon">🎓</div>
        <h3>{t.modal.title}</h3>
        <p>{t.modal.subtitle}</p>

        <form onSubmit={onSubmit} className="form">
          <div className="form__group">
            <label htmlFor="modalName">{t.modal.form.name} *</label>
            <input
              id="modalName"
              name="name"
              value={leadForm.name}
              onChange={onChange}
              placeholder={t.modal.form.namePlaceholder}
            />
            {leadErrors.name && <span className="form__error">{leadErrors.name}</span>}
          </div>

          <div className="form__group">
            <label htmlFor="modalEmail">{t.modal.form.email} *</label>
            <input
              id="modalEmail"
              name="email"
              type="email"
              value={leadForm.email}
              onChange={onChange}
              placeholder={t.modal.form.emailPlaceholder}
            />
            {leadErrors.email && <span className="form__error">{leadErrors.email}</span>}
          </div>

          <div className="form__group">
            <label htmlFor="modalPhone">{t.modal.form.phone}</label>
            <input
              id="modalPhone"
              name="phone"
              type="tel"
              value={leadForm.phone}
              onChange={onChange}
              placeholder={t.modal.form.phonePlaceholder}
            />
          </div>

          <button className="btn btn--primary btn--full" type="submit">
            {t.modal.form.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
