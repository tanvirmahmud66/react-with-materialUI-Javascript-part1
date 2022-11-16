import { Autocomplete, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

const skills = ['HTML', 'CSS', 'SCSS', 'Javascript', 'Typescript','Python','C++','JAVA'];


export default function AutoCompleteTextField() {
    const [value, setValue] = useState(null);
    console.log(value);
  return (
    <Stack spacing={2} width="200px">
        <Autocomplete
            options={skills}
            renderInput = {(params)=><TextField {...params} label="Skills"/>}
            onChange={(e,newValue)=>setValue(newValue,null)}
            freeSolo
        />
    </Stack>
  )
}
