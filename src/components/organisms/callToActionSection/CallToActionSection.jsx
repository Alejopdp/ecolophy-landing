// Baseline & Utils
import React from 'react'
import styles from './callToActionSection.module.scss'


// Internal Components


// React Bootstrap Components
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Icons
import { FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const CallToActionSection = props => {
    return (
        <section className={styles.ctaSection}>
            <Container className={styles.ctaContainer}>
                <Row className='align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                    <div>
                        <h2 className={styles.firstTitle}>JUNTOS PODEMOS MARCAR LA DIFERENCIA</h2>
                        <h2 className={styles.secondTitle}>CON ECOLOPHY, TODOS GANAMOS.</h2>
                    </div>
                    <div>
                        <div>
                            <p className={styles.invitationText}>Actualmente estamos desarrollando la aplicación.</p>
                            <p className={styles.invitationText}>Dejanos a continuación tu email y te avisaremos cuando esté lista.</p>
                        </div>
                        <div>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                                    <Form.Text className="text-muted">Quedate tranquilo que no es spam :)</Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    ¡QUIERO SER PARTE!
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.firstFinalTitle}>CONSTRUYAMOS HOY EL MUNDO EN EL QUE QUEREMOS VIVIR EN LOS PRÓXIMOS AÑOS.</h4>
                        <h4 className={styles.secondFinalTitle}>SEAMOS RESPONSABLES.</h4>
                    </div>
                    <div className={styles.footerLogoSocialContainer}>
                        <img src="https://i.ibb.co/2YSMdvd/Blanco.png" alt="Logo" style={{ width: '160px' }} />
                        <div>
                            <p style={{ color: 'white', margin: '0px' }}>hola@ecolophy.com</p>
                            <ul className='d-flex align-items-center' style={{ margin: '0px' }}>
                                <li>
                                    <a href='www.instagram.com/' target="_blank" title="Contact John Vincent at Twitter" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                                        <FaInstagram size={32} color='white' />
                                    </a>
                                </li>
                                <li>
                                    <a href='www.facebook.com/' target="_blank" title="Contact John Vincent at Facebook" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                                        <FaFacebookSquare size={32} color='white' />
                                    </a>
                                </li>
                                <li>
                                    <a href='www.linkedin.com/' target="_blank" title="Contact John Vincent at AngelList" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                                        <FaLinkedin size={32} color='white' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default CallToActionSection;