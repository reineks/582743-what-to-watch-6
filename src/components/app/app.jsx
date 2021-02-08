import React from 'react';
import PromoFilmCard from "../promo-film-card/promo-film-card";
import MainPage from "../main-page/main-page";
import PropTypes from 'prop-types';

const App = (props) => {
  const {title, genre, year} = props;

  return (
    <>
      <PromoFilmCard
        title = {title}
        genre = {genre}
        year = {year}
      />
      <MainPage />
    </>
  );
};
App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};
export default App;
