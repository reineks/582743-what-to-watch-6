import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from "../film-card/film-card";
import ShowMoreButton from "../film-list/show-more-button";
import {FILMS_LIST_SIZE} from "../../consts";
import FilmProp from "../props/film.prop";

const filmslistSize = FILMS_LIST_SIZE;

const FilmList = (props) => {
  const {films} = props;
  const [, setActiveId] = useState(null);
  const [shownItems, setShownItems] = useState(filmslistSize);

  const handleShowMoreClick = () => setShownItems((prevShownItem) =>
    prevShownItem + filmslistSize);

  return (
    <>
      <div className="catalog__movies-list">
        {
          films.slice(0, shownItems).map((film) => (
            <FilmCard
              key={film.id}
              film={film}
              onMouseEnter={() => setActiveId(film.id)}
              onMouseLeave={() => setActiveId(null)}
            />
          ))
        }
      </div>

      {shownItems < films.length && <ShowMoreButton onClick={handleShowMoreClick} />}
    </>
  );
};


FilmList.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default FilmList;
