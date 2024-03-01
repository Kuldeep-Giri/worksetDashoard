import React from 'react'
import { useData } from '../../context/dataContext'
import { FaRegTrashCan ,FaPen } from "react-icons/fa6";
const Testimonials = () => {
    const{state} = useData();
  return (
    <div className='testimonials'>
          <div className="heading">
                <div><h3>Testimonials</h3></div>
                <div><h3>+ Add More</h3></div>
            </div>
        <div className="row mt-5">
           {
            state?.testimonials?.map((t)=>{
                return(
                    <div className="col-md-12 d-flex justify-content-between" key={t.id}>
                     <div className='d-flex'>
                     <img src="images/img2.png" alt="ff" className='img-fluid' />
                     <button className='centerBtn'><FaRegTrashCan /> </button>
                     </div>
                     <div className='centerText'>
                      <h4>{t.witness}</h4>
                      <h6>{t.representative}</h6>
                      <p>{t.testimony}</p>
                     </div>
                     <div>
                          <button className='centerBtn'><FaPen /> </button>
                          <button className='centerBtn'><FaRegTrashCan /> </button>
                          </div>
                    </div>
                )
            })

           }
        </div>
    </div>
  )
}

export default Testimonials