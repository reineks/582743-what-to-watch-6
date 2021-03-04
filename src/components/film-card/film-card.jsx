import React from 'react';
import {Link, useHistory} from "react-router-dom";

import FilmProp from "../props/film.prop";
let timeoutId;

const FilmCard = (props) => {
  const {film, setActiveId} = props;
  const {id, title, previewImage} = film;
  const history = useHistory();

  const handleMouseEnter = () => {
    setActiveId(id);
    timeoutId = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setActiveId(null);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsPlaying(false);
  };

  const handleCardClick = () => {
    history.push(`/films/:id`);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={title} width="280" height="175"/>

      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to="/films/:id" onClick={handleCardClick}>{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: FilmProp.isRequired,
};

export default FilmCard;
