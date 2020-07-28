// Baseline & Utils
import React from 'react'
import styles from './headerSection.module.scss'


// Internal Components


// React Bootstrap Components
import { Container, Row, Col, Button } from 'react-bootstrap';

// const bgImage = 'https://raystrash.com/wp-content/uploads/2015/10/RKC_3601-Version-2-1202x800.jpg'

const HeaderSection = props => {
    return (
        // <section className={styles.hsSection} style={{ backgroundImage: `url(${bgImage})` }}>
        <section className={styles.hsSection}>
            <Container className={styles.hsContainer}>
                <Row className='align-items-center' style={{ minHeight: '100vh' }}>
                    <Col xs={12} md={7}>
                        <h1 className={styles.title}>LLEGÓ UNA NUEVA FORMA DE RECICLAR</h1>
                        <h3 className={styles.subtitle}>Con Ecolophy, reciclar nunca fue tan fácil.</h3>
                        <Button className={styles.seeMoreBtn}>¡QUIERO VER MÁS!</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeaderSection;