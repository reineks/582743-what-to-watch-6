import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {createApi} from "./api";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from "./components/app/app";
import {checkAuth} from "./store/api-actions";
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./consts";
import {redirect} from "./store/middlewares/redirect";

const api = createApi(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
    ));

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ));

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
