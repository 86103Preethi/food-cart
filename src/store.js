// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import optionsReducer from '../src/slices/optionsSlice';

// const store = configureStore({
//   devTools:true,        //in production make is as false;
//   reducer: {
//     options: optionsReducer,
//   },
// });

// export default store;

//store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './components/cartReducer';

const persistConfig = {
  key: 'root',
  storage, // Persist the cart in localStorage
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: persistedReducer, // Use persisted reducer here
});
const persistor = persistStore(store);


export { store, persistor };





