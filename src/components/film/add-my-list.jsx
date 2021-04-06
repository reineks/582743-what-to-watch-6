import React from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {addToFavorite} from '../../store/data/operations';
import {getIsAuthorized} from '../../store/user/selectors';
import {AppPaths} from "../../consts";
import {getFavorites} from "../../store/data/selectors";

const AddToMyList = ({id, onAddToMyList}) => {
  const isAuthorized = useSelector(getIsAuthorized);
  const history = useHistory();
  const favorites = useSelector(getFavorites);

  const isInFavorites = Array.isArray(favorites) ? Boolean(favorites.find((fave) => fave.id === id)) : false;

  const handleOnMyListClick = () => {
    if (!isAuthorized) {
      history.push(AppPaths.LOGIN);
      return;
    }

    onAddToMyList(id, !isInFavorites);
  };

  return (
    <button className="btn btn--list movie-card__button" type="button" onClick={handleOnMyListClick}>
      {isInFavorites
        ? <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        : <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      }
      <span>My list</span>
    </button>
  );
};

AddToMyList.propTypes = {
  id: PropTypes.number.isRequired,
  onAddToMyList: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onAddToMyList: addToFavorite,
};

export {AddToMyList};
export default connect(null, mapDispatchToProps)(AddToMyList);
