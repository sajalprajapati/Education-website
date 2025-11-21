import React from 'react';

const TestimonialsSection = ({ t }) => {
  const renderStars = (count) =>
    "★★★★★".slice(0, count) + "☆☆☆☆☆".slice(0, 5 - count);

  return (
    <section id="testimonials" className="section section--testimonials">
      <div className="container">
        <header className="section__header">
          <h2>{t.testimonials.title}</h2>
        </header>

        <div className="cards-grid">
          {t.testimonials.items.map((item, index) => (
            <div className="card testimonial-card" key={index}>
              {/* Avatar + name/role */}
              <div className="testimonial-card__header">
                {item.avatar || (
                 <img
  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=60"
  alt={item.name}
  className="testimonial-card__avatar"
  loading="lazy"
/>

                )}
                <div className="testimonial-card__person">
                  <p className="testimonial-card__name">{item.name}</p>
                  <p className="testimonial-card__role">{item.role}</p>
                </div>
              </div>

              <div className="testimonial-card__rating">
                {renderStars(item.rating)}
              </div>

              <p className="testimonial-card__text">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
