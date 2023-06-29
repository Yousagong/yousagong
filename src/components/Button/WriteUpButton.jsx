import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./WriteUpButton.css";
import { Link } from "react-router-dom";

export default function WriteUpButton() {
  return (
    <div className="WriteUpButton">
      <Link to="/write">
        <Stack spacing={2} direction="row">
          <Button variant="contained" className="write-up-button">
            글쓰기
          </Button>
        </Stack>
      </Link>
    </div>
  );
}
