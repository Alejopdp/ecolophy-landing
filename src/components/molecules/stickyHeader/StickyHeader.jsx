// Baseline & Utils
import React from "react"


// Internal Components
import CustomButton from '../../atoms/customButton/CustomButton'

// External Components
import { Container, Form, Row, Col } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import Img from "gatsby-image";


const StickyHeader = props => {

  const handleClickSerParte = () => {
    const section = document.querySelector('#cta');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <header id='navbarSticky' style={style}>
            <Container style={{ height: '100%' }}>
              <Row style={{ height: '100%', margin: '0px 0px' }}>
                <Col className='d-none d-md-block' md={5} style={{ padding: '0px', alignSelf: 'center' }}>
                  <Img fixed={props.logoVerdeImg} />
                  {/* <img src="https://i.ibb.co/Ms6SNjT/Verde.png" alt="Logo" style={{ height: '48px' }} /> */}
                </Col>
                <Col sm={12} md={7} style={{ padding: '0px', alignSelf: 'center' }}>
                  <Form>
                    <Row>
                      <Col className='d-none d-md-block' md={8} style={{ padding: '0px' }}>
                        <Form.Group controlId="formBasicEmail" style={{ margin: '0px' }}>
                          <Form.Control name="email" value={props.formData.email} onChange={props.handleChange} type="email" placeholder="Ingrese su correo electrónico" style={{ borderRadius: '60px', height: '40px' }} />
                        </Form.Group>
                      </Col>
                      <Col sm={12} md={4}>
                        <div className='d-none d-md-flex'>
                          <CustomButton type='primary' text='¡QUIERO SER PARTE!' disabled={!props.validateEmail()} style={{ height: '40px' }} handleClick={() => props.setModalShow(true)} />
                        </div>
                        <div className='d-flex d-md-none'>
                          <CustomButton type='primary' text='¡QUIERO SER PARTE!' style={{ height: '40px' }} handleClick={handleClickSerParte} />
                        </div>
                      </Col>
                    </Row>
                  </Form>
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

export default StickyHeader;