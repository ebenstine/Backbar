import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Paper, Button, Typography, Card } from '@material-ui/core'
import useStyles from '../UserPage/UserPageStyles'

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
      
      <div className="container">

        <Typography 
          
          align="center" 
          variant = "overline" 
          className = {welcome} 
        >
          Hey, {user.username}!
        </Typography>

        <br></br>
        <Card className={infoCard}>
        
        <br></br>
      
        
      
        <br></br>
      
        

        <br></br>

      </Card>
      </div>
      
        <section textAlign="center">
    
    
      
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
