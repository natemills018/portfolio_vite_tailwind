import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography> */}
      <Typography variant="h5" component="div">
        Shape up or Shape Out
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
      <Typography variant="body2">
        Used DOM manipulation to build an interactive
      </Typography>
      <Typography>
      shapebuilder in the browser
      </Typography>

    </CardContent>
    <CardActions className='flex justify-center'>
      {/* <Button size="small" onClick={}>Learn More</Button> */}
      <a className='btn btn-primary' href='https://github.com/natemills018/Shape-up-or-Shape-out/blob/master/scripts.js'>GitHub Repo</a>
      <a className='btn btn-secondary' href=''>Site</a>
    </CardActions>
  </React.Fragment>
);

const ShapeCard = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
        
      <Card variant='outlined' className='shadow-xl'>{card}</Card>
      
    </Box>
  );
}


export default ShapeCard;