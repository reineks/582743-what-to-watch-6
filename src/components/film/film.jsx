import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import NotFound from "../page-not-found/page-not-found";
import Tabs from "./tabs";
import FilmList from "../film-list/film-list";
import FilmProp from "../props/film.prop";
import ReviewsProp from "../props/review.prop";
import User from "../user/user";
import {connect} from 'react-redux';
import {fetchComments} from "../../store/api-actions";
import {Link, useHistory, useParams} from "react-router-dom";
import {EXTRA_FILMS_COUNT} from "../../consts";

const FilmOverview = ({films, reviews, loadComments}) => {

  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));
  const history = useHistory();

  const {
    backgroundImage,
    backgroundColor,
    title,
    genre,
    released,
    posterImage,
  } = film;

  useEffect(() => {
    loadComments(id);
  }, [film]);

  const handlePlayBtnClick = () => {
    history.push(`/player/${film.id}`);
  };

  const handleAddBtnClick = () => {
    history.push(`/mylist`);
  };

  const handleReviewBtnClick = () => {
    history.push(`/films/${film.id}/review`);
  };

  if (!film) {
    return <NotFound />;
  }

  return (
    <>
      <section className="movie-card movie-card--full" style={({backgroundColor})}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>
            <User />
          </header>

          <div className="movie-card__wrap">
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
                <button className="btn btn--list movie-card__button" type="button" onClick={handleAddBtnClick}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn movie-card__button" to={`/films/${film.id}/review`} onClick={handleReviewBtnClick}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={title} width="218" height="327"/>
            </div>

            <Tabs film={film} reviews={reviews} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList
            films={films.filter((el) => el.genre === genre).slice(0, EXTRA_FILMS_COUNT)}
            listSize={EXTRA_FILMS_COUNT}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

FilmOverview.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
  film: PropTypes.object,
  reviews: PropTypes.arrayOf(ReviewsProp).isRequired,
  loadComments: PropTypes.func,
};


const mapStateToProps = (state) => ({
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(filmId) {
    dispatch(fetchComments(filmId));
  },
});

export {FilmOverview};
export default connect(mapStateToProps, mapDispatchToProps)(FilmOverview);
