import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TauFlexbox from "./stories/layout/TauFlexbox";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { cacheActions, cacheSelectors } from "./redux/cache.slice";
import { RootState } from "./redux/root-reducer";

function App() {
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(cacheActions.incrementWidgetCount());
  };

  const onDecrement = () => {
    dispatch(cacheActions.decrementWidgetCount());
  };

  const widgetCount = useSelector((state: RootState) =>
    cacheSelectors.widgetCount(state)
  );

  return (
    <Box sx={{ width: "100% " }}>
      <TauFlexbox
        padding={4}
        sx={{ width: "100%", paddingTop: 8, gap: 1 }}
        centered
      >
        <Button variant="contained" onClick={onIncrement}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={onDecrement}>
          Decrement
        </Button>
      </TauFlexbox>
      <TauFlexbox centered>{widgetCount}</TauFlexbox>
    </Box>
  );
}

export default App;
