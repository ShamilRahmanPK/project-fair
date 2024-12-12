import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { tokenContext } from '../contexts/TokenAuth';


const Header = ({insideDashboard}) => {

  const {authorisedUser,setAuthorisedUser} = useContext(tokenContext)

  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
    toast.error("Logout succefully")
  }

  return (
    <Navbar style={{zIndex:1}} className="shadow border rounded position-fixed w-100">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className='text-decoration-none fw-bolder'>
            <i class="fa-brands fa-docker me-1"></i>
          Project Fair
            </Link>
          </Navbar.Brand>
          {
            insideDashboard &&
            <button onClick={logout} className="btn btn-link fw-bolder">Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
          }
        </Container>
        <ToastContainer position='top-center' />
      </Navbar>
      
  )
}

export default Header