import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { AllProjectAPI } from '../services/allAPI'

const Projects = () => {
  const [searchKey,setSearchKey] = useState('')
  const [allProjects,setAllProjects] = useState([])

  console.log(searchKey);
  

  console.log(allProjects);
    
  useEffect(()=>{
    getAllProjects()
  },[searchKey])

  const getAllProjects = async ()=>{
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Authorization" : `Bearer ${token}`

      }
      try {
        const result = await AllProjectAPI(reqHeader,searchKey)
        console.log(result);
        if (result.status==200) {
          setAllProjects(result.data)
        }
        
      } catch (err) {
        console.log(err);
        
      }
    }
  }

  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center py-5">
        <h1>All Projects</h1>
        <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search project by language' className="from-control w-25" />
      </div>
      <Row>
        {
          allProjects.length>0?
          allProjects?.map(project=>(
            <Col className="mb-3" sm={12} md={6} lg={4}>
            <ProjectCard displayData={project}/>
          </Col>
          ))
          :
          <div className='fw-bolder text-danger'>Project Not Found</div>
        }
      </Row>
    </div>
    </>
  )
}

export default Projects