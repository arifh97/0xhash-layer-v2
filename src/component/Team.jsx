import {Container,Row,Col} from 'react-bootstrap'
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
          <CommonTitle className=""  title="Our Team"/>
          </Col>
        </Row>
      </Container>
      <div className="team-slider">
        <Container>
          <Row>
            <Col xs={12}>
                <div className="team-wrap d-flex flex-wrap">
                  <div className="team-card">
                    <div className="team-card-img">
                      <img src={img1} alt="" />
                    </div>
                  </div>
                  <div className="team-card">
                    <div className="team-card-text">
                      <span>Product management</span>
                      <h5>Leslie Alexander</h5>
                      <p>UGC, crypto, high-tech Product, marketing and UX manager, Ex-Youtube, Ex-Glassdoor</p>
                      <Social />
                    </div>
                  </div>
                  <div className="team-card">
                    <div className="team-card-img">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                  <div className="team-card">
                    <div className="team-card-text">
                      <span>Tokenomics analytic</span>
                      <h5>Brooklyn Simmons</h5>
                      <p>Strategic advisor Finblox, ambassador Socean Venture investor and angel  </p>
                      <Social />
                    </div>
                  </div>

                  <div className="team-card">
                    <div className="team-card-img">
                      <img src={img3} alt="" />
                    </div>
                  </div>

                  <div className="team-card">
                    <div className="team-card-text">
                      <span>networking and support </span>
                      <h5>Savannah Nguyen</h5>
                      <p>Strategic advisor Finblox, ambassador Socean Venture investor and angel  </p>
                      <Social />
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
