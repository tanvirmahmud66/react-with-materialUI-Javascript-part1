import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";


export default function RadioButtonMUI() {

    const [value, setValue] = useState('');
    const handleChange = (e)=>{
        setValue(e.target.value);
    }

    console.log(value);

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          row
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel control={<Radio size="small" color="warning" />} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio size="small" color="warning" />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio color="success"/>} label="6-8" value="6-8" />
          <FormControlLabel control={<Radio color="success"/>} label="8-10" value="8-10" />
        </RadioGroup>
        {!value? <FormHelperText>please select the years</FormHelperText>: null}
      </FormControl>
    </Box>
  );
}
