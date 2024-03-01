import React, { useState } from 'react'
import { FaRegTrashCan ,FaPen } from "react-icons/fa6";
import { useData } from '../../context/dataContext';
import AddWorkExperience from '../modals/AddWorkExperience';
const WorkExp = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const {state} = useData();
  return (
    <>
 <div className="education">
        <div className="container">
        <div className="heading">
        <AddWorkExperience handleClose={handleClose} handleShow={handleShow} show={show} setShow={setShow}/>
                <div><h3>Work Experience</h3></div>
                <div><h3 onClick={handleShow}>+ Add More</h3></div>
            </div>
            <div className="row">
        <div className="col-md-4 educationTitle">Internship</div>
        <div className="col-md-8">
          {
            state?.interships?.map((e)=>{
              return(
             <div  key={e.id}>
              
                  <div className="row marginRow" >
                  <div className="col-md-8">
                       <div className='edutaionBox d-flex'>
                           <div className="">
                           {/* <p className='mt-2' style={{color:"#3BACB6"}}>10th</p> */}
                          <h4>{e.jobtitle}  <spna style={{color:"#3BACB6",fontSize:"14px"}} className="">{e.link}</spna> </h4>
                          <p>{e.rolesandresponsiblity}</p>
                          {/* <p>{e.city},{e.country}</p> */}
                          <p>{e.startdate} - {e.endtime} (Full Time)</p>
                          <p>Mentor : {e.mentorname}</p>
                          <h4 className='mt-2' >Description </h4>
                          <p className='mt-1'>{e.brief_desc}</p>
                           </div>                    
                       </div>
                       <div className="mt-3">
                    <img src="images/img2.png" alt="d" className='img-fluid'/>
                       <button className='centerBtn'><FaRegTrashCan /> </button>
                    </div>
                  </div>
                  <div className="col-md-4">
                 <div className='d-flex '>
                  <button className='centerBtn'><FaPen /> </button>
                   <button className='centerBtn'><FaRegTrashCan /> </button>
                  </div>
                 </div>
              </div>
             </div>
              )
            })
          }
        </div>
       </div>
        <div className="row mt-5">
            <div className="col-md-4">
            <p className='ptext'></p>
            </div>
            <div className="col-md-6">
            <div className='edutaionBox d-flex '>
                     <div className="">
                    <h4> SCADA Software <spna style={{color:"#3BACB6",fontSize:"14px"}} className="">Link</spna></h4>
                    <p>College Profiling Team, Virtual
             Edusha Eduversity, Education sector</p>
                    <p>Aug 2021 - Oct 2021 (Full Time)</p>
                    <p>Mentor - Abhishek</p>
                    <h4 className='mt-2' >Description </h4>
                    <p className='mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, possimus?</p>
                    <div className="mt-3">
                    <img src="images/img2.png" alt="d" className='img-fluid'/>
                       <button className='centerBtn'><FaRegTrashCan /> </button>
                    </div>
                     </div>
                 </div>
            </div>
            <div className="col-md-2">
            <div className='d-flex'>
            <button className='centerBtn'><FaPen /> </button>
             <button className='centerBtn'><FaRegTrashCan /> </button>
            </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-4">
            <p className='ptext'>Job</p>
            </div>
            <div className="col-md-6">
                 <div className='edutaionBox d-flex'>
                     <div className="">
                    <h4> UI-UX Designer  <spna style={{color:"#3BACB6",fontSize:"14px"}} className="">Link</spna></h4>
                    <p>College Profiling Team, Virtual
             Edusha Eduversity, Education sector</p>
                    <p>Aug 2021 - Oct 2021 (Full Time)</p>
                    <p>Mentor - Abhishek</p>
                    <h4 className='mt-2' >Description </h4>
                    <p className='mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, possimus?</p>
                   
                     </div>
                 </div>
                 
            </div>
            <div className="col-md-2">
            <div className='d-flex'>
            <button className='centerBtn'><FaPen /> </button>
             <button className='centerBtn'><FaRegTrashCan /> </button>
            </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4">
            <p className='ptext'>Freelancing</p>
            </div>
            <div className="col-md-6">
                 <div className='edutaionBox d-flex'>
                     <div className="">
                    <h4> Android App  <spna style={{color:"#3BACB6",fontSize:"14px"}} className="">Link</spna></h4>
                    <p>College Profiling Team, Virtual
             Edusha Eduversity, Education sector</p>
                    <p>Aug 2021 - Oct 2021 (Full Time)</p>
                    <p>Mentor - Abhishek</p>
                    <h4 className='mt-2' >Description </h4>
                    <p className='mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, possimus?</p>
                    <div className="mt-3">
                       <img src="images/img2.png" alt="d" className='img-fluid'/>
                       <button className='centerBtn'><FaRegTrashCan /> </button>
                    </div>
                     </div>
                 </div>
                 
            </div>
            <div className="col-md-2">
            <div className='d-flex'>
            <button className='centerBtn'><FaPen /> </button>
             <button className='centerBtn'><FaRegTrashCan /> </button>
            </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-4">
            <p className='ptext'>Volletring Experience</p>
            </div>
            <div className="col-md-6">
                 <div className='edutaionBox d-flex'>
                     <div className="">
                    <h4> SIMMI Foundation  <spna style={{color:"#3BACB6",fontSize:"14px"}} className="">Link</spna></h4>
                    <p>College Profiling Team, Virtual
             Edusha Eduversity, Education sector</p>
                    <p>Aug 2021 - Oct 2021 (Full Time)</p>
                    <p>Mentor - Abhishek</p>
                    <h4 className='mt-2' >Description </h4>
                    <p className='mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, possimus?</p>
                    <div className="mt-3">
                       <img src="images/img2.png" alt="d" className='img-fluid'/>
                       <button className='centerBtn'><FaRegTrashCan /> </button>
                    </div>
                     </div>
                 </div>
                 
            </div>
            <div className="col-md-2">
            <div className='d-flex'>
            <button className='centerBtn'><FaPen /> </button>
             <button className='centerBtn'><FaRegTrashCan /> </button>
            </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4">
            <p className='ptext'>Career Gap</p>
            </div>
            <div className="col-md-6">
                 <div className='edutaionBox d-flex'>
                     <div className="">
                    <h4> 1 Year</h4>
                    <p>2018 - 2019 (Full Time)</p>
                    <p>Mentor - Abhishek</p>
                    <h4 className='mt-2' >Reason </h4>
                    <p className='mt-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, possimus?</p>
                     </div>
                   
                 </div>
                 
            </div>
            <div className="col-md-2">
            <div className='d-flex'>
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

export default WorkExp