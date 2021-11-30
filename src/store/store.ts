import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducer as jokesReducer, reducerPath as jokesReducerPath } from '../services/jokesData';

const store = configureStore({
  reducer: {
    [jokesReducerPath]: jokesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
