import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import {changeGenre} from "../../store/app/actions";
import {getActiveGenre} from "../../store/app/selectors";
import {getGenreList} from "../../store/data/selectors";

const GenresList = ({onGenreChange}) => {

  const activeGenre = useSelector(getActiveGenre);
  const genres = useSelector(getGenreList);

  const handleGenreClick = ({currentTarget}) => {
    onGenreChange(currentTarget.dataset.genre);
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, index) =>
          <li
            className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}
            key={`genre-${index}`}
            data-genre={genre}
            onClick={handleGenreClick}
          >
            <Link to="/" className="catalog__genres-link">{genre}</Link>
          </li>
        )
      }
    </ul>
  );
};

GenresList.propTypes = {
  onGenreChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onGenreChange: changeGenre,
};

export {GenresList};
export default connect(null, mapDispatchToProps)(GenresList);

