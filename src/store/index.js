import { createStore } from 'redux';
import DevTools from '../DevTools/devTools';
import reducer from '../reducers/index';

const store = createStore(
    reducer,
    DevTools.instrument()
    );

export default store;