import React from 'react'
import {useData} from "../../context/dataContext"
import { FaRegTrashCan ,FaPen } from "react-icons/fa6";

const Academics = () => {
  const {state} = useData()
 
  return (
    <div className='academics'>
    <div className="container">
    <div className="heading">
                <div><h3>Academics</h3></div>
                <div><h3>+ Add More</h3></div>
            </div>
            <div className="row">
        <div className="col-md-4 educationTitle">Projects</div>
        <div className="col-md-8">
          {
            state?.project?.map((e)=>{
              return(
             <div key={e.id}>
                  <div className="row marginRow" >
                  <div className="col-md-8">
                       <div className='edutaionBox d-flex'>
                           <div className="">              
                          <h4>{e.projectdomain}  <span style={{color:"#3BACB6",fontSize:"14px",cursor:"pointer"}} className="">{e.link}</span> </h4>
                          <p>{e.title}</p>
                          <p>{e.starttime} - {e.endtime} </p>
                          <p>Assosiate with - {e.associated_with} </p>
                          <p className=''>{e.rolesandresponsiblity}</p>
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
       <div className="services">
                <div className="row">
                  <div className="col-md-4">
                    <p className='ptext'>Skills</p>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {
                        state?.skills?.map((s)=>{
                          return(
                            <div className="col-6" key={s.id}>
                        <div className="box4">
                          <div className="d-flex justify-content-between">
                            <h4>{s.skill}</h4>
                          <div>
                          <button className='centerBtn'><FaPen /> </button>
                          <button className='centerBtn'><FaRegTrashCan /> </button>
                          </div>
                          </div>
                          <div>
                            <p style={{fontWeight:"700"}}>{s.description}</p>
                          </div>
                        </div>
                      </div>
                          )
                        })
                      }
                      <div className=''>
                         <button className='centerBtn'> <p style={{fontSize:"18px",color:"#3BACB6",fontWeight:"800"}}>+ Add Skills</p> </button>
                      </div>
                    </div>
                  </div>
                </div>
               </div>

               <div className="services">
                <div className="row">
                  <div className="col-md-4">
                    <p className='ptext'>Technical Skill</p>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {
                        state?.skills?.map((s)=>{
                          return(
                            <div className="col-6" key={s.id}>
                        <div className="box4">
                          <div className="d-flex justify-content-between">
                            <h4>{s.skill}</h4>
                          <div>
                          <button className='centerBtn'><FaPen /> </button>
                          <button className='centerBtn'><FaRegTrashCan /> </button>
                          </div>
                          </div>
                          <div>
                            <p >intermidate</p>
                          </div>
                        </div>
                      </div>
                          )
                        })
                      }
                      <div className=''>
                         <button className='centerBtn'> <p style={{fontSize:"18px",color:"#3BACB6",fontWeight:"800"}}>+ Add Tech Skill</p> </button>
                      </div>
                    </div>
                  </div>
                </div>
               </div>

               <div className="services">
                <div className="row">
                  <div className="col-md-4">
                    <p className='ptext'>Communication language</p>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {
                        state?.skills?.map((s)=>{
                          return(
                            <div className="col-12" key={s.id}>
                        <div className="box4">
                          <div className="d-flex mx-1">
                            <h4>{s.skill}</h4>
                          <div>
                          <button className='centerBtn'><FaPen /> </button>
                          <button className='centerBtn'><FaRegTrashCan /> </button>
                          </div>
                          </div>
                          <div>
                            <p >intermidate</p>
                          </div>
                        </div>
                      </div>
                          )
                        })
                      }
                      <div className=''>
                         <button className='centerBtn'> <p style={{fontSize:"18px",color:"#3BACB6",fontWeight:"800"}}>+ Add Language</p> </button>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
    </div>
    </div>
  )
}

export default Academics