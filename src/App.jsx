import React, { useState, useEffect } from 'react';
import { translations } from './constants/translations';
import { useYouTubePlayer } from './hooks/useYouTubePlayer';

// Import all components
import Header from './components/Header';
import StickyCTA from './components/StickyCTA';
import Hero from './components/Hero';
import CoursesSection from './components/CoursesSection';
import CourseSection from './components/CourseSection';
import VideoSection from './components/VideoSection';
import MaterialsSection from './components/MaterialsSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Toast from './components/Toast';

const App = () => {
  // Language state
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const t = translations[lang];

  // Lead form state
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [hasSubmittedLead, setHasSubmittedLead] = useState(() => 
    localStorage.getItem("leadSubmitted") === "true"
  );
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [leadErrors, setLeadErrors] = useState({});
  const [leadThankYou, setLeadThankYou] = useState(false);

  // YouTube player hook
  // const {
  //   playerRef,
  //   showLeadModal: videoLeadModal,
  //   setShowLeadModal: setVideoLeadModal,
  //   videoBlurred,
  //   resumeVideo,
  // } = useYouTubePlayer(hasSubmittedLead);
  const {
  playerRef,
  showLeadModal: videoLeadModal,
  videoBlurred,
  resumeVideo,
} = useYouTubePlayer(hasSubmittedLead);


  // Sync video modal with main modal
  useEffect(() => {
    if (videoLeadModal) {
      setShowLeadModal(true);
    }
  }, [videoLeadModal]);

  // Language persistence
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Smooth scrolling
  // useEffect(() => {
  //   const handler = (e) => {
  //     const target = e.target.closest('a[href^="#"]');
  //     if (!target) return;
  //     const id = target.getAttribute("href").slice(1);
  //     const el = document.getElementById(id);
  //     if (el) {
  //       e.preventDefault();
  //       el.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  //   document.addEventListener("click", handler);
  //   return () => document.removeEventListener("click", handler);
  // }, []);
  useEffect(() => {
  const handler = (e) => {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;

    // ✅ Enroll / modal links ke liye scroll disable
    if (target.dataset.noScroll === "true") return;

    const id = target.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}, []);


  // Handlers
  const handleLanguageChange = (e) => {
    setLang(e.target.value);
  };

  const handleEnrollClick = (e) => {
    e.preventDefault();
    setShowLeadModal(true);
  };

  const handleLeadChange = (e) => {
    const { name, value } = e.target;
    setLeadForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateLeadForm = () => {
    const errors = {};
    if (!leadForm.name.trim()) {
      errors.name = t.modal.errors.required;
    }
    if (!leadForm.email.trim()) {
      errors.email = t.modal.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadForm.email)) {
      errors.email = t.modal.errors.email;
    }
    return errors;
  };

 const handleLeadSubmit = async (e) => {
  e.preventDefault();

  const errors = validateLeadForm();
  setLeadErrors(errors);
  if (Object.keys(errors).length > 0) return;

  // 🔗 Web3Forms ko data bhejo
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "7b5ffb97-5aa7-4f3b-bbf5-57583315872a",
        name: leadForm.name,
        email: leadForm.email,
        phone: leadForm.phone,
        subject: "New course lead",
        from_name: "Course Landing Page",
      }),
    });

    const data = await response.json();

    if (!data.success) {
      console.error("Web3Forms error:", data);
      // optional: yahan user ko error dikhana ho toh state se message dikha sakte ho
      // return; // agar failure pe modal band nahi karwana
    }
  } catch (error) {
    console.error("Web3Forms request failed:", error);
    // optional: yahan bhi user-facing error message dikha sakte ho
    // return;
  }

  // ✅ Local logic: lead ko store, toast, modal close, video resume
  localStorage.setItem("leadSubmitted", "true");
  setHasSubmittedLead(true);
  setLeadThankYou(true);
  setTimeout(() => setLeadThankYou(false), 4000);

  setShowLeadModal(false);

  // 🔁 Sirf video-gate se open hua modal ho to hi video resume karein
  if (videoLeadModal) {
    resumeVideo();
  }
};



  const handleCloseModal = () => {
  setShowLeadModal(false);

  // Agar yeh modal video ke 2-min gate ki wajah se khula tha,
  // tab hi video resume karein
  if (videoLeadModal) {
    resumeVideo();
  }
};


  const handleDownload = (filename) => {
    const link = document.createElement("a");
    link.href = `/pdfs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header 
        t={t} 
        lang={lang} 
        onLanguageChange={handleLanguageChange}
        onEnrollClick={handleEnrollClick}
      />
      
      <StickyCTA t={t} onEnrollClick={handleEnrollClick} />
      
      <Hero t={t} onEnrollClick={handleEnrollClick} />
      
      <CoursesSection t={t} onEnrollClick={handleEnrollClick} />
      
      {/* <CourseSection t={t} /> */}
      
      <VideoSection 
        t={t}
        playerRef={playerRef}
        videoBlurred={videoBlurred}
        hasSubmittedLead={hasSubmittedLead}
      />
      
      <MaterialsSection t={t} onDownload={handleDownload} />
      
      <FAQSection t={t} />
      
      <TestimonialsSection t={t} />
      
      <CTASection t={t} onEnrollClick={handleEnrollClick} />
      
      <Footer t={t} />

      {showLeadModal && (
        <Modal
          t={t}
          leadForm={leadForm}
          leadErrors={leadErrors}
          onClose={handleCloseModal}
          onChange={handleLeadChange}
          onSubmit={handleLeadSubmit}
        />
      )}

      {leadThankYou && <Toast message={t.video.thankYou} />}
    </>
  );
};

export default App;
