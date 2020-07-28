// Baseline & Utils
import React from 'react'
import styles from './problemSection.module.scss'

// Internal Components
import ProblemItem from '../../molecules/problemItem/ProblemItem';

// React Bootstrap Components
import { Container, Row, Col } from 'react-bootstrap';


const ProblemSection = props => {
    return (
        <section className={styles.psSection}>
            <Container className={styles.psContainer}>
                <Row>
                    <Col sm={12} md={7}>
                        <p className={styles.problemFirstText}>¿SABÍAS QUE ACTUALMENTE EN CABA SE PRODUCEN 6.000 TN DE RESIDUOS TOTALES POR MES…</p>
                        <p className={styles.problemSecondText}>…Y SOLO EL 8% LOGRA SER RECICLADO?</p>
                        <p className={styles.problemSourceText}>Fuente: Informe de calidad de RSU, CEAMSE-FIUBA, 2015</p>
                    </Col>
                    <Col sm={12} md={5} className='align-self-center'>
                        <img className={styles.imgProblem} src="https://i.ibb.co/Pt0zpS2/Tacho-04-1.png" alt="ProblemaDelReciclaje" />
                    </Col>
                </Row>
                <Row style={{ padding: '32px 0px 32px 0px' }}>
                    <Col>
                        <h2 className={styles.subtitleProblem}>¿POR QUÉ SE GENERA ESTA PROBLEMÁTICA?</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                        <ProblemItem imgSrc='https://i.ibb.co/Twgb7nQ/Icon-01.png' imgAlt='P1' title='PROCESOS INEFICIENTES' text='Desde el primer hasta el último eslabón de la cadena' />
                    </Col>
                    <Col sm={12} md={4}>
                        <ProblemItem imgSrc='https://i.ibb.co/QNykJwV/Icon-02.png' imgAlt='P2' title='ALTAS TASAS DE RECHAZO EN PLANTAS' text='Debido a residuos sucios y mal separados, el 46% se rechaza volviendo a los terrenos de rellenos sanitarios.' />
                    </Col>
                    <Col sm={12} md={4}>
                        <ProblemItem imgSrc='https://i.ibb.co/MRnxmcT/Icon-03.png' imgAlt='P3' title='ESCASA CULTURA DEL RECICLAJE' text='Solo 2 de cada 10 personas separa los residuos de manera eficiente' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProblemSection;