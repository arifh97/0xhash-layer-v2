import {Container,Row,Col} from 'react-bootstrap'
import bannerImg from '../assets/img/banner-img.png'

export default function Banner() {
  return (
    <div className='banner common'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="banner-content">
              <span className='common-meta'>distinct styles, Choose your identity.</span>
              <h1>OxETHDao <span>Members’ Club</span></h1>
              <p>Join a community of visionaries, creators, and innovators at the forefront of decentralized collaboration.</p>
              <ol>
                <li>Exclusive Community</li>
                <li>Collaborative Projectsy</li>
                <li>Recognition and Visibility</li>
                <li>Empowerment and Impact</li>
              </ol>
              <a href="#" className="primary-btn">
                <span className="btn"> Get Connected
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83301 14.9993L14.1663 6.66602" stroke="#EEEEF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.83301 6.66602H14.1663V14.9993" stroke="#EEEEF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="banner-img">
              <img src={bannerImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
