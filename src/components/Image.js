import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './Image.css';
const image = () => {
  return (
    <div>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image className='image' src="https://cdn.carbuzz.com/gallery-images/2024-mercedes-amg-s63-sedan-carbuzz-1074051-1600.jpg" rounded />
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default image