import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from "../film-card/film-card";
import FilmProp from "../props/film.prop";

const FilmList = (films) => {
  const [, setActiveId] = useState(null);

  return (
    <div className="catalog__movies-list">
      {
        films.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            onMouseEnter={() => setActiveId(film.id)}
            onMouseLeave={() => setActiveId(null)}
          />
        ))
      }
    </div>
  );
};


FilmList.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default FilmList;
