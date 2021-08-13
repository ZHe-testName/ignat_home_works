import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Header'
import Routes from './Routes'
import classes from './hw5.module.css';

function HW5() {
    return (
        <div className={classes.main}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>
        </div>
    )
}

export default HW5
