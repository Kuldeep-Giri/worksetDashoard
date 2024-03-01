import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './modal.css'
import SideBar from './SideBar';
import { FaArrowUp } from "react-icons/fa6";
const AddWorkExperience = ({ handleShow, handleClose, show, setShow }) => {

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
              <h3>Work Experience</h3>
            </div>
            <form action="" className='forms'>
              <div className="row">
                <div className="col-md-6">
                    <div className="degree">
                        <h6>Internship</h6>
                       <div>
                       <label htmlFor="">Company Name</label> <br/>
                    <input type="text" placeholder='Abcd technology' /> <br/> 
                    <label htmlFor=""  className='mt-1'>Location</label> <br/>
                   <div className='check'>
                   <input type="checkbox" id="scales" name="scales" checked />
                   <label for="scales">WFH</label>
                   </div>
                    <select className='mt-1'>
                        <option value="1">City</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                      <select className='mt-1'>
                        <option value="1">State</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select >
                      <select className='mt-1'>
                        <option value="1">Country</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                       </div>
                      <label htmlFor=""  className='mt-1'>Company Sector</label><br />
                    <select>
                        <option value="1">Education</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Job Title</label><br />
                    <select>
                        <option value="1">Research</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Job Function</label><br />
                    <select>
                    <option value="1"></option>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Internship Type</label><br />
                    <select>
                    <option value="1"></option>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor="">Brief Description</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Enter Brief Description' rows="3"></textarea>
                    <br/>
                      <label htmlFor="">Roles And Responsbility</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Roles And Responsbility' rows="3"></textarea>
                      <div className="duration mt-2">
                      <label htmlFor="">Duration</label> <br/>
                    <input type="text" placeholder='start date' /> <br/> 
                    <input type="text" placeholder='enddate' /> <br/>
                    <label htmlFor="">Link</label> <br/>
                    <input type="text" placeholder='link.com' /> <br/>  
                      </div> <br />
                      <label htmlFor="">Stipend</label> <br/>
                    <input type="text" placeholder='1000' /> <br/> 
                    <label htmlFor="">Mentor</label> <br/>
                    <input type="text" placeholder='Abhishek' /> <br/>
                    <div className="head">
                      <h4>Logo</h4>
                      <p>Max size 200px and file type jpg/png</p>
                    </div>
                    <div className="file-upload">
                      <div className="image-upload-wrap">
                        <input className="file-upload-input" type="file"  accept="image/*" />
                        <div className="drag-text">
                          <FaArrowUp className='imgIcon' />
                          <p>Drag and drop here</p>
                          <button className='uploadBtn'>Upload</button>
                        </div>
                      </div>
                      <div className="file-upload-content">
                        <img className="file-upload-image" src="#" alt="your image" />
                        <div className="image-title-wrap">
                          <button type="button" onclick="removeUpload()" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="degree">
                        <h6>Job</h6>
                       <div>
                       <label htmlFor="">Company Name</label> <br/>
                    <input type="text" placeholder='Abcd technology' /> <br/> 
                    <label htmlFor=""  className='mt-1'>Location</label> <br/>
                   <div className='check'>
                   <input type="checkbox" id="scales" name="scales" checked />
                   <label for="scales">WFH</label>
                   </div>
                    <select className='mt-1'>
                        <option value="1">City</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                      <select className='mt-1'>
                        <option value="1">State</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select >
                      <select className='mt-1'>
                        <option value="1">Country</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                       </div>
                      <label htmlFor=""  className='mt-1'>Company Sector</label><br />
                    <select>
                        <option value="1">Education</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Job Title</label><br />
                    <select>
                        <option value="1">Research</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Job Function</label><br />
                    <select>
                    <option value="1"></option>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Job Type</label><br />
                    <select>
                    <option value="1"></option>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor="">Brief Description</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Enter Brief Description' rows="3"></textarea>
                    <br/>
                      <label htmlFor="">Roles And Responsbility</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Roles And Responsbility' rows="3"></textarea>
                      <div className="duration mt-2">
                      <label htmlFor="">Duration</label> <br/>
                    <input type="text" placeholder='start date' /> <br/> 
                    <input type="text" placeholder='enddate' /> <br/>
                    <label htmlFor="">Link</label> <br/>
                    <input type="text" placeholder='link.com' /> <br/>  
                      </div> <br />
                      <label htmlFor="">Salary</label> <br/>
                    <input type="text" placeholder='1000' /> <br/> 
                    <label htmlFor="">Mentor</label> <br/>
                    <input type="text" placeholder='Abhishek' /> <br/>
                    <div className="head">
                      <h4>Logo</h4>
                      <p>Max size 200px and file type jpg/png</p>
                    </div>
                    <div className="file-upload">
                      <div className="image-upload-wrap">
                        <input className="file-upload-input" type="file"  accept="image/*" />
                        <div className="drag-text">
                          <FaArrowUp className='imgIcon' />
                          <p>Drag and drop here</p>
                          <button className='uploadBtn'>Upload</button>
                        </div>
                      </div>
                      <div className="file-upload-content">
                        <img className="file-upload-image" src="#" alt="your image" />
                        <div className="image-title-wrap">
                          <button type="button" onclick="removeUpload()" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                        </div>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6">
                <div className="degree">
                        <h6>Freelancing</h6>
                       <div>
                       <div className="head">
                      <h4>Work Image</h4>
                      <p>Max size 200px and file type jpg/png</p>
                    </div>
                    <div className="file-upload">
                      <div className="image-upload-wrap">
                        <input className="file-upload-input" type="file"  accept="image/*" />
                        <div className="drag-text">
                          <FaArrowUp className='imgIcon' />
                          <p>Drag and drop here</p>
                          <button className='uploadBtn'>Upload</button>
                        </div>
                      </div>
                      <div className="file-upload-content">
                        <img className="file-upload-image" src="#" alt="your image" />
                        <div className="image-title-wrap">
                          <button type="button" onclick="removeUpload()" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                        </div>
                      </div>
                    </div>
                       <label htmlFor="">Company Name</label> <br/>
                    <input type="text" placeholder='Abcd technology' /> <br/> 
                    <label htmlFor=""  className='mt-1'>Location</label> <br/>
                   <div className='check'>
                   <input type="checkbox" id="scales" name="scales" checked />
                   <label for="scales">WFH</label>
                   </div>
                    <select className='mt-1'>
                        <option value="1">City</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                      <select className='mt-1'>
                        <option value="1">State</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select >
                      <select className='mt-1'>
                        <option value="1">Country</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                       </div>
                      <label htmlFor=""  className='mt-1'>Company Sector</label><br />
                    <select>
                        <option value="1">Education</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Job Title</label><br />
                    <select>
                        <option value="1">Research</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      
                      <label htmlFor=""  className='mt-1'>Job Function</label><br />
                    <select>
                    <option value="1">Full</option>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor="">Brief Description</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Enter Brief Description' rows="3"></textarea>
                    <br/>
                      <label htmlFor="">Roles And Responsbility</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Roles And Responsbility' rows="3"></textarea>
                      <br />
                    <label htmlFor=""  className='mt-1'>Project Type</label><br />
                    <select>
                    <option value="1">Full Time</option>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <div className="duration mt-2">
                      <label htmlFor="">Duration</label> <br/>
                    <input type="text" placeholder='start date' /> <br/> 
                    <input type="text" placeholder='enddate' /> <br/>
                    <label htmlFor="">Link</label> <br/>
                    <input type="text" placeholder='link.com' /> <br/>  
                      </div> <br />
                      
                    <label htmlFor="">Client Name</label> <br/>
                    <input type="text" placeholder='' /> <br/>
                    
                    
                    </div>
                </div>
                <div className="col-md-6">
                <div className="degree">
                        <h6>Vollentering Experence</h6>
                       <div>
                 
                       <label htmlFor="">Company Name</label> <br/>
                    <input type="text" placeholder='Abcd technology' /> <br/> 
                    <label htmlFor=""  className='mt-1'>Location</label> <br/>
                   <div className='check'>
                   <input type="checkbox" id="scales" name="scales" checked />
                   <label for="scales">WFH</label>
                   </div>
                    <select className='mt-1'>
                        <option value="1">City</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                      <select className='mt-1'>
                        <option value="1">State</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select >
                      <select className='mt-1'>
                        <option value="1">Country</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                       </div>
                      <label htmlFor=""  className='mt-1'>Company Sector</label><br />
                    <select>
                        <option value="1">Education</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor=""  className='mt-1'>Job Title</label><br />
                    <select>
                        <option value="1">Research</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      
                      <label htmlFor=""  className='mt-1'>Job Function</label><br />
                    <select>
                    <option value="1">Full</option>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <label htmlFor="">Brief Description</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Enter Brief Description' rows="3"></textarea>
                    <br/>
                      <label htmlFor="">Roles And Responsbility</label> <br/>
                    <textarea  class="form-control mt-1 textareas" placeholder='Roles And Responsbility' rows="3"></textarea>
                      <br />
                    <label htmlFor=""  className='mt-1'>Project Type</label><br />
                    <select>
                    <option value="1">Full Time</option>
                        <option value="1">lucknow</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select> <br/>
                      <div className="duration mt-2">
                      <label htmlFor="">Duration</label> <br/>
                    <input type="text" placeholder='start date' /> <br/> 
                    <input type="text" placeholder='enddate' /> <br/>
                    <label htmlFor="">Link</label> <br/>
                    <input type="text" placeholder='link.com' /> <br/>  
                      </div> <br />
                      
                    <label htmlFor="">Client Name</label> <br/>
                    <input type="text" placeholder='' /> <br/>
                    <div className="head mt-2">
                      <h4>Work Image</h4>
                      <p>Max size 200px and file type jpg/png</p>
                    </div>
                    <div className="file-upload">
                      <div className="image-upload-wrap">
                        <input className="file-upload-input" type="file"  accept="image/*" />
                        <div className="drag-text">
                          <FaArrowUp className='imgIcon' />
                          <p>Drag and drop here</p>
                          <button className='uploadBtn'>Upload</button>
                        </div>
                      </div>
                      <div className="file-upload-content">
                        <img className="file-upload-image" src="#" alt="your image" />
                        <div className="image-title-wrap">
                          <button type="button" onclick="removeUpload()" className="remove-image">Remove <span className="image-title">Uploaded Image</span></button>
                        </div>
                      </div>
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

export default AddWorkExperience