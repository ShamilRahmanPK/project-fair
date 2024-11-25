import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import uploadImg from '../assets/upload.png'

const Profile = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className="d-flex justify-content-evenly">
        <h3 className="text-warning">Profile</h3>
        <button onClick={()=>setOpen(!open)} className="btn text-warning"><i className="fa-solid fa-chevron-down"></i></button>
    </div>
    
    <Fade in={open}>
        <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded' id="example-fade-text">
            {/* upload pic */}
            <label className="text-center">
                <input type="file" style={{display:'none'}} />
                <img src={uploadImg} height={'200px'} alt="" className="rounded-circle" />
            </label>
          <div className="mb-2 w-100">
            <input type="text" placeholder='User GITHUB Link' className="form-control" />
          </div>
          <div className="mb-2 w-100">
            <input type="text" placeholder='User LINKEDIN Link' className="form-control" />
          </div>
          <div className="d-grid w-100">
            <button className="btn btn-warning">Update</button>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Profile