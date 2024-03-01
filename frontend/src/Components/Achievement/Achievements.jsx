import React from 'react'
import { useData } from '../../context/dataContext'
import { FaRegTrashCan ,FaPen } from "react-icons/fa6";
const Achievements = () => {
    const {state} =useData()
  return (
    <div className='achievements'>
        <div className="container">
        <div className="heading">
                <div><h3>Academics</h3></div>
                <div><h3>+ Add More</h3></div>
            </div>
            {/* testscore */}
        <div className="services">
                <div className="row">
                  <div className="col-md-4">
                    <p className='ptext'>Test Score</p>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {
                        state?.testscore?.map((s)=>{
                          return(
                            <div className="col-12" key={s.id}>
                        <div className="box4">
                          <div className="d-flex justify-content-between">
                            <h4>{s.name}</h4>
                           
                          <div>
                          <button className='centerBtn'><FaPen /> </button>
                          <button className='centerBtn'><FaRegTrashCan /> </button>
                          </div>
                          </div>
                          <div>
                          <p>Total - {s.marks} %</p>
                          <p>ToRankstal - {s.rank} %</p>
                          </div>
                        </div>
                      </div>
                          )
                        })
                      }
                      <div className=''>
                         <button className='centerBtn'> <p style={{fontSize:"18px",color:"#3BACB6",fontWeight:"800"}}>+ Add Language</p> </button>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
{/* publications */}

<div className="services">
                <div className="row">
                  <div className="col-md-4">
                    <p className='ptext'>publications</p>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      {
                        state?.publications?.map((s)=>{
                          return(
                            <div className="col-12" key={s.id}>
                        <div className="box4">
                          <div className="d-flex justify-content-between">
                            <h4>{s.title}</h4>
                           
                          <div>
                          <button className='centerBtn'><FaPen /> </button>
                          <button className='centerBtn'><FaRegTrashCan /> </button>
                          </div>
                          </div>
                          <div>
                          <p>{s.publisher} </p>
                          <p>{s.date}</p>
                          <h4 className='mt-2'>Description</h4>
                          <p>{s.description}</p>
                          </div>
                        </div>
                      </div>
                          )
                        })
                      }
                      <div className=''>
                         <button className='centerBtn'> <p style={{fontSize:"18px",color:"#3BACB6",fontWeight:"800"}}>+ Add Publisher</p> </button>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
        </div>
    </div>
  )
}

export default Achievements