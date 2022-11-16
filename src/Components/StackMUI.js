import { Box, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function StackMUI() {
  return (
    <>
      <Stack direction="row" spacing={3}>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: "primary.dark",
          }}
        ></Box>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: "success.dark",
          }}
        ></Box>
      </Stack>

      <Stack direction="row-reverse" spacing={2}>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: "primary.dark",
          }}
        ></Box>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: "success.dark",
          }}
        ></Box>
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        sx={{
          border: "2px solid",
        }}
        divider={<Divider orientation="vertical" flexItem/>}
      >
        <Box
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: "primary.dark",
          }}
        ></Box>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            bgcolor: "success.dark",
          }}
        ></Box>
      </Stack>
    </>
  );
}
