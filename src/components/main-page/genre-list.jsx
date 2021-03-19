import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import FilmProp from "../props/film.prop";
import {getGenreList} from "../../utils";

const GenresList = (props) => {

  const {films, activeGenre, onGenreItemClick} = props;

  const genres = getGenreList(films);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li
            className={`catalog__genres-item ${activeGenre === genre
              ? `catalog__genres-item--active` : ``}`}
            key={genre}
            onClick={() => onGenreItemClick(genre)}
          >
            <Link to="/" className="catalog__genres-link">{genre}</Link>
          </li>
        ))
      }
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
  activeGenre: PropTypes.string,
  onGenreItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.activeGenre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

