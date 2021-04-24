// Baseline & Utils
import React from "react"
import appleStoreBadge from "../../../data/headerSection/apple_store.png"
import playStoreBadge from "../../../data/headerSection/google_play_badge.png"

// Internal Components
import CustomButton from "../../atoms/customButton/CustomButton"

// External Components
import { Container, Form, Row, Col } from "react-bootstrap"
import { StickyContainer, Sticky } from "react-sticky"
import Img from "gatsby-image"

const StickyHeader = props => {
  const handleClickSerParte = () => {
    const section = document.querySelector("#cta")
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <header id="navbarSticky" style={style}>
            <Container style={{ height: "100%" }}>
              <Row style={{ height: "100%", margin: "0px 0px" }}>
                <Col
                  className="d-none d-md-block"
                  md={5}
                  style={{ padding: "0px", alignSelf: "center" }}
                >
                  <Img fixed={props.logoVerdeImg} />
                  {/* <img src="https://i.ibb.co/Ms6SNjT/Verde.png" alt="Logo" style={{ height: '48px' }} /> */}
                </Col>
                <Col
                  sm={12}
                  md={7}
                  style={{ padding: "0px", alignSelf: "center" }}
                >
                  <div className="d-flex justify-content-center justify-content-md-end align-items-center">
                    <a href="https://play.google.com/store/apps/details?id=com.ecolophymobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                      <img src={playStoreBadge} width={150} />
                    </a>
                    <a href="https://apps.apple.com/us/app/ecolophy/id1551324210">
                      <img src={appleStoreBadge} width={150} />
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
        )}
      </Sticky>
      {props.children}
    </StickyContainer>
  )
}

export default StickyHeader
