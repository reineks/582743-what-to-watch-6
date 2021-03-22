import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {getFilmsByGenre} from "../../utils";
import FilmList from "../film-list/film-list";
import GenresList from "../main-page/genre-list";
import FilmProp from "../props/film.prop";
import {FILMS_LIST_SIZE} from "../../consts";


const MainPage = (props) => {

  const {films, resetPage} = props;

  useEffect(() => {
    resetPage();
  }, []);

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />
        <FilmList
          films={films}
          filmslistSize = {FILMS_LIST_SIZE}
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
  );
};


MainPage.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
  resetPage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeGenre: state.genre,
  films: getFilmsByGenre(state.genre, state.films),
});

const mapDispatchToProps = (dispatch) => ({
  resetPage() {
    dispatch(ActionCreator.resetGenre());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
