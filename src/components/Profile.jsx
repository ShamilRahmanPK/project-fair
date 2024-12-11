import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import uploadImg from '../assets/upload.png'
import SERVER_BASE_URL from '../services/serverUrl';

const Profile = () => {

    const [open, setOpen] = useState(false);
    const [preview,setPreview] = useState("")
    const [existingProfilePic,setExistingProfilePic] = useState("")
    const [userDetails,setUserDetails] = useState({
      username:"",email:"",password:"",github:"",linkdin:"",profilePic:""
    })
    console.log(userDetails);
    // get existing user datails from session and store it to useDetails state
    useEffect(()=>{
      if (sessionStorage.getItem("user")) {
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({
          ...userDetails,username:user.username,email:user.email,password:user.password,github:user.github,linkdin:user.linkdin
        })
        setExistingProfilePic(user.profilePic)
      }
    },[open])

    // generate url for  uploaded image
    useEffect(()=>{
      if (userDetails.profilePic) {
        setPreview(URL.createObjectURL(userDetails.profilePic))
      } else {
        setPreview("")
      }
    },[userDetails.profilePic])

    const handeUserUpdate = ()=>{
      // get all user details
      const {username,email,password,github,linkdin,profilePic} = userDetails
      // if text feilds are full
      if (github && linkdin) {
        // reqBody
        const reqBody = new FormData()
        reqBody.append("username",username)
        reqBody.append("email",email)
        reqBody.append("password",password)
        reqBody.append("github",github)
        reqBody.append("linkdin",linkdin)
        preview ? reqBody.append("profilePic",profilePic) : reqBody.append("profilePic",existingProfilePic)
        // reqheader
        const token = sessionStorage.getItem("token")
        if (token) {
          const reqHeader = {
            "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
          }
          // make api call
        }
      } else {
        alert("PLease fill the form completely")
        
      }
    }

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
                <input onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} type="file" style={{display:'none'}} />
                {
                  existingProfilePic=="" ?
                  <img src={preview?preview:uploadImg} height={'200px'} alt="" className="rounded-circle" />
                  :
                  <img src={preview?preview:`${SERVER_BASE_URL}/uploads/${existingProfilePic}`} height={'200px'} alt="" className="rounded-circle" />
                }
            </label>
          <div className="mb-2 w-100">
            <input type="text" value={userDetails?.github} onChange={e=>setUserDetails({...userDetails,github:e.target.value})} placeholder='User GITHUB Link' className="form-control" />
          </div>
          <div className="mb-2 w-100">
            <input type="text" value={userDetails?.linkdin} onChange={e=>setUserDetails({...userDetails,linkdin:e.target.value})} placeholder='User LINKEDIN Link' className="form-control" />
          </div>
          <div className="d-grid w-100">
            <button onClick={handeUserUpdate} className="btn btn-warning">Update</button>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Profile