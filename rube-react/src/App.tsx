import React from "react";
import "./App.css";
import Button from "@mui/material/Button";

function App() {
  const onClick = () => {
    alert("Nice to see you!");
  };

  return (
    <div className="App">
      <Button variant="outlined" onClick={onClick}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
