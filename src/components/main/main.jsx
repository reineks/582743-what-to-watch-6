import React from 'react';
import PropTypes from 'prop-types';
import PromoFilmCard from "../promo-film-card/promo-film-card";
import MainPage from "../main-page/main-page";
import FilmProp from "../props/film.prop";

const Main = (props) => {
  const {films} = props;

  return (
    <>
      <PromoFilmCard film={films[3]} />
      <MainPage films={films} />
    </>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default Main;
