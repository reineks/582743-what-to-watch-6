import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {createApi} from "./api";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from "./components/app/app";

const api = createApi();
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
