import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='fixed'><MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
    {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='facebook-f' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='twitter' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='google' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='instagram' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='linkedin' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='github' />
        </a>
      </div>
    </section> */} <br />

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='secondary' icon='video' className='me-3' />
              Media Player
            </h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non sint, cupiditate explicabo ullam quos consectetur nesciunt, ratione delectus illum error. Neque quaerat voluptatum fugit recusandae sint quas nulla in.
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Landing page
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Home Page
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                watch Hisory
              </a>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                {/* <Link style={{textDecoration:'none'}}> React</Link> */}
              <a href='#!' className='text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                React Bootstrap
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Bootswatch
              </a>
            </p>
            
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
            <p>
              <MDBIcon color='secondary' icon='home' className='me-2' />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon color='secondary' icon='envelope' className='me-3' />
              info@example.com
            </p>
            <p>
              <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Media player.Build with react
      </a>
    </div>
  </MDBFooter></div>
  )
}

export default Footer