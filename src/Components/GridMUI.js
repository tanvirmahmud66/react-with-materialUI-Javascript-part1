import { Grid,Box } from '@mui/material'
import React from 'react'

export default function GridMUI() {
  return (
    <div>
        <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item sm={6} xs={12}>
                <Box bgcolor='primary.light' p={2}>Item1</Box>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Box bgcolor='primary.light' p={2}>Item2</Box>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Box bgcolor='primary.light' p={2}>Item3</Box>
            </Grid>
            <Grid item sm={8} xs={12}>
                <Box bgcolor='primary.light' p={2}>Item</Box>
            </Grid>
        </Grid>
    </div>
  )
}
