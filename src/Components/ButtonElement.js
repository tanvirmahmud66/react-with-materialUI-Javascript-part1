import React from "react";
import { Stack, Button } from "@mui/material";

export default function ButtonElement() {
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={3} direction="row">
          <Button variant="text">text</Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outlined</Button>
          <Button variant="contained" href="https://www.google.com">
            link tag
          </Button>
        </Stack>

        <Stack spacing={3} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
        <Stack spacing={3} direction="row">
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Stack>
        <Stack spacing={3} direction="row">
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
        </Stack>
        <Stack display='block' spacing={3} direction="row">
          <Button variant="contained" color="primary" size="small">
            Small
          </Button>
          <Button variant="contained" color="primary" size="medium">
            Medium
          </Button>
          <Button variant="contained" color="primary" size="large">
            Large
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
