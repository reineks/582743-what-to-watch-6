import React from 'react';
import PropTypes from 'prop-types';
import {useParams, useHistory} from 'react-router-dom';
import NotFound from "../page-not-found/page-not-found";
import FilmProp from "../props/film.prop";

const Player = ({films}) => {

  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));
  const history = useHistory();

  const handleBtnClick = () => {
    history.push(`/films/${film.id}`);
  };

  if (!film) {
    return <NotFound />;
  }

  const {videoLink, backgroundImage, title} = film;

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={backgroundImage}></video>

      <button type="button" className="player__exit" onClick={handleBtnClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" >
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

Player.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default Player;
