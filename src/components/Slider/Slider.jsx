import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Slider.scss";
import videoFile from "../../videos/pexels-mehmet-kılınç-19002091 (Original).mp4";
import waterSound from "../../audios/Calming-beach-sounds.mp3";

const Slider = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = () => {
      const currentVideoRef = videoRef.current;
      const currentAudioRef = audioRef.current;

      if (currentVideoRef) {
        currentVideoRef.pause();
      }

      if (currentAudioRef) {
        currentAudioRef.pause();
      }
    };

    // Attach the cleanup function to the beforeunload event
    window.addEventListener("beforeunload", cleanup);

    return () => {
      window.removeEventListener("beforeunload", cleanup);
    };
  }, []);

  useEffect(() => {
    const playVideoAndAudio = async () => {
      await videoRef.current.play();
      await audioRef.current.play();
    };

    playVideoAndAudio();

    const intervalId = setInterval(() => {
      if (navigate) {
        navigate("/");
      }
    }, 5000); // Change slide every 5 seconds and navigate to the home page

    return () => {
      clearInterval(intervalId);
      const currentVideoRef = videoRef.current;
      const currentAudioRef = audioRef.current;

      if (currentVideoRef) {
        currentVideoRef.pause();
      }

      if (currentAudioRef) {
        currentAudioRef.pause();
      }
    };
  }, [navigate]);

  return (
    <div className="slider">
      <div className="container">
        <video ref={videoRef} src={videoFile} type="video/mp4" autoPlay loop muted />
      </div>
      <audio ref={audioRef} src={waterSound} type="audio/mp3" autoPlay loop />
    </div>
  );
};

export default Slider;
