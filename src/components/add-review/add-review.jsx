import React from 'react';
import {Link, useParams} from "react-router-dom";
import FilmProp from "../props/film.prop";
import PropTypes from 'prop-types';
import PostCommentForm from "./post-form-comment";

const ReviewForm = ({films}) => {

  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));

  const {title, posterImage, backgroundImage, backgroundColor} = film;

  return (
    <section className="movie-card movie-card--full" style={({backgroundColor})}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}`}>{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <PostCommentForm />
      </div>
    </section>
  );
};

ReviewForm.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
  film: PropTypes,
};

export default ReviewForm;
