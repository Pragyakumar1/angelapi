import React from 'react';
import { Card,CardContent,Typography,Button,CardActions } from '@material-ui/core';
function Contact (){
return (
	<div style={{justifyContent:"center"}}>
      <h4>Welcome to pkCOnsultancy</h4>
      <Card
        style={{
          width: 400,
          backgroundColor: "yellow",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            pk840582@gmail.com(8405827458)
          </Typography>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions>
      </Card>
    </div>
	
)
}

export default Contact;
