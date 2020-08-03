// Baseline & Utils
import React from 'react'
import styles from './processSection.module.scss'


// Internal Components
import Title from '../../atoms/title/Title';
import ProcessContainerDesktop from '../../molecules/processContainer/processContainerDesktop/ProcessContainerDesktop';
import ProcessContainerMobile from '../../molecules/processContainer/processContainerMobile/ProcessContainerMobile';

// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const ProcessSection = props => {

    const processSteps = [
        {
            stepNumber: 1,
            imgSrcDesktop: props.descargarAppDesktopImg,
            imgSrcMobile: props.descargarAppMobileImg,
            title: 'DESCARGÁ LA APP',
            text: 'Desde Play Store o App Store, y recibi los stickers QR'
        },
        {
            stepNumber: 2,
            imgSrcDesktop: props.comenzarReciclarDesktopImg,
            imgSrcMobile: props.comenzarReciclarMobileImg,
            title: 'COMENZÁ A RECICLAR',
            text: 'Separa tus residuos limpios y secos en un bolsa separada del resto'
        },
        {
            stepNumber: 3,
            imgSrcDesktop: props.stickerQrDesktopImg,
            imgSrcMobile: props.stickerQrMobileImg,
            title: 'STICKER QR',
            text: 'Una vez llenada la bolsa, pégalo para comenzar la etapa de solicitud'
        },
        {
            stepNumber: 4,
            imgSrcDesktop: props.solicitudRetiroDesktopImg,
            imgSrcMobile: props.solicitudRetiroMobileImg,
            title: 'SOLICITUD DE RETIRO GRATIS',
            text: 'Luego de scaneado el código solicta gratis el reitruo de tu bolsa, y en el dia nosotros la pasamos a buscar'
        },
        {
            stepNumber: 5,
            imgSrcDesktop: props.recibiEcopointsDesktopImg,
            imgSrcMobile: props.recibiEcopointsMobileImg,
            title: 'RECIBÍ ECOPOINTS',
            text: 'Una vez entregada la bolsa recibi puntos para intercambiarlos por beneficios exlusivos'
        }
    ]


    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
                    <Row>
                        <Col>
                            <Title text='¿Cómo es el proceso?' />
                        </Col>
                    </Row>
                    <Row className='d-none d-md-flex'>
                        <ProcessContainerDesktop steps={processSteps} />
                    </Row>
                    <Row className='d-flex d-md-none'>
                        <ProcessContainerMobile steps={processSteps} />
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default ProcessSection;