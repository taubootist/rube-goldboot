import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root-reducer';
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./root-reducer', () => store.replaceReducer(rootReducer));
}

export type AppDispatch = typeof store.dispatch;
export default store;
