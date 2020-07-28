// Baseline & Utils
import React from "react"
import globalStyles from '../styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// Internal Components
import HeaderSection from '../components/organisms/headerSection/HeaderSection';
import ProblemSection from '../components/organisms/problemSection/ProblemSection';
import BrandSection from '../components/organisms/brandSection/BrandSection';
import AppPresentationSection from '../components/organisms/appPresentationSection/AppPresentationSection';
import ProcessSection from '../components/organisms/processSection/ProcessSection';
import PartnersSection from '../components/organisms/partnersSection/PartnersSection';
import CallToActionSection from '../components/organisms/callToActionSection/CallToActionSection';

// React Bootstrap Components
import { Container } from 'react-bootstrap';


const Home = () => {
  return (
    <div>
      <Container fluid style={{ padding: '0px', backgroundColor: globalStyles.backgroundColor }}>
        <HeaderSection />
        <ProblemSection />
        <BrandSection />
        <AppPresentationSection />
        <ProcessSection />
        <PartnersSection />
        <CallToActionSection />
      </Container>
    </div>
  )
}

export default Home;