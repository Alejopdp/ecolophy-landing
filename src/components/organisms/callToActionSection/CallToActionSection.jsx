// Baseline & Utils
import React, { useState } from 'react'
import styles from './callToActionSection.module.scss'


// Internal Components
import CustomModal from '../../atoms/customModal/CustomModal';
import CtaBgImage from '../../molecules/ctaBgImage/CtaBgImage';
import CustomButton from '../../atoms/customButton/CustomButton';

// External Components
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Img from "gatsby-image";

// Icons
import { FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';


const CallToActionSection = props => {
    return (
        <CtaBgImage>
            <Container className={styles.ctaContainer} id="cta">
                <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">

                    <Row className='align-items-center justify-content-center' style={{ minHeight: '100vh', paddingTop: '40px', margin: '0px' }}>
                        <div>
                            <h2 className={styles.firstTitle}>JUNTOS PODEMOS MARCAR LA DIFERENCIA</h2>
                            <h2 className={styles.secondTitle}>CON ECOLOPHY, TODOS GANAMOS.</h2>
                        </div>
                        <div>
                            <div>
                                <p className={styles.invitationTextOne}>Actualmente estamos desarrollando la aplicación.</p>
                                <p className={styles.invitationTextTwo}>¡Dejanos tu email a continuación y te avisaremos cuando esté lista!</p>
                            </div>
                            <div>
                                <Form>
                                    <Row style={{ margin: '40px 0px 0px 0px' }}>
                                        <Col xs={12} md={8} style={{ padding: '0px' }}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control name="email" value={props.formData.email} onChange={props.handleChange} type="email" placeholder="Ingrese su correo electrónico" style={{ borderRadius: '60px', height: '48px' }} />
                                                <Form.Text className={styles.spamText} style={{ color: 'white' }}>Quedate tranquilo que no es spam :)</Form.Text>
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} md={4} className={styles.btnSubmitContainer}>
                                            <CustomButton type='primary' text='¡QUIERO SER PARTE!' disabled={!props.validateEmail()} handleClick={() => props.setModalShow(true)} />
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                        <div>
                            <h4 className={styles.firstFinalTitle}>CONSTRUYAMOS HOY EL MUNDO EN EL QUE QUEREMOS VIVIR EN LOS PRÓXIMOS AÑOS.</h4>
                            <h4 className={styles.secondFinalTitle}>SEAMOS RESPONSABLES.</h4>
                        </div>
                        <div className={styles.footerLogoSocialContainer}>
                            <Col xs={12} md={4} className={styles.footerLogoCol}>
                                <Img fixed={props.logoBlancoImg} />
                            </Col>
                            <Col xs={12} md={4} className={styles.sponsorCol}>
                                <div>
                                    <p className={styles.sponsorText}>Contamos con el apoyo de</p>
                                    <Img fixed={props.logoUcaImg} />
                                </div>
                            </Col>
                            <Col xs={12} md={4} style={{ padding: '0px', alignSelf: 'center' }}>
                                <div className={styles.footerSocialDiv}>
                                    <p style={{ color: 'white', margin: '0px' }}>hola@ecolophy.com</p>
                                    <ul className='d-flex align-items-center' style={{ margin: '0px', padding: '0px', listStyle: 'none' }}>
                                        <li>
                                            <a href='https://www.instagram.com/ecolophy.oficial' target="_blank" title="Instagram Ecolophy" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                                                <FaInstagram size={32} color='white' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.facebook.com/ecolophy/' target="_blank" title="Facebook Ecolophy" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                                                <FaFacebookSquare size={32} color='white' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='https://www.linkedin.com/company/ecolophy-oficial' target="_blank" title="Linkedin Ecolophy" rel="noopener noreferrer" style={{ marginLeft: '8px' }}>
                                                <FaLinkedin size={32} color='white' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </div>

                    </Row>
                </div>
            </Container>
        </CtaBgImage>
    )
}

export default CallToActionSection;