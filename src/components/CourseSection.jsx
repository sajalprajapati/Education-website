import React, { useState } from 'react';

const CourseSection = ({ t }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="course" className="section section--course">
      <div className="container">
        <header className="section__header">
          <h2>{t.course.title}</h2>
          <p>{t.course.subtitle}</p>
        </header>

        <div className="course-grid">
          <div className="course-grid__col">
            <h3>{t.course.overviewTitle}</h3>
            <p>{t.course.description}</p>

            <ul className="pill-list">
              <li>{t.course.meta.duration}</li>
              <li>{t.course.meta.level}</li>
              <li>{t.course.meta.prereq}</li>
            </ul>

            <h4>{t.course.objectivesTitle}</h4>
            <ul className="checklist">
              {t.course.objectives.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="course-grid__col">
            <div className="card">
              <h3>{t.course.curriculumTitle}</h3>
              <ul className="accordion">
                {t.course.modules.map((m, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <li className="accordion__item" key={i}>
                      <button
                        className="accordion__button"
                        aria-expanded={isOpen}
                        onClick={() => handleToggle(i)}
                      >
                        <span>{m.title}</span>
                        <span className="accordion__icon">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      <div
                        className={`accordion__panel ${
                          isOpen ? "accordion__panel--open" : ""
                        }`}
                        aria-hidden={!isOpen}
                      >
                        <p>{m.content}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="card instructor-card">
              <h3>{t.course.instructorTitle}</h3>
              <div className="instructor-card__body">
                <img
                  src="images/instructor.jpg"
                  alt="Instructor"
                  className="instructor-card__photo"
                />
                <div>
                  <p className="instructor-card__name">
                    {t.course.instructor.name}
                  </p>
                  <p className="instructor-card__role">
                    {t.course.instructor.role}
                  </p>
                  <p className="instructor-card__bio">
                    {t.course.instructor.bio}
                  </p>
                </div>
              </div>
            </div>

            <div className="card price-card">
              <h3>{t.course.priceTitle}</h3>
              <p className="price-card__label">{t.course.priceLabel}</p>
              <p className="price-card__value">{t.course.priceValue}</p>
              <p className="price-card__note">{t.course.priceNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
