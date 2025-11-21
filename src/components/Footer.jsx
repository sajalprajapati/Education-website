import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h4>{t.footer.contactTitle}</h4>
          <p>{t.footer.email}</p>
          <p>{t.footer.phone}</p>
          <p>{t.footer.address}</p>
        </div>

        <div>
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li><a href="#hero">{t.nav.home}</a></li>
            <li><a href="#courses">{t.nav.course}</a></li>
            <li><a href="#faq">{t.nav.faq}</a></li>
            <li><a href="#materials">{t.nav.materials}</a></li>
          </ul>
        </div>

        <div>
          <h4>{t.footer.social}</h4>
          <ul>
            <li><a href="#!">Twitter</a></li>
            <li><a href="#!">LinkedIn</a></li>
            <li><a href="#!">YouTube</a></li>
          </ul>
        </div>

        <div>
          <h4>{t.footer.newsletterTitle}</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="form"
          >
            <div className="form__group">
              <input
                type="email"
                placeholder={t.footer.newsletterPlaceholder}
              />
            </div>
            <button className="btn btn--primary" type="submit">
              {t.footer.newsletterButton}
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>{t.footer.copyright}</p>
          <div className="footer__links">
            <a href="#!">{t.footer.privacy}</a>
            <a href="#!">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
