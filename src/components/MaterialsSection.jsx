import React from 'react';

const MaterialsSection = ({ t, onDownload }) => {
  return (
    <section id="materials" className="section section--materials">
      <div className="container">
        <header className="section__header">
          <h2>{t.downloads.title}</h2>
          <p>{t.downloads.subtitle}</p>
        </header>

        <div className="cards-grid">
          {t.downloads.items.map((item, index) => (
            <div className="card download-card" key={index}>
              <div className="download-card__icon">📄</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="download-card__size">{item.size}</span>
              <button
                type="button"
                className="btn btn--primary btn--full"
                onClick={() => onDownload(item.file)}
              >
                {t.downloads.download}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
