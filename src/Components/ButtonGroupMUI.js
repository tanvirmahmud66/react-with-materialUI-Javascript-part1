import { Button, ButtonGroup } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function ButtonGroupMUI() {
  return (
    <>
      <Stack display='block' spacing={3} direction="row">
        <ButtonGroup variant="contained" color="warning">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined" color="error">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup variant="text" color="primary" orientation="vertical">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
}
