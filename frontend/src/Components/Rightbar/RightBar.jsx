import React, { useState } from 'react'
import "./right.css"
import { FaArrowRight,FaBell,FaGear } from "react-icons/fa6";
import AddPersionalDetails from '../modals/AddPersionalDetails';
import { useGetdata } from '../../context/getDataContext';
const RightBar = ({ rightbar,setRightbar}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {personalInfo} = useGetdata();
  console.log(personalInfo)

  var object =  personalInfo.length === 0?"" : personalInfo.results.reduce(
    (obj, item) => Object.assign(obj, { ["name"]: item.name }), {});
  
  return (
    <>
 
    <div className={rightbar ===false?"rightbar":"rightbarHide"}>
      <div className="arrow " >
      <FaArrowRight onClick={()=>setRightbar(!rightbar)} />
      </div>
    <AddPersionalDetails handleClose={handleClose} handleShow={handleShow} show={show} setShow={setShow}/>
   
      <div className="div1">
        <div>
            <h4>{object.name}</h4>
            <p>Good,Morning</p>
       </div>
       <div className="icons ">
        <button className=''><FaBell  className='icon'/></button>
        <button><FaGear  className='icon' /></button>
        
       </div>
        <div></div>
      </div>
      <div className="div2">
        {
          personalInfo.length===0 ?"" :personalInfo.results.map((p)=>{
            return(
              <>
              <div>
        <div className="img">
            <img src="images/img1.png" alt="" className='img-fluid' />
        </div>
        <div className="text">
           <h4>{p.name}</h4>
           <p>{p.profesion}</p>
           <p className='text-center'>{p.city}</p>
        </div>
        </div>
              </>
            )
          })
        }
      </div>
      <div className="div3">
        <div className='d-flex flex-column'>
            <button className='' onClick={handleShow}>Edit your profile</button>
            <button className='mt-2'>Create your portfolio now</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default RightBar