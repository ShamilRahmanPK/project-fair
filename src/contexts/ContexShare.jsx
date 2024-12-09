import React, { createContext, useState } from 'react'
export const addProjectContext = createContext()

const ContexShare = ({children}) => {
    const [addProjectResponse,setAddProjectResponse] = useState("")
  return (
    <>
    <addProjectContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
        {children}
    </addProjectContext.Provider>
    </>
  )
}

export default ContexShare