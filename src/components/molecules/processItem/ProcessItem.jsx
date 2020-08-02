// Baseline & Utils
import React from 'react'
import styles from './processItem.module.scss'


// Internal Components


// React Bootstrap Components
import Img from "gatsby-image";


const ProcessItem = props => {
    return (
        <div>
            <div className={styles.stepNumberContainer}>
                <span className={styles.stepNumber}>{props.stepNumber}</span>
            </div>
            <div className={styles.imgContainer}>
                <Img fixed={props.imgSrc} />
                {/* <img className={styles.imgParticularProblem} src={props.imgSrc} alt={props.imgAlt} /> */}
            </div>
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default ProcessItem;