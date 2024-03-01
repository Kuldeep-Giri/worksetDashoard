import React, { useState } from 'react'
import LeftBar from '../Components/leftBar/LeftBar'
import Center from '../Components/centersection/Center'
import RightBar from '../Components/Rightbar/RightBar'


const Homepage = () => {
    const [rightbar,setRightbar] = useState(false)
  return (
    <div className='d-flex justify-content-between'>
    <LeftBar  rightbar={rightbar} setRightbar={setRightbar} />
    <Center   rightbar={rightbar} setRightbar={setRightbar}/>
    <RightBar  rightbar={rightbar} setRightbar={setRightbar}/>
  </div>
  )
}

export default Homepage