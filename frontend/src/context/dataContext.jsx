import axios from "axios";
import { createContext,useState,useEffect,useContext, useReducer } from "react";
import { dataReducer } from "../reducer/data";


const AppContext = createContext()


const DataProvider = ({children})=>{
   const initialState = {
    educations:[],
    educationType:[],
    interships:[],
    services:[],
    project:[],
    skills:[],
    testscore:[],
    publications:[],
    testimonials:[],
    loading:false,
    error:null
   }

  const [state,dispatch] = useReducer(dataReducer,initialState)
 

  

const recordId = "Edu001";

    const getEducations = async()=>{
        try {
          dispatch({type:"FETCH_EDUCATION_REQ"})
           const res = await axios.get(`http://localhost:4000/api/education/degree/content/${recordId}`)
           const educations = await res.data;
           dispatch({ type: "FETCH_EDUCATION_SUCCESS", payload: educations });
          
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_EDUCATION_FAILURE", payload: 'Error fetching EDUCATION' });
        }
      }
      
      useEffect(() => {
        getEducations()
      }, [])

      const getEducationTypes = async()=>{
        try {
          dispatch({type:"FETCH_EDUCATION_TYPE_REQ"})
           const res = await axios.get(`http://localhost:4000/api/education/type/${recordId}`)
           const educationType = await res.data;
           dispatch({ type: "FETCH_EDUCATION_TYPE_SUCCESS", payload: educationType });
          
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_EDUCATION_TYPE_FAILURE", payload: 'Error fetching education type' });
        }
      }
      
      useEffect(() => {
        getEducationTypes()
      }, [])

      const getInternship = async()=>{
        try {
          dispatch({type:"FETCH_INTERNS_REQ"})
           const res = await axios.get(`http://localhost:4000/api/work-experience/internship/${recordId}`)
           const interships = await res.data;
           dispatch({ type: "FETCH_INTERNS_SUCCESS", payload: interships });
          
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_INTERNS_FAILURE", payload: 'Error fetching internship'});
        }
      }
      useEffect(() => {
        getInternship()
      }, [])

      const getServices = async()=>{
        try {
          dispatch({type:"FETCH_SERVICES_REQ"})
          const res = await axios.get(`http://localhost:4000/api/services/${recordId}`)
          const services = await res.data;
          dispatch({ type: "FETCH_SERVICES_SUCCESS", payload: services });
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_SERVICES_FAILURE", payload: 'Error fetching services'});
        }
      }
      useEffect(() => {
        getServices()
      }, []);

      const getProject = async()=>{
        try {
          dispatch({type:"FETCH_PROJECT_REQ"})
          const res = await axios.get(`http://localhost:4000/api/academics/projects/${recordId}`)
          const project = await res.data;
          dispatch({ type: "FETCH_PROJECT_SUCCESS", payload: project });
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_PROJECT_FAILURE", payload: 'Error fetching PROJECT'});
        }
      }
      useEffect(() => {
        getProject()
      }, [])

      const getSkill = async()=>{
        try {
          dispatch({type:"FETCH_SKILL_REQ"})
          const res = await axios.get(`http://localhost:4000/api/academics/skill/${recordId}`)
          const skills = await res.data;
          dispatch({ type: "FETCH_SKILL_SUCCESS", payload: skills });
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_SKILL_FAILURE", payload: 'Error fetching skill'});
        }
      }
      useEffect(() => {
        getSkill()
      }, [])
      const TestScore = async()=>{
        try {
          dispatch({type:"FETCH_TESTSCORE_REQ"})
          const res = await axios.get(`http://localhost:4000/api/achievement/testscore/${recordId}`)
          const testscore = await res.data;
          dispatch({ type: "FETCH_TESTSCORE_SUCCESS", payload: testscore });
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_TESTSCORE_FAILURE", payload: 'Error fetching TESTSCORE'});
        }
      }
      useEffect(() => {
        TestScore()
      }, [])


      const getPublication = async()=>{
        try {
          dispatch({type:"FETCH_PUBLICATION_REQ"})
          const res = await axios.get(`http://localhost:4000/api/achievement/publication/${recordId}`)
          const publications = await res.data;
          dispatch({ type: "FETCH_PUBLICATION_SUCCESS", payload: publications });
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_PUBLICATION_FAILURE", payload: 'Error fetching PUBLICATION'});
        }
      }
      useEffect(() => {
        getPublication()
      }, [])

      const getTestimonials = async()=>{
        try {
          dispatch({type:"FETCH_TESTIMONIALS_REQ"})
          const res = await axios.get(`http://localhost:4000/api/testimonials/${recordId}`)
          const testimonials = await res.data;
          dispatch({ type: "FETCH_TESTIMONIALS_SUCCESS", payload: testimonials });
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_TESTIMONIALS_FAILURE", payload: 'Error fetching TESTIMONIALS'});
        }
      }
      useEffect(() => {
        getTestimonials()
      }, [])
    return(
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

const useData = ()=> useContext(AppContext)


export {DataProvider,useData}