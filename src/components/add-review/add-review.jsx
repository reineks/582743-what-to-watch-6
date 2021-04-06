import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import PostCommentForm from "./post-form-comment";
import {getFilmById} from "../../store/data/selectors";
import {logout} from "../../store/user/operations";
import NotFoundPage from "../page-not-found/page-not-found";
import User from "../user/user";

const ReviewForm = ({onLogout}) => {

  const {id} = useParams();
  const film = useSelector((state) => getFilmById(state, id));

  const {title, posterImage, backgroundImage, backgroundColor} = film;

  useEffect(() => {
    return () => {
      onLogout();
    };
  }, []);

  if (!film) {
    return <NotFoundPage />;
  }

  return (
    <section className="movie-card movie-card--full" style={({backgroundColor})}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`/films/${film.id}`}>{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <User />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <PostCommentForm />
      </div>
    </section>
  );
};

ReviewForm.propTypes = {
  onLogout: PropTypes.func,
};

const mapDispatchToProps = {
  onLogout: logout,
};

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
