import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./LoginButton.css";

export default function LoginButton(props) {
  return (
    <div className="LoginButton">
      <Stack spacing={2} direction="row">
        <Button variant="contained" className="login-button">
          {props.name}
        </Button>
      </Stack>
    </div>
  );
}
