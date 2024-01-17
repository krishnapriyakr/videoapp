import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

    const navigateByUrl=useNavigate()


  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
        <h3>Welcome To <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit placeat odio consequatur tempora, non ullam veniam. Qui laborum, est eos incidunt culpa voluptatem. Asperiores consequatur vel, nihil nesciunt perspiciatis necessitatibus!</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
        </Col>
        <Col lg={5}>
          <img className='img-fluid' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="player" />
         </Col>
        <Col></Col>
    </Row>
      
      <div className="container  mt-5 mb-5 d-flex align-items-center justify-content-center flex-column ">
        <h3>Features</h3>
        <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
        <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>

      <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>

         <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
          </Card>
          

        </div>

      </div>

      <div className="container border rounded b-5 mt-5  p-5 border-secondary d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h3 className='mb-5 text-warning'>Simple,Powerfull & fast </h3>
          <h6 className='mb-3'><span className='fs-5 fw-folder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt, molestias consequuntur, labore impedit sequi, architecto nobis eius voluptas voluptatem sapiente aliquid quam. Hic obcaecati mollitia in nam nihil.</h6>
          <h6 className='mb-3'><span className='fs-5 fw-folder text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt, molestias consequuntur, labore impedit sequi, architecto nobis eius voluptas voluptatem sapiente aliquid quam. Hic obcaecati mollitia in nam nihil.</h6>
          <h6 className='mb-3'><span className='fs-5 fw-folder text-warning'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptates deserunt, molestias consequuntur, labore impedit sequi, architecto nobis eius voluptas voluptatem sapiente aliquid quam. Hic obcaecati mollitia in nam nihil.</h6>

        </div>
        <div className="viedo col-lg-5">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/nyuo9-OjNNg?si=OZqzChkOC5I4V-_V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage