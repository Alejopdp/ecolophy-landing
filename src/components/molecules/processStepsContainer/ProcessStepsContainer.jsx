// Baseline & Utils
import React from 'react'
// import styles from './processStepsContainer.module.scss'


// Internal Components
import ProcessItem from '../processItem/ProcessItem';
import Carousel from 'react-elastic-carousel';


// React Bootstrap Components
// import { Container, Row, Col } from 'react-bootstrap';


const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 }
];


const ProcessStepsContainer = props => {
    return (
        // <>
        //     <Col xs={12} md={4}>
        //         <ProcessItem imgSrc='https://i.ibb.co/Twgb7nQ/Icon-01.png' imgAlt='P1' title='PROCESOS INEFICIENTES' text='Desde el primer hasta el último eslabón de la cadena' />
        //     </Col>
        //     <Col xs={12} md={4}>
        //         2a
        //     </Col>
        //     <Col xs={12} md={4}>
        //         3
        //     </Col>
        // </>
        <Carousel breakPoints={breakPoints} pagination={false}>
            {props.steps.map((step, key) => {
                return <ProcessItem key={key} stepNumber={step.stepNumber} imgSrc={step.imgSrc} imgAlt={step.title} title={step.title} text={step.text} />
            })}
        </Carousel>
    )
}

export default ProcessStepsContainer;