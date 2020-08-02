// Baseline & Utils
import React from 'react'
import styles from './customButton.module.scss'

// React Bootstrap Components
import { Button } from 'react-bootstrap';


const CustomButton = props => {
    let classes;
    switch (props.type) {
        case 'primary':
            classes = `${styles.generalStyles} ${styles.primaryBtn}`;
            break;
        case 'secondary':
            classes = `${styles.generalStyles} ${styles.secondaryBtn}`;
            break;
        default:
            classes = `${styles.generalStyles} ${styles.primaryBtn}`;
            break;
    }

    return <button className={classes} style={props.style} type="button" onClick={props.handleClick}>{props.text}</button>
}

export default CustomButton;