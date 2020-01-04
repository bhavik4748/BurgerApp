import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open)
        attachedClasses = [classes.SideDrawer, classes.Open];
    else
        attachedClasses = [classes.SideDrawer, classes.Close];

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" margin-bottom="32px" />
                <nav>
                    <NavigationItems />
                </nav>

            </div>
        </Aux>

    );
}
export default sideDrawer;