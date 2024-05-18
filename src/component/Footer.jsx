import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll';
import Social from './Social'

import logo from '../assets/img/logo.png'

export default function Footer() {
  const navLinks = [
    {
      btn_title: 'About',
      to: 'about'
    },
    {
      btn_title: 'Membership',
      to: 'membership'
    },
    {
      btn_title: 'Team',
      to: 'team'
    },
    {
      btn_title: 'Partners',
      to: 'partners'
    },
  ];
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="d-flex align-items-center flex-wrap justify-content-between">
              <Link className="logo" to="banner" spy={true} smooth={true} duration={700} offset={0}>
                <img src={logo} alt='logo'  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0"/>
              </Link>
              <ul className="d-lg-flex align-items-center d-none" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0">
                {navLinks.map((link, index) => (
                  <li key={index} className='d-block'>
                    <Link className="heading-link text-capitalize" to={link.to}>{link.btn_title}</Link>
                  </li>
                ))}
                <li className='heading-actions d-grid align-items-center d-lg-none'>
                  <a href="#" target='_blank' className='btn'>Sign Up</a>
                  <a href="#" target='_blank' className='btn bg-primary text-white'>Connect Wallet</a>
                </li>
              </ul>
              <Social />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright border-top">
        <Container fluid>
          <Col xs={12}>
            <p className='text-center' data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0">©2024 OxETHDao All Rights Reserved.</p>
          </Col>
        </Container>
      </div>
    </footer>
  )
}
