// Baseline & Utils
import React from 'react'
import styles from './processItem.module.scss'


// Internal Components


// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const ProcessItem = props => {
    return (
        <div>
            <div className={styles.stepNumberContainer}>
                <span>{props.stepNumber}</span>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.imgParticularProblem} src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default ProcessItem;