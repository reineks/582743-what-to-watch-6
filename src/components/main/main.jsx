import React from 'react';
import PropTypes from 'prop-types';
import MainPage from "../main-page/main-page";
import FilmProp from "../props/film.prop";

const Main = (props) => {
  const {films} = props;

  return (
    <>
      <MainPage films={films} />
    </>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default Main;
