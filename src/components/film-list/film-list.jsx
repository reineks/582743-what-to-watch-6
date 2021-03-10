import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from "../film-card/film-card";
import FilmProp from "../props/film.prop";

const FilmList = (props) => {
  const [, setActiveId] = useState(null);
  const {films, genre} = props;

  return (
    <div className="catalog__movies-list">
      {
        films.filter((film) => !genre || film.genre === genre).map((film) => (
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
  genre: PropTypes.string,
};

export default FilmList;
