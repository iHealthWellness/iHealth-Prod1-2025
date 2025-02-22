import React, { useState, useRef, useEffect } from 'react';
import styles from './index.module.css';

const HomepageEmbeddedVideo = ({ title = "Founder's Story | Reimagining Patient-Centered Healthcare" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [progress, setProgress] = useState(0);
  const iframeRef = useRef(null);

  
  const videoUrl = "https://www.youtube-nocookie.com/embed/-Gv3FhUHCWU?si=jwrad999wdnVD0jn&enablejsapi=1&rel=0&modestbranding=1&controls=0&showinfo=0";

  useEffect(() => {
    
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(iframeRef.current, {
        events: {
          onStateChange: onPlayerStateChange,
          onReady: onPlayerReady
        }
      });
    };
  }, []);

  const onPlayerReady = (event) => {
    // Player is ready
    const duration = event.target.getDuration();
    updateTimeDisplay(0);
  };

  const onPlayerStateChange = (event) => {
    // Update playing state based on YouTube player state
    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
  };

  const updateTimeDisplay = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    setCurrentTime(`${minutes}:${remainingSeconds.toString().padStart(2, '0')}`);
  };

  const togglePlay = () => {
    if (iframeRef.current) {
      const message = isPlaying ? 'pauseVideo' : 'playVideo';
      iframeRef.current.contentWindow.postMessage(`{"event":"command","func":"${message}","args":""}`, '*');
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.source === iframeRef.current.contentWindow) {
        const data = JSON.parse(event.data);
        if (data.event === 'infoDelivery' && data.info && data.info.currentTime) {
          updateTimeDisplay(data.info.currentTime);
          setProgress((data.info.currentTime / data.info.duration) * 100);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleProgressClick = (e) => {
    if (iframeRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
      const newTime = clickPosition * iframeRef.current.getDuration();
      iframeRef.current.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${newTime}, true]}`, '*');
      setProgress(clickPosition * 100);
    }
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        <iframe 
          ref={iframeRef}
          className={styles.iframe}
          src={videoUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <div className={styles.controlsBar}>
          <button className={styles.playButton} onClick={togglePlay}>
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          <span className={styles.timeDisplay}>{currentTime}</span>

          <div 
            className={styles.progressBarContainer}
            onClick={handleProgressClick}
          >
            <div 
              className={styles.progressBar} 
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className={styles.controlsRight}>
            <button className={styles.controlButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageEmbeddedVideo;