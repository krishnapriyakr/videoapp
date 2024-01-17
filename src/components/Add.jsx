import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoServerResponse}) {

  const [video, setVideo] = useState({
    id: "", caption: "", url: "", embedLink: ""
  })
    const [show, setShow] = useState(false);

  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e) => {
    const { value } = e.target
    if (value) {
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({ ...video, embedLink: link })
    }
    else {
      setVideo({ ...video, embedLink:"" })
    }
  }

  
  const handleUpload = async () => {
    const { id, caption, url, embedLink } = video
    if (!id || !caption || !url || !embedLink )
    {
      toast.warning("Please fill missing fields")
    }
    else {
      //make api call
      const response = await uploadVideo(video)
      // console.log(response);
      if (response.status >= 200 && response.status < 300) {
        //set server Response
        setUploadVideoServerResponse(response.data)
        toast.success(`${response.data.caption} Video  successfully uploaded`)

        //reset the video
        setVideo({
          id:"",caption:"",url:"",embedLink:""
        })

        //hide model
        handleClose()
      }
      else {
        // console.log(response);
        toast.error(`Can not perform the action rightnow`)
       
      }
    }
  }

  console.log(video);
  return (
      <>
          <div className='d-flex align-items-center'>
              <h5>Upload Videos</h5>
              <button onClick={handleShow} className='btn'>
                  <i class="fa-solid fa-circle-plus fa-beat-fade fs-5"></i></button>
          </div>
          
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <p>Please fill the following details</p>
                  <Form className='border border-secondary rounded p=-3'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">    
                        <Form.Control type="email" placeholder="Enter VideoId" onChange={(e)=>setVideo({...video,id:e.target.value})} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">    
                        <Form.Control type="email" placeholder="Enter VideoTitle" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail" >    
                        <Form.Control type="email" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">    
                        <Form.Control type="email" placeholder="Enter Video Link" onChange={getEmbedLink} />
                      </Form.Group>
                      
                  </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000}/>
          
      </>
  )
}

export default Add

//<iframe width="1083" height="609" src="https://www.youtube.com/embed/FxJ3zPUU6Y4" title="Lofi study 🍃 Music that makes u more inspired to study &amp; work - Chill beats ~ study / stress relief" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
// https://www.youtube.com/embed/FxJ3zPUU6Y4