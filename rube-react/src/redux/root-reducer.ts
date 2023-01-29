import { combineReducers } from "@reduxjs/toolkit";

import { cache } from "./cache.slice";

const rootReducer = combineReducers({
  cache,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
