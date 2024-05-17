import {Container,Row,Col} from 'react-bootstrap'
import CommonTitle from './CommonTitle'
export default function Cta() {
  return (
    <div className='cta'>
      <Container>

        <Row>
          <Col xs={12} className=''>
            <div className="cta-wrap d-flex justify-content-center">
              <Col md={10} lg={7} xl={6}>
                <div className="cta-content">
                  <CommonTitle className='text-center' title='Get in touch for a customised solution ' des='Get instant access for a free trial, no credit card, no risk' />
                  <div className="cta-input d-flex align-items-center">
                    <input type="email" name="" id="" placeholder='Enter your mail' data-aos="fade-right" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0"/>
                    <a href="#" className="primary-btn" data-aos="fade-right" data-aos-duration="1600" data-aos-delay="" data-aos-offset="0"><span className="btn">Subscribe</span></a>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
