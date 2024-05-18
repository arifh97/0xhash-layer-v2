import {Container,Row,Col} from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import img1 from '../assets/img/partner-img-1.png'
import img2 from '../assets/img/partner-img-2.png'
import img3 from '../assets/img/partner-img-3.png'
import img4 from '../assets/img/partner-img-4.png'
import img5 from '../assets/img/partner-img-5.png'
import img6 from '../assets/img/partner-img-6.png'
import img7 from '../assets/img/partner-img-7.png'
import img8 from '../assets/img/partner-img-8.png'
import img9 from '../assets/img/partner-img-9.png'
import img10 from '../assets/img/partner-img-10.png'
export default function Partner() {
  return (
    <div className='partner common-padding'>
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle className='text-center' title='Let’s see Our Partners ' des='At OxETHDao, we believe in the power of collaboration to drive meaningful change and innovation. ' />
          </Col>
          <Col xs={12}>
            <div className="partner-item d-flex flex-wrap justify-content-center">
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img1} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img2} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="1600" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img3} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img4} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img5} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img6} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img7} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="1600" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img8} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img9} alt="" />
              </div>
              <div className="partner-item-single" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="" data-aos-offset="0">
                <div className="borderTop"></div>
                <div className="borderLeft"></div>
                <img src={img10} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
