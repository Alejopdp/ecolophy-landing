// Baseline & Utils
import React, { useState } from "react"
import globalStyles from '../styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby"
import sal from 'sal.js'


// Internal Components
import HeaderSection from '../components/organisms/headerSection/HeaderSection';
import ProblemSection from '../components/organisms/problemSection/ProblemSection';
import BrandSection from '../components/organisms/brandSection/BrandSection';
import AppPresentationSection from '../components/organisms/appPresentationSection/AppPresentationSection';
import ProcessSection from '../components/organisms/processSection/ProcessSection';
import PartnersSection from '../components/organisms/partnersSection/PartnersSection';
import CallToActionSection from '../components/organisms/callToActionSection/CallToActionSection';
import StickyHeader from '../components/molecules/stickyHeader/StickyHeader';
import CustomModal from '../components/atoms/customModal/CustomModal';

// External Components
import { Container, Form, Row, Col } from 'react-bootstrap';


const Home = ({ data }) => {

  const [modalShow, setModalShow] = useState(false);


  return (
    <div>
      <Container fluid style={{ padding: '0px', backgroundColor: globalStyles.backgroundColor }}>
        <HeaderSection
          backgroundImg={data.background.childImageSharp.fluid}
        />
        <StickyHeader setModalShow={setModalShow}>
          <ProblemSection
            composicionResiduosDesktopImg={data.composicionResiduosDesktop.childImageSharp.fixed}
            composicionResiduosMobileImg={data.composicionResiduosMobile.childImageSharp.fixed}
            procesosIneficientesImg={data.procesosIneficientes.childImageSharp.fixed}
            tasasRechazoImg={data.tasasRechazo.childImageSharp.fixed}
            culturaReciclajeImg={data.culturaReciclaje.childImageSharp.fixed}
          />
          <BrandSection />
          <AppPresentationSection
            metodologiaGreencycleImg={data.metodologiaGreencycle.childImageSharp.fixed}
            tecnologiaQrImg={data.tecnologiaQr.childImageSharp.fixed}
            sistemaIncentivosImg={data.sistemaIncentivos.childImageSharp.fixed}
            mundoEcolophyImg={data.mundoEcolophy.childImageSharp.fixed}
            appDesktopImg={data.appDesktop.childImageSharp.fixed}
            appMobileImg={data.appMobile.childImageSharp.fixed}
          // appImg={data.app.childImageSharp.fluid}
          />
          <ProcessSection
            descargarAppImg={data.descargarApp.childImageSharp.fixed}
            comenzarReciclarImg={data.comenzarReciclar.childImageSharp.fixed}
            stickerQrImg={data.stickerQr.childImageSharp.fixed}
            solicitudRetiroImg={data.solicitudRetiro.childImageSharp.fixed}
            recibiEcopointsImg={data.recibiEcopoints.childImageSharp.fixed}
          />
          {/* <PartnersSection /> */}
        </StickyHeader>
        <CallToActionSection setModalShow={setModalShow} />
      </Container>
      <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}


export const query = graphql`
  query {

            ## IMGs for headerSection
      
    background: file(relativePath: {eq: "headerSection/background.jpg" }) {
            childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          }
        }
    
    
        ## IMGs for ProblemSection
    
    composicionResiduosDesktop: file(relativePath: {eq: "problemSection/composicion-residuos.png" }) {
            childImageSharp {
          fixed (height: 275) {
            ...GatsbyImageSharpFixed
          }
          }
        }

    composicionResiduosMobile: file(relativePath: {eq: "problemSection/composicion-residuos.png" }) {
            childImageSharp {
          fixed (height: 175) {
            ...GatsbyImageSharpFixed
          }
          }
        }

    procesosIneficientes: file(relativePath: {eq: "problemSection/procesos-ineficientes.png" }) {
            childImageSharp {
          fixed (width: 80) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    tasasRechazo: file(relativePath: {eq: "problemSection/tasas-rechazo.png" }) {
            childImageSharp {
          fixed (width: 80) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    culturaReciclaje: file(relativePath: {eq: "problemSection/cultura-reciclaje.png" }) {
            childImageSharp {
          fixed (width: 80) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    
    
        ## IMGs for appPresentationSection
    
    metodologiaGreencycle: file(relativePath: {eq: "appPresentationSection/metodologia-greencycle.png" }) {
            childImageSharp {
          fixed (width: 80) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    tecnologiaQr: file(relativePath: {eq: "appPresentationSection/tecnologia-qr.png" }) {
            childImageSharp {
          fixed (width: 80) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    sistemaIncentivos: file(relativePath: {eq: "appPresentationSection/sistema-incentivos.png" }) {
            childImageSharp {
          fixed (width: 80) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    mundoEcolophy: file(relativePath: {eq: "appPresentationSection/mundo-ecolophy.png" }) {
            childImageSharp {
          fixed (width: 80) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    appDesktop: file(relativePath: {eq: "appPresentationSection/app.png" }) {
            childImageSharp {
          fixed (height: 500) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    appMobile: file(relativePath: {eq: "appPresentationSection/app.png" }) {
            childImageSharp {
          fixed (height: 300) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    # app: file(relativePath: {eq: "appPresentationSection/app.png" }) {
            #   childImageSharp {
            #     fluid {
            #         ...GatsbyImageSharpFluid
          #       }
          #   }
          # }
      
          # IMGs for processSection
    descargarApp: file(relativePath: {eq: "processSection/descargar-app.png" }) {
            childImageSharp {
          fixed (height: 150) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    comenzarReciclar: file(relativePath: {eq: "processSection/comenzar-reciclar.png" }) {
            childImageSharp {
          fixed (height: 150) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    stickerQr: file(relativePath: {eq: "processSection/sticker-qr.png" }) {
            childImageSharp {
          fixed (height: 150) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    solicitudRetiro: file(relativePath: {eq: "processSection/solicitud-retiro.png" }) {
            childImageSharp {
          fixed (height: 150) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    recibiEcopoints: file(relativePath: {eq: "processSection/recibi-ecopoints.png" }) {
            childImageSharp {
          fixed (height: 150) {
            ...GatsbyImageSharpFixed
          }
          }
        }
    
    
      }
    `

export default Home;