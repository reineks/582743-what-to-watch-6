import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
import {createApi} from "./api";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from "./components/app/app";
import {checkAuth} from "./store/user/operations";
import {fetchFilmsList, fetchPromo} from "./store/data/operations";
import {setUserInfo} from "./store/user/actions";
import {redirect} from "./store/middlewares/redirect";

const api = createApi(
    () => store.dispatch(setUserInfo(null))
);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    ));

store.dispatch(checkAuth());
store.dispatch(fetchFilmsList());
store.dispatch(fetchPromo());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
