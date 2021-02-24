import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Player from "../player/player";
import FilmProp from "../props/film.prop";
let timeoutId;

const FilmCard = (props) => {
  const {title, previewImage} = props;

  const [isPlaying, setIsPlaying] = useState(false);

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
        <img src={previewImage} alt={title} width="280" height="175"/>
        <Player
          posterSrc={props.imgSrc}
          videoSrc={props.videoSrc}
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
        <Link className="small-movie-card__link" to="/films/:id">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = FilmProp;

export default FilmCard;
