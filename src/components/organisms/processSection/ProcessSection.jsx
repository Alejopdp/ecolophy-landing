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
            text: 'Desde Play Store o App Store, y recibí los stickers QR directamente en tu domicilio'
        },
        {
            stepNumber: 2,
            imgSrcDesktop: props.comenzarReciclarDesktopImg,
            imgSrcMobile: props.comenzarReciclarMobileImg,
            title: 'COMENZÁ A RECICLAR',
            text: 'Separá tus residuos limpios y secos en una bolsa separada del resto. No te preocupes, te indicaremos la forma correcta de hacerlo'
        },
        {
            stepNumber: 3,
            imgSrcDesktop: props.stickerQrDesktopImg,
            imgSrcMobile: props.stickerQrMobileImg,
            title: 'PEGÁ EL STICKER QR',
            text: 'Una vez llenada la bolsa, pegá el sticker QR a la bolsa para comenzar la etapa de solicitud'
        },
        {
            stepNumber: 4,
            imgSrcDesktop: props.solicitudRetiroDesktopImg,
            imgSrcMobile: props.solicitudRetiroMobileImg,
            title: 'SOLICITÁ TU RETIRO GRATIS',
            text: 'Luego de escanear el código QR, solicitá gratis el retiro de tu bolsa y nosotros la pasaremos a buscar en el día'
        },
        {
            stepNumber: 5,
            imgSrcDesktop: props.recibiEcopointsDesktopImg,
            imgSrcMobile: props.recibiEcopointsMobileImg,
            title: 'RECIBÍ ECOPOINTS',
            text: 'Una vez entregada la bolsa, recibirás Ecopoints para intercambiarlos por beneficios exlusivos'
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