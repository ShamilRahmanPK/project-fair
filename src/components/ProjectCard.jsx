import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'



const ProjectCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://imgs.search.brave.com/y-E9HTFDpnMgEq_6qhZ66_zapUkq93mqFGYpYQMJyUY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bC1wcm9maWxlLXBp/Y3R1cmVzLW1vbmtl/eS1mYWNlLTBqeHdt/cTZicG0zaHM5Y2Iu/anBn" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
            <img src="https://imgs.search.brave.com/auKGDoqjpikYcgGakg5BUuqVyKRdhZb6_fPtRLMTpBI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYWly/d29ybGRwcm9qZWN0/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8xMi9sb2dv/LWZhaXItd29ybGQt/cHJvamVjdC13aGl0/ZS5wbmc" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Language used: <span className="text-danger">languages</span> </h6>
              <p style={{textAlign:'justify'}} > <span className='fw-bolder'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque. Tempore ipsa reiciendis quidem laudantium id esse, amet sint eaque rem culpa omnis ex iste doloremque iure impedit animi voluptatem.</span> </p>
            </div>
          </div>
          <div className="mt-2 float-start">
            <a href="https://github.com/ShamilRahmanPK/Chat-App.git" target='_blank' className="btn btn-secondary me-2"><i className="fa-brands fa-github"></i></a>
            <a href="https://chat-app-liart-beta.vercel.app/" target='_blank' className="btn btn-secondary"><i className="fa-solid fa-link"></i></a>
          </div>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default ProjectCard