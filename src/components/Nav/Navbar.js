import Links from './Links';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        {Links.map((element) => {
            return(
                <Link to={element.link}>{element.title}</Link>
            );
        })}
    </div>
    );
};

export default Nav;
