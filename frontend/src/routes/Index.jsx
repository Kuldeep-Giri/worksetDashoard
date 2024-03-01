import React from 'react'
import { Routes,Route,Navigate  } from 'react-router-dom'
import Register from '../pages/Register'
import Homepage from '../pages/HomePage'
import Login from '../pages/Login'
import ForgetPassword from '../pages/ForgetPassword'
import ResetPassword from '../pages/ResetPassword'
import ChnagePassword from '../pages/ChnagePassword'
import { useGetdata } from '../context/getDataContext'
import ImageContainer from '../ImageTestting'

const AllRoutes = () => {
  const {personalInfo} = useGetdata();
  var object =  personalInfo.length === 0?"" : personalInfo.results.reduce(
    (obj, item) => Object.assign(obj, { ["name"]: item.name }), {});
    const names = Object.keys(object).length === 0 ?"": object.name
    const slug = names.toLowerCase().replace(/\s+/g, '-');
console.log(slug);
console.log(object.name)
  return (
    <div>
   <Routes>
   
   <Route path={`/${slug}`} element={<Homepage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/img-test' element={<ImageContainer/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forget-password' element={<ForgetPassword/>}/>
    <Route path='/reset-password' element={<ResetPassword/>}/>
    <Route path='/change-password' element={<ChnagePassword/>}/>
    <Route path="/" element={<Navigate to={`/${slug}`} />} />
   </Routes>
    </div>
  )
}

export default AllRoutes