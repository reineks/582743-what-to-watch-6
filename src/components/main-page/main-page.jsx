import React from 'react';
import PropTypes from 'prop-types';
import FilmList from "../film-list/film-list";
import GenresList from "../main-page/genre-list";
import FilmProp from "../props/film.prop";
import {FILMS_LIST_SIZE} from "../../consts";

const MainPage = (props) => {

  const {films} = props;

  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList />
        <FilmList
          films={films}
          listSize={FILMS_LIST_SIZE}
        />
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
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
};

export default MainPage;
