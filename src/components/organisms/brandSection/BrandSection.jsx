// Baseline & Utils
import React from 'react'
import styles from './brandSection.module.scss'


// Internal Components


// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const BrandSection = props => {
    return (
        <section className={styles.bsSection}>
            <Container className={styles.bsContainer}>
                <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
                    <Row className={styles.rowContainer}>
                        <Col xs={12} md={7}>
                            <h2 className={styles.firstText}>En ecolophy,</h2>
                            <h2 className={styles.secondText}>BUSCAMOS CAMBIAR LA REALIDAD DEL COMPRO, USO Y TIRO.</h2>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default BrandSection;