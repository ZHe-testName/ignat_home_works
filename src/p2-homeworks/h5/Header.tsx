import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATH } from './Routes';

import classes from './header.module.css';

function Header() {
    return (
        <div className={classes.header}>
            <nav>
                <NavLink to={PATH.PRE_JUNIOR}>Pre Junior</NavLink>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}>Junior +</NavLink>
                <div className={classes.arrow}>

                </div>
            </nav>
        </div>
    )
}

export default Header
