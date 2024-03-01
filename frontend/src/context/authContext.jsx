import { createContext, useContext, useState ,useEffect} from "react";


const authContext = createContext()


const AuthProvider = ({children})=>{
 const [auth,setAuth] = useState({
    users:null,
    token:""
 })
   useEffect(() => {
    const data = localStorage.getItem("auth")
    if(data){
        const parseData = JSON.parse(data)
        setAuth({
            users:parseData.users,
            token:parseData.token
        })
    }
  }, [])
 

 return (
    <authContext.Provider value={[auth,setAuth]}>
{children}
    </authContext.Provider>
 )

}

const useAuth = ()=> useContext(authContext)

export {useAuth,AuthProvider}