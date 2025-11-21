// src/components/VideoSection.jsx
import React from 'react';

const VideoSection = ({ t, playerRef, videoBlurred, hasSubmittedLead }) => {
  return (
    <section id="video" className="section section--video">
      <div className="container">
        <header className="section__header">
          <h2>{t.video.title}</h2>
          <p>{t.video.subtitle}</p>
        </header>

        <div className="video-single">
          <div className={`youtube-video-wrapper ${videoBlurred ? 'youtube-video-wrapper--blurred' : ''}`}>
            {/* ✅ यह div YouTube player के लिए है */}
            <div ref={playerRef} className="youtube-player" id="youtube-player"></div>
            
            {videoBlurred && (
              <div className="video-blur-overlay">
                <div className="video-blur-message">
                  <h3>{t.video.blurTitle}</h3>
                  <p>{t.video.blurSubtitle}</p>
                </div>
              </div>
            )}
          </div>
          
          {hasSubmittedLead && (
            <p className="badge badge--success">{t.video.thankYou}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
