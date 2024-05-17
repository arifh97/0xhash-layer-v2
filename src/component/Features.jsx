import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import icon1 from '../assets/img/feature-icon-1.svg'
import icon2 from '../assets/img/feature-icon-2.svg'
import icon3 from '../assets/img/feature-icon-3.svg'
import icon4 from '../assets/img/feature-icon-4.svg'
import icon5 from '../assets/img/feature-icon-5.svg'
import icon6 from '../assets/img/feature-icon-6.svg'

export default function Features() {
  return (
    <div className='feature common-padding'>
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle className='text-center' subTitle='Benefits of OxETHDao ' title='hUnlock Exclusive Opportunities2' des='As a member of the OxETHDao community, you gain access to a world of exclusive opportunities that empower you to thrive personally and professionally.' />
          </Col>
          <Col xs={12}>
            <div className="feature-card d-flex flex-wrap">
              <div className="feature-card-single">
                <div className="icon">
                  <img src={icon1} alt="" />
                </div>
                <div className="text">
                  <h4>Access to Cutting-edge Resources</h4>
                  <p>Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field.</p>
                </div>
              </div>
              <div className="feature-card-single">
                <div className="icon">
                  <img src={icon2} alt="" />
                </div>
                <div className="text">
                  <h4>Access to Cutting-edge Resources</h4>
                  <p>Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field.</p>
                </div>
              </div>
              <div className="feature-card-single">
                <div className="icon">
                  <img src={icon3} alt="" />
                </div>
                <div className="text">
                  <h4>Access to Cutting-edge Resources</h4>
                  <p>Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field.</p>
                </div>
              </div>
              <div className="feature-card-single">
                <div className="icon">
                  <img src={icon4} alt="" />
                </div>
                <div className="text">
                  <h4>Access to Cutting-edge Resources</h4>
                  <p>Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field.</p>
                </div>
              </div>
              <div className="feature-card-single">
                <div className="icon">
                  <img src={icon5} alt="" />
                </div>
                <div className="text">
                  <h4>Access to Cutting-edge Resources</h4>
                  <p>Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field.</p>
                </div>
              </div>
              <div className="feature-card-single">
                <div className="icon">
                  <img src={icon6} alt="" />
                </div>
                <div className="text">
                  <h4>Access to Cutting-edge Resources</h4>
                  <p>Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field.</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
