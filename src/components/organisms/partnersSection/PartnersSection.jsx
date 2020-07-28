// Baseline & Utils
import React from 'react'
import styles from './partnersSection.module.scss'


// Internal Components


// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const PartnersSection = props => {
    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <Row className={styles.rowContainer}>
                    <p>Partners Section</p>
                </Row>
            </Container>
        </section>
    )
}

export default PartnersSection;