import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from "../private-route/private-route";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import FilmOverview from "../film/film";
import ReviewForm from "../add-review/add-review";
import Player from "../player/player";
import PageNotFound from "../page-not-found/page-not-found";
import {AppPaths} from "../../consts";
import browserHistory from "../../browser-history";
import FilmProp from "../props/film.prop";


const App = (props) => {

  const {films} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route
          exact
          path={AppPaths.LOGIN}>
          <SignIn />
        </Route>

        <PrivateRoute
          exact
          path={AppPaths.MYLIST}
          render={() => <MyList />}
        />

        <PrivateRoute
          exact
          path="/films/:id/review"
          render={() => <ReviewForm films={films} />}>
        </PrivateRoute>

        <Route
          exact
          path="/films/:id">
          <FilmOverview films={films} />
        </Route>

        <Route
          exact
          path="/player/:id">
          <Player films={films} />
        </Route>

        <Route
          exact
          path="/">
          <Main films={films}/>
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

const mapStateToProps = (state) => ({
  films: state.films,
});

export {App};
export default connect(mapStateToProps)(App);
