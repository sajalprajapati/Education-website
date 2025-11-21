import React from 'react';

const StickyCTA = ({ t, onEnrollClick }) => {
  return (
    <div className="sticky-cta">
      <a href="#cta-main" className="btn btn--full"  data-no-scroll="true" onClick={onEnrollClick}>
        {t.cta.sticky}
      </a>
    </div>
  );
};

export default StickyCTA;
