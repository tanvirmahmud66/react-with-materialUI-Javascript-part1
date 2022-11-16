import { Box } from "@mui/material";
import { height } from "@mui/system";
import React from "react";

export default function BoxMUI() {
  return (
    <>
      <Box component="span">Tanvir Mahmud Fahim</Box>
      <Box
        sx={{
          width: "300px",
          height: "300px",
          backgroundColor: "primary.dark",
          color: "white",
          textAlign: "center",
          transition: "all .3s ease",
          "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer",
          },
        }}
      >
        Software Developer
      </Box>
      <Box
        display="flex"
        width="100px"
        height="100px"
        bgcolor="secondary.light"
        color="white"
        p={5}
      >
        Dynamic Megasoft Limited
      </Box>
    </>
  );
}
