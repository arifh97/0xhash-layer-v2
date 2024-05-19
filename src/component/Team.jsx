import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';


import img1 from '../assets/img/team-img-1.png'
import img2 from '../assets/img/team-img-2.png'
import img3 from '../assets/img/team-img-3.png'
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Team() {
  const team = [
    {
      img: img1,
      meta: 'Tokenomics analytic',
      name: 'Brooklyn Simmons',
      des: 'Strategic advisor Finblox, ambassador Socean Venture investor and angel',
      social: [
        {
          name: 'discoard',
          icon: <FaDiscord />,
          url: ''
        },
        {
          name: 'telegram',
          icon: <FaTelegramPlane />,
          url: ''
        },
        {
          name: 'twitter',
          icon: <FaTwitter />,
          url: ''
        },
      ]
    },
    {
      img: img2,
      meta: 'Product management',
      name: 'Leslie Alexander',
      des: 'UGC, crypto, high-tech Product, marketing and UX manager, Ex-Youtube, Ex-Glassdoor',
      social: [
        {
          name: 'discoard',
          icon: <FaDiscord />,
          url: ''
        },
        {
          name: 'telegram',
          icon: <FaTelegramPlane />,
          url: ''
        },
        {
          name: 'twitter',
          icon: <FaTwitter />,
          url: ''
        },
      ]
    },
    {
      img: img3,
      meta: 'networking and support ',
      name: 'Savannah Nguyen',
      des: 'Strategic advisor Finblox, ambassador Socean Venture investor and angel',
      social: [
        {
          name: 'discoard',
          icon: <FaDiscord />,
          url: ''
        },
        {
          name: 'telegram',
          icon: <FaTelegramPlane />,
          url: ''
        },
        {
          name: 'twitter',
          icon: <FaTwitter />,
          url: ''
        },
      ]
    },
    {
      img: img2,
      meta: 'Product management',
      name: 'Leslie Alexander',
      des: 'UGC, crypto, high-tech Product, marketing and UX manager, Ex-Youtube, Ex-Glassdoor',
      social: [
        {
          name: 'discoard',
          icon: <FaDiscord />,
          url: ''
        },
        {
          name: 'telegram',
          icon: <FaTelegramPlane />,
          url: ''
        },
        {
          name: 'twitter',
          icon: <FaTwitter />,
          url: ''
        },
      ]
    },
  ];
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  }, []);
  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      setIsPrevSlide(swiperInstance.isBeginning);
      setIsNextSlide(swiperInstance.isEnd);
    }
  };
  return (
    <div className='team'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="d-flex align-items-center flex-wrap gap-3 common-title justify-content-between">
              <CommonTitle className="mb-0" title="Our Team" />
              <div className="swiper-nav gap-3 gap-lg-4 d-flex align-items-center">
                <button className="d-flex p-0 rounded-pill align-items-center justify-content-center" title='previous' onClick={prevSlide}>
                  <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.9137 10.1069L13.0928 10.1069C12.1748 10.1069 11.3681 10.1625 10.6727 10.2738C9.97728 10.385 9.21231 10.5519 8.3778 10.7745C6.98696 11.1361 5.76302 11.3169 4.70597 11.3169V11.1917C6.54189 10.5241 8.05791 9.80087 9.25404 9.022C10.4502 8.24313 11.3959 7.47816 12.0914 6.72711C12.7868 5.94823 13.5378 4.97464 14.3445 3.80633L10.9231 0.969006C9.50439 3.66725 8.044 5.69788 6.54189 7.06091C5.03977 8.42394 2.99523 9.63397 0.408259 10.691L0.408259 12.7773C2.96741 13.8343 5.01196 15.0444 6.54189 16.4074C8.044 17.7704 9.50439 19.7871 10.9231 22.4576L14.3445 19.662C13.5378 18.4937 12.7868 17.534 12.0914 16.7829C11.3959 16.004 10.4502 15.2252 9.25404 14.4463C8.05791 13.6674 6.54189 12.9442 4.70597 12.2766V12.1514C5.7352 12.1514 6.97305 12.3322 8.41953 12.6938C9.25404 12.9164 10.019 13.0833 10.7144 13.1945C11.4098 13.3058 12.2026 13.3614 13.0928 13.3614L33.9137 13.3614V10.1069Z" fill="#EEEEF4" />
                  </svg>
                </button>
                <button className="d-flex p-0 rounded-pill align-items-center justify-content-center" title='previous' onClick={nextSlide}>
                  <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.0862685 10.1069L20.9072 10.1069C21.8252 10.1069 22.6319 10.1625 23.3273 10.2738C24.0227 10.385 24.7877 10.5519 25.6222 10.7745C27.013 11.1361 28.237 11.3169 29.294 11.3169V11.1917C27.4581 10.5241 25.9421 9.80087 24.746 9.022C23.5498 8.24313 22.6041 7.47816 21.9086 6.72711C21.2132 5.94823 20.4622 4.97464 19.6555 3.80633L23.0769 0.969006C24.4956 3.66725 25.956 5.69788 27.4581 7.06091C28.9602 8.42394 31.0048 9.63397 33.5917 10.691L33.5917 12.7773C31.0326 13.8343 28.988 15.0444 27.4581 16.4074C25.956 17.7704 24.4956 19.7871 23.0769 22.4576L19.6555 19.662C20.4622 18.4937 21.2132 17.534 21.9086 16.7829C22.6041 16.004 23.5498 15.2252 24.746 14.4463C25.9421 13.6674 27.4581 12.9442 29.294 12.2766V12.1514C28.2648 12.1514 27.0269 12.3322 25.5805 12.6938C24.746 12.9164 23.981 13.0833 23.2856 13.1945C22.5902 13.3058 21.7974 13.3614 20.9072 13.3614L0.0862685 13.3614L0.0862685 10.1069Z" fill="#EEEEF4" />
                  </svg>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="team-slider">
        <div className="borderBottom"></div>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="team-wrap d-flex flex-wrap">
                <Swiper
                  className='testimonial-slider'
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    992: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    }
                  }}
                  grabCursor={true}
                  loop={true}
                  onSlideChange={handleSlideChange}
                  ref={swiperRef}
                  modules={[Pagination]}
                >
                  {team.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className={`single d-flex ${index % 2 != 0 ? 'flex-column-reverse' : 'flex-column'}`}>
                        <div className="team-card">
                          <div className="team-card-img" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="" data-aos-offset="0">
                            <img src={item.img} alt="" />
                          </div>
                        </div>
                        <div className="team-card">
                          <div className="team-card-text">
                            <span data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" data-aos-offset="0">{item.meta}</span>
                            <h5 data-aos="fade-up" data-aos-duration="1600" data-aos-delay="" data-aos-offset="0">{item.title}</h5>
                            <p data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0">{item.des}</p>
                            <ul className={`social-list d-flex align-items-center flex-wrap gap-2`}>
                              {item.social.map((item, index) => (
                                <li key={index}>
                                  <a href={item.url} data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0" target="_blank" className="social-link d-flex align-items-center justify-content-center ms-1">
                                    {item.icon}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
