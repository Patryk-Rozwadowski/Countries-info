import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/index';
import DevTools from './DevTools/devTools';
import { getCountries } from './actions/actionCreator';
import Navigation from './presentational/navigation.component';

render(
    <Provider store={store}>
        <Router history={hashHistory} >
            <Route path='/' component={Navigation} />
            < h1 > Inicjalizacja projektu</h1 >
            <DevTools />
        </Router>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries())
