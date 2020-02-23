import React from 'react';
import classes from './Input.css';

let input = (props) => {
    let inputElement = null;
    switch (props.inputtype) {
        case 'input':
            inputElement = <input className={classes.InputElement} {...props} />
            break;
        case 'textArea':
            inputElement = <textArea className={classes.InputElement} {...props} />
            break;
        default: inputElement = <input className={classes.InputElement}  {...props} />
            break;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}> {props.label}</label>
            {inputElement}
        </div>
    );
}

export default input
