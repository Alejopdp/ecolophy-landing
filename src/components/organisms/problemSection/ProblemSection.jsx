// Baseline & Utils
import React from 'react'
import styles from './problemSection.module.scss'
import { graphql } from "gatsby"


// Internal Components
import ProblemItem from '../../molecules/problemItem/ProblemItem';

// External Components
import { Container, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";


const ProblemSection = props => {
    return (
        <section className={styles.psSection} id='problema'>
            <Container className={styles.psContainer}>
                <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
                    <Row className={styles.problemCol}>
                        <Col sm={12} md={7}>
                            <p className={styles.problemFirstText}>¿SABÍAS QUE ACTUALMENTE EN CABA <strong>SE PRODUCEN 6.000 TN DE RESIDUOS TOTALES</strong> POR DÍA...</p>
                            <p className={styles.problemSecondText}>…Y SOLO EL 8% LOGRA SER RECICLADO?</p>
                            <p className={styles.problemSourceText}>Fuente: Informe de calidad de RSU, CEAMSE-FIUBA, 2015</p>
                        </Col>
                        <Col sm={12} md={5}>
                            <div className={styles.imgProblemContainer} data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
                                <Img className='d-none d-md-flex' fixed={props.composicionResiduosDesktopImg} />
                                <Img className='d-flex d-md-none' fixed={props.composicionResiduosMobileImg} />
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ padding: '32px 0px 32px 0px', marginTop: '32px' }}>
                        <Col>
                            <h2 className={styles.subtitleProblem}>¿POR QUÉ SE GENERA ESTA PROBLEMÁTICA?</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4} style={{ marginBottom: '16px' }}>
                            <ProblemItem imgSrc={props.procesosIneficientesImg} title={`PROCESOS \n INEFICIENTES`} text='Desde el primer hasta el último eslabón de la cadena' />
                        </Col>
                        <Col sm={12} md={4} style={{ marginBottom: '16px' }}>
                            <ProblemItem imgSrc={props.tasasRechazoImg} title={`ALTAS TASAS DE \n RECHAZO EN PLANTAS`} text='El 46% se rechaza volviendo a los terrenos de rellenos sanitarios.' />
                        </Col>
                        <Col sm={12} md={4} style={{ marginBottom: '16px' }}>
                            <ProblemItem imgSrc={props.culturaReciclajeImg} title={`ESCASA CULTURA \n DEL RECICLAJE`} text='Solo 2 de cada 10 personas separa los residuos de manera eficiente' />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}


export const query = graphql`
  query {
    file(relativePath: { eq: "problemSection/tacho.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


export default ProblemSection;