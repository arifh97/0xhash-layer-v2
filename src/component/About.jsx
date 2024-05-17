import {Container,Row,Col} from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import aboutImg from '../assets/img/about-img.png'

export default function About() {
  return (
    <div className='about text-center text-lg-start'>
      <Container>
        <Row className='flex-column-reverse flex-lg-row'>
          <Col xs={12}  lg={6}>
            <div className="about-img" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">
              <img src={aboutImg} alt="" />
            </div>
          </Col>
          <Col xs={12}  lg={6}>
            <CommonTitle  className="mb-3 pb-1 mb-md-4 pb-lg-3" subTitle="About OxETHDao " title="Forge Your Unique Journey" des="Embark on a personalized journey of growth and discovery with OxETHDao's diverse membership styles." des2="Each style is tailored to accommodate a wide range of skills, and ambitions, empowering members to find their perfect fit and make meaningful contributions to our community. " />
            <a className="primary-btn" href="#" data-aos="fade-left" data-aos-duration="2100" data-aos-delay="" data-aos-offset="0"><span className="btn">Explore Membership</span></a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
