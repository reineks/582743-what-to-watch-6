import React, {memo, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import FilmProp from "../props/film.prop";
import FilmCardPlayer from "../card-player/card-player";
import {CARD_PLAYER_TIMEOUT} from "../../consts";

const FilmCard = (props) => {

  const {film} = props;
  const {title, previewVideoLink, previewImage} = film;
  const [isPlaying, setIsPlaying] = useState(false);
  let timeoutId = useState();


  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setIsPlaying(true);
    }, CARD_PLAYER_TIMEOUT);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  });

  const handleCardClick = () => {
    history.push(`/films/${film.id}`);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-movie-card__image" onClick={handleCardClick}>
        <FilmCardPlayer
          posterSrc={previewImage}
          videoSrc={previewVideoLink}
          style={{
            verticalAlign: `top`,
            width: `100%`,
            height: `100%`,
            objectFit: `cover`
          }}
          isPlaying={isPlaying}
          isMuted
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: FilmProp.isRequired,
};

export default memo(FilmCard);
