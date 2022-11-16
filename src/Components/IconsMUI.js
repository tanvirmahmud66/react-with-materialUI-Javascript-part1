import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

export default function IconsMUI() {
  return (
    <Stack display="block" spacing={2} direction="">
      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          size="medium"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          disabled
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
        <IconButton aria-label="save" color="success">
          <SaveIcon />
        </IconButton>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => alert("Massage Sending...")}
          startIcon={<SendIcon />}
        >
          Send
        </Button>
      </Stack>
    </Stack>
  );
}
