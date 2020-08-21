// Baseline & Utils
import React from 'react'
import styles from './processItemMobile.module.scss'


// Internal Components


// External Components
import Img from "gatsby-image";
import { Col, Row } from 'react-bootstrap'


const ProcessItemMobile = props => {
    return (
        // <div>
        //     <div className={styles.stepNumberContainer}>
        //         <span className={styles.stepNumber}>{props.stepNumber}</span>
        //     </div>
        //     <div className={styles.imgContainer}>
        //         <Img fixed={props.imgSrc} />
        //     </div>
        //     <h4 className={styles.title}>{props.title}</h4>
        //     <p className={styles.text}>{props.text}</p>
        // </div>
        <>

            <Row style={{ marginBottom: '32px' }}>
                <Col xs={4} className={styles.imgCol}>
                    <div className={styles.imgContainer}>
                        <Img fixed={props.imgSrcMobile} />
                    </div>
                </Col>
                <Col xs={8} style={{ alignSelf: 'center' }}>
                    <h3 className={styles.stepText}>PASO {props.stepNumber}:</h3>
                    <h4 className={styles.title}>{props.title}</h4>
                    <p className={styles.text}>{props.text}</p>
                </Col>
            </Row>
        </>
    )
}

export default ProcessItemMobile;