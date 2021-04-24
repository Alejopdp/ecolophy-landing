// Baseline & Utils
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql } from "gatsby"
import sal from "sal.js"
import emailjs from "emailjs-com"
import favicon from "../images/favicon.ico"

// Internal Components
import HeaderSection from "../components/organisms/headerSection/HeaderSection"
import ProblemSection from "../components/organisms/problemSection/ProblemSection"
import BrandSection from "../components/organisms/brandSection/BrandSection"
import AppPresentationSection from "../components/organisms/appPresentationSection/AppPresentationSection"
import ProcessSection from "../components/organisms/processSection/ProcessSection"
// import PartnersSection from '../components/organisms/partnersSection/PartnersSection';
import CallToActionSection from "../components/organisms/callToActionSection/CallToActionSection"
import StickyHeader from "../components/molecules/stickyHeader/StickyHeader"
import CustomModal from "../components/atoms/customModal/CustomModal"

// External Components
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"

const Home = ({ data }) => {
  const [modalShow, setModalShow] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    barrio: "",
  })
  const [formEnviado, setFormEnviado] = useState(false)

  const emailJsData = {
    serviceId: "gmail_ecolophy",
    templateId: {
      internalMail: "internal_mail",
      customerMail: "customer_mail",
    },
    userId: "user_7WelJqSwDWP3H4r67YQgr",
  }

  const validateEmail = () => {
    let copiaEmail = formData.email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(copiaEmail).toLowerCase())
  }

  const validateForm = () => {
    let copiaValidacion = { ...formData }
    return Object.values(copiaValidacion).every(v => v !== "")
  }

  const handleChange = e => {
    e.preventDefault()
    let propName = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [propName]: value,
    })
  }

  const handleOnInputChangeAutocomplete = (text, e) => {
    e.preventDefault()
    let propName = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [propName]: value,
    })
  }

  const handleOnChangeAutocomplete = selectedValue => {
    let propName = "barrio"
    let value = selectedValue

    setFormData({
      ...formData,
      [propName]: value,
    })
  }

  const handleCloseModal = () => {
    setFormEnviado(false)
    setModalShow(false)
    setFormData({
      email: "",
      nombre: "",
      barrio: "",
    })
  }

  const handleSubmit = () => {
    var templateParams = {
      ...formData,
    }

    // Mail Interno
    emailjs
      .send(
        emailJsData.serviceId,
        emailJsData.templateId.internalMail,
        templateParams,
        emailJsData.userId
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text)
        },
        function (error) {
          console.log("FAILED...", error)
        }
      )

    // Mail a Customers
    emailjs
      .send(
        emailJsData.serviceId,
        emailJsData.templateId.customerMail,
        templateParams,
        emailJsData.userId
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text)
        },
        function (error) {
          console.log("FAILED...", error)
          alert("Algo ha fallado. Intente nuevamente")
        }
      )

    setFormEnviado(true)
    setFormData({
      email: "",
      nombre: "",
      barrio: "",
    })
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="es" />
        <title>Ecolophy - La filosofía del reciclaje</title>
        <link rel="icon" href={favicon} />
        <meta
          name="description"
          content="Con Ecolophy llega una nueva forma de reciclar que nos beneficie a todos."
        />
        <meta
          property="og:title"
          content="Ecolophy - Llegó una nueva forma de reciclar"
        ></meta>
        <meta
          property="og:description"
          content="¿Te imaginás cambiar tus residuos por beneficios exclusivos? Desde la App de Ecolophy podrás hacer eso y mucho más..."
        ></meta>
        <meta
          property="og:image"
          content="https://i.ibb.co/HBBdT54/logo-Ecolophy.jpg"
        ></meta>
        <meta property="og:url" content="https://ecolophy.com"></meta>
      </Helmet>
      <Container fluid id="main-container">
        <HeaderSection
          backgroundImg={data.background.childImageSharp.fluid}
          logoBlancoImg={data.logoBlanco.childImageSharp.fixed}
          googlePlayStoreImage={data.googlePlayStore.childImageSharp.fixed}
          appleStoreImage={data.appleStore.childImageSharp.fluid}
        />
        <StickyHeader
          logoVerdeImg={data.logoVerde.childImageSharp.fixed}
          setModalShow={setModalShow}
          formData={formData}
          handleChange={handleChange}
          validateEmail={validateEmail}
        >
          <ProblemSection
            composicionResiduosDesktopImg={
              data.composicionResiduosDesktop.childImageSharp.fixed
            }
            composicionResiduosMobileImg={
              data.composicionResiduosMobile.childImageSharp.fixed
            }
            procesosIneficientesImg={
              data.procesosIneficientes.childImageSharp.fixed
            }
            tasasRechazoImg={data.tasasRechazo.childImageSharp.fixed}
            culturaReciclajeImg={data.culturaReciclaje.childImageSharp.fixed}
          />
          <BrandSection isotipoImg={data.isotipo.childImageSharp.fixed} />
          <AppPresentationSection
            metodologiaGreencycleImg={
              data.metodologiaGreencycle.childImageSharp.fixed
            }
            tecnologiaQrImg={data.tecnologiaQr.childImageSharp.fixed}
            sistemaIncentivosImg={data.sistemaIncentivos.childImageSharp.fixed}
            mundoEcolophyImg={data.mundoEcolophy.childImageSharp.fixed}
            appDesktopImg={data.appDesktop.childImageSharp.fixed}
            appMobileImg={data.appMobile.childImageSharp.fixed}
          />
          <ProcessSection
            // Imagenes Desktop
            descargarAppDesktopImg={
              data.descargarAppDesktop.childImageSharp.fixed
            }
            comenzarReciclarDesktopImg={
              data.comenzarReciclarDesktop.childImageSharp.fixed
            }
            stickerQrDesktopImg={data.stickerQrDesktop.childImageSharp.fixed}
            solicitudRetiroDesktopImg={
              data.solicitudRetiroDesktop.childImageSharp.fixed
            }
            recibiEcopointsDesktopImg={
              data.recibiEcopointsDesktop.childImageSharp.fixed
            }
            // Imagenes Mobile
            descargarAppMobileImg={
              data.descargarAppMobile.childImageSharp.fixed
            }
            comenzarReciclarMobileImg={
              data.comenzarReciclarMobile.childImageSharp.fixed
            }
            stickerQrMobileImg={data.stickerQrMobile.childImageSharp.fixed}
            solicitudRetiroMobileImg={
              data.solicitudRetiroMobile.childImageSharp.fixed
            }
            recibiEcopointsMobileImg={
              data.recibiEcopointsMobile.childImageSharp.fixed
            }
          />
          {/* <PartnersSection
            logoUcaImg={data.logoUca.childImageSharp.fixed}
          /> */}
        </StickyHeader>
        <CallToActionSection
          logoBlancoImg={data.logoBlanco.childImageSharp.fixed}
          setModalShow={setModalShow}
          formData={formData}
          handleChange={handleChange}
          validateEmail={validateEmail}
          logoUcaImg={data.logoUcaDos.childImageSharp.fixed}
        />
      </Container>
      <CustomModal
        show={modalShow}
        onHide={handleCloseModal}
        formData={formData}
        handleOnInputChangeAutocomplete={handleOnInputChangeAutocomplete}
        handleOnChangeAutocomplete={handleOnChangeAutocomplete}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formEnviado={formEnviado}
        handleCloseForm={handleCloseModal}
        validateForm={validateForm}
      />
    </div>
  )
}

export const query = graphql`
  query {
    ## GENERAL IMGs

    logoVerde: file(relativePath: { eq: "general/logoVerde.png" }) {
      childImageSharp {
        fixed(height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    logoBlanco: file(relativePath: { eq: "general/logoBlanco.png" }) {
      childImageSharp {
        fixed(width: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    #   logoUca: file(relativePath: {eq: "general/logo-uca.png" }) {
    # childImageSharp {
    #     fixed (width: 80) {
    #       ...GatsbyImageSharpFixed
    #     }
    #     }
    #   }

    logoUcaDos: file(relativePath: { eq: "general/logo-uca-dos.png" }) {
      childImageSharp {
        fixed(height: 32) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    isotipo: file(relativePath: { eq: "general/logoBlancoCuadrado.png" }) {
      childImageSharp {
        fixed(height: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ## IMGs for headerSection

    background: file(relativePath: { eq: "headerSection/background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    googlePlayStore: file(
      relativePath: { eq: "headerSection/google_play_badge.png" }
    ) {
      childImageSharp {
        fixed(width: 120, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    appleStore: file(relativePath: { eq: "headerSection/apple_store.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    ## IMGs for ProblemSection

    composicionResiduosDesktop: file(
      relativePath: { eq: "problemSection/composicion-residuos.png" }
    ) {
      childImageSharp {
        fixed(height: 275) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    composicionResiduosMobile: file(
      relativePath: { eq: "problemSection/composicion-residuos.png" }
    ) {
      childImageSharp {
        fixed(height: 175) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    procesosIneficientes: file(
      relativePath: { eq: "problemSection/procesos-ineficientes.png" }
    ) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tasasRechazo: file(
      relativePath: { eq: "problemSection/tasas-rechazo.png" }
    ) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    culturaReciclaje: file(
      relativePath: { eq: "problemSection/cultura-reciclaje.png" }
    ) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    ## IMGs for appPresentationSection

    metodologiaGreencycle: file(
      relativePath: { eq: "appPresentationSection/metodologia-greencycle.png" }
    ) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    tecnologiaQr: file(
      relativePath: { eq: "appPresentationSection/tecnologia-qr.png" }
    ) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    sistemaIncentivos: file(
      relativePath: { eq: "appPresentationSection/sistema-incentivos.png" }
    ) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mundoEcolophy: file(
      relativePath: { eq: "appPresentationSection/mundo-ecolophy.png" }
    ) {
      childImageSharp {
        fixed(width: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    appDesktop: file(relativePath: { eq: "appPresentationSection/app.png" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    appMobile: file(relativePath: { eq: "appPresentationSection/app.png" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    # IMGs for processSection DESKTOP
    descargarAppDesktop: file(
      relativePath: { eq: "processSection/descargar-app.png" }
    ) {
      childImageSharp {
        fixed(height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    comenzarReciclarDesktop: file(
      relativePath: { eq: "processSection/comenzar-reciclar.png" }
    ) {
      childImageSharp {
        fixed(height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stickerQrDesktop: file(
      relativePath: { eq: "processSection/sticker-qr.png" }
    ) {
      childImageSharp {
        fixed(height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    solicitudRetiroDesktop: file(
      relativePath: { eq: "processSection/solicitud-retiro.png" }
    ) {
      childImageSharp {
        fixed(height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recibiEcopointsDesktop: file(
      relativePath: { eq: "processSection/recibi-ecopoints.png" }
    ) {
      childImageSharp {
        fixed(height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    # IMGs for processSection Mobile
    descargarAppMobile: file(
      relativePath: { eq: "processSection/descargar-app.png" }
    ) {
      childImageSharp {
        # fixed (width: 166) {
        fixed(width: 94, height: 94) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    comenzarReciclarMobile: file(
      relativePath: { eq: "processSection/comenzar-reciclar.png" }
    ) {
      childImageSharp {
        fixed(width: 94, height: 94) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stickerQrMobile: file(
      relativePath: { eq: "processSection/sticker-qr.png" }
    ) {
      childImageSharp {
        fixed(width: 94, height: 94) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    solicitudRetiroMobile: file(
      relativePath: { eq: "processSection/solicitud-retiro.png" }
    ) {
      childImageSharp {
        fixed(width: 94, height: 94) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    recibiEcopointsMobile: file(
      relativePath: { eq: "processSection/recibi-ecopoints.png" }
    ) {
      childImageSharp {
        fixed(width: 94, height: 94) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Home
