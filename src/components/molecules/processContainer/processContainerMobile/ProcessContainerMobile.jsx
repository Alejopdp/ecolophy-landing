// Baseline & Utils
import React, { useState } from 'react'
import styles from './ProcessContainerMobile.module.scss'


// Internal Components
import ProcessItem from '../../processItem/ProcessItem';
import ItemsCarousel from 'react-items-carousel';


// React Bootstrap Components
// import { Container, Row, Col } from 'react-bootstrap';


const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 }
];


const ProcessContainerMobile = props => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const arrow = direction => {
        return (
            <div className={styles.arrowContainer}>
                <span className={styles.arrow}>{direction}</span>
            </div>
        )
    }

    return (
        <div style={{ width: '100%', margin: "0 auto" }}>
            {props.steps.map((step, key) => {
                return <ProcessItem key={key} stepNumber={step.stepNumber} imgSrc={step.imgSrc} imgAlt={step.title} title={step.title} text={step.text} />
            })}
        </div>
    )
}

export default ProcessContainerMobile;