import {Container,Row,Col} from 'react-bootstrap'
import CommonTitle from './CommonTitle'

export default function About() {
  return (
    <div className='about'>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="about-img"></div>
          </Col>
          <Col xs={12} md={6}>
            <CommonTitle className="mb-3 pb-1 mb-md-4 pb-lg-3" subTitle="text" title="h2" des="p" />
            <a className="btn" href="#">button</a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
