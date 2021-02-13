import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import PageNotFound from "../page-not-found/page-not-found";

const App = (props) => {
  const {title, genre, year} = props;

  return (
    <>
      <BrowserRouter>
        <Switch>

          <Route exact path="/login">
            <SignIn />
          </Route>

          <Route exact path="/mylist">
            <MyList />
          </Route>

          <Route exact path="/films/:id/review" component={AddReview} />

          <Route exact path="/films/:id?" component={Film} />

          <Route exact path="/player/:id?" component={Player}/>

          <Route exact path="/">
            <Main
              title={title}
              genre={genre}
              year={year}
            />
          </Route>

          <Route>
            <PageNotFound />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
};
App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default App;
