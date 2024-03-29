import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../services/allAPI'


function View({ uploadVideoServerResponse }) {
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  const [allVideos,setAllVideos]=useState([])

  const getUploadedVideos = async () => {
    //make a api call
    const {data} = await getAllVideo()
    setAllVideos(data);
  }
  useEffect(() => {
    getUploadedVideos()
    setDeleteVideoStatus(false)
  }, [uploadVideoServerResponse,deleteVideoStatus])
  
  console.log(allVideos);
  
  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos.map(video => (
              <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard  displayData={video} setDeleteVideoStatus={setDeleteVideoStatus} />
          </Col>
            ))
          : <p className='fs-5 fw-5 text-danger'>Nothing to Display</p>

        }
    </Row>
    </>
  )
}

export default View