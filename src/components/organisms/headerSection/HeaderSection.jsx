// Baseline & Utils
import React from "react"
import styles from "./headerSection.module.scss"
import generalStyles from "../../../styles.scss"
import appleStoreBadge from "../../../data/headerSection/apple_store.png"
import playStoreBadge from "../../../data/headerSection/google_play_badge.png"

// Internal Components
import CustomButton from "../../atoms/customButton/CustomButton"
import HeaderBgImage from "../../molecules/headerBgImage/HeaderBgImage"

// External Components
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { FaGooglePlay, FaAppStore } from "react-icons/fa"

const HeaderSection = props => {
  const handleClickVerMas = () => {
    const section = document.querySelector("#brand-section")
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <HeaderBgImage imgRoute="headerSection/background.jpg">
      <Container className={styles.hsContainer}>
        <Row className="align-items-center" style={{ minHeight: "100vh" }}>
          <div data-sal="fade" data-sal-delay="200" data-sal-easing="ease">
            <div className={styles.logoContainer}>
              <Img fixed={props.logoBlancoImg} />
            </div>
            <Col xs={12} md={6}>
              <h1 className={styles.title}>
                LLEGÓ UNA NUEVA FORMA DE{" "}
                <span className={styles.titleSubcolor}>RECICLAR</span>
              </h1>
              <h3 className={styles.subtitle}>
                ¿Te imaginás cambiar tus residuos por beneficios exclusivos?
                Desde la App de Ecolophy podrás hacer eso y mucho más
              </h3>
              <Col xs={12} md={6} style={{ padding: "0px" }}>
                <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center">
                  <a href="https://play.google.com/store/apps/details?id=com.ecolophymobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                    <img src={playStoreBadge} width={200} />
                  </a>
                  <a href="https://apps.apple.com/us/app/ecolophy/id1551324210">
                    <img src={appleStoreBadge} width={200} />
                  </a>
                </div>
              </Col>
            </Col>
          </div>
        </Row>
      </Container>
    </HeaderBgImage>
  )
}

export default HeaderSection
