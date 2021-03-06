import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import FilmProp from "../props/film.prop";
import FilmCardPlayer from "../card-player/card-player";

const FilmCard = (props) => {

  const {film} = props;
  const {title, previewVideoLink, previewImage} = film;
  const [isPlaying, setIsPlaying] = useState(false);
  let timeoutId = useState();


  const handleMouseEnter = (evt) => {
    props.onMouseEnter(evt);
    timeoutId = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  };

  const handleMouseLeave = (evt) => {
    props.onMouseLeave(evt);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsPlaying(false);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-movie-card__image">
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
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default FilmCard;
