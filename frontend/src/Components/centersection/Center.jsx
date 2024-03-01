import React, { useState,useEffect } from 'react'
import "./center.css"
import { FaRegTrashCan ,FaPen } from "react-icons/fa6";
import Education from '../education/Education';
import WorkExp from '../workexperience/WorkExp';
import { FaAlignRight } from "react-icons/fa6";
import axios from 'axios';
import { useData } from '../../context/dataContext';
import Academics from '../academics/Academics';
import Achievements from '../Achievement/Achievements';
import Testimonials from '../testimonials/Testimonials';
import { useAuth } from '../../context/authContext';
import { useGetdata } from '../../context/getDataContext';

const Center = ({ rightbar,setRightbar}) => {
const {personalInfo} = useGetdata();
const {state} = useData();
console.log(personalInfo)
   
  return (
    <>
 <div className='bgclor'>
{/*  */}
 <div className={rightbar==true?"center1":"center"}>
     <div className="container">
        <div className='link'>
        {
          rightbar===true ?<div className="hamburger" > <FaAlignRight onClick={()=>setRightbar(false)}/></div>:""
        }
            <p>See your portfolio here - <a href=""> https://www.figma.com/file/gNw4hbW7BSeAmHZtx3B0Th/Kuldeep-Work?type=design&node-id=83-6&mode=design&t=7o6w6EDsn8iyndwj-4</a></p>
        </div>
        <div className="box">
            <div className="heading">
                <div><h3>Persoinal Infromation</h3></div>
                <div>
                    <button className='centerBtn'><FaPen /> Edit</button>
                    <button className='centerBtn'><FaRegTrashCan /> Delete</button>
                </div>
            </div>
            
            <div className="about ">
           
               {
              personalInfo.length === 0 ? "" : personalInfo?.results?.map((personalInfo)=>{
                  return(
                    <>
                     <div className='set'>
                <div className="profile-images">
             <div className="row">
                <div className="col-sm-6">
                    <div className='img '>
                        <h4>Logo</h4>
                        <div className="d-flex justify-content-start align-items-center
                        ">
                        <img src="images/img2.png" alt="" className='img-fluid mt-3 img1' />
                        <p className='d-flex mx-3 mt-3'><FaRegTrashCan /></p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className='img '>
                        <h4>Profile Image</h4>
                        <div className="d-flex justify-content-start align-items-center
                        ">
                        <img src="images/img3.png" alt="" className='img-fluid mt-3 img2' />
                        <p className='d-flex mx-3 mt-3'><FaRegTrashCan /></p>
                        </div>
                    </div>
                </div>
             </div>
            </div>
                <div className="row d-flex justify-content-start mt-5">
                   <div className="col-4 lowbold"><p>Name</p></div>
                   <div className="col-8 semibold">{personalInfo.name}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>Date of Birth</p></div>
                   <div className="col-8 semibold">{personalInfo.dob}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>Gender</p></div>
                   <div className="col-8 semibold">{personalInfo.gender}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>Profession</p></div>
                   <div className="col-8 semibold">{personalInfo.profession}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>About</p></div>
                   <div className="col-8 semibold">{personalInfo.description}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>Email</p></div>
                   <div className="col-8 semibold">{personalInfo.email}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>Profession Email</p></div>
                   <div className="col-8 semibold">{personalInfo.college_email}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>Contact Number</p></div>
                   <div className="col-8 semibold">{personalInfo.phone_no}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>Alternate Number</p></div>
                   <div className="col-8 semibold">{personalInfo.alter_phone}</div>
                 </div>
                 <div className="row mt-3 d-flex justify-content-start">
                   <div className="col-4 lowbold"><p>Address</p></div>
                   <div className="col-8 semibold">{personalInfo.street}, {personalInfo.city}, {personalInfo.country}</div>
                 </div>
                </div>
                    </>
                  )
                })
               }
                <div className="socia_media_section">
                  <div className="box1">
                    <p>Instant Messaging</p>
                    <button className='centerBtn' style={{color:"#3BACB6"}}>+ Add More</button>
                  </div>
                  <div className="box2">
                    <div className="row ">
                      <div className="col-8 boderbottom">
                       <div className=" boderbottom">
                       <img src="images/img4.png" alt="" />
                        <h3>WeChat</h3>
                        <a href="">www.Wechat/devendra.com</a>
                       
                       </div>
                      
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <button className='centerBtn' style={{color:"#3BACB6"}}><FaPen /></button>
                        <button className='centerBtn'><FaRegTrashCan /> </button>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-8 boderbottom">
                       <div className=" boderbottom">
                       <img src="images/img4.png" alt="" />
                        <h3>WeChat</h3>
                        <a href="">www.Wechat/devendra.com</a>
                       
                       </div>
                      
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <button className='centerBtn' style={{color:"#3BACB6"}}><FaPen /></button>
                        <button className='centerBtn'><FaRegTrashCan /> </button>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-8 boderbottom">
                       <div className=" boderbottom">
                       <img src="images/img4.png" alt="" />
                        <h3>WeChat</h3>
                        <a href="">www.Wechat/devendra.com</a>
                       
                       </div>
                      
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <button className='centerBtn' style={{color:"#3BACB6"}}><FaPen /></button>
                        <button className='centerBtn'><FaRegTrashCan /> </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="socia_media_section">
                  <div className="box1">
                    <p>Social Media Links</p>
                    <button className='centerBtn' style={{color:"#3BACB6"}}>+ Add More</button>
                  </div>
                  <div className="box2">
                    <div className="row ">
                      <div className="col-8 boderbottom">
                       <div className=" boderbottom">
                       <img src="images/facebook.png" alt="" />
                        <h3>Facebook</h3>
                        <a href="">www.Wechat/devendra.com</a>
                       
                       </div>
                      
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <button className='centerBtn' style={{color:"#3BACB6"}}><FaPen /></button>
                        <button className='centerBtn'><FaRegTrashCan /> </button>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-8 boderbottom">
                       <div className=" boderbottom">
                       <img src="images/github.png" alt="" />
                        <h3>Github</h3>
                        <a href="">www.Wechat/devendra.com</a>
                       
                       </div>
                      
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <button className='centerBtn' style={{color:"#3BACB6"}}><FaPen /></button>
                        <button className='centerBtn'><FaRegTrashCan /> </button>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-8 boderbottom">
                       <div className=" boderbottom">
                       <img src="images/bee.png" alt="" />
                        <h3>Behance</h3>
                        <a href="">www.Wechat/devendra.com</a>
                       
                       </div>
                      
                      </div>
                      <div className="col-4 d-flex justify-content-end">
                        <button className='centerBtn' style={{color:"#3BACB6"}}><FaPen /></button>
                        <button className='centerBtn'><FaRegTrashCan /> </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
               <div className="services">
                <div className="row">
                  <div className="col-md-4">
                    <p className='ptext'>Services</p>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {
                        state?.services?.map((s)=>{
                          return(
                            <div className="col-6" key={s.id}>
                        <div className="box4">
                          <div className="d-flex justify-content-between">
                            <h4>{s.title}</h4>
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
                         <button className='centerBtn'> <p style={{fontSize:"24px",color:"#3BACB6",fontWeight:"800"}}>+ Add Services</p> </button>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
            </div>
        </div>
        <Education/>
        <WorkExp/>
        <Academics/>
        <Achievements/>
        <Testimonials/>
     </div>
  
   </div>
 </div>
   
    </>
  )
}

export default Center