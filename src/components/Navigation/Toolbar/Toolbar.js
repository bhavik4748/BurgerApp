import React from 'react';
import classes from './Toolbar.css';
import Logo from "../../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div onClick={props.MenuClick} className={classes.MobileOnly, classes.DrawerToggle }>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)



export default toolbar;