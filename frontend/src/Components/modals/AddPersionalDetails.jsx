import React from 'react'
import { useState } from 'react';
import { FaCirclePlus,FaRegTrashCan  } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';
import './modal.css'
import { FaArrowUp } from "react-icons/fa6";
import SideBar from './SideBar';
import { useForm } from 'react-hook-form';
const AddPersionalDetails = ({ handleShow, handleClose, show, setShow }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [priority, setPriority] = useState('low');
  const [showform,setShowform] = useState(true)
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();

  const formSubmit = async(data) =>{
    try {
        console.log(data)
      
    } catch (error) {
        console.log(error)

    }

  }
  const validateField = async (fieldName) => {
    await trigger(fieldName); // Trigger validation for the specified field
  };
 
   const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const todoSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Do not add empty todo
    const newTodo = {
      id: new Date().getTime(), // Unique ID for each todo
      text: inputValue,
      priority: priority // Add priority to todo object
    };
    setTodos([...todos, newTodo]); // Add new todo to the list
    setInputValue(''); // Clear input field
    setPriority('low');
    setShowform(false) // Reset priority to default
  };

  // Function to handle deleting a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
  };

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
              <h3>Persional Details</h3>
            </div>
            <form action="" className='forms'  onSubmit={handleSubmit(formSubmit)}>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label htmlFor="">Name</label><br />
                    <input type="text" placeholder='Enter your name'  {...register("name",{required:true})}   onBlur={() => validateField("name")} />  <br />
                    <span className="text-danger">   {errors.name?.type==="required" && "Name is required"}  </span>
                  </div>
                  <div className="col">
                    <label htmlFor="">Professional Email</label><br />
                    <input type="text" placeholder='Enter your Email' {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} onBlur={() => validateField("email")}/> <br />
                    <span className="text-danger">  {errors.email?.type==="required" && "Email is required"}
                {errors.email?.type==="pattern" && "Please enter valid format"}
                </span>

                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label htmlFor="">DOB</label><br />
                    <input type="date" placeholder='Enter your name' {...register("dob",{required:true})} onBlur={() => validateField("dob")}/> <br />
                    <span className="text-danger">   {errors.dob?.type==="required" && "dob is required"}  </span>

                  </div>
                  <div className="col">
                    <label htmlFor="">Persional Email</label><br />
                    <input type="text" placeholder='Enter your Email' />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-6">
                    <div className="head">
                      <h4>Profile Picture</h4>
                      <p>Max size 200px and file type jpg/png</p>
                    </div>
                    <div className="file-upload">
                      <div className="image-upload-wrap">
                        <input className="file-upload-input"  onChange={handleImageUpload}  type="file"  accept="image/*" />
                        {
                          image ? "" :<div className="drag-text">
                          <div>
                          <FaArrowUp className='imgIcon' />
                             <p>Drag and drop here</p>
                             <div className='uploadBtn'>Upload</div>
                          </div>
                           </div>
                        }
                        {image && (
        <div className="image-preview">
          <img src={image} alt="Uploaded" className='imageHeight' />
        </div>
      )}
                      </div>
                      <h1> {image ? image.name : ""}</h1>
                    </div>
                  
                  </div>
                  
                  <div className="col-6 align-self-center">
                    <div>
                      <label htmlFor="">Contact Number</label><br />
                      <input type="phone" placeholder='Enter your contact number'{...register("phone_no",{required:true,minLength:10,maxLength:10})} onBlur={() => validateField("phone_no")}/> <br />
                      <span className="text-danger">
                 {errors.phone_no?.type==="required" && "Phone  is required"}
                {errors.phone_no?.type==="minLength" && "Phone must be  10 character"}
                {errors.phone_no?.type==="maxLength" && "Phone must be  10 character"}
                 </span> <br />
                      <label htmlFor="" className='mt-3'>Alternate Contact Number</label><br />
                      <input type="phone" placeholder='Enter your alternate number' {...register("college_no",{required:true,minLength:10,maxLength:10})} onBlur={() => validateField("college_no")}/>
                      <br />
                      <span className="text-danger">
                 {errors.college_no?.type==="required" && "Alternate number  is required"}
                {errors.college_no?.type==="minLength" && "Alternate number must be  10 character"}
                {errors.college_no?.type==="maxLength" && "Alternate number must be  10 character"}
                 </span> <br />
                    </div>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-6">

                    <div className="gender mb-3">
                      <h4>Gender</h4>
                      <div className='genderBtn'>
                        <button>Male</button>
                        <button>Female</button>
                        <button>Rather not say</button>
                        <button>Others</button>
                      </div>
                    </div>
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
                  <div className="col-6 align-self-center">
                    <div>
                      <label htmlFor="">Current Address</label>
                      <select {...register("country",{required:true,minLength:10,maxLength:10})} onBlur={() => validateField("country")} placeholder="xyz">
                        <option selected value="0">Select Country</option>
                        <option value="1">India</option>
                        <option value="2">Japan</option>
                        <option value="3">China</option>
                      </select><br />
                      <span className="text-danger">
                 {errors.country?.type==="required" && "Alternate number  is required"}
                 </span>
                      <input type="phone" placeholder='Pincode..' className='mt-1' {...register("pincode",{required:true,minLength:10,maxLength:10})} onBlur={() => validateField("pincode")}/><br />
                      <span className="text-danger">
                 {errors.pincode?.type==="required" && "pincode is required"}
                 </span>
                      <select className='mt-1'>
                        <option selected value="0" >Select State</option>
                        <option value="1">UP</option>
                        <option value="2">Delhi</option>
                        <option value="3">HR</option>
                      </select>
                      <select className='mt-1'>
                        <option selected value="0" >Select City</option>
                        <option value="1">Lucknow</option>
                        <option value="2">Gurugram</option>
                        <option value="3">Pune</option>
                      </select>
                      <textarea  class="form-control mt-1 textareas" placeholder='Enter Address' id="exampleFormControlTextarea1" rows="3" {...register("address",{required:true,minLength:10,maxLength:10})} onBlur={() => validateField("address")}></textarea>
                      <br />
                      <span className="text-danger">
                 {errors.address?.type==="required" && "Address is required"}
                 </span>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <label htmlFor="">Profession</label><br />
                    <select>
                        <option selected value="0">Select Profession</option>
                        <option value="1">India</option>
                        <option value="2">Japan</option>
                        <option value="3">China</option>
                      </select>
                      <div>
                      <label className='mt-3'>About</label>
                      <textarea  class="form-control mt-1 textareas" placeholder='About' id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                  </div>
                  <div className="col">
                    <label htmlFor="">Instant Messaging</label>
                 
                    <br />
                      {
                          todos.map((t)=>{
                                   return(
                                    <ul key={t.id} className="todolistStyle">
                                     <div className="lineHeight d-flex">
                                     <li>{t.priority} -</li> 
                                      <a href='#' > {t.text.substring(0,20)}</a>
                                      <span className='mx-2'><FaRegTrashCan onClick={()=>deleteTodo(t.id)} /></span>
                                     </div>
                                    </ul>
                                   )
                          })
                        }
                      <div className='d-flex justify-content-center align-items-center'>
               {
                showform === true ? <>
                       <form action="" >
                     <div className='d-flex'> 
                     <select className='SmallSelect mt-1' value={priority} onChange={handlePriorityChange}>
                        <option selected value="wechat">WeChat</option>
                        <option value="linkedin">
                          linkedln
                        </option>
                        <option value="Facebook">facebook</option>
                        <option value="X">X</option>
                      </select>
                      <input type="text"  placeholder='Url' className='mt-1 smallInput'  value={inputValue}
          onChange={handleInputChange}/>
                      <button  onClick={todoSubmit} className='modalbtn'>
                      <FaCirclePlus className='mx-1 ' style={{fontSize:"24px",color:"#3BACB6",cursor:"pointer"}} />
                      </button>
                     </div>
                          <br />
                      
                     
                     
                      </form>
                </> :<button  onClick={()=>setShowform(true)} className='modalbtn'>
                       Addmore
                      </button>
               } 
                      </div>
                      <div className='d-flex mt-3'>
                      <select className='SmallSelect'>
                        <option selected value="0">WeChat</option>
                        <option value="1">India</option>
                        <option value="2">Japan</option>
                        <option value="3">China</option>
                      </select>
                      <input type="text"  placeholder='Url' className='mt-1 smallInput' />
                      </div>
                      </div>
          
                      
              
                 
                </div>
              </div>
              <div className="d-flex mt-2">
                <button className='SaveBtn'>Save and Continue</button>
                <img src="C:\Users\KuldeepGiri\Downloads\link-66.svg" alt="" />
              </div>
            </form>
          </div>
        </div>
      </Modal>

    </>
  )
}

export default AddPersionalDetails