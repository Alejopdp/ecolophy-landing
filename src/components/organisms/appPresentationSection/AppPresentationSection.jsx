// Baseline & Utils
import React from 'react'
import styles from './appPresentation.module.scss'

// Internal Components
import Title from '../../atoms/title/Title';
import AppDescriptionItem from '../../molecules/appDescriptionItem/AppDescriptionItem';

// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const AppPresentationSection = props => {
    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <Row>
                    <Col>
                        <Title text='Conocé nuestra App' />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className={styles.appDescriptionItemContainer}>
                        <AppDescriptionItem imgSrc='https://i.ibb.co/Twgb7nQ/Icon-01.png' imgAlt='P1' title='METODOLOGIA GREENCYCLE' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                        <AppDescriptionItem imgSrc='https://i.ibb.co/Twgb7nQ/Icon-01.png' imgAlt='P1' title='SISTEMAS DE INCENTIVOS' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                    </Col>
                    <Col xs={12} md={4} className='d-flex justify-content-center'>
                        <img src="https://i.ibb.co/5cSzYNc/App.png" alt="App" className={styles.appImage} />
                    </Col>
                    <Col xs={12} md={4} className={styles.appDescriptionItemContainer} >
                        <AppDescriptionItem imgSrc='https://i.ibb.co/Twgb7nQ/Icon-01.png' imgAlt='P1' title='TECNOLOGÍA QR' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                        <AppDescriptionItem imgSrc='https://i.ibb.co/Twgb7nQ/Icon-01.png' imgAlt='P1' title='MUNDO ECOLOPHY' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AppPresentationSection;