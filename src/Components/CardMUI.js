import {
  Card,
  CardContent,
  Paper,
  Typography,
  Box,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";

export default function CardMUI() {
  return (
    <Paper
      sx={{
        width: "1400px",
        height: "750px",
        backgroundColor: "lightskyblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Box width="350px" marginRight="15px">
        <Card>
          <CardMedia
            component='img'
            height='200'
            image={img1}
            alt="python img"
          />
          <CardContent>
            <Typography variant="h4" gutterBottom component="div">
              Django python framework
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is a card Components of material ui to learn how card
              component work in react with material ui. And this is awesome
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Share
            </Button>
            <Button size="small" variant="outlined">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
      <Box width="350px" marginRight="15px">
        <Card>
          <CardMedia
            component='img'
            height='200'
            image={img2}
            alt="python img"
          />
          <CardContent>
            <Typography variant="h4" gutterBottom component="div">
              Django python framework
            </Typography>
            <Typography variant="body1" color="text.secondary">
              This is a card Components of material ui to learn how card
              component work in react with material ui. And this is awesome
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Share
            </Button>
            <Button size="small" variant="outlined">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Paper>
  );
}
