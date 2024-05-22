import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'
import img_1 from '../assets/img/product/1.png'
import img_2 from '../assets/img/product/2.png'
import img_3 from '../assets/img/product/3.png'
import img_4 from '../assets/img/product/4.png'
import img_5 from '../assets/img/product/5.png'
import img_6 from '../assets/img/product/6.png'
import img_7 from '../assets/img/product/7.png'
import img_8 from '../assets/img/product/8.png'
import img_9 from '../assets/img/product/9.png'
import img_10 from '../assets/img/product/10.png'
import img_11 from '../assets/img/product/11.png'
import img_12 from '../assets/img/product/12.png'
import img_13 from '../assets/img/product/13.png'

export default function Products() {
    const products = [img_1,img_2,img_3,img_4,img_5,img_6,img_7,img_8,img_9,img_10,img_11,img_12,img_13];
    return (
        <div className='product'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} xl={10}>
                        <CommonTitle title="Our Products" className='text-center' />
                        <div className="product-wrap d-flex align-items-center justify-content-center flex-wrap">
                            {products.map((item,index) => (
                                <div className='product-item' key={index}>
                                    <img src={item} alt="" />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
