import React from 'react';

import classes from './error.module.css';

function Error404() {
    return (
        <div className={classes.errorBlock}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
