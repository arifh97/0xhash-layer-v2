import {Container,Row,Col} from 'react-bootstrap'
import bannerImg from '../assets/img/banner-img.png'

export default function Banner() {
  return (
    <div className='banner common'>
      <Container>
        <Row className='justify-content-center justify-content-lg-start'>
          <Col xs={12} md={10} lg={7} xl={6}>
            <div className="banner-content">
              <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="" data-aos-offset="0" className='common-meta'>distinct styles, Choose your identity.</span>
              <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">OxETHDao <span>Members’ Club</span></h1>
              <p data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0">Join a community of visionaries, creators, and innovators at the forefront of decentralized collaboration.</p>
              <ol data-aos="fade-up" data-aos-duration="1600" data-aos-delay="" data-aos-offset="0">
                <li>Exclusive Community</li>
                <li>Collaborative Projectsy</li>
                <li>Recognition and Visibility</li>
                <li>Empowerment and Impact</li>
              </ol>
              <a href="#" className="primary-btn" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0">
                <span className="btn"> Get Connected
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83301 14.9993L14.1663 6.66602" stroke="#EEEEF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.83301 6.66602H14.1663V14.9993" stroke="#EEEEF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </Col>
          <Col xs={12} md={10} lg={5} xl={6}>
            <div className="banner-img" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">
              <img src={bannerImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
