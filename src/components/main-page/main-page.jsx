import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {getFilmsFilteredByGenre} from "../../store/app/selectors";
import FilmList from "../film-list/film-list";
import GenresList from "../main-page/genre-list";
import PromoFilmCard from "../promo-film-card/promo-film-card";
import Spinner from "./spinner";
import FilmProp from "../props/film.prop";
import {fetchFilmsList, fetchPromo} from "../../store/data/operations";


const MainPage = (props) => {

  const {films, promo, resetPage, isDataLoaded, loadFilms, loadPromo} = props;

  useEffect(() => {
    resetPage();
  }, []);

  useEffect(() => {
    if (!isDataLoaded.promo) {
      loadPromo();
    }
    if (!isDataLoaded.films) {
      loadFilms();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded.films) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      <PromoFilmCard
        promo={promo} />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <FilmList
            films={films}
          />

        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};


MainPage.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
  promo: FilmProp.isRequired,
  resetPage: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadPromo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.genre,
  films: getFilmsFilteredByGenre(state.genre, state.films),
  isDataLoaded: state.isDataLoaded,
  promo: state.promo,
});

const mapDispatchToProps = (dispatch) => ({
  resetPage() {
    dispatch(ActionCreator.resetGenre());
  },
  loadFilms() {
    dispatch(fetchFilmsList());
  },
  loadPromo() {
    dispatch(fetchPromo());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
