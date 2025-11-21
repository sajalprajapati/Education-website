import React, { useEffect } from 'react';

const Header = ({ t, lang, onLanguageChange, onEnrollClick }) => {
    if (!t || !t.nav) {
    console.error('Translations not loaded properly:', t);
    return null; // or return a loading state
  }

  useEffect(() => {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav__menu a:not(.btn)');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add('header--scrolled');
      } else {
        header?.classList.remove('header--scrolled');
      }
      
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.documentElement.style.setProperty('--scroll-width', `${scrolled}%`);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;

    const onClick = () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("nav__menu--open", !expanded);
    };

    toggle.addEventListener("click", onClick);
    return () => toggle.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#hero" className="logo">
          {t.brand}
        </a>

        <nav className="nav" aria-label="Main navigation">
          <button
            className="nav__toggle"
            aria-expanded="false"
            aria-controls="navMenu"
          >
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="nav__toggle-bar" />
            <span className="sr-only">{t.nav.toggle}</span>
          </button>
          <ul className="nav__menu" id="navMenu">
            <li><a href="#hero">{t.nav.home}</a></li>
            <li><a href="#courses">{t.nav.course}</a></li>
            <li><a href="#video">{t.nav.preview}</a></li>
            <li><a href="#materials">{t.nav.materials}</a></li>
            <li><a href="#faq">{t.nav.faq}</a></li>
            <li><a href="#testimonials">{t.nav.testimonials}</a></li>
            <li>
              <a href="#cta-main"  data-no-scroll="true" className="btn btn--small" onClick={onEnrollClick}>
                {t.nav.enroll}
              </a>
            </li>
          </ul>
        </nav>

        <div className="lang-switcher">
          <label htmlFor="languageSwitcher" className="sr-only">
            Language
          </label>
          <select
            id="languageSwitcher"
            className="lang-switcher__select"
            value={lang}
            onChange={onLanguageChange}
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
