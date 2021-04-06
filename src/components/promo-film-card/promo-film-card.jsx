import React from 'react';
import {useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import User from "../user/user";
import AddToFavorites from "../film/add-my-list";
import {getPromo} from "../../store/data/selectors";

const PromoFilmCard = () => {

  const promo = useSelector(getPromo);
  const {id, title, genre, released, posterImage, backgroundImage} = promo;
  const history = useHistory();

  const handlePlayBtnClick = () => {
    history.push(`/player/${id}`);
  };

  return (

    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <User />
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <Link to={`/films/${id}`}>
            <div className="movie-card__poster">
              <img src={posterImage} alt={`${title} poster`} width="218" height="327"/>
            </div>
          </Link>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={handlePlayBtnClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <AddToFavorites id={Number(id)}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoFilmCard;
