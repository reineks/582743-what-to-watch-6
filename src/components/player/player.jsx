import React, {useRef, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import NotFound from "../page-not-found/page-not-found";
import {SECONDS_IN_MINUTE} from "../../consts";
import {getFilmById} from "../../store/data/selectors";
import {convertSecondsToHHMMss} from "../../utils";
import {AppPaths} from "../../consts";

const Player = () => {

  const {id} = useParams();
  const film = useSelector((state) => getFilmById(state, id));
  const history = useHistory();
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progressValue, setProgressValue] = useState(0);

  const handleBtnClick = () => {
    history.push(AppPaths.MAIN);
  };

  const handleFullScreenClick = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullScreen) {
        videoRef.current.webkitRequestFullScreen();
      }
    }
  };

  const handleOnPlaying = () => {
    setCurrentTime(videoRef.current.currentTime);
    setProgressValue(
        ((videoRef.current.currentTime / videoRef.current.duration) * 100).toFixed(2)
    );
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  if (!film) {
    return <NotFound />;
  }

  const {videoLink, backgroundImage, title, runTime} = film;

  const durationInSeconds = runTime * SECONDS_IN_MINUTE;

  return (
    <div className="player">
      <video
        src={videoLink}
        className="player__video"
        poster={backgroundImage}>
        ref={videoRef}
        onTimeUpdate={handleOnPlaying}
      </video>

      <button type="button" className="player__exit" onClick={handleBtnClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progressValue} max="100"></progress>
            <div className="player__toggler" style={{left: `${progressValue}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{convertSecondsToHHMMss(durationInSeconds - currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayPauseClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div >
    </div >
  );
};

export default Player;
