
import React from "react"
import { Card, CardContent, CardMedia, Typography,Box } from '@mui/material';
import { Button, CardActionArea, CardActions, Grid} from '@mui/material';




function DonateCard ({name,note,pictures}){


    return(
<Card sx={{ maxWidth: 345 }}>
    <Box sx={{display: 'flex', flexDirection: 'row' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height:151}}
          image={pictures}
          alt={name}
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="div">
              {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Box>
      <CardActions>
        <Button size="medium"  text-align= "center">
          Donate
        </Button>
      </CardActions>
    </Card>
    
    );
}



export default DonateCard;