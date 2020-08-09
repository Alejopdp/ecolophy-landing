// Baseline & Utils
import React from 'react'
import styles from './headerSection.module.scss'
import generalStyles from '../../../styles.scss'

// Internal Components
import CustomButton from '../../atoms/customButton/CustomButton'
import HeaderBgImage from '../../molecules/headerBgImage/HeaderBgImage'


// External Components
import { Container, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";


const HeaderSection = props => {

    const handleClickVerMas = () => {
        const section = document.querySelector('#problema');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <HeaderBgImage imgRoute="headerSection/background.jpg">
            <Container className={styles.hsContainer}>
                <Row className='align-items-center' style={{ minHeight: '100vh' }}>
                    <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
                        <div className={styles.logoContainer}>
                            <Img fixed={props.logoBlancoImg} />
                        </div>
                        <Col xs={12} md={6}>
                            <h1 className={styles.title}>
                                LLEGÓ UNA NUEVA FORMA DE <span className={styles.titleSubcolor}>RECICLAR</span>
                            </h1>
                            <h3 className={styles.subtitle}>Con Ecolophy, reciclar nunca fue tan fácil.</h3>
                            <Col xs={12} md={6} style={{ padding: '0px' }}>
                                <CustomButton type='secondary' text='¡QUIERO VER MÁS!' handleClick={handleClickVerMas} />
                            </Col>
                        </Col>
                    </div>
                </Row>
            </Container>
        </HeaderBgImage>
    )
}

export default HeaderSection;