import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import FilmList from "../film-list/film-list";
import User from "../user/user";
import {getFavorites} from '../../store/data/selectors';
import {logout} from '../../store/user/operations';
import {fetchFavorites} from '../../store/data/operations';

const MyList = ({onLogout, onFetchFavorites}) => {
  useEffect(() => {
    onFetchFavorites();

    return () => {
      onLogout();
    };
  }, []);

  const myListFilms = useSelector(getFavorites);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>
        <User />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <FilmList
            films={myListFilms}
          />
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onFetchFavorites: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogout: logout,
  onFetchFavorites: fetchFavorites
};

export {MyList};
export default connect(null, mapDispatchToProps)(MyList);
