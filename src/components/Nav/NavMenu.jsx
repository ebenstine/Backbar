import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@material-ui/core/Dialog';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    navLinks: {
        color: '#2e6103',
        background:  '#f3f2f2',
        '&:hover': {
            background:'linear-gradient(to right,  #b6e6ab 0%,#f6f6f6 100%)',
            },
        margin: theme.spacing(1),
        border: "1px solid #2e6103",
        borderRadius: "3px",
        fontSize: 22
    },

    menu: {
        paddingTop: '.25em',
        color: '#2e6103',
        '&:hover': {
        color:'#457c18'
        }

    },

    

}))


const NavMenu = ({user}) => {
    const {navLinks, menu, menuSwitch} = useStyles();
    const [open, setOpen] = useState(false);
   
  
    const handleClickOpen = () => {
      if (user === null){
        setOpen(false)
      } else
      setOpen(true);
      
    };
    const handleClose = () => {
      setOpen(false);
    }

  
    return (
      <div>
        <IconButton>
          <MenuIcon

            aria-controls="simple-menu" 
            aria-haspopup="true"
            fontSize={'inherit'} 
            align="center"
            className={menu}
            onClick={handleClickOpen}
            
            >
            
          </MenuIcon>
        </IconButton>
        
          <MenuItem 
        
            onClick={handleClickOpen}>
                
          </MenuItem>
          
            <Dialog 
                
                raised={true}
                open={open}
                  PaperProps={{
                    style: 
                          { 
                            border: "1px solid #1f4400",
                            position: "fixed", top: 0, right: 0, m: 0, 
                            background: "#dfdfdf",
                            
                          }
            
                            }}
                
                onClose={handleClose}

            >
          
          <MenuItem 
              className={navLinks}
              component={Link} to={'/liveCocktails'}
              style = {{

                  color: '#1f4400',
                  display:'flex',
                  flexWrap: 'wrap',
                
                }}
                onClick={handleClose}  

              >
            
              <Typography variant="overline">
            
                &nbsp;current recipes ///
              
              </Typography>    
            
              

            </MenuItem>

            <MenuItem 
              className={navLinks}
              component={Link} to={'/addCocktail'}
              style = {{

                  color: '#1f4400',
                  display:'flex',
                  flexWrap: 'wrap',
                
                }}
                onClick={handleClose}  
              
              >
            
            <Typography variant="overline" >
            
            &nbsp;make a new drink ///
          
          </Typography>    
        

            </MenuItem>

            <MenuItem 
              className={navLinks}
              component={Link} to={'/stockBar'}
              style = {{

                  color: '#1f4400',
                  display:'flex',
                  flexWrap: 'wrap',
                
                }}
                onClick={handleClose}  

              >
            
            <Typography variant="overline">
            
            &nbsp;bar inventory ///
          
          </Typography>   
              

            </MenuItem>

            <MenuItem 
              className={navLinks}
              component={Link} to={'/cocktails'}
              style = {{

                  color: '#1f4400',
                  display:'flex',
                  flexWrap: 'wrap',
                
                }}
                onClick={handleClose}  

              >
            
            <Typography variant="overline">
            
            &nbsp;cocktail library ///
          
          </Typography>   
              
              

            </MenuItem>
        
        </Dialog>
        
      </div>
    );
  }
  
  export default NavMenu;