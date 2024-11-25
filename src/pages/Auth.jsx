import React from 'react'
import authImg from '../assets/login.png'
import { Form } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';


const Auth = ({insideRegister}) => {
  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={authImg} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h1 className="my-2"><i className="fa-brands fa-docker"></i>Project Fair</h1>
              <h5>Sign {insideRegister?'Up':'In'} to your Account</h5>
              <Form>
            {
              insideRegister &&
              <FloatingLabel
              controlId="floatingInputUserName"
              label="Username"
              className="mb-3">
              <Form.Control type="Username" placeholder="Username" />
            </FloatingLabel>
            }
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3">
              <Form.Control type="email" placeholder="Email Adress" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            {
              insideRegister ?
              <div className="mt-3">
                <button className="btn btn-primary mb-2">Register</button>
                <p>Existing User ? Please Click here to <Link to={'/login'}>Login</Link></p>
              </div>
              :
              <div className="mt-3">
                <button className="btn btn-primary mb-2">Login</button>
                <p>New User ? Please Click here to <Link to={'/register'}>Register</Link></p>
              </div>
            }
            </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth