import { Typography } from '@mui/material'
import React from 'react'

export default function Typo() {
  return (
    <>
        <Typography variant='h1' gutterBottom>Heading 1</Typography>
        <Typography variant='h2' gutterBottom>Heading 2</Typography>
        <Typography variant='h3' gutterBottom>Heading 3</Typography>
        <Typography variant='h4' component='h1'>Heading 4</Typography>
        <Typography variant='h5'>Heading 5</Typography>
        <Typography variant='h6'>Heading 6</Typography>
        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>
        <Typography variant='body1' gutterBottom>This is paragraph and this is body 1</Typography>
        <Typography variant='body2'>This is paragraph and this is body 2</Typography>
    </>
  )
}


// variant for element type
//component for specified the element
//gutterBottom for margin bottom that related with component