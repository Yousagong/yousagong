import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./SignUpButton.css";

export default function SignUpButton() {
  return (
    <div className="SignUpButton">
      <Stack spacing={2} direction="row">
        <Button variant="contained" className="sign-up-button">
          회원가입
        </Button>
      </Stack>
    </div>
  );
}
