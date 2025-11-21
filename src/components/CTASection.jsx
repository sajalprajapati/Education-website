import React from 'react';

const CTASection = ({ t, onEnrollClick }) => {
  return (
    <section id="cta-main" className="section section--cta">
      <div className="container section__header section__header--center">
        <h2>{t.cta.mainTitle}</h2>
        <p>{t.cta.mainSubtitle}</p>
        <a href="#hero" className="btn btn--primary btn--large"  data-no-scroll="true" onClick={onEnrollClick}>
          {t.cta.button}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
