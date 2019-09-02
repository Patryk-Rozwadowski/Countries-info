import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import DevTools from './DevTools/devTools';
import { getCountries } from './actions/actionCreator';

render(
    <Provider store={store}>
        <div>
            <h1>Inicjalizacja projektu</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries())