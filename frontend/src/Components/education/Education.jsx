import React, { useEffect, useState } from 'react'
import "./education.css"
import { FaRegTrashCan ,FaPen } from "react-icons/fa6";
import axios from 'axios';
import { useData } from '../../context/dataContext';
import AddEducation from '../modals/AddEducation';
const Education = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {state} = useData()
 
   return (
    <>
     <div className="education"  id='education'>
        <div className="container">
        <div className="heading">
        <AddEducation handleClose={handleClose} handleShow={handleShow} show={show} setShow={setShow}/>
                <div><h3>Education</h3></div>
                <div><h3 onClick={handleShow}>+ Add More</h3></div>
            </div>
       <div className="row">
        <div className="col-md-4 educationTitle">Degree</div>
        <div className="col-md-8">
          {
            state?.educations?.map((e)=>{
              return(
             <div key={e.type}>
              {
                e.type === "Graduate" && (
                  <div className="row marginRow" >
                  <div className="col-md-8">
                       <div className='edutaionBox d-flex'>
                           <div className="">
                           <p className='mt-2' style={{color:"#3BACB6"}}>{e.type}</p>
                          <h4>{e.stream} </h4>
                          <p>{e.institute}</p>
                          <p>{e.city},{e.country}</p>
                          <p>{e.startdate} - {e.enddate} (Full Time)</p>
                          <p>CGPA: 9.77/10</p>
                          <h4 className='mt-2' >Description </h4>
                          <p className='mt-1'>{e.descrip}</p>
                           </div>
                         
                       </div>
                    
                       
                      
                  </div>
                  <div className="col-md-4">
                 <div className='d-flex '>
                  <button className='centerBtn'><FaPen /> </button>
                   <button className='centerBtn'><FaRegTrashCan /> </button>
                  </div>
                 </div>
              </div>
                )
              }
             </div>
              )
            })
          }
        </div>
       </div>

       <div className="row">
        <div className="col-md-4 educationTitle">High Secondary</div>
        <div className="col-md-8">
          {
            state?.educations?.map((e)=>{
              return(
             <div  key={e.type} id={e.type}>
              {
                e.type === "high-secondary" && (
                  <div className="row marginRow" >
                  <div className="col-md-8">
                       <div className='edutaionBox d-flex'>
                           <div className="">
                           <p className='mt-2' style={{color:"#3BACB6"}}>12th</p>
                          <h4>{e.stream} </h4>
                          <p>{e.institute}</p>
                          <p>{e.city},{e.country}</p>
                          <p>{e.startdate} - {e.enddate} (Full Time)</p>
                          <p>CGPA: 9.77/10</p>
                          <h4 className='mt-2' >Description </h4>
                          <p className='mt-1'>{e.descrip}</p>
                           </div>
                         
                       </div>
                    
                       
                      
                  </div>
                  <div className="col-md-4">
                 <div className='d-flex '>
                  <button className='centerBtn'><FaPen /> </button>
                   <button className='centerBtn'><FaRegTrashCan /> </button>
                  </div>
                 </div>
              </div>
                )
              }
             </div>
              )
            })
          }
        </div>
       </div>
       <div className="row">
        <div className="col-md-4 educationTitle">Secondary</div>
        <div className="col-md-8">
          {
            state?.educations?.map((e)=>{
              return(
             <div  key={e.type} id={e.type}>
              {
                e.type === "secondary" && (
                  <div className="row marginRow" >
                  <div className="col-md-8">
                       <div className='edutaionBox d-flex'>
                           <div className="">
                           <p className='mt-2' style={{color:"#3BACB6"}}>10th</p>
                          <h4>{e.stream} </h4>
                          <p>{e.institute}</p>
                          <p>{e.city},{e.country}</p>
                          <p>{e.startdate} - {e.enddate} (Full Time)</p>
                          <p>CGPA: 9.77/10</p>
                          <h4 className='mt-2' >Description </h4>
                          <p className='mt-1'>{e.descrip}</p>
                           </div>
                         
                       </div>
                    
                       
                      
                  </div>
                  <div className="col-md-4">
                 <div className='d-flex '>
                  <button className='centerBtn'><FaPen /> </button>
                   <button className='centerBtn'><FaRegTrashCan /> </button>
                  </div>
                 </div>
              </div>
                )
              }
             </div>
              )
            })
          }
        </div>
       </div>
        <div className="row marginRow">
            <div className="col-md-4">
            <p className='ptext'>Education Gap</p>
            </div>
            <div className="col-md-6">
                 <div className='edutaionBox d-flex'>
                     <div className="">
                     <p className='mt-2' style={{color:"#3BACB6"}}>Gap</p>
                    <h4> 1 Year
 </h4>
                    <p>2018 - 2019 (Full Time)</p>
                    <h4 className='mt-2' >Reason </h4>
                    <p className='mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, possimus?</p>
                  </div>
                 </div>
                
            </div>
            <div className="col-md-2">
           <div className='d-flex '>
            <button className='centerBtn'><FaPen /> </button>
             <button className='centerBtn'><FaRegTrashCan /> </button>
            </div>
           </div>
        </div>
        </div>
     </div>
    </>
  )
}

export default Education