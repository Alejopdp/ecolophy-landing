// Baseline & Utils
import React from 'react'
import styles from './appPresentation.module.scss'

// Internal Components
import Title from '../../atoms/title/Title';
import AppDescriptionItem from '../../molecules/appDescriptionItem/AppDescriptionItem';

// External Components
import { Container, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";



const AppPresentationSection = props => {
    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">

                    <Row>
                        <Col>
                            <Title text='Conocé nuestra App' />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4} className={styles.appDescriptionItemContainer}>
                            <AppDescriptionItem imgSrc={props.metodologiaGreencycleImg} title='METODOLOGIA GREENCYCLE' text='En etapas de retiro y separación de material' />
                            <AppDescriptionItem imgSrc={props.sistemaIncentivosImg} title='SISTEMAS DE INCENTIVOS' text='Con las Ecobags, Ecocest & Ecopoints, el reciclaje no va a significar un costo extra.' />
                        </Col>
                        <Col xs={12} md={4} className='d-flex justify-content-center'>
                            <Img fixed={props.appImg} />
                        </Col>
                        <Col xs={12} md={4} className={styles.appDescriptionItemContainer} >
                            <AppDescriptionItem imgSrc={props.tecnologiaQrImg} title='TECNOLOGÍA QR' text='Logrando una trazabilidad perfecta entre usuario y residuo.' />
                            <AppDescriptionItem imgSrc={props.mundoEcolophyImg} title='MUNDO ECOLOPHY' text='Se parte de este cambio.' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default AppPresentationSection;