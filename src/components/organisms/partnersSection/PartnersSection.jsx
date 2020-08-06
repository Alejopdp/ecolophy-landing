// Baseline & Utils
import React from 'react'
import styles from './partnersSection.module.scss'


// Internal Components


// External Components
import { Container, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";


const PartnersSection = props => {

    const partners = [
        {
            id: 1,
            name: 'UCA',
            img: props.logoUcaImg
        }
    ]

    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <Row className={styles.rowContainer}>
                    {partners.map((partner, key) => {
                        return <Img fixed={partner.img} />
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default PartnersSection;