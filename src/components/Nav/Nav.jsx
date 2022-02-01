import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, MenuItem } from '@mui/material';
//import './Nav.css';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import NavMenu from './NavMenu';

const useStyles = makeStyles(() => ({

  navTitle: {
      color: '#2e6103',
      border: "none",
      fontFamily: 'Mulish',
      fontSize: 20,
      paddingLeft: '1em',
      fontWeight: 600
  },

  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  
    margin: '0 0 30px',
    backgroundColor: '#f3f2f2',
    borderBottom: '1px solid #2e6103',
    boxShadow: '1px 1px 4px #2e6103',
    overflow: 'hidden'


  },

  

}))


function Nav() {
  const user = useSelector((store) => store.user);
  const {navTitle, nav} = useStyles();
  return (
    <div className={nav} position="relative">
      <MenuItem component={Link} to={'/about'}>
      <Typography className={navTitle} >
      B A C K B A R // 
      </Typography>
      </MenuItem>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <NavMenu/>
          </>
        )}

        
      </div>
     
    </div>
  );
}

export default Nav;