// Baseline & Utils
import React from 'react'
import styles from './problemItem.module.scss'


// Internal Components


// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const ProblemItem = props => {
    return (
        <>
            <div className={styles.imgContainer}>
                <img className={styles.imgParticularProblem} src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.text}>{props.text}</p>
        </>
    )
}

export default ProblemItem;