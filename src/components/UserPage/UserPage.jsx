import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Paper, Button, Typography, Card } from '@material-ui/core';
import useStyles from './UserPageStyles'

const UserPage = () => {
  
  const user = useSelector((store) => store.user);
  
  const { paper, 
          welcome, 
          
          button2, 
          
          infoCard
        
        } = useStyles();


  const dispatch = useDispatch();

 

  return (
    <>
    
    <Paper className={paper} elevation={10}>
      
      <section align='center'>

        <Typography 
          
          align="center" 
          variant = "overline" 
          className = {welcome} 
        >
          Hey, {user.username}
        </Typography>
        <br></br>

        <Typography 
          
          
          variant = "overline" 
          className = {welcome} 
        >
        You're signed in 
        </Typography>
        <br></br>

        <Typography 
          
          align="center" 
          variant = "overline" 
          className = {welcome} 
        >
         And ready to make some weird drinks  
        </Typography>
        <br></br>

        <Typography 
          
          align="center" 
          variant = "overline" 
          className = {welcome} 
        >
         Might as well
        </Typography>
        <br></br>

        <Typography 
          
          align="center" 
          variant = "overline" 
          className = {welcome} 
        >
          After all it's 2022, and we've seen some things
        </Typography>
        <br></br>


       

        <Typography 
          
          align="center" 
          variant = "overline" 
          className = {welcome} 
        >
         But hey, if today or every day is a sober day,
        </Typography>
        
      </section>
      
        <section align="center">
    
    
      
          <Button 

            variant="contained" 
            size="small" 
            className={button2} 
            onClick={() => dispatch({ type: 'LOGOUT' })}>Sign Out&nbsp;
            

          </Button>

        </section>

      </Paper>
    
    </>
  );
}

export default UserPage;
