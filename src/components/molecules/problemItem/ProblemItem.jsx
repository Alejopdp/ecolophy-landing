// Baseline & Utils
import React from 'react'
import styles from './problemItem.module.scss'


// Internal Components


// External Components
import Img from "gatsby-image";


const ProblemItem = props => {
    return (
        <div className={styles.problemItemContainer}>
            <div className={styles.imgContainer}>
                <Img fixed={props.imgSrc} />
            </div>
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default ProblemItem;