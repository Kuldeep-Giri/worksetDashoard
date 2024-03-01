import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'
import { FaArrowUp } from "react-icons/fa6";
import SideBar from './SideBar';
const AddEducation = ({ handleShow, handleClose, show, setShow }) => {

  return (
    <>


      <Modal show={show} onHide={handleClose} size="lg"  className="special_modal">
        <div className="d-flex">
          <SideBar/>
          <div className="Modalform">
            <div className="arrow d-flex justify-content-end">
              <img src="images/arrow.png" alt="" className="img-fluid " onClick={() => setShow(false)} />
            </div>
            <div className="h">
              <h3>Education</h3>
            </div>
            <form action="" className='forms'>
              <div className="row">
                <div className="col-md-6">
                    <div className="degree">
                        <h6>Degree</h6>
                        <label htmlFor="">University Name</label> <br/>
                    <input type="text" placeholder='University of delhi' /> <br/> 
                    <label htmlFor=""  className='mt-1'>City</label> <br/>
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select><br />
                      <label htmlFor=""  className='mt-1'>State</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Country</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Board</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Degree</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Specilization</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>CGPA/Percentage</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <div className="duration mt-2">
                      <label htmlFor="">Duration</label> <br/>
                    <input type="text" placeholder='start date' /> <br/> 
                    <input type="text" placeholder='enddate' /> <br/>
                    <label htmlFor="">Description</label> <br/>
                    <input type="text" placeholder='Description' /> <br/>  
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                <h6>High-Secondary</h6>
                        <label htmlFor="">School Name</label><br />
                    <input type="text" placeholder='abcd School' /> <br />
                    <label htmlFor=""  className='mt-1'>City</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>State</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Country</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Board</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Degree</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Specilization</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>CGPA/Percentage</label><br />
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <div className="duration">
                      <label htmlFor="">Duration</label> <br/>
                    <input type="text" placeholder='start date' /> <br/> 
                    <input type="text" placeholder='enddate' /> <br/> 
                    <label htmlFor="">Description</label> <br/>
                    <input type="text" placeholder='Description' /> <br/> 
                      </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="degree">
                  <h6>Secondary</h6>
                        <label htmlFor="">School name</label> <br/>
                    <input type="text" placeholder='School name' /> <br/> 
                    <label htmlFor=""  className='mt-1'>City</label> <br/>
                    <select>
                        <option value="1">Hyderabad</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select><br />
                      <label htmlFor=""  className='mt-1'>State</label> <br/>
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select><br />
                      <label htmlFor=""  className='mt-1'>Country</label> <br/>
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select><br />
                      <label htmlFor=""  className='mt-1'>Board</label> <br/>
                    <select>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select><br />
                      <label htmlFor="">Education Type</label> <br/>
                    <input type="text" placeholder='Full time' /> <br/> 
                    <label htmlFor=""  className='mt-1'>CGPA/Percentage</label> <br/>
                    <select>
                        <option value="1">1</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select><br />
                      <div className="duration">
                      <label htmlFor="">Duration</label> <br/>
                    <input type="text" placeholder='start date' /> <br/> 
                    <input type="text" placeholder='enddate' /> <br/> 
                    <label htmlFor="">Description</label> <br/>
                    <input type="text" placeholder='Description' /> <br/> 
                      </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="degree">
                  <h6>Career Gap</h6>
                        <label htmlFor="">Number of year</label> <br/>
                    <input type="number" placeholder='1' /> <br/> 
                    <label htmlFor=""  className='mt-1'>Type of gap</label> <br/>
                    <select>
                      <option value=""></option>
                        <option value="1">Hyderabad</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select><br />
                  
                      <div className="duration">
                      <label htmlFor="">Duration</label> <br/>
                    <input type="text" placeholder='start date' /> <br/> 
                    <input type="text" placeholder='enddate' /> <br/> 
                    <label htmlFor="">Reason</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Enter reason' rows="3"></textarea>                      
                    </div>
                  </div>

                </div>
              </div>
              <div className="d-flex mt-3 justify-content-end">
                <button className='SaveBtn'>Save and Continue</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>

    </>
  )
}

export default AddEducation