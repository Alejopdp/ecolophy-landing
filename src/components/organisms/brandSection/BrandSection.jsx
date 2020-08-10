// Baseline & Utils
import React from 'react'
import styles from './brandSection.module.scss'


// Internal Components


// External Components
import { Container, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";



const BrandSection = props => {
    return (
        <section className={styles.bsSection} id='brand-section'>
            <Container className={styles.bsContainer}>
                <Row className={styles.rowContainer}>
                    <Col xs={12} md={7} className='align-self-center'>
                        <h2 className={styles.firstText}>En ecolo<strong>phy</strong>,</h2>
                        <h2 className={styles.secondText}><strong>BUSCAMOS CAMBIAR LA REALIDAD</strong> DEL <strong>COMPRO, USO Y TIRO</strong>.</h2>
                    </Col>
                    <Col md={5} className='d-none d-md-block' style={{ textAlign: 'right' }}>
                        <Img fixed={props.isotipoImg} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BrandSection;