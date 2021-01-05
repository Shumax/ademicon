import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage/session';

import reducers from './ducks';

const persistConfig = {
  key: 'Ademicon',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
	persistedReducer,
	applyMiddleware(thunk),
);

const persistor = persistStore(store);

export { store, persistor };