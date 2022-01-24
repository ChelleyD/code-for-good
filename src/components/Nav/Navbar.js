import Links from './Links';
import React from 'react';
import { Link } from 'react-router-dom';
import EarthLogo from '../../images/earth3.png';
import { Typography } from '@mui/material';

const Nav = () => {          
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={EarthLogo} className='logo-img'/>
            <Typography variant='h6'className='logo-text'>
                WE ARE THE WORLD
            </Typography>
        </div>
        
        <div>
            {Links.map((element) => {
                return(
                    <Link to={element.link} className='nav-links'>{element.title}</Link>
                );
            })}
        </div>
    </div>
    );
};

export default Nav;
