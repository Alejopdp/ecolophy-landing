// Baseline & Utils
import React from 'react'
import styles from './ProcessContainerMobile.module.scss'


// Internal Components
import ProcessItemMobile from '../../processItem/processItemMobile/ProcessItemMobile';


// External Components
import { Container } from 'react-bootstrap';



const ProcessContainerMobile = props => {
    return (
        <Container>
            {props.steps.map((step, key) => {
                return <ProcessItemMobile key={key} stepNumber={step.stepNumber} imgSrcMobile={step.imgSrcMobile} imgAlt={step.title} title={step.title} text={step.text} />
            })}
        </Container>
    )
}

export default ProcessContainerMobile;