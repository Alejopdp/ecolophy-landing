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
                    <Row>
                        <Col sm={12} md={7}>
                            <p className={styles.problemFirstText}>¿SABÍAS QUE ACTUALMENTE EN CABA SE PRODUCEN 6.000 TN DE RESIDUOS TOTALES POR MES…</p>
                            <p className={styles.problemSecondText}>…Y SOLO EL 8% LOGRA SER RECICLADO?</p>
                            <p className={styles.problemSourceText}>Fuente: Informe de calidad de RSU, CEAMSE-FIUBA, 2015</p>
                        </Col>
                        <Col sm={12} md={5} className='align-self-center'>
                            <div style={{ paddingLeft: '32px' }} data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
                                <Img fixed={props.composicionResiduosImg} />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
                    <Row style={{ padding: '32px 0px 32px 0px', marginTop: '32px' }}>
                        <Col>
                            <h2 className={styles.subtitleProblem}>¿POR QUÉ SE GENERA ESTA PROBLEMÁTICA?</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={4}>
                            <ProblemItem imgSrc={props.procesosIneficientesImg} title='PROCESOS INEFICIENTES' text='Desde el primer hasta el último eslabón de la cadena' />
                        </Col>
                        <Col sm={12} md={4}>
                            <ProblemItem imgSrc={props.tasasRechazoImg} title='ALTAS TASAS DE RECHAZO EN PLANTAS' text='Debido a residuos sucios y mal separados, el 46% se rechaza volviendo a los terrenos de rellenos sanitarios.' />
                        </Col>
                        <Col sm={12} md={4}>
                            <ProblemItem imgSrc={props.culturaReciclajeImg} title='ESCASA CULTURA DEL RECICLAJE' text='Solo 2 de cada 10 personas separa los residuos de manera eficiente' />
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