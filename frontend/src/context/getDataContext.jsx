import { createContext, useContext, useState ,useEffect,useRef} from "react";
import axios from "axios";

const getDataContext = createContext()


const GetDataProvider = ({children})=>{
 
    const getToken = localStorage.getItem("auth")
    const [personalInfo,setpersonalInfo] = useState([]);
    const parse = JSON.parse(getToken)
   
   const getPersionalInfo = async()=>{
       try {
         const {data} =await axios.get("http://localhost:4000/api/persional-info",{
           headers: { Authorization:parse.token }
         })
         setpersonalInfo(data)
       } catch (error) {
         console.log(error)
       }
     }
     useEffect(() => {
     getPersionalInfo()
     }, [])
     
 return (
    <getDataContext.Provider value={{personalInfo}}>
{children}
    </getDataContext.Provider>
 )

}

const useGetdata = ()=> useContext(getDataContext)

export {useGetdata,GetDataProvider}