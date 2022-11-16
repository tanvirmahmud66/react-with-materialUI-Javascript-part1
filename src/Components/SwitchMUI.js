import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material";
import React, { useState } from "react";

export default function SwitchMUI() {
  const [switchOn, setSwitchOn] = useState(false);
  const handleSwitch = (e) => {
    setSwitchOn(e.target.checked);
  };
  console.log(switchOn);
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={switchOn}
            onChange={handleSwitch}
            size="small"
            color="success"
          />
        }
      />
      <Box>
        <FormGroup row>
            <FormControlLabel label="one" control={<Switch size="small"/>}/>
            <FormControlLabel label="two" control={<Switch/>}/>
            <FormControlLabel label="there" control={<Switch/>}/>
            <FormControlLabel label="four" control={<Switch/>}/>
        </FormGroup>
      </Box>
    </Box>
  );
}
