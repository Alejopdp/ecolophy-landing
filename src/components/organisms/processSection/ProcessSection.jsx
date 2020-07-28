// Baseline & Utils
import React from 'react'
import styles from './processSection.module.scss'


// Internal Components
import Title from '../../atoms/title/Title';
import AppDescriptionItem from '../../molecules/appDescriptionItem/AppDescriptionItem';

// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const ProcessSection = props => {
    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <Row>
                    <Col>
                        <Title text='¿Cómo es el proceso?' />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        1
                    </Col>
                    <Col xs={12} md={4}>
                        2
                    </Col>
                    <Col xs={12} md={4}>
                        3
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProcessSection;