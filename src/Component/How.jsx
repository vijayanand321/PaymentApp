import React, { useState } from 'react';
import workApi from '../Api/WorkApi';

const How = () => {

    const [workData ,setWorkData] =useState(workApi);
    
  return (
    <>
     <section >
       <div className="work-container container">
          <h1 className='main-heading text-center'>How Does It Work</h1>
          <div className="row">
            {workData.map((curElem)=>{
                return <>
                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                <i className={`fontawesome-style ${curElem.logo}`}></i>
                <h2 className='sub-heading'>{curElem.title}</h2>
                <p className='main-hero-para w-100 '>{curElem.info}</p>
            </div>
                </>
            })}
          </div>
       </div>
     </section>
    </>
  )
}

export default How