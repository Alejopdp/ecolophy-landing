// Baseline & Utils
import React from "react"
import styles from "./callToActionSection.module.scss"
import appleStoreBadge from "../../../data/headerSection/apple_store.png"
import playStoreBadge from "../../../data/headerSection/google_play_badge.png"

// Internal Components
import CtaBgImage from "../../molecules/ctaBgImage/CtaBgImage"
import CustomButton from "../../atoms/customButton/CustomButton"

// External Components
import { Container, Row, Col, Form } from "react-bootstrap"
import Img from "gatsby-image"

// Icons
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa"

const CallToActionSection = props => {
  return (
    <CtaBgImage>
      <Container className={styles.ctaContainer} id="cta">
        <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
          <Row
            className="align-items-center justify-content-center"
            style={{ minHeight: "100vh", paddingTop: "40px", margin: "0px" }}
          >
            <div>
              <h2 className={styles.firstTitle}>
                JUNTOS PODEMOS MARCAR LA DIFERENCIA
              </h2>
              <h2 className={styles.secondTitle}>
                CON ECOLOPHY, TODOS GANAMOS.
              </h2>
            </div>
            <div>
              <div>
                <p className={styles.invitationTextOne}>
                  Descargate la app y disfrutá 1 mes de prueba gratuita
                </p>
                <p className={styles.invitationTextTwo}>
                  Luego se cobrará un suscripción mensual de 200 ARS
                </p>
              </div>
              <div className="d-flex justify-content-center mt-4 align-items-center flex-column flex-md-row">
                <a href="https://play.google.com/store/apps/details?id=com.ecolophymobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                  <img src={playStoreBadge} width={200} />
                </a>
                <a href="https://apps.apple.com/us/app/ecolophy/id1551324210">
                  <img src={appleStoreBadge} width={200} />
                </a>
              </div>
            </div>
            <div>
              <h4 className={styles.firstFinalTitle}>
                CONSTRUYAMOS HOY EL MUNDO EN EL QUE QUEREMOS VIVIR EN LOS
                PRÓXIMOS AÑOS.
              </h4>
              <h4 className={styles.secondFinalTitle}>SEAMOS RESPONSABLES.</h4>
            </div>
            <div className={styles.footerLogoSocialContainer}>
              <Col
                xs={{ span: 12, order: 2 }}
                md={{ span: 4, order: 1 }}
                className={styles.footerLogoCol}
              >
                <Img fixed={props.logoBlancoImg} />
              </Col>
              <Col
                xs={{ span: 12, order: 3 }}
                md={{ span: 4, order: 2 }}
                className={styles.sponsorCol}
              >
                <div className="d-flex justify-content-center">
                  <p className={styles.sponsorText}>Contamos con el apoyo de</p>
                  <Img fixed={props.logoUcaImg} />
                </div>
              </Col>
              <Col
                xs={{ span: 12, order: 1 }}
                md={{ span: 4, order: 3 }}
                className={styles.socialNetworksCol}
              >
                <div className={styles.footerSocialDiv}>
                  <p style={{ color: "white", margin: "0px" }}>
                    hola@ecolophy.com
                  </p>
                  <ul
                    className="d-flex align-items-center"
                    style={{ margin: "0px", padding: "0px", listStyle: "none" }}
                  >
                    <li>
                      <a
                        href="https://www.instagram.com/ecolophy.oficial"
                        target="_blank"
                        title="Instagram Ecolophy"
                        rel="noopener noreferrer"
                        style={{ marginLeft: "8px" }}
                      >
                        <FaInstagram size={32} color="white" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/ecolophy/"
                        target="_blank"
                        title="Facebook Ecolophy"
                        rel="noopener noreferrer"
                        style={{ marginLeft: "8px" }}
                      >
                        <FaFacebookSquare size={32} color="white" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/ecolophy-oficial"
                        target="_blank"
                        title="Linkedin Ecolophy"
                        rel="noopener noreferrer"
                        style={{ marginLeft: "8px" }}
                      >
                        <FaLinkedin size={32} color="white" />
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

export default CallToActionSection
