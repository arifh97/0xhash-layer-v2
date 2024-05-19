import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import icon1 from '../assets/img/feature-icon-1.svg'
import icon2 from '../assets/img/feature-icon-2.svg'
import icon3 from '../assets/img/feature-icon-3.svg'
import icon4 from '../assets/img/feature-icon-4.svg'
import icon5 from '../assets/img/feature-icon-5.svg'
import icon6 from '../assets/img/feature-icon-6.svg'

export default function Features() {
  const features = [
    {
      icon: icon1,
      title: 'Access to Cutting-edge Resources',
      des: 'Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field.'
    }, {
      icon: icon2,
      title: 'Early Access to Opportunities',
      des: 'Be the first to hear about new opportunities, and initiatives within the OxETHDao network, giving you a competitive edge.'
    }, {
      icon: icon3,
      title: 'Recognition and Visibility',
      des: 'Showcase your expertise and contributions within the OxETHDao community, and visibility for your achievements through awards.'
    }, {
      icon: icon4,
      title: 'Networking Opportunities',
      des: 'Connect with a diverse community of industry experts, thought leaders, and online forums, valuable relationships and collaborations.'
    }, {
      icon: icon5,
      title: 'Project Collaboration',
      des: 'Collaborate on innovative projects and initiatives within the OxETHDao ecosystem, creativity of the community to drive meaningful change.'
    }, {
      icon: icon6,
      title: 'Governance Participation',
      des: 'Participate in the governance process of OxETHDao, decision-making of the organization through voting rights.'
    },
  ]
  return (
    <div className='feature common-padding'>
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle className='text-center' subTitle='Benefits of OxETHDao ' title='Unlock Exclusive Opportunities' des='As a member of the OxETHDao community, you gain access to a world of exclusive opportunities that empower you to thrive personally and professionally.' />
          </Col>
        </Row>
        <Row className='common-row'>
          {features.map((item, index) => (
            <Col xs={12} md={6} lg={4} key={index} className='d-flex'>
              <div className="feature-card-single w-100" data-aos="fade-up" data-aos-duration="1200" data-aos-delay={`${index+1}00`} data-aos-offset="0">
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <div className="text">
                  <h4>{item.title}</h4>
                  <p>{item.des}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
