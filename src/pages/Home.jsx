import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImg from '../assets/bgImg.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectAPI } from '../services/allAPI'


const Home = () => {
  const navigate = useNavigate()
  const [isLogin,setIsLogin] = useState(false)
  const [homeProjects,setHomeProjects]= useState([])

  console.log(homeProjects);
  

  useEffect(()=>{
    getHomeProjects()
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  },[])


  const getHomeProjects = async ()=>{
    try {
      const result = await homeProjectAPI()
      console.log(result);
      if (result.status==200) {
        setHomeProjects(result.data)
      }
    } catch (err) {
      console.log(err);
      
    }
  }

  const handleNavigate = ()=>{
    // user is logined
    if (sessionStorage.getItem('token')) {
      // autherised user
      navigate('/projects')
    }else{
      // not an authorised user
      alert("Please login to get full aceess to our project collection")
    }
  }


  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center rounded shadow w-100'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i>Project Fair </h1>
            <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
            {isLogin ? 
            <Link to={'/dashboard'} className="btn btn-warning">MANAGE YOUR PROJECTS</Link>
            :
            <Link to={'/login'} className="btn btn-warning">STARTS TO EXPLORE</Link>
          }
          </div>
          <div className="col-lg-6">
            <img src={landingImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    {/* explore our project */}
    <div className='my-5 text-center'>
      <h1 className="mb-5">Explore Our Projects</h1>
      <marquee>
        <div className="d-flex">
          {
            homeProjects?.map(project=>(
              <div className="me-5">
              <ProjectCard displayData={project}/>
            </div>
            ))
          }
        </div>
      </marquee>
      <button onClick={handleNavigate} className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS</button>
    </div>
    {/* our testimonial */}
    <div className="d-flex justify-content-center align-items-center my-5 flex-column">
      <h1>Our Testimonial</h1>
      <div className="d-flex justify-content-evenly align-item-center mt-3 w-100">
        {/* card */}
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" />
          <div className="d-flex justify-content-center my-2">
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
            <i className="fa-solid fa-star text-warning"></i>
          </div>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
      
      </div>
    </div>
    </>
  )
}

export default Home