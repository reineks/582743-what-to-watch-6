import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmOverview from "../film/film";
import ReviewForm from "../add-review/add-review";
import Player from "../player/player";
import PageNotFound from "../page-not-found/page-not-found";
import FilmProp from "../props/film.prop";

const App = (props) => {

  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>

        <Route exact path="/films/:id/review">
          <ReviewForm films={films} />
        </Route>

        <Route exact path="/films/:id">
          <FilmOverview films={films} />
        </Route>

        <Route exact path="/player/:id">
          <Player films={films} />
        </Route>

        <Route exact path="/">
          <Main films={films} />
        </Route>

        <Route>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default App;
