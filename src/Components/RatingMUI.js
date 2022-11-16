import { Rating } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { number } from "yup";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function RatingMUI() {
  const [rate1, setRate1] = useState(null);
  const [rate2, setRate2] = useState(null);
  const [rate3, setRate3] = useState(3);
  const [rate4, setRate4] = useState(4);
  const handleRating1 = (e, newValue) => {
    setRate1(newValue);
  };
  const handleRating2 = (e, newValue) => {
    setRate2(newValue);
  };
  const handleRating3 = (e, newValue) => {
    setRate3(newValue);
  };
  const handleRating4 = (e,newValue) => {
    setRate4(newValue);
  }
  return (
    <>
      <Stack spacing={1}>
        <Rating
          value={rate1}
          onChange={handleRating1}
          precision={0.5}
          size="large"
        />
        <Rating
          value={rate2}
          onChange={handleRating2}
          precision={0.5}
          size="large"
        />
        <Rating
          precision={0.5}
          value={rate3}
          onChange={handleRating3}
          size="large"
          emptyIcon={<FavoriteBorderIcon color="error" />}
          icon={<FavoriteIcon color="error" />}
          readOnly
        />
        <Rating
          value={rate4}
          onChange={handleRating4}
          size="large"
          emptyIcon={<FavoriteBorderIcon color="error" />}
          icon={<FavoriteIcon color="error" />}
          highlightSelectedOnly
        />
      </Stack>
    </>
  );
}
