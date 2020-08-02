// Baseline & Utils
import React from 'react'
import styles from './partnersSection.module.scss'


// Internal Components


// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';

const partners = [
    {
        id: 1,
        name: 'UCA',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Escudouca.jpg'
    },
    {
        id: 2,
        name: 'UCA',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Escudouca.jpg'
    },
    {
        id: 3,
        name: 'UCA',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Escudouca.jpg'
    },
    {
        id: 4,
        name: 'UCA',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Escudouca.jpg'
    },
    {
        id: 5,
        name: 'UCA',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Escudouca.jpg'
    },
    {
        id: 6,
        name: 'UCA',
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Escudouca.jpg'
    },
]

const PartnersSection = props => {
    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
                    <Row className={styles.rowContainer}>
                        {partners.map((partner, key) => {
                            return <img key={key} src={partner.img} alt={partner.name} style={{ width: '80px', height: '80px' }} />
                        })}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default PartnersSection;