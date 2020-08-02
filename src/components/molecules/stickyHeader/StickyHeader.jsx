// Baseline & Utils
import React from "react"


// Internal Components
import CustomButton from '../../atoms/customButton/CustomButton'

// External Components
import { Container, Form, Row, Col } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';



const StickyHeader = props => {
  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <header id='navbarSticky' style={style}>
            <Container style={{ height: '100%' }}>
              <Row style={{ height: '100%' }}>
                <Col className='d-none d-lg-block' md={5} style={{ padding: '0px', alignSelf: 'center' }}>
                  <img src="https://i.ibb.co/Ms6SNjT/Verde.png" alt="Logo" style={{ height: '48px' }} />
                </Col>
                <Col sm={12} md={7} style={{ padding: '0px', alignSelf: 'center' }}>
                  <Form>
                    <Row>
                      <Col xs={8} style={{ padding: '0px' }}>
                        <Form.Group controlId="formBasicEmail" style={{ margin: '0px' }}>
                          <Form.Control style={{ borderRadius: '60px', height: '40px' }} type="email" placeholder="Ingrese su correo electrónico" />
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <CustomButton type='primary' text='¡QUIERO SER PARTE!' style={{ height: '40px' }} handleClick={() => props.setModalShow(true)} />
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



{/* <Container>
<div className='d-flex flex-row justify-content-between' style={{ width: '100%' }}>
  <Col className='d-sm-none' md={4} style={{ padding: '0px' }}>
    <img src="https://i.ibb.co/Ms6SNjT/Verde.png" alt="Logo" style={{ height: '48px' }} />
  </Col>
  <Col sm={12} md={8} style={{ padding: '0px' }}>
    <div className='d-flex align-items-center'>
      <Form>
        <Row>
          <Col xs={8} style={{ padding: '0px' }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control style={{ borderRadius: '60px', height: '40px' }} type="email" placeholder="Ingrese su correo electrónico" />
            </Form.Group>
          </Col>
          <Col xs={4}>
            <CustomButton type='primary' text='¡QUIERO SER PARTE!' />
          </Col>
        </Row>
      </Form>
    </div>
  </Col>
</div>
</Container> */}


export default StickyHeader;