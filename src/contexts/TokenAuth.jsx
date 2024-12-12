import React, { createContext, useEffect, useState } from 'react'
export const tokenContext = createContext()

function TokenAuth({children}) {

    const [authorisedUser,setAuthorisedUser] = useState(false)

    useEffect(()=>{
        if (sessionStorage.getItem("token")) {
            setAuthorisedUser(true)
        } else {
            setAuthorisedUser(false)
        }
    },[authorisedUser])
  return (
    <tokenContext.Provider value={{authorisedUser,setAuthorisedUser}}>
        {children}
    </tokenContext.Provider>
  )
}

export default TokenAuth