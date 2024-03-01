import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../context/authContext';
import { NavLink, useNavigate } from 'react-router-dom';

const ChnagePassword = () => {
  const navigate = useNavigate()
    const [changePass,setChangePass] = useState('')
  const [auth] = useAuth()
  const token = auth?.token
    const formSubmit = async(e)=>{
        e.preventDefault();
  try {
    const config = axios.defaults.headers.common["Authorization"] = token;
     const {data} = await axios.put("http://localhost:4000/api/user/change-password",{changePass,config})
     if(data.success==true){
      alert("password change successfully")
      axios.put("http://localhost:4000/api/user/changepass",config)
      navigate("/")
     }else{
      alert("found error")
     }
  } catch (error) {
    alert("error")
  }
    }
  return (
    <div className='container'>
        <h1 className="mb-2">Change Password</h1>
        <form action="" onSubmit={formSubmit}>
            <input type="password" className="form-control w-50" value={changePass} name="changePass" onChange={(e)=>setChangePass(e.target.value)} placeholder='enter your new password' />
            <button className="btn btn-success mt-3">Save</button>
            <NavLink to="/" className="btn btn-danger mt-3 mx-2">Camcel</NavLink>
        </form>
    </div>
  )
}

export default ChnagePassword