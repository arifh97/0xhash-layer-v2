import { Container, Row, Col } from 'react-bootstrap'
import CommonTitle from './CommonTitle'

export default function Features() {
  return (
    <div className='feature common-padding'>
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle className='text-center' subTitle='span' title='h2' des='p' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
