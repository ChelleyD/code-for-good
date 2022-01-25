
import React from "react"
import { Card, CardContent, CardMedia, Typography,Box } from '@mui/material';
import { Button, CardActionArea, CardActions, Fab} from '@mui/material';
import { textAlign } from "@mui/system";




function DonateCard ({name,note,pictures}){


    return(
<Card sx={{}}>
    <Box  sx={{display: 'flex', flexDirection: 'row' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height: 200, width:200}}
          image={pictures}
          alt={name}
        />
        <CardContent>
          
          <Typography>
              {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Box>
      <CardActions>
      <Fab variant="extended" textAlign='center'>
        Donate
      </Fab>
      </CardActions>
    </Card>
    
    );
}



export default DonateCard;