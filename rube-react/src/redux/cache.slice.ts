import { Action, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./root-reducer";

interface CacheState {
  widgetCount: number;
}

const initialState: CacheState = {
  widgetCount: 0,
};

const cacheSlice = createSlice({
  name: "cache",
  initialState,
  reducers: {
    incrementWidgetCount(state, action: Action) {
      state.widgetCount++;
    },
    decrementWidgetCount(state, action: Action) {
      state.widgetCount--;
    },
  },
});

export const cache = cacheSlice.reducer;
export const cacheActions = {
  ...cacheSlice.actions,
};

const rootState = (state: RootState) => state;
const cacheSliceState = createSelector(rootState, (state) => state.cache);
export const cacheSelectors = {
  widgetCount: createSelector(cacheSliceState, (state) => state.widgetCount),
};
