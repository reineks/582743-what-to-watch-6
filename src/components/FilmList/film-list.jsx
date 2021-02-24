import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from "../film-card/film-card";
import FilmProp from "../props/film.prop";

const FilmList = (props) => {
  const setActiveId = useState(1)[1];
  const {films, genre} = props;
  return (
    <>
      {
        films.filter((film) => !genre || film.genre === genre).map((film) => (<FilmCard key={film.id} film={film} setActiveId={setActiveId}/>))
      }
    </>
  );
};


FilmList.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default FilmList;
