// store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage by default
import cartReducer from './components/cartReducer';

const persistConfig = {
  key: 'root',
  storage, // persist the cart in localStorage
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
