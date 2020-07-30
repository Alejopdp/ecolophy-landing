// Baseline & Utils
import React from 'react'
import styles from './processSection.module.scss'


// Internal Components
import Title from '../../atoms/title/Title';
import ProcessStepsContainer from '../../molecules/processStepsContainer/ProcessStepsContainer';

// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';

const processSteps = [
    {
        stepNumber: 1,
        imgSrc: 'https://i.ibb.co/Twgb7nQ/Icon-01.png',
        title: 'DESCARGÁ LA APP',
        text: 'Desde Play Store o App Store, y recibi los stickers QR'
    },
    {
        stepNumber: 2,
        imgSrc: 'https://i.ibb.co/Twgb7nQ/Icon-01.png',
        title: 'COMENZÁ A RECICLAR',
        text: 'Separa tus residuos limpios y secos en un bolsa separada del resto'
    },
    {
        stepNumber: 3,
        imgSrc: 'https://i.ibb.co/Twgb7nQ/Icon-01.png',
        title: 'STICKER QR',
        text: 'Una vez llenada la bolsa, pégalo para comenzar la etapa de solicitud'
    },
    {
        stepNumber: 4,
        imgSrc: 'https://i.ibb.co/Twgb7nQ/Icon-01.png',
        title: 'SOLICITUD DE RETIRO GRATIS',
        text: 'Luego de scaneado el código solicta gratis el reitruo de tu bolsa, y en el dia nosotros la pasamos a buscar'
    },
    {
        stepNumber: 5,
        imgSrc: 'https://i.ibb.co/Twgb7nQ/Icon-01.png',
        title: 'RECIBÍ ECOPOINTS',
        text: 'Una vez entregada la bolsa recibi puntos para intercambiarlos por beneficios exlusivos'
    }
]

const ProcessSection = props => {
    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <Row>
                    <Col>
                        <Title text='¿Cómo es el proceso?' />
                    </Col>
                </Row>
                <Row>
                    <ProcessStepsContainer steps={processSteps} />
                </Row>
            </Container>
        </section>
    )
}

export default ProcessSection;