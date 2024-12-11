import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";

// register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

// login post
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

// add project api
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-project`,reqBody,reqHeader)
}

// home project
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-projects`,{})
}

// user project
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-projects`,{},reqHeader)
}

// all project
export const AllProjectAPI = async (reqHeader,searchKey)=>{
    // query parameter of url ?search${searchKey}
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-projects?search=${searchKey}`,{},reqHeader)
}

// /project/675292d05148330e140f2eab/edit
export const updateProjectAPI = async (id,reqHeader,reqBody)=>{
    // query parameter of url ?search${searchKey}
    return await commonAPI("PUT",`${SERVER_BASE_URL}/project/${id}/edit`,reqBody,reqHeader)
}

// projects/:id/remove
export const deleteProjectAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_BASE_URL}/project/${id}/remove`,{},reqHeader)
}

// /user/edit -PUT
export const updateUserAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqBody,reqHeader)
}

