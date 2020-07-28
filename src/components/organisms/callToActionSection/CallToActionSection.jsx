// Baseline & Utils
import React from 'react'
import styles from './callToActionSection.module.scss'


// Internal Components


// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const CallToActionSection = props => {
    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <Row className='align-items-center' style={{ minHeight: '100vh' }}>
                    <p>CallToAction Section</p>
                </Row>
            </Container>
        </section>
    )
}

export default CallToActionSection;