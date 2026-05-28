import React from 'react';
import './Gallery.css';
import gallery1Raw from '../assets/gallery1.svg?raw';
import gallery2Raw from '../assets/gallery2.svg?raw';
import gallery3Raw from '../assets/gallery3.svg?raw';
import gallery4Raw from '../assets/gallery4.svg?raw';
import heroImg from '../assets/hero.png';

const galleryItems = [
  { id: 1, image: heroImg, category: 'Academics', title: 'Interactive Learning' },
  { id: 2, image: heroImg, category: 'Activities', title: 'Playground & Activity' },
  { id: 3, image: heroImg, category: 'Events', title: 'Events & Celebrations' },
  { id: 4, image: heroImg, category: 'Campus', title: 'Campus Life' },
  { id: 5, image: heroImg, category: 'Library', title: 'Modern Library' },
  { id: 6, image: heroImg, category: 'Students', title: 'Science Exhibition' },
  { id: 7, image: heroImg, category: 'Arts', title: 'Music & Dance' },
  { id: 8, image: heroImg, category: 'Transport', title: 'School Transport' },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <div className="gallery__header">
          <span className="section-badge">Visual Journey</span>
          <h2 className="section-title">School Life Gallery</h2>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery__card">
              <div className="gallery__image-wrapper">
                {item.raw ? (
                  <div className="gallery__svg" dangerouslySetInnerHTML={{ __html: item.raw }} />
                ) : (
                  <div
                    className="gallery__image"
                    role="img"
                    aria-label={item.title}
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}

                <div className="gallery__overlay">
                  <div className="gallery__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                  <div className="gallery__info">
                    <span className="gallery__category">{item.category}</span>
                    <h3 className="gallery__title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="gallery__footer">
          <a href="#more" className="gallery__btn">View All Media</a>
        </div>
      </div>
    </section>
  );
}