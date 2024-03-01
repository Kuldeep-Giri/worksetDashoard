import React, { useState } from 'react'
import axios from 'axios';
import { NavLink,useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { saveAs } from 'file-saver';
const Login = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();
   const [users,setUsers] = useState({
    username:"",
    password:""
   });
   const handleChange = (e)=>{
    setUsers({...users,
        [e.target.name]:e.target.value}
        )
}
const SubmitForm= async(e)=>{
e.preventDefault()
try {
   
  if(users.username === ""  || users.password === ""){
        alert("password and username required")
  }else{
    const {data} = await axios.post("http://localhost:4000/api/user/login",users)
    if(data.success ===true){
      localStorage.setItem("auth",JSON.stringify(data))
      alert(data.message)
      const logData = {
        userId: data.users.id,
        username: data.users.name,
        status:data.success,
        component:"Login",
        section:"Login",
        action:"undefine",
        timestamp: new Date().toLocaleString()
      };
      await axios.post("http://localhost:4000/api/user/log-data", logData);
    if(data.users.changepass == 1){
        navigate("/")
      }else{
        navigate("/change-password")
       }
    }else{
     console.log("login failed")
    }
  }
  
} catch (error) {
    console.log(error)
    alert("enter valid credential")
}
}
  return (
    <div className='register'>
     
        <div className="container">
        <form className="form w-50 mt-5" onSubmit={SubmitForm}>
           <h1 className="mt-3 text-center" >SignUp</h1>
            <input type="text" className="form-control mt-2" name='username' value={users.username} onChange={handleChange} placeholder='enter username'/>    
            <input type="password" className="form-control mt-2" name='password' value={users.password } onChange={handleChange} placeholder='enter password'/>
      
           <button  className="btn btn-success mt-2">Login</button> 
        </form>
        <NavLink to="/forget-password">forget Password</NavLink>
        <NavLink to="/register">Are you new user? sigUn</NavLink>
        </div>
    </div>
  )
}

export default Login