import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import Social from './Social'
import img1 from '../assets/img/team-img-1.png'
import img2 from '../assets/img/team-img-2.png'
import img3 from '../assets/img/team-img-3.png'
export default function Team() {
  return (
    <div className='team'>
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle className="" title="Our Team" />
          </Col>
        </Row>
      </Container>
      <div className="team-slider">
        <div className="borderBottom"></div>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="team-wrap d-flex flex-wrap">
                <div className="single">
                  <div className="team-card">
                    <div className="team-card-img" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">
                      <img src={img1} alt="" />
                    </div>
                  </div>
                  <div className="team-card">
                    <div className="team-card-text">
                      <span data-aos="fade-left" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0">Tokenomics analytic</span>
                      <h5 data-aos="fade-left" data-aos-duration="1600" data-aos-delay="" data-aos-offset="0">Brooklyn Simmons</h5>
                      <p data-aos="fade-left" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0">Strategic advisor Finblox, ambassador Socean Venture investor and angel</p>
                      <Social />
                    </div>
                  </div>
                </div>
                <div className="single d-flex flex-column-reverse">
                  <div className="team-card">
                    <div className="team-card-img" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">
                      <img src={img3} alt="" />
                    </div>
                  </div>
                  <div className="team-card">
                    <div className="team-card-text">
                      <span data-aos="fade-left" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">Product management</span>
                      <h5 data-aos="fade-left" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0">Leslie Alexander</h5>
                      <p data-aos="fade-left" data-aos-duration="1600" data-aos-delay="" data-aos-offset="0">UGC, crypto, high-tech Product, marketing and UX manager, Ex-Youtube, Ex-Glassdoor</p>
                      <Social />
                    </div>
                  </div>
                </div>
                <div className="single">
                  <div className="team-card">
                    <div className="team-card-img" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                  <div className="team-card">
                    <div className="team-card-text">
                      <span data-aos="fade-left" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">networking and support </span>
                      <h5 data-aos="fade-left" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0">Savannah Nguyen</h5>
                      <p data-aos="fade-left" data-aos-duration="1600" data-aos-delay="" data-aos-offset="0">Strategic advisor Finblox, ambassador Socean Venture investor and angel</p>
                      <Social />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
