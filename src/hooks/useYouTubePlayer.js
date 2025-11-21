import { useEffect, useRef, useState } from 'react';

export const useYouTubePlayer = (hasSubmittedLead) => {
  const playerRef = useRef(null);
  const playerInstanceRef = useRef(null);
  const watchTimeRef = useRef(0);
  const timerIntervalRef = useRef(null);
  const gateShownRef = useRef(false);   // 👈 NEW → prevent popup from repeating

  const [showLeadModal, setShowLeadModal] = useState(false);
  const [videoBlurred, setVideoBlurred] = useState(false);

  useEffect(() => {
    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    const initializePlayer = () => {
      if (!playerRef.current || playerInstanceRef.current) return;

      try {
        playerInstanceRef.current = new window.YT.Player(playerRef.current, {
          height: '100%',
          width: '100%',
          videoId: '11ixIV656X0',
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onReady: () => console.log("Player Ready"),
            onStateChange: onPlayerStateChange,
          },
        });
      } catch (err) {
        console.error('YT init error:', err);
      }
    };

    window.onYouTubeIframeAPIReady = initializePlayer;

    if (window.YT && window.YT.Player) {
      setTimeout(initializePlayer, 100);
    }

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      if (playerInstanceRef.current?.destroy) {
        playerInstanceRef.current.destroy();
      }
    };
  }, []);

  const onPlayerStateChange = (event) => {
    // If form already submitted OR popup already shown → do nothing
    if (hasSubmittedLead || gateShownRef.current) return;

    if (event.data === window.YT.PlayerState.PLAYING) {
      if (!timerIntervalRef.current) {
        timerIntervalRef.current = setInterval(() => {
          watchTimeRef.current += 1;

          if (watchTimeRef.current >= 120) {
            gateShownRef.current = true;   // 👈 popup will never repeat
            setShowLeadModal(true);
            setVideoBlurred(true);

            playerInstanceRef.current?.pauseVideo();
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
          }
        }, 1000);
      }
    } else {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }
  };

  // 👇 FIXED: Resume correctly after cross
  const resumeVideo = () => {
    setShowLeadModal(false);
    setVideoBlurred(false);

    // Reset the timer if you want a new 2-minute window
    // watchTimeRef.current = 0;

    if (playerInstanceRef.current?.playVideo) {
      playerInstanceRef.current.playVideo();
    }
  };

  return {
    playerRef,
    showLeadModal,
    setShowLeadModal,
    videoBlurred,
    setVideoBlurred,
    resumeVideo,
  };
};
