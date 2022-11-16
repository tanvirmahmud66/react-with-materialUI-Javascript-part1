import { TextField, InputAdornment } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

export default function InputFieldMui() {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="filled" />
        <TextField label="email" variant="outlined" />
        <TextField label="password" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="password"
          variant="filled"
          size="small"
          color="success"
          type="password"
          required
          helperText="This is the helper text"
          // disabled
        />
      </Stack>
      {/* //input adornment--------------- */}
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          variant="outlined"
          type="text"
          color="error"
          size="small"
          helperText="please enter total amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        >
          amount
        </TextField>
        <TextField
          label="Weight"
          variant="outlined"
          type="text"
          color="error"
          size="small"
          helperText="please enter total weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        >
          weight
        </TextField>
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Name"
          type="text"
          variant="standard"
          size="small"
          required
          value={value}
          onChange={e=>setValue(e.target.value)}
          error={!value}
          helperText={!value?'Please Enter valid Name':null}
        />
      </Stack>
    </Stack>
  );
}
