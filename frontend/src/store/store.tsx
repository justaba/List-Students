import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export default store;