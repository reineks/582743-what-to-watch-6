import React from 'react';
import PromoFilmCard from "../promo-film-card/promo-film-card";
import MainPage from "../main-page/main-page";
import FilmProp from "../props/film.prop";

const Main = (props) => {
  const {title, genre, year} = props;

  return (
    <>
      <PromoFilmCard
        title={title}
        genre={genre}
        year={year}
      />
      <MainPage />
    </>
  );
};

Main.propTypes = FilmProp;

export default Main;
