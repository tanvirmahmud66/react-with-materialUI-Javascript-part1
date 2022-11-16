import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function CheckboxMUI() {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [bookMarked, setBookMarked] = useState(false);
  const [skills,setSkills] = useState([]);
  const handleChange = (e) => {
    setAcceptTnC(e.target.checked);
  };
  const handleBookMarked = (e) => {
    setBookMarked(true);
  };
  const handleSkills = (e) => {
    const index = skills.indexOf(e.target.value);
    if(index === -1){
        setSkills([...skills, e.target.value]);
    }else{
        setSkills(skills.filter((skill)=>skill!==e.target.value));
    }
  }
  console.log(acceptTnC);
  console.log(bookMarked);
  console.log(skills);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept all terms and conditions"
          control={
            <Checkbox
              color="primary"
              checked={acceptTnC}
              size="small"
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          value={bookMarked}
          onChange={handleBookMarked}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={<Checkbox checked={skills.includes('html')} onChange={handleSkills} />}
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={<Checkbox checked={skills.includes('css')} onChange={handleSkills} />}
            />
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkills}/>}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}
