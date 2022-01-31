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
        background:  'rgb(230, 252, 255)',
        '&:hover': {
            background:'#94d9eb',
            },
        margin: theme.spacing(1),
        border: "1px solid #eb9148",
        borderRadius: "3px"
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
                
                open={open}
                  PaperProps={{
                    style: 
                          { 
                            border: "1px solid #2a4f64",
                            position: "fixed", top: 0, right: 0, m: 0, 
                            background: "rgb(199, 246, 252)"
                          }
            
                            }}
                
                onClose={handleClose}

            >
          
            <MenuItem
              className={navLinks}
          
            >
          
              <Link 
                
                to="/songsList"
                style = {{
            
                  color: '#233d4d',
                  display:'flex',
                  flexWrap: 'wrap'

                }}
                onClick={handleClose}
              >
            
                
                
                <Typography component="h5">
                  
                  &nbsp;View Active Songs

                </Typography> 
              
              </Link>
            
            </MenuItem>

            <MenuItem 
              className={navLinks}
            >
           
              <Link  
                to="/addSong"
                style = {{

                  color: '#233d4d',
                  display:'flex',
                  flexWrap: 'wrap',
                
                }}
                onClick={handleClose}  

              >
            
                  
            
                &nbsp;Add a New Song
            
              </Link>

            </MenuItem>

            <MenuItem
              className={navLinks}
          
            >
          
              <Link 
                to="/InactiveArchive"
                style = {{
            
                  color: '#233d4d',
                  display:'flex',
                  flexWrap: 'wrap'

                }}
                onClick={handleClose}
              >
            
                
            
                  <Typography component="h5">
              
                    &nbsp;View Inactive Archive
            
                  </Typography>

                </Link>
          
            </MenuItem>

          <MenuItem 
            className={navLinks}
          >
            
            <Link 
              to="/user"
              style = {{
                
                color: '#233d4d',
                display:'flex',
                flexWrap: 'wrap'
                
                }}
                onClick={handleClose}
            > 
            
              
            
                &nbsp;Account Details
            
            </Link>
        
          </MenuItem>
        
        </Dialog>
        
      </div>
    );
  }
  
  export default NavMenu;