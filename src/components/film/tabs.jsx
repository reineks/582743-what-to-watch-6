import React, {useState} from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import FilmProp from "../props/film.prop";
import ReviewsProp from "../props/review.prop";
import {MAX_STARRING, TabDetails, TabTypes} from "../../consts";
import {getRankLabel} from "../../utils";


const getDuration = (film) => {
  const totalMinutes = film.runTime;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

const Tabs = ({film, reviews}) => {

  const {starring, rating, scoresCount, description, director, genre, released} = film;

  const [activeTab, setActiveTab] = useState(TabTypes.OVERVIEW);

  const filmDurarion = getDuration(film);

  let tabContent = null;

  const userRank = getRankLabel(rating);

  const handleTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.currentTarget.dataset.id);
  };

  switch (activeTab) {
    case TabTypes.OVERVIEW:
      tabContent = (
        <>
          <div className="movie-rating">
            <div className="movie-rating__score">{rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{userRank}</span>
              <span className="movie-rating__count">{scoresCount} ratings</span>
            </p>
          </div>
          <div className="movie-card__text">
            <p>{description}</p>
            <p className="movie-card__director"><strong>Director: {director}</strong></p>
            <p className="movie-card__starring">
              <strong>Starring: {starring.slice(0, MAX_STARRING).join(`, `)}{starring.length > MAX_STARRING ? ` and other` : ``}</strong>
            </p>
          </div>
        </>
      );
      break;
    case TabTypes.DETAILS:
      tabContent = (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                <strong>Starring: {starring.join(`, `)}</strong>
              </span>
            </p>
          </div>
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{filmDurarion}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{released}</span>
            </p>
          </div>
        </div>
      );
      break;
    case TabTypes.REVIEWS:
      tabContent = (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {
              reviews.map((review) => (
                <div key={review.id} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>
                    <footer className="review__details">
                      <cite className="review__author">{review.user.name}</cite>
                      <time className="review__date" dateTime={review.date}>{`${dayjs(review.date).format(`MMMM D, YYYY`)}`}</time>
                    </footer>
                  </blockquote>
                  <div className="review__rating">{review.rating}</div>
                </div>
              ))
            }
          </div>
        </div>
      );
  }

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {
            TabDetails.map((tab) =>
              (
                <li
                  key={tab.type}
                  data-id={tab.type}
                  onClick={handleTabClick}
                  className={`movie-nav__item ${tab.type === activeTab ? `movie-nav__item--active` : ``}`}>
                  <Link to="#" className="movie-nav__link">{tab.title}</Link>
                </li>
              ))
          }
        </ul>
      </nav>
      {tabContent}
    </div>
  );
};

Tabs.propTypes = {
  film: FilmProp,
  reviews: PropTypes.arrayOf(ReviewsProp).isRequired,
};

export default Tabs;
