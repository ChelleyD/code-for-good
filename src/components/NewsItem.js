import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";


const NewsItem = ({ title, url, urlToImage }) => {
  return (
    <Card className='news-item' sx={{ width: 345, border: 2,
        borderColor: "#CEC7C0"}} >
      <CardActionArea href={url} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={urlToImage}
          alt="new article image"
        />
        <CardContent sx={{height: 50}}>
          <Typography gutterBottom variant="body2" component="div">
              {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsItem;