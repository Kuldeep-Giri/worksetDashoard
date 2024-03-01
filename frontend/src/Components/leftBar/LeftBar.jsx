import React, { useState } from 'react'
import "./leftbar.css"
import { FaAngleDown,FaAlignLeft  } from "react-icons/fa6";
import {Link} from 'react-scroll'
import { useData } from '../../context/dataContext';


const LeftBar = () => {
    const [dropdown,setDropdown] = useState(false)
    const [dropdown2,setDropdown2] = useState(false)
    const [dropdown3,setDropdown3] = useState(false)
    const [dropdown4,setDropdown4] = useState(false)
    const [menu,setMenu] = useState(false)
    
    const {state} = useData();
   
  return (
    <>
     <div className="leftbar_hamburger">
        <FaAlignLeft />
      </div>
    <div className="leftbar">
     
        <div>
          <div className="Companyname">
            <h2>Workset</h2>
          </div>
          <div className="dashboard">
            <div className='d-flex'>
        <img src="images/Group.png" alt="" className="img-fluid" />
            <h3>Dashboard</h3>
            </div>
            <ul>
                <li>persional Information</li>
               <div className='hello'>
               <li className='d-flex' >
                   <Link className='d-flex leftLink'   onClick={()=>setDropdown(!dropdown)}  to="education"  smooth={true} offset={-100} duration={100}>  Education <FaAngleDown /></Link>
                </li>
                 <div className={dropdown==false?"dropdownHide":""}>
                    <ul style={{marginTop:"0px"}}>
                    {
                      state?.educationType?.map((eduType)=>{
                        return(
                          <li key={eduType.type} style={{padding:"2px 0px",fontSize:"16px",width:"300px"}}><Link className='leftLink' to={eduType.type}  smooth={true} offset={-100} duration={100}>{eduType.type}</Link></li>
                        )
                      })
                    }
                    </ul>
                 </div>
               </div>
               <div className='hello'>
               <li className='d-flex'>
             
               <Link className='d-flex leftLink'  onClick={()=>setDropdown2(!dropdown2)}  to="workExp"  smooth={true} offset={-100} duration={100}>   Work experience  <FaAngleDown /></Link>

                </li>
                 <div className={dropdown2==false?"dropdownHide":""}>
                    <ul style={{marginTop:"0px"}}><li style={{padding:"5px 0px"}}>1</li>
                    <li style={{padding:"5px 0px"}}>1</li></ul>
                 </div>
               </div>
               <div className='hello'>
               <li className='d-flex'>
                   
                         
               <Link className='d-flex leftLink'  onClick={()=>setDropdown3(!dropdown3)} to="education"   smooth={true} offset={-100} duration={100}> Academics <FaAngleDown  /></Link>
                </li>
                 <div className={dropdown3==false?"dropdownHide":""}>
                    <ul style={{marginTop:"0px"}}><li style={{padding:"5px 0px"}}>1</li>
                    <li style={{padding:"5px 0px"}}>1</li></ul>
                 </div>
               </div>
               <div className='hello'>
               <li className='d-flex' onClick={()=>setDropdown4(!dropdown4)}>
                   
               <Link className='d-flex leftLink' onClick={()=>setDropdown4(!dropdown4)} to="education"  smooth={true} offset={-100} duration={100}>  Achievements <FaAngleDown />
                             </Link>
                </li>
                 <div className={dropdown4==false?"dropdownHide":""}>
                    <ul style={{marginTop:"0px"}}><li style={{padding:"5px 0px"}}>1</li>
                    <li style={{padding:"5px 0px"}}>1</li></ul>
                 </div>
               </div>
            </ul>
          </div>
        </div>
    </div>
    </>
  )
}

export default LeftBar