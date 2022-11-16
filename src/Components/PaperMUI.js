import { Paper } from "@mui/material";
import React from "react";

export default function PaperMUI() {
  return <Paper sx={{
    width: "1300px",
    height: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }} elevation={7}>
    Tanvir Mahmud Fahim
  </Paper>;
}
