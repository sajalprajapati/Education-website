// src/components/CoursesSection.jsx
import React, { useState } from 'react';

const CoursesSection = ({ t, onEnrollClick }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <>
        {"★".repeat(fullStars)}
        {hasHalfStar && "⯨"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  const handleViewDetails = (course) => {
    setExpandedCourseId(expandedCourseId === course.id ? null : course.id);
  };

  return (
    <section id="courses" className="section section--courses">
      <div className="container">
        <header className="section__header">
          <h2>{t.courses.title}</h2>
          <p>{t.courses.subtitle}</p>
        </header>

        <div className="courses-grid">
          {t.courses.list.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            
            return (
              <div key={course.id} className="course-card">
                {/* Course Image */}
                <div className="course-card__image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-card__badge">{course.discount}</div>
                  <div className="course-card__category">{course.category}</div>
                </div>

                {/* Course Content */}
                <div className="course-card__content">
                  {/* Instructor Info */}
                  <div className="course-card__instructor">
                    <img 
                      src="https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
                      alt={course.instructor.name}
                      className="course-card__instructor-avatar"
                    />
                    <span className="course-card__instructor-name">
                      {course.instructor.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="course-card__title">{course.title}</h3>
                  
                  {/* Description */}
                  <p className="course-card__description">
                    {course.shortDescription}
                  </p>

                  {/* Rating & Enrolled */}
                  <div className="course-card__meta">
                    <div className="course-card__rating">
                      <span className="course-card__rating-stars">
                        {renderStars(course.rating)}
                      </span>
                      <span className="course-card__rating-value">
                        {course.rating} ({course.reviews})
                      </span>
                    </div>
                    <div className="course-card__enrolled">
                      👥 {course.enrolled.toLocaleString()} {t.courses.enrolled}
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="course-card__details">
                    <div className="course-card__detail">
                      <span className="course-card__detail-icon">📚</span>
                      <span>{t.courses.level} {course.level}</span>
                    </div>
                    <div className="course-card__detail">
                      <span className="course-card__detail-icon">⏱️</span>
                      <span>{course.duration} {t.courses.duration}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  {!isExpanded && (
                    <ul className="course-card__features">
                      {course.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>
                          <span className="course-card__check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Expanded Modules */}
                  {isExpanded && (
                    <div className="course-card__modules">
                      <h4>Course Modules:</h4>
                      <ul className="course-card__modules-list">
                        {course.modules.map((module, idx) => (
                          <li key={idx} className="course-card__module">
                            <div className="course-card__module-header">
                              <span className="course-card__module-number">
                                {idx + 1}
                              </span>
                              <span className="course-card__module-title">
                                {module.title}
                              </span>
                              <span className="course-card__module-duration">
                                {module.duration}
                              </span>
                            </div>
                            <p className="course-card__module-content">
                              {module.content}
                            </p>
                          </li>
                        ))}
                      </ul>

                      <h4>What You'll Get:</h4>
                      <ul className="course-card__features course-card__features--expanded">
                        {course.features.map((feature, idx) => (
                          <li key={idx}>
                            <span className="course-card__check">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* View Details Button */}
                  <button
                    className="course-card__toggle"
                    onClick={() => handleViewDetails(course)}
                  >
                    {isExpanded ? '▲ Hide Details' : '▼ View Full Details'}
                  </button>

                  {/* Price & CTA */}
                  <div className="course-card__footer">
                    <div className="course-card__price">
                      <span className="course-card__price-current">
                        {course.price}
                      </span>
                      <span className="course-card__price-original">
                        {course.originalPrice}
                      </span>
                    </div>
                    <button 
                      className="btn btn--primary btn--full"
                      onClick={onEnrollClick}
                    >
                      {t.courses.enrollNow}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
