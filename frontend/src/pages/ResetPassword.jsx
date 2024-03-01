import axios from 'axios'
import React, { useState } from 'react'

const ResetPassword = () => {

    const [newPasssword,setNewPassword] = useState("")
    const [token,setToken] = useState("")
    const SubmitForm= async(e)=>{
        e.preventDefault()
        try {
            const reset_token = localStorage.getItem("resetToken")
           const {data} = await axios.post(`http://localhost:4000/api/user/reset-password`,{newPasssword,token:reset_token})
           alert("resetLink sent on your email")
           localStorage.setItem("resetToken",data.token)
        } catch (error) {
            console.log(error)
        }
        }
  return (
    <>
     <form className="form w-50 mt-5" onSubmit={SubmitForm}>
           <h1 className="mt-3 text-center" >Reset new Password</h1>
            <input type="password" className="form-control mt-2" name='newPasssword' value={newPasssword} onChange={(e)=>setNewPassword(e.target.value)} placeholder='enter new password'/>
      
           <button  className="btn btn-success mt-2">change Passowrd</button> 
        </form>
    </>
  )
}

export default ResetPassword