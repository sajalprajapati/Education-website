import React from 'react';

const Hero = ({ t, onEnrollClick }) => {
  return (
    <section id="hero" className="section hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>{t.hero.title}</h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__meta">
            <span>{t.hero.duration}</span>
            <span>{t.hero.level}</span>
          </div>
          <div className="hero__actions">
            {/* ✅ Yeh ab scroll se ignore hoga, sirf form khulega */}
            <a
              href="#cta-main"
              data-no-scroll="true"
              className="btn btn--primary"
              onClick={onEnrollClick}
            >
              {t.hero.ctaPrimary}
            </a>

            <a href="#video" className="btn btn--ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card">
            <p>{t.hero.highlight}</p>
            <ul>
              {t.hero.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
