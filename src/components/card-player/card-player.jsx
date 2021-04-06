import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const FilmCardPlayer = (props) => {

  const {posterSrc, videoSrc, isMuted, isPlaying, style = {}} = props;
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.load();
      }
    }
  }, [isPlaying]);

  return (
    <video
      src={videoSrc}
      className=""
      poster={posterSrc}
      muted={isMuted}
      style={style || {}}
      ref={videoRef}
    />
  );
};

FilmCardPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  posterSrc: PropTypes.string.isRequired,
  style: PropTypes.object,
  isMuted: PropTypes.bool,
  isPlaying: PropTypes.bool.isRequired
};

export default FilmCardPlayer;
