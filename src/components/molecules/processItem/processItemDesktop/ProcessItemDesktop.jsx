// Baseline & Utils
import React from 'react'
import styles from './processItemDesktop.module.scss'


// Internal Components


// External Components
import Img from "gatsby-image";


const ProcessItemDesktop = props => {
    return (
        <div>
            <div className={styles.stepNumberContainer}>
                <span className={styles.stepNumber}>{props.stepNumber}</span>
            </div>
            <div className={styles.imgContainer}>
                <Img fixed={props.imgSrcDesktop} />
            </div>
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default ProcessItemDesktop;