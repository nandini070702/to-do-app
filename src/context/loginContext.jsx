import { createContext, useContext, useState } from "react";


const LoginContext = createContext(null)

export const LoginContextWrapper = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        user : 'neha',
        password : ''
    })

    const handleChange = (newUser) =>{
        console.log(newUser)
        setGlobalState(state => ({
            ...state,
            user : newUser
        }))
    }

    return(
        <LoginContext.Provider value={{
            ...globalState,
            handleChange
        }}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => useContext(LoginContext);

