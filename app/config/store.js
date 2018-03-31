import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducer from '../reducers';

export default store = createStore(appReducer, composeWithDevTools());
