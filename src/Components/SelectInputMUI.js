import { Box, MenuItem, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

export default function SelectInputMUI() {
  const [country, setCountry] = useState("");
  const [relation, setRelation] = useState("");
  const handleInputCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleInputRelation = (e) =>{
    setRelation(e.target.value);
  }
  console.log(country);
  console.log(relation);
  return (
    <>
      <Box width="300px">
        <Stack spacing={4} direction="row">
          <TextField
            label="Select Country"
            size="small"
            value={country}
            onChange={handleInputCountry}
            select
            fullWidth
            required
            error={!country}
            helperText={!country ? "Please enter your country" : null}
          >
            <MenuItem value="BN">Bangladesh</MenuItem>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="PK">Pakistan</MenuItem>
            <MenuItem value="NP">Nepal</MenuItem>
            <MenuItem value="SA">South Africa</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UAE">UAE</MenuItem>
            <MenuItem value="CN">China</MenuItem>
          </TextField>
          <TextField
            label="Relationship"
            size="small"
            value={relation}
            onChange={handleInputRelation}
            select
            fullWidth
            required
            error={!relation}
            helperText={!relation ? "Please enter your country" : null}
          >
            <MenuItem value="single">Single</MenuItem>
            <MenuItem value="married">Married</MenuItem>
            <MenuItem value="separated">Separated</MenuItem>
            <MenuItem value="divorced">Divorced</MenuItem>
            <MenuItem value="complicated">Complicated</MenuItem>
            <MenuItem value="open_relation">In a Open Relationship</MenuItem>
          </TextField>
        </Stack>
      </Box>
    </>
  );
}
