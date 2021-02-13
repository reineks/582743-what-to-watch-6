import React from 'react';
import {Link} from "react-router-dom";

const MyList = () => {
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

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">Fantastic Beasts: The Crimes of
                Grindelwald</Link>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">Bohemian Rhapsody</Link>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">Macbeth</Link>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/aviator.jpg" alt="Aviator" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">Aviator</Link>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/we-need-to-talk-about-kevin.jpg" alt="We need to talk about Kevin" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">We need to talk about Kevin</Link>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/what-we-do-in-the-shadows.jpg" alt="What We Do in the Shadows" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">What We Do in the Shadows</Link>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/revenant.jpg" alt="Revenant" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">Revenant</Link>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/johnny-english.jpg" alt="Johnny English" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">Johnny English</Link>
            </h3>
          </article>

          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to="/films/:id?">Shutter Island</Link>
            </h3>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MyList;
