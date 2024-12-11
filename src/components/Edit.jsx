import React, { useState,useEffect, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import SERVER_BASE_URL from "../services/serverUrl";
import { editProjectContext } from "../contexts/ContexShare";
import { updateProjectAPI } from "../services/allAPI";

const Edit = ({projects}) => {

    const [show, setShow] = useState(false);
    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectContext)
    const [projectDetails, setProjectDetails] = useState({
      id:projects?._id,
      title: projects?.title,
      languages: projects?.languages,
      overview: projects?.overview,
      github: projects?.github,
      website: projects?.website,
      projectImage: "",
    });
  
    const [uploadFileStatus, setUploadFileStatus] = useState(false);
  
    const [preview, setPreview] = useState("");
  
    console.log(projectDetails);

    useEffect(() => {
      if (
        projectDetails.projectImage.type == "image/png" ||
        projectDetails.projectImage.type == "image/jpg" ||
        projectDetails.projectImage.type == "image/jpeg"
      ) {
        setUploadFileStatus(true);
        setPreview(URL.createObjectURL(projectDetails.projectImage))
      } else {
        // invalid image file
        setUploadFileStatus(false);
        setProjectDetails({ ...projectDetails, projectImage: "" });
      }
    }, [projectDetails.projectImage]);

    const handleClose = () => {
      setShow(false)
      setProjectDetails({
        id:projects?._id,
      title: projects?.title,
      languages: projects?.languages,
      overview: projects?.overview,
      github: projects?.github,
      website: projects?.website,
      projectImage: "",
      })
    };
    const handleShow = () => {
      setShow(true);
      setProjectDetails({
        id:projects?._id,
      title: projects?.title,
      languages: projects?.languages,
      overview: projects?.overview,
      github: projects?.github,
      website: projects?.website,
      projectImage: "",
      })
    }

    const handleUpdateProject = async ()=>{
      const {id,title,languages,overview,github,website,projectImage} = projectDetails 
      if (title && languages && overview && github && website && projectDetails) {
        // api call
        const reqBody = new FormData()
        reqBody.append("title",title)
        reqBody.append("languages",languages)
        reqBody.append("overview",overview)
        reqBody.append("github",github)
        reqBody.append("website",website)
        // check image is there or not
        preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",projects?.projectImage)
  
        const token = sessionStorage.getItem("token")
        if (token) {
          const reqHeader = {
            "Content-Type" : "multipart/form-data",
            "Authorization" : `Bearer ${token}`
          }
          // Make api call
          try {
            const result = await updateProjectAPI(id,reqHeader,reqBody)
            if (result.status==200) {
              alert("Project update succesfully!!")
              handleClose()
              // share result with view using context
              setEditProjectResponse(result)
            }
          } catch (err) {
            console.log(err);
          }
        }
      } else {
        alert("Please fill the form completely")
      }
    }

    return (
      <>
        <button onClick={handleShow} className="btn">
          <i className="fa-solid fa-edit"></i>
        </button>
        <Modal
          size="lg"
          centered
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row aign-items-center">
            <div className="col-lg-4">
              <label>
                <input
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      projectImage: e.target.files[0],
                    })
                  }
                  type="file"
                  name=""
                  id=""
                  style={{ display: "none" }}
                />
                <img
                  className="img-fluid"
                  src={preview ? preview : `${SERVER_BASE_URL}/uploads/${projects?.projectImage}`}
                  alt=""
                />
              </label>
              {!uploadFileStatus && (
                <div className="text-warning fw-bolder">
                  *Upload Only the following file type (JPEG,JPG,PNG)
                </div>
              )}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input
                  value={projectDetails.title}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Title"
                />
              </div>
              <div className="mb-2">
                <input
                  value={projectDetails.languages}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      languages: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Language"
                />
              </div>
              <div className="mb-2">
                <input
                  value={projectDetails.overview}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      overview: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Overview"
                />
              </div>
              <div className="mb-2">
                <input
                  value={projectDetails.github}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project GITHUB link"
                />
              </div>
              <div className="mb-2">
                <input
                  value={projectDetails.website}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Website link"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpdateProject} variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Edit