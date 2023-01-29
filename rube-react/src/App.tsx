import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

function App() {
  const Item = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));

  const onClick = () => {
    alert("Nice to see you!");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Item variant="contained" color="error" onClick={onClick}>
            Hello World
          </Item>
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
